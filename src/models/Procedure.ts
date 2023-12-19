import { Node, SerializableMember, SerializableObject } from '@openhps/core';
import { SerializableNamedNode } from './SerializableNamedNode';
import { sosa, rdfs } from '../vocab';
import { applyMixins } from './utils';

@SerializableObject({
    rdf: {
        type: sosa.Procedure,
    },
})
export class Procedure extends SerializableNamedNode { // eslint-disable-line
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
export interface Procedure extends SerializableNamedNode, Node<any, any> {} // eslint-disable-line

applyMixins(Procedure, [Node]);
