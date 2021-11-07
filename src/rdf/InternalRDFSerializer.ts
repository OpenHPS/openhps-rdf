import {
    ArrayTypeDescriptor,
    DataSerializer,
    MapTypeDescriptor,
    MemberOptionsBase,
    ObjectMemberMetadata,
    ObjectMetadata,
    Serializer,
    SerializerFn,
    TypeDescriptor,
    Serializable,
} from '@openhps/core';
import { IriString, Thing } from './types';
import * as N3 from 'n3';
import { XmlSchemaTypeIri, xsd } from '../decorators/';

export class InternalRDFSerializer extends Serializer {
    serializationStrategy = new Map<Serializable<any>, SerializerFn<any, TypeDescriptor, any>>([
        [Number, this.serializeLiteral.bind(this)],
        [String, this.serializeLiteral.bind(this)],
        [Boolean, this.serializeLiteral.bind(this)],
        [Date, this.serializeDate.bind(this)],
        [Array, this.serializeArray.bind(this)],
        [Map, this.serializeMap.bind(this)],
        [Set, this.serializeSet.bind(this)],
    ]);

    convertSingleValue(
        sourceObject: any,
        typeDescriptor: TypeDescriptor,
        memberName: string,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: any,
    ): Thing {
        if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
            return null;
        }
        if (sourceObject === undefined || sourceObject === null) {
            return;
        }

        const serializer = this.serializationStrategy.get(typeDescriptor.ctor);
        if (serializer !== undefined) {
            return serializer(sourceObject, typeDescriptor, memberName, this, memberOptions, serializerOptions);
        }
        // if not present in the strategy do property by property serialization
        if (typeof sourceObject === 'object') {
            return this.serializeObject(
                sourceObject,
                typeDescriptor,
                memberName,
                this,
                memberOptions,
                serializerOptions,
            );
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
        memberOptions: ObjectMemberMetadata,
        serializerOptions: any,
    ): Thing {
        let metadata: ObjectMetadata | undefined;
        const rootMetadata = DataSerializer.getRootMetadata(sourceObject.constructor);

        if (sourceObject.constructor !== typeDescriptor.ctor && sourceObject instanceof typeDescriptor.ctor) {
            metadata = DataSerializer.getMetadata(sourceObject.constructor);
        } else {
            metadata = DataSerializer.getMetadata(typeDescriptor.ctor);
        }

        const options =
            metadata.options && metadata.options.rdf
                ? metadata.options.rdf
                : rootMetadata.options && rootMetadata.options.rdf
                ? rootMetadata.options.rdf
                : undefined;

        if (!options) {
            return undefined;
        }

        // Get the URI if available
        let uri = options.uri ? options.uri(sourceObject) : undefined;
        uri =
            uri && !uri.startsWith('http') && serializerOptions.rdf.baseUri
                ? serializerOptions.rdf.baseUri + uri
                : N3.DataFactory.blankNode(uri).value;
        const thing: Thing = {
            value: uri,
            predicates: options.predicates
                ? Object.entries(options.predicates)
                      .map(([k, v]) => {
                          return { [k]: v.map(N3.DataFactory.namedNode) };
                      })
                      .reduce((a, b) => {
                          return { ...a, ...b };
                      })
                : {},
            termType: uri.startsWith('http') ? 'NamedNode' : 'BlankNode',
        };

        metadata.dataMembers.forEach((member) => {
            const rootMember = rootMetadata.dataMembers.get(member.key);
            const memberOptions =
                member.options && member.options.rdf
                    ? member
                    : rootMember && rootMember.options && rootMember.options.rdf
                    ? rootMember
                    : undefined;
            if (!memberOptions) {
                return;
            }
            const object = serializer.convertSingleValue(
                (sourceObject as any)[memberOptions.key],
                memberOptions.type(),
                `${memberOptions.name}`,
                memberOptions as MemberOptionsBase,
                serializerOptions,
            );
            if (object) {
                const predicates = memberOptions.options.rdf.predicate;
                [...(Array.isArray(predicates) ? predicates : [predicates])].forEach((predicateIri: IriString) => {
                    const predicate = thing.predicates[predicateIri] || [];
                    predicate.push(...(Array.isArray(object) ? object : [object]).filter((s) => s));
                    thing.predicates[predicateIri] = predicate;
                });
            }
        });
        return thing;
    }

    protected serializeArray(
        sourceObject: Array<any>,
        typeDescriptor?: ArrayTypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: any,
    ): (N3.Literal | Thing)[] {
        return sourceObject.map((obj) => {
            return this.convertSingleValue(
                obj,
                typeDescriptor.elementType,
                memberName,
                memberOptions,
                serializerOptions,
            );
        });
    }

    protected serializeMap(
        sourceObject: Map<any, any>,
        typeDescriptor?: MapTypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: any,
    ): (N3.Literal | Thing)[] {
        return Array.from(sourceObject.values()).map((obj) => {
            return this.convertSingleValue(obj, typeDescriptor.valueType, memberName, memberOptions, serializerOptions);
        });
    }

    protected serializeSet(
        sourceObject: Map<any, any>,
        typeDescriptor?: MapTypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: any,
    ): (N3.Literal | Thing)[] {
        return Array.from(sourceObject.values()).map((obj) => {
            return this.convertSingleValue(obj, typeDescriptor.valueType, memberName, memberOptions, serializerOptions);
        });
    }

    protected serializeLiteral(
        sourceObject: any,
        typeDescriptor?: TypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: ObjectMemberMetadata,
    ): N3.Literal {
        let xsdDatatype: XmlSchemaTypeIri = undefined;
        if (memberOptions.options.rdf && memberOptions.options.rdf.datatype) {
            // Data type provided
            xsdDatatype = memberOptions.options.rdf.datatype;
            switch (memberOptions.options.rdf.datatype) {
                case xsd.date:
                case xsd.dateTime:
                    return this.serializeDate(sourceObject, typeDescriptor, memberName, serializer, memberOptions);
            }
        } else {
            // Data type is not provided or not detected
            switch (typeof sourceObject) {
                case 'bigint':
                case 'number':
                    xsdDatatype = xsd.decimal;
                    break;
                case 'boolean':
                    xsdDatatype = xsd.boolean;
                    break;
                default:
                    xsdDatatype = xsd.string;
                    break;
            }
        }
        const dataTypeNode = this.iriToNode(xsdDatatype);
        return N3.DataFactory.literal(
            sourceObject,
            memberOptions.options.rdf ? memberOptions.options.rdf.language ?? dataTypeNode : dataTypeNode,
        );
    }

    protected serializeDate(
        sourceObject: any,
        typeDescriptor?: TypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: ObjectMemberMetadata,
    ): N3.Literal {
        const xsdDatatype: XmlSchemaTypeIri = xsd.dateTime;
        const dateString = new Date(sourceObject).toISOString();
        const dataTypeNode = this.iriToNode(xsdDatatype);
        return N3.DataFactory.literal(
            dateString,
            memberOptions.options.rdf ? memberOptions.options.rdf.language ?? dataTypeNode : dataTypeNode,
        );
    }

    protected iriToNode(iri: IriString): N3.NamedNode {
        return N3.DataFactory.namedNode(iri);
    }
}
