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
 * has retention policy
 * 
 * Links to a retention policy.
 *
 * https://w3id.org/ldes#retentionPolicy
 */
export const retentionPolicy: Property = 'https://w3id.org/ldes#retentionPolicy';

/**
 * Starting from
 * 
 * The search tree only keeps members starting a certain timestamp.
 *
 * https://w3id.org/ldes#startingFrom
 */
export const startingFrom: Property = 'https://w3id.org/ldes#startingFrom';

/**
 * Version duration
 * 
 * The search tree only keeps its versions, for which an `ldes:versionAmount` MUST have been set, only during a specific window. 
 *
 * https://w3id.org/ldes#versionDuration
 */
export const versionDuration: Property = 'https://w3id.org/ldes#versionDuration';

/**
 * Version amount
 * 
 * The amount of versions to keep.
 *
 * https://w3id.org/ldes#versionAmount
 */
export const versionAmount: Property = 'https://w3id.org/ldes#versionAmount';

/**
 * Version Delete Duration
 * 
 * The search tree only keeps its deletions for a certain duration.
 *
 * https://w3id.org/ldes#versionDeleteDuration
 */
export const versionDeleteDuration: Property = 'https://w3id.org/ldes#versionDeleteDuration';

/**
 * Full Log Duration
 * 
 * The search tree keeps its full log for a certain duration.
 *
 * https://w3id.org/ldes#fullLogDuration
 */
export const fullLogDuration: Property = 'https://w3id.org/ldes#fullLogDuration';

/**
 * versionOf Path
 * 
 * SHACL property path to the non-versioned IRI of the entity.
 *
 * https://w3id.org/ldes#versionOfPath
 */
export const versionOfPath: Property = 'https://w3id.org/ldes#versionOfPath';

/**
 * Timestamp Path
 * 
 * SHACL property path to the xsd:dateTime literal in each member that defines the order of the event stream.
 *
 * https://w3id.org/ldes#timestampPath
 */
export const timestampPath: Property = 'https://w3id.org/ldes#timestampPath';

/**
 * Sequence Path
 * 
 * SHACL property path to an xsd literal in each member that defines the order of the event stream in addition to the timestampPath.
 *
 * https://w3id.org/ldes#sequencePath
 */
export const sequencePath: Property = 'https://w3id.org/ldes#sequencePath';

/**
 * Version Timestamp Path
 * 
 * For out of order event streams: a SHACL property path to the xsd:dateTime literal in each member that defines the order of versioned members.
 *
 * https://w3id.org/ldes#versionTimestampPath
 */
export const versionTimestampPath: Property = 'https://w3id.org/ldes#versionTimestampPath';

/**
 * Version Sequence Path
 * 
 * For out of order event streams: a SHACL property path to an xsd literal in each member that defines the order of the event stream in addition to the versionTimestampPath.
 *
 * https://w3id.org/ldes#versionSequencePath
 */
export const versionSequencePath: Property = 'https://w3id.org/ldes#versionSequencePath';

/**
 * Version Materialization Of
 * 
 * Links to the original LDES
 *
 * https://w3id.org/ldes#versionMaterializationOf
 */
export const versionMaterializationOf: Property = 'https://w3id.org/ldes#versionMaterializationOf';

/**
 * Version Materialization Until
 * 
 * Timestamp until versions were processed
 *
 * https://w3id.org/ldes#versionMaterializationUntil
 */
export const versionMaterializationUntil: Property = 'https://w3id.org/ldes#versionMaterializationUntil';

/**
 * Version Create Path
 * 
 * Path indicating where you can do an object check on whether the member represents a create. Defaults to rdf:type.
 *
 * https://w3id.org/ldes#versionCreatePath
 */
export const versionCreatePath: Property = 'https://w3id.org/ldes#versionCreatePath';

/**
 * Version Update Path
 * 
 * Path indicating where you can do an object check on whether the member represents an update. Defaults to rdf:type.
 *
 * https://w3id.org/ldes#versionUpdatePath
 */
export const versionUpdatePath: Property = 'https://w3id.org/ldes#versionUpdatePath';

/**
 * Version Delete Path
 * 
 * Path indicating where you can do an object check on whether the member represents a delete. Defaults to rdf:type.
 *
 * https://w3id.org/ldes#versionDeletePath
 */
export const versionDeletePath: Property = 'https://w3id.org/ldes#versionDeletePath';

/**
 * Version Create Object
 * 
 * If the RDF object matches the object in the version create path, the member represents a create.
 *
 * https://w3id.org/ldes#versionCreateObject
 */
export const versionCreateObject: Property = 'https://w3id.org/ldes#versionCreateObject';

/**
 * Version Update Object
 * 
 * If the RDF object matches the object in the version update path, the member represents an update.
 *
 * https://w3id.org/ldes#versionUpdateObject
 */
export const versionUpdateObject: Property = 'https://w3id.org/ldes#versionUpdateObject';

/**
 * Version Delete Object
 * 
 * If the RDF object matches the object in the version delete path, the member represents a delete.
 *
 * https://w3id.org/ldes#versionDeleteObject
 */
export const versionDeleteObject: Property = 'https://w3id.org/ldes#versionDeleteObject';

/**
 * Transaction Path
 * 
 * Path indicating how a member indicates whether it is part of a transaction.
 *
 * https://w3id.org/ldes#transactionPath
 */
export const transactionPath: Property = 'https://w3id.org/ldes#transactionPath';

/**
 * Transaction Finalized Path
 * 
 * Path indicating whether the transaction has been finalized.
 *
 * https://w3id.org/ldes#transactionFinalizedPath
 */
export const transactionFinalizedPath: Property = 'https://w3id.org/ldes#transactionFinalizedPath';

/**
 * Transaction Finalized Object
 * 
 * If the RDF object matches the object in the transaction finalized path, the member indicates the transaction has been finalized.
 *
 * https://w3id.org/ldes#transactionFinalizedObject
 */
export const transactionFinalizedObject: Property = 'https://w3id.org/ldes#transactionFinalizedObject';

/**
 * Immutable
 * 
 * Re-fetching this tree:Node will not result in new members.
 *
 * https://w3id.org/ldes#immutable
 */
export const immutable: Property = 'https://w3id.org/ldes#immutable';

/**
 * Polling Interval
 * 
 * The number of seconds the client should keep between synchronization run calls.
 *
 * https://w3id.org/ldes#pollingInterval
 */
export const pollingInterval: Property = 'https://w3id.org/ldes#pollingInterval';

/**
 * Event Stream
 * 
 * An Event Stream is a tree:Collection containing immutable members.
 *
 * https://w3id.org/ldes#EventStream
 */
export const EventStream: Class = 'https://w3id.org/ldes#EventStream';

/**
 * Event Source
 * 
 * A data service that provides the source other views should synchronize with
 *
 * https://w3id.org/ldes#EventSource
 */
export const EventSource: Class = 'https://w3id.org/ldes#EventSource';

/**
 * Retention Policy
 * 
 * Documents what data to keep
 *
 * https://w3id.org/ldes#RetentionPolicy
 */
export const RetentionPolicy: Class = 'https://w3id.org/ldes#RetentionPolicy';

/**
 * The Linked Data Event Streams specification
 * 
 * A hypermedia specification for maintaining a collection with immutable members.
 *
 * https://w3id.org/ldes#Vocabulary
 */
export const Vocabulary: OtherIndividual = 'https://w3id.org/ldes#Vocabulary';

export const _BASE: IriString = 'https://w3id.org/ldes#';
export const _PREFIX: string = 'ldes';