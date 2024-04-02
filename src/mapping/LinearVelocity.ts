import { LinearVelocity, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../rdf/types';
import { dcterms, poso, quantitykind, qudt } from '../vocab';

SerializableObject({
    rdf: {
        type: qudt.QuantityValue,
        predicates: {
            [qudt.hasQuantityKind]: [quantitykind.LinearVelocity],
        },
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
        predicate: poso.hasAccuracy,
    },
})(LinearVelocity.prototype, 'accuracy');
