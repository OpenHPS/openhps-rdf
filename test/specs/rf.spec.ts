import 'mocha';
import { BLEiBeacon, BLEObject, MACAddress, RelativeRSSI } from '@openhps/rf';
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

        
        it('should serialize a MACAddress', async () => {
            const object = new BLEiBeacon(MACAddress.fromString("00:11:22:33:44"));
            object.calibratedRSSI = -56;
            const turtle = await RDFSerializer.stringify(object, {
                format: 'text/turtle',
                prettyPrint: true,
                baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
            });
            console.log(turtle);
        });

        it('should serialize a ble object', async () => {
            const object = new BLEObject(MACAddress.fromString("00:11:22:33:44"));
            const turtle = await RDFSerializer.stringify(object, {
                format: 'text/turtle',
                prettyPrint: true,
                baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
            });
            console.log(turtle);
        });
    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        
    });


});
