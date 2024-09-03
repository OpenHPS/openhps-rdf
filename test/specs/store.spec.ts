import { DataObject, createChangeLog } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { RDFSerializer } from '../../src';

describe('Store', () => {
    describe('changelog', () => {
        it('should keep a changelog', () => {
            const object = new DataObject("mvdewync");
            object.displayName = "Maxim";
            const store = RDFSerializer.serializeToStore(object, "https://test.com/");
            const objectWithChangeLog = createChangeLog(object);
            objectWithChangeLog.displayName = "Maxim123";
            const changelog = RDFSerializer.serializeToChangeLog(objectWithChangeLog);
            store.addQuads(changelog.additions);
            store.removeQuads(changelog.deletions);
            expect(store.additions).to.have.lengthOf(5);
            expect(store.deletions).to.have.lengthOf(1);
        });
    });
});
