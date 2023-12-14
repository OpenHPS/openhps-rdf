import { SerializableObject } from '@openhps/core';
import { sosa } from '../vocab';
import { Property } from './Property';

@SerializableObject({
    rdf: {
        type: sosa.ObservableProperty,
    },
})
export class ObservableProperty extends Property {}
