import { SerializableObject, Absolute2DPosition, SerializableMember } from '@openhps/core';
import { poso } from '../vocab';
import { UnitValueOptions } from './UnitValue';

SerializableObject({
    rdf: {},
})(Absolute2DPosition);
SerializableMember({
    rdf: {
        predicate: [poso.xAxisValue],
        ...UnitValueOptions,
    },
})(Absolute2DPosition.prototype, 'x');
SerializableMember({
    rdf: {
        predicate: [poso.yAxisValue],
        ...UnitValueOptions,
    },
})(Absolute2DPosition.prototype, 'y');
