import {
    DataObject,
    SerializableArrayMember,
    SerializableMember,
    SerializableObject,
    RelativePosition,
    Serializable,
} from '@openhps/core';
import { xsd } from '../decorators';
import { Thing } from '../rdf';
import { dcterms, openhps, foaf, sosa } from '../vocab';

SerializableObject({
    rdf: {
        /**
         * Feature Of Interest
         * 
         * The thing whose property is being estimated or calculated in the course of an Observation to arrive at a Result or whose property is being manipulated by an Actuator, or which is being sampled or transformed in an act of Sampling.
         *
         * http://www.w3.org/ns/sosa/FeatureOfInterest
         */
        type: sosa.FeatureOfInterest,
    },
})(DataObject);
SerializableMember({
    rdf: {
        identifier: true,
        serializer: (uid: string, dataType: Serializable<any>) => `${dataType.name.toLowerCase()}_${uid}`,
        deserializer: (thing: Thing) => thing.value.substring(thing.value.lastIndexOf('_') + 1),
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
        predicate: foaf.name,
    },
})(DataObject.prototype, 'displayName');
SerializableMember({
    rdf: {
        predicate: openhps.hasPosition,
    },
})(DataObject.prototype, 'position');
SerializableArrayMember(RelativePosition, {
    rdf: {
        predicate: openhps.hasPosition,
    },
})(DataObject.prototype, 'relativePositions');
