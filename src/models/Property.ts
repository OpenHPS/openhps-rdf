import { SerializableMember, SerializableObject } from '@openhps/core';
import { ssn } from '../vocab';
import { DataFactory } from 'n3';
import { IriString, Thing } from '../rdf';
import { SerializableThing } from './SerializableThing';

@SerializableObject({
    rdf: {
        type: ssn.Property,
    },
})
export class Property extends SerializableThing {
    @SerializableMember({
        rdf: {
            predicate: ssn.isPropertyOf,
            serializer: (value: string) => DataFactory.namedNode(value),
            deserializer: (thing: Thing) => thing.value,
        },
    })
    featureOfInterest?: IriString;
}
