import { SerializableObject, GeographicalPosition, SerializableMember } from '@openhps/core';
import { geo, m3lite } from '../vocab';

SerializableObject({
    rdf: {
        types: [geo.Point]
    }
})(GeographicalPosition);
SerializableMember({
    rdf: {
        predicate: geo.lat
    }
})(GeographicalPosition.prototype, "latitude");
SerializableMember({
    rdf: {
        predicate: geo.long
    }
})(GeographicalPosition.prototype, "longitude");
SerializableMember({
    rdf: {
        predicate: m3lite.DirectionHeading // TODO: Temporary this is a class and not a property
    }
})(GeographicalPosition.prototype, "orientation");
