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
 * Feature Of Interest
 * 
 * The thing whose property is being estimated or calculated in the course of an Observation to arrive at a Result or whose property is being manipulated by an Actuator, or which is being sampled or transformed in an act of Sampling.
 *
 * http://www.w3.org/ns/sosa/FeatureOfInterest
 */
export const FeatureOfInterest: OwlClass = 'http://www.w3.org/ns/sosa/FeatureOfInterest';

/**
 * Observable Property
 * 
 * An observable quality (property, characteristic) of a FeatureOfInterest.
 *
 * http://www.w3.org/ns/sosa/ObservableProperty
 */
export const ObservableProperty: OwlClass = 'http://www.w3.org/ns/sosa/ObservableProperty';

/**
 * Actuatable Property
 * 
 * An actuatable quality (property, characteristic) of a FeatureOfInterest.
 *
 * http://www.w3.org/ns/sosa/ActuatableProperty
 */
export const ActuatableProperty: OwlClass = 'http://www.w3.org/ns/sosa/ActuatableProperty';

/**
 * Sample
 * 
 * Feature which is intended to be representative of a FeatureOfInterest on which Observations may be made.
 *
 * http://www.w3.org/ns/sosa/Sample
 */
export const Sample: OwlClass = 'http://www.w3.org/ns/sosa/Sample';

/**
 * Platform
 * 
 * A Platform is an entity that hosts other entities, particularly Sensors, Actuators, Samplers, and other Platforms.
 *
 * http://www.w3.org/ns/sosa/Platform
 */
export const Platform: OwlClass = 'http://www.w3.org/ns/sosa/Platform';

/**
 * Actuator
 * 
 * A device that is used by, or implements, an (Actuation) Procedure that changes the state of the world.
 *
 * http://www.w3.org/ns/sosa/Actuator
 */
export const Actuator: OwlClass = 'http://www.w3.org/ns/sosa/Actuator';

/**
 * Sensor
 * 
 * Device, agent (including humans), or software (simulation) involved in, or implementing, a Procedure. Sensors respond to a stimulus, e.g., a change in the environment, or input data composed from the results of prior Observations, and generate a Result. Sensors can be hosted by Platforms.
 *
 * http://www.w3.org/ns/sosa/Sensor
 */
export const Sensor: OwlClass = 'http://www.w3.org/ns/sosa/Sensor';

/**
 * Sampler
 * 
 * A device that is used by, or implements, a Sampling Procedure to create or transform one or more samples.
 *
 * http://www.w3.org/ns/sosa/Sampler
 */
export const Sampler: OwlClass = 'http://www.w3.org/ns/sosa/Sampler';

/**
 * Procedure
 * 
 * A workflow, protocol, plan, algorithm, or computational method specifying how to make an Observation, create a Sample, or make a change to the state of the world (via an Actuator). A Procedure is re-usable, and might be involved in many Observations, Samplings, or Actuations. It explains the steps to be carried out to arrive at reproducible results.
 *
 * http://www.w3.org/ns/sosa/Procedure
 */
export const Procedure: OwlClass = 'http://www.w3.org/ns/sosa/Procedure';

/**
 * Actuation
 * 
 * An Actuation carries out an (Actuation) Procedure to change the state of the world using an Actuator.
 *
 * http://www.w3.org/ns/sosa/Actuation
 */
export const Actuation: OwlClass = 'http://www.w3.org/ns/sosa/Actuation';

/**
 * Observation
 * 
 * Act of carrying out an (Observation) Procedure to estimate or calculate a value of a property of a FeatureOfInterest. Links to a Sensor to describe what made the Observation and how; links to an ObservableProperty to describe what the result is an estimate of, and to a FeatureOfInterest to detail what that property was associated with.
 *
 * http://www.w3.org/ns/sosa/Observation
 */
export const Observation: OwlClass = 'http://www.w3.org/ns/sosa/Observation';

/**
 * Sampling
 * 
 * An act of Sampling carries out a sampling Procedure to create or transform one or more samples.
 *
 * http://www.w3.org/ns/sosa/Sampling
 */
