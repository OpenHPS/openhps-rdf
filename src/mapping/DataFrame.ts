import {
    DataFrame,
    DataObject,
    Serializable,
    SerializableMapMember,
    SerializableMember,
    SerializableObject,
} from '@openhps/core';
import { xsd } from '../decorators';
import { Thing } from '../rdf';
import { dcterms, sosa } from '../vocab';

SerializableObject({
    rdf: {
        /**
         * Observation
         *
         * Act of carrying out an (Observation) Procedure to estimate or calculate a value of a property of a FeatureOfInterest. Links to a Sensor to describe what made the Observation and how; links to an ObservableProperty to describe what the result is an estimate of, and to a FeatureOfInterest to detail what that property was associated with.
         *
         * http://www.w3.org/ns/sosa/Observation
         */
        type: sosa.Observation,
    },
})(DataFrame);
SerializableMember({
    rdf: {
        identifier: true,
        serializer: (uid: string, dataType: Serializable<any>) => `${dataType.name.toLowerCase()}_${uid}`,
        deserializer: (thing: Thing) => thing.value.substring(thing.value.lastIndexOf('_') + 1),
    },
})(DataFrame.prototype, 'uid');
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(DataFrame.prototype, 'createdTimestamp');
SerializableMember({
    rdf: {
        predicate: sosa.madeBySensor,
    },
})(DataFrame.prototype, '_source');
SerializableMapMember(String, DataObject, {
    rdf: {
        predicate: sosa.hasFeatureOfInterest,
    },
    name: 'objects',
})(DataFrame.prototype, '_objects');
