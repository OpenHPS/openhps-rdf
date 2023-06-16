import { SerializableMember, SerializableObject } from '@openhps/core';
import { Thing, IriString } from '../rdf';
import { ogc, poso } from '../vocab';
import { QuantityValue } from './QuantityValue';
// eslint-disable-next-line
const wkt = require('wkt');
import { DataFactory } from 'n3';
import { geo } from '../vocab/schema';
@SerializableObject({
    rdf: {
        type: ogc.Geometry,
        deserializer: (thing: Thing, instance: Geometry) => {
            if (thing.predicates[ogc.asWKT]) {
                const wktLiteral = thing.predicates[ogc.asWKT][0].value;
                const geojson = wkt.parse(wktLiteral);
                let geometry: any;
                switch (geojson.type) {
                    case 'Polygon':
                        geometry = new PolygonGeometry();
                        geometry.spatialAccuracy = instance.spatialAccuracy;
                        geometry.coords = geojson.coordinates[0].map((coord) => {
                            return { latitude: coord[1], longitude: coord[0], altitude: coord[2] };
                        });
                        return geometry;
                    case 'Point':
                        geometry = new PointGeometry();
                        geometry.spatialAccuracy = instance.spatialAccuracy;
                        geometry;
                        return geometry;
                    default:
                        return instance;
                }
            }
            return instance;
        },
    },
})
export abstract class Geometry {
    @SerializableMember({
        rdf: {
            predicate: ogc.hasSpatialAccuracy,
        },
    })
    spatialAccuracy?: QuantityValue;
}

@SerializableObject({
    rdf: {
        type: ogc.Geometry,
        serializer: (geometry: PolygonGeometry) => {
            return {
                predicates: {
                    [ogc.asWKT]: [
                        DataFactory.literal(
                            `POLYGON Z((${geometry.coords
                                .map((coord) => `${coord.longitude} ${coord.latitude} ${coord.altitude}`)
                                .join(', ')}))`,
                            DataFactory.namedNode(ogc.wktLiteral),
                        ),
                    ],
                    [ogc.coordinateDimension]: [DataFactory.literal(3)],
                    [ogc.spatialDimension]: [DataFactory.literal(3)],
                    [ogc.dimension]: [DataFactory.literal(3)],
                },
            };
        },
    },
})
export class PolygonGeometry extends Geometry {
    coords: { latitude: number; longitude: number; altitude: number }[] = [];
}

@SerializableObject({
    rdf: {
        type: ogc.Geometry,
        serializer: (geometry: PointGeometry) => {
            return {
                predicates: {
                    [ogc.asWKT]: [
                        geometry.altitude
                            ? DataFactory.literal(
                                  `POINT Z(${geometry.longitude} ${geometry.latitude} ${geometry.altitude})`,
                                  DataFactory.namedNode(ogc.wktLiteral),
                              )
                            : DataFactory.literal(
                                  `POINT(${geometry.longitude} ${geometry.latitude})`,
                                  DataFactory.namedNode(ogc.wktLiteral),
                              ),
                    ],
                    [ogc.coordinateDimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                    [ogc.spatialDimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                    [ogc.dimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                },
            };
        },
    },
})
export class PointGeometry extends Geometry {
    latitude: number;
    longitude: number;
    altitude: number;

    @SerializableMember({
        rdf: {
            predicate: poso.inDeployment,
            serializer: (value: string) => DataFactory.namedNode(value),
            deserializer: (thing: Thing) => thing.value,
        },
    })
    inDeployment: IriString;
}
