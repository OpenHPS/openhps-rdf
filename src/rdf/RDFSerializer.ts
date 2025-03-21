import {
    DataSerializer,
    Serializable,
    Constructor,
    DataSerializerConfig,
    SerializableObjectOptions,
    ObjectMemberMetadata,
    DataSerializerUtils,
} from '@openhps/core';
import { ChangeLogType, InternalRDFSerializer } from './InternalRDFSerializer';
import { InternalRDFDeserializer } from './InternalRDFDeserializer';
import { IriString, Thing, Subject, RDFSerializerConfig, SubjectPredicates, SubjectObjects, xsd } from './types';
import {
    NamedNode,
    BlankNode,
    Store,
    Quad_Predicate,
    Quad_Subject,
    Quad_Object,
    Literal,
    DataFactory,
    Quad,
    Writer,
    Parser,
} from 'n3';
import type { WriterOptions as N3WriterOptions } from 'n3';
import { namespaces } from '../namespaces';
import * as jsonld from 'jsonld';
import { rdf } from '../vocab';
import { RDFIdentifierOptions } from '../decorators';
import { RdfXmlParser } from 'rdfxml-streaming-parser';
import { RDFChangeLog, createChangeLog } from './ChangeLog';
import { QueryEngine } from '../service/QueryEngine';
import { DocumentLoader } from './DocumentLoader';

export class RDFSerializer extends DataSerializer {
    protected static readonly primitiveTypes: Map<string, Constructor<any>> = new Map();
    protected static readonly knownRDFTypes: Map<IriString, string[]> = new Map();
    protected static engine: QueryEngine;
    protected static documentLoader: DocumentLoader;

    static {
        this.eventEmitter.on(
            'updateSerializableObject',
            <T>(_: Serializable<T>, options: SerializableObjectOptions<T>) => {
                if (options && options.rdf && options.rdf.type) {
                    const types = [...(Array.isArray(options.rdf.type) ? options.rdf.type : [options.rdf.type])];
                    options.rdf.predicates = options.rdf.predicates || {};
                    const typesIRIs = options.rdf.predicates[rdf.type] || [];
                    typesIRIs.push(
                        ...types.map((type) => {
                            return type as IriString;
                        }),
                    );
                    options.rdf.predicates[rdf.type] = typesIRIs;
                }
            },
        );
        this.eventEmitter.on('registerType', <T>(type: Serializable<T>) => {
            RDFSerializer.registerRDFType(type);
        });

        // Primitive types
        this.primitiveTypes.set(xsd.string, String);
        this.primitiveTypes.set(xsd.langString, String);
        this.primitiveTypes.set(xsd.boolean, Boolean);
        this.primitiveTypes.set(xsd.integer, Number);
        this.primitiveTypes.set(xsd.double, Number);
        this.primitiveTypes.set(xsd.decimal, Number);
        this.primitiveTypes.set(xsd.dateTime, Date);
        this.primitiveTypes.set(xsd.date, Date);
    }

    /**
     * Get the document loader
     * @returns {DocumentLoader} Document loader
     */
    static getDocumentLoader(): DocumentLoader {
        if (!this.documentLoader) {
            this.documentLoader = new DocumentLoader();
        }
        return this.documentLoader;
    }

    protected static options: DataSerializerConfig = {
        serializer: new InternalRDFSerializer(),
        deserializer: new InternalRDFDeserializer(),
    };

    static registerRDFType<T>(type: Serializable<T>, options?: MappedRDFTypeConverters<T>): void {
        // Map RDF types
        const meta = DataSerializerUtils.getOwnMetadata(type);
        if (!meta.options || !meta.options.rdf) {
            meta.options = meta.options || {};
            meta.options.rdf = {};
        }
        const rdfOptions = meta.options.rdf;
        if (options) {
            rdfOptions.serializer = options.serializer;
            rdfOptions.deserializer = options.deserializer;
        }
        if (rdfOptions.predicates) {
            Object.entries(rdfOptions.predicates)
                .filter(([k]) => k === rdf.type)
                .map(([, v]) => v.flat())
                .flat()
                .forEach((typeIri: IriString) => {
                    const results = this.knownRDFTypes.get(typeIri) ?? [];
                    if (!results.includes(type.name)) results.push(type.name);
                    this.knownRDFTypes.set(typeIri, results);
                });
        }
    }

