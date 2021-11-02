import { DataObject } from '@openhps/core';
import { createRDFSerializable, RDFBuilder, RDFSerializable } from '../rdf';
import { vcard, dct, geo, rdf, openhps } from '../vocab';

declare module '@openhps/core/dist/types/data/object/DataObject' {
    export interface DataObject extends RDFSerializable {}
}

createRDFSerializable(DataObject, function (baseUri?) {
    const builder = RDFBuilder.create({ url: this.uri || baseUri ? `${baseUri}${this.uid}` : undefined })
        .addIri(rdf.type, openhps.DataFrame)
        .addDatetime(dct.created, new Date(this.createdTimestamp))
        .addStringNoLocale(vcard.fn, this.displayName);
    if (this.position) {
        builder.addBlankNode(geo.location, this.position.toThing());
    }
    const thing = builder.build();
    return thing;
});
