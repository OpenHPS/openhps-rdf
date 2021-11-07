import 'mocha';
import { DataObject, DataSerializer, GeographicalAccuracy, GeographicalPosition, LengthUnit, Orientation, RelativeDistance } from '@openhps/core';
import { openhps, rdf, RDFSerializer } from '../../src';
import { expect } from 'chai';
import { position } from '../../src/vocab/schema';

describe('DataObject', () => {
    const object = new DataObject();
    object.displayName = "Maxim Van de Wynckel";
    object.position = new GeographicalPosition(50.40, 10.20, 15);
    object.position.unit = LengthUnit.METER;
    object.position.accuracy = new GeographicalAccuracy(1, 1, 1, LengthUnit.KILOMETER);
    object.position.orientation = Orientation.fromEuler({
        yaw: 0,
        roll: 0,
        pitch: 0
    });
    object.addRelativePosition(new RelativeDistance('object1', 10));
    object.addRelativePosition(new RelativeDistance('object2', 5));

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");

        it('should have a single rdf type', () => {
            expect(serialized.predicates[rdf.type].length).to.equal(1);
        });

        it('should serialize the position of an object', () => {
            const positions = serialized.predicates[openhps.position];
            expect(positions.length).to.equal(3);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        const deserialized = RDFSerializer.deserialize(serialized);

        it('should deserialize an object', () => {
            console.log(deserialized)
        });
    });

});
