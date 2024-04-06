import { Node, SerializableMember, SerializableObject } from '@openhps/core';
import { sosa, rdfs } from '../vocab';
import { applyMixins } from './utils';
import { SerializableThing } from './SerializableThing';

@SerializableObject({
    rdf: {
        type: sosa.Procedure,
    },
})
export class Procedure extends SerializableThing { // eslint-disable-line
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
export interface Procedure extends SerializableThing, Node<any, any> {} // eslint-disable-line

applyMixins(Procedure, [Node]);
