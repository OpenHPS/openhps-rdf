import {
    AngleUnit,
    AngularVelocityUnit,
    LengthUnit,
    LinearVelocityUnit,
    SerializableObject,
    Unit,
} from '@openhps/core';
import { IriString, Thing } from '../rdf';
import { unit, qudt } from '../vocab';

const UNIT_MAP = new Map<string, IriString>([
    /* Length units */
    [LengthUnit.METER.name, unit.M],
    [LengthUnit.KILOMETER.name, unit.KiloM],
    [LengthUnit.CENTIMETER.name, unit.CentiM],
    [LengthUnit.MILLIMETER.name, unit.MilliM],
    [LengthUnit.MILE.name, unit.MI],
    /* Angle units */
    [AngleUnit.DEGREE.name, unit.DEG],
    [AngleUnit.RADIAN.name, unit.RAD],
    /* Linear velocity units */
    [LinearVelocityUnit.METER_PER_SECOND.name, unit.M_PER_SEC],
    [LinearVelocityUnit.CENTIMETER_PER_SECOND.name, unit.CentiM_PER_SEC],
    /* Angular velocity units */
    [AngularVelocityUnit.DEGREE_PER_MINUTE.name, unit.DEG_PER_MIN],
    [AngularVelocityUnit.DEGREE_PER_SECOND.name, unit.DEG_PER_SEC],
    [AngularVelocityUnit.RADIAN_PER_MINUTE.name, unit.RAD_PER_MIN],
    [AngularVelocityUnit.RADIAN_PER_SECOND.name, unit.RAD_PER_SEC],
]);

const REVERSE_UNIT_MAP = new Map<IriString, string>(
    Array.from(UNIT_MAP.entries()).map(([key, value]) => {
        return [value, key];
    }),
);

SerializableObject({
    rdf: {
        serializer: (object: Unit) => {
            const unit = UNIT_MAP.get(object.name);
            return unit
                ? {
                      value: unit,
                  }
                : {};
        },
        deserializer: (thing: Thing) => {
            const name = REVERSE_UNIT_MAP.get(thing.value as IriString);
            return Unit.findByName(name);
        },
    },
})(Unit);
