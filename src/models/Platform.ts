import { SerializableMember, SerializableObject } from '@openhps/core';
import { SerializableNamedNode } from './SerializableNamedNode';
import { sosa, rdfs } from '../vocab';

@SerializableObject({
    rdf: {
        type: sosa.Platform,
    },
})
export class Platform extends SerializableNamedNode {
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
