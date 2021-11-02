import { Thing, IriString } from './RDFDataset';

export interface RDFSerializable {
    uri: IriString;
    toThing(baseUri?: IriString | undefined): Thing;
}
