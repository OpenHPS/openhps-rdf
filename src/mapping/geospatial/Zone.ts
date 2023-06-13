import { SerializableObject } from '@openhps/core';
import { Zone } from '@openhps/geospatial';
import { schema } from '../../vocab';

SerializableObject({
    rdf: {
        type: [schema.Place],
    },
})(Zone);
