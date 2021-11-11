import { DataServiceDriver, DataServiceOptions, FilterQuery, FindOptions, Constructor } from "@openhps/core";
import { Parser, DataFactory, Quad } from 'n3';
import { IriString, RDFSerializer, UrlString } from "../rdf";
import SparqlClient from 'sparql-http-client';
import { Generator as SparqlGenerator, SparqlQuery, SelectQuery } from 'sparqljs';

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
                password: this.options.password
            });
            resolve();
        }); 
    }

    findByUID(id: IriString): Promise<T> {
        return new Promise((resolve, reject) => {
            const generator = new SparqlGenerator({
                
            });
            const query: SparqlQuery = {
                type: 'update',
                prefixes: {},
                updates: [

                ]
            };
            generator.stringify(query);
                
            this.client.query.select("").then(stream => {
                stream.on('data', row => {
                    Object.entries(row).forEach(([key, value]) => {
                        // console.log(`${key}: ${value.value} (${value.termType})`)
                    });
                });
            });
        });
    }

    findOne(query?: FilterQuery<T>, options?: FindOptions): Promise<T> {
        return new Promise((resolve, reject) => {
            const generator = new SparqlGenerator();
            const query: SelectQuery = {
                type: 'query',
                prefixes: {},
                queryType: 'SELECT',
                variables: [],
                where: [],
                order: [],
                limit: options.limit || undefined
            };
            generator.stringify(query);
                
            this.client.query.select("").then(stream => {
                stream.on('data', row => {
                    Object.entries(row).forEach(([key, value]) => {
                        // console.log(`${key}: ${value.value} (${value.termType})`)
                    });
                });
            });
        });
    }

    findAll(query?: FilterQuery<T>, options?: FindOptions): Promise<T[]> {
        return new Promise((resolve, reject) => {

        });
    }

    count(query?: FilterQuery<T>): Promise<number> {
        return new Promise((resolve, reject) => {
            this.client.query.select("", {
                headers: this.options.headers,
                operation: this.options.operation
            }).then(val => {
                resolve(0);
            }).catch(reject);
        });
    }

    insert(id: IriString, object: T): Promise<T> {
        return new Promise((resolve, reject) => {
            const quads = RDFSerializer.serializeToQuads(object);
            const generator = new SparqlGenerator();
            const query: SparqlQuery = {
                type: 'update',
                prefixes: {},
                updates: [{
                    updateType: 'insert',
                    insert: [{
                        type: 'bgp',
                        triples: quads
                    }]
                }]
            };
            const queryString = generator.stringify(query);
            this.client.query.update(queryString, {
                headers: this.options.headers,
                operation: this.options.operation
            }).then(() => {
                resolve(object);
            }).catch(reject);
        });
    }

    delete(id: IriString): Promise<void> {
        return new Promise((resolve, reject) => {
            const generator = new SparqlGenerator({
                
            });
            const query: SparqlQuery = {
                type: 'update',
                prefixes: {},
                updates: [{
                    updateType: 'deletewhere',
                    delete: []
                }]
            };
            const queryString = generator.stringify(query);
            console.log(queryString);
            this.client.query.update(queryString, {
                headers: this.options.headers,
                operation: this.options.operation
            }).then(val => {
                resolve();
            }).catch(reject);
        });
    }

    deleteAll(query?: FilterQuery<T>): Promise<void> {
        return new Promise((resolve, reject) => {

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
    operation?: 'get' | 'postUrlencoded' | 'postDirect';
}
