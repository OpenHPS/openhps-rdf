import 'mocha';
import { RDFSerializer } from '../../src';
import { GeographicalPosition } from '@openhps/core';
import { Building, SymbolicSpace } from '@openhps/geospatial';
import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';

describe('@openhps/geospatial', () => {
    RDFSerializer.initialize("geospatial");
    const building = new Building("Pleinlaan 9")
        .setBounds({
            topLeft: new GeographicalPosition(
                50.8203726927966, 4.392241309019189
            ),
            width: 46.275,
            length: 37.27,
            rotation: -34.04
        });

    describe('serialization', () => {
        const serialized = RDFSerializer.serialize(building, {
            baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
        });

        it('should serialize models', async () => {
            const turtle = await RDFSerializer.stringify(serialized, {
                format: 'text/turtle',
                prettyPrint: true
            });
            const geojsonStr = fs.readFileSync(
                path.join(__dirname, "../data/spaces.geo.json"), 
                { encoding: 'utf-8' }
            );
            const geojson = JSON.parse(geojsonStr);
            const spaces = geojson.features.map(feature => SymbolicSpace.fromGeoJSON(feature));
            Object.values(spaces).forEach(async space => {
                const serialized = RDFSerializer.serialize(space, {
                    baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
                });
                const turtle = await RDFSerializer.stringify(serialized, {
                    format: 'text/turtle',
                    prettyPrint: true
                });
            })
        });
    });

    describe('deserialization', () => {
        let serialized;
        let deserialized;

        before(() => {
            serialized = RDFSerializer.serialize(building, {
                baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
            });
            deserialized = RDFSerializer.deserialize(serialized);
        });

        it('should correct deserialize the correct space', () =>{
            expect(deserialized).to.be.instanceOf(Building);
        });

        it('should contain a geometry', () =>{
            expect((deserialized as Building).getBounds().length).to.be.gt(4);
        });

    });


});
