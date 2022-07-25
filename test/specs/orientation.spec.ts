import { AngleUnit, Orientation } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { dcterms, poso, RDFSerializer } from '../../src';

describe('Orientation', () => {

    const object = Orientation.fromEuler({
        yaw: 180,
        pitch: 45,
        roll: 0,
        unit: AngleUnit.DEGREE
    });

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(object);

        it('should include custom serialization', () => {
            expect(serialized.predicates[poso.yaw]).to.not.be.undefined;
            expect(serialized.predicates[poso.pitch]).to.not.be.undefined;
            expect(serialized.predicates[poso.roll]).to.not.be.undefined;
            expect(serialized.predicates[dcterms.created]).to.not.be.undefined;
            const euler = object.toEuler();
            expect(Number(serialized.predicates[poso.yaw][0].value)).to.equal(euler.yaw);
            expect(Number(serialized.predicates[poso.pitch][0].value)).to.equal(euler.pitch);
            expect(Number(serialized.predicates[poso.roll][0].value)).to.equal(euler.roll);
        });

    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(object);
        const deserialized = RDFSerializer.deserialize(serialized, Orientation);

        it('should include custom deserialization', () => {
            const euler = deserialized.toEuler();
            // expect(euler.yaw).to.equal(object.toEuler().yaw);
            // expect(Math.round(euler.roll)).to.equal(Math.round(object.toEuler().roll));
            // expect(Math.round(euler.pitch)).to.equal(Math.round(object.toEuler().pitch));
        });
    });

});
