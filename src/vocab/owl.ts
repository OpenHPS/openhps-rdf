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
 * http://www.w3.org/2002/07/owl#AnnotationProperty
 */
export const AnnotationProperty: Class = 'http://www.w3.org/2002/07/owl#AnnotationProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#ObjectProperty
 */
export const ObjectProperty: Class = 'http://www.w3.org/2002/07/owl#ObjectProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#DatatypeProperty
 */
export const DatatypeProperty: Class = 'http://www.w3.org/2002/07/owl#DatatypeProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#DeprecatedProperty
 */
export const DeprecatedProperty: Class = 'http://www.w3.org/2002/07/owl#DeprecatedProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#FunctionalProperty
 */
export const FunctionalProperty: Class = 'http://www.w3.org/2002/07/owl#FunctionalProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#OntologyProperty
 */
export const OntologyProperty: Class = 'http://www.w3.org/2002/07/owl#OntologyProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#allValuesFrom
 */
export const allValuesFrom: Property = 'http://www.w3.org/2002/07/owl#allValuesFrom';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#annotatedProperty
 */
export const annotatedProperty: Property = 'http://www.w3.org/2002/07/owl#annotatedProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#annotatedSource
 */
export const annotatedSource: Property = 'http://www.w3.org/2002/07/owl#annotatedSource';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#annotatedTarget
 */
export const annotatedTarget: Property = 'http://www.w3.org/2002/07/owl#annotatedTarget';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#assertionProperty
 */
export const assertionProperty: Property = 'http://www.w3.org/2002/07/owl#assertionProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#cardinality
 */
export const cardinality: Property = 'http://www.w3.org/2002/07/owl#cardinality';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#complementOf
 */
export const complementOf: Property = 'http://www.w3.org/2002/07/owl#complementOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#datatypeComplementOf
 */
export const datatypeComplementOf: Property = 'http://www.w3.org/2002/07/owl#datatypeComplementOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#differentFrom
 */
export const differentFrom: Property = 'http://www.w3.org/2002/07/owl#differentFrom';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#disjointUnionOf
 */
export const disjointUnionOf: Property = 'http://www.w3.org/2002/07/owl#disjointUnionOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#disjointWith
 */
export const disjointWith: Property = 'http://www.w3.org/2002/07/owl#disjointWith';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#distinctMembers
 */
export const distinctMembers: Property = 'http://www.w3.org/2002/07/owl#distinctMembers';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#equivalentClass
 */
export const equivalentClass: Property = 'http://www.w3.org/2002/07/owl#equivalentClass';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#equivalentProperty
 */
export const equivalentProperty: Property = 'http://www.w3.org/2002/07/owl#equivalentProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#hasKey
 */
export const hasKey: Property = 'http://www.w3.org/2002/07/owl#hasKey';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#hasSelf
 */
export const hasSelf: Property = 'http://www.w3.org/2002/07/owl#hasSelf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#hasValue
 */
export const hasValue: Property = 'http://www.w3.org/2002/07/owl#hasValue';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#intersectionOf
 */
export const intersectionOf: Property = 'http://www.w3.org/2002/07/owl#intersectionOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#inverseOf
 */
export const inverseOf: Property = 'http://www.w3.org/2002/07/owl#inverseOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#maxCardinality
 */
export const maxCardinality: Property = 'http://www.w3.org/2002/07/owl#maxCardinality';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#maxQualifiedCardinality
 */
export const maxQualifiedCardinality: Property = 'http://www.w3.org/2002/07/owl#maxQualifiedCardinality';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#members
 */
export const members: Property = 'http://www.w3.org/2002/07/owl#members';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#minCardinality
 */
export const minCardinality: Property = 'http://www.w3.org/2002/07/owl#minCardinality';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#minQualifiedCardinality
 */
export const minQualifiedCardinality: Property = 'http://www.w3.org/2002/07/owl#minQualifiedCardinality';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#onClass
 */
export const onClass: Property = 'http://www.w3.org/2002/07/owl#onClass';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#onDataRange
 */
export const onDataRange: Property = 'http://www.w3.org/2002/07/owl#onDataRange';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#onDatatype
 */
export const onDatatype: Property = 'http://www.w3.org/2002/07/owl#onDatatype';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#oneOf
 */
export const oneOf: Property = 'http://www.w3.org/2002/07/owl#oneOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#onProperties
 */
export const onProperties: Property = 'http://www.w3.org/2002/07/owl#onProperties';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#onProperty
 */
export const onProperty: Property = 'http://www.w3.org/2002/07/owl#onProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#propertyChainAxiom
 */
export const propertyChainAxiom: Property = 'http://www.w3.org/2002/07/owl#propertyChainAxiom';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#propertyDisjointWith
 */
export const propertyDisjointWith: Property = 'http://www.w3.org/2002/07/owl#propertyDisjointWith';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#qualifiedCardinality
 */
export const qualifiedCardinality: Property = 'http://www.w3.org/2002/07/owl#qualifiedCardinality';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#sameAs
 */
