import {
    DataServiceDriver,
    DataServiceOptions,
    FilterQuery,
    FindOptions,
    Constructor,
    MemoryQueryEvaluator,
} from '@openhps/core';
import { DataFactory, Store } from 'n3';
import { IriString, RDFSerializer, UrlString } from '../rdf';
import SparqlClient from 'sparql-http-client';
import { Generator as SparqlGenerator, SparqlQuery, ConstructQuery } from 'sparqljs';
import { SPARQLGenerator } from './SPARQLGenerator';
import { rdf } from '../vocab';

export class SPARQLDataDriver<T> extends DataServiceDriver<IriString, T> {
    protected options: SPARQLDataDriverOptions;
    protected client: SparqlClient;

    constructor(dataType?: Constructor<T>, options?: SPARQLDataDriverOptions) {
        super(dataType, options);

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
            const subject = id.startsWith('_:')
                ? DataFactory.blankNode(id.replace('_:', ''))
                : DataFactory.namedNode(id);
            const constructQuery = `
            CONSTRUCT {
                <${subject.id}> ?prop ?val.
                ?child ?childProp ?childPropVal.
                ?someSubj ?incomingChildProp ?child.
            } WHERE {
                <${subject.id}> ?prop ?val;
                  ((<http://example.org#overrides>|!<http://example.org#overrides>)+) ?child.
                ?child ?childProp ?childPropVal.
                ?someSubj ?incomingChildProp ?child.
            }
            `;
            this.client.query
                .construct(constructQuery)
                .then((stream) => {
                    const store: Store = new Store();
                    stream.on('data', (row) => {
                        store.addQuad(row);
                    });
                    stream.on('end', () => {
                        resolve(RDFSerializer.deserializeFromStore(subject, store));
                    });
                })
                .catch(reject);
        });
    }

    findOne(query?: FilterQuery<T>, options?: FindOptions): Promise<T> {
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

    findAll(query?: FilterQuery<T>, options: FindOptions = {}): Promise<T[]> {
        return new Promise((resolve, reject) => {
            const generator = new SparqlGenerator();
            const queryString = generator.stringify(this.createQuery(query));
            this.client.query
                .construct(queryString)
                .then((stream) => {
                    const store: Store = new Store();
                    stream.on('data', (row) => {
                        store.addQuad(row);
                    });
                    stream.on('end', () => {
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
                                            const res1 = MemoryQueryEvaluator.getValueFromPath(
                                                s[1] > 0 ? a : b,
                                                s[0],
                                            )[1];
                                            const res2 = MemoryQueryEvaluator.getValueFromPath(
                                                s[1] > 0 ? b : a,
                                                s[0],
                                            )[1];
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
                    });
                })
                .catch(reject);
        });
    }

    count(query?: FilterQuery<T>): Promise<number> {
        return new Promise((resolve, reject) => {
            this.client.query
                .select('', {
                    headers: this.options.headers,
                    operation: this.options.operation,
                })
                .then((val) => {
                    resolve(0);
                })
                .catch(reject);
        });
    }

    insert(_: IriString, object: T): Promise<T> {
        return new Promise((resolve, reject) => {
            const quads = RDFSerializer.serializeToQuads(object, this.options.baseUri);
            const generator = new SparqlGenerator();
            const query: SparqlQuery = {
                type: 'update',
                prefixes: {},
                updates: [
                    {
                        updateType: 'insert',
                        insert: [
                            {
                                type: 'bgp',
                                triples: quads,
                            },
                        ],
                    },
                ],
            };
            const queryString = generator.stringify(query);
            this.client.query
                .update(queryString, {
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
            const generator = new SparqlGenerator();
            const query: SparqlQuery = {
                type: 'update',
                prefixes: {},
                updates: [
                    {
                        updateType: 'deletewhere',
                        delete: [
                            {
                                type: 'bgp',
                                triples: [
                                    {
                                        subject: DataFactory.variable('s'),
                                        predicate: DataFactory.variable('p'),
                                        object: DataFactory.variable('o'),
                                    },
                                ],
                            },
                        ],
                        where: [],
                    },
                ],
            };
            const queryString = generator.stringify(query);
            this.client.query
                .update(queryString, {
                    headers: this.options.headers,
                    operation: this.options.operation,
                })
                .then((val) => {
                    resolve();
                })
                .catch(reject);
        });
    }

    deleteAll(query?: FilterQuery<T>): Promise<void> {
        return new Promise((resolve, reject) => {
            const generator = new SparqlGenerator();
            const sparqlQuery: SparqlQuery = {
                type: 'update',
                prefixes: {},
                updates: [
                    {
                        updateType: 'deletewhere',
                        delete: [
                            {
                                type: 'bgp',
                                triples: [
                                    {
                                        subject: DataFactory.variable('s'),
                                        predicate: DataFactory.variable('p'),
                                        object: DataFactory.variable('o'),
                                    },
                                ],
                            },
                        ],
                        where: new SPARQLGenerator(this.dataType).createQuery(query),
                    },
                ],
            };
            const queryString = generator.stringify(sparqlQuery);
            this.client.query
                .update(queryString, {
                    headers: this.options.headers,
                    operation: this.options.operation,
                })
                .then(() => {
                    resolve();
                })
                .catch(reject);
        });
    }

    protected createQuery(query?: FilterQuery): ConstructQuery {
        const generator = new SPARQLGenerator(this.dataType);
        const patterns = generator.createQuery(query);
        // Variables
        const subjectVar = DataFactory.variable('subject');
        const propVar = DataFactory.variable('prop');
        const valVar = DataFactory.variable('val');
        const childVar = DataFactory.variable('child');
        const childPropVar = DataFactory.variable('childProp');
        const childPropValVar = DataFactory.variable('childPropVal');
        const someSubjVar = DataFactory.variable('someSubj');
        const incomingChildProp = DataFactory.variable('incomingChildProp');
        const dummyPredicate = DataFactory.namedNode('http://openhps.org/terms#overrides');

        const constructQuery: ConstructQuery = {
            queryType: 'CONSTRUCT',
            template: [
                {
                    subject: subjectVar,
                    predicate: propVar,
                    object: valVar,
                },
                {
                    subject: childVar,
                    predicate: childPropVar,
                    object: childPropValVar,
                },
                {
                    subject: someSubjVar,
                    predicate: incomingChildProp,
                    object: childVar,
                },
            ],
            where: [
                {
                    type: 'bgp',
                    triples: [
                        {
                            subject: subjectVar,
                            predicate: propVar,
                            object: valVar,
                        },
                        {
                            subject: subjectVar,
                            predicate: {
                                type: 'path',
                                pathType: '+',
                                items: [
                                    {
                                        type: 'path',
                                        pathType: '|',
                                        items: [
                                            dummyPredicate,
                                            {
                                                type: 'path',
                                                pathType: '!',
                                                items: [dummyPredicate],
                                            },
                                        ],
                                    },
                                ],
                            },
                            object: childVar,
                        },
                        {
                            subject: childVar,
                            predicate: childPropVar,
                            object: childPropValVar,
                        },
                        {
                            subject: someSubjVar,
                            predicate: incomingChildProp,
                            object: childVar,
                        },
                    ],
                },
                {
                    type: 'group',
                    patterns,
                },
            ],
            type: 'query',
            prefixes: {},
        };
        return constructQuery;
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
