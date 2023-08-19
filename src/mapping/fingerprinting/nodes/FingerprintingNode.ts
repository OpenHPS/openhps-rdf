import { SerializableObject } from '@openhps/core';
import { FingerprintingNode, KNNFingerprintingNode } from '@openhps/fingerprinting';
import { poso, posoc } from '../../../vocab';

SerializableObject({
    rdf: {
        type: poso.Fingerprinting,
        serializer: (node) => {
            let value: IriString = undefined;
            if (node instanceof KNNFingerprintingNode) {
                value = posoc.KNNFingerprinting;
            }

            return {
                value,
            };
        },
    },
})(FingerprintingNode);
