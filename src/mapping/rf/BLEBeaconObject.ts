import { SerializableObject } from '@openhps/core';
import { BLEBeaconObject } from '@openhps/rf';
import { poso } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.BluetoothBeacon,
    },
})(BLEBeaconObject);