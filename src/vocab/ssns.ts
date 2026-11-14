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
 * System Capability
 * 
 * Describes normal measurement, actuation, sampling properties such as accuracy, range, precision, etc. of a System under some specified Conditions such as a temperature range.
 * 
 *     The capabilities specified here are those that affect the primary purpose of the System, while those in OperatingRange represent the system's normal operating environment, including conditions that don't affect the observations or the actuations.
 *
 * http://www.w3.org/ns/ssn/systems/SystemCapability
 */
export const SystemCapability: OwlClass = 'http://www.w3.org/ns/ssn/systems/SystemCapability';

/**
 * Operating Range
 * 
 * Describes normal OperatingProperties of a System under some specified Conditions. For example, to the power requirement or maintenance schedule of a System under a specified temperature range.
 * 
 *     In the absence of OperatingProperties, simply describes the Conditions in which a System is expected to operate.
 * 
 *     The System continues to operate as defined using SystemCapability. If, however, the SurvivalRange is violated, the System is 'damaged' and SystemCapability specifications may no longer hold.
 *
 * http://www.w3.org/ns/ssn/systems/OperatingRange
 */
export const OperatingRange: OwlClass = 'http://www.w3.org/ns/ssn/systems/OperatingRange';

/**
 * Survival Range
 * 
 * Describes survival capabilities of a System under some specified Conditions. For example, to the lifetime of a System under a specified temperature range.
 * 
 *     In the absence of SurvivalProperties, simply describes the Conditions a System can be exposed to without damage. For example, the temperature range a System can withstand before being considered damaged.
 * 
 *     The System continues to operate as defined using SystemCapability. If, however, the OperatingProperty is violated, the System is operating 'out of operating range' and SystemCapability specifications may no longer hold.
 *
 * http://www.w3.org/ns/ssn/systems/SurvivalRange
 */
export const SurvivalRange: OwlClass = 'http://www.w3.org/ns/ssn/systems/SurvivalRange';

/**
 * Condition
 * 
 * Used to specify ranges for qualities that act as conditions on a system/sensor's operation.  For example, wind speed of 10-60m/s may be used as the condition on a SystemProperty, for example, to state that a sensor has a particular accuracy in that condition.
 *
 * http://www.w3.org/ns/ssn/systems/Condition
 */
export const Condition: OwlClass = 'http://www.w3.org/ns/ssn/systems/Condition';

/**
 * System Property
 * 
 * An identifiable and observable characteristic that represents the System's ability to operate its primary purpose: a Sensor to make Observations, an Actuator to make Actuations, or a Sampler to make Samplings.
 *
 * http://www.w3.org/ns/ssn/systems/SystemProperty
 */
export const SystemProperty: OwlClass = 'http://www.w3.org/ns/ssn/systems/SystemProperty';

/**
 * Measurement Range
 * 
 * The set of values that the Sensor can return as the Result of an Observation under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/MeasurementRange
 */
export const MeasurementRange: OwlClass = 'http://www.w3.org/ns/ssn/systems/MeasurementRange';

/**
 * Actuation Range
 * 
 * The set of values that the Actuator can return as the Result of an Actuation under the defined Conditions with the defined system properties.
 *
 * http://www.w3.org/ns/ssn/systems/ActuationRange
 */
export const ActuationRange: OwlClass = 'http://www.w3.org/ns/ssn/systems/ActuationRange';

/**
 * Accuracy
 * 
 * The closeness of agreement between the Result of an Observation (resp. the command of an Actuation) and the true value of the observed ObservableProperty (resp. of the acted on ActuatableProperty) under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Accuracy
 */
export const Accuracy: OwlClass = 'http://www.w3.org/ns/ssn/systems/Accuracy';

/**
 * Detection Limit
 * 
 * An observed value for which the probability of falsely claiming the absence of a component in a material is beta, given a probability alpha of falsely claiming its presence.
 *
 * http://www.w3.org/ns/ssn/systems/DetectionLimit
 */
