import 'mocha';
import { RDFSerializer } from '../../src';
import axios from 'axios';

describe('openhps2021 beacons.ttl', () => {
    it('should load a beacon', (done) => {
        const uri = "https://sembeacon.org/examples/openhps2021/beacons.ttl";
        axios.get(uri).then(res => {
            const data = RDFSerializer.deserializeFromString(`${uri}#BEACON_07`, res.data);
            done();
        });
    });
});
