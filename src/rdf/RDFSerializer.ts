import {
    DataSerializer,
    Serializable,
    Constructor,
    DataSerializerConfig,
    SerializableObjectOptions,
    ObjectMemberMetadata,
    DataSerializerUtils,
} from '@openhps/core';
import { ChangeLogType, InternalRDFSerializer } from './InternalRDFSerializer';
import { InternalRDFDeserializer } from './InternalRDFDeserializer';
import { IriString, Thing, Subject, RDFSerializerConfig, SubjectPredicates } from './types';
import {
    NamedNode,
    BlankNode,
    Store,
    Quad_Predicate,
    Quad_Subject,
    Quad_Object,
    Literal,
    DataFactory,
    Quad,
    Writer,
    Parser,
} from 'n3';
import type { WriterOptions as N3WriterOptions } from 'n3';
import { namespaces } from '../namespaces';
import { rdf } from '../vocab';
import { RDFIdentifierOptions } from '../decorators';
import { RdfXmlParser } from 'rdfxml-streaming-parser';

export class RDFSerializer extends DataSerializer {
    protected static readonly knownRDFTypes: Map<IriString, string[]> = new Map();

    static {
        this.eventEmitter.on(
            'updateSerializableObject',
            <T>(_: Serializable<T>, options: SerializableObjectOptions<T>) => {
                if (options && options.rdf && options.rdf.type) {
                    options.rdf.predicates = options.rdf.predicates || {};
                    const types = options.rdf.predicates[rdf.type] || [];
                    types.push(...(Array.isArray(options.rdf.type) ? options.rdf.type : [options.rdf.type]));
                    options.rdf.predicates[rdf.type] = types;
                }
            },
        );
        this.eventEmitter.on('registerType', <T>(type: Serializable<T>) => {
            RDFSerializer.registerRDFType(type);
        });
    }

    protected static options: DataSerializerConfig = {
        serializer: new InternalRDFSerializer(),
        deserializer: new InternalRDFDeserializer(),
    };

    static registerRDFType<T>(type: Serializable<T>, options?: MappedRDFTypeConverters<T>): void {
        // Map RDF types
        const meta = DataSerializerUtils.getOwnMetadata(type);
        if (!meta.options || !meta.options.rdf) {
            return;
        }
        const rdfOptions = meta.options.rdf;
        if (options) {
            rdfOptions.serializer = options.serializer;
            rdfOptions.deserializer = options.deserializer;
        }
        if (rdfOptions.predicates) {
            Object.entries(rdfOptions.predicates)
                .filter(([k]) => k === rdf.type)
                .map(([, v]) => v.flat())
                .flat()
                .forEach((typeIri: IriString) => {
                    const results = this.knownRDFTypes.get(typeIri) ?? [];
                    if (!results.includes(type.name)) results.push(type.name);
                    this.knownRDFTypes.set(typeIri, results);
                });
        }
    }

    static initialize(module: string): void {
        if (module === 'rf') {
            import('../mapping/rf');
        }
        if (module === 'geospatial') {
            import('../mapping/geospatial');
        }
        if (module === 'fingerprinting') {
            import('../mapping/fingerprinting');
        }
        if (module === 'video') {
            import('../mapping/video');
        }
    }

    /**
     * Serialize an object to an URI
     * @param {any} data Data to serialize to an URI
     * @param {string} baseUri Base URI
     * @returns {string} Resource URI
     */
    static serializeToUri<T>(data: T, baseUri?: IriString): IriString {
        const identifierMember = this.getUriMetadata(data.constructor);
        let uri: string = undefined;
        if (identifierMember) {
            const rdfOptions = identifierMember.options.rdf as RDFIdentifierOptions;
            uri = rdfOptions.serializer
                ? rdfOptions.serializer((data as any)[identifierMember.key] as string, data.constructor)
                : ((data as any)[identifierMember.key] as string);
        }
        uri = uri && !uri.startsWith('http') && baseUri ? baseUri + uri : DataFactory.blankNode(uri).value;
        return uri as IriString;
    }

    /**
     * Serialize data
     * @param {any} data Data to serialize
     * @param {RDFSerializerConfig} [config] RDF serializer configuration
     * @returns {Thing} Serialized data
     */
    static serialize<T>(data: T, config?: RDFSerializerConfig): Thing {
        return super.serialize(data, {
            rdf: {
                baseUri: config ? config.baseUri : undefined,
            },
            ...this.options,
        } as any);
    }

