import { SerializableMember, SerializableObject } from '@openhps/core';
import { WLANObject } from '@openhps/rf';
import { poso, hardware } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RFLandmark,
    },
})(WLANObject);
// SerializableMember({
//     rdf: {
//         predicate: hardware.channel,
//     },
//     name: 'rssi',
// })(WLANObject.prototype, 'rssi');
