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
 * angle
 * 
 * Quantitative anglue result value for axis-angle representation.
 *
 * http://purl.org/poso/angle
 */
export const angle: OwlObjectProperty = 'http://purl.org/poso/angle';

/**
 * observes type
 * 
 * The relation between a system and an observable property class to identify that a system observes a specific type of property.
 *
 * http://purl.org/poso/observesType
 */
export const observesType: OwlObjectProperty = 'http://purl.org/poso/observesType';

/**
 * y-axis value
 * 
 * Quantitative result value along the Y-axis of a spatial sensor or result.
 *
 * http://purl.org/poso/yAxisValue
 */
export const yAxisValue: OwlObjectProperty = 'http://purl.org/poso/yAxisValue';

/**
 * Acceleration
 * 
 * Acceleration is the (instantaneous) rate of change of velocity.
 *
 * http://purl.org/poso/Acceleration
 */
export const Acceleration: OwlClass = 'http://purl.org/poso/Acceleration';

/**
 * Orientation
 * 
 * The orientation of a feature of interest in 2D or 3D space.
 *
 * http://purl.org/poso/Orientation
 */
export const Orientation: OwlClass = 'http://purl.org/poso/Orientation';

/**
 * Position
 * 
 * A position indicates where an entity is located.
 *
 * http://purl.org/poso/Position
 */
export const Position: OwlClass = 'http://purl.org/poso/Position';

/**
 * Relative signal strength
 * 
 * A relative signal strength is a received signal strength transmitted by another (RF) feature of interest.
 *
 * http://purl.org/poso/RelativeSignalStrength
 */
export const RelativeSignalStrength: OwlClass = 'http://purl.org/poso/RelativeSignalStrength';

/**
 * Relative distance
 * 
 * A relative distance is a quantitative distance relative to another feature of interest.
 *
 * http://purl.org/poso/RelativeDistance
 */
export const RelativeDistance: OwlClass = 'http://purl.org/poso/RelativeDistance';

/**
 * Relative position
 * 
 * A relative position is a position of a feature of interest with respect to the positions of other objects that this position is relative to.
 *
 * http://purl.org/poso/RelativePosition
 */
export const RelativePosition: OwlClass = 'http://purl.org/poso/RelativePosition';

/**
 * Velocity
 * 
 * Linear or angular velocity of a feature.
 *
 * http://purl.org/poso/Velocity
 */
export const Velocity: OwlClass = 'http://purl.org/poso/Velocity';

/**
 * Absolute position
 * 
 * An absolute position describes the position of an entity based on a fixed point in space. Usually this space is the Earth and the position is expressed in latitude and longitude.
 *
 * http://purl.org/poso/AbsolutePosition
 */
export const AbsolutePosition: OwlClass = 'http://purl.org/poso/AbsolutePosition';

/**
 * Euler orientation
 * 
 * 
 *
 * http://purl.org/poso/EulerOrientation
 */
export const EulerOrientation: OwlClass = 'http://purl.org/poso/EulerOrientation';

/**
 * Angular acceleration
 * 
 * 
 *
 * http://purl.org/poso/AngularAcceleration
 */
export const AngularAcceleration: OwlClass = 'http://purl.org/poso/AngularAcceleration';

/**
 * Angular movement
 * 
 * Angular movement around a certain origin point.
 *
 * http://purl.org/poso/AngularMovement
 */
export const AngularMovement: OwlClass = 'http://purl.org/poso/AngularMovement';

/**
 * Movement
 * 
 * Movement stimulus triggering an update of a position.
 *
 * http://purl.org/poso/Movement
 */
export const Movement: OwlClass = 'http://purl.org/poso/Movement';

/**
 * Angular velocity
 * 
 * Angular velocity is the momentum around a point of origin.
 *
 * http://purl.org/poso/AngularVelocity
 */
export const AngularVelocity: OwlClass = 'http://purl.org/poso/AngularVelocity';

/**
 * Angulation
 * 
 * Angulation is a triangulation method to determine a position based on the relative angles to other objects.
 *
 * http://purl.org/poso/Angulation
 */
export const Angulation: OwlClass = 'http://purl.org/poso/Angulation';

/**
 * Triangulation
 * 
 * Triangulation is the procedure of determining a position using relative angles to a feature of interest with a known position.
 *
 * http://purl.org/poso/Triangulation
 */
export const Triangulation: OwlClass = 'http://purl.org/poso/Triangulation';

