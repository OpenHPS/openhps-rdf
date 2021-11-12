import { LinearVelocity, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, om2, openhps } from '../vocab';

SerializableObject({
    rdf: {
        type: om2.Velocity,
    },
})(LinearVelocity);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(LinearVelocity.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: openhps.hasAccuracy,
    },
})(LinearVelocity.prototype, 'accuracy');
