import { FilterQuery, Constructor } from '@openhps/core';
import { Store } from 'n3';
import { IriString, UrlString } from '../rdf';
import SparqlClient from 'sparql-http-client';
import { SPARQLDriverBase, SPARQLDriverOptions } from './SPARQLDriverBase';

export class SPARQLDataDriver<T> extends SPARQLDriverBase<T> {
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

export interface SPARQLDataDriverOptions extends SPARQLDriverOptions {
    endpointUrl: UrlString;
    storeUrl?: UrlString;
    updateUrl?: UrlString;
    headers?: HeadersInit;
    user?: string;
    password?: string;
    operation?: 'get' | 'postUrlencoded' | 'postDirect';
}
