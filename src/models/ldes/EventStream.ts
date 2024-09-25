import { SerializableMember, SerializableObject } from '@openhps/core';
import { Collection } from '../tree';
import { dcterms, ldes } from '../../vocab';
import { SerializableNamedNode } from '../SerializableNamedNode';
import { IriString } from '../../rdf/types';

@SerializableObject({
    rdf: {
        type: ldes.EventStream,
    },
})
export class EventStream extends Collection {
    @SerializableMember({
        rdf: {
            predicate: ldes.timestampPath,
        },
    })
    protected timestampPath: SerializableNamedNode = new SerializableNamedNode(dcterms.created);
    @SerializableMember({
        rdf: {
            predicate: ldes.versionOfPath,
        },
    })
    protected versionOfPath: SerializableNamedNode = new SerializableNamedNode(dcterms.isVersionOf);

    /**
     * Set the timestamp path
     * @param {IriString} path Timestamp path (predicate)
     */
    setTimestampPath(path: IriString) {
        this.timestampPath = new SerializableNamedNode(path);
    }

    /**
     * Set the version path
     * @param {IriString} path Version path (predicate)
     */
    setVersionOfPath(path: IriString) {
        this.versionOfPath = new SerializableNamedNode(path);
    }
}
