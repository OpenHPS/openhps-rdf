import { SerializableObject } from '@openhps/core';
import { tree } from '../../vocab';
import { SerializableThing } from '../SerializableThing';

@SerializableObject({
    rdf: {
        type: tree.Collection,
    },
})
export class Collection extends SerializableThing {}
