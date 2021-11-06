import { Orientation, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, rdf } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [openhps.Orientation],
        },
    },
})(Orientation);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(Orientation.prototype, 'timestamp');
