import { AngleUnit, Orientation, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, openhps, qudt, qudt_unit } from '../vocab';
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
                    [qudt.unit]: [DataFactory.namedNode(qudt_unit.DEG)],
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

            if (thing.predicates[qudt.Unit]) {
                if (thing.predicates[qudt.Unit][0].value === qudt_unit.DEG) {
                    unit = AngleUnit.DEGREE;
                } else if (thing.predicates[qudt.Unit][0].value === qudt_unit.RAD) {
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
