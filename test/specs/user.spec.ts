import { expect } from "chai";
import { IriString, RDFSerializer, Subject, User } from "../../src";

const profile: string = `
@prefix : <https://solid.maximvdw.be/profile/card#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix schema: <http://schema.org/>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.
@prefix space: <http://www.w3.org/ns/pim/space#>.
@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix pro: <https://solid.maximvdw.be/profile/>.
@prefix sol: <https://solid.maximvdw.be/>.

pro:card a foaf:PersonalProfileDocument;
    foaf:maker <#me>;
    foaf:primaryTopic <#me>.
:me a foaf:Person;
    schema:knowsLanguage _:b1434_b1354_b577_n3-58;
    vcard:bday "1995-03-10"^^xsd:date;
    vcard:fn "Maxim Van de Wynckel";
    vcard:hasEmail <#id1711234870945>;
    vcard:hasPhoto <https://solid.maximvdw.be/profile/1568226501835_Maxim_square.jpg>;
    vcard:hasTelephone <#id1711234880687>;
    vcard:organization-name "Vrije Universiteit Brussel";
    vcard:role "Teaching Assistant and Researcher";
    space:preferencesFile <https://solid.maximvdw.be/Settings/Preferences.ttl>;
    solid:oidcIssuer <https://solid.maximvdw.be/>;
    solid:publicTypeIndex <https://solid.maximvdw.be/profile/publicTypeIndex.ttl>.
_:b1434_b1354_b577_n3-58 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> <#id1711234887070>;
    <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil>.
<#id1711234870945> a vcard:Work;
    vcard:value <mailto:maxim.van.de.wynckel@vub.be>.
<#id1711234880687> a vcard:Work.
<#id1711234887070> solid:publicId <https://www.w3.org/ns/iana/language-code/nl>.
<https://www.w3.org/ns/iana/language-code/nl> schema:name "Dutch"@en.
`;
const profileSubject: Subject & { url: IriString } = {
    type: "Subject",
    url: "https://id.inrupt.com/maximvdw",
    predicates: {
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
        "namedNodes": [
          "http://xmlns.com/foaf/0.1/Agent"
        ]
      },
      "http://www.w3.org/2000/01/rdf-schema#seeAlso": {
        "namedNodes": [
          "https://storage.inrupt.com/d4a398b1-6f70-4ceb-9eed-6e638429995b/extendedProfile"
        ]
      },
      "http://www.w3.org/ns/pim/space#storage": {
        "namedNodes": [
          "https://storage.inrupt.com/d4a398b1-6f70-4ceb-9eed-6e638429995b/"
        ]
      },
      "http://www.w3.org/ns/solid/terms#oidcIssuer": {
        "namedNodes": [
          "https://login.inrupt.com"
        ]
      },
      "http://xmlns.com/foaf/0.1/isPrimaryTopicOf": {
        "namedNodes": [
          "https://storage.inrupt.com/d4a398b1-6f70-4ceb-9eed-6e638429995b/extendedProfile"
        ]
      }
    }
  };

describe('User', () => {
    describe('deserialize', () => {
        it('should deserialize a user profile from string', () => {
            const user: User = RDFSerializer.deserializeFromString("https://solid.maximvdw.be/profile/card#me", profile);
            expect(user).to.not.be.undefined;
            expect(user.name).to.equal("Maxim Van de Wynckel");
            console.log(user.birthDate);
            expect(user.picture).to.equal("https://solid.maximvdw.be/profile/1568226501835_Maxim_square.jpg");
        });

        it('should deserialize a user profile from subject', () => {
            const user: User = RDFSerializer.deserializeFromSubject(profileSubject);
            expect(user).to.not.be.undefined;
        });
    });

    describe('serialize', () => {
      it('should correctly serialize the profile', () => {

      });
    });
});