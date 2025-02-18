import { Absolute2DPosition, Accelerometer, DataObject, SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { RDFSerializer, geo, schema, rdf, rdfs, sosa, ssn, SerializableNamedNode, DataFactory, SerializableThing, Quad, Store } from '../../src';
import { IriString, xsd } from '../../src/rdf';
import { createChangeLog } from '@openhps/core';
describe('RDFSerializer', () => {

    describe('serialization', () => {
        @SerializableObject({
            rdf: {
                predicates: {
                    [rdf.type]: [schema.Game]
                }
            }
        })
        class InnerObject {
            @SerializableMember({
                rdf: {
                    predicate: rdfs.label,
                    language: "en"
                }
            })
            name: string;
        }

        @SerializableObject({
            rdf: {
                predicates: {
                    [rdf.type]: [geo.Point]
                }
            }
        })
        class SomeLocation {
            @SerializableMember()
            random: string;

            @SerializableMember({
                rdf: {
                    predicate: geo.lat,
                    datatype: xsd.decimal
                }
            })
            latitude: number;

            @SerializableMember({
                rdf: {
                    predicate: [geo.long, schema.longitude],
                    datatype: xsd.decimal
                }
            })
            longitude: number;

            @SerializableMember({
                rdf: {
                    predicate: rdfs.label,
                    language: "en"
                }
            })
            labelEN: string;

            @SerializableMember({
                rdf: {
                    predicate: rdfs.label,
                    language: "nl"
                }
            })
            labelNL: string;

            @SerializableMember({
                rdf: {
                    predicate: schema.game,
                }
            })
            inner: InnerObject;
        }

        @SerializableObject({
            rdf: {
                type: sosa.FeatureOfInterest
            }
        })
        class FeatureOfInterest extends SerializableNamedNode { 
            @SerializableArrayMember(() => ObservableProperty, {
                rdf: {
                    predicate: ssn.hasProperty
                }
            })
            properties?: ObservableProperty[] = [];
        }

        @SerializableObject({
            rdf: {
                type: sosa.ObservableProperty
            }
        })
        class ObservableProperty extends SerializableNamedNode {
            @SerializableMember({
                rdf: {
                    predicate: ssn.isPropertyOf,
                }
            })
            featureOfInterest: FeatureOfInterest;
        }     

        @SerializableObject({
            rdf: {
                type: sosa.ObservableProperty
            }
        })
        class ObservableProperty2 extends SerializableNamedNode {
            @SerializableMember({
                rdf: {
                    predicate: ssn.isPropertyOf,
                    serializer: false
                }
            })
            featureOfInterest: FeatureOfInterest;
        }     
        
        it('should not serialize to thing when serializer is false', () => {
            const obj = new ObservableProperty2("http://example.com/test");
            obj.featureOfInterest = new FeatureOfInterest("http://example.com/me");
            const serialized = RDFSerializer.serialize(obj);
            expect(serialized['predicates']).to.not.be.undefined;
            expect(serialized['predicates'][ssn.isPropertyOf]).to.not.be.undefined;
            expect(serialized['predicates'][ssn.isPropertyOf].length).to.equal(1);
            expect(serialized['predicates'][ssn.isPropertyOf][0].value).to.equal("http://example.com/me");
        });

        it('should not serialize an unconfigured member', () => {
            const obj = new SomeLocation();
            obj.random = "test";
            const serialized = RDFSerializer.serialize(obj);
            expect(serialized['predicates']).to.not.be.undefined;
            expect(Object.keys(serialized['predicates']).length).to.equal(1);
        });

        it('should serialize a date', () => {
            const date = new Date();
            const serialized = RDFSerializer.serialize(date);
            expect(serialized).to.not.be.undefined;
            expect(serialized.termType).to.equal("Literal");
        });

        it('should serialize a number', () => {
            const value = 5;
            const serialized = RDFSerializer.serialize(value);
            expect(serialized).to.not.be.undefined;
            expect(serialized.termType).to.equal("Literal");
        });
        
        it('should serialize a string', () => {
            const value = "test";
            const serialized = RDFSerializer.serialize(value);
            expect(serialized).to.not.be.undefined;
            expect(serialized.termType).to.equal("Literal");
        });

        it('should serialize single predicates per property', () => {
            const obj = new SomeLocation();
            obj.latitude = 50.40;
            obj.longitude = 10.50;
            const serialized = RDFSerializer.serialize(obj);
            expect(serialized['predicates']).to.not.be.undefined;
            expect(serialized['predicates'][geo.long]).to.not.be.undefined;
            expect(serialized['predicates'][schema.longitude]).to.not.be.undefined;
        });

        it('should serialize multiple predicates per property', () => {
            const obj = new SomeLocation();
            obj.longitude = 10.50;
            const serialized = RDFSerializer.serialize(obj);
            expect(serialized['predicates']).to.not.be.undefined;
            expect(serialized['predicates'][geo.long]).to.not.be.undefined;
            expect(serialized['predicates'][schema.longitude]).to.not.be.undefined;
        });

        it('should serialize multiple predicates with same IRI', () => {
            const obj = new SomeLocation();
            obj.labelEN = "Some location";
            obj.labelNL = "Een lokatie";
            const serialized = RDFSerializer.serialize(obj);
            expect(serialized['predicates']).to.not.be.undefined;
            expect(serialized['predicates'][rdfs.label]).to.not.be.undefined;
            expect(serialized['predicates'][rdfs.label].length).to.equal(2);
            expect(serialized['predicates'][rdfs.label][0].value).to.equal(obj.labelEN);
            expect(serialized['predicates'][rdfs.label][1].value).to.equal(obj.labelNL);
        });

        it('should serialize anonymous inner objects as blank nodes', () => {
            const obj = new SomeLocation();
            obj.inner = new InnerObject();
            obj.inner.name = "Game";
            const serialized = RDFSerializer.serialize(obj);
            // console.log(JSON.stringify(serialized, undefined, 2))
            // console.log(RDFSerializer.stringify(serialized))
            expect(serialized['predicates']).to.not.be.undefined;
            expect(serialized['predicates'][schema.game]).to.not.be.undefined;
            expect((serialized['predicates'][schema.game][0] as any).predicates).to.eql(RDFSerializer.serialize(obj.inner).predicates);
        });

        it('should serialize anonymous inner objects as blank nodes', () => {
            const obj = new SomeLocation();
            obj.inner = new InnerObject();
            obj.inner.name = "Game";
            const serialized = RDFSerializer.serialize(obj);
            // console.log(JSON.stringify(serialized, undefined, 2))
            // console.log(RDFSerializer.stringify(serialized))
            expect(serialized['predicates']).to.not.be.undefined;
            expect(serialized['predicates'][schema.game]).to.not.be.undefined;
            expect((serialized['predicates'][schema.game][0] as any).predicates).to.eql(RDFSerializer.serialize(obj.inner).predicates);
        });

        it('should serialize named nodes', async () => {
            const feature = new FeatureOfInterest("http://example.com/me");
            const serialized = RDFSerializer.serialize(feature);
            expect(serialized.value).to.equal("http://example.com/me");
        });

        it('should serialize circular members', async () => {
            const feature = new FeatureOfInterest("http://example.com/me");
            const property = new ObservableProperty("http://example.com/me/position");
            property.featureOfInterest = feature;
            feature.properties.push(property);

            const serialized = RDFSerializer.serialize(feature);
            console.log(await RDFSerializer.stringify(serialized, {
                baseUri: "http://example.com/"
            }))
        });

        it('should serialize to json-ld', async () => {
            const obj = new DataObject("mvdewync");
            obj.position = new Absolute2DPosition(50, 10);
            const serialized = await RDFSerializer.serializeToJSONLD(obj, "http://example.com/");
            expect(serialized).to.not.be.undefined;
        });

        it('should keep blank node ids between serialization and deserialization', async () => {

            @SerializableObject({
                rdf: {
                    type: "http://example.com#Test2"
                }
            })
            class TestObject2 {
                @SerializableMember({
                    rdf: {
                        predicate: rdfs.label
                    }
                })
                name: string;
            }

            @SerializableObject({
                rdf: {
                    type: "http://example.com#Test"
                }
            })
            class TestObject extends SerializableThing {
                @SerializableMember({
                    rdf: {
                        predicate: rdfs.label
                    }
                })
                name: string;
                @SerializableArrayMember(TestObject2, {
                    rdf: {
                        predicate: "http://example.com#hasObject"
                    }
                })
                test: TestObject2[] = [];
            }

            const obj = new TestObject("http://example.com#tMyObject");
            obj.name = "Test";
            const obj2 = new TestObject2();
            obj2.name = "Test2";
            obj.test.push(obj2);
            const turtle = await RDFSerializer.stringify(obj);
            const deserialized: TestObject = RDFSerializer.deserializeFromString("http://example.com#tMyObject", turtle);
            expect(deserialized).to.be.instanceOf(TestObject);
            expect(deserialized.test[0]).to.be.instanceOf(TestObject2);

            const subject = RDFSerializer.serializeToSubjects(obj);
            const deserializedSubject = RDFSerializer.subjectsToThing(subject, "http://example.com#tMyObject");
            const serializedStore = RDFSerializer.serializeToStore(deserializedSubject);
        });
    });

    describe('deserialization', () => {

        const turtle = `
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
        @prefix m3lite: <http://purl.org/iot/vocab/m3-lite#>.
        @prefix sosa: <http://www.w3.org/ns/sosa/>.
        @prefix ogc: <http://www.opengis.net/ont/geosparql#>.
        @prefix dcmi: <http://purl.org/dc/terms/>.
        @prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
        @prefix poso: <http://purl.org/poso/>.
        @prefix qudt: <http://qudt.org/schema/qudt/>.
        @prefix ssn: <http://www.w3.org/ns/ssn/>.
        @prefix ssns: <http://www.w3.org/ns/ssn/systems/>.
        @prefix schema: <http://schema.org/>.
        @prefix unit: <http://qudt.org/vocab/unit/>.
        
        <http://example.com#test> a m3lite:Accelerometer, sosa:FeatureOfInterest, ogc:SpatialObject, sosa:Sensor;
            dcmi:created "2023-04-26T12:38:32.595Z"^^xsd:dateTime;
            sosa:madeObservation [
          a m3lite:Acceleration, sosa:Observation;
          poso:xAxisValue [
          a qudt:QuantityValue;
          qudt:unit [];
          qudt:numericValue "1"^^xsd:double
        ];
          poso:yAxisValue [
          a qudt:QuantityValue;
          qudt:unit [];
          qudt:numericValue "2"^^xsd:double
        ];
          poso:zAxisValue [
          a qudt:QuantityValue;
          qudt:unit [];
          qudt:numericValue "3"^^xsd:double
        ];
          sosa:phenomenonTime "2023-04-26T12:38:32.595Z"^^xsd:dateTime;
          poso:hasAccuracy [
          a ssns:Accuracy;
          schema:minValue -1;
          schema:maxValue 1;
          schema:unitCode []
        ];
          schema:unitCode []
        ];
            ssns:hasSystemProperty [
          a ssns:Frequency, ssn:Property;
          schema:unitCode unit:HZ;
          schema:value 50
        ].
        `;

        it('should deserialize from turtle text', () => {
            const object = RDFSerializer.deserializeFromString("http://example.com#test", turtle);
            expect(object).to.be.instanceOf(Accelerometer);
        });

        it('should deserialize a literal', () => {
            const literal = DataFactory.literal("2024-11-18T14:57:30.826Z", DataFactory.namedNode(xsd.dateTime));
            const object = RDFSerializer.deserialize(literal);
            expect(object).to.be.instanceOf(Date);
        });

        // it('should deserialize from json-ld', async () => {
        //     const obj = new DataObject("mvdewync");
        //     obj.position = new Absolute2DPosition(50, 10);
        //     const serialized = await RDFSerializer.serializeToJSONLD(obj, "http://example.com/");
        //     const deserialized: DataObject = await RDFSerializer.deserializeFromJSONLD("http://example.com/mvdewync", serialized);
        //     expect(deserialized).to.be.instanceOf(DataObject);
        //     expect(deserialized.position).to.be.instanceOf(Absolute2DPosition);
        // });

        it('should deserialize a graph from Solid', (done) => {
            const dataset = {
                "graphs": {
                    "default": {
                        "http://localhost:3000/test1/nodes/poso/node.ttl": {
                            "type": "Subject",
                            "url": "http://localhost:3000/test1/nodes/poso/node.ttl",
                            "predicates": {
                                "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
                                    "namedNodes": [
                                        "http://purl.org/ldht/Node"
                                    ]
                                },
                                "http://purl.org/ldht/nodeID": {
                                    "literals": {
                                        "http://www.w3.org/2001/XMLSchema#double": [
                                            "-6032"
                                        ]
                                    }
                                },
                                "http://schema.org/potentialAction": {
                                    "blankNodes": [
                                        "_:b38_n3-0",
                                        "_:b38_n3-1",
                                        "_:b38_n3-2",
                                        "_:b38_n3-3"
                                    ]
                                },
                                "https://w3id.org/tree#relation": {
                                    "blankNodes": [
                                        "_:b38_n3-4"
                                    ]
                                }
                            }
                        },
                        "_:b38_n3-0": {
                            "type": "Subject",
                            "url": "_:b38_n3-0",
                            "predicates": {
                                "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
                                    "namedNodes": [
                                        "http://purl.org/ldht/PingAction"
                                    ]
                                },
                                "http://schema.org/target": {
                                    "namedNodes": [
                                        "http://localhost:3000/test1/nodes/poso/actions/"
                                    ]
                                }
                            }
                        },
                        "_:b38_n3-1": {
                            "type": "Subject",
                            "url": "_:b38_n3-1",
                            "predicates": {
                                "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
                                    "namedNodes": [
                                        "http://purl.org/ldht/AddNodeAction"
                                    ]
                                },
                                "http://schema.org/target": {
                                    "namedNodes": [
                                        "http://localhost:3000/test1/nodes/poso/actions/"
                                    ]
                                }
                            }
                        },
                        "_:b38_n3-2": {
                            "type": "Subject",
                            "url": "_:b38_n3-2",
                            "predicates": {
                                "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
                                    "namedNodes": [
                                        "http://purl.org/ldht/RemoveNodeAction"
                                    ]
                                },
                                "http://schema.org/target": {
                                    "namedNodes": [
                                        "http://localhost:3000/test1/nodes/poso/actions/"
                                    ]
                                }
                            }
                        },
                        "_:b38_n3-3": {
                            "type": "Subject",
                            "url": "_:b38_n3-3",
                            "predicates": {
                                "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
                                    "namedNodes": [
                                        "http://purl.org/ldht/StoreValueAction"
                                    ]
                                },
                                "http://schema.org/target": {
                                    "namedNodes": [
                                        "http://localhost:3000/test1/nodes/poso/actions/"
                                    ]
                                }
                            }
                        }
                    }
                },
                "type": "Dataset",
                "internal_resourceInfo": {
                    "sourceIri": "http://localhost:3000/test1/nodes/poso/node.ttl",
                    "isRawData": false,
                    "contentType": "text/turtle",
                    "linkedResources": {
                        "type": [
                            "http://www.w3.org/ns/ldp#Resource"
                        ],
                        "describedby": [
                            "http://localhost:3000/test1/nodes/poso/node.ttl.meta"
                        ],
                        "http://www.w3.org/ns/solid/terms#updatesViaStreamingHttp2023": [
                            "http://localhost:3000/.notifications/StreamingHTTPChannel2023/http%3A%2F%2Flocalhost%3A3000%2Ftest1%2Fnodes%2Fposo%2Fnode.ttl"
                        ],
                        "acl": [
                            "http://localhost:3000/test1/nodes/poso/node.ttl.acl"
                        ],
                        "http://www.w3.org/ns/solid/terms#storageDescription": [
                            "http://localhost:3000/test1/.well-known/solid"
                        ]
                    },
                    "aclUrl": "http://localhost:3000/test1/nodes/poso/node.ttl.acl",
                    "permissions": {
                        "user": {
                            "read": true,
                            "append": true,
                            "write": true,
                            "control": true
                        },
                        "public": {
                            "read": true,
                            "append": false,
                            "write": false,
                            "control": false
                        }
                    }
                }
            };
            const quads: Quad[] = Object.keys(dataset.graphs)
                .map((key) => {
                    const graph = dataset.graphs[key];
                    return RDFSerializer.subjectsToQuads(Object.values(graph));
                })
                .reduce((a, b) => a.concat(b), []);
            const store = new Store(quads); 
            // console.log(quads);
            RDFSerializer.deserializeFromStore(DataFactory.namedNode("http://localhost:3000/test1/nodes/poso/node.ttl"), store);
            done();
        });
    });

    describe('conversion', () => {
        it('should convert a thing to a list of quads', () => {
            const object = new DataObject("test");
            const position = new Absolute2DPosition(1, 2);
            object.position = position;
            const thing = RDFSerializer.serialize(object);
            const quads = RDFSerializer.thingToQuads(thing);
            expect(quads.length).to.be.greaterThan(10);
        });

        it('should convert a thing to a list of subjects', () => {
            const object = new DataObject("test");
            const position = new Absolute2DPosition(1, 2);
            object.position = position;
            const thing = RDFSerializer.serialize(object, {
                baseUri: "http://example.com/"
            });
            const subjects = RDFSerializer.thingToSubjects(thing);
            expect(subjects.length).to.equal(1);
        });

        it('should convert subjects to thing', () => {
            const object = new DataObject("test");
            const position = new Absolute2DPosition(1, 2);
            object.position = position;
            const thing = RDFSerializer.serialize(object, {
                baseUri: "http://example.com/"
            });
            const subjects = RDFSerializer.thingToSubjects(thing);
            const newThing = RDFSerializer.subjectsToThing(subjects, thing.value as IriString);
            const deserialized = RDFSerializer.deserialize(newThing, DataObject);
        });
    });

    describe('changelog', () => {
        it('should serialize a changelog', () => {
            @SerializableObject({
                rdf: {
                    type: "http://example.com#TestEntry"
                }
            })
            class TestObjectEntry { 
                @SerializableMember({
                    rdf: {
                        predicate: "http://example.com#key"
                    }
                })
                key: string;

                constructor(key?: string) {
                    this.key = key;
                }
            }

            @SerializableObject({
                rdf: {
                    type: "http://example.com#Test"
                }
            })
            class TestObject {
                @SerializableArrayMember(TestObjectEntry, {
                    rdf: {
                        predicate: "http://example.com#members"
                    }
                })
                members: TestObjectEntry[] = [];
            }

            const object = createChangeLog(new TestObject());
            object.members.push(new TestObjectEntry("test"));
            const changelog = RDFSerializer.serializeToChangeLog(object);
            expect(changelog).to.not.be.undefined;
            expect(changelog.additions.length).to.be.greaterThan(0);
            console.log(changelog.additions);
        });
    });
});
