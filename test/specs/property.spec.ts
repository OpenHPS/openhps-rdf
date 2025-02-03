import { Absolute2DPosition } from "@openhps/core";
import { rdfs, RDFSerializer } from "../../src";
import { expect } from 'chai';
import { Property } from "../../src/";

describe('Property', () => {
    describe('construction', () => {
        it('shoud support fields of type RelativePosition, AbsolutePosition, SensorValue', () => {
            const absolutePosition = new Absolute2DPosition();
            // absolutePosition.label = 'Position';
        });
    });

    describe('serialization', () => {
        it('should serialize an absolute position as a property', () => {
            const absolutePosition = new Absolute2DPosition();
            (absolutePosition as any).label = 'Position';
            const serialized = RDFSerializer.serialize(absolutePosition);
            expect(serialized.predicates[rdfs.label]).to.not.be.undefined;
        });
    });
});
