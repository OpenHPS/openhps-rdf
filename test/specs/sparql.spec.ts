import { 
    DataObject, 
    DataObjectService, 
    GeographicalPosition, 
    Absolute2DPosition, 
    Orientation, 
    AngleUnit 
} from '@openhps/core';
import 'mocha';
import { SPARQLDataDriver } from '../../src';
import { expect } from 'chai';

describe('SPARQLDataDriver', () => {
    let service: DataObjectService<DataObject>;

    before((done) => {
        service = new DataObjectService(new SPARQLDataDriver(DataObject, {
            endpointUrl: "http://localhost:3030/openhps-rdf/query",
            updateUrl: "http://localhost:3030/openhps-rdf/update",
            storeUrl: "http://localhost:3030/openhps-rdf/data",
            user: "admin",
            password: "test",
            baseUri: "http://openhps.org/terms#"
        }));
        service.emitAsync('build').then(() => {
            return service.deleteAll();
        }).then(() => {
            done();
        }).catch(done);
    });

    describe('insert', () => {
        it('should support inserting new dataobjects', (done) => {
            Promise.all([
                service.insertObject(new DataObject("mvdewync", "Maxim Van de Wynckel")
                    .setPosition(new Absolute2DPosition(5, 1))),
                service.insertObject(new DataObject("bsigner", "Beat Signer")
                    .setPosition(new Absolute2DPosition(5, 2))),
                service.insertObject(new DataObject("johndoe", "John Doe")
                    .setPosition(new GeographicalPosition(50.20, 30.10))),
            ]).then(() => {
                done()
            }).catch(done);
        });

        it('should support updating a dataobject', (done) => {
            const object = new DataObject("mvdewync", "Maxim Van de Wynckel");
            object.setPosition(new Absolute2DPosition(5, 3));
            object.position.orientation = Orientation.fromEuler({
                yaw: 180,
                pitch: 0,
                roll: 0,
                unit: AngleUnit.DEGREE
            });
            service.insertObject(object).then(() => {
                done()
            }).catch(done);
        });
    });

    describe('find', () => {
        it('should find by uid', (done) => {
            service.findByUID("mvdewync").then(data => {
                done();
            }).catch(done);
        });

        it('should find one item', (done) => {
            service.findOne({
                uid: "mvdewync"
            }).then(data => {
                expect(data.displayName).to.equal("Maxim Van de Wynckel");
                done();
            }).catch(done);
        });

        it('should find all items', (done) => {
            service.findAll().then(data => {
                expect(data.length).to.equal(3);
                done();
            }).catch(done);
        });

        it('$and should not work as an OR', (done) => {
            service.findAll({
                $and: [{
                    displayName: "Beat Signer"
                }, {
                    displayName: "Maxim Van de Wynckel"
                }]
            }).then(data => {
                expect(data.length).to.equal(0);
                done();
            }).catch(done);
        });

        it('$or should work as an OR', (done) => {
            service.findAll({
                $or: [{
                    displayName: "Beat Signer"
                }, {
                    displayName: "Maxim Van de Wynckel"
                }]
            }).then(data => {
                expect(data.length).to.equal(2);
                expect(data[0].displayName).to.equal("Beat Signer");
                expect(data[1].displayName).to.equal("Maxim Van de Wynckel");
                done();
            }).catch(done);
        });

        it('should support regex queries', (done) => {
            service.findAll({
                displayName: /John/g
            }).then(data => {
                expect(data.length).to.equal(1);
                expect(data[0].displayName).to.equal("John Doe");
                done();
            }).catch(done);
        });

        it('should support explicit path querying', (done) => {
            service.findAll({
                position: {
                    latitude: 50.20
                }
            }).then(data => {
                expect(data.length).to.equal(1);
                expect(data[0].displayName).to.equal("John Doe");
                done();
            }).catch(done);
        });

        it('should support sorting by number', (done) => {
            service.findAll({}, {
                sort: [
                    ["createdTimestamp", -1]
                ]
            }).then(data => {
                expect(data.length).to.equal(3);
                expect(data[0].displayName).to.equal("Maxim Van de Wynckel");
                done();
            }).catch(done);
        });

        it('should support sorting by name', (done) => {
            service.findAll({}, {
                sort: [
                    ["displayName", 1]
                ]
            }).then(data => {
                expect(data.length).to.equal(3);
                expect(data[0].displayName).to.equal("Beat Signer");
                done();
            }).catch(done);
        });

        it('should support combinations of queries', (done) => {
            service.findAll({
                $or: [
                    {
                        position: {
                            latitude: 50.20
                        }
                    },
                    {
                        displayName: "Beat Signer"
                    }
                ]
            }).then(data => {
                expect(data.length).to.equal(2);
                expect(data[0].displayName).to.equal("John Doe");
                expect(data[1].displayName).to.equal("Beat Signer");
                done();
            }).catch(done);
        });

        it('should support implicit path querying', (done) => {
            service.findAll({
                "position.latitude": 50.20
            }).then(data => {
                expect(data.length).to.equal(1);
                expect(data[0].displayName).to.equal("John Doe");
                done();
            }).catch(done);
        });
    });

    describe('count', () => {
        it('should count all objects', (done) => {
            service.count().then(num => {
                expect(num).to.equal(3);
                done();
            }).catch(done);
        });

        it('should count specific objects', (done) => {
            service.count({
                uid: "mvdewync"
            }).then(num => {
                expect(num).to.equal(1);
                done();
            }).catch(done);
        });
    });

    describe('delete', () => {
        it('should support deleting one identifier', (done) => {
            let total = 0;
            service.findAll().then(data => {
                total = data.length;
                return service.delete("mvdewync");
            }).then(() => {
                return service.findAll();
            }).then(data => {
                expect(data.length).to.equal(total - 1);
                done()
            }).catch(done);
        });

        it('should support deleting all tuples', (done) => {
            service.deleteAll().then(() => {
                return service.count();
            }).then(data => {
                expect(data).to.equal(0);
                done()
            }).catch(done);
        });
    });

});
