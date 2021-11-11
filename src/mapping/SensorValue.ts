import { SensorValue, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, sosa } from '../vocab';

SerializableObject({
    rdf: {
        type: sosa.Observation,
    },
})(SensorValue);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(SensorValue.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: openhps.hasAccuracy,
    },
})(SensorValue.prototype, 'accuracy');
