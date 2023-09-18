import { SerializableObject, Absolute3DPosition, SerializableMember } from '@openhps/core';
import { Thing, RDFBuilder } from '../rdf';
import { poso, rdf, qudt } from '../vocab';
import { xsd } from '../decorators';

SerializableObject({
    rdf: {},
})(Absolute3DPosition);
SerializableMember({
    rdf: {
        predicate: [poso.zAxisValue],
        serializer: (value: number, object: Absolute3DPosition) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit)
                .add(qudt.numericValue, value, xsd.double)
                .build();
        },
        deserializer: (thing: Thing) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(Absolute3DPosition.prototype, 'z');
