import { DataSerializerConfig } from '@openhps/core';
import { Quad_Object } from 'n3';

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

export type UrlString = `${'http' | 'https'}://${string}`;
export type IriString = UrlString;
export type Thing = {
    termType?: 'NamedNode' | 'BlankNode';
    value: string;
    predicates?: Record<string, (Quad_Object | Thing)[]>;
};
export type Subject = {
    type: 'Subject';
    url: string;
    predicates: SubjectPredicates;
};
export type LocalNodeIri = `${string}`;
export type LocalNodeName = string;
export type DataTypeIriString = XmlSchemaTypeIri | IriString;
export type LocaleString = string;
export type BlankNodeId = `_:${string}`;

export type SubjectObjects = Readonly<
    Partial<{
        literals: Readonly<Record<IriString, readonly string[]>>;
        langStrings: Readonly<Record<LocaleString, readonly string[]>>;
        namedNodes: ReadonlyArray<LocalNodeIri | IriString>;
        blankNodes: ReadonlyArray<SubjectPredicates | BlankNodeId>;
    }>
>;
export type SubjectPredicates = Readonly<Record<IriString, SubjectObjects>>;

export interface RDFSerializerConfig extends DataSerializerConfig {
    rdf?: {
        knownTypes?: Map<IriString, string[]>;
    };
    /**
     * Base URI for serializing individuals
     */
    baseUri?: IriString;
    sourceObject?: any;
    targetObject?: any;
}
