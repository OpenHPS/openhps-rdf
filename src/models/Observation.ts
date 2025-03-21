import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { sosa } from '../vocab';
import { FeatureOfInterest } from './FeatureOfInterest';
import { ObservableProperty } from './ObservableProperty';
import { IriString, Thing, xsd } from '../rdf/types';
import { SerializableThing } from './SerializableThing';
import { DataFactory } from 'n3';

@SerializableObject({
    rdf: {
        type: sosa.Observation,
    },
})
export class Observation extends SerializableThing {
    @SerializableMember({
        rdf: {
            predicate: sosa.resultTime,
            datatype: xsd.dateTime,
        },
    })
    resultTime: Date;

    @SerializableArrayMember(FeatureOfInterest, {
        rdf: {
            predicate: sosa.hasFeatureOfInterest,
        },
    })
    featuresOfInterest: FeatureOfInterest[] = [];

    @SerializableArrayMember(ObservableProperty, {
        rdf: {
            predicate: sosa.observedProperty,
        },
    })
    observedProperties: ObservableProperty[] = [];

    // eslint-disable-next-line
    @SerializableArrayMember(Object, {
        rdf: {
            predicate: sosa.hasResult,
        },
    })
    results: Object[] = []; // eslint-disable-line

    @SerializableArrayMember(String, {
        rdf: {
            predicate: sosa.usedProcedure,
            serializer: (value: string[]) => {
                return value.map((iri) => DataFactory.namedNode(iri));
            },
            deserializer: (thing: Thing) => thing.value,
        },
    })
    usedProcedures: IriString[] = [];
}
