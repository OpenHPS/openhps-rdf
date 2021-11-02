/**
 * @author Vincent Tunri
 * @see {@link https://gitlab.com/vincenttunru/rdf-namespaces}
 */

import { generateFiles } from './generateFiles';
import { Mirrors } from './generateNamespaceTs';
import namespacesToGenerate from '../namespaces';

const mirrors: Mirrors = {
    'http://schema.org/': 'https://schema.org/version/latest/schemaorg-all-http.ttl',
    'http://purl.org/dc/terms/':
        'https://www.dublincore.org/specifications/dublin-core/dcmi-terms/dublin_core_terms.nt',
    'http://purl.org/dqm-vocabulary/v1/dqm#': 'http://semwebquality.org/dqm-vocabulary/v1/dqm.owl',
    'http://www.ontology-of-units-of-measure.org/resource/om-2-ucum':
        'https://raw.githubusercontent.com/HajoRijgersberg/OM/master/om-2-ucum.ttl',
    'http://purl.org/iot/vocab/m3-lite#': 'http://smart-ics.ee.surrey.ac.uk/ontology/m3-lite.owl#',
    'http://openhps.org/terms#': 'https://cdn.jsdelivr.net/gh/OpenHPS/openhps-rdf@master/ontology/v1/openhps.ttl',
    'http://purl.oclc.org/NET/ssnx/qu/qu#': 'https://www.w3.org/2005/Incubator/ssn/ssnx/qu/qu.owl'
};

generateFiles(namespacesToGenerate, { mirrors });
