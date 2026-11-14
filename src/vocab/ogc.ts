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
 * default geometry
 * 
 * The default Geometry to be used in spatial calculations. It is usually the most detailed Geometry.
 *
 * http://www.opengis.net/ont/geosparql#defaultGeometry
 */
export const defaultGeometry: Property = 'http://www.opengis.net/ont/geosparql#defaultGeometry';

/**
 * has geometry
 * 
 * A spatial representation for a given Feature.
 *
 * http://www.opengis.net/ont/geosparql#hasGeometry
 */
export const hasGeometry: Property = 'http://www.opengis.net/ont/geosparql#hasGeometry';

/**
 * has default geometry
 * 
 * The default Geometry to be used in spatial calculations. It is usually the most detailed Geometry.
 *
 * http://www.opengis.net/ont/geosparql#hasDefaultGeometry
 */
export const hasDefaultGeometry: Property = 'http://www.opengis.net/ont/geosparql#hasDefaultGeometry';

/**
 * contains
 * 
 * States that the subject SpatialObject spatially contains the object SpatialObject. DE-9IM: T*TFF*FF*
 *
 * http://www.opengis.net/ont/geosparql#ehContains
 */
export const ehContains: Property = 'http://www.opengis.net/ont/geosparql#ehContains';

/**
 * covered by
 * 
 * States that the subject SpatialObject is spatially covered by the object SpatialObject. DE-9IM: TFF*TFT**
 *
 * http://www.opengis.net/ont/geosparql#ehCoveredBy
 */
export const ehCoveredBy: Property = 'http://www.opengis.net/ont/geosparql#ehCoveredBy';

/**
 * covers
 * 
 * States that the subject SpatialObject spatially covers the object SpatialObject. DE-9IM: T*TFT*FF*
 *
 * http://www.opengis.net/ont/geosparql#ehCovers
 */
export const ehCovers: Property = 'http://www.opengis.net/ont/geosparql#ehCovers';

/**
 * disjoint
 * 
 * States that the subject SpatialObject is spatially disjoint from the object SpatialObject. DE-9IM: FF*FF****
 *
 * http://www.opengis.net/ont/geosparql#ehDisjoint
 */
export const ehDisjoint: Property = 'http://www.opengis.net/ont/geosparql#ehDisjoint';

/**
 * disjoint
 * 
 * States that the subject SpatialObject is spatially disjoint from the object SpatialObject. DE-9IM: FF*FF****
 *
 * http://www.opengis.net/ont/geosparql#sfDisjoint
 */
export const sfDisjoint: Property = 'http://www.opengis.net/ont/geosparql#sfDisjoint';

/**
 * equals
 * 
 * States that the subject SpatialObject spatially equals the object SpatialObject. DE-9IM: TFFFTFFFT
 *
 * http://www.opengis.net/ont/geosparql#ehEquals
 */
export const ehEquals: Property = 'http://www.opengis.net/ont/geosparql#ehEquals';

/**
 * equals
 * 
 * States that the subject SpatialObject spatially equals the object SpatialObject. DE-9IM: TFFFTFFFT
 *
 * http://www.opengis.net/ont/geosparql#sfEquals
 */
export const sfEquals: Property = 'http://www.opengis.net/ont/geosparql#sfEquals';

/**
 * inside
 * 
 * States that the subject SpatialObject is spatially inside the object SpatialObject. DE-9IM: TFF*FFT**
 *
 * http://www.opengis.net/ont/geosparql#ehInside
 */
export const ehInside: Property = 'http://www.opengis.net/ont/geosparql#ehInside';

/**
 * meet
 * 
 * States that the subject SpatialObject spatially meets the object SpatialObject. DE-9IM: FT******* ^ F**T***** ^ F***T****
 *
 * http://www.opengis.net/ont/geosparql#ehMeet
 */
export const ehMeet: Property = 'http://www.opengis.net/ont/geosparql#ehMeet';

/**
 * touches
 * 
 * States that the subject SpatialObject spatially touches the object SpatialObject. DE-9IM: FT******* ^ F**T***** ^ F***T****
 *
 * http://www.opengis.net/ont/geosparql#sfTouches
 */
