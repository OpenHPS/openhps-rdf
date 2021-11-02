import { AngleUnit, DataObject, GeographicalPosition, Orientation } from '@openhps/core';
import 'mocha';
import { RDFDataset } from '../../src';

describe('DataObject', () => {

    it('should convert to a Thing', async () => {
        const object = new DataObject("me");
        object.displayName = "Maxim Van de Wynckel";
        const position = new GeographicalPosition(50.8274427, 4.4017151, 120);
        position.orientation = Orientation.fromEuler({
            yaw: 150,
            pitch: 0,
            roll: 0,
            unit: AngleUnit.DEGREE
        });
        object.position = position;
        const dataset = new RDFDataset("http://maximvdw.solidweb.org/public/position.ttl#");
        const individual = object.toThing("http://maximvdw.solidweb.org/profile/card");
        dataset.addThing(individual);
    });

});
