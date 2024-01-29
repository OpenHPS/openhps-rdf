import { QueryEngine } from './QueryEngine';
import {
    DataServiceOptions,
    FilterQuery,
    FindOptions,
    Constructor,
    MemoryQueryEvaluator,
    DataServiceDriver,
    DataSerializerUtils,
} from '@openhps/core';
import { DataFactory, Quad, Store } from 'n3';
import { IriString, RDFSerializer } from '../rdf';
import { rdf } from '../vocab';
import { SPARQLGenerator } from './SPARQLGenerator';
import type { QueryStringContext, IQueryEngine, BindingsStream, Bindings } from '@comunica/types';
import type { ActorInitQueryBase } from '@comunica/actor-init-query';

export class SPARQLDataDriver<T> extends DataServiceDriver<IriString, T> {
    protected generator: SPARQLGenerator<T>;
    protected options: SPARQLDriverOptions;
    engine: QueryEngine;

    constructor(dataType?: Constructor<T>, options?: SPARQLDriverOptions) {
        super(dataType, options);
        this.generator = new SPARQLGenerator(this.dataType, this.options.baseUri);
        if (this.options.engine !== undefined) {
            this.engine = new QueryEngine(this.options.engine);
        }

        this.once('build', this._onBuild.bind(this));
    }

    private _onBuild(): void {
        if (this.engine === undefined) {
            throw new Error(`No comunica engine was defined for the SPARQLDataDriver!`);
        }
    }

    invalidateCache(url?: IriString): void {
        this.engine.invalidateHttpCache(url);
    }

    queryBindings(query: string, options?: Partial<QueryStringContext>): Promise<Bindings[]> {
        return new Promise((resolve, reject) => {
            this.engine
                .queryBindings(query, {
                    ...this.options,
                    ...options,
                })
                .then((stream: BindingsStream) => {
                    const bindings: Bindings[] = [];
                    stream.on('data', (binding: Bindings) => {
                        bindings.push(binding);
                    });
                    stream.on('end', () => {
                        resolve(bindings);
                    });
                })
                .catch(reject);
        });
    }

    queryVoid(query: string, options?: Partial<QueryStringContext>): Promise<void> {
        return new Promise((resolve, reject) => {
            this.engine
                .queryVoid(query, {
                    ...this.options,
                    ...options,
                })
                .then(resolve)
                .catch(reject);
        });
    }

    queryQuads(query: string, options?: Partial<QueryStringContext>): Promise<Store> {
        return new Promise((resolve, reject) => {
            this.engine
                .queryQuads(query, {
                    ...this.options,
                    ...options,
                })
                .then((stream) => {
                    const store: Store = new Store();
                    stream.on('data', (row: Quad) => {
                        store.addQuad(row);
                    });
                    stream.on('end', () => {
                        resolve(store);
                    });
                })
                .catch(reject);
        });
    }

    protected findAllSerialized(query?: FilterQuery<T>, context?: Partial<QueryStringContext>): Promise<Store> {
        const sparqlQuery = this.generator.createFindAll(query);
        if (sparqlQuery === undefined) {
            throw new Error(`Unable to generate SPARQL query for ${this.dataType.name}`);
        }
        return this.queryQuads(sparqlQuery, context);
    }

