import {
    DataSerializer,
    Serializable,
    Constructor,
    DataSerializerConfig,
    SerializableObjectOptions,
    ObjectMemberMetadata,
} from '@openhps/core';
import { InternalRDFSerializer } from './InternalRDFSerializer';
import { InternalRDFDeserializer } from './InternalRDFDeserializer';
import { IriString, Thing, Subject } from './types';
import * as N3 from 'n3';
import { WriterOptions as N3WriterOptions } from 'n3';
import { namespaces } from '../namespaces';
import { rdf } from '../vocab';
import { RDFIdentifierOptions } from '../decorators';

export class RDFSerializer extends DataSerializer {
    protected static readonly knownRDFTypes: Map<IriString, string[]> = new Map();

    static {
        this.eventEmitter.on(
            'updateSerializableObject',
            <T>(_: Serializable<T>, options: SerializableObjectOptions<T>) => {
                if (options && options.rdf && options.rdf.type) {
                    options.rdf.predicates = options.rdf.predicates || {};
                    const types = options.rdf.predicates[rdf.type] || [];
                    types.push(options.rdf.type);
                    options.rdf.predicates[rdf.type] = types;
                }
            },
        );
        this.eventEmitter.on('registerType', <T>(type: Serializable<T>) => {
            RDFSerializer.registerRDFType(type);
        });
    }

    protected static get options(): DataSerializerConfig {
        return {
            serializer: new InternalRDFSerializer(),
            deserializer: new InternalRDFDeserializer(),
        };
    }

    protected static registerRDFType<T>(type: Serializable<T>): void {
        // Map RDF types
        const meta = this.getMetadata(type);
        if (!meta.options || !meta.options.rdf) {
            return;
        }
        const rdfOptions = meta.options.rdf;
        if (rdfOptions.predicates) {
            Object.entries(rdfOptions.predicates)
                .filter(([k, _]) => k === rdf.type)
                .map(([_, v]) => v.flat())
                .flat()
                .forEach((typeIri: IriString) => {
                    const results = this.knownRDFTypes.get(typeIri) ?? [];
                    results.push(type.name);
                    this.knownRDFTypes.set(typeIri, results);
                });
        }
    }

    /**
     * Serialize data
     *
     * @param {any} data Data to serialize
     * @param baseUri
     * @returns {Thing} Serialized data
     */
    static serialize<T>(data: T, baseUri?: IriString): Thing {
        return super.serialize(data, {
            rdf: {
                baseUri,
            },
            ...this.options,
        } as any);
    }

    static deserializeFromStore<T>(subject: N3.NamedNode | N3.BlankNode, store: N3.Store): T {
        /**
         * @param subject
         * @param store
         */
        function quadsToThing(subject: N3.NamedNode | N3.BlankNode, store: N3.Store): Thing {
            return {
                termType: subject.termType,
                value: subject.value,
                predicates: {
                    ...store
                        .getPredicates(subject, null, null)
                        .map((predicate) => {
                            return {
                                [predicate.value]: store.getObjects(subject, predicate, null).map((object) => {
                                    if (
                                        object.constructor.name === 'BlankNode' ||
                                        object.constructor.name === 'NamedNode'
                                    ) {
                                        return quadsToThing(object as any, store);
                                    } else {
                                        return object;
                                    }
                                }),
                            };
                        })
                        .reduce((a, b) => ({ ...a, ...b }), {}),
                },
            };
        }
        const thing = quadsToThing(subject, store);
        return this.deserialize(thing);
    }

