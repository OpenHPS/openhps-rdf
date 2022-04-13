import { Accuracy, SerializableMember, SerializableObject } from '@openhps/core';
import { DataFactory } from 'n3';
import { Thing } from '../rdf/types';
import { ssns, schema } from '../vocab';

SerializableObject({
    rdf: {
        type: ssns.Accuracy,
    },
})(Accuracy);
SerializableMember({
    rdf: {
        predicate: schema.unitCode,
    },
})(Accuracy.prototype, '_unit');
SerializableMember({
    rdf: {
        serializer: (object: Accuracy) => {
            return {
                predicates: {
                    [schema.minValue]: [DataFactory.literal(-object.value)],
                    [schema.maxValue]: [DataFactory.literal(object.value)],
                },
            };
        },
        deserializer: (thing: Thing) => {
            return thing.predicates[schema.maxValue][0].value;
        },
    },
})(Accuracy.prototype, 'value');
