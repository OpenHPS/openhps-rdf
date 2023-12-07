import { AbsolutePosition, Orientation, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { MemberSerializerOptions } from '../decorators/options';
import { dcterms, poso } from '../vocab';

SerializableObject({
    rdf: {
        type: [poso.AbsolutePosition],
    },
})(AbsolutePosition);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(AbsolutePosition.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: poso.hasAccuracy,
    },
    name: 'accuracy',
})(AbsolutePosition.prototype, '_accuracy');
SerializableMember({
    rdf: {
        identifier: false,
        predicate: poso.hasOrientation,
        serializer: (value: Orientation, object: AbsolutePosition, options?: MemberSerializerOptions) => {
            
            return undefined;
        }
    },
})(AbsolutePosition.prototype, 'orientation');
