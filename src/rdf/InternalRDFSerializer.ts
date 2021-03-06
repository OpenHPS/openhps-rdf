import {
    ArrayTypeDescriptor,
    MapTypeDescriptor,
    MemberOptionsBase,
    ObjectMemberMetadata,
    ObjectMetadata,
    Serializer,
    SerializerFn,
    TypeDescriptor,
    Serializable,
    DataSerializerUtils,
} from '@openhps/core';
import { IriString, Thing } from './types';
import { DataFactory, Literal, NamedNode } from 'n3';
import { RDFIdentifierOptions, RDFLiteralOptions, XmlSchemaTypeIri, xsd } from '../decorators/';
import { mergeDeep } from './utils';

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
        serializerOptions: any = {},
    ): Thing {
        if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
            return null;
        }
        if (sourceObject === undefined || sourceObject === null) {
            return;
        }

        // Custom serializer
        if (
            memberOptions &&
            memberOptions.options &&
            memberOptions.options.rdf &&
            memberOptions.options.rdf.serializer
        ) {
            return memberOptions.options.rdf.serializer(sourceObject) as any;
        }

        // Existing serialization strategy
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
        _: string,
        serializer: Serializer,
        __: ObjectMemberMetadata,
        serializerOptions: any,
    ): Thing {
        let metadata: ObjectMetadata | undefined;
        const rootMetadata = DataSerializerUtils.getRootMetadata(sourceObject.constructor);

        if (sourceObject.constructor !== typeDescriptor.ctor && sourceObject instanceof typeDescriptor.ctor) {
            metadata = DataSerializerUtils.getOwnMetadata(sourceObject.constructor) ?? rootMetadata;
        } else {
            metadata = DataSerializerUtils.getOwnMetadata(typeDescriptor.ctor) ?? rootMetadata;
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
        const identifierMember = Array.from(metadata.dataMembers.values()).filter((member) => {
            return (
                member &&
                member.options &&
                member.options.rdf &&
                (member.options.rdf as RDFIdentifierOptions).identifier
            );
        })[0];
        let uri: string = undefined;
        if (identifierMember) {
            const rdfOptions = identifierMember.options.rdf as RDFIdentifierOptions;
            uri = rdfOptions.serializer
                ? rdfOptions.serializer((sourceObject as any)[identifierMember.key] as string, sourceObject.constructor)
                : ((sourceObject as any)[identifierMember.key] as string);
        }
        uri =
            uri && !uri.startsWith('http') && serializerOptions.rdf.baseUri
                ? serializerOptions.rdf.baseUri + uri
                : DataFactory.blankNode(uri).value;
        let thing: Thing = {
            value: uri,
            predicates: options.predicates
                ? Object.entries(options.predicates)
                      .map(([k, v]) => {
                          return { [k]: v.map(DataFactory.namedNode) };
                      })
                      .reduce((a, b) => {
                          return { ...a, ...b };
                      })
                : {},
        };

        if (options.serializer) {
            thing = mergeDeep(thing, options.serializer(sourceObject, serializerOptions.rdf.baseUri));
        }
        thing.termType = thing.value.startsWith('http') ? 'NamedNode' : 'BlankNode';

        // Check for circular serialization
        if (serializerOptions.root === undefined) {
            serializerOptions.root = thing;
        } else if (serializerOptions.root.value === thing.value) {
            return undefined;
        }

        metadata.dataMembers.forEach((member) => {
            const rootMember = rootMetadata.dataMembers.get(member.key);
            const memberOptions =
                member.options && member.options.rdf
                    ? member
                    : rootMember && rootMember.options && rootMember.options.rdf
                    ? rootMember
                    : undefined;
            if (!memberOptions || !(memberOptions.options.rdf as RDFLiteralOptions).predicate) {
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
                const predicates = (memberOptions.options.rdf as RDFLiteralOptions).predicate;
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
        _?: Serializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: any,
    ): (Literal | Thing)[] {
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
        _?: Serializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: any,
    ): (Literal | Thing)[] {
        return Array.from(sourceObject.values()).map((obj) => {
            return this.convertSingleValue(obj, typeDescriptor.valueType, memberName, memberOptions, serializerOptions);
        });
    }

    protected serializeSet(
        sourceObject: Map<any, any>,
        typeDescriptor?: MapTypeDescriptor,
        memberName?: string,
        _?: Serializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: any,
    ): (Literal | Thing)[] {
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
    ): Literal {
        let xsdDatatype: XmlSchemaTypeIri = undefined;
        const rdfOptions = memberOptions.options.rdf as RDFLiteralOptions;
        if (rdfOptions && rdfOptions.datatype) {
            // Data type provided
            xsdDatatype = rdfOptions.datatype;
            switch (rdfOptions.datatype) {
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
        return DataFactory.literal(sourceObject, rdfOptions ? rdfOptions.language ?? dataTypeNode : dataTypeNode);
    }

    protected serializeDate(
        sourceObject: any,
        _?: TypeDescriptor,
        __?: string,
        ___?: Serializer,
        memberOptions?: ObjectMemberMetadata,
    ): Literal {
        const rdfOptions = memberOptions.options.rdf as RDFLiteralOptions;
        const xsdDatatype: XmlSchemaTypeIri = xsd.dateTime;
        const dateString = new Date(sourceObject).toISOString();
        const dataTypeNode = this.iriToNode(xsdDatatype);
        return DataFactory.literal(dateString, rdfOptions ? rdfOptions.language ?? dataTypeNode : dataTypeNode);
    }

    protected iriToNode(iri: IriString): NamedNode {
        return DataFactory.namedNode(iri);
    }
}
