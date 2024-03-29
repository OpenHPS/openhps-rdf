import 'mocha';
import { Absolute2DPosition, LengthUnit } from '@openhps/core';
import { RDFSerializer, Literal } from '../../src';
import { poso, ogc, rdf } from '../../src/vocab';
import { expect } from 'chai';

describe('Absolute2DPosition', () => {
    const object = new Absolute2DPosition(50.10, 20.5);
    object.unit = LengthUnit.METER;

    describe('serialization', () => {
        let serialized = undefined;

        before(async () => {
            serialized = RDFSerializer.serialize(object);
            serialized.id = "http://test"
            serialized.termType = "NamedNode"
            console.log(await RDFSerializer.stringify(serialized, {
                prettyPrint: true,
                baseUri: "http://example.org/"
            }));
            console.log(RDFSerializer.deserialize(serialized));
        });
        
        it('should have an absolute position rdf type', () => {
            expect(serialized.predicates[rdf.type]).to.not.be.undefined;
            expect(serialized.predicates[rdf.type][0].value).to.equal(poso.AbsolutePosition);
        });

        it('should have an x coordinate', () => {
            expect(serialized.predicates[poso.xAxisValue]).to.not.be.undefined;
            expect(serialized.predicates[poso.yAxisValue]).to.not.be.undefined;
            console.log((serialized.predicates[poso.xAxisValue][0] as Literal));
        });

    });

});
