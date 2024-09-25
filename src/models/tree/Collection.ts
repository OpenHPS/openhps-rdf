import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { tree } from '../../vocab';
import { SerializableThing } from '../SerializableThing';
import { Node } from './Node';

/**
 * A collection has members that may adhere to a certain shape.
 */
@SerializableObject({
    rdf: {
        type: tree.Collection,
    },
})
export class Collection extends SerializableThing {
    @SerializableMember({
        rdf: {
            predicate: tree.view,
        },
    })
    view?: Node;

    @SerializableArrayMember(SerializableThing, {
        rdf: {
            predicate: tree.member,
        },
    })
    members?: SerializableThing[] = [];
}
