import { SerializableObject, GeographicalPosition, SerializableMember } from '@openhps/core';
import { xsd } from '../decorators';
import { geo, schema } from '../vocab';

SerializableObject({
    rdf: {
        type: geo.Point,
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
