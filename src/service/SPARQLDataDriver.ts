import {
    DataServiceOptions,
    FilterQuery,
    FindOptions,
    Constructor,
    MemoryQueryEvaluator,
    DataServiceDriver,
} from '@openhps/core';
import { DataFactory, Store } from 'n3';
import { IriString, RDFSerializer, UrlString } from '../rdf';
import SparqlClient from 'sparql-http-client';
import { rdf } from '../vocab';
import { SPARQLGenerator } from './SPARQLGenerator';

export class SPARQLDataDriver<T> extends DataServiceDriver<IriString, T> {
    protected options: SPARQLDataDriverOptions;
    protected client: SparqlClient;
    protected generator: SPARQLGenerator<T>;

    constructor(dataType?: Constructor<T>, options?: SPARQLDataDriverOptions) {
        super(dataType, options);
        this.generator = new SPARQLGenerator(this.dataType, this.options.baseUri);
        this.once('build', this._onBuild.bind(this));
    }

    private _onBuild(): Promise<void> {
        return new Promise((resolve) => {
            this.client = new SparqlClient({
                endpointUrl: this.options.endpointUrl,
                storeUrl: this.options.storeUrl,
                updateUrl: this.options.updateUrl,
                user: this.options.user,
                password: this.options.password,
            });
            resolve();
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

    protected findAllSerialized(query?: FilterQuery<T>): Promise<Store> {
        return new Promise((resolve, reject) => {
            this.client.query
                .construct(this.generator.createFindAll(query))
                .then((stream) => {
                    const store: Store = new Store();
                    stream.on('data', (row) => {
                        store.addQuad(row);
                    });
                    stream.on('end', () => {
                        resolve(store);
                    });
                })
                .catch(reject);
        });
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
                    let data: T[] = subjects.map((subject) =>
                        RDFSerializer.deserializeFromStore(subject as any, store),
                    );
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
            this.client.query
                .update(this.generator.createInsert(object), {
                    headers: this.options.headers,
                    operation: this.options.operation,
                })
                .then(() => {
                    resolve(object);
                })
                .catch(reject);
        });
    }

    delete(id: IriString): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.query
                .update(this.generator.createDelete(id), {
                    headers: this.options.headers,
                    operation: this.options.operation,
                })
                .then(resolve)
                .catch(reject);
        });
    }

    deleteAll(query?: FilterQuery<T>): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.query
                .update(this.generator.createDeleteAll(query), {
                    headers: this.options.headers,
                    operation: this.options.operation,
                })
                .then(resolve)
                .catch(reject);
        });
    }
}

export interface SPARQLDataDriverOptions extends DataServiceOptions {
    endpointUrl: UrlString;
    storeUrl?: UrlString;
    updateUrl?: UrlString;
    headers?: HeadersInit;
    user?: string;
    password?: string;
    baseUri?: IriString;
    operation?: 'get' | 'postUrlencoded' | 'postDirect';
}
