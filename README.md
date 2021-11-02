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
If you have [npm installed](https://www.npmjs.com/get-npm), start using @openhps/solid with the following command.
```bash
npm install @openhps/rdf --save
```

## Usage

### Creating a new ```RDFSerializable```
If you are creating a new serializable object that does not extend a serializable ```Thing``` you can implement
the ```RDFSerializable``` interface.

```typescript
import { SerializableObject, SerializableMember } from '@openhps/core';
import { RDFSerializable, IriString, Thing } from '@openhps/rdf';

@SerializableObject();
export class MyNewClass implements RDFSerializable {
    @SerializableMember();
    uri: string;

    toThing(baseUri?: IriString): Thing {
        return undefined; // ...
    }
}
```

This interface requires you to implement a ```uri``` string that has the ```@SerializableMember``` decorator, and
a ```toThing``` method that is called to convert the object to an RDF resource.

### Converting an object to ```Thing```
In the ```toThing``` function of an ```RDFSerializable``` you can construct a new thing using the included ```RDFBuilder```.
The baseUri that is included in the parameter is undefined whenever the thing should be a blank node.

```typescript
import { SerializableObject, SerializableMember } from '@openhps/core';
import { RDFSerializable, IriString, Thing, RDFBuilder, rdf } from '@openhps/rdf';

@SerializableObject();
export class MyNewClass implements RDFSerializable {
    @SerializableMember();
    name: string;

    @SerializableMember();
    uri: string;

    toThing(baseUri?: IriString): Thing {
        const builder = RDFBuilder.create({ url: this.uri || baseUri ? `${baseUri}${this.name}` : undefined  })
            .addIri(rdf.type, "http://myontology.org#SomeClass");
        return builder.build();
    }
}
```

The builder is based on the [ThingBuilder by Inrupt](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/thing_build.html) with the main addition being an added function for adding blank nodes.

### Creating an extended ```RDFSerializable```
In most cases, you want to create an object that extends an existing ```RDFSerializable``` such as a data object or data frame.

```typescript
import { SerializableObject, SerializableMember } from '@openhps/core';
import { RDFSerializable, IriString, Thing, RDFBuilder } from '@openhps/rdf';

@SerializableObject();
export class MyObject extends DataObject {
    @SerializableMember()
    someNewAttribute: string;

    toThing(baseUri?: IriString): Thing {
        // The RDFBuilder continues from whatever Thing is constructed by the super class
        const builder = RDFBuilder.create(super.toThing(this, baseUri))
            .addStringNoLocale("http://myontology.org#someNewAttribute", this.someNewAttribute);
        return builder.build();
    }
}
```

### Making an existing class RDF serializable
Making an existing class serializable is possible, we use module augmentation in TypeScript to
add the new ```RDFSerializable``` interface to the existing class. Next, we create a new
function for the ```toThing``` method and finally we make sure that the ```uri``` attribute is
serializable.

*For this example we will make the WLANObject of the @openhps/rf module serializable to RDF*
```typescript
// @see {@link https://github.com/OpenHPS/openhps-rf/blob/master/src/data/WLANObject.ts}

@SerializableObject()
export class WLANObject extends RFTransmitterObject {
    /**
     * WLAN Channel
     */
    @SerializableMember()
    public channel: number;
    @SerializableMember()
    public capabilities: string;
}
```


```typescript
import type { DataObject, SerializableMember } from '@openhps/core';
import type { RDFSerializable } from '@openhps/rdf';

// 1. Always import the original file
import { WLANObject } from '@openhps/rf';

// 2. Make sure you know the directory of the types
declare module '@openhps/rf/dist/types/data/WLANObject' {
    // 3. Export a new interface that extends RDFSerializable (this is the augmentation)
    export interface WLANObject extends RDFSerializable {}
}

// 4. Create the toThing function. Your IDE should not complain that toThing does not exist.
// use function instead of lambda to be able to access 'this'
WLANObject.prototype.toThing = function(buildUri?) {
    // The RDFBuilder continues from whatever Thing is constructed by the super class
    // 'super' can not be used in a prototype function so we use another trick
    const superClass: DataObject = Object.getPrototypeOf(Object.getPrototypeOf(this));
    const builder = RDFBuilder.create(superClass.toThing.call(this, baseUri));
    // ... add the missing predicates ... //
    return builder.build();
};

// 5. Make the uri attribute serializable (add the decorator from outside the class)
WLANObject.prototype.uri = undefined;
SerializableMember(String)(WLANObject.prototype, 'uri');
```

Alternatively, you can use the helper function to merge step 4. and 5.

```typescript
import type { DataObject, SerializableMember } from '@openhps/core';
import { RDFSerializable, createRDFSerializable } from '@openhps/rdf';

// 1. Always import the original file
import { WLANObject } from '@openhps/rf';

// 2. Make sure you know the directory of the types
declare module '@openhps/rf/dist/types/data/WLANObject' {
    // 3. Export a new interface that extends RDFSerializable (this is the augmentation)
    export interface WLANObject extends RDFSerializable {}
}

// 4. and 5. merged
createRDFSerializable(WLANObject, function(buildUri?) {
    // The RDFBuilder continues from whatever Thing is constructed by the super class
    // 'super' can not be used in a prototype function so we use another trick
    const superClass: DataObject = Object.getPrototypeOf(Object.getPrototypeOf(this));
    const builder = RDFBuilder.create(superClass.toThing.call(this, baseUri));
    // ... add the missing predicates ... //
    return builder.build();
});
```

## Contributors
The framework is open source and is mainly developed by PhD Student Maxim Van de Wynckel as part of his research towards *Hybrid Positioning and Implicit Human-Computer Interaction* under the supervision of Prof. Dr. Beat Signer.

## Contributing
Use of OpenHPS, contributions and feedback is highly appreciated. Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License
Copyright (C) 2019-2021 Maxim Van de Wynckel & Vrije Universiteit Brussel

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.