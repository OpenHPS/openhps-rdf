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
 * Site
 * 
 * Site is a a specific locale with associated information describing its scope and context.
 *
 * https://w3id.org/seas/Site
 */
export const Site: OwlClass = 'https://w3id.org/seas/Site';

/**
 * Zone
 * 
 * A general aggregation of administration, control, monitoring or measurement.
 *
 * https://w3id.org/seas/Zone
 */
export const Zone: OwlClass = 'https://w3id.org/seas/Zone';

/**
 * PointOfControl
 * 
 * Access role associated with controlling a specific zone
 *
 * https://w3id.org/seas/PointOfControl
 */
export const PointOfControl: OwlClass = 'https://w3id.org/seas/PointOfControl';

/**
 * PointOfMeasurement
 * 
 * Access role of measurement information associated with a specific zone
 *
 * https://w3id.org/seas/PointOfMeasurement
 */
export const PointOfMeasurement: OwlClass = 'https://w3id.org/seas/PointOfMeasurement';

/**
 * SiteOfBuilding
 * 
 * Building site is a locale containing one or more separate buildings.
 *
 * https://w3id.org/seas/SiteOfBuilding
 */
export const SiteOfBuilding: OwlClass = 'https://w3id.org/seas/SiteOfBuilding';

/**
 * BuildingSpatialStructure
 * 
 * A man made structure with spatial properties
 *
 * https://w3id.org/seas/BuildingSpatialStructure
 */
export const BuildingSpatialStructure: OwlClass = 'https://w3id.org/seas/BuildingSpatialStructure';

/**
 * ZoneOfBuilding
 * 
 * An area of administration, control, monitoring or measurement inside a building.
 *
 * https://w3id.org/seas/ZoneOfBuilding
 */
export const ZoneOfBuilding: OwlClass = 'https://w3id.org/seas/ZoneOfBuilding';

/**
 * BuildingSpace
 * 
 * A Space is a 3D volume bounded by surfaces. According to the FIEMSER definition, a building space in SAREF defines the physical spaces of the building. A building space contains building items such as devices. 
 *
 * https://w3id.org/seas/BuildingSpace
 */
export const BuildingSpace: OwlClass = 'https://w3id.org/seas/BuildingSpace';

/**
 * BuildingSurface
 * 
 * Surfaces such as surface of a wall element that encloses a space. In GbXML a surface can consist of several surfaces.
 *
 * https://w3id.org/seas/BuildingSurface
 */
export const BuildingSurface: OwlClass = 'https://w3id.org/seas/BuildingSurface';

/**
 * BuildingSystem
 * 
 * Any system not directly identifiable as a single building item inside building. It can contains several BuildingItems
 *
 * https://w3id.org/seas/BuildingSystem
 */
export const BuildingSystem: OwlClass = 'https://w3id.org/seas/BuildingSystem';

/**
 * BuildingItem
 * 
 * A generalization of all the objects contained in building spaces that can have an unique location
 *
 * https://w3id.org/seas/BuildingItem
 */
export const BuildingItem: OwlClass = 'https://w3id.org/seas/BuildingItem';

/**
 * Construction
 * 
 * Constructions are structures connected with the ground which are made of construction materials and components and/or for which construction work is carried out.
 *
 * https://w3id.org/seas/Construction
 */
export const Construction: OwlClass = 'https://w3id.org/seas/Construction';

/**
 * CivilEngnineeringWork
 * 
 * Civil engineering works are all constructions not classified under buildings : railways, roads, bridges, highways, airport runways, dams etc.
 *
 * https://w3id.org/seas/CivilEngineeringWork
 */
export const CivilEngineeringWork: OwlClass = 'https://w3id.org/seas/CivilEngineeringWork';

/**
 * Building
 * 
 * Buildings are roofed constructions which can be used separately, have been built for permanent purposes, can be entered by persons and are suitable or intended for protecting persons, animals or objects.
 *
 * https://w3id.org/seas/Building
 */
export const Building: OwlClass = 'https://w3id.org/seas/Building';

/**
 * BuildingStorey
 * 
 * The storey represents a (nearly) horizontal aggregation of spaces that are vertically bound
 *
 * https://w3id.org/seas/BuildingStorey
 */
export const BuildingStorey: OwlClass = 'https://w3id.org/seas/BuildingStorey';

/**
 * BuildingRelated
 * 
 * Is a category that includes devices and systems as described by building related data models, such as FIEMSER 
 *
 * https://w3id.org/seas/BuildingRelated
 */
export const BuildingRelated: OwlClass = 'https://w3id.org/seas/BuildingRelated';

/**
 * GrossFloorArea
 * 
 * Gross floor area is generally defined by the area within the perimeter of the walls bounding the space.
 *
 * https://w3id.org/seas/GrossFloorArea
 */
export const GrossFloorArea: OwlClass = 'https://w3id.org/seas/GrossFloorArea';

/**
 * SurfaceOpening
 * 
 * A opening in a surface such as window or door
 *
 * https://w3id.org/seas/SurfaceOpening
 */
export const SurfaceOpening: OwlClass = 'https://w3id.org/seas/SurfaceOpening';

/**
 * Resident
 * 
 * A resident of a building (might include also pets?)
 *
 * https://w3id.org/seas/Resident
 */
export const Resident: OwlClass = 'https://w3id.org/seas/Resident';

