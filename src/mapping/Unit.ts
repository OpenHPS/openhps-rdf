import { AngleUnit, LengthUnit, SerializableObject, Unit } from '@openhps/core';
import { IriString, Thing } from '../rdf';
import { m3lite } from '../vocab';

const UNIT_MAP = new Map<string, IriString>([
    /* Length units */
    [LengthUnit.METER.name, m3lite.Metre],
    [LengthUnit.KILOMETER.name, m3lite.Kilometre],
    [LengthUnit.CENTIMETER.name, m3lite.Centimetre],
    [LengthUnit.MILLIMETER.name, m3lite.Millimetre],
    [LengthUnit.MILE.name, m3lite.Miles],
    /* Angle units */
    [AngleUnit.DEGREE.name, m3lite.Degree],
    [AngleUnit.RADIAN.name, m3lite.Radian],
]);

const REVERSE_UNIT_MAP = new Map<string, string>([
    Array.from(UNIT_MAP.entries()).map(([key, value]) => {
        return [value, key];
    }) as any,
]);

SerializableObject({
    rdf: {
        serializer: (object: Unit) => {
            const unit = UNIT_MAP.get(object.name);
            return {
                value: unit,
                predicates: {},
            };
        },
        deserializer: (thing: Thing) => {
            const name = REVERSE_UNIT_MAP.get(thing.value);
            return Unit.findByName(name);
        },
    },
})(Unit);
