import 'mocha';
import { Absolute2DPosition, DataObject, LengthUnit, Orientation, Relative2DPosition, RelativeOrientation } from '@openhps/core';
import { RDFSerializer } from '../../src';
import { poso, rdf, sosa } from '../../src/vocab';
import { expect } from 'chai';

describe('RelativeOrientation', () => {
    const object = new DataObject("test")
        .setPosition(new Absolute2DPosition(50.10, 20.5));
    object.position.unit = LengthUnit.METER;
    const virtual = new DataObject("abc")
        .addRelativePosition(new Relative2DPosition(object, 1, 2, LengthUnit.CENTIMETER))
        .addRelativePosition(new RelativeOrientation(object, Orientation.fromEuler({
            yaw: 0,
            roll: 0,
            pitch: 0
        })));

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

        it('should have an orientation with a poso relative position rdf type', () => {
            expect(serialized.predicates[poso.hasOrientation]).to.not.be.undefined;
            expect(serialized.predicates[poso.hasOrientation][0].predicates[rdf.type][0].value).to.equal(poso.Orientation);
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
        
        it('should deserialize to a relative orientation', () => {
            expect(deserialized.getRelativePosition(object.uid)).to.be.instanceOf(RelativeOrientation);
        });

        it('should deserialize the value', () => {
            expect((deserialized.getRelativePosition(object.uid) as RelativeOrientation).referenceValue.toArray()).to.eql(Orientation.fromEuler({
                yaw: 0,
                roll: 0,
                pitch: 0
            }).toArray());
        });
    });

});
