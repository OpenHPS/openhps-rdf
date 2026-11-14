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
 * iBeacon
 * 
 * An iBeacon is a beacon that advertises the proximity beacon packet specification.
 *
 * http://purl.org/poso/common/iBeacon
 */
export const iBeacon: OwlClass = 'http://purl.org/poso/common/iBeacon';

/**
 * AltBeacon
 * 
 * AltBeacon is an open and interoperable proximity beacon specification.
 *
 * http://purl.org/poso/common/AltBeacon
 */
export const AltBeacon: OwlClass = 'http://purl.org/poso/common/AltBeacon';

/**
 * Eddystone
 * 
 * Eddystone was a Bluetooth Low Energy beacon profile released by Google in July 2015.
 *
 * http://purl.org/poso/common/EddystoneBeacon
 */
export const EddystoneBeacon: OwlClass = 'http://purl.org/poso/common/EddystoneBeacon';

/**
 * Eddystone-EID
 * 
 * 
 *
 * http://purl.org/poso/common/EddystoneEID
 */
export const EddystoneEID: OwlClass = 'http://purl.org/poso/common/EddystoneEID';

/**
 * Eddystone-TLM
 * 
 * Eddystone-TLM provides telemetry information. It can include the battery voltage, temperature, advertisement count and uptime.
 *
 * http://purl.org/poso/common/EddystoneTLM
 */
export const EddystoneTLM: OwlClass = 'http://purl.org/poso/common/EddystoneTLM';

/**
 * Eddystone-UID
 * 
 * Eddystone UID provides a 10 byte namespace and 6 byte instance identifier.
 *
 * http://purl.org/poso/common/EddystoneUID
 */
export const EddystoneUID: OwlClass = 'http://purl.org/poso/common/EddystoneUID';

/**
 * Eddystone-URL
 * 
 * Eddystone-URL can broadcast a short encoded URL.
 *
 * http://purl.org/poso/common/EddystoneURL
 */
export const EddystoneURL: OwlClass = 'http://purl.org/poso/common/EddystoneURL';

/**
 * SemBeacon
 * 
 * A SemBeacon is a semantic beacon based on AltBeacon and Eddystone-URL.
 *
 * http://purl.org/poso/common/SemBeacon
 */
export const SemBeacon: OwlClass = 'http://purl.org/poso/common/SemBeacon';

/**
 * has reference RSSI
 * 
 * has a reference Received Signal Strength Indicator at a specified distance.
 *
 * http://purl.org/poso/common/hasReferenceRSSI
 */
export const hasReferenceRSSI: OwlObjectProperty = 'http://purl.org/poso/common/hasReferenceRSSI';

/**
 * major
 * 
 * 
 *
 * http://purl.org/poso/common/major
 */
export const major: OwlDatatypeProperty = 'http://purl.org/poso/common/major';

/**
 * minor
 * 
 * 
 *
 * http://purl.org/poso/common/minor
 */
export const minor: OwlDatatypeProperty = 'http://purl.org/poso/common/minor';

/**
 * proximity UUID
 * 
 * 
 *
 * http://purl.org/poso/common/proximityUUID
 */
export const proximityUUID: OwlDatatypeProperty = 'http://purl.org/poso/common/proximityUUID';

/**
 * Absolute position output
 * 
 * 
 *
 * http://purl.org/poso/common/AbsolutePositionOutput
 */
export const AbsolutePositionOutput: OtherIndividual = 'http://purl.org/poso/common/AbsolutePositionOutput';

/**
 * Anyplace
 * 
 * Anyplace is a first-of-a-kind indoor information service offering GPS-less localization, navigation and search inside buildings using ordinary smartphones.
 *
 * http://purl.org/poso/common/Anyplace
 */
export const Anyplace: OtherIndividual = 'http://purl.org/poso/common/Anyplace';

/**
 * BeiDou Navigation Satellite System
 * 
 * BeiDou, or BDS, is a global GNSS owned and operated by the People's Republic of China. BDS was formally commissioned in 2020. The operational system consists of 35 satellites. BDS was previously called Compass.
 *
 * http://purl.org/poso/common/BDS
 */
export const BDS: OtherIndividual = 'http://purl.org/poso/common/BDS';

/**
 * Earth deployment
 * 
 * A generic deployment for any positioning system deployment on Earth.
 *
 * http://purl.org/poso/common/EarthDeployment
 */
export const EarthDeployment: OtherIndividual = 'http://purl.org/poso/common/EarthDeployment';

