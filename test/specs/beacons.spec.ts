import 'mocha';
import { RDFSerializer } from '../../src';
import axios from 'axios';

describe('openhps2021 beacons.ttl', () => {
    it('should load a beacon', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons.ttl";
        axios.get(uri).then(res => {
            const beacon07 = RDFSerializer.deserializeFromString(`${uri}#BEACON_07`, res.data);
            const beacon11 = RDFSerializer.deserializeFromString(`${uri}#BEACON_11`, res.data);
            console.log(beacon11)
            done();
        });
    });

    it('should load a symbolic space', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons.ttl";
        axios.get(uri).then(res => {
            const pl9 = RDFSerializer.deserializeFromString(`${uri}#pl9`, res.data);
            console.log(pl9)
            done();
        });
    });
});
