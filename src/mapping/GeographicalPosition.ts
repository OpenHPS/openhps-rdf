import { SerializableObject, GeographicalPosition, SerializableMember } from '@openhps/core';
import { geo, m3lite, schema } from '../vocab';

SerializableObject({
    rdf: {
        types: [geo.Point]
    }
})(GeographicalPosition);
SerializableMember({
    rdf: {
        predicate: schema.latitude
    }
})(GeographicalPosition.prototype, "latitude");
SerializableMember({
    rdf: {
        predicate: schema.longitude
    }
})(GeographicalPosition.prototype, "longitude");
SerializableMember({
    rdf: {
        predicate: m3lite.DirectionHeading // TODO: Temporary this is a class and not a property
    }
})(GeographicalPosition.prototype, "orientation");
