import '@openhps/rdf';
import { DataObject, SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { foaf } from '@openhps/rdf';
import { Project } from './Project';

@SerializableObject({
    rdf: {
        type: foaf.Person,
        serializer: (object: Person, baseUri?: string) => {
            return {
                value: `${object.firstName}_${object.familyName}`.replace(/\s/g, "_")
            }
        }
    }
})
export class Person extends DataObject {
    @SerializableMember({
        rdf: {
            predicate: foaf.firstName
        }
    })
    firstName: string;

    @SerializableMember({
        rdf: {
            predicate: foaf.familyName
        }
    })
    familyName: string;

    @SerializableMember({
        rdf: {
            predicate: foaf.nick
        }
    })
    nick?: string;

    @SerializableArrayMember(Project, {
        rdf: {
            predicate: foaf.currentProject
        }
    })
    projects?: Project[];
}
