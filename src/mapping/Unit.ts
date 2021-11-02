import { Unit } from '@openhps/core';
import { createRDFSerializable, RDFBuilder, RDFSerializable } from '../rdf';
import { dqm, qu, rdf } from '../vocab';

declare module '@openhps/core/dist/types/utils/unit/Unit' {
    export interface Unit extends RDFSerializable {}
}

createRDFSerializable(Unit, function (baseUri?) {
    const thing = RDFBuilder.create({ url: this.uri || baseUri ? `${baseUri}${this.name}` : undefined })
        .addIri(rdf.type, dqm.Unit)
        .addIri(rdf.type, qu.Unit)
        .addStringEnglish(dqm.unitName, self.name)
        .build();
    return thing;
});
