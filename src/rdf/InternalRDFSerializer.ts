import {
    ArrayTypeDescriptor,
    MapTypeDescriptor,
    ObjectMemberMetadata,
    ObjectMetadata,
    Serializer,
    SerializerFn,
    TypeDescriptor,
    Serializable,
    DataSerializerUtils,
    CHANGELOG_METADATA_KEY,
    ChangeLog,
    Change,
} from '@openhps/core';
import { IriString, Thing, XmlSchemaTypeIri, xsd } from './types';
import { BlankNode, DataFactory, Literal, NamedNode, Quad_Object } from 'n3';
import { RDFIdentifierOptions, RDFLiteralOptions } from '../decorators/';
import { mergeDeep } from './utils';
import { MemberSerializerOptionsParent } from '../decorators/options';

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

    private blankNode(uri: string, options: InternalSerializerOptions) {
        let blankNode: BlankNode = undefined;
        if (uri) {
            blankNode = DataFactory.blankNode(uri);
        } else if (options.blankNodeCounter === undefined) {
            blankNode = DataFactory.blankNode();
        } else {
            blankNode = DataFactory.blankNode(`${options.blankNodePrefix ?? 'n3'}-${options.blankNodeCounter++}`);
        }
        return blankNode;
    }

    convertSingleValue(
        sourceObject: any,
        typeDescriptor: TypeDescriptor,
        memberName: string,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions: InternalSerializerOptions = {},
    ): Thing | Literal {
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
            memberOptions.options.rdf.serializer !== undefined &&
            typeof memberOptions.options.rdf.serializer !== 'boolean'
        ) {
            const output = memberOptions.options.rdf.serializer(sourceObject, serializerOptions.sourceObject, {
                thing: serializerOptions.current,
                baseUri: serializerOptions.rdf.baseUri ?? ('' as IriString),
                dataType: typeDescriptor.ctor,
                parent: serializerOptions.parent,
            }) as Thing | Quad_Object;
            if (output === undefined) {
                return undefined;
            } else if (typeof output === 'string') {
                return DataFactory.namedNode(output);
            } else if (output.termType === 'Literal') {
                return output as Literal;
            } else if (output.termType === 'NamedNode') {
                return output as NamedNode;
            } else {
                return mergeDeep(
                    {
                        termType: 'BlankNode',
                        value: this.blankNode(undefined, serializerOptions).value,
                        predicates: {},
                    },
                    output,
                );
            }
        }

        // Existing serialization strategy
        const serializer = this.serializationStrategy.get(typeDescriptor.ctor);
        if (serializer !== undefined) {
            return serializer(sourceObject, typeDescriptor, memberName, this, memberOptions, serializerOptions);
        }
        // if not present in the strategy do property by property serialization
        if (typeof sourceObject === 'object') {
            const object = this.serializeObject(
                sourceObject,
                typeDescriptor,
                memberName,
                this,
                memberOptions,
                serializerOptions,
            );

            // If the serializer is false, serialize the object but only return the URI
            if (
                object &&
                memberOptions &&
                memberOptions.options &&
                memberOptions.options.rdf &&
                memberOptions.options.rdf.serializer !== undefined &&
                typeof memberOptions.options.rdf.serializer === 'boolean'
            ) {
                // Only serialize the URI
                return DataFactory.namedNode(object.value);
            } else {
                return object;
            }
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
        serializerOptions: InternalSerializerOptions,
    ): Thing {
        let metadata: ObjectMetadata | undefined;
        const rootMetadata = DataSerializerUtils.getRootMetadata(sourceObject.constructor);

        if (sourceObject.constructor !== typeDescriptor.ctor) {
            metadata = DataSerializerUtils.getOwnMetadata(sourceObject.constructor) ?? rootMetadata;
        } else {
            metadata = DataSerializerUtils.getOwnMetadata(typeDescriptor.ctor) ?? rootMetadata;
        }

        const options =
            metadata && metadata.options && metadata.options.rdf
                ? metadata.options.rdf
                : rootMetadata && rootMetadata.options && rootMetadata.options.rdf
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
        if ((sourceObject as any).rdf && (sourceObject as any).rdf.uri) {
            uri = (sourceObject as any).rdf.uri;
        } else if ((sourceObject as any).rdf && (sourceObject as any).rdf.path) {
            uri = (sourceObject as any).rdf.path;
        } else if (identifierMember) {
            const rdfOptions = identifierMember.options.rdf as RDFIdentifierOptions;
            uri = rdfOptions.serializer
                ? rdfOptions.serializer((sourceObject as any)[identifierMember.key] as string, sourceObject.constructor)
                : ((sourceObject as any)[identifierMember.key] as string);
            serializerOptions.blankNodePrefix = (sourceObject as any)[identifierMember.key] as string;
        }

        if (uri && (sourceObject as any).rdf && (sourceObject as any).rdf.termType === 'BlankNode') {
            // Blank node
        } else if (uri && !uri.startsWith('http') && serializerOptions.rdf.baseUri) {
            uri =
                serializerOptions.rdf.baseUri.endsWith('/') && uri.startsWith('/')
                    ? serializerOptions.rdf.baseUri + uri.substring(1)
                    : serializerOptions.rdf.baseUri + uri;
        } else if (!(uri && uri.startsWith('http'))) {
            uri = this.blankNode(uri, serializerOptions).value;
        }

        if (!(sourceObject as any).rdf) {
            (sourceObject as any).rdf = { uri };
        }
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
            const serializedThing = options.serializer(sourceObject, serializerOptions.rdf.baseUri);
            if (serializedThing instanceof Literal) {
                return serializedThing as any;
            } else {
                thing = mergeDeep(thing, options.serializer(sourceObject, serializerOptions.rdf.baseUri));
            }
        }
        thing.termType = thing.termType ?? thing.value.startsWith('http') ? 'NamedNode' : 'BlankNode';

        // Current thing
        if (serializerOptions.current) {
            serializerOptions.parent = {
                thing: serializerOptions.current,
                parent: serializerOptions.parent,
            };
        }
        serializerOptions.current = thing;

        // Check for circular serialization
        if (serializerOptions.root === undefined) {
            serializerOptions.root = thing;
        } else if (serializerOptions.root.value === thing.value) {
            return undefined;
        }
        serializerOptions.sourceObject = sourceObject;

        const changelog: ChangeLog = sourceObject[CHANGELOG_METADATA_KEY];
        const changes: Change[] = [];
        let changedProperties = undefined;
        if (changelog && serializerOptions.changelog) {
            changes.push(...changelog.getLatestChanges());
            changedProperties = changes.map((c) => c.property);
        } else if (
            !changelog &&
            serializerOptions.changelog &&
            serializerOptions.changelog === ChangeLogType.DELETIONS
        ) {
            // If we are looking for deletions when no changelog, ignore
            return undefined;
        }

        const data: ObjectMemberMetadata[] = Array.from(metadata.dataMembers.values())
            .map((member) => {
                const rootMember = rootMetadata.dataMembers.get(member.key);
                const memberOptions =
                    member.options && member.options.rdf
                        ? member
                        : rootMember && rootMember.options && rootMember.options.rdf
                          ? rootMember
                          : undefined;

                if (
                    !memberOptions ||
                    (!(memberOptions.options.rdf as RDFLiteralOptions).predicate &&
                        !memberOptions.options.rdf.serializer) ||
                    memberOptions.options.rdf.identifier
                ) {
                    return undefined;
                }

                return memberOptions;
            })
            .filter((entry) => entry !== undefined);

        data.forEach((memberOptions) => {
            let value = (sourceObject as any)[memberOptions.key];
            if ((changedProperties && changedProperties.includes(memberOptions.key)) || !changedProperties) {
                if (changelog && serializerOptions.changelog) {
                    // Get the value of the changelog
                    const change = changes.find((c) => c.property === memberOptions.key);
                    if (change) {
                        // Set the value the old of new value depending on if we want to get the quads
                        // for additions or deletions
                        value =
                            serializerOptions.changelog === ChangeLogType.DELETIONS ? change.oldValue : change.newValue;
                    }
                }
            } else if (!(typeof value === 'object' && value[CHANGELOG_METADATA_KEY])) {
                return;
            }

            const object = serializer.convertSingleValue(
                value,
                memberOptions.type(),
                `${memberOptions.name}`,
                memberOptions,
                { ...serializerOptions },
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
        serializerOptions?: InternalSerializerOptions,
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
        serializerOptions?: InternalSerializerOptions,
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

    serializeLiteral(
        sourceObject: any,
        typeDescriptor?: TypeDescriptor,
        memberName?: string,
        serializer?: Serializer,
        memberOptions?: ObjectMemberMetadata,
    ): Literal {
        let xsdDatatype: XmlSchemaTypeIri = undefined;
        const rdfOptions = memberOptions ? (memberOptions.options.rdf as RDFLiteralOptions) : undefined;
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
                    xsdDatatype = xsd.double;
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
        const rdfOptions = memberOptions ? (memberOptions.options.rdf as RDFLiteralOptions) : undefined;
        const xsdDatatype: XmlSchemaTypeIri = xsd.dateTime;
        const dateString = new Date(sourceObject).toISOString();
        const dataTypeNode = this.iriToNode(xsdDatatype);
        return DataFactory.literal(dateString, rdfOptions ? rdfOptions.language ?? dataTypeNode : dataTypeNode);
    }

    protected iriToNode(iri: IriString): NamedNode {
        return DataFactory.namedNode(iri);
    }
}

interface InternalSerializerOptions {
    sourceObject?: any;
    root?: Thing;
    current?: Thing;
    parent?: MemberSerializerOptionsParent;
    changelog?: ChangeLogType;
    rdf?: {
        baseUri: IriString;
    };
    blankNodeCounter?: number;
    blankNodePrefix?: string;
}

export enum ChangeLogType {
    NONE,
    ADDITIONS,
    DELETIONS,
}
