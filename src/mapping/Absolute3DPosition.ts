import { SerializableObject, Absolute3DPosition } from '@openhps/core';
import { DataFactory } from 'n3';
import { Thing } from '../rdf';
import { ogc } from '../vocab';

SerializableObject({
    rdf: {
        serializer: (pos: Absolute3DPosition) => {
            return {
                predicates: {
                    [ogc.asWKT]: [DataFactory.literal(`POINT(${pos.x} ${pos.y} ${pos.z})`, ogc.wktLiteral)],
                    [ogc.coordinateDimension]: [DataFactory.literal(3)],
                },
            };
        },
        deserializer: (thing: Thing) => {
            const pos = new Absolute3DPosition();

            return pos;
        },
    },
})(Absolute3DPosition);
