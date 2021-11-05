// import * as N3 from 'n3';
// import namespaces from '../namespaces';

// export class RDFDataset {
//     baseUri: IriString;
//     individuals: Record<IriString | BlankNodeId, Subject> = {};
//     changelog: DatasetChangelog = {
//         additions: [],
//         deletions: [],
//     };
//     prefixes: Record<string, string> = {
//         xsd: 'http://www.w3.org/2001/XMLSchema#',
//         ...namespaces,
//     };

//     constructor(baseUri: IriString) {
//         this.baseUri = baseUri;
//     }

//     private _subjectToQuads(subject: Subject): N3.Quad[] {
//         const quads: N3.Quad[] = [];
//         Object.keys(subject.predicates).forEach((predicate: IriString) => {
//             const objects: Objects = subject.predicates[predicate];
//             quads.push(...this._objectsToQuads(subject.url, predicate, objects));
//         });
//         return quads;
//     }

//     private _objectsToQuads(subject: string, predicate: string, objects: Objects): N3.Quad[] {
//         const quads: N3.Quad[] = [];
//         if (objects.literals) {
//             Object.keys(objects.literals).forEach((typeUri: IriString) => {
//                 const values: readonly string[] = objects.literals[typeUri];
//                 values.forEach((value) => {
//                     quads.push(
//                         N3.DataFactory.quad(
//                             N3.DataFactory.namedNode(subject),
//                             N3.DataFactory.namedNode(predicate),
//                             N3.DataFactory.literal(value, N3.DataFactory.namedNode(typeUri)),
//                         ),
//                     );
//                 });
//             });
//         }
//         if (objects.langStrings) {
//             Object.keys(objects.langStrings).forEach((locale) => {
//                 const values: readonly string[] = objects.langStrings[locale];
//                 values.forEach((value) => {
//                     quads.push(
//                         N3.DataFactory.quad(
//                             N3.DataFactory.namedNode(subject),
//                             N3.DataFactory.namedNode(predicate),
//                             N3.DataFactory.literal(value, locale),
//                         ),
//                     );
//                 });
//             });
//         }
//         if (objects.namedNodes) {
//             objects.namedNodes.forEach((namedNodeUri: IriString) => {
//                 quads.push(
//                     N3.DataFactory.quad(
//                         N3.DataFactory.namedNode(subject),
//                         N3.DataFactory.namedNode(predicate),
//                         N3.DataFactory.namedNode(namedNodeUri),
//                     ),
//                 );
//             });
//         }
//         if (objects.blankNodes) {
//             objects.blankNodes.forEach((node) => {
//                 if (typeof node === 'string') {
//                     quads.push(
//                         N3.DataFactory.quad(
//                             N3.DataFactory.namedNode(subject),
//                             N3.DataFactory.namedNode(predicate),
//                             N3.DataFactory.namedNode(node),
//                         ),
//                     );
//                 } else {
//                     const blankNode = N3.DataFactory.blankNode();
//                     quads.push(
//                         N3.DataFactory.quad(
//                             N3.DataFactory.namedNode(subject),
//                             N3.DataFactory.namedNode(predicate),
//                             blankNode,
//                         ),
//                     );
//                     Object.keys(node).forEach((predicate) => {
//                         quads.push(...this._objectsToQuads(blankNode.value, predicate, (node as any)[predicate]));
//                     });
//                 }
//             });
//         }
//         return quads;
//     }

//     addThing(thing: Thing): this {
//         this.individuals[thing.url] = thing;
//         this.changelog.additions.push(...this._subjectToQuads(thing));
//         return this;
//     }

//     getThing(uri: IriString): Thing {
//         return this.individuals[uri];
//     }

//     removeThing(uri: IriString): this {
//         const thing = this.individuals[uri];
//         this.changelog.deletions.push(...this._subjectToQuads(thing));
//         delete this.individuals[uri];
//         return this;
//     }

//     write(format?: N3.MimeFormat): Promise<string> {
//         return new Promise((resolve, reject) => {
//             // Convert all individuals into quads
//             const quads = Object.keys(this.individuals)
//                 .map((uri: BlankNodeId | IriString) => this.individuals[uri])
//                 .map((subject) => this._subjectToQuads(subject))
//                 .flat();
//             // Filter the prefixes to only include prefixes used
//             const namespaces = Object.keys(this.prefixes)
//                 .map((k) => {
//                     return { [this.prefixes[k]]: k };
//                 })
//                 .reduce((a, b) => {
//                     return { ...a, ...b };
//                 });
//             const filteredPrefixes: Record<string, string> = {};
//             quads.map((quad) => {
//                 const usedNamespacesInQuad = [
//                     quad.subject.value,
//                     quad.predicate.value,
//                     quad.object.termType === 'NamedNode'
//                         ? quad.object.termType
//                         : quad.object.termType === 'Literal'
//                         ? quad.object.datatype.value
//                         : quad.object.value,
//                 ];
//                 usedNamespacesInQuad.map((ns) => {
//                     Object.keys(namespaces).forEach((n) => {
//                         if (ns.includes(n)) {
//                             filteredPrefixes[namespaces[n]] = n;
//                         }
//                     });
//                 });
//             });
//             const writer = new N3.Writer({ format, prefixes: filteredPrefixes });
//             // Write each quad
//             quads.forEach((quad) => writer.addQuad(quad));
//             writer.end((error, result) => {
//                 if (error) {
//                     return reject(error);
//                 }
//                 resolve(result);
//             });
//         });
//     }
// }

// export interface DatasetChangelog {
//     additions: N3.Quad[];
//     deletions: N3.Quad[];
// }