/**
 * Auditory landmark
 * 
 * A spatial landmark that can be observed by sound.
 *
 * http://purl.org/poso/AuditoryLandmark
 */
export const AuditoryLandmark: OwlClass = 'http://purl.org/poso/AuditoryLandmark';

/**
 * Landmark
 * 
 * A landmark is a feature with a known position, that can be used to identify the position of an object that has a relative position with this feature.
 *
 * http://purl.org/poso/Landmark
 */
export const Landmark: OwlClass = 'http://purl.org/poso/Landmark';

/**
 * Axis-angle orientation
 * 
 * The axis-angle orientation is an orientation representation where the x, y and z values are rotated with a certain angle.
 *
 * http://purl.org/poso/AxisAngleOrientation
 */
export const AxisAngleOrientation: OwlClass = 'http://purl.org/poso/AxisAngleOrientation';

/**
 * Bluetooth beacon
 * 
 * A Bluetooth beacon is an RF landmark that advertises its transmission power and other optional information. Based on the signal strength receivers of this advertisement can determine the approximate distance.
 *
 * http://purl.org/poso/BluetoothBeacon
 */
export const BluetoothBeacon: OwlClass = 'http://purl.org/poso/BluetoothBeacon';

/**
 * RF landmark
 * 
 * A radio frequency landmark is a transmitting landmark that can be observed by its transmitting signals.
 *
 * http://purl.org/poso/RFLandmark
 */
export const RFLandmark: OwlClass = 'http://purl.org/poso/RFLandmark';

/**
 * Bluetooth receiver
 * 
 * 
 *
 * http://purl.org/poso/BluetoothReceiver
 */
export const BluetoothReceiver: OwlClass = 'http://purl.org/poso/BluetoothReceiver';

/**
 * Calibration magnitude procedure
 * 
 * 
 *
 * http://purl.org/poso/CalibrationMagnitudeProcedure
 */
export const CalibrationMagnitudeProcedure: OwlClass = 'http://purl.org/poso/CalibrationMagnitudeProcedure';

/**
 * Calibration procedure
 * 
 * Calibration is the act of using sensor data obtained by a user to configure a system to output data with a reliable result.
 *
 * http://purl.org/poso/CalibrationProcedure
 */
export const CalibrationProcedure: OwlClass = 'http://purl.org/poso/CalibrationProcedure';

/**
 * Calibration offset procedure
 * 
 * 
 *
 * http://purl.org/poso/CalibrationOffsetProcedure
 */
export const CalibrationOffsetProcedure: OwlClass = 'http://purl.org/poso/CalibrationOffsetProcedure';

/**
 * Cell identification
 * 
 * Cell identification is a positioning procedure using the position of one landmark that is within the cell.
 *
 * http://purl.org/poso/CellIdentification
 */
export const CellIdentification: OwlClass = 'http://purl.org/poso/CellIdentification';

/**
 * Positioning technique
 * 
 * A positioning technique is a procedure to sample sensor data to an output position.
 *
 * http://purl.org/poso/PositioningTechnique
 */
export const PositioningTechnique: OwlClass = 'http://purl.org/poso/PositioningTechnique';

/**
 * Dead reckoning
 * 
 * Dead reckoning is the Procedure of calculating the current position of a moving FeatureOfInterest by using its previous position and Sensor Observation's indicating its heading and velocity.
 *
 * http://purl.org/poso/DeadReckoning
 */
export const DeadReckoning: OwlClass = 'http://purl.org/poso/DeadReckoning';

/**
 * Fingerprint
 * 
 * A fingerprint is a scene analysis at a particular absolute position.
 *
 * http://purl.org/poso/Fingerprint
 */
export const Fingerprint: OwlClass = 'http://purl.org/poso/Fingerprint';

/**
 * Fingerprinting
 * 
 * Fingerprinting is a positioning Procedure where sensor data is collected at a specific position and orientation. During the offline-stage of a positioning system, the significant data features are extracted and stored for that position. In the online-stage, the closest match(es) of the features are determined to predict the position.
 *
 * http://purl.org/poso/Fingerprinting
 */
export const Fingerprinting: OwlClass = 'http://purl.org/poso/Fingerprinting';

/**
 * High level sensor fusion
 * 
 * High level sensor fusion is about fusing both objects and their trajectories. We're not only relying on detections, but also on predictions and tracking.
 *
 * http://purl.org/poso/HighLevelFusion
 */
