import { SerializableObject, Relative3DPosition, SerializableMember } from '@openhps/core';
import { poso } from '../vocab';
import { UnitValueOptions } from './UnitValue';

SerializableObject({
    rdf: {},
})(Relative3DPosition);
SerializableMember({
    rdf: {
        predicate: [poso.zAxisValue],
        ...UnitValueOptions,
    },
})(Relative3DPosition.prototype, 'z');
