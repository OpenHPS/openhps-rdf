import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { BLEObject, MACAddress } from '@openhps/rf';
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
SerializableArrayMember(MACAddress, {
    rdf: {
        predicate: hardware.macAddress,
    },
    name: 'knownAddresses',
})(BLEObject.prototype, 'knownAddresses');
