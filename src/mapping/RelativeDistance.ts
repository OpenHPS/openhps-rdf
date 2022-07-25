import { RelativeDistance, SerializableObject } from '@openhps/core';
import { poso } from '../vocab';

SerializableObject({
    rdf: {
        type: poso.RelativeDistance,
    },
})(RelativeDistance);
