import { SerializableObject, Absolute3DPosition, SerializableMember } from '@openhps/core';
import { DataFactory } from 'n3';
import { xsd } from '../decorators';
import { Thing } from '../rdf';
import { geo, geosparql } from '../vocab';

SerializableObject({
    rdf: {
        type: geo.Point,
        serializer: (pos: Absolute3DPosition) => {
            return {
                predicates: {
                    [geosparql.asWKT]: [DataFactory.literal(`POINT(${pos.x} ${pos.y} ${pos.z})`, geosparql.wktLiteral)]
                }
            }
        },
        deserializer: (thing: Thing) => {
            const pos = new Absolute3DPosition();

            return pos;
        }
    },
})(Absolute3DPosition);
