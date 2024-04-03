import { Accelerometer, SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { RDFSerializer, geo, schema, rdf, rdfs, sosa, ssn, SerializableNamedNode } from '../../src';
import { xsd } from '../../src/rdf';

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
        
        it('should not serialize an unconfigured member', () => {
            const obj = new SomeLocation();
            obj.random = "test";
            const serialized = RDFSerializer.serialize(obj);
            expect(serialized['predicates']).to.not.be.undefined;
            expect(Object.keys(serialized['predicates']).length).to.equal(1);
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

    });

});
