import { RDFSerializer } from "@openhps/rdf";
import { Person } from "./Person";
import { Project } from "./Project";

const project1 = new Project();
project1.name = "OpenHPS: RDF Component";
project1.code = "@openhps/rdf";
const project2 = new Project();
project2.name = "OpenHPS: Core Component";
project2.code = "@openhps/core";

const person = new Person();
person.firstName = "Maxim";
person.familyName = "Van de Wynckel";
person.nick = "Maximvdw";
person.projects = [
    project1,
    project2
];

const serialized = RDFSerializer.serialize(person, "http://maximvdw.solidweb.org/profile/card#");
RDFSerializer.stringify(serialized, {
    format: 'text/turtle'
}).then(result => {
    console.log(result);
});

/*
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

<http://maximvdw.solidweb.org/profile/card#Maxim_Van_de_Wynckel> foaf:firstName "Maxim";
    foaf:familyName "Van de Wynckel";
    foaf:nick "Maximvdw";
    foaf:currentProject _:n3-0.
_:n3-0 foaf:title "@openhps/rdf";
    foaf:name "OpenHPS: RDF Component".
<http://maximvdw.solidweb.org/profile/card#Maxim_Van_de_Wynckel> foaf:currentProject _:n3-1.
_:n3-1 foaf:title "@openhps/core";
    foaf:name "OpenHPS: Core Component".
*/
