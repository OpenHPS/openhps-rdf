import { SerializableObject, Absolute2DPosition, SerializableMember, Unit } from '@openhps/core';
import { DataFactory } from 'n3';
import { xsd } from '../decorators';
import { Thing, RDFSerializer } from '../rdf';
import { poso, qudt, rdf } from '../vocab';

SerializableObject({
    rdf: {},
})(Absolute2DPosition);
SerializableMember({
    rdf: {
        predicate: poso.xAxisValue,
        serializer: (value: number, object: Absolute2DPosition) => {
            return {
                predicates: {
                    [rdf.type]: [DataFactory.namedNode(qudt.QuantityValue)],
                    [qudt.unit]: [RDFSerializer.serialize(object.unit)],
                    [qudt.numericValue]: [DataFactory.literal(value, DataFactory.namedNode(xsd.double))],
                },
            };
        },
        deserializer: (thing: Thing, targetObject: Absolute2DPosition) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(Absolute2DPosition.prototype, 'x');
SerializableMember({
    rdf: {
        predicate: poso.yAxisValue,
        serializer: (value: number, object: Absolute2DPosition) => {
            return {
                predicates: {
                    [rdf.type]: [DataFactory.namedNode(qudt.QuantityValue)],
                    [qudt.unit]: [RDFSerializer.serialize(object.unit)],
                    [qudt.numericValue]: [DataFactory.literal(value, DataFactory.namedNode(xsd.double))],
                },
            };
        },
        deserializer: (thing: Thing, targetObject: Absolute2DPosition) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(Absolute2DPosition.prototype, 'y');
