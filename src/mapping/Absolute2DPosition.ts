import { SerializableObject, Absolute2DPosition } from '@openhps/core';
import { DataFactory } from 'n3';
import { ogc } from '../vocab';

SerializableObject({
    rdf: {
        serializer: (pos: Absolute2DPosition) => {
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
        },
    },
})(Absolute2DPosition);
