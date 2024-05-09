import { DataSerializerUtils, Serializable } from '@openhps/core';
import { rdf, sh } from '../vocab';
import { RDFBuilder } from './RDFBuilder';
import { Thing } from './types';
import { RDFLiteralOptions } from '../decorators';

/**
 * SHACL (Shapes Constraint Language) is a language for describing and constraining the contents of RDF graphs.
 */
export class SHACL {
    protected shape: Thing;

    private constructor() {}

    static create(object?: Serializable<any>): SHACL;
    static create(shape?: Thing): SHACL;
    static create(shapeOrObject?: Thing | Serializable<any>): SHACL {
        const shacl = new SHACL();
        if (shapeOrObject) {
            if (DataSerializerUtils.getOwnMetadata(shapeOrObject)) {
                shacl.shape = shacl.createNodeShape(shapeOrObject as Serializable<any>);
            } else {
                shacl.shape = shapeOrObject as Thing;
            }
        }
        return shacl;
    }

    protected createNodeShape(target: Serializable<any>): Thing {
        const meta = DataSerializerUtils.getOwnMetadata(target);
        if (!meta.options || !meta.options.rdf) {
            return;
        }
        const rdfOptions = meta.options.rdf;
        const types = rdfOptions.predicates[rdf.type];
        const builder = RDFBuilder.namedNode('http://').add(rdf.type, sh.NodeShape).add(sh.targetClass, types[0]);
        meta.dataMembers.forEach((member) => {
            const rootMember = meta.dataMembers.get(member.key);
            const memberOptions =
                member.options && member.options.rdf
                    ? member
                    : rootMember && rootMember.options && rootMember.options.rdf
                      ? rootMember
                      : undefined;

            if (
                !memberOptions ||
                (!(memberOptions.options.rdf as RDFLiteralOptions).predicate &&
                    !memberOptions.options.rdf.serializer) ||
                memberOptions.options.rdf.identifier
            ) {
                return undefined;
            }
            this.createPropertyShape(builder, memberOptions.options.rdf as RDFLiteralOptions);
        });
        return builder.build();
    }

    protected createPropertyShape(builder: RDFBuilder, options: RDFLiteralOptions): RDFBuilder {
        return builder.add(
            sh.property,
            RDFBuilder.blankNode()
                .add(rdf.type, sh.PropertyShape)
                .add(sh.path, options.predicate)
                .build(),
        );
    }

    /**
     * Apply the SHACL shape to a target
     * @param target {Serializable<any>} The target to apply the shape to
     */
    apply(target: Serializable<any>): void {} // eslint-disable-line

    /**
     * Get the SHACL shape as a thing
     * @returns {Thing} The SHACL shape
     */
    toThing(): Thing {
        return this.shape;
    }
}
