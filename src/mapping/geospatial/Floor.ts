import { SerializableMember, SerializableObject } from '@openhps/core';
import { Floor } from '@openhps/geospatial';
import { Thing } from '../../rdf';
import { schema, seas } from '../../vocab';

SerializableObject({
    rdf: {
        type: [schema.Accommodation, seas.Floor],
    },
})(Floor);
SerializableMember({
    rdf: {
        predicate: schema.floorLevel,
        serializer: (level: number) => {
            return String(level);
        },
        deserializer: (thing: Thing) => {
            return parseInt(thing.value);
        },
    },
    name: 'floorLevel',
})(Floor.prototype, 'floorLevel');
