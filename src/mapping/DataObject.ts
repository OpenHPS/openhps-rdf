import {
    DataObject,
    SerializableArrayMember,
    SerializableMember,
    SerializableObject,
    RelativePosition,
    RelativeOrientation,
} from '@openhps/core';
import { xsd } from '../decorators';
import { RDFSerializer, Thing } from '../rdf';
import { dcterms, poso, rdfs, sosa, ogc } from '../vocab';
import { MemberDeserializerOptions, MemberSerializerOptions, RDFMetadata } from '../decorators/options';

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
        identifier: false,
        predicate: undefined,
        serializer: (value: RelativePosition[], _, options?: MemberSerializerOptions) => {
            const orientations = options.thing.predicates[poso.hasOrientation] || [];
            const positions = options.thing.predicates[poso.hasPosition] || [];

            value.forEach((relPos) => {
                if (relPos instanceof RelativeOrientation) {
                    orientations.push(
                        RDFSerializer.serialize(relPos, {
                            baseUri: options.baseUri,
                        }),
                    );
                } else {
                    positions.push(
                        RDFSerializer.serialize(relPos, {
                            baseUri: options.baseUri,
                        }),
                    );
                }
            });

            options.thing.predicates[poso.hasOrientation] = orientations;
            options.thing.predicates[poso.hasPosition] = positions;
            return undefined;
        },
        deserializer: (_1, _2, options: MemberDeserializerOptions) => {
            const relativePositions: RelativePosition[] = [];
            const orientations = options.thing.predicates[poso.hasOrientation];
            if (orientations) {
                orientations.forEach((item) => {
                    const deserialized = RDFSerializer.deserialize(item as Thing);
                    if (deserialized instanceof RelativePosition) {
                        relativePositions.push(deserialized);
                    }
                });
            }
            const positions = options.thing.predicates[poso.hasPosition];
            if (positions) {
                positions.forEach((item) => {
                    const deserialized = RDFSerializer.deserialize(item as Thing);
                    if (deserialized instanceof RelativePosition) {
                        relativePositions.push(deserialized);
                    }
                });
            }
            return relativePositions;
        },
    },
})(DataObject.prototype, 'relativePositions');

/** RDF Specific Data **/
DataObject.prototype.rdf = {};
// SerializableMember({
//     name: "__rdf",
//     constructor: () => String,
//     serializer: (rdf: RDFMetadata) => {
//         const serializedPredicates = Object.keys(rdf.predicates).map((predicate) => {
//             return {
//                 [predicate]: rdf.predicates[predicate].map((item) => {
//                     if (item['toJSON'] !== undefined && typeof item['toJSON'] === 'function') {
//                         return item['toJSON']();
//                     } else {
//                         return item;
//                     }
//                 })
//             };
//         }).reduce((a, b) => ({ ...a, ...b }));
//         return {
//             path: rdf.path,
//             uri: rdf.uri,
//             predicates: serializedPredicates
//         };
//     },
//     deserializer: (object: any) => {
//         return {
//             path: object.path,
//             uri: object.uri,
//             predicates: object.predicates
//         } as RDFMetadata;
//     }
// })(DataObject.prototype, 'rdf');
