import { SerializableMember, SerializableObject } from '@openhps/core';
import { BlankNodeId, IriString, Thing } from '../rdf/types';
import { dcterms, rdfs } from '../vocab';
import { RDFSerializer } from '../rdf/RDFSerializer';

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

    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: 'en',
        },
    })
    label?: string;

    @SerializableMember({
        rdf: {
            predicate: [rdfs.comment, dcterms.description],
            language: 'en',
        },
    })
    description?: string;

    get comment(): string {
        return this.description;
    }

    set comment(value: string) {
        this.description = value;
    }

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
