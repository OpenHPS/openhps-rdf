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
import { dcterms, openhps, foaf } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.DataObject,
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
