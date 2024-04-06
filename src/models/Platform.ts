import { SerializableMember, SerializableObject } from '@openhps/core';
import { SerializableThing } from './SerializableThing';
import { sosa, rdfs } from '../vocab';

@SerializableObject({
    rdf: {
        type: sosa.Platform,
    },
})
export class Platform extends SerializableThing {
    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: 'en',
        },
    })
    label?: string;

    @SerializableMember({
        rdf: {
            predicate: rdfs.comment,
            language: 'en',
        },
    })
    comment?: string;
}
