import { MemberOptionsBase, SerializableObjectOptions } from '@openhps/core'; // DO NOT REMOVE
import { IriString } from '../rdf';

declare module '@openhps/core/dist/types/data/decorators/options' {
    export interface SerializableObjectOptions<T> {
        /**
         * Resource Description Framework serialization options
         *
         * @see {@link https://www.w3.org/RDF/}
         */
        rdf?: {
            /**
             * RDF types to use for instances of this class.
             * This is not required for serialization, but will be required for deserialization
             * unless this is defined using a serializable member.
             *
             * @see {@link https://www.w3.org/TR/rdf-schema/#ch_type}
             */
            types?: IriString[];
            /**
             * Callback for retrieving the URI of the resource.
             * When returning undefined the object will be treated as a blank node.
             */
            uri?: (object: T, baseUri: IriString) => IriString | undefined;
            predicates?: Record<IriString, IriString>;
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
        } & RDFLiteralOptions;
    }
}

export interface RDFLiteralOptions {
    /**
     * Specify the XSD data type used for this member.
     * By default it will try to detect the data type.
     */
    datatype?: XmlSchemaTypeIri;
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