export const HighLevelFusion: OwlClass = 'http://purl.org/poso/HighLevelFusion';

/**
 * Sensor fusion
 * 
 * Sensor fusion is a procedure where multiple sensor data is combined to obtain a more reliable or accurate result.
 *
 * http://purl.org/poso/SensorFusion
 */
export const SensorFusion: OwlClass = 'http://purl.org/poso/SensorFusion';

/**
 * Indoor deployment
 * 
 * Describes the spatial deployment of a System in an indoor environment.
 *
 * http://purl.org/poso/IndoorDeployment
 */
export const IndoorDeployment: OwlClass = 'http://purl.org/poso/IndoorDeployment';

/**
 * Indoor positioning system
 * 
 * A positioning system that is meant to perform indoor positioning of a feature of interest.
 *
 * http://purl.org/poso/IndoorPositioningSystem
 */
export const IndoorPositioningSystem: OwlClass = 'http://purl.org/poso/IndoorPositioningSystem';

/**
 * Positioning system
 * 
 * A positioning system is a system of instrumental and computational components for determining position.
 *
 * http://purl.org/poso/PositioningSystem
 */
export const PositioningSystem: OwlClass = 'http://purl.org/poso/PositioningSystem';

/**
 * Inertial positioning system
 * 
 * An inertial positioning system is a positioning system employing accelerometers, gyroscopes, and computer as integral components to determine coordinates of points or objects relative to an initial known reference point
 *
 * http://purl.org/poso/InertialPositioningSystem
 */
export const InertialPositioningSystem: OwlClass = 'http://purl.org/poso/InertialPositioningSystem';

/**
 * Integrated positioning system
 * 
 * An integrated positioning system is a positioning system that incorporates multiple positioning technologies.
 *
 * http://purl.org/poso/IntegratedPositioningSystem
 */
export const IntegratedPositioningSystem: OwlClass = 'http://purl.org/poso/IntegratedPositioningSystem';

/**
 * Lateration
 * 
 * 
 *
 * http://purl.org/poso/Lateration
 */
export const Lateration: OwlClass = 'http://purl.org/poso/Lateration';

/**
 * Linear acceleration
 * 
 * 
 *
 * http://purl.org/poso/LinearAcceleration
 */
export const LinearAcceleration: OwlClass = 'http://purl.org/poso/LinearAcceleration';

/**
 * Linear movement
 * 
 * Linear movement along a certain axis.
 *
 * http://purl.org/poso/LinearMovement
 */
export const LinearMovement: OwlClass = 'http://purl.org/poso/LinearMovement';

/**
 * Linear velocity
 * 
 * Linear velocity is the momentum along one ore more axis.
 *
 * http://purl.org/poso/LinearVelocity
 */
export const LinearVelocity: OwlClass = 'http://purl.org/poso/LinearVelocity';

/**
 * Location based service
 * 
 * A location based service (LBS) is a service that provides the location of a person or object. It provides this information without the required knowledge of the underlying technologies and algorithms.
 *
 * http://purl.org/poso/LocationBasedService
 */
export const LocationBasedService: OwlClass = 'http://purl.org/poso/LocationBasedService';

/**
 * Low level sensor fusion
 * 
 * Low Level Sensor Fusion is about fusing the raw data coming from multiple sensors. For example, we fuse point clouds coming from LiDARs and pixels coming from cameras.
 *
 * http://purl.org/poso/LowLevelFusion
 */
export const LowLevelFusion: OwlClass = 'http://purl.org/poso/LowLevelFusion';

/**
 * Magnetic odometry
 * 
 * Magnetic field odometry is the procedure of detecting movement by analyizing how the magnetic field is changing from one Observation to another.
 *
 * http://purl.org/poso/MagneticOdometry
 */
export const MagneticOdometry: OwlClass = 'http://purl.org/poso/MagneticOdometry';

/**
 * Odometry
 * 
 * Odometry is the Procedure of calculating the current position of a moving FeatureOfInterest by using its previous position and Sensor Observation's indicating its heading and velocity.
 *
 * http://purl.org/poso/Odometry
 */
export const Odometry: OwlClass = 'http://purl.org/poso/Odometry';

/**
 * Map output
 * 
 * 
 *
 * http://purl.org/poso/MapOutput
 */
export const MapOutput: OwlClass = 'http://purl.org/poso/MapOutput';

