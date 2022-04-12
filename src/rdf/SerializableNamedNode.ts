import { SerializableObject } from '@openhps/core';
import { NamedNode } from 'n3';
import { Thing } from './types';

@SerializableObject({
    rdf: {
        serializer: (object: SerializableNamedNode) => {
            return {
                value: object.value,
            };
        },
        deserializer: (thing: Thing) => {
            return new SerializableNamedNode(thing.value);
        },
    },
})
export class SerializableNamedNode extends NamedNode {}
