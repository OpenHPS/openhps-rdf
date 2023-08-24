import { SerializableObject, GeographicalPosition, SerializableMember } from '@openhps/core';
import { DataFactory } from 'n3';
import { Thing } from '../rdf/types';
import { xsd } from '../decorators';
import { geo, schema, ogc } from '../vocab';

SerializableObject({
    rdf: {
        type: geo.Point,
        serializer: (pos: GeographicalPosition) => {
            if (pos.altitude) {
                return {
                    predicates: {
                        [ogc.asWKT]: [
                            DataFactory.literal(
                                `POINT Z(${pos.x} ${pos.y} ${pos.z})`,
                                DataFactory.namedNode(ogc.wktLiteral),
                            ),
                        ],
                        [ogc.coordinateDimension]: [DataFactory.literal(3)],
                        [ogc.spatialDimension]: [DataFactory.literal(3)],
                        [ogc.dimension]: [DataFactory.literal(3)],
                    },
                };
            } else {
                return {
                    predicates: {
                        [ogc.asWKT]: [
                            DataFactory.literal(`POINT(${pos.x} ${pos.y})`, DataFactory.namedNode(ogc.wktLiteral)),
                        ],
                        [ogc.coordinateDimension]: [DataFactory.literal(2)],
                        [ogc.spatialDimension]: [DataFactory.literal(2)],
                        [ogc.dimension]: [DataFactory.literal(2)],
                    },
                };
            }
        },
        deserializer: (thing: Thing, instance: GeographicalPosition) => {
            return instance;
        },
    },
})(GeographicalPosition);
SerializableMember({
    rdf: {
        predicate: schema.latitude,
        datatype: xsd.double,
    },
})(GeographicalPosition.prototype, 'y');
SerializableMember({
    rdf: {
        predicate: schema.longitude,
        datatype: xsd.double,
    },
})(GeographicalPosition.prototype, 'x');
SerializableMember({
    rdf: {
        predicate: schema.elevation,
        datatype: xsd.double,
    },
})(GeographicalPosition.prototype, 'z');
