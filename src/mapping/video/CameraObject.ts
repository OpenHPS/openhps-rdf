import { SerializableObject } from '@openhps/core';
import { CameraObject } from '@openhps/video';
import { sosa } from '../../vocab';

SerializableObject({
    rdf: {
        type: sosa.FeatureOfInterest,
    },
})(CameraObject);
