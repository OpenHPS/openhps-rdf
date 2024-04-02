import { expect } from "chai";
import { RDFSerializer, User } from "../../src";

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

describe('User', () => {
    describe('deserialize', () => {
        it('should deserialize a user profile', () => {
            const user: User = RDFSerializer.deserializeFromString("https://maximvdw.solidweb.org/profile/card#me", profile);
            expect(user).to.not.be.undefined;
            expect(user.name).to.equal("Maxim Van de Wynckel");
        });
    });
});