export const DetectionLimit: OwlClass = 'http://www.w3.org/ns/ssn/systems/DetectionLimit';

/**
 * Drift
 * 
 * As a Sensor Property: a continuous or incremental change in the reported values of Observations over time for an unchanging Property under the defined Conditions. 
 * 
 *       As an Actuator Property: a continuous or incremental change in the true value of the acted on ActuatableProperty over time for an unchanging command under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Drift
 */
export const Drift: OwlClass = 'http://www.w3.org/ns/ssn/systems/Drift';

/**
 * Frequency
 * 
 * The smallest possible time between one Observation, Actuation, or Sampling and the next, under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Frequency
 */
export const Frequency: OwlClass = 'http://www.w3.org/ns/ssn/systems/Frequency';

/**
 * Latency
 * 
 * The time between a command for an Observation (resp. Actuation) and the Sensor providing a Result (resp. the Actuator operating the Actuation), under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Latency
 */
export const Latency: OwlClass = 'http://www.w3.org/ns/ssn/systems/Latency';

/**
 * Precision
 * 
 * As a Sensor Property: the closeness of agreement between replicate Observations on an unchanged or similar Property value: i.e., a measure of a Sensor's ability to consistently reproduce an Observation, under the defined Conditions.
 * 
 *       As an Actuator Property: the closeness of agreement between replicate Actuations for an unchanged or similar command: i.e., a measure of an Actuator's ability to consistently reproduce an Actuation, under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Precision
 */
export const Precision: OwlClass = 'http://www.w3.org/ns/ssn/systems/Precision';

/**
 * Resolution
 * 
 * As a Sensor Property: the smallest difference in the value of a ObservableProperty being observed that would result in perceptably different values of Observation Results, under the defined Conditions. 
 * 
 *       As an Actuator Property: the smallest difference in the value of an Actuation command that would result in a value change of the ActuatableProperty being acted on, under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Resolution
 */
export const Resolution: OwlClass = 'http://www.w3.org/ns/ssn/systems/Resolution';

/**
 * Response Time
 * 
 * As a Sensor Property: the time between a (step) change in the value of an observed ObservableProperty and a Sensor (possibly with specified error) 'settling' on an observed value, under the defined Conditions.
 * 
 *       As an Actuator property: the time between a (step) change in the command of an Actuator and the 'settling' of the value of the acted on ActuatableProperty, under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/ResponseTime
 */
export const ResponseTime: OwlClass = 'http://www.w3.org/ns/ssn/systems/ResponseTime';

/**
 * Selectivity
 * 
 * As a Sensor Property: Selectivity is a Property of a Sensor whereby it provides observed values for one or more ObservableProperties such that the Results for each ObservableProperty are independent of other Properties in the FeatureOfInterest being investigated,  under the defined Conditions.
 * 
 *       As an Actuator Property: Selectivity is a Property of an Actuator whereby it acts on one or more ActuatableProperties such as the Results for each ActuatableProperty are independent of other Properties in the FeatureOfInterest being acted on, under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Selectivity
 */
export const Selectivity: OwlClass = 'http://www.w3.org/ns/ssn/systems/Selectivity';

/**
 * Sensitivity
 * 
 * As a Sensor Property: Sensitivity is the quotient of the change in a Result of Observation and the corresponding change in a value of an ObservableProperty being observed, under the defined Conditions.
 * 
 *        As an Actuator Property: Sensitivity is the quotient of the change in a command of Actuation and the corresponding change in a value of an ActuatableProperty being acted on, under the defined Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/Sensitivity
 */
export const Sensitivity: OwlClass = 'http://www.w3.org/ns/ssn/systems/Sensitivity';

/**
 * Operating Property
 * 
 * An identifiable characteristic that represents how the System operates under the specified Conditions. May describe power ranges, power sources, standard configurations, attachments and the like.
 *
 * http://www.w3.org/ns/ssn/systems/OperatingProperty
 */
export const OperatingProperty: OwlClass = 'http://www.w3.org/ns/ssn/systems/OperatingProperty';

