import {
    SerializableObject,
    SensorObject,
    SerializableMember,
    SensorType,
    Accelerometer,
    Gyroscope,
    Magnetometer,
    LinearVelocitySensor,
} from '@openhps/core';
import { DataFactory } from 'n3';
import { RDFBuilder, Thing, IriString } from '../rdf';
import { sosa, ssns, rdf, ssn, schema, unit, m3lite } from '../vocab';

const SENSOR_MAP = new Map<SensorType, IriString>([
    [Accelerometer, m3lite.Accelerometer],
    [Gyroscope, m3lite.GyroscopeSensor],
    [Magnetometer, m3lite.Magnetometer],
    [LinearVelocitySensor, m3lite.SpeedSensor],
]);
const REVERSE_SENSOR_MAP = new Map<IriString, SensorType>(
    Array.from(SENSOR_MAP.entries()).map(([key, value]) => {
        return [value, key];
    }),
);

@SerializableObject()
class UnknownSensor extends SensorObject {}

SerializableObject({
    rdf: {
        type: [sosa.Sensor],
        serializer: (object: SensorObject) => {
            const sensor = SENSOR_MAP.get(object.constructor as SensorType);
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
            let Sensor = UnknownSensor;
            thing.predicates[rdf.type].forEach((type) => {
                const match = REVERSE_SENSOR_MAP.get(type.value as IriString);
                if (match) {
                    Sensor = match;
                }
            });
            return new Sensor();
        },
    },
})(SensorObject);
SerializableMember({
    rdf: {
        predicate: ssns.hasSystemProperty,
        serializer: (frequency: number) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, ssns.Frequency)
                .add(rdf.type, ssn.Property)
                .add(schema.value, frequency)
                .add(schema.unitCode, unit.HZ)
                .build();
        },
        deserializer: (thing: Thing) => {
            return parseFloat(thing.predicates[schema.value][0].value);
        },
    },
    name: 'frequency',
})(SensorObject.prototype, 'frequency');
SerializableMember({
    rdf: {
        predicate: sosa.madeObservation,
    },
    name: 'value',
})(SensorObject.prototype, 'value');
