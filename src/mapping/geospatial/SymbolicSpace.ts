import { GeographicalPosition, SerializableMember, SerializableObject } from '@openhps/core';
import { SymbolicSpace } from '@openhps/geospatial';
import { RDFSerializer } from '../../rdf/RDFSerializer';
import { PolygonGeometry } from '../../models/Geometry';
import { ssn, ogc } from '../../vocab';
import { Thing } from '../../rdf';
import { MemberSerializerOptions } from '../../decorators/options';
import { DataFactory } from 'n3';

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
        deserializer: (thing: Thing, instance: SymbolicSpace<any>) => {
            if (thing.predicates[ogc.hasGeometry]) {
                const geometry = RDFSerializer.deserialize(thing.predicates[ogc.hasGeometry][0] as Thing);
                if (geometry instanceof PolygonGeometry) {
                    instance.setBounds(
                        geometry.coords.map((coord) => {
                            return new GeographicalPosition(coord.latitude, coord.longitude, coord.altitude);
                        }),
                    );
                }
            }
            return instance;
        },
    },
})(SymbolicSpace);
SerializableMember({
    rdf: {
        predicate: ogc.sfWithin,
        serializer: (uid: string, _, options: MemberSerializerOptions) => {
            return DataFactory.namedNode(`${options.baseUri}${uid}`);
        },
        deserializer: (thing: Thing) => {
            return thing.value.substring(Math.max(thing.value.lastIndexOf('/'), thing.value.lastIndexOf('#')) + 1);
        },
    },
})(SymbolicSpace.prototype, 'parentUID');
