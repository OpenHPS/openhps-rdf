import { 
    DataSerializer,
    MemberOptionsBase,
    ObjectMetadata,
    SerializableMemberOptions, 
    Serializer, 
    SerializerFn, 
    TypeDescriptor 
} from "@openhps/core";
import { IriString, Thing } from "./types";
import * as N3 from 'n3';
import { XmlSchemaTypeIri, xsd } from '../decorators/';
import { rdf } from "../vocab";

export class InternalRDFSerializer extends Serializer {
    serializationStrategy = new Map<Function, SerializerFn<any, TypeDescriptor, any>>([
        /* Literals */
        [Number, this.serializeLiteral],
        [String, this.serializeLiteral],
        [Boolean, this.serializeLiteral]
    ]);

    convertSingleValue(
        sourceObject: any,
        typeDescriptor: TypeDescriptor,
        memberName: string, 
        memberOptions?: MemberOptionsBase,
    ): Thing {
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
            return this.serializeObject(sourceObject, typeDescriptor, memberName, this, memberOptions);
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
        memberOptions?: MemberOptionsBase,
    ): Thing {
        let metadata: ObjectMetadata | undefined;
    
        if (sourceObject.constructor !== typeDescriptor.ctor
            && sourceObject instanceof typeDescriptor.ctor) {
            metadata = DataSerializer.getMetadata(sourceObject.constructor);
        } else {
            metadata = DataSerializer.getMetadata(typeDescriptor.ctor);
        }

        const options = metadata.options.rdf;

        if (!options) {
            return undefined;
        }

        // Get the URI if available
        const uri = options.uri ? options.uri(sourceObject, "http://") : N3.DataFactory.blankNode().value;
        const thing: Thing = {
            value: uri,
            predicates: {},
            termType: uri.startsWith("http") ? 'NamedNode' : 'BlankNode'
        };

        // Set rdf:type of object
        const types = options.types;
        if (types) {
            thing.predicates[rdf.type] = [...types.map(N3.DataFactory.namedNode)];       
        } 
    
        metadata.dataMembers.forEach(member => {
            if (!member.options || !member.options.rdf) {
                return;
            }
            let object = serializer.convertSingleValue(
                (sourceObject as any)[member.key],
                member.type(),
                `${member.name}`,
                member as MemberOptionsBase,
            );
            if (object) {
                const predicates = member.options.rdf.predicate;
                [...Array.isArray(predicates) ? predicates : [predicates]].forEach((predicateIri: IriString) => {
                    const predicate = thing.predicates[predicateIri] || [];
                    predicate.push(object);
                    thing.predicates[predicateIri] = predicate;
                });
            }
        });
        return thing;
    }

    protected serializeLiteral(
        sourceObject: any,
        typeDescriptor?: TypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: SerializableMemberOptions): N3.Literal {
        let xsdDatatype: XmlSchemaTypeIri = xsd.string;

        switch (typeof sourceObject) {
            case 'bigint':
            case 'number':
                xsdDatatype = xsd.decimal;
                break;
        }
    
        return N3.DataFactory.literal(sourceObject, memberOptions.rdf ? memberOptions.rdf.language ?? xsdDatatype : xsdDatatype);
    }
}