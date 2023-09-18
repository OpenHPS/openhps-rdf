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
