import { ReferenceSpace, SerializableObject } from '@openhps/core';
import { openhps, schema, rdf, ogc } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [openhps.ReferenceSpace, schema.Place, ogc.SpatialObject],
        },
    },
})(ReferenceSpace);
