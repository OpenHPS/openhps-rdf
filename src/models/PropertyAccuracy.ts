import { SerializableMember, SerializableObject, Unit } from '@openhps/core';
import { schema, ssn, ssns, rdfs } from '../vocab';
import { SerializableNamedNode } from './SerializableNamedNode';
import { ObservableProperty } from './ObservableProperty';

@SerializableObject({
    rdf: {
        type: ssns.Accuracy,
    },
})
export class PropertyAccuracy extends SerializableNamedNode {
    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: 'en',
        },
    })
    label?: string;

    @SerializableMember({
        rdf: {
            predicate: rdfs.comment,
            language: 'en',
        },
    })
    comment?: string;

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
