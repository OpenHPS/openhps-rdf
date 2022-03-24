import { SensorValue, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { openhps, sosa } from '../vocab';

SerializableObject({
    rdf: {
        type: sosa.Observation,
        predicates: {
            [sosa.hasResult]: []
        }
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
        predicate: openhps.hasAccuracy,
    },
})(SensorValue.prototype, 'accuracy');
