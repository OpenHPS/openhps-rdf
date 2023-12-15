import { AbsolutePosition, Orientation, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { MemberDeserializerOptions, MemberSerializerOptions } from '../decorators/options';
import { dcterms, poso } from '../vocab';
import { RDFSerializer, Thing } from '../rdf';

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
        predicate: undefined,
        serializer: (value: Orientation, _, options?: MemberSerializerOptions) => {
            if (options.parent) {
                const orientations = options.parent.thing.predicates[poso.hasOrientation] || [];
                orientations.push(
                    RDFSerializer.serialize(value, {
                        baseUri: options.baseUri,
                    }),
                );
                options.parent.thing.predicates[poso.hasOrientation] = orientations;
            }
            return undefined;
        },
        deserializer: (_1, _2, options: MemberDeserializerOptions) => {
            if (options.parent && options.parent.thing) {
                const predicate = options.parent.thing.predicates[poso.hasOrientation];
                if (predicate && predicate[0]) {
                    return RDFSerializer.deserialize(predicate[0] as Thing, options.dataType);
                }
            }
            return undefined;
        },
    },
})(AbsolutePosition.prototype, 'orientation');
