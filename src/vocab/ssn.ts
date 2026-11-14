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
 * Property
 * 
 * A quality of an entity. An aspect of an entity that is intrinsic to and cannot exist without the entity.
 *
 * http://www.w3.org/ns/ssn/Property
 */
export const Property: OwlClass = 'http://www.w3.org/ns/ssn/Property';

/**
 * Stimulus
 * 
 * An event in the real world that 'triggers' the Sensor. The properties associated to the Stimulus may be different to the eventual observed ObservableProperty. It is the event, not the object, that triggers the Sensor.
 *
 * http://www.w3.org/ns/ssn/Stimulus
 */
export const Stimulus: OwlClass = 'http://www.w3.org/ns/ssn/Stimulus';

/**
 * System
 * 
 * System is a unit of abstraction for pieces of infrastructure that implement Procedures. A System may have components, its subsystems, which are other systems.
 *
 * http://www.w3.org/ns/ssn/System
 */
export const System: OwlClass = 'http://www.w3.org/ns/ssn/System';

/**
 * Deployment
 * 
 * Describes the Deployment of one or more Systems for a particular purpose. Deployment may be done on a Platform.
 *
 * http://www.w3.org/ns/ssn/Deployment
 */
export const Deployment: OwlClass = 'http://www.w3.org/ns/ssn/Deployment';

/**
 * Input
 * 
 * Any information that is provided to a Procedure for its use.
 *
 * http://www.w3.org/ns/ssn/Input
 */
export const Input: OwlClass = 'http://www.w3.org/ns/ssn/Input';

/**
 * Output
 * 
 * Any information that is reported from a Procedure.
 *
 * http://www.w3.org/ns/ssn/Output
 */
export const Output: OwlClass = 'http://www.w3.org/ns/ssn/Output';

/**
 * has property
 * 
 * Relation between an entity and a Property of that entity.
 *
 * http://www.w3.org/ns/ssn/hasProperty
 */
export const hasProperty: OwlObjectProperty = 'http://www.w3.org/ns/ssn/hasProperty';

/**
 * is property of
 * 
 * Relation between a Property and the entity it belongs to.
 *
 * http://www.w3.org/ns/ssn/isPropertyOf
 */
export const isPropertyOf: OwlObjectProperty = 'http://www.w3.org/ns/ssn/isPropertyOf';

/**
 * is proxy for
 * 
 * A relation from a Stimulus to the Property that the Stimulus is serving as a proxy for.
 *
 * http://www.w3.org/ns/ssn/isProxyFor
 */
export const isProxyFor: OwlObjectProperty = 'http://www.w3.org/ns/ssn/isProxyFor';

/**
 * in deployment
 * 
 * Relation between a Platform and a Deployment, meaning that the deployedSystems of the Deployment are hosted on the Platform.
 *
 * http://www.w3.org/ns/ssn/inDeployment
 */
export const inDeployment: OwlObjectProperty = 'http://www.w3.org/ns/ssn/inDeployment';

/**
 * deployed system
 * 
 * Relation between a Deployment and a deployed System.
 *
 * http://www.w3.org/ns/ssn/deployedSystem
 */
export const deployedSystem: OwlObjectProperty = 'http://www.w3.org/ns/ssn/deployedSystem';

/**
 * has input
 * 
 * Relation between a Procedure and an Input to it.
 *
 * http://www.w3.org/ns/ssn/hasInput
 */
export const hasInput: OwlObjectProperty = 'http://www.w3.org/ns/ssn/hasInput';

/**
 * has output
 * 
 * Relation between a Procedure and an Output of it.
 *
 * http://www.w3.org/ns/ssn/hasOutput
 */
export const hasOutput: OwlObjectProperty = 'http://www.w3.org/ns/ssn/hasOutput';

/**
 * implemented by
 * 
 * Relation between a Procedure (an algorithm, procedure or method) and an entity that implements that Procedure in some executable way.
 *
 * http://www.w3.org/ns/ssn/implementedBy
 */
export const implementedBy: OwlObjectProperty = 'http://www.w3.org/ns/ssn/implementedBy';

/**
 * implements
 * 
 * Relation between an entity that implements a Procedure in some executable way and the Procedure (an algorithm, procedure or method).
 *
 * http://www.w3.org/ns/ssn/implements
 */
export const _implements: OwlObjectProperty = 'http://www.w3.org/ns/ssn/implements';

/**
 * detects
 * 
 * A relation from a Sensor to the Stimulus that the Sensor detects. The Stimulus itself will be serving as a proxy for some ObservableProperty.
 *
 * http://www.w3.org/ns/ssn/detects
 */
export const detects: OwlObjectProperty = 'http://www.w3.org/ns/ssn/detects';

/**
 * for property
 * 
 * A relation between some aspect of an entity and a Property.
 *
 * http://www.w3.org/ns/ssn/forProperty
 */
export const forProperty: OwlObjectProperty = 'http://www.w3.org/ns/ssn/forProperty';

/**
 * was originated by
 * 
 * Relation between an Observation and the Stimulus that originated it.
 *
 * http://www.w3.org/ns/ssn/wasOriginatedBy
 */
export const wasOriginatedBy: OwlObjectProperty = 'http://www.w3.org/ns/ssn/wasOriginatedBy';

/**
 * has subsystem
 * 
 * Relation between a System and its component parts.
 *
 * http://www.w3.org/ns/ssn/hasSubSystem
 */
export const hasSubSystem: OwlObjectProperty = 'http://www.w3.org/ns/ssn/hasSubSystem';

/**
 * has deployment
 * 
 * Relation between a System and a Deployment, recording that the System is deployed in that Deployment.
 *
 * http://www.w3.org/ns/ssn/hasDeployment
 */
export const hasDeployment: OwlObjectProperty = 'http://www.w3.org/ns/ssn/hasDeployment';

/**
 * deployed on platform
 * 
 * Relation between a Deployment and the Platform on which the Systems are deployed.
 *
 * http://www.w3.org/ns/ssn/deployedOnPlatform
 */
export const deployedOnPlatform: OwlObjectProperty = 'http://www.w3.org/ns/ssn/deployedOnPlatform';

export const _BASE: IriString = 'http://www.w3.org/ns/ssn/';
export const _PREFIX: string = 'ssn';