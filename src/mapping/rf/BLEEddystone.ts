import { SerializableObject } from '@openhps/core';
import { BLEEddystone } from '@openhps/rf';
import { posoc } from '../../vocab';

SerializableObject({
    rdf: {
        type: posoc.EddystoneBeacon,
    },
})(BLEEddystone);
