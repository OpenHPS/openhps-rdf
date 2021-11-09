import { DataServiceDriver, FilterQuery, FindOptions } from "@openhps/core";
import { Parser, DataFactory } from 'n3';

export class RDFDataDriver<I, T> extends DataServiceDriver<I, T> {
    findByUID(id: I): Promise<T> {
        return new Promise((resolve, reject) => {

        });
    }

    findOne(query?: FilterQuery<T>, options?: FindOptions): Promise<T> {
        return new Promise((resolve, reject) => {

        });
    }

    findAll(query?: FilterQuery<T>, options?: FindOptions): Promise<T[]> {
        return new Promise((resolve, reject) => {

        });
    }

    count(query?: FilterQuery<T>): Promise<number> {
        return new Promise((resolve, reject) => {

        });
    }

    insert(id: I, object: T): Promise<T> {
        return new Promise((resolve, reject) => {

        });
    }

    delete(id: I): Promise<void> {
        return new Promise((resolve, reject) => {

        });
    }

    deleteAll(query?: FilterQuery<T>): Promise<void> {
        return new Promise((resolve, reject) => {

        });
    }
}
