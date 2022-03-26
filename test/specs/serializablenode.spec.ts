import { SerializableObject } from "@openhps/core";
import { expect } from "chai";
import { RDFSerializer, SerializableNamedNode, sosa } from "../../src";

describe('SerializableNamedNode', () => {
    @SerializableObject({
        rdf: {
            type: sosa.ObservableProperty
        }
    })
    class ObservableProperty extends SerializableNamedNode {

    }

    it('should use the uri from the N3 namednode as its own', async () => {
        const property = new ObservableProperty("http://maximvdw.solidweb.org/profile/card#me/property");
        const thing = await RDFSerializer.serialize(property);
        expect(thing.value).to.equal("http://maximvdw.solidweb.org/profile/card#me/property");
    });
});
