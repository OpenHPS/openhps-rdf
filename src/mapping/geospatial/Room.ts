import { SerializableObject } from '@openhps/core';
import { Room } from '@openhps/geospatial';
import { schema } from '../../vocab';

SerializableObject({
    rdf: {
        type: schema.Room,
    },
})(Room);
