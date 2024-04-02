import { SerializableObject, RelativeOrientation, AngleUnit, Orientation } from '@openhps/core';
import { poso, qudt, unit as qudt_unit } from '../vocab';
import { Thing } from '../rdf';
import { DataFactory } from 'n3';
import { xsd } from '../rdf/types';

SerializableObject({
    rdf: {
        type: poso.Orientation,
        serializer: (object: RelativeOrientation) => {
            const euler = object.referenceValue.toEuler();
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
            return new RelativeOrientation(
                '',
                Orientation.fromEuler({
                    yaw,
                    pitch,
                    roll,
                    unit,
                }),
            );
        },
    },
})(RelativeOrientation);
