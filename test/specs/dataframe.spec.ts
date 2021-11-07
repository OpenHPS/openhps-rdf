import 'mocha';
import { DataFrame, DataObject, GeographicalAccuracy, GeographicalPosition, LengthUnit, Orientation, RelativeDistance } from '@openhps/core';
import { openhps, RDFSerializer } from '../../src';
import { expect } from 'chai';

describe('DataFrame', () => {
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
    const frame = new DataFrame(object);

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(frame, "https://maximvdw.solidweb.org/public/openhps.ttl#");

        it('should serialize the position of a frame', async () => {
            // console.log(await RDFSerializer.stringify(serialized, {
            //     format: 'text/turtle'
            // }))
        });
    });

});
