import { SerializableMember, SerializableObject } from '@openhps/core';
import { schema } from '../vocab';
import { SerializableNamedNode } from './SerializableNamedNode';

@SerializableObject({
    rdf: {
        type: schema.Action,
    },
})
export class Action extends SerializableNamedNode {
    @SerializableMember({
        rdf: {
            predicate: schema.result,
        },
    })
    result?: any;
}
