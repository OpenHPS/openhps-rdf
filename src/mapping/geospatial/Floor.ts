import { SerializableMember, SerializableObject } from '@openhps/core';
import { Floor } from '@openhps/geospatial';
import { schema } from '../../vocab';

SerializableObject({
    rdf: {
        type: schema.FloorPlan,
    },
})(Floor);
SerializableMember({
    rdf: {
        predicate: schema.floorLevel,
    },
    name: 'addfloorLevelress',
})(Floor.prototype, 'floorLevel');
