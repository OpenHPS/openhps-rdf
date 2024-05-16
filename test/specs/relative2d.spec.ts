import 'mocha';
import { Absolute2DPosition, DataObject, DataSerializerUtils, LengthUnit, Relative2DPosition, Relative3DPosition, RelativeAngle } from '@openhps/core';
import { RDFSerializer } from '../../src';
import { poso, rdf, sosa } from '../../src/vocab';
import { expect } from 'chai';

describe('Relative2DPosition', () => {
    const object = new DataObject("test")
        .setPosition(new Absolute2DPosition(50.10, 20.5));
    object.position.unit = LengthUnit.METER;
    const virtual = new DataObject("abc")
        .addRelativePosition(new Relative2DPosition(object, 1, 2, LengthUnit.CENTIMETER));
    const virtual1 = new DataObject("abc")
        .addRelativePosition(new Relative3DPosition(object, 1, 2, 3, LengthUnit.CENTIMETER));

    describe('serialization', () => {
        let serialized = undefined;

        before(async () => {
            serialized = RDFSerializer.serialize(virtual, {
                baseUri: "http://example.org/"
            });
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

    describe('deserialization', () => {
        let deserialized = undefined;

        before(async () => {
            const serialized = RDFSerializer.serialize(virtual, {
                baseUri: "http://example.org/"
            });
            deserialized = RDFSerializer.deserialize(serialized);
        });
        
        it('should deserialize to a relative2d', () => {
            expect(deserialized.getRelativePosition(object.uid)).to.be.instanceOf(Relative2DPosition);
        });

        it('should deserialize the value', () => {
            expect((deserialized.getRelativePosition(object.uid) as Relative2DPosition).x).to.eql(0.01);
        });

        it('should deserialize to a relative3d', () => {
            expect(virtual1.getRelativePosition(object.uid)).to.be.instanceOf(Relative3DPosition);
            const serialized = RDFSerializer.serialize(virtual1);
            const deserialized = RDFSerializer.deserialize(serialized);
            expect((deserialized as DataObject).getRelativePosition(object.uid)).to.be.instanceOf(Relative3DPosition);
        });
    });

});
