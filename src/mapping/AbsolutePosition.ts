import { AbsolutePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps } from '../vocab';

SerializableObject({
    rdf: {
        types: [openhps.AbsolutePosition]
    }
})(AbsolutePosition);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime
    }
})(AbsolutePosition.prototype, "timestamp");
