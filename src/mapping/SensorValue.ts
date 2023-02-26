import {
    Acceleration,
    AngularVelocity,
    LinearVelocity,
    Magnetism,
    SensorValue,
    SerializableMember,
    SerializableObject,
} from '@openhps/core';
import { RDFBuilder, Thing, IriString } from '../rdf';
import { xsd } from '../decorators';
import { poso, sosa, rdf, qudt, schema, m3lite } from '../vocab';
import { DataFactory } from 'n3';

const SENSOR_MAP = new Map<new () => SensorValue, IriString>([
    [Acceleration, m3lite.Acceleration],
    [AngularVelocity, m3lite.AngularSpeed],
    [LinearVelocity, m3lite.Speed],
    [Magnetism, m3lite.MagneticField],
]);
const REVERSE_SENSOR_MAP = new Map<IriString, new () => SensorValue>(
    Array.from(SENSOR_MAP.entries()).map(([key, value]) => {
        return [value, key];
    }),
);

SerializableObject({
    rdf: {
        type: sosa.Observation,
        serializer: (object: SensorValue) => {
            const sensor = SENSOR_MAP.get(object.constructor as new () => SensorValue);
            if (sensor) {
                return {
                    predicates: {
                        [rdf.type]: [DataFactory.namedNode(sensor)],
                    },
                };
            }
            return {};
        },
        deserializer: (thing: Thing) => {
            let Sensor: new () => SensorValue = SensorValue;
            thing.predicates[rdf.type].forEach((type) => {
                const match = REVERSE_SENSOR_MAP.get(type.value as IriString);
                if (match) {
                    Sensor = match;
                }
            });
            return new Sensor();
        },
    },
})(SensorValue);
SerializableMember({
    rdf: {
        predicate: sosa.phenomenonTime,
        datatype: xsd.dateTime,
    },
})(SensorValue.prototype, 'timestamp');
SerializableMember({
    rdf: {
        predicate: poso.hasAccuracy,
    },
})(SensorValue.prototype, 'accuracy');
SerializableMember({
    rdf: {
        predicate: poso.xAxisValue,
        serializer: (value: number, object: SensorValue) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit)
                .add(qudt.numericValue, value, xsd.double)
                .build();
        },
        deserializer: (thing: Thing) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(SensorValue.prototype, 'x');
SerializableMember({
    rdf: {
        predicate: poso.yAxisValue,
        serializer: (value: number, object: SensorValue) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit)
                .add(qudt.numericValue, value, xsd.double)
                .build();
        },
        deserializer: (thing: Thing) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(SensorValue.prototype, 'y');
SerializableMember({
    rdf: {
        predicate: poso.zAxisValue,
        serializer: (value: number, object: SensorValue) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, qudt.QuantityValue)
                .add(qudt.unit, object.unit)
                .add(qudt.numericValue, value, xsd.double)
                .build();
        },
        deserializer: (thing: Thing) => {
            return parseFloat(thing.predicates[qudt.numericValue][0].value);
        },
    },
})(SensorValue.prototype, 'z');
SerializableMember({
    rdf: {
        predicate: schema.unitCode,
    },
})(SensorValue.prototype, 'unit');
