/**
 * @author Vincent Tunri
 * @see {@link https://gitlab.com/vincenttunru/rdf-namespaces}
 */

import { Mirrors } from './types';
import { getTs } from './getTs';
import axios from 'axios';
import { DataFactory, NamedNode, Parser, Quad, Store } from 'n3';
import { RdfXmlParser } from "rdfxml-streaming-parser";
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';

function fetchLocalData(filePath: string): Quad[] {
    const localPath = path.normalize(filePath.replace("file://", ""));
    const file =  fs.readFileSync(localPath, { encoding: "utf-8" });
    let quads = [];
    if (filePath.toLowerCase().endsWith("ttl")) {
        const parser = new Parser({
            format: "text/turtle"
        });
        quads = parser.parse(file);
    }
    return quads;
}

async function fetchRemoteData(url: string, namespace: string): Promise<Quad[]> {
    const response = await axios.get(url, {
        headers: {
            'Accept': 'text/turtle;q=0.9, application/rdf+xml;q=0.8',
        },
        timeout: 60000,
        httpsAgent: new https.Agent({  
            rejectUnauthorized: false
        })
    });
    const file = response.data;
    let quads: Quad[] = [];
    const contentType = response.headers['content-type'] ?? '';
    if (contentType.includes("application/rdf+xml") || file.startsWith("<?xml version=")) {
        const parser = new RdfXmlParser({
            baseIRI: namespace
        });
        parser.on('data', (data: Quad) => {
            quads.push(data);
        });
        parser.on('error', (err) => {
            console.error("An error occured during RDF parsing", err);
        });
        parser.write(file);
        parser.end();
    } else {
        const mimetype = contentType.substring(0, contentType.indexOf(";"));
        const parser = new Parser({
            format: mimetype
        });
        quads = parser.parse(file);
    }
    return quads;
}

/**
 * @param namespace
 * @param options
 */
export async function generateNamespaceTs(
    prefix: string,
    namespace: string,
    options = {
        mirrors: {} as Mirrors,
    },
) {
    const entityTypes = {
        Property: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
        Class: 'http://www.w3.org/2000/01/rdf-schema#Class',
        Datatype: 'http://www.w3.org/2000/01/rdf-schema#Datatype',
        OwlClass: 'http://www.w3.org/2002/07/owl#Class',
        OwlObjectProperty: 'http://www.w3.org/2002/07/owl#ObjectProperty',
        OwlDatatypeProperty: 'http://www.w3.org/2002/07/owl#DatatypeProperty',
        HydraResource: 'http://www.w3.org/ns/hydra/core#Resource',
        HydraClass: 'http://www.w3.org/ns/hydra/core#Class',
        HydraLink: 'http://www.w3.org/ns/hydra/core#Link',
        HydraTemplatedLink: 'http://www.w3.org/ns/hydra/core#TemplatedLink',
        HydraVariableRepresentation: 'http://www.w3.org/ns/hydra/core#VariableRepresentation',
        OtherIndividual: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
        //XsdDatatype: 'http://www.w3.org/2001/XMLSchema'
    };

    const schemaLocation = options.mirrors[namespace] || namespace;
    const fetchFn = schemaLocation.startsWith("file://") ? fetchLocalData : fetchRemoteData;
    const quads: Quad[] = await fetchFn(schemaLocation, namespace);
    const store = new Store(quads);

    let entities: NamedNode[] = Object.values(entityTypes).reduce((entitiesSoFar, entityType) => {
        const entitiesOfThisType = store.getSubjects(null, DataFactory.namedNode(entityType), null);
        const newEntitiesOfThisType = entitiesOfThisType.filter((entityOfThisType) => {
            // Only include this entity if it is not present in the list yet:
            return entitiesSoFar.findIndex((entity) => entity.id === entityOfThisType.id) === -1;
        });
        return entitiesSoFar.concat(newEntitiesOfThisType);
    }, []);
    const individuals: NamedNode[] = store.getSubjects(DataFactory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), null, null) as NamedNode[];
    entities = entities.concat(individuals.filter((entityOfThisType) => {
        // Only include this entity if it is not present in the list yet:
        return entities.findIndex((entity) => entity.id === entityOfThisType.id) === -1;
    }));
    const typeAliases = Object.keys(entityTypes)
        .map((alias) => `type ${alias} = IriString; // eslint-disable-line`)
        .join('\n');
    const entityTs = entities
        .filter((entity: NamedNode) => {
            let entityName = entity.id.substring(namespace.length);
            return (
                // Only include names that are valid Javascript identifiers (i.e. alphanumeric characters,
                // underscores and dollar signs allowed, but shouldn't start with a digit)...
                /^[A-Za-z_\-$](\w|\$|\-)*$/.test(entityName) &&
                // ...and are actually in this namespace:
                entity.id.substring(0, namespace.length) === namespace
            );
        })
        .map((entity) => getTs(entity, store, namespace, entityTypes))
        .join('');
    const typescript = 'type IriString = `${\'http\' | \'https\'}://${string}`;\n' + typeAliases + '\n' + entityTs + 
    `\nexport const _BASE: IriString = '${namespace}';\nexport const _PREFIX: string = '${prefix}';`;
    return typescript;
}
