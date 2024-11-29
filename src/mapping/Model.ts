import { SerializableMapMember, SerializableObject } from '@openhps/core';
import { GraphNode, GraphShape, ModelGraph } from '@openhps/core/internal';
import { poso, ssn } from '../vocab';

SerializableObject({
    rdf: {
        type: poso.PositioningSystem,
    },
})(ModelGraph);
SerializableMapMember(String, GraphNode, {
    rdf: {
        predicate: ssn._implements,
    },
})(GraphShape.prototype, 'nodes');