/**
 * Mid level sensor fusion
 * 
 * Mid-Level sensor fusion is about fusing the objects detected independently on sensor data.
 *
 * http://purl.org/poso/MidLevelFusion
 */
export const MidLevelFusion: OwlClass = 'http://purl.org/poso/MidLevelFusion';

/**
 * Multilateration
 * 
 * Multilateration is the procedure of determining a position using relative distances to other known positions.
 *
 * http://purl.org/poso/Multilateration
 */
export const Multilateration: OwlClass = 'http://purl.org/poso/Multilateration';

/**
 * Optical positioning system
 * 
 * An optical positioning system is a positioning system that determines the position of an object by means of the properties of light.
 *
 * http://purl.org/poso/OpticalPositioningSystem
 */
export const OpticalPositioningSystem: OwlClass = 'http://purl.org/poso/OpticalPositioningSystem';

/**
 * Orientation output
 * 
 * 
 *
 * http://purl.org/poso/OrientationOutput
 */
export const OrientationOutput: OwlClass = 'http://purl.org/poso/OrientationOutput';

/**
 * Outdoor deployment
 * 
 * Describes the deployment of a System in an outdoor environment.
 *
 * http://purl.org/poso/OutdoorDeployment
 */
export const OutdoorDeployment: OwlClass = 'http://purl.org/poso/OutdoorDeployment';

/**
 * Outdoor positioning system
 * 
 * An outdoor positioning system defines a system that is used to determine a position outside a building without specifying the underlying technology.
 *
 * http://purl.org/poso/OutdoorPositioningSystem
 */
export const OutdoorPositioningSystem: OwlClass = 'http://purl.org/poso/OutdoorPositioningSystem';

/**
 * Pedestrian dead reckoning
 * 
 * Pedestrian dead reckoning (PDR) is a positioning technique where the object is assumed to be a pedestrian that is walking or running. Using this knowledge, the dead reckoning involves the detection of steps and the step length to more accurately predict the movement.
 *
 * http://purl.org/poso/PDR
 */
export const PDR: OwlClass = 'http://purl.org/poso/PDR';

/**
 * Polygonal accuracy
 * 
 * 
 *
 * http://purl.org/poso/PolygonalAccuracy
 */
export const PolygonalAccuracy: OwlClass = 'http://purl.org/poso/PolygonalAccuracy';

/**
 * Position output
 * 
 * 
 *
 * http://purl.org/poso/PositionOutput
 */
export const PositionOutput: OwlClass = 'http://purl.org/poso/PositionOutput';

/**
 * Positioning platform
 * 
 * A positioning platform is a framework, architecture or platform used to develop and host a positioning system.
 *
 * http://purl.org/poso/PositioningPlatform
 */
export const PositioningPlatform: OwlClass = 'http://purl.org/poso/PositioningPlatform';

/**
 * 
 * 
 * Stimulus whenever two Feature of Interests are within close proximity.
 *
 * http://purl.org/poso/Proximity
 */
export const Proximity: OwlClass = 'http://purl.org/poso/Proximity';

/**
 * Quaternion orientation
 * 
 * 
 *
 * http://purl.org/poso/QuaternionOrientation
 */
export const QuaternionOrientation: OwlClass = 'http://purl.org/poso/QuaternionOrientation';

/**
 * Radio propagation
 * 
 * The radio propagation formulas cover the computation of the radio waves through a medium (e.g. air).
 *
 * http://purl.org/poso/RadioPropagation
 */
export const RadioPropagation: OwlClass = 'http://purl.org/poso/RadioPropagation';

/**
 * Relative acceleration
 * 
 * A relative acceleration is a quantitative acceleration relative to another feature of interest.
 *
 * http://purl.org/poso/RelativeAcceleration
 */
export const RelativeAcceleration: OwlClass = 'http://purl.org/poso/RelativeAcceleration';

/**
 * Relative angle
 * 
 * A relative angle is a quantitative angle relative to another feature of interest.
 *
 * http://purl.org/poso/RelativeAngle
 */
export const RelativeAngle: OwlClass = 'http://purl.org/poso/RelativeAngle';

/**
 * Relative velocity
 * 
 * A relative velocity is a quantitative velocity relative to another feature of interest.
 *
 * http://purl.org/poso/RelativeVelocity
 */
export const RelativeVelocity: OwlClass = 'http://purl.org/poso/RelativeVelocity';

