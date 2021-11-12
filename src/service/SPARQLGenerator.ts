import { DataSerializer, FilterQuery, ObjectMemberMetadata, Serializable } from '@openhps/core';
import {
    BgpPattern,
    FilterPattern,
    GroupPattern,
    Pattern,
    UnionPattern,
    Generator,
    SparqlQuery,
    ConstructQuery,
} from 'sparqljs';
import { DataFactory } from 'n3';
import { RDFIdentifierOptions, RDFLiteralOptions, RDFObjectOptions } from '../decorators';
import { IriString, RDFSerializer } from '../rdf';

export class SPARQLGenerator<T> {
    protected dataType: Serializable<T>;
    protected baseUri: IriString;

    constructor(dataType: Serializable<T>, baseUri: IriString) {
        this.dataType = dataType;
        this.baseUri = baseUri;
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
                    where: this.createQuery({
                        [identifierMember.key]: id,
                    }),
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
        const someSubjVar = DataFactory.variable('someSubj');
        const incomingChildProp = DataFactory.variable('incomingChildProp');
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
            prefixes: {
                '': this.baseUri,
            },
        };
        return constructQuery;
    }

    protected isRegexQuery(query: any): boolean {
        return Object.prototype.toString.call(query) === '[object RegExp]';
    }

    protected generatePath(path: string, query: any): Pattern[] {
        return this.createQuery(
            path
                .split('.')
                .reverse()
                .reduce((res, key) => ({ [key]: res }), query),
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

    protected generateComponent(key: string, query: any, dataType: Serializable<any>): Pattern[] {
        const patterns: Pattern[] = [];
        if (key.startsWith('$')) {
            patterns.push(...this.generateOp(key, query));
        } else if (key.includes('.')) {
            patterns.push(...this.generatePath(key, query));
        } else {
            const rootMetadata = DataSerializer.getRootMetadata(dataType);
            let member: ObjectMemberMetadata;
            rootMetadata.knownTypes.forEach((knownType) => {
                const metadata = DataSerializer.getMetadata(knownType);
                if (metadata && metadata.dataMembers.has(key)) {
                    member = metadata.dataMembers.get(key);
                    return;
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
                        {
                            type: 'filter',
                            expression: {
                                type: 'operation',
                                operator: '=',
                                args: [
                                    DataFactory.variable('subject'),
                                    DataFactory.namedNode(this.baseUri + rdf.serializer(query, dataType)),
                                ],
                            },
                        } as FilterPattern,
                    ],
                };
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
                                    subject: DataFactory.variable('subject'),
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
                const blankNode = DataFactory.blankNode();
                const pattern: Pattern = {
                    type: 'bgp',
                    triples: [
                        {
                            subject: DataFactory.variable('subject'),
                            predicate: DataFactory.namedNode(predicate),
                            object: blankNode,
                        },
                        ...this.createQuery(query, member.type().ctor)
                            .map((p: BgpPattern) => p.triples)
                            .flat()
                            .map((triple) => {
                                triple.subject = blankNode;
                                return triple;
                            }),
                    ],
                };
                patterns.push(pattern);
            } else {
                const rdfLiteralOptions = rdf as RDFLiteralOptions;
                const pattern: Pattern = {
                    type: 'bgp',
                    triples: [
                        {
                            subject: DataFactory.variable('subject'),
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

    createQuery<T>(query: FilterQuery<T>, dataType: Serializable<any> = this.dataType): Pattern[] {
        const patterns: Pattern[] = [];
        if (query) {
            for (const key of Object.keys(query)) {
                patterns.push(...this.generateComponent(key, query[key], dataType));
            }
        }
        return patterns;
    }
}
