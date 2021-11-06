import { RelativePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, rdf } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [openhps.RelativePosition],
        }
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
