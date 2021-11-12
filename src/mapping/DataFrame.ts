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
import { dcterms, openhps } from '../vocab';

SerializableObject({
    rdf: {
        type: openhps.DataFrame,
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
        predicate: dcterms.source,
    },
})(DataFrame.prototype, '_source');
SerializableMapMember(String, DataObject, {
    rdf: {
        predicate: openhps.includesObject,
    },
    name: 'objects',
})(DataFrame.prototype, '_objects');
