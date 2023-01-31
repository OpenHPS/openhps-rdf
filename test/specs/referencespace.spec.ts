import 'mocha';
import { ReferenceSpace, Accuracy3D, GeographicalPosition, LengthUnit, Orientation, RelativeDistance } from '@openhps/core';
import { poso, rdf, RDFSerializer } from '../../src';
import { expect } from 'chai';

describe('ReferenceSpace', () => {
    const object = new ReferenceSpace();
    object.displayName = "Test";

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        
        it('should have a single rdf type', async () => {
            expect(serialized.predicates[rdf.type].length).to.equal(4);
            const turtle = await RDFSerializer.stringify(serialized, {
                format: 'text/turtle',
                prettyPrint: false
            });
        });

        it('should serialize to subjects', async () => {
            const subjects = RDFSerializer.serializeToSubjects(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
            
        });

    });

    describe('deserialization', () => {
        const serialized = RDFSerializer.serialize(object, "https://maximvdw.solidweb.org/public/openhps.ttl#");
        const deserialized: ReferenceSpace = RDFSerializer.deserialize(serialized);

        it('should deserialize an object', () => {
            expect(deserialized.displayName).to.equal("Test");
        });
    });

});
