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
                case 'removeQuad':
                case 'delete':
                    return (quad: Quad) => {
                        // If quad is in additions, remove from additions
                        // Else, add to deletions
                        if (obj.additions.includes(quad)) {
                            obj.additions = obj.additions.filter((q) => q !== quad);
                        } else {
                            obj.deletions.push(quad);
                        }
                        obj.delete(quad);
                    };
                case 'addQuads':
                    return (quads: Quad[]) => {
                        obj.addQuads(quads);
                        obj.additions.push(...quads);
                    };
                case 'removeQuads':
                    return (quads: Quad[]) => {
                        // If quads are in additions, remove from additions
                        // Else, add to deletions
                        if (quads.some((quad) => obj.additions.includes(quad))) {
                            obj.additions = obj.additions.filter((quad) => !quads.includes(quad));
                        } else {
                            obj.deletions.push(...quads);
                        }
                        obj.removeQuads(quads);
                    };
            }
            return obj[prop];
        },
    }) as Store & RDFChangeLog;
    return proxy;
}
