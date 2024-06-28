import { expect } from 'chai';
import 'mocha';
import { RDFBuilder, ssn } from '../../src';

describe('RDFBuilder', () => {

    describe('changelog', () => {
        it('should keep a changelog for additions', () => {
            const builder = RDFBuilder.blankNode();
            builder.add(ssn.hasProperty, "https://test.com/");
            builder.add(ssn.hasProperty, "https://test2.com/");
            const thing = builder.build(true);
            expect(thing.additions).to.have.lengthOf(2);
        });

        it('should keep a changelog for additions and deletions', () => {
            const builder = RDFBuilder.blankNode();
            builder.add(ssn.hasProperty, "https://test.com/");
            builder.add(ssn.hasProperty, "https://test2.com/");
            builder.delete(ssn.hasProperty, "https://test.com/");
            const thing = builder.build(true);
            expect(thing.additions).to.have.lengthOf(2);
            expect(thing.deletions).to.have.lengthOf(1);
        });
    });

    describe('delete()', () => {
        it('should not delete predicates that do not exist', () => {
            const builder = RDFBuilder.blankNode();
            builder.delete(ssn.hasProperty, "https://test.com/");
            const thing = builder.build(true);
            expect(thing.deletions).to.have.lengthOf(0);
        });
    });

});