    static serializeToSubjects<T>(data: T, baseUri?: IriString): Subject[] {
        const quads: N3.Quad[] = RDFSerializer.serializeToQuads(data, baseUri);
        const store = new N3.Store(quads);
        const quadSubjects: N3.Quad_Subject[] = store.getSubjects(null, null, null);
        /**
         *
         * @param quadSubject
         */
        function serializePredicates(quadSubject: N3.Quad_Subject) {
            const quadPredicates: N3.Quad_Predicate[] = store.getPredicates(quadSubject, null, null);
            return quadPredicates
                .map((quadPredicate) => {
                    const quadObjects: N3.Quad_Object[] = store.getObjects(quadSubject, quadPredicate, null);
                    const literals: Record<string, string[]> = quadObjects
                        .filter((obj) => obj instanceof N3.Literal)
                        .filter((obj: N3.Literal) => obj.language === '')
                        .map((obj: N3.Literal) => ({ [obj.datatype.value]: [obj.value] }))
                        .reduce((a, b) => ({ ...a, ...b }), {});
                    const langStrings: Record<string, string[]> = quadObjects
                        .filter((obj) => obj instanceof N3.Literal)
                        .filter((obj: N3.Literal) => obj.language !== '')
                        .map((obj: N3.Literal) => ({ [obj.language]: [obj.value] }))
                        .reduce((a, b) => ({ ...a, ...b }), {});
                    const namedNodes: Array<string> = quadObjects
                        .filter((obj) => obj instanceof N3.NamedNode)
                        .map((obj) => obj.value);
                    const blankNodes: Array<any | string> = quadObjects
                        .filter((obj) => obj instanceof N3.BlankNode)
                        .map((obj: N3.BlankNode) => serializePredicates(N3.DataFactory.blankNode(obj.value)));
                    return {
                        [quadPredicate.value]: {
                            namedNodes,
                            blankNodes,
                            literals,
                            langStrings,
                        },
                    };
                })
                .reduce((a, b) => ({ ...a, ...b }), {});
        }
        const subjects: Subject[] = quadSubjects
            .filter((quadSubject) => quadSubject instanceof N3.NamedNode)
            .map((quadSubject) => {
                return {
                    type: 'Subject',
                    url: quadSubject.value,
                    predicates: serializePredicates(quadSubject),
                };
            });
        return subjects;
    }

    static serializeToQuads<T>(data: T, baseUri?: IriString): N3.Quad[] {
        const thing =
            (data as any)['predicates'] !== undefined ? (data as unknown as Thing) : this.serialize(data, baseUri);
        const subject =
            thing.termType === 'BlankNode'
                ? N3.DataFactory.blankNode(thing.value)
                : N3.DataFactory.namedNode(thing.value);
        return Object.keys(thing.predicates)
            .map((predicateIri) => {
                const predicate = N3.DataFactory.namedNode(predicateIri);
                return thing.predicates[predicateIri].map((object) => {
                    if ((object as any)['predicates'] !== undefined) {
                        return [
                            N3.DataFactory.quad(subject, predicate, object as N3.Quad_Object),
                            ...this.serializeToQuads(object as Thing),
                        ];
                    } else {
                        return [N3.DataFactory.quad(subject, predicate, object as N3.Quad_Object)];
                    }
                });
            })
            .flat()
            .flat();
    }

