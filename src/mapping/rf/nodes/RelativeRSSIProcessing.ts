import { SerializableObject } from '@openhps/core';
import { RelativeRSSIProcessing } from '@openhps/rf';
import { poso } from '../../../vocab';

SerializableObject({
    rdf: {
        type: poso.RadioPropagation,
    },
})(RelativeRSSIProcessing);