/**
 * Simultaneous localisation and mapping
 * 
 * Simultaneous localization and mapping (SLAM) is the computational problem of constructing or updating a map of an unknown environment while simultaneously keeping track of an agent's location within it.
 *
 * http://purl.org/poso/SLAM
 */
export const SLAM: OwlClass = 'http://purl.org/poso/SLAM';

/**
 * Spatial Reference System
 * 
 * An identifiable and observable spatial reference system that represents the System's ability to operate its primary purpose in a specified reference system.
 *
 * http://purl.org/poso/SRS
 */
export const SRS: OwlClass = 'http://purl.org/poso/SRS';

/**
 * Satellite positioning system
 * 
 * In this context, satellite positioning implies the use of radio signals transmitted from "active" artificial objects orbiting the Earth and received by "passive" instruments on or near the Earth's surface to determine position, velocity, and/or attitude of an object.
 *
 * http://purl.org/poso/SatellitePositioningSystem
 */
export const SatellitePositioningSystem: OwlClass = 'http://purl.org/poso/SatellitePositioningSystem';

/**
 * Sensor input
 * 
 * Sensor input is input data provided by a sosa:Sensor
 *
 * http://purl.org/poso/SensorInput
 */
export const SensorInput: OwlClass = 'http://purl.org/poso/SensorInput';

/**
 * Tracked feature
 * 
 * A feature of interest that is being tracked by a positioning system. This is the feature for which a position is observed.
 *
 * http://purl.org/poso/TrackedFeature
 */
export const TrackedFeature: OwlClass = 'http://purl.org/poso/TrackedFeature';

/**
 * Visual simultaneous localisation and mapping
 * 
 * Visual simultaneous localisation and mapping (VSLAM) is a positioning techniques that uses visual imagery to map an environment. Positioning works by detecting features of interest in image frames and comparing how these features move from one frame to another.
 *
 * http://purl.org/poso/VSLAM
 */
export const VSLAM: OwlClass = 'http://purl.org/poso/VSLAM';

/**
 * Virtual landmark
 * 
 * A virtual landmark is a spatial landmark with a known absolute or relative position but which is not detectable by any sensors without additional context.
 *
 * http://purl.org/poso/VirtualLandmark
 */
export const VirtualLandmark: OwlClass = 'http://purl.org/poso/VirtualLandmark';

/**
 * Visual input
 * 
 * 
 *
 * http://purl.org/poso/VisualInput
 */
export const VisualInput: OwlClass = 'http://purl.org/poso/VisualInput';

/**
 * Visual landmark
 * 
 * A visual landmark is a feature of interest that visually present in the space.
 *
 * http://purl.org/poso/VisualLandmark
 */
export const VisualLandmark: OwlClass = 'http://purl.org/poso/VisualLandmark';

/**
 * Visual odometry
 * 
 * Visual odometry is the procedure of detecting movement by analyzing how visual features are moving from one Observation image frame to another.
 *
 * http://purl.org/poso/VisualOdometry
 */
export const VisualOdometry: OwlClass = 'http://purl.org/poso/VisualOdometry';

/**
 * has acceleration
 * 
 * Property that links a feature of interest to a unique acceleration property related to this feature.
 *
 * http://purl.org/poso/hasAcceleration
 */
export const hasAcceleration: OwlObjectProperty = 'http://purl.org/poso/hasAcceleration';

/**
 * is acceleration of
 * 
 * 
 *
 * http://purl.org/poso/isAccelerationOf
 */
export const isAccelerationOf: OwlObjectProperty = 'http://purl.org/poso/isAccelerationOf';

/**
 * has accuracy
 * 
 * The accuracy of an entity.
 *
 * http://purl.org/poso/hasAccuracy
 */
export const hasAccuracy: OwlObjectProperty = 'http://purl.org/poso/hasAccuracy';

/**
 * has coordinate reference system
 * 
 * 
 *
 * http://purl.org/poso/hasCRS
 */
export const hasCRS: OwlObjectProperty = 'http://purl.org/poso/hasCRS';

/**
 * has spatial reference system
 * 
 * Identifies an entity that has a spatial reference system in order to interpret the result.
 *
 * http://purl.org/poso/hasSRS
 */
export const hasSRS: OwlObjectProperty = 'http://purl.org/poso/hasSRS';

/**
 * has orientation
 * 
 * Indicates the orientation of a feature of interest.
 *
 * http://purl.org/poso/hasOrientation
 */
