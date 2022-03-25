import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { ObservableProperty } from './ObservableProperty';
import { sosa } from '../vocab';

@SerializableObject({
    rdf: {
        type: sosa.Observation,
        serializer: (object: Observation) => {
            return {
                value: `${object.observedProperties[0]}/${object.phenomenonTime.getTime()}`,
            };
        },
    },
})
export class Observation {
    @SerializableMember({
        rdf: {
            predicate: sosa.phenomenonTime,
        },
    })
    phenomenonTime?: Date;

    @SerializableMember({
        rdf: {
            predicate: sosa.resultTime,
        },
    })
    resultTime?: Date;

    @SerializableArrayMember(ObservableProperty, {
        rdf: {
            predicate: sosa.observedProperty,
        },
    })
    observedProperties?: ObservableProperty[];
}
