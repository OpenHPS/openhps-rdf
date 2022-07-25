import { RelativeAngle, SerializableObject } from '@openhps/core';
import { poso } from '../vocab';

SerializableObject({
    rdf: {
        type: poso.RelativeAngle,
    },
})(RelativeAngle);
