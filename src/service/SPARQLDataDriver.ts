import { QueryEngine } from '@comunica/query-sparql';
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

export class SPARQLDataDriver<T> extends DataServiceDriver<IriString, T> {
    protected generator: SPARQLGenerator<T>;
    protected options: SPARQLDriverOptions;

    constructor(dataType?: Constructor<T>, options?: SPARQLDriverOptions) {
        super(dataType, options);
        this.generator = new SPARQLGenerator(this.dataType, this.options.baseUri);
        this.options.engine = this.options.engine ?? new QueryEngine();
    }

    get engine(): IQueryEngine {
        return this.options.engine;
    }

    queryBindings(query: string, options?: Partial<QueryStringContext>): Promise<Bindings[]> {
        return new Promise((resolve, reject) => {
            this.engine
                .queryBindings(query, {
                    ...options,
                    ...this.options,
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
                    ...options,
                    ...this.options,
                })
                .then(resolve)
                .catch(reject);
        });
    }

    queryQuads(query: string, options?: Partial<QueryStringContext>): Promise<Store> {
        return new Promise((resolve, reject) => {
            this.engine
                .queryQuads(query, {
                    ...options,
                    ...this.options,
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

    protected findAllSerialized(query?: FilterQuery<T>): Promise<Store> {
        return this.queryQuads(this.generator.createFindAll(query));
    }

    findAll(query?: FilterQuery<T>, options: FindOptions = {}): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.findAllSerialized(query)
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

    count(query?: FilterQuery<T>): Promise<number> {
        return new Promise((resolve, reject) => {
            this.findAllSerialized(query)
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

    insert(_: IriString, object: T): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queryVoid(this.generator.createInsert(object))
                .then(() => {
                    resolve(object);
                })
                .catch(reject);
        });
    }

    delete(id: IriString): Promise<void> {
        return new Promise((resolve, reject) => {
            this.queryVoid(this.generator.createDelete(id)).then(resolve).catch(reject);
        });
    }

    deleteAll(query?: FilterQuery<T>): Promise<void> {
        return new Promise((resolve, reject) => {
            this.queryVoid(this.generator.createDeleteAll(query)).then(resolve).catch(reject);
        });
    }

    findByUID(id: IriString): Promise<T> {
        return new Promise((resolve, reject) => {
            const identifierMember = RDFSerializer.getUriMetadata(this.dataType);
            this.findOne({
                [identifierMember.key]: id,
            } as any)
                .then(resolve)
                .catch(reject);
        });
    }

    findOne(query?: FilterQuery<T>, options: FindOptions = {}): Promise<T> {
        return new Promise((resolve, reject) => {
            this.findAll(query, {
                limit: 1,
                sort: options.sort,
            })
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
     *
     * @default @comunica/query-sparql QueryEngine
     */
    engine?: IQueryEngine;
}

export type { QueryStringContext, IQueryEngine, BindingsStream, Bindings };
