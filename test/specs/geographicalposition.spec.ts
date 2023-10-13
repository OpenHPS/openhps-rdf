import 'mocha';
import { GeographicalPosition } from '@openhps/core';
import { RDFSerializer, Literal } from '../../src';
import { geo, ogc, rdf, poso } from '../../src/vocab';
import { expect } from 'chai';

describe('GeographicalPosition', () => {
    const object = new GeographicalPosition(50.10, 20.5, 10);

    describe('serialization', () => {
        let serialized = undefined;

        before(() => {
            serialized = RDFSerializer.serialize(object);
        });

        it('should have an absolute position rdf type', () => {
            expect(serialized.predicates[rdf.type]).to.not.be.undefined;
            expect(serialized.predicates[rdf.type][0].value).to.equal(geo.Point);
            expect(serialized.predicates[rdf.type][1].value).to.equal(poso.AbsolutePosition);
        });

        it('should have a geo:Point rdf type', () => {
            expect(serialized.predicates[rdf.type]).to.not.be.undefined;
            expect(serialized.predicates[rdf.type][0].value).to.equal(geo.Point);
        });

        it('should have a 3d wkt serialization', () => {
            expect(serialized.predicates[ogc.asWKT]).to.not.be.undefined;
            expect((serialized.predicates[ogc.asWKT][0] as Literal).id).to.equal("\"POINT Z(20.5 50.1 10)\"^^http://www.opengis.net/ont/geosparql#wktLiteral");
        });

    });

    describe('deserialization', () => {
        let serialized = undefined;
        let deserialized = undefined;

        before(async () => {
            serialized = RDFSerializer.serialize(object);
            deserialized = RDFSerializer.deserialize(serialized);
        });

        it('should deserialize to a geographical position', () => {
            expect(deserialized.latitude).to.not.be.undefined;
            expect(deserialized.latitude).to.not.be.NaN;
        });

        describe('stringify', () => {
            let serialized = undefined;
            let deserialized = undefined;
    
            before(async () => {
                serialized = await RDFSerializer.stringify(RDFSerializer.serialize(object));
                deserialized = RDFSerializer.deserializeFromString(undefined, serialized);
            });
    
            it('should deserialize to a geographical position', () => {
                expect(deserialized.latitude).to.not.be.undefined;
                expect(deserialized.latitude).to.not.be.NaN;
            });
        });
    });
});
