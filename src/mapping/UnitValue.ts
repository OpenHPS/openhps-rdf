import { LengthUnit, SerializableMember, SerializableObject, UnitValue } from '@openhps/core';
import { xsd } from '../decorators';
import { RDFBuilder, RDFSerializer, Thing } from '../rdf';
import { qudt, rdf } from '../vocab';

SerializableObject({
    rdf: {
        type: qudt.QuantityValue,
    },
})(UnitValue);
SerializableMember({
    rdf: {
        predicate: qudt.unit,
    },
})(UnitValue.prototype, '_unit');
SerializableMember({
    rdf: {
        predicate: qudt.numericValue,
    },
})(UnitValue.prototype, '_value');

export const UnitValueOptions = {
    serializer: (value: number, object: { unit: LengthUnit }) => {
        return RDFBuilder.blankNode()
            .add(rdf.type, qudt.QuantityValue)
            .add(qudt.unit, object.unit ?? LengthUnit.METER)
            .add(qudt.numericValue, value, xsd.double)
            .build();
    },
    deserializer: (thing: Thing, object: { unit: LengthUnit }) => {
        const unitPredicate = thing.predicates[qudt.unit];
        let unit = LengthUnit.METER;
        if (unitPredicate) {
            const temp = RDFSerializer.deserialize(thing.predicates[qudt.unit][0] as Thing, LengthUnit);
            if (temp) {
                unit = temp;
            }
        }
        if (unit !== LengthUnit.METER && object.unit !== LengthUnit.METER) {
            object.unit = unit;
        }
        return unit.convert(parseFloat(thing.predicates[qudt.numericValue][0].value), object.unit);
    },
};
