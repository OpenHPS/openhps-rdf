import { FilterQuery, FindOptions, QuerySelector } from '@openhps/core';
import { SelectQuery } from 'sparqljs';

export class SPARQLGenerator {

    private static isRegexQuery(query: any): boolean {
        return Object.prototype.toString.call(query) === '[object RegExp]';
    }

    static evaluateComponent<T>(object: T, key: string, query: any): boolean {
        let result = true;
        const value = (object as any)[key];
        if (key.startsWith('$')) {
            result = result && SPARQLGenerator.evaluateOp(key, object, query);
        } else if (key.includes('.')) {
            result = result && SPARQLGenerator.evaluatePath(object, key, query);
        } else if (SPARQLGenerator.isRegexQuery(query)) {
            result = result && (value as string).match(query) ? true : false;
        } else if (typeof query === 'object') {
            result = result && SPARQLGenerator.evaluateSelector(value, query);
        } else {
            result = result && value === query;
        }
        return result;
    }

    static generateQuery<T>(object: T, query: FilterQuery<T>, options: FindOptions): SelectQuery {
        const sparql: SelectQuery = {
            type: 'query',
            prefixes: {},
            queryType: 'SELECT',
            variables: [],
            where: [],
            order: options.sort.map(([key, direction]) => {
                return {
                    expression: undefined,
                    descending: direction === -1
                };
            }),
            limit: options.limit || undefined
        };
        if (query) {
            for (const key of Object.keys(query)) {
                SPARQLGenerator.evaluateComponent(object, key, query[key]);
            }
        }
        return sparql;
    }

    static getValueFromPath<T>(object: T, path: string): [any, any, string] {
        // https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arays-by-string-path
        let o: any = object;
        path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        path = path.replace(/^\./, ''); // strip a leading dot
        const a = path.split('.');
        for (let i = 0, n = a.length; i < n; ++i) {
            const k = a[i];
            if (!o) {
                return undefined;
            } else if (k in o) {
                if (i < n - 1) {
                    o = o[k];
                } else {
                    return [o, o[k], k];
                }
            } else {
                return undefined;
            }
        }
    }

    protected static evaluatePath<T>(object: T, path: string, query: FilterQuery<T>): boolean {
        const data = SPARQLGenerator.getValueFromPath(object, path);
        if (!data) {
            return false;
        }
        return SPARQLGenerator.evaluateComponent(data[0], data[2], query);
    }

    protected static evaluateSelector<T>(value: any, subquery: QuerySelector<T>): boolean {
        let result = true;
        for (const selector of Object.keys(subquery)) {
            result = result && SPARQLGenerator.evaluateComparisonSelector(selector, value, subquery);
            result = result && SPARQLGenerator.evaluateArraySelector(selector, value, subquery);
        }
        return result;
    }

    protected static evaluateComparisonSelector<T>(selector: string, value: any, subquery: QuerySelector<T>): boolean {
        let result = true;
        switch (selector) {
            case '$gt':
                result = result && value > subquery[selector];
                break;
            case '$gte':
                result = result && value >= subquery[selector];
                break;
            case '$lt':
                result = result && value < subquery[selector];
                break;
            case '$lte':
                result = result && value <= subquery[selector];
                break;
            case '$eq':
                result = result && value === subquery[selector];
                break;
        }
        return result;
    }

    protected static evaluateArraySelector<T>(selector: string, value: any, subquery: QuerySelector<T>): boolean {
        switch (selector) {
            case '$in':

                break;
            case '$nin':

                break;
            case '$elemMatch':

                break;
        }
        return;
    }

    protected static evaluateOp<T>(key: string, object: T, subquery: Array<FilterQuery<T>>): boolean {
        let result;
        switch (key) {
            case '$and':
                
                break;
            case '$or':
                
                break;
        }
        return result;
    }
}
