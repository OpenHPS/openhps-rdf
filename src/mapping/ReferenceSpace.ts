import { ReferenceSpace, SerializableObject } from '@openhps/core';
import { rdf, ogc, schema } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [schema.Place, ogc.SpatialObject],
        },
    },
})(ReferenceSpace);
