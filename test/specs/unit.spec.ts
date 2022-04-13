import { LengthUnit, Unit } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { qudt_unit, RDFSerializer } from '../../src';

describe('Unit', () => {
    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(LengthUnit.METER);

        it('should be serializable', () => {
            expect(serialized.value).to.equal(qudt_unit.M);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(LengthUnit.METER);

        it('should be deserializable', () => {
            const deserialized = RDFSerializer.deserialize(serialized);
            expect(deserialized).to.equal(LengthUnit.METER);
        });
    });
});
