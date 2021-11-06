import { SerializableObject, GeographicalPosition, SerializableMember } from '@openhps/core';
import { xsd } from '../decorators';
import { geo, m3lite, rdf, schema } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [geo.Point],
        },
    },
})(GeographicalPosition);
SerializableMember({
    rdf: {
        predicate: schema.latitude,
        datatype: xsd.decimal,
    },
})(GeographicalPosition.prototype, 'latitude');
SerializableMember({
    rdf: {
        predicate: schema.longitude,
        datatype: xsd.decimal,
    },
})(GeographicalPosition.prototype, 'longitude');
SerializableMember({
    rdf: {
        predicate: schema.elevation,
        datatype: xsd.decimal,
    },
})(GeographicalPosition.prototype, 'altitude');
SerializableMember({
    rdf: {
        predicate: m3lite.DirectionHeading, // TODO: Temporary this is a class and not a property
    },
})(GeographicalPosition.prototype, 'orientation');
