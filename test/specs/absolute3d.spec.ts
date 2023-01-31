import 'mocha';
import { Absolute3DPosition } from '@openhps/core';
import { RDFSerializer, Literal } from '../../src';
import { geo, ogc, rdf } from '../../src/vocab';
import { expect } from 'chai';

describe('Absolute3DPosition', () => {
    const object = new Absolute3DPosition(50.10, 20.5, 10);

    describe('serialization', () => {
        let serialized = undefined;

        before(() => {
            serialized = RDFSerializer.serialize(object);
        });
        
        it('should have an absolute position rdf type', () => {
            expect(serialized.predicates[rdf.type]).to.not.be.undefined;
            expect(serialized.predicates[rdf.type][1].value).to.equal(ogc.Geometry);
        });

        it('should have a 3d wkt serialization', () => {
            expect(serialized.predicates[ogc.asWKT]).to.not.be.undefined;
            expect((serialized.predicates[ogc.asWKT][0] as Literal).id).to.equal("\"POINT Z(50.1 20.5 10)\"^^http://www.opengis.net/ont/geosparql#wktLiteral");
        });

    });

});
