import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { ObservableProperty } from './ObservableProperty';
import { sosa, ssn, rdfs } from '../vocab';

@SerializableObject({
    rdf: {
        type: sosa.FeatureOfInterest,
    },
})
export class FeatureOfInterest {
    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: 'en',
        },
    })
    label?: string;

    @SerializableArrayMember(ObservableProperty, {
        rdf: {
            predicate: ssn.hasProperty,
        },
    })
    properties?: ObservableProperty[];
}
