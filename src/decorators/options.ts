import { Serializable, SerializableObjectOptions, MemberOptionsBase } from '@openhps/core';
import { Quad_Object } from 'n3';
import { IriString, Thing } from '../rdf/types';
import { RDFIdentifierOptions, RDFLiteralOptions } from './types';

export type { SerializableObjectOptions, MemberOptionsBase };

declare module '@openhps/core/dist/types/data/decorators/options' {
    export interface SerializableObjectOptions<T> {
        /**
         * Resource Description Framework serialization options
         *
         * @see {@link https://www.w3.org/RDF/}
         */
        rdf?: {
            /**
             * RDF type of this class. This will be automatically added as a static predicate.
             *
             * @see {@link https://www.w3.org/TR/rdf-schema/#ch_type}
             */
            type?: IriString;
            /**
             * Additional static predicates to add to this object that are not based
             * on any properties inside the object.
             */
            predicates?: Record<IriString, IriString[]>;
            /**
             * Custom (partial) serializer for this object.
             */
            serializer?: (object: T, baseUri?: IriString) => Partial<Thing>;
            /**
             * Custom (partial) deserializer for this object.
             */
            deserializer?: (thing: Thing) => Partial<T>;
            /**
             * Type resolver for deserialized thing. Return true
             * if the type matches and false if the type does not match.
             */
            typeResolver?: (thing: Thing) => boolean;
        };
    }

    export interface MemberOptionsBase {
        /**
         * Resource Description Framework serialization options
         *
         * @see {@link https://www.w3.org/RDF/}
         */
        rdf?: {
            /**
             * Specify if the member is an identifier
             */
            identifier?: boolean;
            /**
             * Custom (partial) serializer for this member.
             */
            serializer?: (object: any, dataType?: Serializable<any>) => Partial<Quad_Object>;
            /**
             * Custom (partial) deserializer for this member.
             */
            deserializer?: (thing: Thing, dataType?: Serializable<any>) => any;
        } & (RDFLiteralOptions | RDFIdentifierOptions);
    }
}