export const sfTouches: Property = 'http://www.opengis.net/ont/geosparql#sfTouches';

/**
 * overlap
 * 
 * States that the subject SpatialObject spatially overlaps the object SpatialObject. DE-9IM: T*T***T**
 *
 * http://www.opengis.net/ont/geosparql#ehOverlap
 */
export const ehOverlap: Property = 'http://www.opengis.net/ont/geosparql#ehOverlap';

/**
 * has bounding box
 * 
 * The minimum or smallest bounding or enclosing box of a given Feature.
 *
 * http://www.opengis.net/ont/geosparql#hasBoundingBox
 */
export const hasBoundingBox: Property = 'http://www.opengis.net/ont/geosparql#hasBoundingBox';

/**
 * has centroid
 * 
 * The arithmetic mean position of all the Geometry points of a given Feature.
 *
 * http://www.opengis.net/ont/geosparql#hasCentroid
 */
export const hasCentroid: Property = 'http://www.opengis.net/ont/geosparql#hasCentroid';

/**
 * has length
 * 
 * The length of a Spatial Object.
 *
 * http://www.opengis.net/ont/geosparql#hasLength
 */
export const hasLength: Property = 'http://www.opengis.net/ont/geosparql#hasLength';

/**
 * has size
 * 
 * Subproperties of this property are used to indicate the size of a Spatial Object as a measurement or estimate of one or more dimensions of the Spatial Object's spatial presence.
 *
 * http://www.opengis.net/ont/geosparql#hasSize
 */
export const hasSize: Property = 'http://www.opengis.net/ont/geosparql#hasSize';

/**
 * has perimeter length
 * 
 * The length of the perimeter of a Spatial Object.
 *
 * http://www.opengis.net/ont/geosparql#hasPerimeterLength
 */
export const hasPerimeterLength: Property = 'http://www.opengis.net/ont/geosparql#hasPerimeterLength';

/**
 * has area
 * 
 * The area of a Spatial Object.
 *
 * http://www.opengis.net/ont/geosparql#hasArea
 */
export const hasArea: Property = 'http://www.opengis.net/ont/geosparql#hasArea';

/**
 * has volume
 * 
 * The volume of a three-dimensional Spatial Object.
 *
 * http://www.opengis.net/ont/geosparql#hasVolume
 */
export const hasVolume: Property = 'http://www.opengis.net/ont/geosparql#hasVolume';

/**
 * has spatial resolution
 * 
 * The spatial resolution of a Geometry.
 *
 * http://www.opengis.net/ont/geosparql#hasSpatialResolution
 */
export const hasSpatialResolution: Property = 'http://www.opengis.net/ont/geosparql#hasSpatialResolution';

/**
 * has spatial accuracy
 * 
 * The positional accuracy of the coordinates of a Geometry.
 *
 * http://www.opengis.net/ont/geosparql#hasSpatialAccuracy
 */
export const hasSpatialAccuracy: Property = 'http://www.opengis.net/ont/geosparql#hasSpatialAccuracy';

/**
 * disconnected
 * 
 * States that the subject SpatialObject is spatially disjoint from the object SpatialObject. DE-9IM: FFTFFTTTT
 *
 * http://www.opengis.net/ont/geosparql#rcc8dc
 */
export const rcc8dc: Property = 'http://www.opengis.net/ont/geosparql#rcc8dc';

/**
 * externally connected
 * 
 * States that the subject SpatialObject spatially meets the object SpatialObject. DE-9IM: FFTFTTTTT
 *
 * http://www.opengis.net/ont/geosparql#rcc8ec
 */
export const rcc8ec: Property = 'http://www.opengis.net/ont/geosparql#rcc8ec';

/**
 * equals
 * 
 * States that the subject SpatialObject spatially equals the object SpatialObject. DE-9IM: TFFFTFFFT
 *
 * http://www.opengis.net/ont/geosparql#rcc8eq
 */
export const rcc8eq: Property = 'http://www.opengis.net/ont/geosparql#rcc8eq';

