import {
    ArrayTypeDescriptor,
    DataSerializerConfig,
    DataSerializerUtils,
    Deserializer,
    DeserializerFn,
    IndexedObject,
    MapTypeDescriptor,
    ObjectMemberMetadata,
    Serializable,
    SetTypeDescriptor,
    TypeDescriptor,
} from '@openhps/core';
import { Literal, NamedNode, Quad_Object } from 'n3';
import { RDFIdentifierOptions, RDFLiteralOptions, xsd } from '../decorators';
import { rdf } from '../vocab';
import { IriString, RDFSerializerConfig, Thing } from './types';

export class InternalRDFDeserializer extends Deserializer {
    deserializationStrategy = new Map<Serializable<any>, DeserializerFn<any, TypeDescriptor, any>>([
        [Number, this.deserializeLiteral.bind(this)],
        [String, this.deserializeLiteral.bind(this)],
        [Boolean, this.deserializeLiteral.bind(this)],
        [Date, this.deserializeLiteral.bind(this)],
        [Array, this.deserializeArray.bind(this)],
        [Map, this.deserializeMap.bind(this)],
        [Set, this.deserializeSet.bind(this)],
    ]);

    rdfTypeResolver(
        sourceObject: IndexedObject,
        knownTypes: Map<string, Serializable<any>>,
        knownRDFTypes: Map<IriString, string[]>,
    ) {
        if (sourceObject['predicates'] !== undefined) {
            // Get type based on rdf:type predicate(s) if any
            const rdfTypes: IriString[] = Object.entries(sourceObject['predicates'])
                .filter(([k]) => k === rdf.type)
                .map(([, v]) => v)
                .flat()
                .map((v: NamedNode) => v.value as IriString);
            const mappedTypes = rdfTypes
                .map((type) => knownRDFTypes.get(type))
                .flat()
                .map((type) => knownTypes.get(type));
            return mappedTypes[0];
        }
        return Object;
    }

    convertSingleValue(
        sourceObject: any,
        typeDescriptor: TypeDescriptor,
        knownTypes: Map<string, Serializable<any>>,
        memberName = 'object',
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: RDFSerializerConfig,
    ): any {
        if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
            return null;
        } else if (sourceObject === null || sourceObject === undefined) {
            return;
        }

        const deserializer = this.deserializationStrategy.get(typeDescriptor.ctor);
        if (deserializer !== undefined) {
            return deserializer(
                sourceObject,
                typeDescriptor,
                knownTypes,
                memberName,
                this,
                memberOptions,
                serializerOptions,
            );
        }

        if (typeof sourceObject === 'object') {
            return this.deserializeObject(
                sourceObject,
                typeDescriptor,
                knownTypes,
                memberName,
                this,
                serializerOptions,
            );
        }

        let error = `Could not deserialize '${memberName}'; don't know how to deserialize type`;

        if (typeDescriptor.hasFriendlyName()) {
            error += ` '${typeDescriptor.ctor.name}'`;
        }

