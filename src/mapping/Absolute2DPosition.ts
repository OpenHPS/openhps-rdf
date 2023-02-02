import { SerializableObject, Absolute2DPosition, SerializableMember } from '@openhps/core';
import { xsd } from '../decorators';
import { Thing, RDFBuilder } from '../rdf';
import { poso, qudt, rdf } from '../vocab';

SerializableObject({
    rdf: {},
})(Absolute2DPosition);
SerializableMember({
    rdf: {
        predicate: poso.xAxisValue,
        serializer: (value: number, object: Absolute2DPosition) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit)
                .add(qudt.numericValue, value, xsd.double)
                .build();
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
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit)
                .add(qudt.numericValue, value, xsd.double)
                .build();
        },
        deserializer: (thing: Thing, targetObject: Absolute2DPosition) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(Absolute2DPosition.prototype, 'y');
