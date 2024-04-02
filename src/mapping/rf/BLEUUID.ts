import { BLEUUID } from '@openhps/rf';
import { DataFactory } from 'n3';
import { xsd } from '../../rdf/types';
import { Thing, RDFSerializer } from '../../rdf';

RDFSerializer.registerRDFType(BLEUUID, {
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
});
