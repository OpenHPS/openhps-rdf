import { SerializableMember, SerializableObject, Unit } from '@openhps/core';
import { xsd } from '../decorators';
import { qudt } from '../vocab';

@SerializableObject({
    rdf: {
        type: qudt.QuantityValue,
    },
})
export class QuantityValue {
    @SerializableMember({
        rdf: {
            predicate: qudt.numericValue,
            datatype: xsd.double,
        },
    })
    value: number;

    @SerializableMember({
        rdf: {
            predicate: qudt.unit,
        },
    })
    unit: Unit;
}
