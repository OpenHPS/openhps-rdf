import { Serializable } from '@openhps/core';
import { IriString, Thing } from '../rdf/types';

export interface RDFIdentifierOptions {
    identifier: true;
    /**
     * Custom (partial) serializer for this member.
     */
    serializer: (value: any, dataType?: Serializable<any>) => string;
    /**
     * Custom (partial) deserializer for this member.
     */
    deserializer: (thing: Thing, dataType?: Serializable<any>) => any;
}

export interface RDFObjectOptions {
    identifier?: false;
    /**
     * Predicate or list of predicate URIs to use for this member.
     * When not provided, the member can not be serialized.
     */
    predicate: IriString | IriString[];
}

export interface RDFLiteralOptions extends RDFObjectOptions {
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
    anyURI: 'http://www.w3.org/2001/XMLSchema#anyURI',
    integer: 'http://www.w3.org/2001/XMLSchema#integer',
    string: 'http://www.w3.org/2001/XMLSchema#string',
    double: 'http://www.w3.org/2001/XMLSchema#double',
    langString: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString',
    hexBinary: 'http://www.w3.org/2001/XMLSchema#hexBinary',
} as const;

export type XmlSchemaTypeIri = (typeof xsd)[keyof typeof xsd];
