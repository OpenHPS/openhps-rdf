import { AngleUnit, Orientation, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, m3lite, openhps, qu } from '../vocab';
import { DataFactory } from 'n3';
import { Thing } from '../rdf';

SerializableObject({
    rdf: {
        type: openhps.Orientation,
        serializer: (object: Orientation) => {
            const euler = object.toEuler();
            return {
                predicates: {
                    [openhps.yaw]: [DataFactory.literal(euler.yaw, DataFactory.namedNode(xsd.decimal))],
                    [openhps.pitch]: [DataFactory.literal(euler.pitch, DataFactory.namedNode(xsd.decimal))],
                    [openhps.roll]: [DataFactory.literal(euler.roll, DataFactory.namedNode(xsd.decimal))],
                    [qu.unit]: [DataFactory.namedNode(m3lite.Degree)],
                },
            };
        },
        deserializer: (thing: Thing) => {
            let yaw = 0;
            let roll = 0;
            let pitch = 0;
            let unit: AngleUnit;

            if (thing.predicates[openhps.yaw] && thing.predicates[openhps.pitch] && thing.predicates[openhps.roll]) {
                // Euler
                yaw = Number(thing.predicates[openhps.yaw][0].value);
                pitch = Number(thing.predicates[openhps.pitch][0].value);
                roll = Number(thing.predicates[openhps.roll][0].value);
            } else {
                // Other orientation
            }

            if (thing.predicates[qu.unit]) {
                if (thing.predicates[qu.unit][0].value === m3lite.Degree) {
                    unit = AngleUnit.DEGREE;
                } else if (thing.predicates[qu.unit][0].value === m3lite.Radian) {
                    unit = AngleUnit.RADIAN;
                }
            } else {
                unit = AngleUnit.DEGREE;
            }
            return Orientation.fromEuler({
                yaw,
                pitch,
                roll,
                unit,
            });
        },
    },
})(Orientation);
SerializableMember({
    rdf: {
        predicate: dcterms.created,
        datatype: xsd.dateTime,
    },
})(Orientation.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: openhps.hasAccuracy,
    },
})(Orientation.prototype, 'accuracy');
