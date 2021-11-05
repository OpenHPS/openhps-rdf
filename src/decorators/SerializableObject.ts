import { SerializableObject } from '@openhps/core';

declare module '@openhps/core/dist/types/data/decorators/SerializableObject' {
    export interface SerializableObjectOptions<T> {
        rdf?: {
            /**
             * RDF type(s) to use for instances of this class.
             *
             * @see {@link https://www.w3.org/TR/rdf-schema/#ch_type}
             */
            type?: string | string[];
        };
    }
}
