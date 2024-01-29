import 'mocha';
import { DataFactory, DefaultEngine, IriString, NamedNode, Parser, Quad, RDFSerializer, SPARQLDataDriver, Store, ogc, schema, xsd } from '../../src';
import axios from 'axios';
import { expect } from 'chai';
import { DataObject, DataSerializer, SerializableMember, SerializableObject } from '@openhps/core';
import { Geometry } from '../../src/models/Geometry';
import { SymbolicSpace } from '@openhps/geospatial';

describe('openhps2021 beacons.ttl', () => {
    it('should load a beacon', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons.ttl";
        axios.get(uri).then(res => {
            const beacon07 = RDFSerializer.deserializeFromString(`${uri}#BEACON_07`, res.data);
            const beacon11 = RDFSerializer.deserializeFromString(`${uri}#BEACON_11`, res.data);
            expect(beacon07).to.not.be.undefined;
            expect(beacon11).to.not.be.undefined;
            done();
        });
    });

    it('should load a symbolic space', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons.ttl";
        axios.get(uri).then(res => {
            const pl9 = RDFSerializer.deserializeFromString(`${uri}#pl9`, res.data);
            expect(pl9).to.not.be.undefined;
            done();
        });
    });

    it('should serialize all environments', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons_v2.ttl";
        const store = new Store();
        axios.get(uri).then(res => {
            const parser = new Parser();
            const quads: Quad[] = parser.parse(res.data);
            store.addQuads(quads)
            const driver = new SPARQLDataDriver(SymbolicSpace, {
                sources: [store],
                engine: DefaultEngine,
            });
            const query = `
                PREFIX sembeacon: <http://purl.org/sembeacon/>
                PREFIX ssn: <http://www.w3.org/ns/ssn/>
                PREFIX sosa: <http://www.w3.org/ns/sosa/>
                PREFIX ogc: <http://www.opengis.net/ont/geosparql#>

                SELECT ?space {
                    ?space a ssn:Deployment .
                    ?space a ogc:SpatialObject .
                }`;
            return driver.queryBindings(query);
        }).then((bindings) => {
                const serialized = [];
                bindings.forEach((binding) => {
                    const spaceURI = (binding.get('space') as NamedNode).id as IriString;
                    const space: SymbolicSpace<any> = RDFSerializer.deserializeFromStore(
                        DataFactory.namedNode(spaceURI),
                        store,
                    );
                    serialized.push(DataSerializer.serialize(space));
                });
                // Deserialize
                serialized.forEach((serializedSpace) => {
                    const space = DataSerializer.deserialize(serializedSpace);
                    expect(space).to.not.be.undefined;
                });
            done();
        }).catch(done);
    });

    it('should load non serializable data', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons_v2.ttl";
        axios.get(uri).then(res => {
            const pl9_3 = RDFSerializer.deserializeFromString(`${uri}#pl9_3`, res.data);
            expect(pl9_3).to.not.be.undefined;
            expect((pl9_3 as any).rdf.predicates[schema.hasMap]).to.not.be.undefined;
            expect((pl9_3 as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage]).to.not.be.undefined;
            expect((pl9_3 as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage][0]
                .predicates[ogc.hasGeometry]).to.not.be.undefined;
            const serialized = DataSerializer.serialize(pl9_3);
            expect(serialized.__rdf).to.not.be.undefined;
            const deserialized = DataSerializer.deserialize(serialized);
            expect(deserialized).to.not.be.undefined;
            expect((deserialized as any).rdf.predicates[schema.hasMap]).to.not.be.undefined;
            expect((deserialized as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage]).to.not.be.undefined;
            expect((deserialized as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage][0]
                .predicates[ogc.hasGeometry]).to.not.be.undefined;
            done();
        }).catch(done);
    });

    it('should load non serializable data from a store', (done) => {
        @SerializableObject({
            rdf: {
                type: [schema.Place, ogc.Feature],
            },
        })
        class Place {
            @SerializableMember({
                rdf: {
                    predicate: ogc.hasGeometry,
                },
            })
            geometry: Geometry;
        }

        
        @SerializableObject({
            rdf: {
                type: schema.Map__workaround,
            },
        })
        class MapObject extends DataObject {
            @SerializableMember({
                rdf: {
                    predicate: schema.image,
                    datatype: xsd.anyURI,
                },
            })
            image: string;

            @SerializableMember({
                rdf: {
                    predicate: schema.spatialCoverage,
                },
            })
            coverage: Place;
        }


        const uri = "https://sembeacon.org/examples/openhps2021/beacons_v2.ttl";
        axios.get(uri).then(res => {
            const parser = new Parser();
            const quads: Quad[] = parser.parse(res.data);
            const store = new Store(quads);
            
            const pl9_3 = RDFSerializer.deserializeFromStore(DataFactory.namedNode(`${uri}#pl9_3`), store);
            expect(pl9_3).to.not.be.undefined;
            expect((pl9_3 as any).rdf.predicates[schema.hasMap]).to.not.be.undefined;
            expect((pl9_3 as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage]).to.not.be.undefined;
            expect((pl9_3 as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage][0]
                .predicates[ogc.hasGeometry]).to.not.be.undefined;
            const serialized = DataSerializer.serialize(pl9_3);
            expect(serialized.__rdf).to.not.be.undefined;
            const deserialized = DataSerializer.deserialize(serialized);
            expect(deserialized).to.not.be.undefined;
            expect((deserialized as any).rdf.predicates[schema.hasMap]).to.not.be.undefined;
            expect((deserialized as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage]).to.not.be.undefined;
            expect((deserialized as any).rdf
                .predicates[schema.hasMap][0]
                .predicates[schema.spatialCoverage][0]
                .predicates[ogc.hasGeometry]).to.not.be.undefined;
            const mapObject = RDFSerializer.deserialize((deserialized as any).rdf.predicates[schema.hasMap][0], MapObject);
            expect(mapObject).to.not.be.undefined;
            const mapObject2 = RDFSerializer.deserialize((pl9_3 as any).rdf.predicates[schema.hasMap][0], MapObject);
            expect(mapObject2).to.not.be.undefined;
            done();
        }).catch(done);
    });
});
