import { SerializableObject, Absolute3DPosition } from '@openhps/core';
import { DataFactory } from 'n3';
import { ogc } from '../vocab';

SerializableObject({
    rdf: {
        serializer: (pos: Absolute3DPosition) => {
            return {
                predicates: {
                    [ogc.asWKT]: [
                        DataFactory.literal(`POINT(${pos.x} ${pos.y} ${pos.z})`, DataFactory.namedNode(ogc.wktLiteral)),
                    ],
                    [ogc.coordinateDimension]: [DataFactory.literal(3)],
                },
            };
        },
    },
})(Absolute3DPosition);
