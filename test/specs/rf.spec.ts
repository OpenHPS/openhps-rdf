import 'mocha';
import { RelativeRSSI } from '@openhps/rf';
import { RDFSerializer } from '../../src';
import { DataObject } from '@openhps/core';

describe('@openhps/rdf', () => {
    const relativeRSSI = new RelativeRSSI("test", -56);
    const object = new DataObject();
    object.addRelativePosition(relativeRSSI);

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");

        it('should serialize models', async () => {
            const turtle = await RDFSerializer.stringify(serialized, {
                format: 'text/turtle',
                prettyPrint: true
            });
            //console.log(turtle);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        
    });


});
