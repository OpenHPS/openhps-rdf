import { SerializableObject, Absolute2DPosition } from '@openhps/core';
import { DataFactory } from 'n3';
import { ogc } from '../vocab';

SerializableObject({
    rdf: {
        serializer: (pos: Absolute2DPosition) => {
            return {
                predicates: {
                    [ogc.wktLiteral]: [DataFactory.literal(`POINT(${pos.x} ${pos.y})`, ogc.wktLiteral)],
                    [ogc.coordinateDimension]: [DataFactory.literal(2)],
                },
            };
        },
    },
})(Absolute2DPosition);
