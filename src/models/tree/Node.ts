import { SerializableArrayMember, SerializableMember, SerializableObject } from "@openhps/core";
import { tree } from "../../vocab";
import { SerializableThing } from "../SerializableThing";
import { Relation } from "./Relation";

@SerializableObject({
    rdf: {
        type: tree.Node,
    }
})
export class Node extends SerializableThing {
    @SerializableArrayMember(Relation, {
        rdf: {
            predicate: tree.relation,
        },
    })
    relations: Relation[] = [];
}
