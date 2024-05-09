import { Mirrors, Namespaces } from './bin/types';

const namespaces: Namespaces = {
    /**
     * W3C Geo
     */
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
    /**
     * Quantity Kinds, Dimensions and Data Types
     * @see {@link https://qudt.org}
     */
    qudt: 'http://qudt.org/schema/qudt/',
    unit: 'http://qudt.org/vocab/unit/',
    quantitykind: 'http://qudt.org/vocab/quantitykind/',
    /**
     * Semantic Sensor Network Ontology
     * @see {@link https://www.w3.org/TR/vocab-ssn/}
     */
    sosa: 'http://www.w3.org/ns/sosa/',
    ssn: 'http://www.w3.org/ns/ssn/',
    ssns: 'http://www.w3.org/ns/ssn/systems/',
    // ssnx: 'http://purl.oclc.org/NET/ssnx/ssn#',
    poso: 'http://purl.org/poso/',
    posoc: 'http://purl.org/poso/common/',
    /**
     * OGC GeoSparql 1.1
     * @see {@link https://github.com/opengeospatial/ogc-geosparql/tree/master/1.1}
     */
    ogc: 'http://www.opengis.net/ont/geosparql#',
    hardware: 'http://w3id.org/devops-infra/hardware#',
    seas: 'https://w3id.org/seas/',
    //indoorgml: 'http://www.opengis.net/indoorgml/1.0/core',
    m3lite: 'http://purl.org/iot/vocab/m3-lite#',
    sh: 'http://www.w3.org/ns/shacl#',
    tree: 'https://w3id.org/tree#',
    ldes: 'https://w3id.org/ldes#',
    ldp: 'http://www.w3.org/ns/ldp#'
};

const mirrors: Mirrors = {
    'http://www.w3.org/ns/shacl#': 'https://www.w3.org/ns/shacl.ttl',
    'http://www.opengis.net/ont/geosparql#':
        'https://raw.githubusercontent.com/opengeospatial/ogc-geosparql/master/vocabularies/geo.ttl',
    //'http://www.opengis.net/ont/geosparql#': 'https://opengeospatial.github.io/ogc-geosparql/geosparql11/geo.ttl',
    'http://schema.org/': 'https://schema.org/version/latest/schemaorg-all-http.ttl',
    'http://purl.org/dc/terms/':
        'https://www.dublincore.org/specifications/dublin-core/dcmi-terms/dublin_core_terms.nt',
    'http://purl.org/dqm-vocabulary/v1/dqm#': 'http://semwebquality.org/dqm-vocabulary/v1/dqm.owl',
    'http://xmlns.com/foaf/0.1/': 'http://xmlns.com/foaf/0.1/index.rdf',
    'http://w3id.org/devops-infra/hardware#': 'https://oeg-upm.github.io/devops-infra/ontology/hardware/ontology.ttl',
    'http://www.opengis.net/indoorgml/1.0/core': 'https://schemas.opengis.net/indoorgml/1.0/indoorgmlcore.xsd',
    'https://w3id.org/seas/': 'https://w3id.org/seas/BuildingOntology-1.0.rdf',
};

export { namespaces, mirrors };
