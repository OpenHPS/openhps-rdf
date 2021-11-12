import { Accuracy, SerializableObject } from '@openhps/core';
import { openhps } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.Accuracy,
    },
})(Accuracy);
// SerializableMember({
//     rdf: {
//         predicate: qu.unit,
//     },
// })(Accuracy.prototype, 'unit');
// SerializableMember({
//     rdf: {
//         predicate: qu.numericalValue,
//     },
// })(Accuracy.prototype, 'valueOf');
