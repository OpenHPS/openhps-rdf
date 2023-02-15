import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { BLEObject, MACAddress } from '@openhps/rf';
import { DataFactory } from 'n3';
import { xsd } from '../../decorators';
import { Thing, RDFBuilder } from '../../rdf';
import { poso, posoc, hardware, rdf, qudt, unit } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RFLandmark,
    },
})(BLEObject);
SerializableMember({
    rdf: {
        predicate: posoc.hasReferenceRSSI,
        serializer: (rssi: number) => {
            return RDFBuilder.blankNode()
                .add(rdf.type, poso.RelativeSignalStrength)
                .add(
                    poso.hasRSS,
                    RDFBuilder.blankNode()
                        .add(rdf.type, qudt.QuantityValue)
                        .add(qudt.unit, unit.DeciB_M)
                        .add(qudt.numericValue, rssi, xsd.integer)
                        .build(),
                )
                .add(
                    poso.hasRelativeDistance,
                    RDFBuilder.blankNode()
                        .add(rdf.type, qudt.QuantityValue)
                        .add(qudt.unit, unit.M)
                        .add(qudt.numericValue, 1, xsd.integer)
                        .build(),
                )
                .build();
        },
    },
    name: 'calibratedRSSI',
})(BLEObject.prototype, 'calibratedRSSI');
SerializableMember({
    rdf: {
        predicate: hardware.macAddress,
        datatype: xsd.string,
        serializer: (object: MACAddress) => {
            if (!object) {
                return undefined;
            }
            return DataFactory.literal(object.toString());
        },
        deserializer: (thing: Thing) => {
            if (!thing) {
                return undefined;
            }
            return MACAddress.fromString(thing.value);
        },
    },
    name: 'address',
})(BLEObject.prototype, 'address');
SerializableArrayMember(MACAddress, {
    rdf: {
        predicate: hardware.macAddress,
        datatype: xsd.string,
        serializer: (object: MACAddress) => {
            if (!object) {
                return undefined;
            }
            return DataFactory.literal(object.toString());
        },
        deserializer: (thing: Thing) => {
            if (!thing) {
                return undefined;
            }
            return MACAddress.fromString(thing.value);
        },
    },
    name: 'knownAddresses',
})(BLEObject.prototype, 'knownAddresses');
