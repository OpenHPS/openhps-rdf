import { SerializableMember, SerializableObject } from '@openhps/core';
import { PolygonGeometry } from './Geometry';
import { ogc, schema } from '../vocab';

@SerializableObject({
    rdf: {
        type: [schema.Place, ogc.Feature],
    },
})
export class Place {
    @SerializableMember({
        rdf: {
            predicate: ogc.hasGeometry,
        },
    })
    geometry: PolygonGeometry;
}
