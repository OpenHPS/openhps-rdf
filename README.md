<h1 align="center">
  <img alt="OpenHPS" src="https://openhps.org/images/logo_text-512.png" width="40%" /><br />
  @openhps/rdf
</h1>
<p align="center">
    <a href="https://github.com/OpenHPS/openhps-rdf/actions/workflows/main.yml" target="_blank">
        <img alt="Build Status" src="https://github.com/OpenHPS/openhps-rdf/actions/workflows/main.yml/badge.svg">
    </a>
    <a href="https://codecov.io/gh/OpenHPS/openhps-rdf">
        <img src="https://codecov.io/gh/OpenHPS/openhps-rdf/branch/master/graph/badge.svg"/>
    </a>
    <a href="https://codeclimate.com/github/OpenHPS/openhps-rdf/" target="_blank">
        <img alt="Maintainability" src="https://img.shields.io/codeclimate/maintainability/OpenHPS/openhps-rdf">
    </a>
    <a href="https://badge.fury.io/js/@openhps%2Frdf">
        <img src="https://badge.fury.io/js/@openhps%2Frdf.svg" alt="npm version" height="18">
    </a>
</p>

<h3 align="center">
    <a href="https://github.com/OpenHPS/openhps-core">@openhps/core</a> &mdash; <a href="https://openhps.org/docs/rdf">API</a>
</h3>

<br />

## Getting Started
If you have [npm installed](https://www.npmjs.com/get-npm), start using @openhps/rdf with the following command.
```bash
npm install @openhps/rdf --save
```

## Usage

### `RDFSerializer`
The `RDFSerializer` is a similar utility as the `DataSerializer` from [@openhps/core](https://openhps.org/docs/core/classes/dataserializer). Instead of serializing and deserializing to JSON, it converts to RDF triples.

#### to thing
Serialize a serializable object to an RDF thing.
```typescript
import { RDFSerializer, Thing } from '@openhps/rdf';

const thing: Thing = RDFSerializer.serialize(new DataObject(/* ... */));
```
When storing a named object, a base URI should be provided.

#### to quads
Serialize a serializable object to [RdfJS Quads](https://rdf.js.org/data-model-spec/).
```typescript
import { RDFSerializer } from '@openhps/rdf';
import { Quad } from 'rdfjs';

const quads: Quad[] = RDFSerializer.serializeToQuads(new DataObject(/* ... */));
```
When storing a named object, a base URI should be provided.

#### to string
Serializing to a string is possible. We use N3 for exporting the serializable objects to
turtle, Notation-3 or [other supported formats](https://github.com/rdfjs/N3.js/#writing).
```typescript
import { RDFSerializer } from '@openhps/rdf';

const turtle: string = RDFSerializer.stringify(new DataObject(/* ... */), {
    format: 'text/turtle',
    prettyPrint: true
});
```

#### from thing
Deserialize a serializable object from a thing.
```typescript
import { RDFSerializer, Thing } from '@openhps/rdf';

const thing: Thing

/* ... */

const object: DataObject = RDFSerializer.deserialize(thing);
```

### Create a new RDF serializable object

#### `SerializableObject`
```typescript
import '@openhps/rdf'; // Import to load type declarations
import { SerializableObject, SerializableMember } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: 'http://myontology.org#SomeObject'
    }
})
class SomeObject {

}
```

#### `SerializableMember`
API documentation for literal: https://openhps.org/docs/rdf/interfaces/rdfliteraloptions

```typescript
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
            predicate: foaf.name
        }
    })
    name: string;
}
```

### `SPARQLDataDriver`
The SPARQL endpoint uses [Comunica](https://comunica.dev/) as its query engine while still
using the query syntax from MongoDB.

## Contributors
The framework is open source and is mainly developed by PhD Student Maxim Van de Wynckel as part of his research towards *Hybrid Positioning and Implicit Human-Computer Interaction* under the supervision of Prof. Dr. Beat Signer.

## Contributing
Use of OpenHPS, contributions and feedback is highly appreciated. Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License
Copyright (C) 2019-2022 Maxim Van de Wynckel & Vrije Universiteit Brussel

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.