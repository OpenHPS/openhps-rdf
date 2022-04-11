import { SPARQLDriverBase, SPARQLDriverOptions } from './SPARQLDriverBase';
import { QueryEngine } from '@comunica/query-sparql-rdfjs';
import { Constructor, FilterQuery } from '@openhps/core';
import { Quad, Store } from 'n3';
import { IriString } from '../rdf/types';

export class SPARQLStoreDriver<T> extends SPARQLDriverBase<T> {
    protected options: SPARQLStoreDriverOptions;
    protected client: QueryEngine;

    constructor(dataType?: Constructor<T>, options?: SPARQLStoreDriverOptions) {
        super(dataType, options);
        this.once('build', this._onBuild.bind(this));
    }

    private _onBuild(): Promise<void> {
        return new Promise((resolve) => {
            this.client = new QueryEngine();
            resolve();
        });
    }

    protected query(query: string): Promise<Store> {
        return new Promise((resolve, reject) => {
            this.client
                .queryQuads(query, {
                    sources: [this.options.store],
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
        return this.query(this.generator.createFindAll(query));
    }

    insert(_: IriString, object: T): Promise<T> {
        return new Promise((resolve, reject) => {
            this.client
                .queryVoid(this.generator.createInsert(object), {
                    sources: [this.options.store],
                })
                .then(() => {
                    resolve(object);
                })
                .catch(reject);
        });
    }

    delete(id: IriString): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client
                .queryVoid(this.generator.createDelete(id), {
                    sources: [this.options.store],
                })
                .then(resolve)
                .catch(reject);
        });
    }

    deleteAll(query?: FilterQuery<T>): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client
                .queryVoid(this.generator.createDeleteAll(query), {
                    sources: [this.options.store],
                })
                .then(resolve)
                .catch(reject);
        });
    }
}

export interface SPARQLStoreDriverOptions extends SPARQLDriverOptions {
    store: Store;
}
