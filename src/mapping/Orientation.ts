import { AngleUnit, Orientation, SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '../decorators';
import { dcterms, poso, qudt, unit as qudt_unit } from '../vocab';
import { DataFactory } from 'n3';
import { Thing } from '../rdf';

SerializableObject({
    rdf: {
        type: poso.Orientation,
        serializer: (object: Orientation) => {
            const euler = object.toEuler();
            return {
                predicates: {
                    [poso.yaw]: [DataFactory.literal(euler.yaw, DataFactory.namedNode(xsd.decimal))],
                    [poso.pitch]: [DataFactory.literal(euler.pitch, DataFactory.namedNode(xsd.decimal))],
                    [poso.roll]: [DataFactory.literal(euler.roll, DataFactory.namedNode(xsd.decimal))],
                    [qudt.unit]: [DataFactory.namedNode(qudt_unit.DEG)],
                },
            };
        },
        deserializer: (thing: Thing) => {
            let yaw = 0;
            let roll = 0;
            let pitch = 0;
            let unit: AngleUnit;

            if (thing.predicates[poso.yaw] && thing.predicates[poso.pitch] && thing.predicates[poso.roll]) {
                // Euler
                yaw = Number(thing.predicates[poso.yaw][0].value);
                pitch = Number(thing.predicates[poso.pitch][0].value);
                roll = Number(thing.predicates[poso.roll][0].value);
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
        predicate: poso.hasAccuracy,
    },
})(Orientation.prototype, 'accuracy');
