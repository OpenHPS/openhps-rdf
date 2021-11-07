import '@openhps/rdf';
import { SerializableMember, SerializableObject } from "@openhps/core";
import { foaf } from "@openhps/rdf";

@SerializableObject({
    rdf: {
        type: foaf.Project
    }
})
export class Project {
    @SerializableMember({
        rdf: {
            predicate: foaf.title
        }
    })
    code: string;

    @SerializableMember({
        rdf: {
            predicate: foaf.name
        }
    })
    name: string;
}
