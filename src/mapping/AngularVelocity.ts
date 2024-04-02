import { AngularVelocity, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../rdf/types';
import { dcterms, poso, qudt } from '../vocab';

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
        predicate: poso.hasAccuracy,
    },
})(AngularVelocity.prototype, 'accuracy');
