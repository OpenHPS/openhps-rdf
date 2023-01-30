import { SerializableObject } from '@openhps/core';
import { Building } from '@openhps/geospatial';
import { schema, seas } from '../../vocab';

SerializableObject({
    rdf: {
        type: [schema.Accommodation, seas.Building],
    },
})(Building);
