import 'mocha';
import { Acceleration, AccelerationUnit, Accelerometer, SensorObject } from '@openhps/core';
import { RDFSerializer } from '../../src';
import { expect } from 'chai';

describe('SensorObject', () => {
    const sensor = new Accelerometer("test", new Acceleration(
        1, 2, 3, AccelerationUnit.METER_PER_SECOND_SQUARE
    ), 50);

    describe('serialization', () => {
        it('should serialize', async () => {
            const serialized = RDFSerializer.serialize(sensor, {
                baseUri: "http://example.com#"
            });
            const turtle = await RDFSerializer.stringify(serialized, {
                format: 'text/turtle',
                prettyPrint: true
            });
            console.log(turtle)
        });
    });

    describe('deserialization', () => {
        let serialized;
        let deserialized: SensorObject;

        before(() => {
            serialized = RDFSerializer.serialize(sensor, {
                baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
            });
            deserialized = RDFSerializer.deserialize(serialized);
        });

        it('should correctly deserialize', () => {
    //        expect(deserialized).to.eql(sensor);
        });

    });

});
