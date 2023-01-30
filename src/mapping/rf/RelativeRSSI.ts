import { SerializableMember, SerializableObject } from '@openhps/core';
import { RelativeRSSI } from '@openhps/rf';
import { DataFactory } from 'n3';
import { poso, qudt, unit } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RelativeSignalStrength,
        serializer: () => {
            return {
                predicates: {
                    [qudt.unit]: [DataFactory.namedNode(unit.DeciB_M)],
                },
            };
        },
    },
})(RelativeRSSI);
SerializableMember({
    rdf: {
        predicate: qudt.value,
    },
    name: 'rssi',
})(RelativeRSSI.prototype, 'rssi');
