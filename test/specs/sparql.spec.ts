import { 
    DataObject, 
    DataObjectService, 
    GeographicalPosition, 
    Absolute2DPosition, 
    Orientation, 
    AngleUnit, 
    DataFrameService,
    DataFrame
} from '@openhps/core';
import 'mocha';
import { DefaultEngine, SPARQLDataDriver } from '../../src';
import { expect } from 'chai';

describe('SPARQLDataDriver (Fuseki endpoint)', () => {
    let service: DataObjectService<DataObject>;
    let frameService: DataFrameService<DataFrame>;
    const object1 = new DataObject('mvdewync', 'Maxim');
    const object2 = new DataObject('bsigner', 'Beat');
    const object3 = new DataObject('mvdewync2', 'Maxim2');
    const frame1 = new DataFrame();
    frame1.addObject(object1);
    frame1.addObject(object2);
    frame1.addObject(object3);
    const frame2 = new DataFrame();
    frame2.createdTimestamp = frame1.createdTimestamp + 1;
    frame2.addObject(object3);
    const frame3 = new DataFrame();
    frame3.createdTimestamp = frame2.createdTimestamp + 1;
    frame3.addObject(object1);

    before((done) => {
        service = new DataObjectService(new SPARQLDataDriver(DataObject, {
            httpAuth: "admin:test",
            baseUri: "http://openhps.org/terms#",
            sources: [{ type: 'sparql', value: "http://localhost:3030/openhps-rdf-1" }],
            engine: DefaultEngine
        }));
        frameService = new DataFrameService(new SPARQLDataDriver(DataFrame, {
            httpAuth: "admin:test",
            baseUri: "http://openhps.org/terms#",
            sources: [{ type: 'sparql', value: "http://localhost:3030/openhps-rdf-2" }],
            engine: DefaultEngine
        }));
        Promise.all([service.emitAsync('build'), frameService.emitAsync('build')]).then(() => {
            return Promise.all([service.deleteAll(), frameService.deleteAll()]);
        }).then(() => {
            done();
        }).catch(done);
    });

    describe('insert', () => {
        it('should support inserting new dataobjects', (done) => {
            const pos = new GeographicalPosition(50.20, 30.10);
            pos.orientation = Orientation.fromEuler({
                yaw: 90,
                pitch: 0,
                roll: 0,
                unit: AngleUnit.DEGREE
            });
            const now = Date.now();
            const obj1 = new DataObject("mvdewync", "Maxim Van de Wynckel")
                .setPosition(new Absolute2DPosition(5, 1));
            obj1.createdTimestamp = now + 1;
            const obj2 = new DataObject("bsigner", "Beat Signer")
                .setPosition(new Absolute2DPosition(5, 2));
            obj2.createdTimestamp = now + 2;
            const obj3 = new DataObject("johndoe", "John Doe")
                .setPosition(pos);
            obj3.createdTimestamp = now + 3;
            Promise.all([
                service.insertObject(obj1),
                service.insertObject(obj2),
                service.insertObject(obj3),
            ]).then(() => {
                done()
            }).catch(done);
        });

        it('should support inserting new dataframes', (done) => {
            Promise.all([
                frameService.insertFrame(frame1),
                frameService.insertFrame(frame2),
                frameService.insertFrame(frame3),
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
            object.createdTimestamp += 1;
            service.insertObject(object).then(() => {
                done()
            }).catch(done);
        });
    });

    describe('find', () => {
        it('should find by uid', (done) => {
            service.findByUID("mvdewync").then(data => {
                expect(data.displayName).to.equal("Maxim Van de Wynckel");
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

        it('should find one item by a display name', (done) => {
            service.findOne({
                displayName: "Maxim Van de Wynckel"
            }).then(data => {
                expect(data.uid).to.equal("mvdewync");
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
                }],
            }, {
                sort: [
                    ["displayName", 1]
                ]
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
                    y: 50.20
                }
            }).then(data => {
                expect(data.length).to.equal(1);
                expect(data[0].displayName).to.equal("John Doe");
                done();
            }).catch(done);
        });

        it('should support sorting by number ascending', (done) => {
            service.findAll({}, {
                sort: [
                    ["createdTimestamp", 1]
                ]
            }).then(data => {
                expect(data.length).to.equal(3);
                expect(data[0].displayName).to.equal("Beat Signer");
                expect(data[1].displayName).to.equal("John Doe");
                expect(data[2].displayName).to.equal("Maxim Van de Wynckel");
                done();
            }).catch(done);
        });

        it('should support sorting by number descending', (done) => {
            service.findAll({}, {
                sort: [
                    ["createdTimestamp", -1]
                ]
            }).then(data => {
                expect(data.length).to.equal(3);
                expect(data[0].displayName).to.equal("Maxim Van de Wynckel"); // Updated
                expect(data[1].displayName).to.equal("John Doe");
                expect(data[2].displayName).to.equal("Beat Signer");
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

        describe('expressions', () => {
            it('should check greater then: >', (done) => {
                service.findAll({
                    "position.y": {
                        $gt: 50.10,
                    }
                }).then(data => {
                    expect(data.length).to.equal(1);
                    expect(data[0].displayName).to.equal("John Doe");
                    return service.findAll({
                        "position.y": {
                            $gt: 50.20
                        }
                    });
                }).then(data => {
                    expect(data.length).to.equal(0);
                    done();
                }).catch(done);
            });

            it('should check lesser then: <', (done) => {
                service.findAll({
                    "position.y": {
                        $lt: 50.30
                    }
                }).then(data => {
                    expect(data.length).to.equal(1);
                    expect(data[0].displayName).to.equal("John Doe");
                    return service.findAll({
                        "position.y": {
                            $lt: 50.20
                        }
                    });
                }).then(data => {
                    expect(data.length).to.equal(0);
                    done();
                }).catch(done);
            });

            it('should check greater then and lesser then', (done) => {
                service.findAll({
                    "position.y": {
                        $gt: 50.10,
                        $lt: 50.30
                    }
                }).then(data => {
                    expect(data.length).to.equal(1);
                    expect(data[0].displayName).to.equal("John Doe");
                    return service.findAll({
                        "position.y": {
                            $gt: 50.20,
                            $lt: 50.40
                        }
                    });
                }).then(data => {
                    expect(data.length).to.equal(0);
                    done();
                }).catch(done);
            });

            it('should check equality: =', (done) => {
                service.findAll({
                    "position.y": {
                        $eq: 50.20,
                    }
                }).then(data => {
                    expect(data.length).to.equal(1);
                    expect(data[0].displayName).to.equal("John Doe");
                    return service.findAll({
                        "position.y": {
                            $eq: 50.21,
                        }
                    });
                }).then(data => {
                    expect(data.length).to.equal(0);
                    done();
                }).catch(done);
            });

            it('should check gte: >=', (done) => {
                service.findAll({
                    "position.y": {
                        $gte: 50.20,
                    }
                }).then(data => {
                    expect(data.length).to.equal(1);
                    expect(data[0].displayName).to.equal("John Doe");
                    return service.findAll({
                        "position.y": {
                            $gte: 50.21,
                        }
                    });
                }).then(data => {
                    expect(data.length).to.equal(0);
                    done();
                }).catch(done);
            });

            it('should check lte: <=', (done) => {
                service.findAll({
                    "position.y": {
                        $lte: 50.20,
                    }
                }).then(data => {
                    expect(data.length).to.equal(1);
                    expect(data[0].displayName).to.equal("John Doe");
                    return service.findAll({
                        "position.y": {
                            $lte: 50.19,
                        }
                    });
                }).then(data => {
                    expect(data.length).to.equal(0);
                    done();
                }).catch(done);
            });

            it('should support combinations of expressions', (done) => {
                service.findAll({
                    "position.y": {
                        $lte: 50.20,
                    }, 
                    "position.x": {
                        $lte: 50.20,
                    }
                }).then(data => {
                    expect(data.length).to.equal(1);
                    expect(data[0].displayName).to.equal("John Doe");
                    done();
                }).catch(done);
            });
        });

        it('should support combinations of queries', (done) => {
            service.findAll({
                $or: [
                    {
                        position: {
                            y: 50.20
                        }
                    },
                    {
                        displayName: "Beat Signer"
                    }
                ]
            }, {
                sort: [
                    ["displayName", -1]
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
                "position.y": 50.20
            }).then(data => {
                expect(data.length).to.equal(1);
                expect(data[0].displayName).to.equal("John Doe");
                done();
            }).catch(done);
        });
    });

    describe('deserializing', () => {
        it('should deserialize an array', (done) => {
            frameService.findAll().then(data => {
                expect(data.length).to.equal(3); // 3 frames
                expect(data[0]['_objects']).to.not.undefined;
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

    describe('array query', () => {
        it('should support $elemMatch', (done) => {
            frameService.findAll({
                _objects: {
                    $elemMatch: {
                        displayName: 'Maxim',
                    },
                },
            }, {
                sort: [
                    ["createdTimestamp", 1]
                ]
            }).then(data => {
                expect(data.length).to.equal(2);
                expect(data[0].uid).to.equal(frame1.uid);
                expect(data[1].uid).to.equal(frame3.uid);
                return frameService.findAll({
                    _objects: {
                        $elemMatch: {
                            uid: 'mvdewync2',
                        },
                    },
                }, {
                    sort: [
                        ["createdTimestamp", 1]
                    ]
                });
            }).then(data => {
                expect(data.length).to.equal(2);
                expect(data[0].uid).to.equal(frame1.uid);
                expect(data[1].uid).to.equal(frame2.uid);
                return frameService.findAll({
                    _objects: {
                        $elemMatch: {
                            uid: 'bsigner',
                        },
                    },
                }, {
                    sort: [
                        ["createdTimestamp", 1]
                    ]
                });
            }).then(data => {
                expect(data.length).to.equal(1);
                expect(data[0].uid).to.equal(frame1.uid);
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
