import {
    ThingBuilder,
    addUrl,
    addIri,
    addDecimal,
    setDatetime,
    setBoolean,
    setIri,
    setUrl,
    addTerm,
    addLiteral,
    addNamedNode,
    setDate,
    setTime,
    setDecimal,
    setInteger,
    setStringNoLocale,
    setStringWithLocale,
    setNamedNode,
    setLiteral,
    setTerm,
    removeAll,
    removeUrl,
    removeIri,
    removeLiteral,
    removeNamedNode,
    removeStringNoLocale,
    removeInteger,
    removeDecimal,
    removeTime,
    removeDate,
    removeDatetime,
    removeBoolean,
    addStringWithLocale,
    addStringNoLocale,
    addInteger,
    addTime,
    addDate,
    addDatetime,
    addBoolean,
    isThing,
    removeStringWithLocale,
    removeStringEnglish,
} from '@inrupt/solid-client';
import { IriString, Thing } from './RDFDataset';

/**
 * @param thing Thing to add a value to.
 * @param property Property on which to add the given value.
 * @param value Value to add to `thing` for the given `property`.
 * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
 */
type AddOfType<Type> = <T extends Thing>(thing: T, property: IriString, value: Type) => T;
/**
 * Create a new Thing with existing values replaced by the given value for the given Property.
 *
 * The original `thing` is not modified; this function returns a cloned Thing with updated values.
 *
 * @param thing Thing to set a value on.
 * @param property Property for which to set the given value.
 * @param value Value to set on `thing` for the given `property`.
 * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
 */
type SetOfType<Type> = <T extends Thing>(thing: T, property: IriString, value: Type) => T;
/**
 * @param thing Thing to remove a value from.
 * @param property Property for which to remove the given value.
 * @param value Value to remove from `thing` for the given `property`.
 * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
 */
type RemoveOfType<Type> = <T extends Thing>(thing: T, property: IriString, value: Type) => T;

export class RDFBuilder implements ThingBuilder<Thing> {
    protected thing: Thing;

    private constructor(thing: Thing) {
        this.thing = thing;
    }

    protected getAdder<Type>(adder: AddOfType<Type>): (...args: any[]) => this {
        return (property: Parameters<typeof adder>[1], value: Parameters<typeof adder>[2]) => {
            this.thing = adder(this.thing, property, value);
            return this;
        };
    }

    protected getSetter<Type>(setter: SetOfType<Type>): (...args: any[]) => this {
        return (property: Parameters<typeof setter>[1], value: Parameters<typeof setter>[2]) => {
            this.thing = setter(this.thing, property, value);
            return this;
        };
    }

    protected getRemover<Type>(remover: RemoveOfType<Type>): (...args: any[]) => this {
        return (property: Parameters<typeof remover>[1], value: Parameters<typeof remover>[2]) => {
            this.thing = remover(this.thing, property, value);
            return this;
        };
    }

    static create(init?: Partial<Thing>): RDFBuilder {
        const thing = isThing(init)
            ? init
            : ({
                  type: 'Subject',
                  predicates: {},
                  url: init.url,
                  ...init,
              } as Thing);
        return new RDFBuilder(thing);
    }

    addBlankNode(predicateIri: string, thing: Thing): this {
        const existingPredicate = this.thing.predicates[predicateIri as IriString] ?? {};
        const existingBlankNodes = existingPredicate.blankNodes ?? [];
        existingBlankNodes.push(thing.predicates);
        existingPredicate.blankNodes = existingBlankNodes;
        const updatedPredicates = {
            [predicateIri]: existingPredicate,
            ...this.thing.predicates,
        };
        this.thing = {
            ...this.thing,
            predicates: updatedPredicates,
        };
        return this;
    }

    addUrl = this.getAdder(addUrl);
    addIri = this.getAdder(addIri);
    addBoolean = this.getAdder(addBoolean);
    addDatetime = this.getAdder(addDatetime);
    addDate = this.getAdder(addDate);
    addTime = this.getAdder(addTime);
    addDecimal = this.getAdder(addDecimal);
    addInteger = this.getAdder(addInteger);
    addStringNoLocale = this.getAdder(addStringNoLocale);
    addStringEnglish(
        property: Parameters<typeof addStringWithLocale>[1],
        value: Parameters<typeof addStringWithLocale>[2],
    ) {
        this.thing = addStringWithLocale(this.thing, property, value, 'en');
        return this as unknown as ThingBuilder<Thing>;
    }
    addStringWithLocale(
        property: Parameters<typeof addStringWithLocale>[1],
        value: Parameters<typeof addStringWithLocale>[2],
        locale: Parameters<typeof addStringWithLocale>[3],
    ) {
        this.thing = addStringWithLocale(this.thing, property, value, locale);
        return this as unknown as ThingBuilder<Thing>;
    }
    addNamedNode = this.getAdder(addNamedNode);
    addLiteral = this.getAdder(addLiteral);
    addTerm = this.getAdder(addTerm);
    setUrl = this.getSetter(setUrl);
    setIri = this.getSetter(setIri);
    setBoolean = this.getSetter(setBoolean);
    setDatetime = this.getSetter(setDatetime);
    setDate = this.getSetter(setDate);
    setTime = this.getSetter(setTime);
    setDecimal = this.getSetter(setDecimal);
    setInteger = this.getSetter(setInteger);
    setStringNoLocale = this.getSetter(setStringNoLocale);
    setStringEnglish(
        property: Parameters<typeof setStringWithLocale>[1],
        value: Parameters<typeof setStringWithLocale>[2],
    ) {
        this.thing = setStringWithLocale(this.thing, property, value, 'en');
        return this as unknown as ThingBuilder<Thing>;
    }

    setStringWithLocale(
        property: Parameters<typeof setStringWithLocale>[1],
        value: Parameters<typeof setStringWithLocale>[2],
        locale: Parameters<typeof setStringWithLocale>[3],
    ) {
        this.thing = setStringWithLocale(this.thing, property, value, locale);
        return this as unknown as ThingBuilder<Thing>;
    }

    setNamedNode = this.getSetter(setNamedNode);
    setLiteral = this.getSetter(setLiteral);
    setTerm = this.getSetter(setTerm);

    removeAll(property: Parameters<typeof removeAll>[1]) {
        this.thing = removeAll(this.thing, property);
        return this as unknown as ThingBuilder<Thing>;
    }
    removeUrl = this.getRemover(removeUrl);
    removeIri = this.getRemover(removeIri);
    removeBoolean = this.getRemover(removeBoolean);
    removeDatetime = this.getRemover(removeDatetime);
    removeDate = this.getRemover(removeDate);
    removeTime = this.getRemover(removeTime);
    removeDecimal = this.getRemover(removeDecimal);
    removeInteger = this.getRemover(removeInteger);
    removeStringNoLocale = this.getRemover(removeStringNoLocale);
    removeNamedNode = this.getRemover(removeNamedNode);
    removeLiteral = this.getRemover(removeLiteral);
    removeStringEnglish = this.getRemover(removeStringEnglish);
    removeStringWithLocale(
        property: Parameters<typeof removeStringWithLocale>[1],
        value: Parameters<typeof removeStringWithLocale>[2],
        locale: Parameters<typeof removeStringWithLocale>[3],
    ) {
        return RDFBuilder.create(this.thing);
    }

    build(): Thing {
        return this.thing;
    }
}
