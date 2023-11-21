import { RelativePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, poso } from '../vocab';
import { Thing } from '../rdf';
import { DataFactory } from 'n3';

SerializableObject({
    rdf: {
        type: poso.RelativePosition,
    },
})(RelativePosition);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(RelativePosition.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: poso.isRelativeTo,
        serializer: (uid: string, _1, _2, baseUri: string) => {
            return DataFactory.namedNode(`${baseUri}${uid}`);
        },
        deserializer: (thing: Thing) =>
            thing.value.substring(Math.max(thing.value.lastIndexOf('/'), thing.value.lastIndexOf('#')) + 1),
    },
})(RelativePosition.prototype, 'referenceObjectUID');
SerializableMember({
    rdf: {
        predicate: poso.hasAccuracy,
    },
    name: 'accuracy',
})(RelativePosition.prototype, '_accuracy');
