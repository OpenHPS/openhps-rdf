import {
    ArrayTypeDescriptor,
    DataSerializerUtils,
    FilterQuery,
    MapTypeDescriptor,
    ObjectMemberMetadata,
    QuerySelector,
    Serializable,
} from '@openhps/core';
import { FilterPattern, GroupPattern, Pattern, UnionPattern, Generator, SparqlQuery, ConstructQuery } from 'sparqljs';
import { DataFactory, Quad_Subject } from 'n3';
import { RDFIdentifierOptions, RDFLiteralOptions, RDFObjectOptions } from '../decorators';
import { IriString, RDFSerializer } from '../rdf';

export class SPARQLGenerator<T> {
    protected dataType: Serializable<T>;
    protected baseUri: IriString;
    private _counter = 0;

    constructor(dataType: Serializable<T>, baseUri: IriString) {
        this.dataType = dataType;
        this.baseUri = baseUri;
    }

    protected get next(): number {
        return this._counter++;
    }

    createInsert(object: T): string {
        const quads = RDFSerializer.serializeToQuads(object, this.baseUri);
        const generator = new Generator();
        const query: SparqlQuery = {
            type: 'update',
            prefixes: {
                '': this.baseUri,
            },
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
        return generator.stringify(query);
    }

    createDelete(id: IriString): string {
        const generator = new Generator();
        const identifierMember = RDFSerializer.getUriMetadata(this.dataType);
        const query: SparqlQuery = {
            type: 'update',
            prefixes: {
                '': this.baseUri,
            },
            updates: [
                {
                    updateType: 'insertdelete',
                    insert: [],
                    delete: [
                        {
                            type: 'bgp',
                            triples: [
                                {
                                    subject: DataFactory.variable('subject'),
                                    predicate: DataFactory.variable('predicate'),
                                    object: DataFactory.variable('object'),
                                },
                            ],
                        },
                    ],
                    where: [
                        {
                            type: 'group',
                            patterns: [
                                {
                                    type: 'bgp',
                                    triples: [
                                        {
                                            subject: DataFactory.variable('subject'),
                                            predicate: DataFactory.variable('predicate'),
                                            object: DataFactory.variable('object'),
                                        },
                                    ],
                                },
                                ...this.createQuery({
                                    [identifierMember.key]: id,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
        return generator.stringify(query);
    }

    createDeleteAll(query: FilterQuery<T>): string {
        const generator = new Generator();
        const sparqlQuery: SparqlQuery = {
            type: 'update',
            prefixes: {
                '': this.baseUri,
            },
            updates: [
                {
                    updateType: 'insertdelete',
                    insert: [],
                    delete: [
                        {
                            type: 'bgp',
                            triples: [
                                {
                                    subject: DataFactory.variable('subject'),
                                    predicate: DataFactory.variable('predicate'),
                                    object: DataFactory.variable('object'),
                                },
                            ],
                        },
                    ],
                    where: [
                        {
                            type: 'bgp',
                            triples: [
                                {
                                    subject: DataFactory.variable('subject'),
                                    predicate: DataFactory.variable('predicate'),
                                    object: DataFactory.variable('object'),
                                },
                            ],
                        },
                        ...this.createQuery(query),
                    ],
                },
            ],
        };
        return generator.stringify(sparqlQuery);
    }

    createFindAll(query: FilterQuery<T>): string {
        const generator = new Generator();
        return generator.stringify(this.createConstruct(query));
    }

    protected createConstruct(query: FilterQuery): ConstructQuery {
        const patterns = this.createQuery(query);
        // Variables
        const subjectVar = DataFactory.variable('subject');
        const propVar = DataFactory.variable('prop');
        const valVar = DataFactory.variable('val');
        const childVar = DataFactory.variable('child');
        const childPropVar = DataFactory.variable('childProp');
        const childPropValVar = DataFactory.variable('childPropVal');
        const dummyPredicate = DataFactory.namedNode('http://example.org#overrides');

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
                    ],
                },
                ...patterns,
            ],
            type: 'query',
            prefixes: {
                '': this.baseUri,
            },
        };
        return constructQuery;
    }

    protected isRegexQuery(query: any): boolean {
        return Object.prototype.toString.call(query) === '[object RegExp]';
    }

    protected generatePath(path: string, query: any, dataType: Serializable<any>): Pattern[] {
        return this.createQuery(
            path
                .split('.')
                .reverse()
                .reduce((res, key) => ({ [key]: res }), query),
            dataType,
        );
    }

    protected generateOp(key: string, query: Array<FilterQuery>): Pattern[] {
        const patterns: Pattern[] = [];
        switch (key) {
            case '$and':
                patterns.push(
                    ...query.map(
                        (q) =>
                            ({
                                type: 'group',
                                patterns: this.createQuery(q),
                            } as GroupPattern),
                    ),
                );
                break;
            case '$or':
                patterns.push({
                    type: 'union',
                    patterns: query.map((q) => this.createQuery(q)).flat(),
                } as UnionPattern);
                break;
        }
        return patterns;
    }

    protected generateComponent(
        key: string,
        query: any,
        dataType: Serializable<any>,
        subject: Quad_Subject = DataFactory.variable('subject'),
    ): Pattern[] {
        const patterns: Pattern[] = [];
        if (key.startsWith('$')) {
            patterns.push(...this.generateOp(key, query));
        } else if (key.includes('.')) {
            patterns.push(...this.generatePath(key, query, dataType));
        } else {
            const rootMetadata = DataSerializerUtils.getRootMetadata(dataType);

            let member: ObjectMemberMetadata;
            rootMetadata.knownTypes.forEach((knownType) => {
                if (!member) {
                    const metadata = DataSerializerUtils.getMetadata(knownType);
                    member = Array.from(metadata.dataMembers.values()).filter((member) => member.key === key)[0];
                    if (member) {
                        return;
                    }
                }
            });

            const rootMember = rootMetadata.dataMembers.get(key);
            const memberOptions =
                member.options && member.options.rdf
                    ? member
                    : rootMember && rootMember.options && rootMember.options.rdf
                    ? rootMember
                    : undefined;

            if (!memberOptions && memberOptions.options.rdf) {
                return;
            }

            if (memberOptions.options.rdf.identifier) {
                const rdf: RDFIdentifierOptions = memberOptions.options.rdf;
                const pattern: Pattern = {
                    type: 'filter',
                    expression: {
                        type: 'operation',
                        operator: '=',
                        args: [subject, DataFactory.namedNode(this.baseUri + rdf.serializer(query, dataType))],
                    },
                } as FilterPattern;
                patterns.push(pattern);
                return patterns;
            }
            const rdf: RDFObjectOptions = memberOptions.options.rdf as RDFObjectOptions;
            const predicate = Array.isArray(rdf.predicate) ? rdf.predicate[0] : rdf.predicate;

            if (this.isRegexQuery(query)) {
                const regexp = query.toString();
                patterns.push({
                    type: 'group',
                    patterns: [
                        {
                            type: 'bgp',
                            triples: [
                                {
                                    subject,
                                    predicate: DataFactory.namedNode(predicate),
                                    object: DataFactory.variable('object'),
                                },
                            ],
                        },
                        {
                            type: 'filter',
                            expression: {
                                type: 'operation',
                                operator: 'regex',
                                args: [
                                    DataFactory.variable('object'),
                                    DataFactory.literal(
                                        regexp.substring(regexp.indexOf('/') + 1, regexp.lastIndexOf('/')),
                                    ),
                                    DataFactory.literal('i'),
                                ],
                            },
                        } as FilterPattern,
                    ],
                });
            } else if (typeof query === 'object') {
                const selectorPatterns = this.generateSelector(query, predicate, dataType, member, subject);
                if (selectorPatterns.length > 0) {
                    patterns.push(...selectorPatterns);
                } else {
                    const object = DataFactory.variable(`o${this.next}`);
                    const pattern: GroupPattern = {
                        type: 'group',
                        patterns: [
                            {
                                type: 'bgp',
                                triples: [
                                    {
                                        subject,
                                        predicate: DataFactory.namedNode(predicate),
                                        object,
                                    },
                                ],
                            },
                        ],
                    };
                    pattern.patterns.push(
                        ...this.createQuery(query, member.type().ctor, object)
                            .map((x) => (x.type === 'group' ? x.patterns : [x]))
                            .flat(),
                    );
                    patterns.push(pattern);
                }
            } else {
                const rdfLiteralOptions = rdf as RDFLiteralOptions;
                const pattern: Pattern = {
                    type: 'bgp',
                    triples: [
                        {
                            subject,
                            predicate: DataFactory.namedNode(predicate),
                            object: DataFactory.literal(
                                query,
                                rdfLiteralOptions.language
                                    ? rdfLiteralOptions.language
                                    : rdfLiteralOptions.datatype
                                    ? DataFactory.namedNode(rdfLiteralOptions.datatype)
                                    : undefined,
                            ),
                        },
                    ],
                };
                patterns.push(pattern);
            }
        }
        return patterns;
    }

    protected generateSelector<T>(
        subquery: QuerySelector<T>,
        predicate: IriString,
        dataType: Serializable<T>,
        member: ObjectMemberMetadata,
        subject: Quad_Subject,
    ): Pattern[] {
        const patterns: Pattern[] = [];
        for (const selector of Object.keys(subquery)) {
            patterns.push(...this.generateComparisonSelector(selector, subquery, predicate, dataType, subject));
            patterns.push(...this.generateArraySelector(selector, subquery, predicate, dataType, member, subject));
        }
        return patterns;
    }

    protected generateComparisonSelector<T>(
        selector: string,
        subquery: QuerySelector<T>,
        predicate: IriString,
        dataType: Serializable<any>,
        subject: Quad_Subject,
    ): Pattern[] {
        const patterns: Pattern[] = [];
        let operator = undefined;
        switch (selector) {
            case '$gt':
                operator = '>';
                break;
            case '$gte':
                operator = '>=';
                break;
            case '$lt':
                operator = '<';
                break;
            case '$lte':
                operator = '<=';
                break;
            case '$eq':
                operator = '=';
                break;
        }

        if (operator) {
            const object = DataFactory.variable(`o${this.next}`);
            patterns.push({
                type: 'bgp',
                triples: [
                    {
                        subject,
                        predicate: DataFactory.namedNode(predicate),
                        object,
                    },
                ],
            });
            patterns.push({
                type: 'filter',
                expression: {
                    type: 'operation',
                    operator,
                    args: [object, DataFactory.literal((subquery as any)[selector])],
                },
            } as FilterPattern);
        }
        return patterns;
    }

    protected generateArraySelector<T>(
        selector: string,
        subquery: QuerySelector<T>,
        predicate: IriString,
        dataType: Serializable<any>,
        member: ObjectMemberMetadata,
        subject: Quad_Subject,
    ): Pattern[] {
        const patterns: Pattern[] = [];
        const objectType =
            member.type().ctor === Map
                ? (member.type() as MapTypeDescriptor).valueType
                : (member.type() as ArrayTypeDescriptor).elementType;
        const object = DataFactory.variable(`o${this.next}`);

        switch (selector) {
            case '$in':
                // result = result && Array.from(value).includes(subquery[selector]);
                break;
            case '$nin':
                // result = result && !Array.from(value).includes(subquery[selector]);
                break;
            case '$elemMatch':
                patterns.push({
                    type: 'group',
                    patterns: [
                        {
                            type: 'bgp',
                            triples: [
                                {
                                    subject,
                                    predicate: DataFactory.namedNode(predicate),
                                    object,
                                },
                            ],
                        },
                        ...this.createQuery(subquery[selector], objectType.ctor, object)
                            .map((x) => (x.type === 'group' ? x.patterns : [x]))
                            .flat(),
                    ],
                });
                break;
        }
        return patterns;
    }

    createQuery<T>(
        query: FilterQuery<T>,
        dataType: Serializable<any> = this.dataType,
        subject?: Quad_Subject,
    ): Pattern[] {
        const patterns: Pattern[] = [];
        if (query) {
            for (const key of Object.keys(query)) {
                patterns.push(...this.generateComponent(key, query[key], dataType, subject));
            }
        }
        return patterns;
    }
}
