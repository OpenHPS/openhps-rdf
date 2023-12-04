import { SerializableObject, Absolute3DPosition, SerializableMember } from '@openhps/core';
import { poso } from '../vocab';
import { UnitValueOptions } from './UnitValue';

SerializableObject({
    rdf: {},
})(Absolute3DPosition);
SerializableMember({
    rdf: {
        predicate: [poso.zAxisValue],
        ...UnitValueOptions,
    },
})(Absolute3DPosition.prototype, 'z');