        this.errorHandler(new TypeError(`${error}.`));
    }

    deserializeObject<T>(
        sourceObject: Thing,
        typeDescriptor: TypeDescriptor,
        knownTypes: Map<string, Serializable<any>>,
        _: string,
        deserializer: Deserializer,
        serializerOptions?: RDFSerializerConfig,
    ): IndexedObject | T | undefined {
        const expectedSelfType = typeDescriptor.ctor;
        const typeFromRDF = this.rdfTypeResolver(sourceObject, knownTypes, serializerOptions.rdf.knownTypes);
        const finalType = typeFromRDF || expectedSelfType;
        const metadata = DataSerializerUtils.getOwnMetadata(finalType);
        const rootMetadata = DataSerializerUtils.getOwnMetadata(finalType);

        if (!metadata && !rootMetadata) {
            return undefined;
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

        const targetObject = options.deserializer
            ? options.deserializer(sourceObject)
            : this.instantiateType(finalType);

        // Get the URI if available
        const identifierMember = Array.from(metadata.dataMembers.values()).filter((member) => {
            return (
                member &&
                member.options &&
                member.options.rdf &&
                (member.options.rdf as RDFIdentifierOptions).identifier
            );
        })[0];
        if (identifierMember) {
            const rdfOptions = identifierMember.options.rdf as RDFIdentifierOptions;
            targetObject[identifierMember.key] = rdfOptions.deserializer
                ? rdfOptions.deserializer(sourceObject, finalType)
                : sourceObject.value;
        }

        // Deserialize predicates
        metadata.dataMembers.forEach((member) => {
            const rootMember = rootMetadata.dataMembers.get(member.key);
            const memberOptions =
                member.options && member.options.rdf
                    ? member
                    : rootMember && rootMember.options && rootMember.options.rdf
                    ? rootMember
                    : undefined;

            if (!memberOptions || !(memberOptions.options.rdf as RDFLiteralOptions).predicate) {
                return undefined;
            }

            const predicates = (memberOptions.options.rdf as RDFLiteralOptions).predicate;
            [...(Array.isArray(predicates) ? predicates : [predicates])].forEach((predicateIri: IriString) => {
                if (!sourceObject.predicates[predicateIri]) {
                    return;
                }

                if (memberOptions.type().ctor === Array) {
                    targetObject[memberOptions.key] = this.deserializeArray(
                        sourceObject.predicates[predicateIri] as Quad_Object[],
                        memberOptions.type() as ArrayTypeDescriptor,
                        knownTypes,
                        memberOptions.name,
                        this,
                        memberOptions,
                        serializerOptions,
                    );
                } else if (memberOptions.type().ctor === Map) {
                    targetObject[memberOptions.key] = this.deserializeMap(
                        sourceObject.predicates[predicateIri] as Quad_Object[],
                        memberOptions.type() as MapTypeDescriptor,
                        knownTypes,
                        memberOptions.name,
                        this,
                        memberOptions,
                        serializerOptions,
                    );
                } else if (memberOptions.type().ctor === Set) {
                    targetObject[memberOptions.key] = this.deserializeSet(
                        sourceObject.predicates[predicateIri] as Quad_Object[],
                        memberOptions.type() as SetTypeDescriptor,
                        knownTypes,
                        memberOptions.name,
                        this,
                        memberOptions,
                        serializerOptions,
                    );
                } else {
                    targetObject[memberOptions.key] = sourceObject.predicates[predicateIri]
                        .map((object) => {
                            return deserializer.convertSingleValue(
                                object,
                                memberOptions.type(),
                                knownTypes,
                                memberOptions.name,
                                memberOptions,
                                serializerOptions,
                            );
                        })
                        .filter((item) => this.isInstanceOf(item, memberOptions.type().ctor))[0];
                }
            });
        });

        return targetObject;
    }

    deserializeLiteral(sourceObject: Literal): any {
        switch (sourceObject.datatype.value) {
            case xsd.dateTime:
                // Return timestamp
                return new Date(sourceObject.value).getTime();
            default:
                return sourceObject.value;
        }
    }

    deserializeDate(sourceObject: Literal): any {
        return new Date(sourceObject.value);
    }

    deserializeArray(
        sourceObject: Quad_Object[],
        typeDescriptor: ArrayTypeDescriptor,
        knownTypes: Map<string, Serializable<any>>,
        memberName: string,
        deserializer: Deserializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: RDFSerializerConfig,
    ): any {
        if (!sourceObject) {
            return [];
        }
        return sourceObject
            .map((object) => {
                return deserializer.convertSingleValue(
                    object,
                    typeDescriptor.elementType,
                    knownTypes,
                    memberName,
                    memberOptions,
                    serializerOptions,
                );
            })
            .filter((val) => this.isInstanceOf(val, typeDescriptor.elementType.ctor));
    }

    isInstanceOf(value: any, constructor: any): boolean {
        if (typeof value === 'number') {
            return constructor === Number;
        } else if (typeof value === 'string') {
            return constructor === String;
        } else if (typeof value === 'boolean') {
            return constructor === Boolean;
        } else if (typeof value === 'object') {
            return value instanceof constructor;
        }
        return false;
    }

    deserializeMap(
        sourceObject: Quad_Object[],
        typeDescriptor: MapTypeDescriptor,
        knownTypes: Map<string, Serializable<any>>,
        memberName: string,
        deserializer: Deserializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: DataSerializerConfig,
    ): any {
        const result = new Map();
        if (!sourceObject) {
            return result;
        }
        sourceObject
            .map((object) => {
                return deserializer.convertSingleValue(
                    object,
                    typeDescriptor.valueType,
                    knownTypes,
                    memberName,
                    memberOptions,
                    serializerOptions,
                );
            })
            .filter((val) => this.isInstanceOf(val, typeDescriptor.valueType.ctor))
            .forEach((object) => {
                // Get metadata
                const metadata = DataSerializerUtils.getOwnMetadata(object.constructor);
                const rootMetadata = DataSerializerUtils.getRootMetadata(object.constructor);

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
                if (identifierMember) {
                    result.set(object[identifierMember.key], object);
                }
            });
        return result;
    }

    deserializeSet(
        sourceObject: Quad_Object[],
        typeDescriptor: SetTypeDescriptor,
        knownTypes: Map<string, Serializable<any>>,
        memberName: string,
        deserializer: Deserializer,
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: DataSerializerConfig,
    ): any {
        const result = new Set();
        if (!sourceObject) {
            return result;
        }
        sourceObject
            .map((object) => {
                return deserializer.convertSingleValue(
                    object,
                    typeDescriptor.elementType,
                    knownTypes,
                    memberName,
                    memberOptions,
                    serializerOptions,
                );
            })
            .filter((val) => this.isInstanceOf(val, typeDescriptor.elementType.ctor))
            .forEach((object) => {
                result.add(object);
            });
        return result;
    }
}
