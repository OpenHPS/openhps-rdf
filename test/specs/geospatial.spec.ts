import 'mocha';
import { RDFSerializer } from '../../src';
import { Absolute2DPosition, GeographicalPosition } from '@openhps/core';
import { Building, Floor, Room, SymbolicSpace } from '@openhps/geospatial';
import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';

describe('@openhps/geospatial', () => {
    RDFSerializer.initialize("geospatial");
    const building = new Building('PL9').setUID('pl9').setBounds({
        topLeft: new GeographicalPosition(50.8203726927966, 4.392241309019189, 83),
        width: 46.275,
        length: 37.27,
        height: 50,
        rotation: -34.04,
    });
    const floor = new Floor('PL9.3')
        .setUID('pl9_3')
        .setBuilding(building)
        .setFloorNumber(3)
        .setBounds([
            new Absolute2DPosition(0, 0),
            new Absolute2DPosition(0, 13.73),
            new Absolute2DPosition(10.102, 13.73),
            new Absolute2DPosition(10.102, 23.54),
            new Absolute2DPosition(0, 23.54),
            new Absolute2DPosition(0, 37.27),
            new Absolute2DPosition(44.33, 37.27),
            new Absolute2DPosition(44.33, 23.54),
            new Absolute2DPosition(28.06, 23.54),
            new Absolute2DPosition(28.06, 13.73),
            new Absolute2DPosition(44.33, 13.73),
            new Absolute2DPosition(44.33, 0),
        ]);
    const office1 = new Room('PL9.3.60')
        .setUID('pl9_3_60')
        .setFloor(floor)
        .setBounds([new Absolute2DPosition(0.57, 31.25), new Absolute2DPosition(4.75, 37.02)]);

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
        describe('building', () => {
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
    
            it('should still support geojson output', () => {
                deserialized.toGeoJSON(true).geometry.coordinates
            });
        });

        describe('office', () => {
            let serialized;
            let deserialized;
    
            before(() => {
                serialized = RDFSerializer.serialize(office1, {
                    baseUri: "https://maximvdw.solidweb.org/public/openhps.ttl#"
                });
                deserialized = RDFSerializer.deserialize(serialized);
            });
    
            it('should correct deserialize the correct space', () =>{
                expect(deserialized).to.be.instanceOf(Room);
            });
    
            it('should contain a geometry', () =>{
                expect((deserialized as Room).getBounds().length).to.be.gt(4);
            });
    
            it('should still support geojson output', () => {
               //console.log(deserialized.getBounds())
            });
        });
    });


});
