import { ReferenceSpace, SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, foaf, schema, rdf } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [openhps.ReferenceSpace, schema.Place],
        },
    },
})(ReferenceSpace);
