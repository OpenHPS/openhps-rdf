import 'mocha';
import { DataSerializer, AbsolutePosition, GeographicalPosition } from '@openhps/core';
import { RDFSerializer } from '../../src';
import { geo, ogc, openhps, rdf } from '../../src/vocab';
import { expect } from 'chai';

describe('GeographicalPosition', () => {
    const object = new GeographicalPosition(50.10, 20.5, 10);

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(object);

        it('should have an absolute position rdf type', () => {
            expect(serialized.predicates[rdf.type]).to.not.be.undefined;
            expect(serialized.predicates[rdf.type][1].value).to.equal(ogc.Geometry);
        });

        it('should have a geo:Point rdf type', () => {
            expect(serialized.predicates[rdf.type]).to.not.be.undefined;
            expect(serialized.predicates[rdf.type][0].value).to.equal(geo.Point);
        });

    });

});
