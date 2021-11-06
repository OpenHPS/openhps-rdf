import { AbsolutePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, qu } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.AbsolutePosition,
    },
})(AbsolutePosition);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(AbsolutePosition.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: qu.unit,
    },
})(AbsolutePosition.prototype, 'unit');
SerializableMember({
    rdf: {
        predicate: openhps.accuracy,
    },
})(AbsolutePosition.prototype, '_accuracy');
