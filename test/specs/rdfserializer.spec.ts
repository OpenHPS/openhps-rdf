import { SerializableMember, SerializableObject } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { RDFSerializer, geo, schema, rdf, rdfs } from '../../src';
import { xsd } from '../../src/decorators';

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
    });

});
