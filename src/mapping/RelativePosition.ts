import { RelativePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.RelativePosition,
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
        predicate: openhps.relativeTo,
    },
})(RelativePosition.prototype, 'referenceObjectUID');
SerializableMember({
    rdf: {
        predicate: openhps.hasAccuracy,
    },
})(RelativePosition.prototype, '_accuracy');
