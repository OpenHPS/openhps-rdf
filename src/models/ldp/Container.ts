import { SerializableObject } from "@openhps/core";
import { ldp } from "../../vocab";
import { SerializableThing } from "../SerializableThing";

@SerializableObject({
    rdf: {
        type: ldp.Container,
    }
})
export class Container extends SerializableThing {

}
