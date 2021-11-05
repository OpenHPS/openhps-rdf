import { Deserializer, IndexedObject, Serializable } from "@openhps/core";

export class InternalRDFDeserializer extends Deserializer {
    
    protected typeResolver(sourceObject: IndexedObject, knownTypes: Map<string, Serializable<any>>) {
        let type: Serializable<any> = Object;
        if (sourceObject['predicates'] !== undefined) {

        }
        return type;
    }

}