export const hasOrientation: OwlObjectProperty = 'http://purl.org/poso/hasOrientation';

/**
 * is orientation of
 * 
 * 
 *
 * http://purl.org/poso/isOrientationOf
 */
export const isOrientationOf: OwlObjectProperty = 'http://purl.org/poso/isOrientationOf';

/**
 * has position
 * 
 * Indicates the absolute or relative position of a feature of interest.
 *
 * http://purl.org/poso/hasPosition
 */
export const hasPosition: OwlObjectProperty = 'http://purl.org/poso/hasPosition';

/**
 * is position of
 * 
 * 
 *
 * http://purl.org/poso/isPositionOf
 */
export const isPositionOf: OwlObjectProperty = 'http://purl.org/poso/isPositionOf';

/**
 * has relative signal strength
 * 
 * 
 *
 * http://purl.org/poso/hasRSS
 */
export const hasRSS: OwlObjectProperty = 'http://purl.org/poso/hasRSS';

/**
 * has relative position
 * 
 * 
 *
 * http://purl.org/poso/hasRelativePosition
 */
export const hasRelativePosition: OwlObjectProperty = 'http://purl.org/poso/hasRelativePosition';

/**
 * has relative distance
 * 
 * 
 *
 * http://purl.org/poso/hasRelativeDistance
 */
export const hasRelativeDistance: OwlObjectProperty = 'http://purl.org/poso/hasRelativeDistance';

/**
 * is relative to
 * 
 * Indicates a position or orientation to be relative to another feature of interest.
 *
 * http://purl.org/poso/isRelativeTo
 */
export const isRelativeTo: OwlObjectProperty = 'http://purl.org/poso/isRelativeTo';

/**
 * has velocity
 * 
 * Indicates the velocity of a feature of interest.
 *
 * http://purl.org/poso/hasVelocity
 */
export const hasVelocity: OwlObjectProperty = 'http://purl.org/poso/hasVelocity';

/**
 * is velocity of
 * 
 * 
 *
 * http://purl.org/poso/isVelocityOf
 */
export const isVelocityOf: OwlObjectProperty = 'http://purl.org/poso/isVelocityOf';

/**
 * in deployment
 * 
 * 
 *
 * http://purl.org/poso/inDeployment
 */
export const inDeployment: OwlObjectProperty = 'http://purl.org/poso/inDeployment';

/**
 * made by procecure
 * 
 * Input type outputted by another procedure
 *
 * http://purl.org/poso/madeByProcedure
 */
export const madeByProcedure: OwlObjectProperty = 'http://purl.org/poso/madeByProcedure';

/**
 * made by system
 * 
 * A relation to a re-usable system that computed the observation.
 *
 * http://purl.org/poso/madeBySystem
 */
export const madeBySystem: OwlObjectProperty = 'http://purl.org/poso/madeBySystem';

/**
 * pitch
 * 
 * Pitch is the rotation around the x-axis with respect to the object the yaw applies to.
 *
 * http://purl.org/poso/pitch
 */
export const pitch: OwlObjectProperty = 'http://purl.org/poso/pitch';

/**
 * roll
 * 
 * Roll is the rotation around the y-axis with respect to the object the roll applies to.
 *
 * http://purl.org/poso/roll
 */
export const roll: OwlObjectProperty = 'http://purl.org/poso/roll';

/**
 * scalar
 * 
 * 
 *
 * http://purl.org/poso/scalar
 */
export const scalar: OwlObjectProperty = 'http://purl.org/poso/scalar';

/**
 * x-axis value
 * 
 * Quantitative result value along the X-axis of a spatial sensor or result.
 *
 * http://purl.org/poso/xAxisValue
 */
export const xAxisValue: OwlObjectProperty = 'http://purl.org/poso/xAxisValue';

/**
 * yaw
 * 
 * Yaw is the rotation around the z-axis with respect to the object the yaw applies to.
 *
 * http://purl.org/poso/yaw
 */
export const yaw: OwlObjectProperty = 'http://purl.org/poso/yaw';

/**
 * z-axis value
 * 
 * Quantitative result value along the Z-axis of a spatial sensor.
 *
 * http://purl.org/poso/zAxisValue
 */
export const zAxisValue: OwlObjectProperty = 'http://purl.org/poso/zAxisValue';

export const _BASE: IriString = 'http://purl.org/poso/';
export const _PREFIX: string = 'poso';