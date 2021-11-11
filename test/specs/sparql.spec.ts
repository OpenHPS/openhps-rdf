import { DataObject, DataObjectService, Model, ModelBuilder } from '@openhps/core';
import 'mocha';
import { SPARQLDataDriver } from '../../src';

describe('SPARQLDataDriver', () => {
    let service: DataObjectService<DataObject>;

    before((done) => {
        service = new DataObjectService(new SPARQLDataDriver(DataObject, {
            endpointUrl: "http://localhost:3030/test/query",
            updateUrl: "http://localhost:3030/test/update",
            storeUrl: "http://localhost:3030/test/data",
            user: "admin",
            password: "OStB0VrrPZKqKfo"
        }));
        service.emitAsync('build').then(() => done()).catch(done);
    });

    it('should support inserting a dataobject', (done) => {
        const object = new DataObject("mvdewync", "Maxim Van de Wynckel");
        service.insertObject(object).then(() => {
            done()
        }).catch(done);
    });
});