/**
 * Furnishing
 * 
 * Other things such as furniture, decorations and other possibly movable articles that are typically not devices
 *
 * https://w3id.org/seas/Furnishing
 */
export const Furnishing: OwlClass = 'https://w3id.org/seas/Furnishing';

/**
 * BuildingPartition
 * 
 * A collection of secific (restriction to be added) rooms such as apartement or wing.
 *
 * https://w3id.org/seas/BuildingPartition
 */
export const BuildingPartition: OwlClass = 'https://w3id.org/seas/BuildingPartition';

/**
 * Room
 * 
 * A room in a building space enclosed by surfaces, this could also be modelled as role of space, not subclass of the space itself.
 *
 * https://w3id.org/seas/Room
 */
export const Room: OwlClass = 'https://w3id.org/seas/Room';

/**
 * Wall
 * 
 * A Wall is (tilted more than 60 percent) vertical surface could be divided to interior, exterior and underground wall
 *
 * https://w3id.org/seas/Wall
 */
export const Wall: OwlClass = 'https://w3id.org/seas/Wall';

/**
 * Floor
 * 
 * A floor is a upwards tilted horzontal surface, could be divided to interior, exposed (outside) or raised flooor.
 *
 * https://w3id.org/seas/Floor
 */
export const Floor: OwlClass = 'https://w3id.org/seas/Floor';

/**
 * Ceiling
 * 
 * Ceiling is a downwards tilted horizontal surface
 *
 * https://w3id.org/seas/Ceiling
 */
export const Ceiling: OwlClass = 'https://w3id.org/seas/Ceiling';

/**
 * Roof
 * 
 * A roof upwards tilted surface tilted up part of upper envelope of building.
 *
 * https://w3id.org/seas/Roof
 */
export const Roof: OwlClass = 'https://w3id.org/seas/Roof';

/**
 * Door
 * 
 * A door opening in a wall use for access between spaces.
 *
 * https://w3id.org/seas/Door
 */
export const Door: OwlClass = 'https://w3id.org/seas/Door';

/**
 * Window
 * 
 * A window is a typically opaque opening not used as access between spaces.
 *
 * https://w3id.org/seas/Window
 */
export const Window: OwlClass = 'https://w3id.org/seas/Window';

/**
 * ComfortProfile
 * 
 * Comfort profile settings for the resident is defined as evaluations (a seas:profile is an evaluation). The comfortprofile is related to a room or other space with its featureOfInterest. The generatedBy links to activity that produced it.
 *
 * https://w3id.org/seas/ComfortProfile
 */
export const ComfortProfile: OwlClass = 'https://w3id.org/seas/ComfortProfile';

/**
 * measurementPointOf
 * 
 * Specifies scope of administration, control or mesurement. Mainly either PointOfControl and PointOfMeasurment.
 *
 * https://w3id.org/seas/mesurementPointOf
 */
export const mesurementPointOf: OwlObjectProperty = 'https://w3id.org/seas/mesurementPointOf';

/**
 * controlPointOf
 * 
 * Specifies scope of administration, control or mesurement. Mainly either PointOfControl and PointOfMeasurment.
 *
 * https://w3id.org/seas/controlPointOf
 */
export const controlPointOf: OwlObjectProperty = 'https://w3id.org/seas/controlPointOf';

/**
 * 
 * 
 * The measurement in subMeasurement is contained in the value of higher level measurement
 *
 * https://w3id.org/seas/subMeasurement
 */
export const subMeasurement: OwlObjectProperty = 'https://w3id.org/seas/subMeasurement';

/**
 * 
 * 
 * Controlling the control point in subControl is already handled by the higher level control point.
 *
 * https://w3id.org/seas/subControl
 */
export const subControl: OwlObjectProperty = 'https://w3id.org/seas/subControl';

/**
 * nominal energy consumption
 * 
 * Energy consumption of a building per gross floor area.
 *
 * https://w3id.org/seas/nominalEnergyConsumption
 */
export const nominalEnergyConsumption: OwlObjectProperty = 'https://w3id.org/seas/nominalEnergyConsumption';

/**
 * isAdjacentToSpace
 * 
 * Surface is adjacent to a building space (or room).
 *
 * https://w3id.org/seas/isAdjacentToSpace
 */
export const isAdjacentToSpace: OwlObjectProperty = 'https://w3id.org/seas/isAdjacentToSpace';

/**
 * 
 * 
 * hasOpening
 *
 * https://w3id.org/seas/hasOpening
 */
export const hasOpening: OwlObjectProperty = 'https://w3id.org/seas/hasOpening';

/**
 * hasComfortProfile
 * 
 * Shortcut for linking comfort profile settings for typically the resident but is open to other roles such as visitors or building owner.
 *
 * https://w3id.org/seas/hasComfortProfile
 */
export const hasComfortProfile: OwlObjectProperty = 'https://w3id.org/seas/hasComfortProfile';

/**
 * 
 * 
 * The Seas Building BIM related vocabulary for the ITEA SEAS (Smart Energy Aware Systems) project. This ontology is targeted for defining structure of buildings (or more general facilities) and zones related to control and measurment with links to various BIM (Building Information Model) related standards.
 *
 * https://w3id.org/seas/BuildingOntology
 */
export const BuildingOntology: OtherIndividual = 'https://w3id.org/seas/BuildingOntology';

export const _BASE: IriString = 'https://w3id.org/seas/';
export const _PREFIX: string = 'seas';