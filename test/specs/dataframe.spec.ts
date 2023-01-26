import 'mocha';
import { Absolute3DPosition, Accuracy3D, AngleUnit, DataFrame, DataObject, GeographicalPosition, LengthUnit, Orientation, RelativeDistance } from '@openhps/core';
import { poso, sosa, qudt, qudt_unit, RDFSerializer, Thing } from '../../src';
import { expect } from 'chai';
import { DataFactory, Parser, Store } from 'n3';

describe('DataFrame', () => {
    const object = new DataObject();
    object.displayName = "Maxim Van de Wynckel";
    object.position = new GeographicalPosition(50.40, 10.20, 15);
    object.position.unit = LengthUnit.METER;
    object.position.accuracy = new Accuracy3D(1, 1, 1, LengthUnit.KILOMETER);
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
            //console.log(turtle)
            expect(frame.getObjects().length).to.equal(2);
            expect(frame['_objects'].size).to.equal(2);
            expect(serialized.predicates[sosa.hasFeatureOfInterest].length).to.equal(2);
            expect((serialized.predicates[sosa.hasFeatureOfInterest][0] as Thing).predicates[poso.hasPosition].length).to.equal(3);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(frame, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        const serializedObject = serialized.predicates[sosa.hasFeatureOfInterest][0] as Thing;
        const serializedPosition = serializedObject.predicates[poso.hasPosition][0] as Thing;
        const serializedOrientation = serializedPosition.predicates[poso.hasOrientation][0] as Thing;
        serializedOrientation.predicates[qudt.unit][0] = DataFactory.namedNode(qudt_unit.RAD);
        const deserialized: DataFrame = RDFSerializer.deserialize(serialized);
        const serializedQuads = RDFSerializer.serializeToQuads(frame, "https://maximvdw.solidweb.org/public/openhps.ttl#");

        it('should deserialize a data frame', () => {
            expect(deserialized).to.not.be.undefined;
        });

        it('should deserialize a data frame from store', () => {
            const store = new Store(serializedQuads);
            const deserializedFrame = RDFSerializer.deserializeFromStore(DataFactory.namedNode(serialized.value), store);
            expect(deserializedFrame['_objects']).to.not.be.undefined;
            expect(deserializedFrame['_objects']).to.be.instanceOf(Map);
        });
    });


});
