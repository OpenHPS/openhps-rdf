import { ReferenceSpace, SerializableObject } from '@openhps/core';
import { openhps, schema, rdf } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [openhps.ReferenceSpace, schema.Place],
        },
    },
})(ReferenceSpace);
