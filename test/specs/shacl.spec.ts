import 'mocha';
import { expect } from 'chai';
import { RDFSerializer, SHACL } from '../../src';
import { DataObject } from '@openhps/core';

describe('SHACL', () => {

    describe('serializer', () => {
        it('should serialize a simple shape', (done) => {
            const shape = SHACL.create(DataObject)
                .toThing();
            RDFSerializer.stringify(shape).then((serialized) => {
                console.log(serialized);
                done();
            }).catch(done);
        });
    });

    describe('deserializer', () => {

    });

});
