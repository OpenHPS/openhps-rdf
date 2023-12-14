import { SerializableObject } from '@openhps/core';
import { ssn } from '../vocab';

@SerializableObject({
    rdf: {
        type: ssn.Stimulus,
    },
})
export class Event {}
