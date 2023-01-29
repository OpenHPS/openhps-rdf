import { SerializableObject } from '@openhps/core';
import { WLANObject } from '@openhps/rf';
import { poso } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RFLandmark,
    },
})(WLANObject);
