import { ReferenceSpace, SerializableObject } from '@openhps/core';
import { openhps, rdf, ogc, schema } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [openhps.ReferenceSpace, schema.Place, ogc.SpatialObject],
        },
    },
})(ReferenceSpace);