/**
 * non-tangential proper part
 * 
 * States that the subject SpatialObject is spatially inside the object SpatialObject. DE-9IM: TFFTFFTTT
 *
 * http://www.opengis.net/ont/geosparql#rcc8ntpp
 */
export const rcc8ntpp: Property = 'http://www.opengis.net/ont/geosparql#rcc8ntpp';

/**
 * non-tangential proper part inverse
 * 
 * States that the subject SpatialObject spatially contains the object SpatialObject. DE-9IM: TTTFFTFFT
 *
 * http://www.opengis.net/ont/geosparql#rcc8ntppi
 */
export const rcc8ntppi: Property = 'http://www.opengis.net/ont/geosparql#rcc8ntppi';

/**
 * partially overlapping
 * 
 * States that the subject SpatialObject spatially overlaps the object SpatialObject. DE-9IM: TTTTTTTTT
 *
 * http://www.opengis.net/ont/geosparql#rcc8po
 */
export const rcc8po: Property = 'http://www.opengis.net/ont/geosparql#rcc8po';

/**
 * tangential proper part
 * 
 * States that the subject SpatialObject is spatially covered by the object SpatialObject. DE-9IM: TFFTTFTTT
 *
 * http://www.opengis.net/ont/geosparql#rcc8tpp
 */
export const rcc8tpp: Property = 'http://www.opengis.net/ont/geosparql#rcc8tpp';

/**
 * tangential proper part inverse
 * 
 * States that the subject SpatialObject spatially covers the object SpatialObject. DE-9IM: TTTFTTFFT
 *
 * http://www.opengis.net/ont/geosparql#rcc8tppi
 */
export const rcc8tppi: Property = 'http://www.opengis.net/ont/geosparql#rcc8tppi';

/**
 * contains
 * 
 * States that the subject SpatialObject spatially contains the object SpatialObject. DE-9IM: T*****FF*
 *
 * http://www.opengis.net/ont/geosparql#sfContains
 */
export const sfContains: Property = 'http://www.opengis.net/ont/geosparql#sfContains';

/**
 * crosses
 * 
 * States that the subject SpatialObject spatially crosses the object SpatialObject. DE-9IM: T*T******
 *
 * http://www.opengis.net/ont/geosparql#sfCrosses
 */
export const sfCrosses: Property = 'http://www.opengis.net/ont/geosparql#sfCrosses';

/**
 * intersects
 * 
 * States that the subject SpatialObject is not spatially disjoint from the object SpatialObject. DE-9IM: T******** ^ *T******* ^ ***T***** ^ ****T****
 *
 * http://www.opengis.net/ont/geosparql#sfIntersects
 */
export const sfIntersects: Property = 'http://www.opengis.net/ont/geosparql#sfIntersects';

/**
 * overlaps
 * 
 * States that the subject SpatialObject spatially overlaps the object SpatialObject. DE-9IM: T*T***T**
 *
 * http://www.opengis.net/ont/geosparql#sfOverlaps
 */
export const sfOverlaps: Property = 'http://www.opengis.net/ont/geosparql#sfOverlaps';

/**
 * within
 * 
 * States that the subject SpatialObject is spatially within the object SpatialObject. DE-9IM: T*F**F***
 *
 * http://www.opengis.net/ont/geosparql#sfWithin
 */
export const sfWithin: Property = 'http://www.opengis.net/ont/geosparql#sfWithin';

/**
 * as GML
 * 
 * The GML serialization of a Geometry
 *
 * http://www.opengis.net/ont/geosparql#asGML
 */
export const asGML: Property = 'http://www.opengis.net/ont/geosparql#asGML';

/**
 * has serialization
 * 
 * Connects a Geometry object with its text-based serialization.
 *
 * http://www.opengis.net/ont/geosparql#hasSerialization
 */
export const hasSerialization: Property = 'http://www.opengis.net/ont/geosparql#hasSerialization';

/**
 * as WKT
 * 
 * The WKT serialization of a Geometry
 *
 * http://www.opengis.net/ont/geosparql#asWKT
 */
