import { SerializableObject, SerializableMember, Relative2DPosition, LengthUnit } from '@openhps/core';
import { xsd } from '../decorators';
import { Thing, RDFBuilder } from '../rdf';
import { poso, qudt, rdf } from '../vocab';

SerializableObject({
    rdf: {},
})(Relative2DPosition);
SerializableMember({
    rdf: {
        predicate: [poso.xAxisValue],
        serializer: (value: number, object: Relative2DPosition) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit ?? LengthUnit.METER)
                .add(qudt.numericValue, value, xsd.double)
                .build();
        },
        deserializer: (thing: Thing) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(Relative2DPosition.prototype, 'x');
SerializableMember({
    rdf: {
        predicate: [poso.yAxisValue],
        serializer: (value: number, object: Relative2DPosition) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit ?? LengthUnit.METER)
                .add(qudt.numericValue, value, xsd.double)
                .build();
        },
        deserializer: (thing: Thing) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(Relative2DPosition.prototype, 'y');
