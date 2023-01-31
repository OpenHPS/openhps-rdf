import { SerializableMember, SerializableObject } from '@openhps/core';
import { Fingerprint, FingerprintFeature } from '@openhps/fingerprinting';
import { poso } from '../../vocab';

SerializableObject({
    rdf: {
        type: [poso.Fingerprint],
    },
})(FingerprintFeature);
SerializableMember({
    rdf: {
        identifier: true,
    },
    name: 'key',
})(FingerprintFeature.prototype, 'key');
