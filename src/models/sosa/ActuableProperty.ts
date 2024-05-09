import { SerializableObject } from '@openhps/core';
import { sosa } from '../../vocab';
import { Property } from './Property';

@SerializableObject({
    rdf: {
        type: sosa.ActuatableProperty,
    },
})
export class ActuableProperty extends Property {}
