import { SerializableObject, SerializableMember, Relative2DPosition } from '@openhps/core';
import { poso } from '../vocab';
import { UnitValueOptions } from './UnitValue';

SerializableObject({
    rdf: {},
})(Relative2DPosition);
SerializableMember({
    rdf: {
        predicate: [poso.xAxisValue],
        ...UnitValueOptions,
    },
})(Relative2DPosition.prototype, 'x');
SerializableMember({
    rdf: {
        predicate: [poso.yAxisValue],
        ...UnitValueOptions,
    },
})(Relative2DPosition.prototype, 'y');
