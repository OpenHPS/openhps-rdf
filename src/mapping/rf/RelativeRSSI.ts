import { SerializableMember, SerializableObject } from '@openhps/core';
import { RelativeRSSI } from '@openhps/rf';
import { DataFactory } from 'n3';
import { poso, qudt, qudt_unit } from '../../vocab';

SerializableObject({
    rdf: {
        type: poso.RelativeSignalStrength,
        serializer: (rel: RelativeRSSI) => {
            return {
                predicates: {
                    [qudt.unit]: [DataFactory.namedNode(qudt_unit.DeciB_M)],
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
