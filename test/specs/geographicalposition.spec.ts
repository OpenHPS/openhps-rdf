import '../../src';
import 'mocha';
import { AngleUnit, GeographicalPosition, Orientation } from '@openhps/core';
import { RDFDataset } from '../../src';

describe('GeographicalPosition', () => {

    it('should convert to a Thing', () => {
        const position = new GeographicalPosition(50.8274427, 4.4017151, 120);
        position.orientation = Orientation.fromEuler({
            yaw: 150,
            pitch: 0,
            roll: 0,
            unit: AngleUnit.DEGREE
        });
        const dataset = new RDFDataset("http://maximvdw.solidweb.org/public/position.ttl#");
        const individual = position.toThing();
        dataset.addThing(individual);
    });

});
