import { SensorValue, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { poso, sosa } from '../vocab';

SerializableObject({
    rdf: {
        type: sosa.Observation,
        predicates: {
            [sosa.hasResult]: [],
        },
    },
})(SensorValue);
SerializableMember({
    rdf: {
        predicate: sosa.phenomenonTime,
        datatype: xsd.dateTime,
    },
})(SensorValue.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: poso.hasAccuracy,
    },
})(SensorValue.prototype, 'accuracy');
