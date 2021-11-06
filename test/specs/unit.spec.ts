import { LengthUnit, Unit } from '@openhps/core';
import 'mocha';
import { RDFSerializer } from '../../src';

describe('Unit', () => {
    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(LengthUnit.METER);
    });
});
