import { SerializableObject } from '@openhps/core';
import { Room } from '@openhps/geospatial';
import { schema, seas } from '../../vocab';

SerializableObject({
    rdf: {
        type: [schema.Room, seas.Room],
    },
})(Room);
