import { SerializableMember, SerializableObject } from '@openhps/core';
import { foaf, vcard } from '../vocab';

@SerializableObject({
    rdf: {
        type: foaf.Person,
    },
})
export class User {
    @SerializableMember({
        rdf: {
            predicates: [vcard.given_name, foaf.givenname],
        },
    })
    firstName: string;

    @SerializableMember({
        rdf: {
            predicates: [vcard.family_name, foaf.surname],
        },
    })
    lastName: string;

    @SerializableMember({
        rdf: {
            predicates: [vcard.fn, foaf.name],
        },
    })
    private _formattedName: string;

    get name(): string {
        return this._formattedName ?? `${this.firstName} ${this.lastName}`;
    }

    @SerializableMember({
        rdf: {
            predicates: [foaf.nick],
        },
    })
    nickname?: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.hasPhoto],
        },
    })
    picture?: string;
}
