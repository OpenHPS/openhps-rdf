import '@openhps/core';
import './AbsolutePosition';
import './GeographicalPosition';
import './Absolute3DPosition';
import './Absolute2DPosition';
import './RelativePosition';
import './RelativeAngle';
import './RelativeDistance';

import './DataObject';
import './DataFrame';
import './ReferenceSpace';

import './Orientation';

import './Unit';
import './SensorValue';
import './Accuracy';
import './LinearVelocity';
import './AngularVelocity';
import './UnitValue';

/**
 *
 * @param path
 */
function moduleIsAvailable(path) {
    try {
        require.resolve(path);
        return true;
    } catch (e) {
        return false;
    }
}

if (moduleIsAvailable('@openhps/rf')) {
    import('./rf');
}

if (moduleIsAvailable('@openhps/geospatial')) {
    import('./geospatial');
}

if (moduleIsAvailable('@openhps/fingerprinting')) {
    import('./fingerprinting');
}

if (moduleIsAvailable('@openhps/video')) {
    import('./video');
}
