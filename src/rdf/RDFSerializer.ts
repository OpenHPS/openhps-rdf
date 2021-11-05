import { 
    DataSerializer, 
    Deserializer, 
    Serializable, 
    MappedTypeConverters, 
    Constructor, 
    DataSerializerConfig, 
    IndexedObject, 
    TypeDescriptor, 
    Serializer, 
    OptionsBase, 
    JsonObjectMetadata, 
    SerializableObjectOptions, 
    SerializableMemberOptions, 
    SerializerFn
} from "@openhps/core";
import * as RDF from "@rdfjs/types";
import { XmlSchemaTypeIri, xsd } from '../decorators/SerializableMember';
import { Literal } from "n3";

export class RDFSerializer extends DataSerializer {
    protected static readonly serializableRDFTypes: Map<IriString, string[]>;

    static {
        this.eventEmitter.on('register', <T>(type: Serializable<T>, converters?: MappedTypeConverters<T>) => {
            RDFSerializer.registerRDFType(type, converters);
        });
    }

    protected static get options(): DataSerializerConfig {
        return {
            serializer: new InternalSerializer(),
            deserializer: new InternalDeserializer()
        };
    }

    protected static registerRDFType<T>(type: Serializable<T>, converters?: MappedTypeConverters<T>): void {
        // Map RDF types
        const meta = this.getMetadata(type) as JsonObjectMetadata & SerializableObjectOptions<any>;
        [...Array.isArray(meta.rdf.type) ? meta.rdf.type : [meta.rdf.type]].forEach((typeIri: IriString) => {
            const results = this.serializableRDFTypes.get(typeIri) ?? [];
            results.push(type.name);
            this.serializableRDFTypes.set(typeIri, results);
        });
    }

   /**
     * Serialize data
     *
     * @param {any} data Data to serialize
     * @returns {any} Serialized data
     */
    static serialize<T>(data: T): any {
        return super.serialize(data, this.options);
    }

    /**
     * Deserialize data
     *
     * @param serializedData Data to deserialze
     * @param dataType Optional data type to specify deserialization type
     */
    static deserialize<T>(serializedData: any, dataType?: Constructor<T>): T;
    static deserialize<T>(serializedData: any[], dataType?: Constructor<T>): T[];
    static deserialize<T>(serializedData: any, dataType?: Constructor<T>): T | T[] {
        return super.deserialize(serializedData, dataType, this.options);
    }
    
}

class InternalSerializer extends Serializer {
    // this.serializationStrategy = new Map<Function, SerializerFn<any, TypeDescriptor, any>>([
    //     /* Literals */
    //     [Number, serializeLiteral],
    //     [String, serializeLiteral],
    //     [Boolean, serializeLiteral]
    // ]);

    convertSingleValue(
        sourceObject: any,
        typeDescriptor: TypeDescriptor,
        memberName: string, 
        memberOptions?: OptionsBase,
    ): any {
        if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
            return null;
        }
        if (sourceObject === undefined || sourceObject === null) {
            return;
        }

        const serializer = this.serializationStrategy.get(typeDescriptor.ctor);
        if (serializer !== undefined) {
            return serializer(sourceObject, typeDescriptor, memberName, this, memberOptions);
        }
        // if not present in the strategy do property by property serialization
        if (typeof sourceObject === 'object') {
            return this.serializeObject(sourceObject, typeDescriptor, memberName, this, memberOptions);s
        }

        let error = `Could not serialize '${memberName}'; don't know how to serialize type`;

        if (typeDescriptor.hasFriendlyName()) {
            error += ` '${typeDescriptor.ctor.name}'`;
        }

        this.errorHandler(new TypeError(`${error}.`));
    }

    serializeObject<T, TD extends TypeDescriptor>(
        sourceObject: T,
        typeDescriptor: TD,
        memberName: string,
        serializer: Serializer,
        memberOptions?: OptionsBase,
    ): any {
        const thing = {
            predicates: {}
        } as Thing;
        let sourceTypeMetadata: JsonObjectMetadata | undefined;
    
        if (sourceObject.constructor !== typeDescriptor.ctor
            && sourceObject instanceof typeDescriptor.ctor) {
            sourceTypeMetadata = JsonObjectMetadata.getFromConstructor(sourceObject.constructor);
        } else {
            sourceTypeMetadata = JsonObjectMetadata.getFromConstructor(typeDescriptor.ctor);
        }
    
        sourceTypeMetadata.dataMembers.forEach(member => {
            if ((member as any)['rdf'] !== undefined) {
                let object = serializer.convertSingleValue(
                    (sourceObject as any)[member.key],
                    member.type(),
                    `${member.name}`,
                    member as OptionsBase,
                );
                if (object) {
                    const predicates = (member as SerializableMemberOptions).rdf.predicate;
                    [...Array.isArray(predicates) ? predicates : [predicates]].forEach((predicateIri: IriString) => {
                        thing.predicates[predicateIri] = thing.predicates[predicateIri] ?? [];
                        thing.predicates[predicateIri].push(object);
                    });
                }
            }
        });
        return thing;
    }

    protected serializeLiteral(
        sourceObject: any,
        typeDescriptor?: TypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: SerializableMemberOptions): RDF.Literal {
        let xsdDatatype: XmlSchemaTypeIri = xsd.string;
        
        switch (typeof sourceObject) {
            case 'bigint':
            case 'number':
                xsdDatatype = xsd.decimal;
                break;
        }
    
        return {
            termType: 'Literal',
            value: sourceObject,
            language: memberOptions.rdf ? memberOptions.rdf.language ?? "" : "",
            datatype: {
                termType: 'NamedNode',
                value: xsdDatatype,
                equals: undefined
            },
            equals: undefined
        };
    }
}

class InternalDeserializer extends Deserializer {

}

function deserializeLiteral(object: any): any {

}

export type Thing = {
    uri?: IriString | BlankNodeId;
    predicates: Record<IriString, Array<Literal>>;
};

export type UrlString = `${'http' | 'https'}://${string}`;
export type IriString = UrlString;
export type BlankNodeId = `_:${string}`;
