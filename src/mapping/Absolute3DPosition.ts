import { SerializableObject, Absolute3DPosition, SerializableMember, Unit } from '@openhps/core';
import { DataFactory } from 'n3';
import { Thing, RDFSerializer } from '../rdf';
import { poso, rdf, qudt } from '../vocab';
import { xsd } from '../decorators';

SerializableObject({
    rdf: {},
})(Absolute3DPosition);
SerializableMember({
    rdf: {
        predicate: poso.zAxisValue,
        serializer: (value: number, object: Absolute3DPosition) => {
            return {
                predicates: {
                    [rdf.type]: [DataFactory.namedNode(qudt.QuantityValue)],
                    [qudt.unit]: [RDFSerializer.serialize(object.unit)],
                    [qudt.numericValue]: [DataFactory.literal(value, DataFactory.namedNode(xsd.double))],
                },
            };
        },
        deserializer: (thing: Thing, targetObject: Absolute3DPosition) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(Absolute3DPosition.prototype, 'z');