    /**
     * Serialize data to changelog
     * @param {any} data Data to serialize
     * @param {RDFSerializerConfig} [config] RDF serializer configuration
     * @returns {Thing} Serialized data
     */
    static serializeToChangeLog<T>(data: T, config?: RDFSerializerConfig): { additions?: Quad[]; deletions?: Quad[] } {
        const additions = super.serialize(data, {
            rdf: {
                baseUri: config ? config.baseUri : undefined,
            },
            ...this.options,
            blankNodeCounter: 1,
            changelog: ChangeLogType.ADDITIONS,
        } as any);
        const deletions = super.serialize(data, {
            rdf: {
                baseUri: config ? config.baseUri : undefined,
            },
            ...this.options,
            blankNodeCounter: 1,
            changelog: ChangeLogType.DELETIONS,
        } as any);
        const additionsQuads = this.thingToQuads(additions);
        const deletionsQuads = deletions ? this.thingToQuads(deletions) : [];
        // Remove the unchanged quads froom the deletions and additions
        const filteredAdditions = additionsQuads.filter(
            (addition) => !deletionsQuads.some((deletion) => deletion.equals(addition)),
        );
        const filteredDeletions = deletionsQuads.filter(
            (deletion) => !additionsQuads.some((addition) => addition.equals(deletion)),
        );
        return {
            additions: filteredAdditions,
            deletions: filteredDeletions,
        };
    }

    static deserializeFromString<T>(subject: IriString, input: string, contentType: string = 'text/turtle'): T {
        let quads: Quad[] = [];
        if (contentType.includes('application/rdf+xml') || input.startsWith('<?xml version=')) {
            const parser = new RdfXmlParser({
                baseIRI: subject,
            });
            parser.on('data', (data: Quad) => {
                quads.push(data);
            });
            parser.on('error', (err) => {
                throw new Error('An error occured during RDF parsing: ' + err);
            });
            parser.write(input);
            parser.end();
        } else {
            const mimetype = contentType.substring(0, contentType.indexOf(';'));
            const parser = new Parser({
                format: mimetype,
            });
            quads = parser.parse(input);
        }
        if (subject) {
            const subjectUri = new URL(subject);
            subjectUri.hash = '';
            const containerUri = new URL(subjectUri.href.slice(0, subjectUri.href.lastIndexOf('/') + 1));
            quads = quads.map((quad) => {
                let subject = quad.subject;
                let predicate = quad.predicate;
                let object = quad.object;
                if (subject.termType === 'NamedNode' && subject.value.startsWith('#')) {
                    subject = DataFactory.namedNode(new URL(subject.value, subjectUri).href);
                } else if (subject.termType === 'NamedNode' && !subject.value.startsWith('http')) {
                    subject = DataFactory.namedNode(new URL(subject.value, containerUri).href);
                }
                if (predicate.termType === 'NamedNode' && predicate.value.startsWith('#')) {
                    predicate = DataFactory.namedNode(new URL(predicate.value, subjectUri).href);
                } else if (subject.termType === 'NamedNode' && !subject.value.startsWith('http')) {
                    predicate = DataFactory.namedNode(new URL(predicate.value, containerUri).href);
                }
                if (object.termType === 'NamedNode' && object.value.startsWith('#')) {
                    object = DataFactory.namedNode(new URL(object.value, subjectUri).href);
                } else if (object.termType === 'NamedNode' && !object.value.startsWith('http')) {
                    object = DataFactory.namedNode(new URL(object.value, containerUri).href);
                }
                return DataFactory.quad(subject, predicate, object);
            });
        }
        const store = new Store(quads);
        return this.deserializeFromStore(
            subject ? DataFactory.namedNode(subject) : DataFactory.blankNode(quads[0].subject.value),
            store,
        );
    }

