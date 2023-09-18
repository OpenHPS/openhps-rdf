import { Node, SerializableMember, SerializableObject } from '@openhps/core';
import { RDFBuilder, Thing } from '../rdf';
import { poso, rdf, sosa, ssn } from '../vocab';

SerializableObject({
    rdf: {
        type: sosa.Procedure,
        serializer: (node: Node<any, any>) => {
            const input = RDFBuilder.blankNode().add(rdf.type, ssn.Input);
            node.inlets.forEach((inlet) => {
                input.add(poso.madeByProcedure, inlet);
            });
            return {
                predicates: {
                    [ssn.hasInput]: [input.build()],
                },
            } as Thing;
        },
    },
})(Node);
SerializableMember({
    rdf: {
        identifier: true,
        serializer: (uid: string) => uid,
        deserializer: (thing: Thing) =>
            thing.value.substring(Math.max(thing.value.lastIndexOf('/'), thing.value.lastIndexOf('#')) + 1),
    },
})(Node.prototype, 'uid');
