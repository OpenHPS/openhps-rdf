import { DataFactory, Quad_Object } from 'n3';
import { RDFSerializer } from './RDFSerializer';
import { Thing, IriString } from './types';

export class RDFBuilder {
    protected thing: Thing;

    private constructor(thing?: Thing) {
        this.thing = thing ?? {
            termType: 'BlankNode',
            value: DataFactory.blankNode().value,
            predicates: {},
        };
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
        return this;
    }

    build(): Thing {
        return this.thing;
    }
}
