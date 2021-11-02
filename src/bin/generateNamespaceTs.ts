/**
 * @author Vincent Tunri
 * @see {@link https://gitlab.com/vincenttunru/rdf-namespaces}
 */

import { fetchDocument, TripleSubject, TripleDocument } from 'tripledoc';
import { getTs } from './getTs';

export type Mirrors = { [namespace: string]: string };
/**
 * @param namespace
 * @param options
 */
export async function generateNamespaceTs(
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
    };

    const schemaLocation = options.mirrors[namespace] || namespace;
    const schemaDoc = await fetchWithRetries(schemaLocation);

    const entities = Object.values(entityTypes).reduce<TripleSubject[]>((entitiesSoFar, entityType) => {
        const entitiesOfThisType = schemaDoc.getSubjectsOfType(entityType);
        const newEntitiesOfThisType = entitiesOfThisType.filter((entityOfThisType) => {
            // Only include this entity if it is not present in the list yet:
            return entitiesSoFar.findIndex((entity) => entity.asNodeRef() === entityOfThisType.asNodeRef()) === -1;
        });

        return entitiesSoFar.concat(newEntitiesOfThisType);
    }, []);
    const typeAliases = Object.keys(entityTypes)
        .map((alias) => `type ${alias} = string;`)
        .join('\n');
    const entityTs = entities
        .filter((entity) => {
            const entityName = entity.asNodeRef().substring(namespace.length);
            return (
                // Only include names that are valid Javascript identifiers (i.e. alphanumeric characters,
                // underscores and dollar signs allowed, but shouldn't start with a digit)...
                /^[A-Za-z_$](\w|\$)*$/.test(entityName) &&
                // ...and are actually in this namespace:
                entity.asNodeRef().substring(0, namespace.length) === namespace
            );
        })
        .map((entity) => getTs(entity, namespace, entityTypes))
        .join('');
    const typescript = typeAliases + '\n' + entityTs;
    return typescript;
}

const fetchWithRetries: typeof fetchDocument = async (url) => {
    let fetchedDoc: TripleDocument | undefined = undefined;
    let error = undefined;
    const maxTries = 5;
    for (let tries = 0; tries < maxTries && typeof fetchedDoc === 'undefined'; tries++) {
        try {
            fetchedDoc = await fetchDocument(url);
        } catch (e) {
            console.error(`Fetching ${url} failed (attempt ${tries}).`);
            error = e;
            await timeoutPromise(5000);
        }
    }
    if (typeof fetchedDoc === 'undefined') {
        console.error(`Fetching ${url} failed ${maxTries} times; no longer retrying.`);
        throw error;
    }

    return fetchedDoc;
};

/**
 * @param ms
 */
async function timeoutPromise(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
