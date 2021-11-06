import {
    DataSerializerConfig,
    Deserializer,
    DeserializerFn,
    IndexedObject,
    MemberOptionsBase,
    ObjectMemberMetadata,
    Serializable,
    TypeDescriptor,
} from '@openhps/core';
import * as N3 from 'n3';

export class InternalRDFDeserializer extends Deserializer {
    deserializationStrategy = new Map<Function, DeserializerFn<any, TypeDescriptor, any>>([
        /* Literals */
        [Number, this.deserializeLiteral],
        [String, this.deserializeLiteral],
        [Boolean, this.deserializeLiteral],
    ]);

    protected typeResolver(sourceObject: IndexedObject, knownTypes: Map<string, Serializable<any>>) {
        const result: Serializable<any> = Object;
        if (sourceObject instanceof N3.Literal) {
            // Determine type by literal datatype
        } else if (sourceObject['predicates'] !== undefined) {
            // Get type based on rdf:type predicate(s) if any
        }
        return result;
    }

    convertSingleValue(
        sourceObject: any,
        typeDescriptor: TypeDescriptor,
        knownTypes: Map<string, Serializable<any>>,
        memberName = 'object',
        memberOptions?: ObjectMemberMetadata,
        serializerOptions?: DataSerializerConfig,
    ): any {
        if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
            return null;
        } else if (sourceObject === null || sourceObject === undefined) {
            return;
        }

        const deserializer = this.deserializationStrategy.get(typeDescriptor.ctor);
        if (deserializer !== undefined) {
            return deserializer(sourceObject, typeDescriptor, knownTypes, memberName, this, memberOptions);
        }

        if (typeof sourceObject === 'object') {
            return this.deserializeObject(sourceObject, typeDescriptor, knownTypes, memberName, this);
        }

        let error = `Could not deserialize '${memberName}'; don't know how to deserialize type`;

        if (typeDescriptor.hasFriendlyName()) {
            error += ` '${typeDescriptor.ctor.name}'`;
        }

        this.errorHandler(new TypeError(`${error}.`));
    }

    deserializeObject<T>(
        sourceObject: IndexedObject,
        typeDescriptor: TypeDescriptor,
        knownTypes: Map<string, Function>,
        memberName: string,
        deserializer: Deserializer,
    ): IndexedObject | T | undefined {
        return undefined;
    }

    deserializeLiteral<T, TD extends TypeDescriptor>(
        sourceObject: N3.Literal,
        typeDescriptor: TD,
        knownTypes: Map<string, Serializable<any>>,
        memberName: string,
        deserializer: Deserializer,
        memberOptions?: MemberOptionsBase,
    ): any {
        return sourceObject.value;
    }
}
