import { GeographicalPosition, SerializableObject } from '@openhps/core';
import { SymbolicSpace } from '@openhps/geospatial';
import { RDFSerializer } from '../../rdf/RDFSerializer';
import { PolygonGeometry } from '../../models/PolygonGeometry';
import { ssn, ogc } from '../../vocab';

SerializableObject({
    rdf: {
        type: ssn.Deployment,
        serializer: (obj: SymbolicSpace<GeographicalPosition>) => {
            const geometry = new PolygonGeometry();
            geometry.coords = obj
                .getBounds()
                .map((pos) => (pos instanceof GeographicalPosition ? pos : obj.transform(pos)))
                .map((coord) => {
                    return {
                        latitude: coord.y,
                        longitude: coord.x,
                        altitude: coord.z,
                    };
                });
            return {
                predicates: {
                    [ogc.hasGeometry]: [RDFSerializer.serialize(geometry)],
                },
            };
        },
    },
})(SymbolicSpace);
