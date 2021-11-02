import { AbsolutePosition } from '@openhps/core';
import { createRDFSerializable, RDFBuilder, RDFSerializable } from '../rdf';
import { dct, dqm, m3lite, rdf, sosa, openhps } from '../vocab';

declare module '@openhps/core/dist/types/data/position/AbsolutePosition' {
    export interface AbsolutePosition extends RDFSerializable {}
}

createRDFSerializable(AbsolutePosition, function (baseUri?) {
    const builder = RDFBuilder.create({
        url: this.uri || baseUri ? `${baseUri}${this.timestamp.toString()}` : undefined,
    })
        .addIri(rdf.type, openhps.AbsolutePosition)
        .addIri(rdf.type, sosa.Observation)
        .addDatetime(dct.created, new Date(this.timestamp))
        .addDatetime(dqm.timeOfAssessment, new Date(this.timestamp));
    if (this.orientation) {
        builder.addBlankNode(m3lite.DirectionHeading, this.orientation.toThing());
    }
    const thing = builder.build();
    return thing;
});