    static deserializeFromStore<T>(subject: NamedNode | BlankNode, store: Store): T {
        const processedSubjects: string[] = [];
        /**
         * @param {NamedNode | BlankNode} subject Subject of quad
         * @param {Store} store Quad store
         * @returns {Thing} Thing from quads
         */
        function quadsToThing(subject: NamedNode | BlankNode, store: Store): Thing {
            if (processedSubjects.includes(subject.value)) {
                return {
                    termType: subject.termType,
                    value: subject.value,
                    predicates: {},
                };
            }
            processedSubjects.push(subject.value);
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
        subject = subject ?? (store.getQuads(null, null, null, null)[0].subject as NamedNode | BlankNode);
        const thing = quadsToThing(subject, store);
        return this.deserialize(thing);
    }

    static serializeToSubjects<T>(data: T, baseUri?: IriString): Subject[] {
        const quads: Quad[] = RDFSerializer.serializeToQuads(data, baseUri);
        const store = new Store(quads);
        const quadSubjects: Quad_Subject[] = store.getSubjects(null, null, null);
        /**
         * @param {Quad_Subject} quadSubject Quad subject
         * @returns {any} Predicates
         */
        function serializePredicates(quadSubject: Quad_Subject) {
            const quadPredicates: Quad_Predicate[] = store.getPredicates(quadSubject, null, null);
            return quadPredicates
                .map((quadPredicate) => {
                    const quadObjects: Quad_Object[] = store.getObjects(quadSubject, quadPredicate, null);
                    const literals: Record<string, string[]> = quadObjects
                        .filter((obj) => obj instanceof Literal)
                        .filter((obj: Literal) => obj.language === '')
                        .map((obj: Literal) => ({ [obj.datatype.value]: [obj.value] }))
                        .reduce((a, b) => ({ ...a, ...b }), {});
                    const langStrings: Record<string, string[]> = quadObjects
                        .filter((obj) => obj instanceof Literal)
                        .filter((obj: Literal) => obj.language !== '')
                        .map((obj: Literal) => ({ [obj.language]: [obj.value] }))
                        .reduce((a, b) => ({ ...a, ...b }), {});
                    const namedNodes: Array<string> = quadObjects
                        .filter((obj) => obj instanceof NamedNode)
                        .map((obj) => obj.value);
                    const blankNodes: Array<any | string> = quadObjects
                        .filter((obj) => obj instanceof BlankNode)
                        .map((obj: BlankNode) => serializePredicates(DataFactory.blankNode(obj.value)));
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
            .filter((quadSubject) => quadSubject instanceof NamedNode)
            .map((quadSubject) => {
                return {
                    type: 'Subject',
                    url: quadSubject.value,
                    predicates: serializePredicates(quadSubject),
                };
            });
        return subjects;
    }

    static serializeToQuads<T>(data: T, baseUri?: IriString): Quad[] {
        const thing =
            (data as any)['predicates'] !== undefined ? (data as unknown as Thing) : this.serialize(data, { baseUri });
        if (!thing) {
            return [];
        }
        return this.thingToQuads(thing);
    }

    protected static thingToQuads(thing: Thing): Quad[] {
        const subject =
            thing.termType === 'BlankNode' ? DataFactory.blankNode(thing.value) : DataFactory.namedNode(thing.value);
        return Object.keys(thing.predicates)
            .map((predicateIri) => {
                const predicate = DataFactory.namedNode(predicateIri);
                return thing.predicates[predicateIri].map((object) => {
                    if (!object) {
                        // Object is undefined
                        return [];
                    }
                    if (
                        (object as any)['predicates'] !== undefined &&
                        Object.values((object as any)['predicates']).length > 0
                    ) {
                        const quads = this.thingToQuads(object as Thing);
                        return [DataFactory.quad(subject, predicate, quads[0].subject), ...quads];
                    } else {
                        return [DataFactory.quad(subject, predicate, object as Quad_Object)];
                    }
                });
            })
            .flat()
            .flat();
    }

    /**
     * Stringify a thing to RDF graph construct
     * @param {Thing | Store} thing Thing to serialize
     * @param {WriterOptions} [options] Writer options
     * @returns {Promise<string>} Promise of a stringified graph
     */
    static async stringify(thing: Thing | Store | any, options: WriterOptions = {}): Promise<string> {
        return new Promise((resolve, reject) => {
            let store: Store;
            let quads: Quad[];

            if (thing instanceof Store) {
                store = thing;
                quads = store.getQuads(null, null, null, null);
            } else {
                quads = this.serializeToQuads(thing, options.baseUri);
                store = new Store(quads);
            }

            // Filter the prefixes to only include prefixes used
            const prefixes: Record<string, string> = {
                xsd: 'http://www.w3.org/2001/XMLSchema#',
                ...namespaces,
            };
            if (options.baseUri) {
                prefixes[''] = options.baseUri;
            }
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
                        ? quad.object.value
                        : quad.object.termType === 'Literal'
                          ? quad.object.datatype.value
                          : '',
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
            const writer = new Writer(options);
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

    private static writeBlankNode(writer: Writer, object: Quad_Object, store: Store): BlankNode {
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

    static deserializeFromSubject<T>(subject: Subject & { url: IriString }): T {
        return this.deserializeFromSubjects(subject.url, [subject]);
    }

    static deserializeFromSubjects<T>(subject: IriString, subjects: Subject[]): T {
        const mainSubject = subjects.find((s) => s.url === subject);
        /**
         *
         * @param subjectQuad
         * @param subjectPredicates
         */
        function deserializeToQuads(subjectQuad: Quad_Subject, subjectPredicates: SubjectPredicates): Quad[] {
            const quads: Quad[] = [];
            Object.keys(subjectPredicates).forEach((key) => {
                const predicateQuad = DataFactory.namedNode(key);
                const predicates = subjectPredicates[key];
                // Literals
                if (predicates.literals) {
                    Object.keys(predicates.literals).forEach((dataType) => {
                        const value = predicates.literals[dataType];
                        const dataTypeQuad = DataFactory.namedNode(dataType);
                        quads.push(
                            DataFactory.quad(subjectQuad, predicateQuad, DataFactory.literal(value, dataTypeQuad)),
                        );
                    });
                }
                // Language strings
                if (predicates.langStrings) {
                    Object.keys(predicates.langStrings).forEach((language) => {
                        const value = predicates.langStrings[language];
                        quads.push(DataFactory.quad(subjectQuad, predicateQuad, DataFactory.literal(value, language)));
                    });
                }
                // Named nodes
                if (predicates.namedNodes) {
                    predicates.namedNodes.forEach((namedNode) => {
                        const otherSubject = subjects.find((s) => s.url === namedNode);
                        quads.push(DataFactory.quad(subjectQuad, predicateQuad, DataFactory.namedNode(namedNode)));
                        if (otherSubject) {
                            quads.push(
                                ...deserializeToQuads(DataFactory.namedNode(otherSubject.url), otherSubject.predicates),
                            );
                        }
                    });
                }
                // Blank nodes
                if (predicates.blankNodes) {
                    predicates.blankNodes.forEach((predicates) => {
                        const blankNode = DataFactory.blankNode();
                        quads.push(DataFactory.quad(subjectQuad, predicateQuad, blankNode));
                        quads.push(...deserializeToQuads(blankNode, predicates));
                    });
                }
            });
            return quads;
        }
        const quads = deserializeToQuads(DataFactory.namedNode(mainSubject.url), mainSubject.predicates);
        return this.deserializeFromStore(DataFactory.namedNode(subject), new Store(quads));
    }

    static deserialize<T>(serializedData: Thing, dataType?: Serializable<T>): T;
    static deserialize<T>(serializedData: any[], dataType?: Serializable<T>): T | T[];
    /**
     * Deserialize data
     * @param {any} serializedData Data to deserialze
     * @param {Serializable} dataType Optional data type to specify deserialization type
     * @returns {any} Deserialized object
     */
    static deserialize<T>(serializedData: any, dataType?: Serializable<T>): T | T[] {
        if (serializedData['predicates'] === undefined) {
            return super.deserialize(serializedData, dataType as Constructor<T>);
        }
        const deserializer = new InternalRDFDeserializer();
        const finalType = dataType ?? deserializer.rdfTypeResolver(serializedData, this.knownTypes, this.knownRDFTypes);
        if (finalType === Object) {
            return serializedData as unknown as T;
        } else if (finalType === undefined) {
            return undefined;
        }
        return deserializer.convertSingleValue(
            serializedData,
            DataSerializerUtils.ensureTypeDescriptor(finalType),
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
        const metadata = DataSerializerUtils.getOwnMetadata(dataType);
        const rootMetadata = DataSerializerUtils.getRootMetadata(dataType);

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
            uri = uri && !uri.startsWith('http') && baseUri ? baseUri + uri : DataFactory.blankNode(uri).value;
            return uri as IriString;
        } else {
            return baseUri;
        }
    }
}

export interface WriterOptions extends N3WriterOptions {
    baseUri?: IriString;
    /**
     * Pretty print the output. Merge blank nodes in the [] notation.
     * @default false
     */
    prettyPrint?: boolean;
}

export interface MappedRDFTypeConverters<T> {
    /**
     * Custom (partial) serializer for this object.
     */
    serializer?: (object: T, baseUri?: IriString) => Partial<Thing> | Quad_Object;
    /**
     * Custom (partial) deserializer for this object.
     */
    deserializer?: (thing: Thing, instance?: T) => T;
}
