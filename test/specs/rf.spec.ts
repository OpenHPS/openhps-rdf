import 'mocha';
import { BLEiBeacon, BLEObject, BLEUUID, MACAddress, RelativeRSSI } from '@openhps/rf';
import { IriString, poso, posoc, RDFSerializer } from '../../src';
import { DataObject } from '@openhps/core';
import { expect } from 'chai';

describe('@openhps/rf', () => {
    RDFSerializer.initialize("rf");
    const relativeRSSI = new RelativeRSSI("test", -56);
    const object = new DataObject();
    object.addRelativePosition(relativeRSSI);
    const beacon = new BLEiBeacon(MACAddress.fromString("11:22:33:44:55"));
    beacon.calibratedRSSI = -56;
    beacon.proximityUUID = BLEUUID.fromString("AAEE");
    beacon.major = 1111;
    beacon.minor = 1234;
    
    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(object, {
            baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
        });

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
        });
    });

    describe('deserialization', () => {
        let serialized;
        let deserialized;
        
        before(() => {
            serialized = RDFSerializer.serialize(beacon, {
                baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
            });
            deserialized = RDFSerializer.deserialize(serialized);
        });

        it('should deserialize a beacon', () => {
            expect(deserialized).to.be.instanceOf(BLEiBeacon);
            expect(deserialized.major).to.not.be.undefined;
            expect(deserialized.minor).to.not.be.undefined;
        });
    });

});
