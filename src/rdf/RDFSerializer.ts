import { DataSerializer, Serializable, MappedTypeConverters, Constructor, DataSerializerConfig } from '@openhps/core';
import { InternalRDFSerializer } from './InternalRDFSerializer';
import { InternalRDFDeserializer } from './InternalRDFDeserializer';
import { IriString, Thing } from './types';
import * as N3 from 'n3';
import namespaces from '../namespaces';
import { rdf } from '../vocab';

export class RDFSerializer extends DataSerializer {
    protected static readonly serializableRDFTypes: Map<IriString, string[]> = new Map();

    static {
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
                    const results = this.serializableRDFTypes.get(typeIri) ?? [];
                    results.push(type.name);
                    this.serializableRDFTypes.set(typeIri, results);
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

    protected static thingToQuads(thing: Thing): N3.Quad[] {
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
                                ...this.thingToQuads(object as Thing),
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

    static prefixes: Record<string, string> = {
        xsd: 'http://www.w3.org/2001/XMLSchema#',
        ...namespaces,
    };

    static async stringify(thing: Thing, options?: N3.WriterOptions): Promise<string> {
        return new Promise((resolve, reject) => {
            const quads: N3.Quad[] = this.thingToQuads(thing);
            // Filter the prefixes to only include prefixes used
            const namespaces = Object.keys(this.prefixes)
                .map((k) => {
                    return { [this.prefixes[k]]: k };
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
                usedNamespacesInQuad.map((ns) => {
                    Object.keys(namespaces).forEach((n) => {
                        if (ns.includes(n)) {
                            filteredPrefixes[namespaces[n]] = n;
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

    /**
     * Deserialize data
     *
     * @param serializedData Data to deserialze
     * @param dataType Optional data type to specify deserialization type
     */
    static deserialize<T>(serializedData: N3.Quad[], dataType?: Constructor<T>): T | T[] {
        return super.deserialize(serializedData, dataType, this.options);
    }
}