    /**
     * Stringify a thing to RDF graph construct
     *
     * @param {Thing | N3.Store} thing Thing to serialize
     * @param {WriterOptions} [options] Writer options
     * @returns {Promise<string>} Promise of a stringified graph
     */
    static async stringify(thing: Thing | N3.Store | any, options: WriterOptions = {}): Promise<string> {
        return new Promise((resolve, reject) => {
            let store: N3.Store;
            let quads: N3.Quad[];

            if (thing instanceof N3.Store) {
                store = thing;
                quads = store.getQuads(null, null, null, null);
            } else {
                quads = this.serializeToQuads(thing, options.baseUri);
                store = new N3.Store(quads);
            }

            // Filter the prefixes to only include prefixes used
            const prefixes: Record<string, string> = {
                xsd: 'http://www.w3.org/2001/XMLSchema#',
                ...namespaces,
            };
            const ns = Object.keys(prefixes)
                .map((k) => {
                    return { [prefixes[k]]: k };
                })
                .reduce((a, b) => {
                    return { ...a, ...b };
                });
            const filteredPrefixes: Record<string, string> = {};
            quads.map((quad) => {
                const usedNamespacesInQuad = [
                    quad.subject.value,
                    quad.predicate.value,
                    quad.object.termType === 'NamedNode'
                        ? quad.object.termType
                        : quad.object.termType === 'Literal'
                        ? quad.object.datatype.value
                        : quad.object.value,
                ];
                usedNamespacesInQuad.map((namespace) => {
                    Object.keys(ns).forEach((n) => {
                        if (namespace.includes(n)) {
                            filteredPrefixes[(ns as any)[n]] = n;
                        }
                    });
                });
            });
            options.prefixes = {
                ...filteredPrefixes,
                ...options.prefixes,
            };
            const writer = new N3.Writer(options);
            if (options.prettyPrint) {
                store.getSubjects(null, null, null).forEach((subject) => {
                    if (subject.termType === 'BlankNode') {
                        // Ignore blank nodes
                        return;
                    } else {
                        store.getPredicates(subject, null, null).forEach((predicate) => {
                            store.getObjects(subject, predicate, null).forEach((object) => {
                                if (object.termType === 'BlankNode') {
                                    writer.addQuad(subject, predicate, this.writeBlankNode(writer, object, store));
                                } else {
                                    writer.addQuad(subject, predicate, object);
                                }
                            });
                        });
                    }
                });
            } else {
                writer.addQuads(quads);
            }
            writer.end((err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    private static writeBlankNode(writer: N3.Writer, object: N3.Quad_Object, store: N3.Store): N3.BlankNode {
        const blankNodePredicates = store.getPredicates(object, null, null);
        return writer.blank(
            blankNodePredicates
                .map((predicate) => {
                    const blankNodeObjects = store.getObjects(object, predicate, null);
                    return blankNodeObjects.map((object) => {
                        if (object.termType === 'BlankNode') {
                            return {
                                predicate,
                                object: this.writeBlankNode(writer, object, store),
                            };
                        } else {
                            return {
                                predicate,
                                object,
                            };
                        }
                    });
                })
                .flat(),
        );
    }

    static deserialize<T>(serializedData: Thing, dataType?: Constructor<T>): T;
    static deserialize<T>(serializedData: any[], dataType?: Constructor<T>): T | T[];
    /**
     * Deserialize data
     *
     * @param serializedData Data to deserialze
     * @param dataType Optional data type to specify deserialization type
     */
    static deserialize<T>(serializedData: any, dataType?: Constructor<T>): T | T[] {
        if (serializedData['predicates'] === undefined) {
            return super.deserialize(serializedData, dataType);
        }
        const deserializer = new InternalRDFDeserializer();
        const finalType = dataType ?? deserializer.rdfTypeResolver(serializedData, this.knownTypes, this.knownRDFTypes);
        if (finalType === Object) {
            return serializedData as unknown as T;
        }
        return deserializer.convertSingleValue(
            serializedData,
            this.ensureTypeDescriptor(finalType),
            this.knownTypes,
            undefined,
            undefined,
            {
                rdf: {
                    knownTypes: this.knownRDFTypes,
                },
            },
        );
    }

    static getUriMetadata<T>(dataType: Serializable<T>): ObjectMemberMetadata {
        // Get metadata
        const metadata = DataSerializer.getMetadata(dataType);
        const rootMetadata = DataSerializer.getRootMetadata(dataType);

        const options =
            metadata.options && metadata.options.rdf
                ? metadata.options.rdf
                : rootMetadata.options && rootMetadata.options.rdf
                ? rootMetadata.options.rdf
                : undefined;

        if (!options) {
            return undefined;
        }

        const identifierMember = Array.from(metadata.dataMembers.values()).filter((member) => {
            return (
                member &&
                member.options &&
                member.options.rdf &&
                (member.options.rdf as RDFIdentifierOptions).identifier
            );
        })[0];
        return identifierMember;
    }

    static normalizeUri<T>(dataType: Serializable<T>, identifier: any, baseUri: IriString): IriString {
        const identifierMember = this.getUriMetadata(dataType);
        let uri: string = undefined;
        if (identifierMember) {
            const rdfOptions = identifierMember.options.rdf as RDFIdentifierOptions;
            uri = rdfOptions.serializer ? rdfOptions.serializer(identifier, dataType) : identifier;
            uri = uri && !uri.startsWith('http') && baseUri ? baseUri + uri : N3.DataFactory.blankNode(uri).value;
        } else {
            return baseUri;
        }
    }
}

export interface WriterOptions extends N3WriterOptions {
    baseUri?: IriString;
    /**
     * Pretty print the output. Merge blank nodes in the [] notation.
     *
     * @default false
     */
    prettyPrint?: boolean;
}