export const asWKT: Property = 'http://www.opengis.net/ont/geosparql#asWKT';

/**
 * as GeoJSON
 * 
 * The GeoJSON serialization of a Geometry
 *
 * http://www.opengis.net/ont/geosparql#asGeoJSON
 */
export const asGeoJSON: Property = 'http://www.opengis.net/ont/geosparql#asGeoJSON';

/**
 * as KML
 * 
 * The KML serialization of a Geometry
 *
 * http://www.opengis.net/ont/geosparql#asKML
 */
export const asKML: Property = 'http://www.opengis.net/ont/geosparql#asKML';

/**
 * as DGGS
 * 
 * The Discrete Global Grid System (DGGS) serialization of a Geometry
 *
 * http://www.opengis.net/ont/geosparql#asDGGS
 */
export const asDGGS: Property = 'http://www.opengis.net/ont/geosparql#asDGGS';

/**
 * coordinate dimension
 * 
 * The number of measurements or axes needed to describe the position of this Geometry in a coordinate system.
 *
 * http://www.opengis.net/ont/geosparql#coordinateDimension
 */
export const coordinateDimension: Property = 'http://www.opengis.net/ont/geosparql#coordinateDimension';

/**
 * dimension
 * 
 * The topological dimension of this geometric object, which must be less than or equal to the coordinate dimension. In non-homogeneous collections, this will return the largest topological dimension of the contained objects.
 *
 * http://www.opengis.net/ont/geosparql#dimension
 */
export const dimension: Property = 'http://www.opengis.net/ont/geosparql#dimension';

/**
 * is empty
 * 
 * (true) if this geometric object is the empty Geometry. If true, then this geometric object represents the empty point set for the coordinate space.
 *
 * http://www.opengis.net/ont/geosparql#isEmpty
 */
export const isEmpty: Property = 'http://www.opengis.net/ont/geosparql#isEmpty';

/**
 * is simple
 * 
 * (true) if this geometric object has no anomalous geometric points, such as self intersection or self tangency.
 *
 * http://www.opengis.net/ont/geosparql#isSimple
 */
export const isSimple: Property = 'http://www.opengis.net/ont/geosparql#isSimple';

/**
 * spatial dimension
 * 
 * The number of measurements or axes needed to describe the spatial position of this Geometry in a coordinate system.
 *
 * http://www.opengis.net/ont/geosparql#spatialDimension
 */
export const spatialDimension: Property = 'http://www.opengis.net/ont/geosparql#spatialDimension';

/**
 * has spatial resolution in meters
 * 
 * The spatial resolution of a Geometry in meters.
 *
 * http://www.opengis.net/ont/geosparql#hasMetricSpatialResolution
 */
export const hasMetricSpatialResolution: Property = 'http://www.opengis.net/ont/geosparql#hasMetricSpatialResolution';

/**
 * has spatial accuracy in meters
 * 
 * The positional accuracy of the coordinates of a Geometry in meters.
 *
 * http://www.opengis.net/ont/geosparql#hasMetricSpatialAccuracy
 */
export const hasMetricSpatialAccuracy: Property = 'http://www.opengis.net/ont/geosparql#hasMetricSpatialAccuracy';

/**
 * has length in meters
 * 
 * The length of a Spatial Object in meters.
 *
 * http://www.opengis.net/ont/geosparql#hasMetricLength
 */
export const hasMetricLength: Property = 'http://www.opengis.net/ont/geosparql#hasMetricLength';

/**
 * has metric size
 * 
 * Subproperties of this property are used to indicate the size of a Spatial Object, as a measurement or estimate of one or more dimensions of the Spatial Object's spatial presence. Units are always metric (meter, square meter or cubic meter).
 *
 * http://www.opengis.net/ont/geosparql#hasMetricSize
 */
export const hasMetricSize: Property = 'http://www.opengis.net/ont/geosparql#hasMetricSize';

/**
 * has perimeter length in meters
 * 
 * The length of the perimeter of a Spatial Object in meters.
 *
 * http://www.opengis.net/ont/geosparql#hasMetricPerimeterLength
 */
