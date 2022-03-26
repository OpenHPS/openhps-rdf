import { DataSerializerConfig } from '@openhps/core';
import { Quad_Object } from 'n3';

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
    predicates: Record<
        IriString,
        Partial<{
            literals: Record<string, string[]>;
            langStrings: Record<LocaleString, string[]>;
            namedNodes: Array<string>;
            blankNodes: Array<any | string>;
        }>
    >;
};
export type LocaleString = 'en';

export interface RDFSerializerConfig extends DataSerializerConfig {
    rdf?: {
        knownTypes?: Map<IriString, string[]>;
    };
}
