import { SerializableMember, SerializableObject } from '@openhps/core';
import { BlankNodeId, IriString, RDFSerializer, Thing } from '../rdf';

@SerializableObject({
    rdf: {
        deserializer: (thing: Thing, object: SerializableThing) => {
            object.id = thing.value as IriString | BlankNodeId;
            object.termType = thing.termType;
            return object;
        },
    },
})
export class SerializableThing {
    termType: 'NamedNode' | 'BlankNode';
    @SerializableMember({
        rdf: {
            identifier: true,
        },
    })
    id: IriString | BlankNodeId;

    constructor(id?: IriString | BlankNodeId) {
        this.id = id;
    }

    toThing(): Thing {
        const deserialized = RDFSerializer.serialize(this);
        return {
            termType: this.termType,
            value: this.id,
            ...deserialized,
        };
    }
}
