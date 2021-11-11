import { DataSerializer, FilterQuery, ObjectMemberMetadata, Serializable } from '@openhps/core';
import { BgpPattern, FilterPattern, GroupPattern, Pattern, UnionPattern } from 'sparqljs';
import { DataFactory } from 'n3';
import { RDFLiteralOptions, RDFObjectOptions } from '../decorators';

export class SPARQLGenerator<T> {
    protected dataType: Serializable<T>;

    constructor(dataType: Serializable<T>) {
        this.dataType = dataType;
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
