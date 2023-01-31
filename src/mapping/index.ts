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

if (require('@openhps/rf') !== undefined) {
    import('./rf');
}

if (require('@openhps/geospatial') !== undefined) {
    import('./geospatial');
}
