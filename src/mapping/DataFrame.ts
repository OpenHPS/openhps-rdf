import { DataFrame } from '@openhps/core';
import { createRDFSerializable, RDFBuilder, RDFSerializable } from '../rdf';
import { dct, m3lite, rdf, openhps } from '../vocab';

declare module '@openhps/core/dist/types/data/DataFrame' {
    export interface DataFrame extends RDFSerializable {}
}

createRDFSerializable(DataFrame, function (baseUri?) {
    const builder = RDFBuilder.create({ url: this.uri || baseUri ? `${baseUri}${this.uid}` : undefined })
        .addIri(rdf.type, openhps.DataFrame)
        .addDatetime(dct.created, new Date(this.createdTimestamp))
        .addIri(m3lite.hasSource, undefined);
    return builder.build();
});
