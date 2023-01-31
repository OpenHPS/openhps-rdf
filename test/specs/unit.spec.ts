import { LengthUnit, Unit } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { unit, RDFSerializer } from '../../src';

describe('Unit', () => {
    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(LengthUnit.METER);

        it('should be serializable', () => {
            expect(serialized.value).to.equal(unit.M);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(LengthUnit.METER);

        it('should be deserializable', () => {
            const deserialized = RDFSerializer.deserialize(serialized, Unit);
            expect(deserialized).to.equal(LengthUnit.METER);
        });
    });
});
