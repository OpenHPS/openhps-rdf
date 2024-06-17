import { Serializable, SerializableObjectOptions, MemberOptionsBase, DataObject } from '@openhps/core';
import { Quad_Object } from 'n3';
import { IriString, Thing } from '../rdf/types';
import { RDFIdentifierOptions, RDFLiteralOptions } from './types';

export type { SerializableObjectOptions, MemberOptionsBase, DataObject };

export type RDFMetadata = {
    /**
     * Serialized or deserialized URI of the data object
     */
    uri?: IriString;
    /**
     * Path relative to base URI
     */
    path?: string;
    /**
     * Unresolved predicates
     */
    predicates?: {
        [predicate: string]: (Quad_Object | Thing)[];
    };
};

declare module '@openhps/core/dist/types/data/object/DataObject' {
    export interface DataObject {
        rdf?: RDFMetadata;
    }
}

declare module '@openhps/core/dist/types/data/DataFrame' {
    export interface DataFrame {
        rdf?: RDFMetadata;
    }
}

declare module '@openhps/core/dist/types/data/decorators/options' {
    export interface SerializableObjectOptions<T> {
        /**
         * Resource Description Framework serialization options
         * @see {@link https://www.w3.org/RDF/}
         */
        rdf?: {
            /**
             * RDF type of this class. This will be automatically added as a static predicate.
             * @see {@link https://www.w3.org/TR/rdf-schema/#ch_type}
             */
            type?: IriString | IriString[];
            /**
             * Additional static predicates to add to this object that are not based
             * on any properties inside the object.
             */
            predicates?: Record<IriString, IriString[]>;
            /**
             * Custom (partial) serializer for this object.
             */
            serializer?: (object: T, baseUri?: IriString) => Partial<Thing> | Quad_Object;
            /**
             * Custom (partial) deserializer for this object.
             */
            deserializer?: (thing: Thing, instance?: T) => T;
            /**
             * Custom SPARQL query to deserialize this object
             */
            query?: string;
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
            serializer?: (value: any, object?: any, options?: MemberSerializerOptions) => Partial<Thing | Quad_Object>;
            /**
             * Custom (partial) deserializer for this member.
             */
            deserializer?: (thing: Thing, targetObject?: any, options?: MemberDeserializerOptions) => any;
        } & (RDFLiteralOptions | RDFIdentifierOptions);
    }
}

export interface MemberSerializerOptions {
    thing: Thing;
    dataType?: Serializable<any>;
    baseUri?: IriString;
    parent?: MemberSerializerOptionsParent;
}

export type MemberSerializerOptionsParent = { thing: Thing; parent: MemberSerializerOptionsParent };

export type MemberDeserializerOptionsParent = { thing: Thing; object: any; parent: MemberDeserializerOptionsParent };

export interface MemberDeserializerOptions {
    thing: Thing;
    dataType?: Serializable<any>;
    parent?: MemberDeserializerOptionsParent;
}
