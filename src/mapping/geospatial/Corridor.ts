import { SerializableObject } from '@openhps/core';
import { Corridor } from '@openhps/geospatial';
import { seas } from '../../vocab';

SerializableObject({
    rdf: {
        type: [seas.Corridor],
    },
})(Corridor);
