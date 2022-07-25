import {
    AngleUnit,
    AngularVelocityUnit,
    LengthUnit,
    LinearVelocityUnit,
    SerializableObject,
    Unit,
} from '@openhps/core';
import { IriString, Thing } from '../rdf';
import { qudt_unit, qudt } from '../vocab';

const UNIT_MAP = new Map<string, IriString>([
    /* Length units */
    [LengthUnit.METER.name, qudt_unit.M],
    [LengthUnit.KILOMETER.name, qudt_unit.KiloM],
    [LengthUnit.CENTIMETER.name, qudt_unit.CentiM],
    [LengthUnit.MILLIMETER.name, qudt_unit.MilliM],
    [LengthUnit.MILE.name, qudt_unit.MI],
    /* Angle units */
    [AngleUnit.DEGREE.name, qudt_unit.DEG],
    [AngleUnit.RADIAN.name, qudt_unit.RAD],
    /* Linear velocity units */
    [LinearVelocityUnit.METER_PER_SECOND.name, qudt_unit.M_PER_SEC],
    [LinearVelocityUnit.CENTIMETER_PER_SECOND.name, qudt_unit.CentiM_PER_SEC],
    /* Angular velocity units */
    [AngularVelocityUnit.DEGREE_PER_MINUTE.name, qudt_unit.DEG_PER_MIN],
    [AngularVelocityUnit.DEGREE_PER_SECOND.name, qudt_unit.DEG_PER_SEC],
    [AngularVelocityUnit.RADIAN_PER_MINUTE.name, qudt_unit.RAD_PER_MIN],
    [AngularVelocityUnit.RADIAN_PER_SECOND.name, qudt_unit.RAD_PER_SEC],
]);

const REVERSE_UNIT_MAP = new Map<IriString, string>(
    Array.from(UNIT_MAP.entries()).map(([key, value]) => {
        return [value, key];
    }),
);

SerializableObject({
    rdf: {
        type: qudt.Unit,
        serializer: (object: Unit) => {
            const unit = UNIT_MAP.get(object.name);
            return {
                value: unit,
            };
        },
        deserializer: (thing: Thing) => {
            const name = REVERSE_UNIT_MAP.get(thing.value as IriString);
            return Unit.findByName(name);
        },
    },
})(Unit);
