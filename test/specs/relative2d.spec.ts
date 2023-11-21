import 'mocha';
import { Absolute2DPosition, DataObject, LengthUnit, Relative2DPosition } from '@openhps/core';
import { RDFSerializer } from '../../src';
import { poso, rdf, sosa } from '../../src/vocab';
import { expect } from 'chai';

describe('Relative2DPosition', () => {
    const object = new DataObject("test")
        .setPosition(new Absolute2DPosition(50.10, 20.5));
    object.position.unit = LengthUnit.METER;
    const virtual = new DataObject("abc")
        .addRelativePosition(new Relative2DPosition(object, 1, 2, LengthUnit.METER));

    describe('serialization', () => {
        let serialized = undefined;

        before(async () => {
            serialized = RDFSerializer.serialize(virtual, {
                baseUri: "http://example.org/"
            });
            console.log(await RDFSerializer.stringify(serialized, {
                prettyPrint: true,
                baseUri: "http://example.org/"
            }));
            console.log(RDFSerializer.deserialize(serialized));
        });
        
        it('should have a feature of interest rdf type', () => {
            expect(serialized.predicates[rdf.type]).to.not.be.undefined;
            expect(serialized.predicates[rdf.type][0].value).to.equal(sosa.FeatureOfInterest);
        });

        it('should have a position with a poso relative position rdf type', () => {
            expect(serialized.predicates[poso.hasPosition]).to.not.be.undefined;
            expect(serialized.predicates[poso.hasPosition][0].predicates[rdf.type][0].value).to.equal(poso.RelativePosition);
        });
    });

});
