import { SerializableMember, SerializableObject } from '@openhps/core';
import { ModelGraph } from '@openhps/core/dist/types/graph/_internal/implementations';
import { rdfs, ssn } from '../vocab';

SerializableObject({
    rdf: {
        type: ssn.System,
    },
})(ModelGraph);
SerializableMember({
    rdf: {
        predicate: rdfs.label,
    },
})(ModelGraph, "name");
