import { 
    DataObject, 
    DataObjectService, 
    GeographicalPosition, 
    Absolute2DPosition, 
    Orientation, 
    AngleUnit, 
    DataFrameService,
    DataFrame,
} from '@openhps/core';
import 'mocha';
import { Parser, Term, DataFactory, Store, ogc, SPARQLDataDriver, DefaultEngine, Observation } from '../../src';
import { expect } from 'chai';
const wkt = require('wkt');

describe('SPARQLDataDriver (N3 store)', () => {
    let service: DataObjectService<DataObject>;
    let frameService: DataFrameService<DataFrame>;
    const object1 = new DataObject('mvdewync', 'Maxim');
    const object2 = new DataObject('bsigner', 'Beat');
    const object3 = new DataObject('mvdewync2', 'Maxim');
    const frame1 = new DataFrame();
    frame1.addObject(object1);
    frame1.addObject(object2);
    frame1.addObject(object3);
    const frame2 = new DataFrame();
    frame2.addObject(object3);
    const frame3 = new DataFrame();
    frame3.addObject(object1);

    before((done) => {
        service = new DataObjectService(new SPARQLDataDriver(DataObject, {
            sources: [new Store()],
            baseUri: "http://openhps.org/terms#",
            engine: DefaultEngine
        }));
        frameService = new DataFrameService(new SPARQLDataDriver(DataFrame, {
            sources: [new Store()],
            baseUri: "http://openhps.org/terms#",
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
            const now = Date.now();
            const obj1 = new DataObject("mvdewync", "Maxim Van de Wynckel")
                .setPosition(new Absolute2DPosition(5, 1));
            obj1.createdTimestamp = now + 1;
            const obj2 = new DataObject("bsigner", "Beat Signer")
                .setPosition(new Absolute2DPosition(5, 2));
            obj2.createdTimestamp = now + 2;
            const obj3 = new DataObject("johndoe", "John Doe")
                .setPosition(new GeographicalPosition(50.20, 30.10));
            obj3.position.orientation = Orientation.fromEuler({
                yaw: 90,
                pitch: 0,
                roll: 0,
                unit: AngleUnit.DEGREE
            });
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
            service.findByUID("mvdewync").then(object => {
                object.setPosition(new Absolute2DPosition(5, 3));
                object.position.orientation = Orientation.fromEuler({
                    yaw: 180,
                    pitch: 0,
                    roll: 0,
                    unit: AngleUnit.DEGREE
                });
                object.createdTimestamp = Date.now() + 4;
                return service.insertObject(object);
            }).then(() => {
                return service.findByUID("mvdewync");
            }).then(data => {
                expect((data.position as Absolute2DPosition).x).to.equal(5);
                expect((data.position as Absolute2DPosition).y).to.equal(3);
                done()
            }).catch(done);
        });
    });

    describe('extension functions', () => {
        it('should perform a raw query', (done) => {
            ((service['driver'] as any)['engine']).queryBindings(`
            PREFIX geo: <http://www.opengis.net/ont/geosparql#>
            PREFIX geof: <http://www.opengis.net/def/function/geosparql/>

            SELECT ?geoJSON
            WHERE {
                BIND (("""<http://www.opengis.net/def/crs/OGC/1.3/CRS84>
                        Point Z(-83.4 34.0 0)"""^^geo:wktLiteral) AS ?testgeom)
                BIND(geof:asGeoJSON(?testgeom) AS ?geoJSON)
            }
            `, {
                sources: [(service['driver'] as any).options.sources[0]],
                extensionFunctions: {
                    'http://www.opengis.net/def/function/geosparql/asGeoJSON'(args: Term[]) {
                        const wktLiteral = args[0];
                        const pattern = /^<(https?:\/\/.*)>/g;
                        let wktString: string = wktLiteral.value.replace(pattern, "").replace("\n", "").trim();
                        const matches = pattern.exec(wktLiteral.value);
                        const crs = matches.length > 0 ? matches[0] : 'http://www.opengis.net/def/crs/OGC/1.3/CRS84';
                        const geoJSON = wkt.parse(wktString);
                        return DataFactory.literal(JSON.stringify(geoJSON), ogc.geoJSONLiteral);
                    }
                }
            })
            .then((stream) => {
                stream.on('data', (binding) => {
                    console.log(binding.get('geoJSON').value);
                });
                stream.on('end', () => {
                    done();
                });
                stream.on('error', done);
            }).catch(done);
        });

        it('should perform a raw query from multiple sources', (done) => {
            const store = new Store(new Parser().parse(`
            @prefix : <http://example.com/> .
            @prefix qudt: <http://qudt.org/schema/qudt/> .
            @prefix ssn: <http://www.w3.org/ns/ssn/> .
            @prefix sosa: <http://www.w3.org/ns/sosa/> .
            @prefix qudt-unit: <http://qudt.org/vocab/unit/> .
            @prefix geo: <http://www.opengis.net/ont/geosparql#> .
            @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

            :1648736932937 a sosa:Observation;
                sosa:hasResult
                    [
                    a geo:Geometry;
                    geo:asWKT """<http://www.opengis.net/def/crs/OGC/1.3/CRS84>
                        Point Z(46.641890130 5.893628199 15)"""^^geo:wktLiteral ;
                    geo:coordinateDimension 3 ;
                    geo:hasSpatialAccuracy
                        [ a qudt:QuantityValue ;
                            qudt:numericValue 598 ;
                            qudt:unit qudt-unit:CentiM ]
                    ];
                sosa:observedProperty <> ;
                sosa:resultTime "2022-03-31T14:28:52.937Z"^^xsd:dateTime .
            `));

            ((service['driver'] as any)['engine']).queryBindings(`
            PREFIX geo: <http://www.opengis.net/ont/geosparql#>
            PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
            PREFIX qudt: <http://qudt.org/schema/qudt/>
            PREFIX ssn: <http://www.w3.org/ns/ssn/>
            PREFIX sosa: <http://www.w3.org/ns/sosa/>
            PREFIX qudt-unit: <http://qudt.org/vocab/unit/>

            SELECT ?posGeoJSON ?datetime ?accuracy {
                ?observation sosa:hasResult ?pos ;
                  sosa:resultTime ?datetime .
                ?pos geo:hasSpatialAccuracy ?spatialAccuracy ;
                  geo:asWKT ?posWKT .
                BIND(geof:asGeoJSON(?posWKT) AS ?posGeoJSON)
                {
                  ?spatialAccuracy qudt:numericValue ?value ;
                    qudt:unit ?unit .
                  ?unit qudt:conversionMultiplier ?multiplier .
                  BIND(COALESCE(?offset, 0) as ?offset)
                  OPTIONAL { ?unit qudt:conversionOffset ?offset }
                  BIND(((?value * ?multiplier) + ?offset) 
                    AS ?accuracy)
                  FILTER(?accuracy < 6)
                }
            } ORDER BY DESC(?datetime) LIMIT 20
            `, {
                sources: [store, 'http://qudt.org/2.1/vocab/unit'],
                extensionFunctions: {
                    'http://www.opengis.net/def/function/geosparql/asGeoJSON'(args: Term[]) {
                        const wktLiteral = args[0];
                        const pattern = /^<(https?:\/\/.*)>/g;
                        let wktString: string = wktLiteral.value.replace("\n", "").replace(pattern, "").trim();
                        const matches = pattern.exec(wktLiteral.value);
                        const crs = matches.length > 0 ? matches[0] : 'http://www.opengis.net/def/crs/OGC/1.3/CRS84';
                        const geoJSON = wkt.parse(wktString);
                        return DataFactory.literal(JSON.stringify(geoJSON), ogc.geoJSONLiteral);
                    }
                }
            })
            .then((stream) => {
                stream.on('data', (binding) => {
                    console.log(binding.get('posGeoJSON').value, binding.get('datetime').value,  binding.get('accuracy').value);
                });
                stream.on('end', () => {
                    done();
                });
                stream.on('error', done);
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
                }]
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

            it('should check lte: <= using a date', (done) => {
                service.findAll({
                    resultTime: {
                        $lte: Date.now()
                    }
                }, {
                    debug: false,
                    dataType: Observation
                } as any).then(data => {
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
                    ["displayName", 1]
                ]
            }).then(data => {
                expect(data.length).to.equal(2);
                expect(data[1].displayName).to.equal("John Doe");
                expect(data[0].displayName).to.equal("Beat Signer");
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

    // describe('array query', () => {
    //     it('should support $elemMatch', (done) => {
    //         frameService.findAll({
    //             _objects: {
    //                 $elemMatch: {
    //                     uid: 'mvdewync',
    //                 },
    //             },
    //         }).then(data => {
    //             console.log(data)
    //             expect(data.length).to.equal(2);
    //         }).catch(done);
    //     });
    // });

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
