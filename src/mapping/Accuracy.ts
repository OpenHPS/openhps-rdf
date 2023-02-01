import { Accuracy, SerializableMember, SerializableObject } from '@openhps/core';
import { DataFactory } from 'n3';
import { Thing } from '../rdf/types';
import { ssns, schema } from '../vocab';

SerializableObject({
    rdf: {
        type: ssns.Accuracy,
        serializer: (object: Accuracy) => {
            return {
                predicates: {
                    [schema.minValue]: [DataFactory.literal(-object.value)],
                    [schema.maxValue]: [DataFactory.literal(object.value)],
                },
            };
        },
        deserializer: (thing: Thing, instance: Accuracy) => {
            instance.value = parseFloat(thing.predicates[schema.maxValue][0].value);
            return instance;
        },
    },
})(Accuracy);
SerializableMember({
    rdf: {
        predicate: schema.unitCode,
    },
})(Accuracy.prototype, '_unit');
