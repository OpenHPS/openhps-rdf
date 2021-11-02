import { AbsolutePosition, GeographicalPosition } from '@openhps/core';
import { createRDFSerializable, RDFBuilder, RDFSerializable } from '../rdf';
import { geo, schema, rdf } from '../vocab';

declare module '@openhps/core/dist/types/data/position/GeographicalPosition' {
    export interface GeographicalPosition extends RDFSerializable {}
}

createRDFSerializable(GeographicalPosition, function (baseUri?) {
    const superClass: AbsolutePosition = Object.getPrototypeOf(Object.getPrototypeOf(this));
    const builder = RDFBuilder.create(superClass.toThing.call(this, baseUri))
        .addIri(rdf.type, geo.Point)
        /* http://www.w3.org/2003/01/geo/wgs84_pos# */
        .addDecimal(geo.long, this.longitude)
        .addDecimal(geo.lat, this.latitude)
        .addDecimal(geo.alt, this.altitude)
        /* http://schema.org/ */
        .addDecimal(schema.longitude, this.longitude)
        .addDecimal(schema.latitude, this.latitude)
        .addDecimal(schema.elevation, this.altitude);
    return builder.build();
});
