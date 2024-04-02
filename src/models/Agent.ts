import { SerializableMember, SerializableObject } from '@openhps/core';
import { foaf, rdfs, vcard } from '../vocab';
import { SerializableNamedNode } from './SerializableNamedNode';
import { User } from './User';

@SerializableObject({
    rdf: {
        type: [foaf.Agent, vcard.Agent],
    },
})
export class Agent extends SerializableNamedNode {
    @SerializableMember({
        rdf: {
            predicate: [foaf.isPrimaryTopicOf, rdfs.seeAlso],
        },
    })
    user?: User;
}