export const hasMetricPerimeterLength: Property = 'http://www.opengis.net/ont/geosparql#hasMetricPerimeterLength';

/**
 * has area in square meters
 * 
 * The area of a Spatial Object in square meters.
 *
 * http://www.opengis.net/ont/geosparql#hasMetricArea
 */
export const hasMetricArea: Property = 'http://www.opengis.net/ont/geosparql#hasMetricArea';

/**
 * has volume in cubic meters
 * 
 * The volume of a Spatial Object in cubic meters.
 *
 * http://www.opengis.net/ont/geosparql#hasMetricVolume
 */
export const hasMetricVolume: Property = 'http://www.opengis.net/ont/geosparql#hasMetricVolume';

/**
 * Feature
 * 
 * A discrete spatial phenomenon in a universe of discourse.
 *
 * http://www.opengis.net/ont/geosparql#Feature
 */
export const Feature: Class = 'http://www.opengis.net/ont/geosparql#Feature';

/**
 * Geometry
 * 
 * A coherent set of direct positions in space. The positions are held within a Spatial Reference System (SRS).
 *
 * http://www.opengis.net/ont/geosparql#Geometry
 */
export const Geometry: Class = 'http://www.opengis.net/ont/geosparql#Geometry';

/**
 * Spatial Object
 * 
 * Anything spatial (being or having a shape, position or an extent).
 *
 * http://www.opengis.net/ont/geosparql#SpatialObject
 */
export const SpatialObject: Class = 'http://www.opengis.net/ont/geosparql#SpatialObject';

/**
 * Feature Collection
 * 
 * A collection of individual Features.
 *
 * http://www.opengis.net/ont/geosparql#FeatureCollection
 */
export const FeatureCollection: Class = 'http://www.opengis.net/ont/geosparql#FeatureCollection';

/**
 * Spatial Object Collection
 * 
 * A collection of individual Spatial Objects.
 *
 * http://www.opengis.net/ont/geosparql#SpatialObjectCollection
 */
export const SpatialObjectCollection: Class = 'http://www.opengis.net/ont/geosparql#SpatialObjectCollection';

/**
 * Geometry Collection
 * 
 * A collection of individual Geometries.
 *
 * http://www.opengis.net/ont/geosparql#GeometryCollection
 */
export const GeometryCollection: Class = 'http://www.opengis.net/ont/geosparql#GeometryCollection';

/**
 * GML Literal
 * 
 * A GML serialization of a Geometry object.
 *
 * http://www.opengis.net/ont/geosparql#gmlLiteral
 */
export const gmlLiteral: Datatype = 'http://www.opengis.net/ont/geosparql#gmlLiteral';

/**
 * Well-known Text Literal
 * 
 * A Well-known Text serialization of a Geometry object.
 *
 * http://www.opengis.net/ont/geosparql#wktLiteral
 */
export const wktLiteral: Datatype = 'http://www.opengis.net/ont/geosparql#wktLiteral';

/**
 * GeoJSON Literal
 * 
 * A GeoJSON serialization of a Geometry object.
 *
 * http://www.opengis.net/ont/geosparql#geoJSONLiteral
 */
export const geoJSONLiteral: Datatype = 'http://www.opengis.net/ont/geosparql#geoJSONLiteral';

/**
 * KML Literal
 * 
 * A KML serialization of a Geometry object.
 *
 * http://www.opengis.net/ont/geosparql#kmlLiteral
 */
export const kmlLiteral: Datatype = 'http://www.opengis.net/ont/geosparql#kmlLiteral';

/**
 * DGGS Literal
 * 
 * A textual serialization of a Discrete Global Grid (DGGS) Geometry object.
 *
 * http://www.opengis.net/ont/geosparql#dggsLiteral
 */
export const dggsLiteral: Datatype = 'http://www.opengis.net/ont/geosparql#dggsLiteral';

export const _BASE: IriString = 'http://www.opengis.net/ont/geosparql#';
export const _PREFIX: string = 'ogc';