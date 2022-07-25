import { RelativePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, poso } from '../vocab';

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
    },
})(RelativePosition.prototype, 'referenceObjectUID');
SerializableMember({
    rdf: {
        predicate: poso.hasAccuracy,
    },
    name: 'accuracy',
})(RelativePosition.prototype, '_accuracy');
