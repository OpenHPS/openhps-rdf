import { SerializableMember, SerializableObject } from '@openhps/core';
import { BLEObject } from '@openhps/rf';
import { poso, hardware } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RFLandmark,
    },
})(BLEObject);
SerializableMember({
    rdf: {
        predicate: hardware.macAddress,
    },
    name: 'address',
})(BLEObject.prototype, 'address');
