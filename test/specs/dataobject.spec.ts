import 'mocha';
import { DataObject, Accuracy3D, GeographicalPosition, LengthUnit, Orientation, RelativeDistance } from '@openhps/core';
import { poso, rdf, RDFSerializer } from '../../src';
import { expect } from 'chai';

describe('DataObject', () => {
    const object = new DataObject("bsigner");
    object.displayName = "Beat Signer";
    object.position = new GeographicalPosition(50.40, 10.20, 15);
    object.position.unit = LengthUnit.METER;
    object.position.accuracy = new Accuracy3D(1, 1, 1, LengthUnit.KILOMETER);
    object.position.orientation = Orientation.fromEuler({
        yaw: 0,
        roll: 0,
        pitch: 0
    });
    object.addRelativePosition(new RelativeDistance('object1', 10));
    object.addRelativePosition(new RelativeDistance('object2', 5));

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        
        it('should serialize to an uri', () => {
            expect(RDFSerializer.serializeToUri(object, "https://maximvdw.solidweb.org/public/openhps.ttl#")).to.eql("https://maximvdw.solidweb.org/public/openhps.ttl#bsigner");
        });

        it('should have two rdf types', async () => {
            expect(serialized.predicates[rdf.type].length).to.equal(2);
            const turtle = await RDFSerializer.stringify(serialized, {
                format: 'text/turtle',
                prettyPrint: false
            });
        });

        it('should serialize the position of an object', () => {
            const positions = serialized.predicates[poso.hasPosition];
            expect(positions.length).to.equal(3);
        });

        it('should serialize to subjects', async () => {
            const subjects = RDFSerializer.serializeToSubjects(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
            
        });

    });

    describe('deserialization', () => {
        let serialized;
        let deserialized: DataObject;

        before(() => {
            serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
            deserialized = RDFSerializer.deserialize(serialized);
        });

        it('should deserialize an object', () => {
            expect(deserialized.displayName).to.equal("Beat Signer");
            expect(deserialized.uid).to.equal("bsigner");
        });
    });

});
