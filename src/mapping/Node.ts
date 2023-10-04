import { Edge, Node, ProcessingNode, SerializableMember, SerializableObject } from '@openhps/core';
import { RDFBuilder, Thing, RDFSerializer, IriString } from '../rdf';
import { poso, rdf, rdfs, sosa, ssn } from '../vocab';
import { DataFactory } from 'n3';

SerializableObject({
    rdf: {
        serializer: (node: Node<any, any>, baseUri: IriString) => {
            if (!(node instanceof ProcessingNode)) {
                return undefined;
            }

            const input = RDFBuilder.blankNode().add(rdf.type, ssn.Input);
            let hasInput = false;
            if (node.graph) {
                node.inlets.forEach((inlet) => {
                    const previousNode = (inlet as Edge<any>).inputNode;
                    if (previousNode instanceof ProcessingNode) {
                        hasInput = true;
                        input.add(
                            poso.madeByProcedure,
                            RDFSerializer.serialize(previousNode, {
                                baseUri,
                            }),
                        );
                    }
                });
            }
            return {
                predicates: {
                    [rdf.type]: [DataFactory.namedNode(sosa.Procedure)],
                    [rdfs.label]: [DataFactory.literal(node.constructor.name, 'en')],
                    ...(hasInput
                        ? {
                              [ssn.hasInput]: [input.build()],
                          }
                        : {}),
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
