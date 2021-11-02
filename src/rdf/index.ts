import { Serializable, SerializableMember } from '@openhps/core';
import { BlankNodeId, IriString, Thing } from './RDFDataset';
import { RDFSerializable } from './RDFSerializable';

export * from './RDFSerializable';
export * from './RDFDataset';
export * from './RDFBuilder';

/**
 * Utility function to convert an existing object to an RDF serializable thing
 *
 * @param {Serializable<RDFSerializable>} dataType Serializable data type that implements {@see RDFSerializable}
 * @param {(buildUri?: IriString | BlankNodeId) => Thing} callback Callback function on convert
 */
export function createRDFSerializable<T extends RDFSerializable>(
    dataType: Serializable<T>,
    callback: (this: T, buildUri?: IriString | BlankNodeId) => Thing,
): void {
    dataType.prototype.toThing = callback;
    dataType.prototype.uri = undefined;
    SerializableMember(String)(dataType.prototype, 'uri');
}
