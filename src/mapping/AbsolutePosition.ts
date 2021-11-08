import { AbsolutePosition, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, geosparql, openhps, qu } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.AbsolutePosition,
        serializer: (pos: AbsolutePosition) => {
            return {
                predicates: {

                }
            }
        }
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
        predicate: openhps.hasAccuracy,
    },
})(AbsolutePosition.prototype, '_accuracy');
SerializableMember({
    rdf: {
        predicate: openhps.hasOrientation,
    },
})(AbsolutePosition.prototype, 'orientation');
