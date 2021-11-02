import { SensorValue } from '@openhps/core';
import { createRDFSerializable, RDFBuilder, RDFSerializable } from '../rdf';
import { dct, dqm, sosa, rdf } from '../vocab';

declare module '@openhps/core/dist/types/data/values/SensorValue' {
    export interface SensorValue extends RDFSerializable {}
}

createRDFSerializable(SensorValue, function (baseUri?) {
    const builder = RDFBuilder.create({
        url: this.uri || baseUri ? `${baseUri}${this.timestamp.toString()}` : undefined,
    })
        .addIri(rdf.type, sosa.Observation)
        .addDatetime(dct.created, new Date(this.timestamp))
        .addDatetime(dqm.timeOfAssessment, new Date(this.timestamp));
    return builder.build();
});
