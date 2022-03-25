import {
    DataServiceOptions,
    FilterQuery,
    FindOptions,
    Constructor,
    MemoryQueryEvaluator,
    DataServiceDriver,
} from '@openhps/core';
import { DataFactory, Store } from 'n3';
import { IriString, RDFSerializer } from '../rdf';
import { rdf } from '../vocab';
import { SPARQLGenerator } from './SPARQLGenerator';

export abstract class SPARQLDriverBase<T> extends DataServiceDriver<IriString, T> {
    protected options: SPARQLDriverOptions;
    protected generator: SPARQLGenerator<T>;

    constructor(dataType?: Constructor<T>, options?: SPARQLDriverOptions) {
        super(dataType, options);
        this.generator = new SPARQLGenerator(this.dataType, this.options.baseUri);
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

    protected abstract findAllSerialized(query?: FilterQuery<T>): Promise<Store>;

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

    abstract insert(_: IriString, object: T): Promise<T>;

    abstract delete(id: IriString): Promise<void>;

    abstract deleteAll(query?: FilterQuery<T>): Promise<void>;
}

export interface SPARQLDriverOptions extends DataServiceOptions {
    baseUri?: IriString;
}
