type IriString = `${'http' | 'https'}://${string}`;
type Property = IriString; // eslint-disable-line
type Class = IriString; // eslint-disable-line
type Datatype = IriString; // eslint-disable-line
type OwlClass = IriString; // eslint-disable-line
type OwlObjectProperty = IriString; // eslint-disable-line
type OwlDatatypeProperty = IriString; // eslint-disable-line
type HydraResource = IriString; // eslint-disable-line
type HydraClass = IriString; // eslint-disable-line
type HydraLink = IriString; // eslint-disable-line
type HydraTemplatedLink = IriString; // eslint-disable-line
type HydraVariableRepresentation = IriString; // eslint-disable-line
type OtherIndividual = IriString; // eslint-disable-line

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#type
 */
export const type: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#subject
 */
export const subject: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate
 */
export const predicate: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#object
 */
export const object: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#value
 */
export const value: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#first
 */
export const first: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#first';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#rest
 */
export const rest: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#language
 */
export const language: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#language';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#direction
 */
export const direction: Property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#direction';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#Property
 */
export const Property: Class = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement
 */
export const Statement: Class = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag
 */
export const Bag: Class = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq
 */
export const Seq: Class = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt
 */
export const Alt: Class = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#List
 */
export const List: Class = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#List';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral
 */
export const CompoundLiteral: Class = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML
 */
export const HTML: Datatype = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#langString
 */
export const langString: Datatype = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral
 */
export const PlainLiteral: Datatype = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral
 */
export const XMLLiteral: Datatype = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral';

/**
 * 
 * 
 * undefined
 * Note that `JSON` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON
 */
export const JSON__workaround: Datatype = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/1999/02/22-rdf-syntax-ns#nil
 */
export const nil: OtherIndividual = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil';

export const _BASE: IriString = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
export const _PREFIX: string = 'rdf';