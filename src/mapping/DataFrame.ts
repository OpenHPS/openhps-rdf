import { DataFrame, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, rdf } from '../vocab';

SerializableObject({
    rdf: {
        predicates: {
            [rdf.type]: [openhps.DataFrame],
        },
        uri: (obj: DataFrame) => `${obj.constructor.name.toLowerCase()}_${obj.uid}`,
    },
})(DataFrame);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(DataFrame.prototype, 'createdTimestamp');
