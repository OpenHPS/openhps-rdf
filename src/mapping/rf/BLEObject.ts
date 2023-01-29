import { SerializableMember, SerializableObject } from '@openhps/core';
import { BLEObject } from '@openhps/rf';
import { poso } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RFLandmark,
    },
})(BLEObject);
SerializableMember({
    rdf: {
        predicate: hardware.mac,
    },
    name: 'address',
})(BLEObject.prototype, 'address');