import { RelativeDistance, SerializableMember, SerializableObject } from '@openhps/core';
import { openhps } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.RelativePosition,
    },
})(RelativeDistance);``
