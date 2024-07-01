import { Quad, Store } from 'n3';

export interface RDFChangeLog {
    additions?: Quad[];
    deletions?: Quad[];
}

/**
 *
 * @param store
 */
export function createChangeLog(store: Store): Store & RDFChangeLog {
    // Add a changelog to the store
    (store as any).additions = [];
    (store as any).deletions = [];

    const proxy = new Proxy(store, {
        get: (obj: Store & RDFChangeLog, prop) => {
            switch (prop) {
                case 'add':
                    return (quad: Quad) => {
                        obj.add(quad);
                        obj.additions.push(quad);
                    };
                case 'delete':
                    return (quad: Quad) => {
                        obj.delete(quad);
                        obj.deletions.push(quad);
                    };
                case 'addQuads':
                    return (quads: Quad[]) => {
                        obj.addQuads(quads);
                        obj.additions.push(...quads);
                    };
                case 'removeQuads':
                    return (quads: Quad[]) => {
                        obj.removeQuads(quads);
                        obj.deletions.push(...quads);
                    };
            }
            return obj[prop];
        },
    }) as Store & RDFChangeLog;
    return proxy;
}
