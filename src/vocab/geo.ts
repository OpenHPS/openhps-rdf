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

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2003/01/geo/wgs84_pos#lat
 */
export const lat: Property = 'http://www.w3.org/2003/01/geo/wgs84_pos#lat';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2003/01/geo/wgs84_pos#location
 */
export const location: Property = 'http://www.w3.org/2003/01/geo/wgs84_pos#location';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2003/01/geo/wgs84_pos#long
 */
export const long: Property = 'http://www.w3.org/2003/01/geo/wgs84_pos#long';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2003/01/geo/wgs84_pos#alt
 */
export const alt: Property = 'http://www.w3.org/2003/01/geo/wgs84_pos#alt';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2003/01/geo/wgs84_pos#lat_long
 */
export const lat_long: Property = 'http://www.w3.org/2003/01/geo/wgs84_pos#lat_long';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing
 */
export const SpatialThing: Class = 'http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2003/01/geo/wgs84_pos#Point
 */
export const Point: Class = 'http://www.w3.org/2003/01/geo/wgs84_pos#Point';

export const _BASE: IriString = 'http://www.w3.org/2003/01/geo/wgs84_pos#';
export const _PREFIX: string = 'geo';