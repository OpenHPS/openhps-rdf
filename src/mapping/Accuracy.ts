import { Accuracy, SerializableMember, SerializableObject } from '@openhps/core';
import { DataFactory } from 'n3';
import { Thing } from '../rdf';
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
        deserializer: (thing: Thing) => {
            return undefined;
        },
    },
})(Accuracy);
SerializableMember({
    rdf: {
        predicate: schema.unitCode,
    },
    name: 'unit',
})(Accuracy.prototype, '_unit');