/**
 * Channel State Information fingerprinting
 * 
 * 
 *
 * http://purl.org/poso/common/CSIFingerprinting
 */
export const CSIFingerprinting: OtherIndividual = 'http://purl.org/poso/common/CSIFingerprinting';

/**
 * Foot-mounted pedestrian dead reckoning
 * 
 * Foot-mounted pedestrian dead reckoning uses a sensor on the foot of a pedestrian to detect steps.
 *
 * http://purl.org/poso/common/FootMountedPDR
 */
export const FootMountedPDR: OtherIndividual = 'http://purl.org/poso/common/FootMountedPDR';

/**
 * Global Navigation Satellite System
 * 
 * GLONASS (Globalnaya Navigazionnaya Sputnikovaya Sistema, or Global Navigation Satellite System) is a global GNSS owned and operated by the Russian Federation. The fully operational system consists of 24+ satellites.
 *
 * http://purl.org/poso/common/GLONASS
 */
export const GLONASS: OtherIndividual = 'http://purl.org/poso/common/GLONASS';

/**
 * Global Positioning System
 * 
 * The Global Positioning System (GPS) is a U.S.-owned utility that provides users with positioning, navigation, and timing (PNT) services. This system consists of three segments: the space segment, the control segment, and the user segment. The U.S. Space Force develops, maintains, and operates the space and control segments.
 *
 * http://purl.org/poso/common/GPS
 */
export const GPS: OtherIndividual = 'http://purl.org/poso/common/GPS';

/**
 * Galileo
 * 
 * Galileo is a global GNSS owned and operated by the European Union. The EU declared the start of Galileo Initial Services in 2016 and plans to complete the system of 24+ satellites in 2021.
 *
 * http://purl.org/poso/common/Galileo
 */
export const Galileo: OtherIndividual = 'http://purl.org/poso/common/Galileo';

/**
 * 
 * 
 * The Geolocation API is a W3C specification that provides geographical location data based on the capabilities of the hosting device.
 *
 * http://purl.org/poso/common/GeolocationAPI
 */
export const GeolocationAPI: OtherIndividual = 'http://purl.org/poso/common/GeolocationAPI';

/**
 * Hector SLAM
 * 
 * 
 *
 * http://purl.org/poso/common/HectorSLAM
 */
export const HectorSLAM: OtherIndividual = 'http://purl.org/poso/common/HectorSLAM';

/**
 * Indian Regional Navigation Satellite System
 * 
 * IRNSS is a regional GNSS owned and operated by the Government of India. IRNSS is an autonomous system designed to cover the Indian region and 1500 km around the Indian mainland. The system consists of 7 satellites. In 2016, India renamed IRNSS as the Navigation Indian Constellation (NavIC, meaning "sailor" or "navigator").
 *
 * http://purl.org/poso/common/IRNSS
 */
export const IRNSS: OtherIndividual = 'http://purl.org/poso/common/IRNSS';

/**
 * Navigation Indian Constellation
 * 
 * IRNSS is a regional GNSS owned and operated by the Government of India. IRNSS is an autonomous system designed to cover the Indian region and 1500 km around the Indian mainland. The system consists of 7 satellites. In 2016, India renamed IRNSS as the Navigation Indian Constellation (NavIC, meaning "sailor" or "navigator").
 *
 * http://purl.org/poso/common/NavIC
 */
export const NavIC: OtherIndividual = 'http://purl.org/poso/common/NavIC';

/**
 * IndoorAtlas
 * 
 * Cross-platform indoor positioning SDK powered by patented 6-layer sensor fusion core. Fast development cycles. Easy to set up. Proven by 10,000+ developers.
 *
 * http://purl.org/poso/common/IndoorAtlas
 */
export const IndoorAtlas: OtherIndividual = 'http://purl.org/poso/common/IndoorAtlas';

/**
 * k-NN fingerprinting
 * 
 * k-Neirest Neighbour fingerprinting is a fingerprinting technique where a number (k) of matches are selected, as opposed to one single fingerprint match. The final output position is the (weighted) average of the k-number of selected fingerprints.
 *
 * http://purl.org/poso/common/KNNFingerprinting
 */
export const KNNFingerprinting: OtherIndividual = 'http://purl.org/poso/common/KNNFingerprinting';

/**
 * Log-distance path loss model
 * 
 * The log-distance path loss model is a radio propagation model that predicts the path loss a signal encounters inside a building or densely populated areas over distance.
 *
 * http://purl.org/poso/common/LDPL
 */
