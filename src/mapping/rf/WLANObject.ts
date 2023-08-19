import { SerializableObject } from '@openhps/core';
import { WLANObject } from '@openhps/rf';
import { poso } from '../../vocab';

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
