import { AngleUnit, LengthUnit, SerializableObject, Unit } from '@openhps/core';
import { IriString, Thing } from '../rdf';
import { qudt, qudt_unit } from '../vocab';

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
]);

const REVERSE_UNIT_MAP = new Map<string, string>([
    Array.from(UNIT_MAP.entries()).map(([key, value]) => {
        return [value, key];
    }) as any,
]);

SerializableObject({
    rdf: {
        type: qudt.Unit,
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
