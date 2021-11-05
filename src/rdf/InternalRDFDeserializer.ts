import { Deserializer, DeserializerFn, IndexedObject, MemberOptionsBase, Serializable, TypeDescriptor } from "@openhps/core";

export class InternalRDFDeserializer extends Deserializer {
    deserializationStrategy = new Map<Function, DeserializerFn<any, TypeDescriptor, any>>([
        /* Literals */
        // [Number, this.serializeLiteral],
        // [String, this.serializeLiteral],
        // [Boolean, this.serializeLiteral]
    ]);

    protected typeResolver(sourceObject: IndexedObject, knownTypes: Map<string, Serializable<any>>) {
        let result: Serializable<any> = Object;
        if (sourceObject['predicates'] !== undefined) {

        }
        return result;
    }

    convertSingleValue(
        sourceObject: any,
        typeDescriptor: TypeDescriptor,
        knownTypes: Map<string, Serializable<any>>,
        memberName = 'object',
        memberOptions?: MemberOptionsBase,
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
            );
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
}
