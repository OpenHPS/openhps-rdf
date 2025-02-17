import { ContextDefinition } from 'jsonld';
import { IriString } from './types';
import * as jsonld from 'jsonld';

/**
 * JSON-LD document loader
 */
export class DocumentLoader {
    protected context: Record<IriString, ContextDefinition>;
    protected defaultLoader: (url: IriString) => Promise<any>;

    public constructor() {
        this.context = {};
        if (jsonld.documentLoaders) {
            if (jsonld.documentLoaders.node) {
                this.defaultLoader = jsonld.documentLoaders.node();
            } else if (jsonld.documentLoaders.xhr) {
                this.defaultLoader = jsonld.documentLoaders.xhr();
            }
        }
    }

    /**
     * Add a context to the loader
     * @param {IriString} url The URL of the context
     * @param {ContextDefinition} context Context definition
     */
    addContext(url: IriString, context: ContextDefinition): void {
        this.context[url] = context;
    }

    /**
     * Get a context from the loader
     * @param {IriString} url The URL of the context
     * @returns {ContextDefinition} The context definition
     */
    getContext(url: IriString): ContextDefinition {
        return this.context[url];
    }

    async fetch(url: IriString): ContextDefinition {
        // Check if the URL is in the cached context
        if (url in this.context) {
            return {
                contextUrl: null,
                document: this.context[url],
                documentUrl: url,
            };
        }
        // Otherwise, use the default loader
        const response = await this.defaultLoader(url);
        // Cache the context
        this.addContext(url, response.document);
        return response;
    }
}