export const sameAs: Property = 'http://www.w3.org/2002/07/owl#sameAs';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#someValuesFrom
 */
export const someValuesFrom: Property = 'http://www.w3.org/2002/07/owl#someValuesFrom';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#sourceIndividual
 */
export const sourceIndividual: Property = 'http://www.w3.org/2002/07/owl#sourceIndividual';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#targetIndividual
 */
export const targetIndividual: Property = 'http://www.w3.org/2002/07/owl#targetIndividual';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#targetValue
 */
export const targetValue: Property = 'http://www.w3.org/2002/07/owl#targetValue';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#unionOf
 */
export const unionOf: Property = 'http://www.w3.org/2002/07/owl#unionOf';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#withRestrictions
 */
export const withRestrictions: Property = 'http://www.w3.org/2002/07/owl#withRestrictions';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#Ontology
 */
export const Ontology: Class = 'http://www.w3.org/2002/07/owl#Ontology';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#AllDifferent
 */
export const AllDifferent: Class = 'http://www.w3.org/2002/07/owl#AllDifferent';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#AllDisjointClasses
 */
export const AllDisjointClasses: Class = 'http://www.w3.org/2002/07/owl#AllDisjointClasses';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#AllDisjointProperties
 */
export const AllDisjointProperties: Class = 'http://www.w3.org/2002/07/owl#AllDisjointProperties';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#Annotation
 */
export const Annotation: Class = 'http://www.w3.org/2002/07/owl#Annotation';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#AsymmetricProperty
 */
export const AsymmetricProperty: Class = 'http://www.w3.org/2002/07/owl#AsymmetricProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#Axiom
 */
export const Axiom: Class = 'http://www.w3.org/2002/07/owl#Axiom';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#Class
 */
export const Class: Class = 'http://www.w3.org/2002/07/owl#Class';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#DataRange
 */
export const DataRange: Class = 'http://www.w3.org/2002/07/owl#DataRange';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#DeprecatedClass
 */
export const DeprecatedClass: Class = 'http://www.w3.org/2002/07/owl#DeprecatedClass';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#InverseFunctionalProperty
 */
export const InverseFunctionalProperty: Class = 'http://www.w3.org/2002/07/owl#InverseFunctionalProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#IrreflexiveProperty
 */
export const IrreflexiveProperty: Class = 'http://www.w3.org/2002/07/owl#IrreflexiveProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#NamedIndividual
 */
export const NamedIndividual: Class = 'http://www.w3.org/2002/07/owl#NamedIndividual';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#NegativePropertyAssertion
 */
export const NegativePropertyAssertion: Class = 'http://www.w3.org/2002/07/owl#NegativePropertyAssertion';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#ReflexiveProperty
 */
export const ReflexiveProperty: Class = 'http://www.w3.org/2002/07/owl#ReflexiveProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#Restriction
 */
export const Restriction: Class = 'http://www.w3.org/2002/07/owl#Restriction';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#SymmetricProperty
 */
export const SymmetricProperty: Class = 'http://www.w3.org/2002/07/owl#SymmetricProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#TransitiveProperty
 */
export const TransitiveProperty: Class = 'http://www.w3.org/2002/07/owl#TransitiveProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#Thing
 */
export const Thing: OwlClass = 'http://www.w3.org/2002/07/owl#Thing';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#Nothing
 */
export const Nothing: OwlClass = 'http://www.w3.org/2002/07/owl#Nothing';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#bottomObjectProperty
 */
export const bottomObjectProperty: OwlObjectProperty = 'http://www.w3.org/2002/07/owl#bottomObjectProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#topObjectProperty
 */
export const topObjectProperty: OwlObjectProperty = 'http://www.w3.org/2002/07/owl#topObjectProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#bottomDataProperty
 */
export const bottomDataProperty: OwlDatatypeProperty = 'http://www.w3.org/2002/07/owl#bottomDataProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#topDataProperty
 */
export const topDataProperty: OwlDatatypeProperty = 'http://www.w3.org/2002/07/owl#topDataProperty';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#imports
 */
export const imports: OtherIndividual = 'http://www.w3.org/2002/07/owl#imports';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#versionIRI
 */
export const versionIRI: OtherIndividual = 'http://www.w3.org/2002/07/owl#versionIRI';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#versionInfo
 */
export const versionInfo: OtherIndividual = 'http://www.w3.org/2002/07/owl#versionInfo';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#backwardCompatibleWith
 */
export const backwardCompatibleWith: OtherIndividual = 'http://www.w3.org/2002/07/owl#backwardCompatibleWith';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#deprecated
 */
export const deprecated: OtherIndividual = 'http://www.w3.org/2002/07/owl#deprecated';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#incompatibleWith
 */
export const incompatibleWith: OtherIndividual = 'http://www.w3.org/2002/07/owl#incompatibleWith';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2002/07/owl#priorVersion
 */
export const priorVersion: OtherIndividual = 'http://www.w3.org/2002/07/owl#priorVersion';

export const _BASE: IriString = 'http://www.w3.org/2002/07/owl#';
export const _PREFIX: string = 'owl';