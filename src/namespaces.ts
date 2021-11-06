export type Namespaces = { [alias: string]: string };

export default {
    geo: 'http://www.w3.org/2003/01/geo/wgs84_pos#',
    schema: 'http://schema.org/',
    rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
    vcard: 'http://www.w3.org/2006/vcard/ns#',
    owl: 'http://www.w3.org/2002/07/owl#',
    time: 'http://www.w3.org/2006/time#',
    dcterms: 'http://purl.org/dc/terms/',
    dcmi: 'http://purl.org/dc/terms/',
    dqm: 'http://purl.org/dqm-vocabulary/v1/dqm#',
    foaf: 'http://xmlns.com/foaf/0.1/',
    m3lite: 'http://purl.org/iot/vocab/m3-lite#',
    /**
     * Semantic Sensor Network Ontology
     *
     * @see {@link https://www.w3.org/TR/vocab-ssn/}
     */
    sosa: 'http://www.w3.org/ns/sosa/',
    /**
     * Library for Quantity Kinds and Units: schema, based on QUDV model
     *
     * @see {@link https://www.w3.org/2005/Incubator/ssn/ssnx/qu/qu}
     */
    qu: 'http://purl.oclc.org/NET/ssnx/qu/qu#',
    openhps: 'http://openhps.org/terms#',
} as Namespaces;
