import { UUID } from '@openhps/core';
import { DataFactory } from 'n3';
import { xsd } from '../decorators';
import { Thing, RDFSerializer } from '../rdf';

RDFSerializer.registerType(UUID, {
    serializer: (value: UUID) => {
        if (!value) {
            return undefined;
        }
        return DataFactory.literal(value.toString().replace(/-/g, ''), DataFactory.namedNode(xsd.hexBinary));
    },
    deserializer: (thing: Thing) => {
        if (!thing) {
            return undefined;
        }
        return UUID.fromString(thing.value);
    },
});
