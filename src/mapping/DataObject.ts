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
import { DataFactory } from 'n3';

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

/** RDF Specific Data */
Object.defineProperty(DataObject.prototype, 'rdf', {
    enumerable: false,
    configurable: false,
    writable: true,
    value: undefined,
});
Reflect.defineMetadata('design:type', Object, DataObject.prototype, 'rdf');
SerializableMember({
    name: '__rdf',
    serializer: (rdf: RDFMetadata) => {
        if (!rdf) {
            return undefined;
        }

        const serializedPredicates = rdf.predicates
            ? Object.keys(rdf.predicates)
                  .map((predicate) => {
                      return {
                          [predicate]: rdf.predicates[predicate].map((item) => {
                              if (item['toJSON'] !== undefined && typeof item['toJSON'] === 'function') {
                                  return item['toJSON']();
                              } else {
                                  return item;
                              }
                          }),
                      };
                  })
                  .reduce((a, b) => ({ ...a, ...b }))
            : undefined;
        return {
            path: rdf.path,
            uri: rdf.uri,
            predicates: serializedPredicates,
        };
    },
    deserializer: (object: any) => {
        if (!object) {
            return undefined;
        }

        const deserializedPredicates = object.predicates
            ? Object.keys(object.predicates)
                  .map((predicate: any) => {
                      return {
                          [predicate]: object.predicates[predicate].map((item: any) => {
                              if (item.termType && item.predicates === undefined) {
                                  switch (item.termType) {
                                      case 'BlankNode':
                                          return DataFactory.blankNode(item.value);
                                      case 'Literal':
                                          const literal = DataFactory.literal(
                                              item.value,
                                              item.language ?? item.datatype
                                                  ? DataFactory.namedNode(item.datatype.value)
                                                  : undefined,
                                          );
                                          return literal;
                                      case 'NamedNode':
                                          return DataFactory.namedNode(item.value);
                                      default:
                                          return item;
                                  }
                              } else {
                                  return item;
                              }
                          }),
                      };
                  })
                  .reduce((a, b) => ({ ...a, ...b }))
            : {};
        console.log('deserializedPredicates', deserializedPredicates);
        return {
            path: object.path,
            uri: object.uri,
            predicates: deserializedPredicates,
        } as RDFMetadata;
    },
})(DataObject.prototype, 'rdf');
SerializableMember({
    rdf: {
        predicate: ogc.sfWithin,
        serializer: (uid: string, _, options: MemberSerializerOptions) => {
            return DataFactory.namedNode(`${options.baseUri}${uid}`);
        },
        deserializer: (thing: Thing) => {
            return thing.value.substring(Math.max(thing.value.lastIndexOf('/'), thing.value.lastIndexOf('#')) + 1);
        },
    },
})(DataObject.prototype, 'parentUID');