export const LDPL: OtherIndividual = 'http://purl.org/poso/common/LDPL';

/**
 * Midpoint lateration
 * 
 * Midpoint lateration uses the midpoint of two points.
 *
 * http://purl.org/poso/common/MidpointLateration
 */
export const MidpointLateration: OtherIndividual = 'http://purl.org/poso/common/MidpointLateration';

/**
 * Non-linear least squares multilateration
 * 
 * 
 *
 * http://purl.org/poso/common/NLSMultilateration
 */
export const NLSMultilateration: OtherIndividual = 'http://purl.org/poso/common/NLSMultilateration';

/**
 * ORB-SLAM2
 * 
 * 
 *
 * http://purl.org/poso/common/ORBSLAM2
 */
export const ORBSLAM2: OtherIndividual = 'http://purl.org/poso/common/ORBSLAM2';

/**
 * ORB-SLAM3
 * 
 * 
 *
 * http://purl.org/poso/common/ORBSLAM3
 */
export const ORBSLAM3: OtherIndividual = 'http://purl.org/poso/common/ORBSLAM3';

/**
 * OpenHPS
 * 
 * OpenHPS is an open source hybrid positioning system to help developers fuse various positioning technologies and algorithms. The system offers a modular data processing framework with each modules ranging from computer vision to common algorithms such as fingerprinting or data persistence of sampled data.
 *
 * http://purl.org/poso/common/OpenHPS
 */
export const OpenHPS: OtherIndividual = 'http://purl.org/poso/common/OpenHPS';

/**
 * OpenVSLAM
 * 
 * 
 *
 * http://purl.org/poso/common/OpenVSLAM
 */
export const OpenVSLAM: OtherIndividual = 'http://purl.org/poso/common/OpenVSLAM';

/**
 * Probabilistic fingerprinting
 * 
 * 
 *
 * http://purl.org/poso/common/ProbabilisticFingerprinting
 */
export const ProbabilisticFingerprinting: OtherIndividual = 'http://purl.org/poso/common/ProbabilisticFingerprinting';

/**
 * Quasi-Zenith Satellite System
 * 
 * QZSS is a regional GNSS owned by the Government of Japan and operated by QZS System Service Inc. (QSS). QZSS complements GPS to improve coverage in East Asia and Oceania. Japan declared the official start of QZSS services in 2018 with 4 operational satellites, and plans to expand the constellation to 7 satellites by 2023 for autonomous capability.
 *
 * http://purl.org/poso/common/QZSS
 */
export const QZSS: OtherIndividual = 'http://purl.org/poso/common/QZSS';

/**
 * RF cell identification
 * 
 * RF cell identification is a technique that determines the position based on the closest RF landmark in range.
 *
 * http://purl.org/poso/common/RFCellIdentification
 */
export const RFCellIdentification: OtherIndividual = 'http://purl.org/poso/common/RFCellIdentification';

/**
 * Robotics Operating System
 * 
 * ROS (Robot Operating System) provides libraries and tools to help software developers create robot applications. It provides hardware abstraction, device drivers, libraries, visualizers, message-passing, package management, and more.
 *
 * http://purl.org/poso/common/ROS
 */
export const ROS: OtherIndividual = 'http://purl.org/poso/common/ROS';

/**
 * Support Vector Machine fingerprinting
 * 
 * 
 *
 * http://purl.org/poso/common/SVMFingerprinting
 */
export const SVMFingerprinting: OtherIndividual = 'http://purl.org/poso/common/SVMFingerprinting';

/**
 * Sony Nimway
 * 
 * Nimway from Sony is a complete smart office solution for the people-centred workplace. Acting as your personal assistant throughout the workday, it facilitates many otherwise time-consuming tasks, like finding your way to a meeting room, locating a colleague or booking a desk.
 *
 * http://purl.org/poso/common/SonyNimway
 */
export const SonyNimway: OtherIndividual = 'http://purl.org/poso/common/SonyNimway';

/**
 * Weighted accuracy fusion
 * 
 * Decision level fusion based on weighted average of the accuracy^-1.
 *
 * http://purl.org/poso/common/WeightedAccuracyFusion
 */
export const WeightedAccuracyFusion: OtherIndividual = 'http://purl.org/poso/common/WeightedAccuracyFusion';

export const _BASE: IriString = 'http://purl.org/poso/common/';
export const _PREFIX: string = 'posoc';