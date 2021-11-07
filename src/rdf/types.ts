import { DataSerializerConfig } from '@openhps/core';
import { Quad_Object } from 'n3';

export type UrlString = `${'http' | 'https'}://${string}`;
export type IriString = UrlString;
export type Thing = {
    termType?: 'NamedNode' | 'BlankNode';
    value: string;
    predicates?: Record<string, (Quad_Object | Thing)[]>;
};
export type LocaleString = 'en';

export interface RDFSerializerConfig extends DataSerializerConfig {
    rdf?: {
        knownTypes?: Map<IriString, string[]>;
    };
}
