import { SerializableObject } from '@openhps/core';
import { MACAddress } from '@openhps/rf';
import { xsd } from '../../decorators/types';
import { Thing } from '../../rdf';

SerializableObject({
    rdf: {
        type: xsd.string,
        serializer: (object: MACAddress) => {
            return {
                value: object.toString(),
            };
        },
        deserializer: (thing: Thing) => {
            return MACAddress.fromString(thing.value);
        },
    },
})(MACAddress);
