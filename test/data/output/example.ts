type IriString = `${'http' | 'https'}://${string}`;
type Property = IriString; // eslint-disable-line
type Class = IriString; // eslint-disable-line
type Datatype = IriString; // eslint-disable-line
type OwlClass = IriString; // eslint-disable-line
type OwlObjectProperty = IriString; // eslint-disable-line
type OwlDatatypeProperty = IriString; // eslint-disable-line
type HydraResource = IriString; // eslint-disable-line
type HydraClass = IriString; // eslint-disable-line
type HydraLink = IriString; // eslint-disable-line
type HydraTemplatedLink = IriString; // eslint-disable-line
type HydraVariableRepresentation = IriString; // eslint-disable-line
type OtherIndividual = IriString; // eslint-disable-line

export const _BASE: IriString = 'https://sembeacon.org/examples/openhps2021/beacons.ttl#';
export const _PREFIX: string = 'example';