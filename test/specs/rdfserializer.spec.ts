import { SerializableMember, SerializableObject } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { RDFSerializer, geo, schema, rdf, rdfs } from '../../src';
import { xsd } from '../../src/decorators/SerializableMember';

describe('RDFSerializer', () => {
    describe('registration', () => {

    });

    describe('serialization', () => {
        @SerializableObject({
            rdf: {
                type: geo.Point
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
        }

        it('should not serialize an unconfigured member', () => {
            const obj = new SomeLocation();
            obj.random = "test";
            const serialized = RDFSerializer.serialize(obj);
            expect(serialized['predicates']).to.not.be.undefined;
            expect(Object.keys(serialized['predicates']).length).to.equal(0);
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
            console.log(JSON.stringify(serialized, undefined, 2));
            expect(serialized['predicates']).to.not.be.undefined;
            expect(serialized['predicates'][rdfs.label]).to.not.be.undefined;
        });
    });

});
