import { SerializableMember, SerializableObject, Unit } from '@openhps/core';
import { m3lite, qu, rdf } from '../vocab';

SerializableObject({
    rdf: {
        uri: (object: Unit) => {
            return m3lite.Metre;
        },
    },
})(Unit);
