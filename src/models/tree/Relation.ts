import { SerializableMember, SerializableObject } from '@openhps/core';
import { tree } from '../../vocab';
import { RDFSerializer } from '../../rdf';
import { SerializableThing } from '../SerializableThing';
import { SerializableNamedNode } from '../SerializableNamedNode';

@SerializableObject({
    rdf: {
        type: tree.Relation,
    },
})
export abstract class Relation {
    @SerializableMember()
    node?: SerializableThing;

    @SerializableMember({
        rdf: {
            predicate: tree.path,
        },
    })
    path?: SerializableNamedNode;

    @SerializableMember({
        rdf: {
            predicate: tree.value,
        },
    })
    value: Object; // eslint-disable-line

    @SerializableMember({
        rdf: {
            predicate: tree.remainingItems,
        },
    })
    remainingItems?: number;

    constructor(value: any) {
        this.value = RDFSerializer.serialize(value);
    }

    abstract test(value: any): boolean;
}

@SerializableObject({
    rdf: {
        type: tree.GreaterThanOrEqualToRelation,
    },
})
export class GreaterThanOrEqualToRelation extends Relation {
    test(value: any): boolean {
        return value >= this.value;
    }
}

@SerializableObject({
    rdf: {
        type: tree.GreaterThanRelation,
    },
})
export class GreaterThanRelation extends Relation {
    test(value: any): boolean {
        return value > this.value;
    }
}

@SerializableObject({
    rdf: {
        type: tree.LessThanOrEqualToRelation,
    },
})
export class LessThanOrEqualToRelation extends Relation {
    test(value: any): boolean {
        return value <= this.value;
    }
}

@SerializableObject({
    rdf: {
        type: tree.LessThanRelation,
    },
})
export class LessThanRelation extends Relation {
    test(value: any): boolean {
        return value < this.value;
    }
}
