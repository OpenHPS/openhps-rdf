import { SerializableMember, SerializableObject } from '@openhps/core';
import { BLEiBeacon, BLEUUID } from '@openhps/rf';
import { DataFactory } from 'n3';
import { Thing } from '../../rdf';
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
        serializer: (value: BLEUUID) => {
            if (!value) {
                return undefined;
            }
            return DataFactory.literal(value.toString().replace(/-/g, ''), DataFactory.namedNode(xsd.hexBinary));
        },
        deserializer: (thing: Thing) => {
            if (!thing) {
                return undefined;
            }
            return BLEUUID.fromString(thing.value);
        },
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
