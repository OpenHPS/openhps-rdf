import { SerializableMember, SerializableObject } from '@openhps/core';
import { schema } from '../vocab';
import { SerializableThing } from './SerializableThing';

@SerializableObject({
    rdf: {
        type: schema.Action,
    },
})
export class Action extends SerializableThing {
    @SerializableMember({
        rdf: {
            predicate: schema.result,
        },
    })
    result?: any;
}
