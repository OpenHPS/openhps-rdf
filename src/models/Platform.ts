import { SerializableObject } from '@openhps/core';
import { SerializableThing } from './SerializableThing';
import { sosa } from '../vocab';

@SerializableObject({
    rdf: {
        type: sosa.Platform,
    },
})
export class Platform extends SerializableThing {
    get name(): string {
        return this.label;
    }

    set name(value: string) {
        this.label = value;
    }
}
