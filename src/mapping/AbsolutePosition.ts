import { AbsolutePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, ogc, poso } from '../vocab';

SerializableObject({
    rdf: {
        type: [poso.AbsolutePosition],
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
        predicate: poso.hasAccuracy,
    },
    name: 'accuracy',
})(AbsolutePosition.prototype, '_accuracy');
SerializableMember({
    rdf: {
        predicate: poso.hasOrientation,
    },
})(AbsolutePosition.prototype, 'orientation');
