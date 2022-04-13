import { AbsolutePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, ogc, openhps, qudt } from '../vocab';

SerializableObject({
    rdf: {
        type: ogc.Geometry,
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
        predicate: qudt.unit,
    },
})(AbsolutePosition.prototype, 'unit');
SerializableMember({
    rdf: {
        predicate: openhps.hasAccuracy,
    },
    name: 'accuracy',
})(AbsolutePosition.prototype, '_accuracy');
SerializableMember({
    rdf: {
        predicate: openhps.hasOrientation,
    },
})(AbsolutePosition.prototype, 'orientation');
