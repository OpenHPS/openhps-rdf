import { Accuracy, SerializableMember, SerializableObject } from '@openhps/core';
import { openhps, qu, sosa, ssns } from '../vocab';

SerializableObject({
    rdf: {
        type: ssns.Accuracy,
    },
})(Accuracy);
SerializableMember({
    rdf: {
        predicate: qu.unit,
    },
    name: 'unit',
})(Accuracy.prototype, '_unit');
// SerializableMember({
//     rdf: {
//         predicate: qu.numericalValue,
//     },
// })(Accuracy.prototype, 'value');
