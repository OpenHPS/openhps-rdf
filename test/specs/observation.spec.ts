import 'mocha';
import { expect } from 'chai';
import { Observation, RDFSerializer } from '../../src';
import exp = require('constants');

describe('Observation', () => {
    it('should serialize and deserialize', () => {
        const observation = new Observation();
        observation.usedProcedures = ['http://example.org/procedure', 'http://example.org/procedure2'];
        observation.resultTime = new Date();
        const serialized = RDFSerializer.serialize(observation);
        expect(serialized).to.not.be.undefined;
        const deserialized: Observation = RDFSerializer.deserialize(serialized);
        expect(deserialized).to.not.be.undefined;
        expect(deserialized.usedProcedures).to.have.lengthOf(2);
        expect(deserialized.resultTime).to.not.be.undefined;
        expect(deserialized.resultTime).to.be.instanceOf(Date);
        expect(deserialized.resultTime.getTime()).to.equal(observation.resultTime.getTime());
    });
});
