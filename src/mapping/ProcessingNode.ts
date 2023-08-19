import { ProcessingNode, SerializableObject } from '@openhps/core';
import { sosa } from '../vocab';

SerializableObject({
    rdf: {
        type: sosa.Procedure,
    },
})(ProcessingNode);
