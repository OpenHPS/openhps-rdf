import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { BLEObject, MACAddress } from '@openhps/rf';
import { DataFactory, Literal } from 'n3';
import { Thing } from '../../rdf';
import { poso, hardware } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RFLandmark,
    },
})(BLEObject);
// SerializableMember({
//     rdf: {
//         predicate: hardware.macAddress,
//         serializer: (object: MACAddress) => {
//             if (!object) {
//                 return undefined;
//             }
//             return DataFactory.literal(object.toString());
//         },
//         deserializer: (thing: Thing) => {
//             if (!thing) {
//                 return undefined;
//             }
//             return MACAddress.fromString(thing.value);
//         },
//     },
//     name: 'address',
// })(BLEObject.prototype, 'address');
// SerializableArrayMember(MACAddress, {
//     rdf: {
//         predicate: hardware.macAddress,
//         serializer: (object: MACAddress) => {
//             if (!object) {
//                 return undefined;
//             }
//             return DataFactory.literal(object.toString());
//         },
//         deserializer: (thing: Thing) => {
//             if (!thing) {
//                 return undefined;
//             }
//             return MACAddress.fromString(thing.value);
//         },
//     },
//     name: 'knownAddresses',
// })(BLEObject.prototype, 'knownAddresses');
