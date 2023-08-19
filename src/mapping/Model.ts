import { SerializableMapMember, SerializableObject } from '@openhps/core';
import { GraphNode, GraphShape, ModelGraph } from '@openhps/core/internal';
import { ssn } from '../vocab';

SerializableObject({
    rdf: {
        type: ssn.System,
    },
})(ModelGraph);
SerializableMapMember(String, GraphNode, {
    rdf: {
        predicate: ssn._implements,
    },
})(GraphShape.prototype, 'nodes');
// SerializableMapMember(String, Edge, {
//     rdf: {
//         // serializer: (edges: Map<string, Edge<any>>) => {
//         //     return Array.from(edges.values()).map((edge: Edge<any>) => ({
//         //         input: edge.inputNode.uid,
//         //         output: edge.outputNode.uid,
//         //     }));
//         // },
//     }
// })(GraphShape.prototype, "edges")
