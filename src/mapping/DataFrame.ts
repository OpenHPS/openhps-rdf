import { DataFrame, DataObject, SerializableMapMember, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.DataFrame,
        uri: (obj: DataFrame) => `${obj.constructor.name.toLowerCase()}_${obj.uid}`,
    },
})(DataFrame);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(DataFrame.prototype, 'createdTimestamp');
SerializableMember({
    rdf: {
        predicate: dcterms.source,
    },
})(DataFrame.prototype, '_source');
SerializableMapMember(String, DataObject, {
    rdf: {
        predicate: openhps.includesObject,
    },
    name: 'objects',
})(DataFrame.prototype, '_objects');
