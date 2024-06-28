import { DataFactory, Quad, Quad_Object, Quad_Subject } from 'n3';
import { RDFSerializer } from './RDFSerializer';
import { Thing, IriString } from './types';

export class RDFBuilder {
    protected thing: Thing;
    protected subject: Quad_Subject;
    protected additions: Quad[] = [];
    protected deletions: Quad[] = [];

    private constructor(thing?: Thing) {
        this.thing = thing ?? {
            termType: 'BlankNode',
            value: DataFactory.blankNode().value,
            predicates: {},
        };
        this.subject =
            this.thing.termType === 'BlankNode'
                ? DataFactory.blankNode(this.thing.value)
                : DataFactory.namedNode(this.thing.value);
    }

    static namedNode(uri: IriString): RDFBuilder {
        return new RDFBuilder({
            termType: 'NamedNode',
            value: uri,
            predicates: {},
        });
    }

    static blankNode(): RDFBuilder {
        return new RDFBuilder();
    }

    /**
     * Create a new RDF builder from a serialized thing
     * @param thing Thing
     * @returns
     */
    static fromSerialized(thing: Thing): RDFBuilder {
        return new RDFBuilder(thing);
    }

    add(predicate: IriString, object: Quad_Object | Thing | IriString | object): RDFBuilder;
    add(predicate: IriString, object: number | string, languageOrDatatype?: string | IriString): RDFBuilder;
    add(
        predicate: IriString,
        object: Quad_Object | Thing | number | string | IriString | object,
        languageOrDatatype?: string | IriString,
    ): RDFBuilder {
        let obj = object;
        if (obj === undefined) {
            return this;
        } else if (typeof object === 'string') {
            if (object.startsWith('http') && languageOrDatatype === undefined) {
                // Named node
                obj = DataFactory.namedNode(object);
            } else {
                // Text literal
                obj = DataFactory.literal(
                    object,
                    languageOrDatatype
                        ? languageOrDatatype.startsWith('http')
                            ? DataFactory.namedNode(languageOrDatatype)
                            : languageOrDatatype
                        : undefined,
                );
            }
        } else if (typeof object === 'number') {
            obj = DataFactory.literal(
                object,
                languageOrDatatype ? DataFactory.namedNode(languageOrDatatype) : undefined,
            );
        } else if (
            obj['termType'] === undefined &&
            typeof object === 'object' &&
            RDFSerializer.findTypeByName(object.constructor.name)
        ) {
            obj = RDFSerializer.serialize(object);
        }
        const data = this.thing.predicates[predicate] ?? [];
        data.push(obj as Thing);
        this.thing.predicates[predicate] = data;
        this.additions.push(DataFactory.quad(this.subject, DataFactory.namedNode(predicate), obj as Quad_Object));
        return this;
    }

    delete(predicate: IriString, object: Quad_Object | Thing | IriString | object): RDFBuilder;
    delete(predicate: IriString, object: number | string, languageOrDatatype?: string | IriString): RDFBuilder;
    delete(
        predicate: IriString,
        object: Quad_Object | Thing | number | string | IriString | object,
        languageOrDatatype?: string | IriString,
    ): RDFBuilder {
        let obj = object;
        if (obj === undefined) {
            return this;
        } else if (typeof object === 'string') {
            if (object.startsWith('http') && languageOrDatatype === undefined) {
                // Named node
                obj = DataFactory.namedNode(object);
            } else {
                // Text literal
                obj = DataFactory.literal(
                    object,
                    languageOrDatatype
                        ? languageOrDatatype.startsWith('http')
                            ? DataFactory.namedNode(languageOrDatatype)
                            : languageOrDatatype
                        : undefined,
                );
            }
        } else if (typeof object === 'number') {
            obj = DataFactory.literal(
                object,
                languageOrDatatype ? DataFactory.namedNode(languageOrDatatype) : undefined,
            );
        } else if (
            obj['termType'] === undefined &&
            typeof object === 'object' &&
            RDFSerializer.findTypeByName(object.constructor.name)
        ) {
            obj = RDFSerializer.serialize(object);
        }
        const data = this.thing.predicates[predicate];
        if (data) {
            const index = data.findIndex((d) => d.value === (obj as Thing).value);
            if (index === -1) {
                return this;
            }
            data.slice(index, 1);
            this.deletions.push(DataFactory.quad(this.subject, DataFactory.namedNode(predicate), obj as Quad_Object));
            if (data.length > 0) {
                this.thing.predicates[predicate] = data;
            } else {
                delete this.thing.predicates;
            }
        }
        return this;
    }

    build(changelog?: boolean): Thing & { additions?: Quad[]; deletions?: Quad[] } {
        if (!changelog) {
            return this.thing;
        }
        return {
            ...this.thing,
            additions: this.additions,
            deletions: this.deletions,
        };
    }
}