    findAll(query?: FilterQuery<T>, options: FindOptions = {}, context?: Partial<QueryStringContext>): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.findAllSerialized(query, context)
                .then((store) => {
                    if (store.size === 0) {
                        return resolve([]);
                    }
                    const subjects = store
                        .getSubjects(DataFactory.namedNode(rdf.type), null, null)
                        .filter((subject) => subject.termType === 'NamedNode');
                    let data: T[] = subjects
                        .map((subject) => RDFSerializer.deserializeFromStore(subject as any, store))
                        .filter((data) => data.constructor.name === this.dataType.name) as T[];
                    if (options.sort) {
                        data = data
                            .sort((a, b) =>
                                options.sort
                                    .map((s) => {
                                        const res1 = MemoryQueryEvaluator.getValueFromPath(s[1] > 0 ? a : b, s[0])[1];
                                        const res2 = MemoryQueryEvaluator.getValueFromPath(s[1] > 0 ? b : a, s[0])[1];
                                        if (typeof res1 === 'number') {
                                            return res1 - res2;
                                        } else if (typeof res1 === 'string') {
                                            return res1.localeCompare(res2);
                                        } else {
                                            return 0;
                                        }
                                    })
                                    .reduce((a, b) => a + b),
                            )
                            .slice(0, options.limit);
                    }
                    resolve(data);
                })
                .catch(reject);
        });
    }

    count(query?: FilterQuery<T>, context?: Partial<QueryStringContext>): Promise<number> {
        return new Promise((resolve, reject) => {
            this.findAllSerialized(query, context)
                .then((store) => {
                    if (store.size === 0) {
                        return resolve(0);
                    }
                    // Retrieve the subject type that we are counting
                    const metadata = DataSerializerUtils.getMetadata(this.dataType);
                    const rdfTypes =
                        metadata && metadata.options && metadata.options.rdf && metadata.options.rdf.predicates
                            ? metadata.options.rdf.predicates[rdf.type]
                            : [];
                    const subjects = store
                        .getSubjects(
                            DataFactory.namedNode(rdf.type),
                            rdfTypes.length > 0 ? DataFactory.namedNode(rdfTypes[0]) : null,
                            null,
                        )
                        .filter((subject) => subject.termType === 'NamedNode');
                    resolve(subjects.length);
                })
                .catch(reject);
        });
    }

    insert(_: IriString, object: T, context?: Partial<QueryStringContext>): Promise<T> {
        return new Promise((resolve, reject) => {
            const insertQuery = this.generator.createInsert(object);
            if (insertQuery === undefined) {
                throw new Error(`Unable to generate SPARQL query for ${this.dataType.name}`);
            }
            this.queryVoid(insertQuery, context)
                .then(() => {
                    resolve(object);
                })
                .catch(reject);
        });
    }

    delete(id: IriString, context?: Partial<QueryStringContext>): Promise<void> {
        return new Promise((resolve, reject) => {
            const deleteQuery = this.generator.createDelete(id);
            if (deleteQuery === undefined) {
                throw new Error(`Unable to generate SPARQL query for ${this.dataType.name}`);
            }
            this.queryVoid(deleteQuery, context).then(resolve).catch(reject);
        });
    }

    deleteAll(query?: FilterQuery<T>, context?: Partial<QueryStringContext>): Promise<void> {
        return new Promise((resolve, reject) => {
            this.queryVoid(this.generator.createDeleteAll(query), context).then(resolve).catch(reject);
        });
    }

    findByUID(id: IriString, context?: Partial<QueryStringContext>): Promise<T> {
        return new Promise((resolve, reject) => {
            const identifierMember = RDFSerializer.getUriMetadata(this.dataType);
            this.findOne(
                {
                    [identifierMember.key]: id,
                } as any,
                {},
                context,
            )
                .then(resolve)
                .catch(reject);
        });
    }

    findOne(query?: FilterQuery<T>, options: FindOptions = {}, context?: Partial<QueryStringContext>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.findAll(
                query,
                {
                    limit: 1,
                    sort: options.sort,
                },
                context,
            )
                .then((results) => {
                    resolve(results[0]);
                })
                .catch(reject);
        });
    }
}

export interface SPARQLDriverOptions extends DataServiceOptions, QueryStringContext {
    baseUri?: IriString;
    httpAuth?: `${string}:${string}`;
    /**
     * Comunica query engine
     */
    engine?: ActorInitQueryBase;
}

export type { QueryStringContext, IQueryEngine, BindingsStream, Bindings };
