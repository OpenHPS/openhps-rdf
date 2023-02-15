import { SerializableMember, SerializableObject } from '@openhps/core';
import { BLEiBeacon } from '@openhps/rf';
import { xsd } from '../../decorators';
import { posoc } from '../../vocab';

SerializableObject({
    rdf: {
        type: posoc.iBeacon,
    },
})(BLEiBeacon);
SerializableMember({
    rdf: {
        predicate: posoc.proximityUUID,
        datatype: xsd.hexBinary,
    },
    name: 'proximityUUID',
})(BLEiBeacon.prototype, 'proximityUUID');
SerializableMember({
    rdf: {
        predicate: posoc.major,
        datatype: xsd.integer,
    },
    name: 'major',
})(BLEiBeacon.prototype, 'major');
SerializableMember({
    rdf: {
        predicate: posoc.minor,
        datatype: xsd.integer,
    },
    name: 'minor',
})(BLEiBeacon.prototype, 'minor');
