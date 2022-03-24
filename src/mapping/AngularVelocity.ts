import { AngularVelocity, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, qudt } from '../vocab';

SerializableObject({
    rdf: {
        type: qudt.QuantityValue,
    },
})(AngularVelocity);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(AngularVelocity.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: openhps.hasAccuracy,
    },
})(AngularVelocity.prototype, 'accuracy');
