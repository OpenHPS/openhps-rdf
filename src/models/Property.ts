import { SerializableMember, SerializableObject } from '@openhps/core';
import { rdfs, ssn, dcterms } from '../vocab';
import { DataFactory } from 'n3';
import { IriString, Thing } from '../rdf';
import { SerializableNamedNode } from './SerializableNamedNode';

@SerializableObject({
    rdf: {
        type: ssn.Property,
    },
})
export class Property extends SerializableNamedNode {
    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: 'en',
        },
    })
    label?: string;

    @SerializableMember({
        rdf: {
            predicate: [rdfs.comment, dcterms.description],
            language: 'en',
        },
    })
    description?: string;

    @SerializableMember({
        rdf: {
            predicate: ssn.isPropertyOf,
            serializer: (value: string) => DataFactory.namedNode(value),
            deserializer: (thing: Thing) => thing.value,
        },
    })
    featureOfInterest?: IriString;
}