export const Sampling: OwlClass = 'http://www.w3.org/ns/sosa/Sampling';

/**
 * Result
 * 
 * The Result of an Observation, Actuation, or act of Sampling. To store an observation's simple result value one can use the hasSimpleResult property.
 *
 * http://www.w3.org/ns/sosa/Result
 */
export const Result: OwlClass = 'http://www.w3.org/ns/sosa/Result';

/**
 * has sample
 * 
 * Relation between a FeatureOfInterest and the Sample used to represent it.
 *
 * http://www.w3.org/ns/sosa/hasSample
 */
export const hasSample: OwlObjectProperty = 'http://www.w3.org/ns/sosa/hasSample';

/**
 * is sample of
 * 
 * Relation from a Sample to the FeatureOfInterest that it is intended to be representative of.
 *
 * http://www.w3.org/ns/sosa/isSampleOf
 */
export const isSampleOf: OwlObjectProperty = 'http://www.w3.org/ns/sosa/isSampleOf';

/**
 * hosts
 * 
 * Relation between a Platform and a Sensor, Actuator, Sampler, or Platform, hosted or mounted on it.
 *
 * http://www.w3.org/ns/sosa/hosts
 */
export const hosts: OwlObjectProperty = 'http://www.w3.org/ns/sosa/hosts';

/**
 * is hosted by
 * 
 * Relation between a Sensor, Actuator, Sampler, or Platform, and the Platform that it is mounted on or hosted by.
 *
 * http://www.w3.org/ns/sosa/isHostedBy
 */
export const isHostedBy: OwlObjectProperty = 'http://www.w3.org/ns/sosa/isHostedBy';

/**
 * observes
 * 
 * Relation between a Sensor and an ObservableProperty that it is capable of sensing.
 *
 * http://www.w3.org/ns/sosa/observes
 */
export const observes: OwlObjectProperty = 'http://www.w3.org/ns/sosa/observes';

/**
 * is observed by
 * 
 * Relation between an ObservableProperty and the Sensor able to observe it.
 *
 * http://www.w3.org/ns/sosa/isObservedBy
 */
export const isObservedBy: OwlObjectProperty = 'http://www.w3.org/ns/sosa/isObservedBy';

/**
 * used procedure
 * 
 * A relation to link to a re-usable Procedure used in making an Observation, an Actuation, or a Sample, typically through a Sensor, Actuator or Sampler.
 *
 * http://www.w3.org/ns/sosa/usedProcedure
 */
export const usedProcedure: OwlObjectProperty = 'http://www.w3.org/ns/sosa/usedProcedure';

/**
 * has feature of interest
 * 
 * A relation between an Observation and the entity whose quality was observed, or between an Actuation and the entity whose property was modified, or between an act of Sampling and the entity that was sampled.
 *
 * http://www.w3.org/ns/sosa/hasFeatureOfInterest
 */
export const hasFeatureOfInterest: OwlObjectProperty = 'http://www.w3.org/ns/sosa/hasFeatureOfInterest';

/**
 * is feature of interest of
 * 
 * A relation between a FeatureOfInterest and an Observation about it, an Actuation acting on it, or an act of Sampling that sampled it.
 *
 * http://www.w3.org/ns/sosa/isFeatureOfInterestOf
 */
export const isFeatureOfInterestOf: OwlObjectProperty = 'http://www.w3.org/ns/sosa/isFeatureOfInterestOf';

/**
 * made observation
 * 
 * Relation between a Sensor and an Observation made by the Sensor.
 *
 * http://www.w3.org/ns/sosa/madeObservation
 */
export const madeObservation: OwlObjectProperty = 'http://www.w3.org/ns/sosa/madeObservation';

/**
 * made by sensor
 * 
 * Relation between an Observation and the Sensor which made the Observation.
 *
 * http://www.w3.org/ns/sosa/madeBySensor
 */
export const madeBySensor: OwlObjectProperty = 'http://www.w3.org/ns/sosa/madeBySensor';

