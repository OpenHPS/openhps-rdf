import {
    DataObject,
    SerializableArrayMember,
    SerializableMember,
    SerializableObject,
    RelativePosition,
} from '@openhps/core';
import { xsd } from '../decorators';
import { Thing } from '../rdf';
import { dcterms, poso, rdfs, sosa, ogc } from '../vocab';

SerializableObject({
    rdf: {
        /**
         * Feature Of Interest
         *
         * The thing whose property is being estimated or calculated in the course of an Observation to arrive at a Result or whose property is being manipulated by an Actuator, or which is being sampled or transformed in an act of Sampling.
         *
         * http://www.w3.org/ns/sosa/FeatureOfInterest
         */
        type: [sosa.FeatureOfInterest, ogc.SpatialObject],
    },
})(DataObject);
SerializableMember({
    rdf: {
        identifier: true,
        serializer: (uid: string) => uid,
        deserializer: (thing: Thing) =>
            thing.value.substring(Math.max(thing.value.lastIndexOf('/'), thing.value.lastIndexOf('#')) + 1),
    },
})(DataObject.prototype, 'uid');
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(DataObject.prototype, 'createdTimestamp');
SerializableMember({
    rdf: {
        predicate: rdfs.label,
    },
})(DataObject.prototype, 'displayName');
SerializableMember({
    rdf: {
        predicate: poso.hasPosition,
    },
})(DataObject.prototype, 'position');
SerializableArrayMember(RelativePosition, {
    rdf: {
        predicate: poso.hasPosition,
    },
})(DataObject.prototype, 'relativePositions');
