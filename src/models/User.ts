import { SerializableMember, SerializableObject } from '@openhps/core';
import { foaf, schema, vcard } from '../vocab';
import { IriString } from '../rdf';

@SerializableObject({
    rdf: {
        type: [foaf.Person, vcard.Individual, schema.Person],
    },
})
export class User {
    @SerializableMember({
        rdf: {
            predicate: [vcard.given_name, foaf.givenname, foaf.firstName],
        },
    })
    firstName: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.family_name, foaf.surname, foaf.familyName],
        },
    })
    lastName: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.fn, vcard.hasName, foaf.name],
        },
    })
    private _formattedName: string;

    get name(): string {
        if (this._formattedName !== undefined) {
            return this._formattedName;
        } else if (this.firstName !== undefined) {
            return this.lastName ? `${this.firstName} ${this.lastName}` : this.firstName;
        } else if (this.nickname) {
            return this.nickname;
        }
        return undefined;
    }

    @SerializableMember({
        rdf: {
            predicate: [foaf.nick, vcard.nickname],
        },
    })
    nickname?: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.hasPhoto],
        },
    })
    picture?: IriString;
}
