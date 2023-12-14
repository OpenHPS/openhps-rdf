import { SerializableMember, SerializableObject } from '@openhps/core';
import { rdfs, ssn, ogc, vcard } from '../vocab';
import { PolygonGeometry } from './Geometry';
import { Platform } from './Platform';
import { Address } from './Address';
import { SerializableNamedNode } from './SerializableNamedNode';

@SerializableObject({
    rdf: {
        type: [ssn.Deployment, ogc.SpatialObject],
    },
})
export class Deployment extends SerializableNamedNode {
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
            predicate: ssn.deployedOnPlatform,
            language: 'en',
        },
    })
    platform?: Platform;

    @SerializableMember({
        rdf: {
            predicate: ogc.hasGeometry,
        },
    })
    geometry?: PolygonGeometry;

    @SerializableMember({
        rdf: {
            predicate: vcard.hasAddress,
        },
    })
    address?: Address;

    @SerializableMember({
        rdf: {
            predicate: ogc.sfWithin,
        },
    })
    within?: Deployment;
}
