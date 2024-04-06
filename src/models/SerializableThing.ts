import { SerializableObject } from '@openhps/core';
import { BlankNodeId, IriString, RDFSerializer, Thing } from '../rdf';

@SerializableObject({
    rdf: {
        serializer: (object: SerializableThing) => {
            return object.toThing();
        },
        deserializer: (thing: Thing, object: SerializableThing) => {
            object.id = thing.value as IriString | BlankNodeId;
            object.termType = thing.termType;
            return object;
        },
    },
})
export class SerializableThing {
    termType: 'NamedNode' | 'BlankNode';
    id: IriString | BlankNodeId;

    toThing(): Thing {
        const deserialized = RDFSerializer.serialize(this);
        return {
            termType: this.termType,
            value: this.id,
            ...deserialized,
        };
    }
}
