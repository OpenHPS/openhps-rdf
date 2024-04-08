import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { foaf, schema, vcard } from '../vocab';
import { IriString, xsd } from '../rdf';
import { DataFactory } from 'n3';
import { SerializableThing } from './SerializableThing';

@SerializableObject({
    rdf: {
        type: [foaf.Person, vcard.Individual, schema.Person],
    },
})
export class User extends SerializableThing {
    @SerializableMember({
        rdf: {
            predicate: [foaf.title, vcard.title],
        },
    })
    title?: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.given_name, foaf.givenname, foaf.firstName],
        },
    })
    firstName: string;

    @SerializableMember({
        rdf: {
            predicate: [schema.birthDate, vcard.bday, foaf.birthday],
            datatype: xsd.date,
        },
    })
    birthDate: Date;

    @SerializableMember({
        rdf: {
            predicate: [vcard.family_name, foaf.surname, foaf.familyName],
        },
    })
    lastName: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.role, vcard.title, schema.jobTitle],
        },
    })
    jobTitle?: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.hasEmail, foaf.mbox, schema.email],
        },
    })
    email?: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.fn, vcard.hasName, foaf.name, schema.name],
        },
    })
    private _formattedName: string;

    @SerializableMember()
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

    set name(value: string) {
        this._formattedName = value;
    }

    @SerializableMember({
        rdf: {
            predicate: [foaf.nick, vcard.nickname],
        },
    })
    nickname?: string;

    @SerializableMember({
        rdf: {
            predicate: [vcard.hasPhoto, foaf.img, schema.image, foaf.depiction],
            serializer: (value: string) => {
                return DataFactory.namedNode(value);
            },
        },
    })
    picture?: IriString;

    @SerializableArrayMember(String, {
        rdf: {
            predicate: [foaf.account],
        },
    })
    account?: string[];

    @SerializableMember({
        rdf: {
            predicate: [foaf.workplaceHomepage],
        },
    })
    workplaceHomepage?: IriString;
}
