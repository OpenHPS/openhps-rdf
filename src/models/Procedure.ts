import { Node, SerializableObject } from '@openhps/core';
import { sosa } from '../vocab';
import { applyMixins } from './utils';
import { SerializableThing } from './SerializableThing';

@SerializableObject({
    rdf: {
        type: sosa.Procedure,
    },
})
export class Procedure extends SerializableThing { // eslint-disable-line
}
export interface Procedure extends SerializableThing, Node<any, any> {} // eslint-disable-line

applyMixins(Procedure, [Node]);
