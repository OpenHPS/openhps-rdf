import { expect } from "chai";
import { IriString, RDFSerializer, Subject, User } from "../../src";

const profile: string = `
@prefix : <https://maximvdw.solidweb.org/profile/card#>.
@prefix acl: <http://www.w3.org/ns/auth/acl#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix ldp: <http://www.w3.org/ns/ldp#>.
@prefix schema: <http://schema.org/>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.
@prefix space: <http://www.w3.org/ns/pim/space#>.
@prefix pro: <https://maximvdw.solidweb.org/profile/card>.
@prefix inbox: </inbox/>.
@prefix m: </>.
@prefix sos: <http://www.w3.org/ns/sosa/>.
@prefix ssn: <http://www.w3.org/ns/ssn/>.

pro:card a foaf:PersonalProfileDocument; foaf:maker :me; foaf:primaryTopic :me.

:me
    a schema:Person, sos:FeatureOfInterest, foaf:Person;
    acl:trustedApp
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <http://localhost:3005>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <http://localhost:3005>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://192.168.1.7:8085>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://localhost:8085>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://openhps.github.io>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://openhps.github.io>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://penny.vincenttunru.com>
            ];
    ldp:inbox inbox:;
    space:preferencesFile </settings/prefs.ttl>;
    space:storage m:;
    solid:account m:;
    solid:oidcIssuer <https://https://solidweb.org>;
    solid:privateTypeIndex </settings/privateTypeIndex.ttl>;
    solid:publicTypeIndex </settings/publicTypeIndex.ttl>;
    ssn:hasProperty
        </properties/orientation.ttl>, </properties/position.ttl>,
        </properties/velocity.ttl>;
    foaf:name "Maxim Van de Wynckel".
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
            const user: User = RDFSerializer.deserializeFromString("https://maximvdw.solidweb.org/profile/card#me", profile);
            expect(user).to.not.be.undefined;
            expect(user.name).to.equal("Maxim Van de Wynckel");
        });

        it('should deserialize a user profile from subject', () => {
            const user: User = RDFSerializer.deserializeFromSubject(profileSubject);
            console.log(user)
            expect(user).to.not.be.undefined;
        });
    });
});