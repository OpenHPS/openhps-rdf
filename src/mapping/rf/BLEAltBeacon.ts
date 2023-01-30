import { SerializableObject } from '@openhps/core';
import { BLEAltBeacon } from '@openhps/rf';
import { posoc } from '../../vocab';

SerializableObject({
    rdf: {
        type: posoc.AltBeacon,
    },
})(BLEAltBeacon);
