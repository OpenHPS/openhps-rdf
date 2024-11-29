import { SerializableMember, SerializableObject, Unit } from '@openhps/core';
import { schema, ssn, ssns } from '../vocab';
import { ObservableProperty } from './ObservableProperty';
import { SerializableThing } from './SerializableThing';

@SerializableObject({
    rdf: {
        type: ssns.Accuracy,
    },
})
export class PropertyAccuracy extends SerializableThing {
    @SerializableMember({
        rdf: {
            predicate: ssn.forProperty,
        },
    })
    forProperty: ObservableProperty;

    @SerializableMember({
        rdf: {
            predicate: schema.minValue,
        },
    })
    minValue: number;

    @SerializableMember({
        rdf: {
            predicate: schema.maxValue,
        },
    })
    maxValue: number;

    @SerializableMember({
        rdf: {
            predicate: schema.unitCode,
        },
    })
    unit: Unit;
}
