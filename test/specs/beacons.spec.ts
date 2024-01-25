import 'mocha';
import { RDFSerializer, schema } from '../../src';
import axios from 'axios';
import { expect } from 'chai';
import { DataSerializer } from '@openhps/core';

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

    it('should load non serializable data', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons_v2.ttl";
        axios.get(uri).then(res => {
            const pl9_3 = RDFSerializer.deserializeFromString(`${uri}#pl9_3`, res.data);
            expect(pl9_3).to.not.be.undefined;
            expect((pl9_3 as any).rdf.predicates[schema.hasMap]).to.not.be.undefined;
            const serialized = DataSerializer.serialize(pl9_3);
            console.log(serialized);
            const deserialized = DataSerializer.deserialize(serialized);
            expect(deserialized).to.not.be.undefined;
            expect((deserialized as any).rdf.predicates[schema.hasMap]).to.not.be.undefined;
            console.log(deserialized)
            done();
        });
    });
});
