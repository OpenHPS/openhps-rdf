import { SerializableArrayMember, SerializableObject } from '@openhps/core';
import { tree } from '../../vocab';
import { Relation } from './Relation';
import { SerializableThing } from '../SerializableThing';
import { IriString } from '../../rdf/';

@SerializableObject({
    rdf: {
        type: tree.Node,
    },
})
export class Node extends SerializableThing {
    @SerializableArrayMember(Relation, {
        rdf: {
            predicate: tree.relation,
        },
    })
    relations: Relation[] = [];

    @SerializableArrayMember(SerializableThing, {
        rdf: {
            predicate: tree.member,
        },
    })
    members?: SerializableThing[] = [];

    constructor(iri?: IriString) {
        super(iri);
    }

    getChildNodes(): Node[] {
        return this.relations.map((r) => r.node as Node);
    }

    // eslint-disable-next-line
    getChildNode(value: Object): Node {
        return this.relations.find((r) => {
            return r ? r.value && r.test(value) : false;
        })?.node as Node;
    }
}
