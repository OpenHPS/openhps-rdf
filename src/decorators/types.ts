import { Serializable } from '@openhps/core';
import { IriString, Thing, XmlSchemaTypeIri } from '../rdf/types';

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
