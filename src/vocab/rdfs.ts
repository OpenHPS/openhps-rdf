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
 * http://www.w3.org/2000/01/rdf-schema#isDefinedBy
 */
export const isDefinedBy: Property = 'http://www.w3.org/2000/01/rdf-schema#isDefinedBy';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#label
 */
export const label: Property = 'http://www.w3.org/2000/01/rdf-schema#label';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#comment
 */
export const comment: Property = 'http://www.w3.org/2000/01/rdf-schema#comment';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#subClassOf
 */
export const subClassOf: Property = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#range
 */
export const range: Property = 'http://www.w3.org/2000/01/rdf-schema#range';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#domain
 */
export const domain: Property = 'http://www.w3.org/2000/01/rdf-schema#domain';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#subPropertyOf
 */
export const subPropertyOf: Property = 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#seeAlso
 */
export const seeAlso: Property = 'http://www.w3.org/2000/01/rdf-schema#seeAlso';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty
 */
export const ContainerMembershipProperty: Class = 'http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#member
 */
export const member: Property = 'http://www.w3.org/2000/01/rdf-schema#member';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#Resource
 */
export const Resource: Class = 'http://www.w3.org/2000/01/rdf-schema#Resource';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#Class
 */
export const Class: Class = 'http://www.w3.org/2000/01/rdf-schema#Class';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#Literal
 */
export const Literal: Class = 'http://www.w3.org/2000/01/rdf-schema#Literal';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#Container
 */
export const Container: Class = 'http://www.w3.org/2000/01/rdf-schema#Container';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2000/01/rdf-schema#Datatype
 */
export const Datatype: Class = 'http://www.w3.org/2000/01/rdf-schema#Datatype';

export const _BASE: IriString = 'http://www.w3.org/2000/01/rdf-schema#';
export const _PREFIX: string = 'rdfs';