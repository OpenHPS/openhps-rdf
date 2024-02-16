import { SerializableObject } from '@openhps/core';
import { Zone } from '@openhps/geospatial';
import { schema, seas } from '../../vocab';

SerializableObject({
    rdf: {
        type: [schema.Place, seas.BuildingSpace],
    },
})(Zone);
