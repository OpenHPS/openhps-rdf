import { Node, SerializableMember, SerializableObject } from '@openhps/core';
import { Thing } from '../rdf';
import { sosa } from '../vocab';

SerializableObject({
    rdf: {
        type: sosa.Procedure,
    },
})(Node);
SerializableMember({
    rdf: {
        identifier: true,
        serializer: (uid: string) => uid,
        deserializer: (thing: Thing) =>
            thing.value.substring(Math.max(thing.value.lastIndexOf('/'), thing.value.lastIndexOf('#')) + 1),
    },
})(Node.prototype, 'uid');
