import { SerializableMember, SerializableObject, UnitValue } from '@openhps/core';
import { qudt } from '../vocab';

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