    /**
     * Initialize the RDF serializer
     * @param module Module to initialize
     */
    static initialize(module: string): Promise<void> {
        return new Promise((resolve, reject) => {
            let promise: Promise<any> = Promise.resolve();
            switch (module) {
                case 'rf':
                    promise = import('../mapping/rf');
                    break;
                case 'geospatial':
                    promise = import('../mapping/geospatial');
                    break;
                case 'fingerprinting':
                    promise = import('../mapping/fingerprinting');
                    break;
                case 'video':
                    promise = import('../mapping/video');
                    break;
            }
            promise
                .then(() => {
                    resolve();
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    }

    static setQueryEngine(engine: QueryEngine): void {
        this.engine = engine;
        (this.options.deserializer as InternalRDFDeserializer).engine = engine;
    }

    /**
     * Serialize an object to an URI
     * @param {any} data Data to serialize to an URI
     * @param {string} baseUri Base URI
     * @returns {string} Resource URI
     */
    static serializeToUri<T>(data: T, baseUri?: IriString): IriString {
        const identifierMember = this.getUriMetadata(data.constructor);
        let uri: string = undefined;
        if (identifierMember) {
            const rdfOptions = identifierMember.options.rdf as RDFIdentifierOptions;
            uri = rdfOptions.serializer
                ? rdfOptions.serializer((data as any)[identifierMember.key] as string, data.constructor)
                : ((data as any)[identifierMember.key] as string);
        }
        uri = uri && !uri.startsWith('http') && baseUri ? baseUri + uri : DataFactory.blankNode(uri).value;
        return uri as IriString;
    }

    /**
     * Serialize data to JSON-LD
     * @param {any} data Data to serialize to an URI
     * @param {string} baseUri Base URI
     */
    static serializeToJSONLD<T>(data: T, baseUri?: IriString): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const quads = this.serializeToQuads(data, baseUri);
            jsonld
                .fromRDF(quads)
                .then((doc) => {
                    resolve(doc);
                })
                .catch(reject);
        });
    }

    static deserializeFromJSONLD<T>(subject: IriString, data: any | any[]): Promise<T> {
        return new Promise((resolve, reject) => {
            jsonld
                .toRDF(data, {
                    documentLoader: this.documentLoader.fetch.bind(this.documentLoader),
                })
                .then((quads) => {
                    const store = new Store(quads as Quad[]);
                    resolve(this.deserializeFromStore(subject, store));
                })
                .catch(reject);
        });
    }

    /**
     * Serialize data
     * @param {any} data Data to serialize
     * @param {RDFSerializerConfig} [config] RDF serializer configuration
     * @returns {Thing} Serialized data
     */
    static serialize<T>(data: T, config?: RDFSerializerConfig): Thing {
        return super.serialize(data, {
            rdf: {
                baseUri: config ? config.baseUri : undefined,
            },
            changelog: ChangeLogType.NONE,
            ...this.options,
        } as any);
    }

    /**
     * Serialize data to changelog
     * @param {any} data Data to serialize
     * @param {RDFSerializerConfig} [config] RDF serializer configuration
     * @returns {Thing} Serialized data
     */
    static serializeToChangeLog<T>(data: T, config?: RDFSerializerConfig): RDFChangeLog {
        const additions = super.serialize(data, {
            rdf: {
                baseUri: config ? config.baseUri : undefined,
            },
            ...this.options,
            blankNodeCounter: 1,
            changelog: ChangeLogType.ADDITIONS,
        } as any);
        const deletions = super.serialize(data, {
            rdf: {
                baseUri: config ? config.baseUri : undefined,
            },
            ...this.options,
            blankNodeCounter: 1,
            changelog: ChangeLogType.DELETIONS,
        } as any);
        const additionsQuads = this.thingToQuads(additions);
        const deletionsQuads = deletions ? this.thingToQuads(deletions) : [];
        // Remove the unchanged quads froom the deletions and additions
        const filteredAdditions = additionsQuads.filter(
            (addition) => !deletionsQuads.some((deletion) => deletion.equals(addition)),
        );
        const filteredDeletions = deletionsQuads.filter(
            (deletion) => !additionsQuads.some((addition) => addition.equals(deletion)),
        );
        return {
            additions: filteredAdditions,
            deletions: filteredDeletions,
        };
    }

    static deserializeFromString<T>(subject: IriString, input: string, contentType: string = 'text/turtle'): T {
        let quads: Quad[] = [];
        if (contentType.includes('application/rdf+xml') || input.startsWith('<?xml version=')) {
            const parser = new RdfXmlParser({
                baseIRI: subject,
            });
            parser.on('data', (data: Quad) => {
                quads.push(data);
            });
            parser.on('error', (err) => {
                throw new Error('An error occured during RDF parsing: ' + err);
            });
            parser.write(input);
            parser.end();
        } else {
            const mimetype = contentType.substring(0, contentType.indexOf(';'));
            const parser = new Parser({
                format: mimetype,
            });
            quads = parser.parse(input);
        }
        if (subject) {
            const subjectUri = new URL(subject);
            subjectUri.hash = '';
            const containerUri = new URL(subjectUri.href.slice(0, subjectUri.href.lastIndexOf('/') + 1));
            quads = quads.map((quad) => {
                let subject = quad.subject;
                let predicate = quad.predicate;
                let object = quad.object;
                if (subject.termType === 'NamedNode' && subject.value.startsWith('#')) {
                    subject = DataFactory.namedNode(new URL(subject.value, subjectUri).href);
                } else if (subject.termType === 'NamedNode' && !subject.value.startsWith('http')) {
                    subject = DataFactory.namedNode(new URL(subject.value, containerUri).href);
                }
                if (predicate.termType === 'NamedNode' && predicate.value.startsWith('#')) {
                    predicate = DataFactory.namedNode(new URL(predicate.value, subjectUri).href);
                } else if (subject.termType === 'NamedNode' && !subject.value.startsWith('http')) {
                    predicate = DataFactory.namedNode(new URL(predicate.value, containerUri).href);
                }
                if (object.termType === 'NamedNode' && object.value.startsWith('#')) {
                    object = DataFactory.namedNode(new URL(object.value, subjectUri).href);
                } else if (object.termType === 'NamedNode' && !object.value.startsWith('http')) {
                    object = DataFactory.namedNode(new URL(object.value, containerUri).href);
                }
                return DataFactory.quad(subject, predicate, object);
            });
        }
        const store = new Store(quads);
        return this.deserializeFromStore(
            subject ? DataFactory.namedNode(subject) : DataFactory.blankNode(quads[0].subject.value),
            store,
        );
    }

    /**
     * Deserialize data from a store
     * @param subject Subject to deserialize
     * @param store Store to deserialize from
     * @param {Serializable} [dataType] Optional data type to specify deserialization type
     * @returns
     */
    static deserializeFromStore<T>(
        subject: NamedNode | BlankNode | IriString,
        store: Store,
        dataType?: Serializable<any>,
    ): T {
        if (store.size === 0) {
            return undefined;
        }
        subject = subject ?? (store.getQuads(null, null, null, null)[0].subject as NamedNode | BlankNode);
        if (typeof subject === 'string') {
            subject = DataFactory.namedNode(subject);
        }
        const thing = this.quadsToThing(subject, store);
        return this.deserialize(thing, dataType);
    }

    static serializeToSubjects<T>(data: T, baseUri?: IriString): Subject[] {
        const quads: Quad[] = RDFSerializer.serializeToQuads(data, baseUri);
        const store = new Store(quads);
        const quadSubjects: Quad_Subject[] = store.getSubjects(null, null, null);
        /**
         * @param {Quad_Subject} quadSubject Quad subject
         * @returns {any} Predicates
         */
        function serializePredicates(quadSubject: Quad_Subject) {
            const quadPredicates: Quad_Predicate[] = store.getPredicates(quadSubject, null, null);
            return quadPredicates
                .map((quadPredicate) => {
                    const quadObjects: Quad_Object[] = store.getObjects(quadSubject, quadPredicate, null);
                    const literals: Record<string, string[]> = quadObjects
                        .filter((obj) => obj.termType === 'Literal')
                        .filter((obj: Literal) => obj.language === '')
                        .map((obj: Literal) => ({ [obj.datatype.value]: [obj.value] }))
                        .reduce((a, b) => ({ ...a, ...b }), {});
                    const langStrings: Record<string, string[]> = quadObjects
                        .filter((obj) => obj.termType === 'Literal')
                        .filter((obj: Literal) => obj.language !== '')
                        .map((obj: Literal) => ({ [obj.language]: [obj.value] }))
                        .reduce((a, b) => ({ ...a, ...b }), {});
                    const namedNodes: Array<string> = quadObjects
                        .filter((obj) => obj.termType === 'NamedNode')
                        .map((obj) => obj.value);
                    const blankNodes: Array<any | string> = quadObjects
                        .filter((obj) => obj.termType === 'BlankNode')
                        .map((obj: BlankNode) => serializePredicates(DataFactory.blankNode(obj.value)));
                    return {
                        [quadPredicate.value]: {
                            namedNodes,
                            blankNodes,
                            literals,
                            langStrings,
                        },
                    };
                })
                .reduce((a, b) => ({ ...a, ...b }), {});
        }
        const subjects: Subject[] = quadSubjects
            .filter((quadSubject) => quadSubject.termType === 'NamedNode')
            .map((quadSubject) => {
                return {
                    type: 'Subject',
                    url: quadSubject.value,
                    predicates: serializePredicates(quadSubject),
                };
            });
        return subjects;
    }

    /**
     * Serialize data to a store with changelog
     * @param data
     * @param baseUri
     * @returns
     */
    static serializeToStore<T>(data: T, baseUri?: IriString): Store & RDFChangeLog {
        const quads = this.serializeToQuads(data, baseUri);
        const store = createChangeLog(new Store([]));
        store.addQuads(quads);
        return store;
    }

    static serializeToQuads<T>(data: T, baseUri?: IriString): Quad[] {
        const thing =
            (data as any)['predicates'] !== undefined ? (data as unknown as Thing) : this.serialize(data, { baseUri });
        if (!thing) {
            return [];
        }
        return this.thingToQuads(thing);
    }

    static thingToQuads(thing: Thing): Quad[] {
        const subject =
            thing.termType === 'BlankNode' ? DataFactory.blankNode(thing.value) : DataFactory.namedNode(thing.value);
        return Object.keys(thing.predicates)
            .map((predicateIri) => {
                const predicate = DataFactory.namedNode(predicateIri);
                return thing.predicates[predicateIri].map((object) => {
                    if (!object) {
                        // Object is undefined
                        return [];
                    }
                    if (
                        (object as any)['predicates'] !== undefined &&
                        Object.values((object as any)['predicates']).length > 0
                    ) {
                        const quads = this.thingToQuads(object as Thing);
                        return [DataFactory.quad(subject, predicate, quads[0].subject), ...quads];
                    } else {
                        return [DataFactory.quad(subject, predicate, object as Quad_Object)];
                    }
                });
            })
            .flat()
            .flat();
    }

    /**
     * Stringify a thing to RDF graph construct
     * @param {Thing | Store} thing Thing to serialize
     * @param {WriterOptions} [options] Writer options
     * @returns {Promise<string>} Promise of a stringified graph
     */
    static async stringify(thing: Thing | Store | any, options: WriterOptions = {}): Promise<string> {
        return new Promise((resolve, reject) => {
            let store: Store;
            let quads: Quad[];

            if (thing instanceof Store) {
                store = thing;
                quads = store.getQuads(null, null, null, null);
            } else {
                quads = this.serializeToQuads(thing, options.baseUri);
                store = new Store(quads);
            }

            // Filter the prefixes to only include prefixes used
            const prefixes: Record<string, string> = {
                xsd: 'http://www.w3.org/2001/XMLSchema#',
                ...namespaces,
            };
            if (options.baseUri) {
                prefixes[''] = options.baseUri;
            }
            const ns = Object.keys(prefixes)
                .map((k) => {
                    return { [prefixes[k]]: k };
                })
                .reduce((a, b) => {
                    return { ...a, ...b };
                });
            const filteredPrefixes: Record<string, string> = {};
            quads.map((quad) => {
                const usedNamespacesInQuad = [
                    quad.subject.value,
                    quad.predicate.value,
                    quad.object.termType === 'NamedNode'
                        ? quad.object.value
                        : quad.object.termType === 'Literal'
                          ? quad.object.datatype.value
                          : '',
                ];
                usedNamespacesInQuad.map((namespace) => {
                    Object.keys(ns).forEach((n) => {
                        if (namespace && namespace.includes(n)) {
                            filteredPrefixes[(ns as any)[n]] = n;
                        }
                    });
                });
            });
            options.prefixes = {
                ...filteredPrefixes,
                ...options.prefixes,
            };
            const writer = new Writer(options);
            if (options.prettyPrint) {
                store.getSubjects(null, null, null).forEach((subject) => {
                    if (subject.termType === 'BlankNode') {
                        // Ignore blank nodes
                        return;
                    } else {
                        store.getPredicates(subject, null, null).forEach((predicate) => {
                            store.getObjects(subject, predicate, null).forEach((object) => {
                                if (object.termType === 'BlankNode') {
                                    writer.addQuad(subject, predicate, this.writeBlankNode(writer, object, store));
                                } else {
                                    writer.addQuad(subject, predicate, object);
                                }
                            });
                        });
                    }
                });
            } else {
                writer.addQuads(quads);
            }
            writer.end((err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    private static writeBlankNode(writer: Writer, object: Quad_Object, store: Store): BlankNode {
        const blankNodePredicates = store.getPredicates(object, null, null);
        return writer.blank(
            blankNodePredicates
                .map((predicate) => {
                    const blankNodeObjects = store.getObjects(object, predicate, null);
                    return blankNodeObjects.map((object) => {
                        if (object.termType === 'BlankNode') {
                            return {
                                predicate,
                                object: this.writeBlankNode(writer, object, store),
                            };
                        } else {
                            return {
                                predicate,
                                object,
                            };
                        }
                    });
                })
                .flat(),
        );
    }

    /**
     * Convert subjects to thing
     * @param subjects List of subjects
     * @param subject Main subject
     * @returns Thing
     */
    static subjectsToThing(subjects: Subject[], subject: IriString): Thing {
        const quads = this.subjectsToQuads(subjects);
        return this.quadsToThing(DataFactory.namedNode(subject), new Store(quads));
    }

    /**
     * Convert quads to thing
     * @param {NamedNode | BlankNode} subject Subject of quad
     * @param {Store} store Quad store
     * @returns {Thing} Thing from quads
     */
    static quadsToThing(subject: NamedNode | BlankNode, store: Store): Thing {
        const processedSubjects: string[] = [];
        /**
         *
         * @param subject
         */
        function innerQuadsToThing(subject: NamedNode | BlankNode): Thing {
            if (processedSubjects.includes(subject.value)) {
                return {
                    termType: subject.termType,
                    value: subject.value.replace(/^_:/, ''),
                    predicates: {},
                };
            }
            processedSubjects.push(subject.value);
            return {
                termType: subject.termType,
                value: subject.value.replace(/^_:/, ''),
                predicates: {
                    ...store
                        .getPredicates(subject, null, null)
                        .map((predicate) => {
                            return {
                                [predicate.value]: store.getObjects(subject, predicate, null).map((object) => {
                                    if (object.termType === 'BlankNode' || object.termType === 'NamedNode') {
                                        return innerQuadsToThing(object as any);
                                    } else {
                                        return object;
                                    }
                                }),
                            };
                        })
                        .reduce((a, b) => ({ ...a, ...b }), {}),
                },
            };
        }
        return innerQuadsToThing(subject);
    }

    /**
     * Convert subjects to quads
     * @param subjects List of subjects
     */
    static subjectsToQuads(subjects: Subject[]): Quad[] {
        const quads: Quad[] = [];
        /**
         *
         * @param subjectNode
         * @param predicates
         */
        function subjectPredicatesToQuads(subjectNode: Quad_Subject, predicates: SubjectPredicates): Quad[] {
            const quads: Quad[] = [];
            Object.keys(predicates).forEach((predicateIri) => {
                const predicate = DataFactory.namedNode(predicateIri);
                const objects = predicates[predicateIri] as SubjectObjects;
                // Literals
                if (objects.literals) {
                    Object.keys(objects.literals).forEach((dataType) => {
                        objects.literals[dataType].forEach((value) => {
                            quads.push(
                                DataFactory.quad(
                                    subjectNode,
                                    predicate,
                                    DataFactory.literal(value, DataFactory.namedNode(dataType)),
                                ),
                            );
                        });
                    });
                }
                // Language strings
                if (objects.langStrings) {
                    Object.keys(objects.langStrings).forEach((language) => {
                        objects.langStrings[language].forEach((value) => {
                            quads.push(DataFactory.quad(subjectNode, predicate, DataFactory.literal(value, language)));
                        });
                    });
                }
                // Named nodes
                if (objects.namedNodes) {
                    objects.namedNodes.forEach((namedNode) => {
                        quads.push(DataFactory.quad(subjectNode, predicate, DataFactory.namedNode(namedNode)));
                    });
                }
                // Blank nodes
                if (objects.blankNodes) {
                    objects.blankNodes.forEach((blankNode) => {
                        if (typeof blankNode === 'string') {
                            quads.push(
                                DataFactory.quad(
                                    subjectNode,
                                    predicate,
                                    DataFactory.blankNode(blankNode.replace(/^_:/, '')),
                                ),
                            );
                        } else {
                            const newBlankNode = DataFactory.blankNode();
                            quads.push(DataFactory.quad(subjectNode, predicate, newBlankNode));
                            quads.push(...subjectPredicatesToQuads(newBlankNode, blankNode));
                        }
                    });
                }
            });
            return quads;
        }
        subjects.forEach((subject) => {
            // Subject can be a named node or a blank node
            let subjectNode: NamedNode | BlankNode = undefined;
            if (subject.url.startsWith('_:')) {
                // Blank node
                subjectNode = DataFactory.blankNode(subject.url.replace(/^_:/, ''));
            } else {
                // Named node
                subjectNode = DataFactory.namedNode(subject.url);
            }
            const predicates = subject.predicates;
            quads.push(...subjectPredicatesToQuads(subjectNode, predicates));
        });
        return quads;
    }

    /**
     * Convert thing to subjects
     * @param thing Thing to convert
     * @param baseUri Base URI
     * @returns List of subjects
     */
    static thingToSubjects(thing: Thing, baseUri?: IriString): Subject[] {
        return this.serializeToSubjects(thing, baseUri);
    }

    static deserializeFromSubject<T>(subject: Subject & { url: IriString }): T {
        return this.deserializeFromSubjects(subject.url, [subject]);
    }

    static deserializeFromSubjects<T>(subject: IriString, subjects: Subject[]): T {
        const mainSubject = subjects.find((s) => s.url === subject);
        /**
         *
         * @param subjectQuad
         * @param subjectPredicates
         */
        function deserializeToQuads(subjectQuad: Quad_Subject, subjectPredicates: SubjectPredicates): Quad[] {
            const quads: Quad[] = [];
            Object.keys(subjectPredicates).forEach((key) => {
                const predicateQuad = DataFactory.namedNode(key);
                const predicates = subjectPredicates[key];
                // Literals
                if (predicates.literals) {
                    Object.keys(predicates.literals).forEach((dataType) => {
                        const value = predicates.literals[dataType];
                        const dataTypeQuad = DataFactory.namedNode(dataType);
                        quads.push(
                            DataFactory.quad(subjectQuad, predicateQuad, DataFactory.literal(value, dataTypeQuad)),
                        );
                    });
                }
                // Language strings
                if (predicates.langStrings) {
                    Object.keys(predicates.langStrings).forEach((language) => {
                        const value = predicates.langStrings[language];
                        quads.push(DataFactory.quad(subjectQuad, predicateQuad, DataFactory.literal(value, language)));
                    });
                }
                // Named nodes
                if (predicates.namedNodes) {
                    predicates.namedNodes.forEach((namedNode) => {
                        const otherSubject = subjects.find((s) => s.url === namedNode);
                        quads.push(DataFactory.quad(subjectQuad, predicateQuad, DataFactory.namedNode(namedNode)));
                        if (otherSubject) {
                            quads.push(
                                ...deserializeToQuads(DataFactory.namedNode(otherSubject.url), otherSubject.predicates),
                            );
                        }
                    });
                }
                // Blank nodes
                if (predicates.blankNodes) {
                    predicates.blankNodes.forEach((predicates) => {
                        const blankNode = DataFactory.blankNode();
                        quads.push(DataFactory.quad(subjectQuad, predicateQuad, blankNode));
                        quads.push(...deserializeToQuads(blankNode, predicates));
                    });
                }
            });
            return quads;
        }
        const quads = deserializeToQuads(DataFactory.namedNode(mainSubject.url), mainSubject.predicates);
        return this.deserializeFromStore(DataFactory.namedNode(subject), new Store(quads));
    }

    static deserialize<T>(serializedData: Thing | Literal, dataType?: Serializable<T>): T;
    static deserialize<T>(serializedData: any[], dataType?: Serializable<T>): T | T[];
    /**
     * Deserialize data
     * @param {any} serializedData Data to deserialze
     * @param {Serializable} dataType Optional data type to specify deserialization type
     * @returns {any} Deserialized object
     */
    static deserialize<T>(serializedData: any, dataType?: Serializable<T>): T | T[] {
        if (!serializedData) {
            return undefined; // Return undefined if no data is provided
        }
        // Serialize as JSON when not a literal and not a Thing
        if (!(serializedData instanceof Literal) && serializedData['predicates'] === undefined) {
            return super.deserialize(serializedData, dataType as Constructor<T>);
        }
        const deserializer = new InternalRDFDeserializer();
        let finalType = dataType ?? deserializer.rdfTypeResolver(serializedData, this.knownTypes, this.knownRDFTypes);
        if (finalType === Object) {
            return serializedData as unknown as T;
        } else if (finalType === undefined && serializedData instanceof Literal) {
            const dataTypeURI: IriString = serializedData.datatype.value as IriString;
            // First check if it is a known type
            finalType = this.knownRDFTypes.has(dataTypeURI)
                ? this.findTypeByName(this.knownRDFTypes.get(dataTypeURI)[0])
                : this.primitiveTypes.get(dataTypeURI);
        }

        // If no type is found, return undefined
        if (finalType === undefined) {
            return undefined;
        }

        return deserializer.convertSingleValue(
            serializedData,
            DataSerializerUtils.ensureTypeDescriptor(finalType),
            this.knownTypes,
            undefined,
            undefined,
            {
                rdf: {
                    knownTypes: this.knownRDFTypes,
                },
            },
        );
    }

    static getUriMetadata<T>(dataType: Serializable<T>): ObjectMemberMetadata {
        // Get metadata
        const metadata = DataSerializerUtils.getOwnMetadata(dataType);
        const rootMetadata = DataSerializerUtils.getRootMetadata(dataType);

        const options =
            metadata.options && metadata.options.rdf
                ? metadata.options.rdf
                : rootMetadata.options && rootMetadata.options.rdf
                  ? rootMetadata.options.rdf
                  : undefined;

        if (!options) {
            return undefined;
        }

        const identifierMember = Array.from(metadata.dataMembers.values()).filter((member) => {
            return (
                member &&
                member.options &&
                member.options.rdf &&
                (member.options.rdf as RDFIdentifierOptions).identifier
            );
        })[0];
        return identifierMember;
    }

    static normalizeUri<T>(dataType: Serializable<T>, identifier: any, baseUri: IriString): IriString {
        const identifierMember = this.getUriMetadata(dataType);
        let uri: string = undefined;
        if (identifierMember) {
            const rdfOptions = identifierMember.options.rdf as RDFIdentifierOptions;
            uri = rdfOptions.serializer ? rdfOptions.serializer(identifier, dataType) : identifier;
            uri = uri && !uri.startsWith('http') && baseUri ? baseUri + uri : DataFactory.blankNode(uri).value;
            return uri as IriString;
        } else {
            return baseUri;
        }
    }
}

export interface WriterOptions extends N3WriterOptions {
    baseUri?: IriString;
    /**
     * Pretty print the output. Merge blank nodes in the [] notation.
     * @default false
     */
    prettyPrint?: boolean;
}

export interface MappedRDFTypeConverters<T> {
    /**
     * Custom (partial) serializer for this object.
     */
    serializer?: (object: T, baseUri?: IriString) => Partial<Thing> | Quad_Object;
    /**
     * Custom (partial) deserializer for this object.
     */
    deserializer?: (thing: Thing, instance?: T) => T;
}
