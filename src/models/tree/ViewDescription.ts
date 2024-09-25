import { SerializableObject } from '@openhps/core';
import { SerializableThing } from '../SerializableThing';
import { tree } from '../../vocab';

@SerializableObject({
    rdf: {
        type: tree.ViewDescription,
    },
})
export class ViewDescription extends SerializableThing {}
