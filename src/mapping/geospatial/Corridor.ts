import { SerializableObject } from '@openhps/core';
import { Corridor } from '@openhps/geospatial';

/**
 * `seas:Corridor` is not defined by the SEAS Building Ontology that
 * `https://w3id.org/seas/` currently serves, so the generated `seas` vocabulary has no
 * such constant. The IRI is written out directly to keep the emitted RDF byte-identical
 * to what earlier releases produced, rather than silently retyping corridors as
 * something the ontology does define.
 */
SerializableObject({
    rdf: {
        type: ['https://w3id.org/seas/Corridor'],
    },
})(Corridor);
