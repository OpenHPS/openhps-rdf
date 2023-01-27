import 'mocha';
import { RDFSerializer } from '../../src';
import { GeographicalPosition } from '@openhps/core';
import { Building } from '@openhps/geospatial';

describe('@openhps/geospatial', () => {
    const building = new Building("Pleinlaan 9")
        .setBounds({
            topLeft: new GeographicalPosition(
                50.8203726927966, 4.392241309019189
            ),
            width: 46.275,
            length: 37.27,
            rotation: -34.04
        });

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(building, "https://maximvdw.solidweb.org/public/openhps.ttl#");

        it('should serialize models', async () => {
            const turtle = await RDFSerializer.stringify(serialized, {
                format: 'text/turtle',
                prettyPrint: true
            });
            console.log(turtle, serialized);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(building, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        
    });


});
