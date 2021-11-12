import 'mocha';
import { Absolute3DPosition, AngleUnit, DataFrame, DataObject, GeographicalAccuracy, GeographicalPosition, LengthUnit, Orientation, RelativeDistance } from '@openhps/core';
import { m3lite, openhps, qu, RDFSerializer, Thing } from '../../src';
import { expect } from 'chai';
import { DataFactory, Parser } from 'n3';

describe('DataFrame', () => {
    const object = new DataObject();
    object.displayName = "Maxim Van de Wynckel";
    object.position = new GeographicalPosition(50.40, 10.20, 15);
    object.position.unit = LengthUnit.METER;
    object.position.accuracy = new GeographicalAccuracy(1, 1, 1, LengthUnit.KILOMETER);
    object.position.orientation = Orientation.fromEuler({
        yaw: 1,
        roll: 0,
        pitch: 0,
        unit: AngleUnit.RADIAN
    });
    object.addRelativePosition(new RelativeDistance('object1', 10));
    object.addRelativePosition(new RelativeDistance('object2', 5));
    const frame = new DataFrame(object);
    frame.addObject(new DataObject().setPosition(new Absolute3DPosition(1, 2, 3)));

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(frame, "https://maximvdw.solidweb.org/public/openhps.ttl#");

        it('should serialize the position of a frame', async () => {
            const turtle = await RDFSerializer.stringify(serialized, {
                format: 'text/turtle',
                prettyPrint: true
            });
            expect(frame.getObjects().length).to.equal(2);
            expect(frame['_objects'].size).to.equal(2);
            expect(serialized.predicates[openhps.includesObject].length).to.equal(2);
            expect((serialized.predicates[openhps.includesObject][0] as Thing).predicates[openhps.hasPosition].length).to.equal(3);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(frame, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        const serializedObject = serialized.predicates[openhps.includesObject][0] as Thing;
        const serializedPosition = serializedObject.predicates[openhps.hasPosition][0] as Thing;
        const serializedOrientation = serializedPosition.predicates[openhps.hasOrientation][0] as Thing;
        serializedOrientation.predicates[qu.unit][0] = DataFactory.namedNode(m3lite.Radian);
        const deserialized: DataFrame = RDFSerializer.deserialize(serialized);

        it('should deserialize a data frame', () => {
            expect(deserialized).to.not.be.undefined;
        });
    });


});
