import { SerializableArrayMember, SerializableObject } from '@openhps/core';
import { tree } from '../../vocab';
import { Relation } from './Relation';
import { SerializableThing } from '../SerializableThing';
import { IriString } from '../../rdf/';

/**
 * A Node is a node that may contain links to other dereferenceable resources that lead to a full overview of a Collection.
 */
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

    constructor(iri?: IriString) {
        super(iri);
    }

    /**
     * Get the child nodes of this node.
     * @returns {Node[]} Child nodes
     */
    getChildNodes(): Node[] {
        return this.relations.map((r) => r.node as Node);
    }

    /**
     * Get the child node that matches the given value.
     * @param {object} value Value to match
     * @returns {Node} Child node
     */
    // eslint-disable-next-line
    getChildNode(value: Object): Node {
        return this.relations.find((r) => {
            return r ? r.value && r.test(value) : false;
        })?.node as Node;
    }
}
