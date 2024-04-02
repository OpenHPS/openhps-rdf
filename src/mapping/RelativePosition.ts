import { RelativePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../rdf/types';
import { dcterms, poso } from '../vocab';
import { Thing } from '../rdf';
import { DataFactory } from 'n3';
import { MemberSerializerOptions } from '../decorators/options';

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
        identifier: false,
        predicate: poso.isRelativeTo,
        serializer: (uid: string, _, options: MemberSerializerOptions) => {
            return DataFactory.namedNode(`${options.baseUri}${uid}`);
        },
        deserializer: (thing: Thing) => {
            return thing.value.substring(Math.max(thing.value.lastIndexOf('/'), thing.value.lastIndexOf('#')) + 1);
        },
    },
})(RelativePosition.prototype, 'referenceObjectUID');
SerializableMember({
    rdf: {
        predicate: poso.hasAccuracy,
    },
    name: 'accuracy',
})(RelativePosition.prototype, '_accuracy');
