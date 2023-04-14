import { ModelSerializer } from '@openhps/core';
import { RDFSerializer } from './RDFSerializer';

export class RDFModelSerializer extends ModelSerializer {
    protected get options(): any {
        return {
            serializer: RDFSerializer.serialize,
            deserialize: RDFSerializer.deserialize,
        };
    }
}
