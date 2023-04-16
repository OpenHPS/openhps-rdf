import { ModelSerializer, ModelSerializerConfig } from '@openhps/core';
import { RDFSerializer } from './RDFSerializer';

export class RDFModelSerializer extends ModelSerializer {
    protected get options(): ModelSerializerConfig {
        return {
            serialize: RDFSerializer.serialize,
            deserialize: RDFSerializer.deserialize,
        };
    }
}