/**
 * Maintenance Schedule
 * 
 * Schedule of maintenance for a System in the specified Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/MaintenanceSchedule
 */
export const MaintenanceSchedule: OwlClass = 'http://www.w3.org/ns/ssn/systems/MaintenanceSchedule';

/**
 * Operating Power Range
 * 
 * Power range in which a System is expected to operate in the specified Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/OperatingPowerRange
 */
export const OperatingPowerRange: OwlClass = 'http://www.w3.org/ns/ssn/systems/OperatingPowerRange';

/**
 * Survival Property
 * 
 * An identifiable characteristic that represents the extent of the System's useful life under the specified Conditions. May describe for example total battery life or number of recharges, or, for Sensors that are used only a fixed number of times, the number of observations that can be made before the sensing capability is depleted.
 *
 * http://www.w3.org/ns/ssn/systems/SurvivalProperty
 */
export const SurvivalProperty: OwlClass = 'http://www.w3.org/ns/ssn/systems/SurvivalProperty';

/**
 * System Lifetime
 * 
 * Total useful life of a System (expressed as total life since manufacture, time in use, number of operations, etc.) in the specified Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/SystemLifetime
 */
export const SystemLifetime: OwlClass = 'http://www.w3.org/ns/ssn/systems/SystemLifetime';

/**
 * Battery Lifetime
 * 
 * Total useful life of a System's battery in the specified Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/BatteryLifetime
 */
export const BatteryLifetime: OwlClass = 'http://www.w3.org/ns/ssn/systems/BatteryLifetime';

/**
 * quality of observation
 * 
 * Relation linking an Observation to the adjudged quality of the Result. This is complimentary to the SystemCapability information recorded for the Sensor that made the Observation.
 *
 * http://www.w3.org/ns/ssn/systems/qualityOfObservation
 */
export const qualityOfObservation: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/qualityOfObservation';

/**
 * has system capability
 * 
 * Relation from a System to a SystemCapability describing the capabilities of the System under certain Conditions.
 *
 * http://www.w3.org/ns/ssn/systems/hasSystemCapability
 */
export const hasSystemCapability: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/hasSystemCapability';

/**
 * has operating range
 * 
 * Relation from a System to an OperatingRange describing the normal operating environment of the System.
 *
 * http://www.w3.org/ns/ssn/systems/hasOperatingRange
 */
export const hasOperatingRange: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/hasOperatingRange';

/**
 * has survival range
 * 
 * Relation from a System to a SurvivalRange.
 *
 * http://www.w3.org/ns/ssn/systems/hasSurvivalRange
 */
export const hasSurvivalRange: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/hasSurvivalRange';

/**
 * in condition
 * 
 * Describes the prevailing environmental conditions for SystemCapabilites, OperatingRanges and SurvivalRanges.
 *
 * http://www.w3.org/ns/ssn/systems/inCondition
 */
export const inCondition: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/inCondition';

/**
 * has system property
 * 
 * Relation from an SystemCapability of a System to a SystemProperty describing the capabilities of the System.
 *
 * http://www.w3.org/ns/ssn/systems/hasSystemProperty
 */
export const hasSystemProperty: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/hasSystemProperty';

/**
 * has operating property
 * 
 * Relation from an OperatingRange of a System to a OperatingPropery describing the operating range of the System.
 *
 * http://www.w3.org/ns/ssn/systems/hasOperatingProperty
 */
export const hasOperatingProperty: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/hasOperatingProperty';

/**
 * has survival property
 * 
 * Relation from a SurvivalRange of a System to a SurvivalProperty describing the survival range of the System.
 *
 * http://www.w3.org/ns/ssn/systems/hasSurvivalProperty
 */
export const hasSurvivalProperty: OwlObjectProperty = 'http://www.w3.org/ns/ssn/systems/hasSurvivalProperty';

export const _BASE: IriString = 'http://www.w3.org/ns/ssn/systems/';
export const _PREFIX: string = 'ssns';