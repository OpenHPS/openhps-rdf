import { DataFrame, Model, ModelSerializerConfig, Node, Serializable, Service } from '@openhps/core';
import { RDFSerializerConfig, Thing } from './types';

import { RDFSerializer } from './RDFSerializer';

/**
 * Model serializer allows you to serialize a positioning model to RDF.
 */
export class RDFModelSerializer {
    static NODES: Map<string, ClassDeclaration<Node<any, any>>> = new Map();
    static SERVICES: Map<string, ClassDeclaration<Service>> = new Map();
    private static _modules = new Set();

    protected static get options(): ModelSerializerConfig & any {
        return {
            serialize: (object, options) => RDFSerializer.serialize(object, options),
            deserialize: (thing) => RDFSerializer.deserialize(thing),
        };
    }

    static serialize(model: Model, options?: RDFSerializerConfig): Thing {
        return this.serializeNode(model as any, options);
    }

    static serializeNode(node: Node<any, any>, options?: RDFSerializerConfig): Thing {
        this.initialize();
        return this.options.serialize(node, options);
    }

    static deserialize<In extends DataFrame, Out extends DataFrame>(model: Thing): Model<In, Out> {
        const deserializedModel = this.deserializeNode(model) as any as Model<In, Out>;
        deserializedModel.nodes.forEach((node) => {
            node.graph = deserializedModel;
        });
        return deserializedModel;
    }

    static deserializeNode<In extends DataFrame, Out extends DataFrame>(node: any): Node<In, Out> {
        this.initialize();
        return this.options.deserialize(node) as Node<any, Out>;
    }

    protected static loadClasses(module: NodeModule = require.main): void {
        if (module === undefined) {
            // Use cache instead
            Object.values(require.cache).map((m) => this.loadClasses(m));
            return;
        }
        this._modules.add(module.id);
        if (module.exports) {
            Object.keys(module.exports).forEach((key) => {
                const childModule = module.exports[key];

                if (childModule && childModule.prototype instanceof Node) {
                    this.NODES.set(key, {
                        constructor: childModule,
                    });
                } else if (childModule && childModule.prototype instanceof Service) {
                    this.SERVICES.set(key, {
                        constructor: childModule,
                    });
                }
            });
        }
        if (module.children) {
            module.children.forEach((module) => {
                if (!this._modules.has(module.id)) {
                    this.loadClasses(module);
                }
            });
        }
    }

    protected static initialize(): void {
        if (this.SERVICES.size === 0 || this.NODES.size === 0) {
            this.loadClasses();
            this._modules.clear();
            this.SERVICES.forEach((service) => RDFSerializer.registerType(service.constructor));
            this.NODES.forEach((node) => RDFSerializer.registerType(node.constructor));
        }
    }
}

interface ClassDeclaration<T> {
    constructor: Serializable<T>;
}
