import { 
    DataSerializer, 
    Serializable, 
    MappedTypeConverters, 
    Constructor, 
    DataSerializerConfig, 
} from "@openhps/core";
import { InternalRDFSerializer } from "./InternalRDFSerializer";
import { InternalRDFDeserializer } from './InternalRDFDeserializer'; 
import { IriString, Thing } from "./types";
import * as N3 from 'n3';

export class RDFSerializer extends DataSerializer {
    protected static readonly serializableRDFTypes: Map<IriString, string[]> = new Map();

    static {
        this.eventEmitter.on('register', <T>(type: Serializable<T>, converters?: MappedTypeConverters<T>) => {
            RDFSerializer.registerRDFType(type, converters);
        });
    }

    protected static get options(): DataSerializerConfig {
        return {
            serializer: new InternalRDFSerializer(),
            deserializer: new InternalRDFDeserializer()
        };
    }

    protected static registerRDFType<T>(type: Serializable<T>, converters?: MappedTypeConverters<T>): void {
        // Map RDF types
        const meta = this.getMetadata(type);
        if (!meta.options || !meta.options.rdf) {
            return;
        }
        const rdfOptions = meta.options.rdf;
        if (rdfOptions.types) {
            [...rdfOptions.types].forEach((typeIri: IriString) => {
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
     * @returns {Thing} Serialized data
     */
    static serialize<T>(data: T): Thing {
        return super.serialize(data, this.options);
    }

    protected static thingToQuads(thing: Thing): N3.Quad[] {
        const subject = thing.termType === 'BlankNode' ? N3.DataFactory.blankNode(thing.value) : N3.DataFactory.namedNode(thing.value);
        return [...Object.keys(thing.predicates).map(predicateIri => {
            const predicate = N3.DataFactory.namedNode(predicateIri);
            return thing.predicates[predicateIri].map(object => {
                if ((object as any)['predicates'] !== undefined) {
                    return [
                        N3.DataFactory.quad(subject, predicate, object as N3.Quad_Object),
                        ...this.thingToQuads(object as Thing)
                    ]
                } else {
                    return [N3.DataFactory.quad(subject, predicate, object as N3.Quad_Object)];
                }
            });
        }).flat().flat()];
    }

    static stringify(thing: Thing): string {
        const quads: N3.Quad[] = this.thingToQuads(thing);
        const writer = new N3.Writer({ format: undefined });
        return writer.quadsToString(quads);
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
