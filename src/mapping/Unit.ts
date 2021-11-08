import { AngleUnit, LengthUnit, SerializableObject, Unit } from '@openhps/core';
import { IriString } from '../rdf';
import { m3lite } from '../vocab';

const UNIT_MAP: Map<string, IriString> = new Map([
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

SerializableObject({
    rdf: {
        uri: (object: Unit) => {
            const unit = UNIT_MAP.get(object.name);
            return unit;
        },
    },
})(Unit);
