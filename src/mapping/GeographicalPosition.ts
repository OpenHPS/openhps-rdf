import { SerializableObject, GeographicalPosition, SerializableMember } from '@openhps/core';
import { DataFactory } from 'n3';
import { Thing, xsd } from '../rdf/types';
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
        predicate: [schema.latitude],
        serializer: (value: number) => {
            return DataFactory.literal(value, DataFactory.namedNode(xsd.double));
        },
        deserializer: (thing: Thing, target: GeographicalPosition) => {
            if (Number.isNaN(parseFloat(thing.value))) {
                return target.y;
            }
            return parseFloat(thing.value);
        },
    },
})(GeographicalPosition.prototype, 'y');
SerializableMember({
    rdf: {
        predicate: [schema.longitude],
        serializer: (value: number) => {
            return DataFactory.literal(value, DataFactory.namedNode(xsd.double));
        },
        deserializer: (thing: Thing, target: GeographicalPosition) => {
            if (Number.isNaN(parseFloat(thing.value))) {
                return target.x;
            }
            return parseFloat(thing.value);
        },
    },
})(GeographicalPosition.prototype, 'x');
SerializableMember({
    rdf: {
        predicate: [schema.elevation],
        serializer: (value: number) => {
            return DataFactory.literal(value, DataFactory.namedNode(xsd.double));
        },
        deserializer: (thing: Thing, target: GeographicalPosition) => {
            if (Number.isNaN(parseFloat(thing.value))) {
                return target.z;
            }
            return parseFloat(thing.value);
        },
    },
})(GeographicalPosition.prototype, 'z');