/**
 * observed property
 * 
 * Relation linking an Observation to the property that was observed. The ObservableProperty should be a property of the FeatureOfInterest (linked by hasFeatureOfInterest) of this Observation.
 *
 * http://www.w3.org/ns/sosa/observedProperty
 */
export const observedProperty: OwlObjectProperty = 'http://www.w3.org/ns/sosa/observedProperty';

/**
 * made actuation
 * 
 * Relation between an Actuator and the Actuation it has made.
 *
 * http://www.w3.org/ns/sosa/madeActuation
 */
export const madeActuation: OwlObjectProperty = 'http://www.w3.org/ns/sosa/madeActuation';

/**
 * made by actuator
 * 
 * Relation linking an Actuation to the Actuator that made that Actuation.
 *
 * http://www.w3.org/ns/sosa/madeByActuator
 */
export const madeByActuator: OwlObjectProperty = 'http://www.w3.org/ns/sosa/madeByActuator';

/**
 * acts on property
 * 
 * Relation between an Actuation and the property of a FeatureOfInterest it is acting upon.
 *
 * http://www.w3.org/ns/sosa/actsOnProperty
 */
export const actsOnProperty: OwlObjectProperty = 'http://www.w3.org/ns/sosa/actsOnProperty';

/**
 * is acted on by
 * 
 * Relation between an ActuatableProperty of a FeatureOfInterest and an Actuation changing its state.
 *
 * http://www.w3.org/ns/sosa/isActedOnBy
 */
export const isActedOnBy: OwlObjectProperty = 'http://www.w3.org/ns/sosa/isActedOnBy';

/**
 * made sampling
 * 
 * Relation between a Sampler (sampling device or entity) and the Sampling act it performed.
 *
 * http://www.w3.org/ns/sosa/madeSampling
 */
export const madeSampling: OwlObjectProperty = 'http://www.w3.org/ns/sosa/madeSampling';

/**
 * made by sampler
 * 
 * Relation linking an act of Sampling to the Sampler (sampling device or entity) that made it.
 *
 * http://www.w3.org/ns/sosa/madeBySampler
 */
export const madeBySampler: OwlObjectProperty = 'http://www.w3.org/ns/sosa/madeBySampler';

/**
 * has result
 * 
 * Relation linking an Observation or Actuation or act of Sampling and a Result or Sample.
 *
 * http://www.w3.org/ns/sosa/hasResult
 */
export const hasResult: OwlObjectProperty = 'http://www.w3.org/ns/sosa/hasResult';

/**
 * is result of
 * 
 * Relation linking a Result to the Observation or Actuation or act of Sampling that created or caused it.
 *
 * http://www.w3.org/ns/sosa/isResultOf
 */
export const isResultOf: OwlObjectProperty = 'http://www.w3.org/ns/sosa/isResultOf';

/**
 * phenomenon time
 * 
 * The time that the Result of an Observation, Actuation or Sampling applies to the FeatureOfInterest. Not necessarily the same as the resultTime. May be an Interval or an Instant, or some other compound TemporalEntity.
 *
 * http://www.w3.org/ns/sosa/phenomenonTime
 */
export const phenomenonTime: OwlObjectProperty = 'http://www.w3.org/ns/sosa/phenomenonTime';

/**
 * has simple result
 * 
 * The simple value of an Observation or Actuation or act of Sampling.
 *
 * http://www.w3.org/ns/sosa/hasSimpleResult
 */
export const hasSimpleResult: OwlDatatypeProperty = 'http://www.w3.org/ns/sosa/hasSimpleResult';

/**
 * result time
 * 
 * The result time is the instant of time when the Observation, Actuation or Sampling activity was completed.
 *
 * http://www.w3.org/ns/sosa/resultTime
 */
export const resultTime: OwlDatatypeProperty = 'http://www.w3.org/ns/sosa/resultTime';

export const _BASE: IriString = 'http://www.w3.org/ns/sosa/';
export const _PREFIX: string = 'sosa';