import { MemberOptionsBase, SerializableObjectOptions, SerializableMapMemberOptions } from '@openhps/core'; // DO NOT REMOVE
import { Quad_Object } from 'n3';
import { IriString, Thing } from '../rdf/types';

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
             * Known RDF types of this class used for deserialization.
             *
             * @see {@link https://www.w3.org/TR/rdf-schema/#ch_type}
             */
            knownTypes?: IriString[];
            /**
             * Callback for retrieving the URI of the resource. If this URI does not
             * start with 'http' it will use the base URI.
             * When returning undefined the object will be treated as a blank node.
             */
            uri?: (object: T) => string | IriString | undefined;
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
             * Predicate or list of predicate URIs to use for this member.
             * When not provided, the member can not be serialized.
             */
            predicate: IriString | IriString[];
            /**
             * Custom (partial) serializer for this member.
             */
            serializer?: (object: any, baseUri?: IriString) => Partial<Quad_Object>;
            /**
             * Custom (partial) deserializer for this member.
             */
            deserializer?: (thing: Thing) => any;
        } & RDFLiteralOptions;
    }
}

export interface RDFLiteralOptions {
    /**
     * Specify the XSD data type used for this member.
     * By default it will try to detect the data type.
     */
    datatype?: XmlSchemaTypeIri;
    /**
     * Specify the language used.
     */
    language?: string;
}

export const xsd = {
    boolean: 'http://www.w3.org/2001/XMLSchema#boolean',
    dateTime: 'http://www.w3.org/2001/XMLSchema#dateTime',
    date: 'http://www.w3.org/2001/XMLSchema#date',
    time: 'http://www.w3.org/2001/XMLSchema#time',
    decimal: 'http://www.w3.org/2001/XMLSchema#decimal',
    integer: 'http://www.w3.org/2001/XMLSchema#integer',
    string: 'http://www.w3.org/2001/XMLSchema#string',
    langString: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString',
} as const;

export type XmlSchemaTypeIri = typeof xsd[keyof typeof xsd];
