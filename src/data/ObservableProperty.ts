import { SerializableMember, SerializableObject } from '@openhps/core';
import { sosa, rdfs } from '../vocab';

@SerializableObject({
    rdf: {
        type: sosa.ObservableProperty,
    },
})
export class ObservableProperty {
    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: 'en',
        },
    })
    label?: string;
}
