import { SerializableObject } from '@openhps/core';
import { Building } from '@openhps/geospatial';
import { schema } from '../../vocab';

SerializableObject({
    rdf: {
        type: schema.Accommodation,
    },
})(Building);
