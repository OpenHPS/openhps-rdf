import { SerializableMemberOptions } from '@openhps/core';
import { IriString } from '../rdf';

declare module '@openhps/core/dist/types/data/decorators/SerializableMember' {
    export interface SerializableMemberOptions {
        rdf?: {
            predicate?: IriString | IriString[];
            datatype?: XmlSchemaTypeIri;
            language?: string;
        };
    }
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
