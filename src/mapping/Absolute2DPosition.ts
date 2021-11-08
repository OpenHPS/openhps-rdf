import { SerializableObject, Absolute2DPosition, SerializableMember } from '@openhps/core';
import { DataFactory } from 'n3';
import { xsd } from '../decorators';
import { geo, geosparql } from '../vocab';

SerializableObject({
    rdf: {
        type: geo.Point,
        serializer: (pos: Absolute2DPosition) => {
            return {
                predicates: {
                    [geosparql.wktLiteral]: [DataFactory.literal(`POINT(${pos.x} ${pos.y})`, geosparql.wktLiteral)]
                }
            }
        }
    },
})(Absolute2DPosition);
