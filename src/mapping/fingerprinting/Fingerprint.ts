import { SerializableObject } from '@openhps/core';
import { Fingerprint } from '@openhps/fingerprinting';
import { poso } from '../../vocab';

SerializableObject({
    rdf: {
        type: [poso.Fingerprint],
    },
})(Fingerprint);
