import { DataObject, SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, foaf, schema, rdf } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.DataObject,
        uri: (obj: DataObject) => `${obj.constructor.name.toLowerCase()}_${obj.uid}`,
    },
})(DataObject);
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
        predicate: openhps.position,
    },
})(DataObject.prototype, 'position');
SerializableArrayMember(Object, {
    rdf: {
        predicate: openhps.position,
    },
})(DataObject.prototype, 'relativePositions');
