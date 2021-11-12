import { AngularVelocity, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, om2, openhps } from '../vocab';

SerializableObject({
    rdf: {
        type: om2.AngularVelocity,
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
