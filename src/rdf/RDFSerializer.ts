import {
    DataSerializer,
    Serializable,
    MappedTypeConverters,
    Constructor,
    DataSerializerConfig,
    SerializableObjectOptions,
} from '@openhps/core';
import { InternalRDFSerializer } from './InternalRDFSerializer';
import { InternalRDFDeserializer } from './InternalRDFDeserializer';
import { IriString, Thing } from './types';
import * as N3 from 'n3';
import namespaces from '../namespaces';
import { rdf } from '../vocab';

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
        this.eventEmitter.on('registerType', <T>(type: Serializable<T>, converters?: MappedTypeConverters<T>) => {
            RDFSerializer.registerRDFType(type, converters);
        });
    }

    protected static get options(): DataSerializerConfig {
        return {
            serializer: new InternalRDFSerializer(),
            deserializer: new InternalRDFDeserializer(),
        };
    }

    protected static registerRDFType<T>(type: Serializable<T>, converters?: MappedTypeConverters<T>): void {
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

    static serializeToQuads<T>(data: T, baseUri?: IriString): N3.Quad[] {
        const thing =
            (data as any)['predicates'] !== undefined ? (data as unknown as Thing) : this.serialize(data, baseUri);
        const subject =
            thing.termType === 'BlankNode'
                ? N3.DataFactory.blankNode(thing.value)
                : N3.DataFactory.namedNode(thing.value);
        return [
            ...Object.keys(thing.predicates)
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
                .flat(),
        ];
    }

    static async stringify(
        thing: Thing | any,
        options: N3.WriterOptions & { baseUri?: IriString } = {},
    ): Promise<string> {
        return new Promise((resolve, reject) => {
            const quads: N3.Quad[] = this.serializeToQuads(thing, options.baseUri);
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
            quads.forEach((quad) => {
                writer.addQuad(quad);
            });
            writer.end((err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    static deserialize<T>(serializedData: Thing, dataType?: Constructor<T>): T | T[];
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
}
