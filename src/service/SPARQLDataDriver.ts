import { QueryEngine } from '@comunica/query-sparql';
import {
    DataServiceOptions,
    FilterQuery,
    FindOptions,
    Constructor,
    MemoryQueryEvaluator,
    DataServiceDriver,
} from '@openhps/core';
import { DataFactory, Quad, Store, Term } from 'n3';
import { IriString, RDFSerializer } from '../rdf';
import { rdf } from '../vocab';
import { SPARQLGenerator } from './SPARQLGenerator';
import type { QueryStringContext, IQueryEngine } from '@comunica/types';

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

    queryBindings(query: string, options: QueryStringContext = this.options): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.engine
                .queryBindings(query, options)
                .then((stream) => {
                    const bindings: any[] = [];
                    stream.on('data', (binding: any) => {
                        bindings.push(binding);
                    });
                    stream.on('end', () => {
                        resolve(bindings);
                    });
                })
                .catch(reject);
        });
    }

    queryVoid(query: string, options: QueryStringContext = this.options): Promise<void> {
        return new Promise((resolve, reject) => {
            this.engine.queryVoid(query, options).then(resolve).catch(reject);
        });
    }

    queryQuads(query: string, options: QueryStringContext = this.options): Promise<Store> {
        return new Promise((resolve, reject) => {
            this.engine
                .queryQuads(query, options)
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
                    const subjects = store
                        .getSubjects(DataFactory.namedNode(rdf.type), null, null)
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
