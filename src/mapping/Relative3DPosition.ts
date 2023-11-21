import { SerializableObject, Relative3DPosition, SerializableMember, LengthUnit } from '@openhps/core';
import { Thing, RDFBuilder } from '../rdf';
import { poso, rdf, qudt } from '../vocab';
import { xsd } from '../decorators';

SerializableObject({
    rdf: {},
})(Relative3DPosition);
SerializableMember({
    rdf: {
        predicate: [poso.zAxisValue],
        serializer: (value: number, object: Relative3DPosition) => {
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
})(Relative3DPosition.prototype, 'z');
