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
 * Direction
 * 
 * Measurements of sensors are affected by the direction of the sensing device. This concept is used to reflect it.
 *
 * http://purl.org/iot/vocab/m3-lite#Direction
 */
export const Direction: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Direction';

/**
 * Domain Of Interest
 * 
 * Application Domain for example: health, environment, etc.
 *
 * http://purl.org/iot/vocab/m3-lite#DomainOfInterest
 */
export const DomainOfInterest: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DomainOfInterest';

/**
 * Measurement Type
 * 
 * Type of Measurement done using a device.
 *
 * http://purl.org/iot/vocab/m3-lite#MeasurementType
 */
export const MeasurementType: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MeasurementType';

/**
 * Sound, Noise Level
 * 
 * Measure of noise level in the environment
 *
 * http://purl.org/iot/vocab/m3-lite#Sound
 */
export const Sound: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Sound';

/**
 * Sound Source
 * 
 * Source where the sound originated.
 *
 * http://purl.org/iot/vocab/m3-lite#SoundSource
 */
export const SoundSource: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoundSource';

/**
 * Source
 * 
 * Environmental Origin of a particular observation. With respect to one kind of Source (Sound source), it can be coming from traffic, siren of a police car, etc.
 *
 * http://purl.org/iot/vocab/m3-lite#Source
 */
export const Source: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Source';

/**
 * ABS (Anti-lock Braking System) Actuating Device
 * 
 * The ABS (Anti-lock Braking System) receives information from ABS computer to control the pressure on the breaks, This helps the wheels not to get locked up, it adjust the break pressure and prevents the wheels from locking. (Definition Source Google).
 *
 * http://purl.org/iot/vocab/m3-lite#ABS
 */
export const ABS: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ABS';

/**
 * Transportation DOI
 * 
 * Transportation, Smart Car/Vehicle, Intelligent Transport System (ITS) as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Transportation
 */
export const Transportation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Transportation';

/**
 * Initial E-RAB Establishment Success Rate
 * 
 * Initial E-UTRAN Radio Access Bearer establishment success rate.
 *
 * http://purl.org/iot/vocab/m3-lite#AccInitialERabEstabSuccRate
 */
export const AccInitialERabEstabSuccRate: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AccInitialERabEstabSuccRate';

/**
 * Communication Related Quantity Kind
 * 
 * Communication related properties.
 *
 * http://purl.org/iot/vocab/m3-lite#Communication
 */
export const Communication: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Communication';

/**
 * Initial E-RAB Setup Success Rate
 * 
 * Initial E-UTRAN Radio Access Bearer setup success rate.
 *
 * http://purl.org/iot/vocab/m3-lite#AccInitialERabSetupSuccRate
 */
export const AccInitialERabSetupSuccRate: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AccInitialERabSetupSuccRate';

/**
 * RRC Connection Setup Success Rate
 * 
 * Radio Resource Control connection setup success rate.
 *
 * http://purl.org/iot/vocab/m3-lite#AccRrcConnSetupSuccRate
 */
export const AccRrcConnSetupSuccRate: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AccRrcConnSetupSuccRate';

/**
 * S1 Signalling Establishment Success Rate
 * 
 * S1 (S1 standardized interface between eNB and Evolved Packet Core) signalling establishment success rate.
 *
 * http://purl.org/iot/vocab/m3-lite#AccS1SigEstabSuccRate
 */
export const AccS1SigEstabSuccRate: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AccS1SigEstabSuccRate';

/**
 * Acceleration
 * 
 * The rate of change of the velocity of a particle with respect to time.
 *
 * http://purl.org/iot/vocab/m3-lite#Acceleration
 */
export const Acceleration: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Acceleration';

/**
 * Instantaneous Acceleration
 * 
 * The acceleration at a given instant of time.
 *
 * http://purl.org/iot/vocab/m3-lite#AccelerationInstantaneous
 */
export const AccelerationInstantaneous: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AccelerationInstantaneous';

/**
 * Accelerometer
 * 
 *  Accelerometers are used to automatically determine the orientation in which the user is holding the IoT Object (portrait or landscape).
 *
 * http://purl.org/iot/vocab/m3-lite#Accelerometer
 */
export const Accelerometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Accelerometer';

/**
 * Active Power
 * 
 * The product of the voltage across a branch of an alternating-current circuit and the component of the electric current that is in phase with the voltage.
 *
 * http://purl.org/iot/vocab/m3-lite#ActivePower
 */
export const ActivePower: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ActivePower';

/**
 * Power
 * 
 * It is the rate, per unit time, at which electrical energy is transferred by an electric circuit.
 *
 * http://purl.org/iot/vocab/m3-lite#Power
 */
export const Power: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Power';

/**
 * Agriculture DOI
 * 
 * Agriculture, Smart farm as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Agriculture
 */
export const Agriculture: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Agriculture';

/**
 * Air Conditioner Actuating Device
 * 
 * An actuator to automatically switch on/off the air conditioner.
 *
 * http://purl.org/iot/vocab/m3-lite#AirConditioner
 */
export const AirConditioner: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AirConditioner';

/**
 * Smart Building DOI
 * 
 * Smart Home/Building Automation as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#BuildingAutomation
 */
export const BuildingAutomation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BuildingAutomation';

/**
 * Air Humidity Sensor
 * 
 * Sensor used to measure air humidity.
 *
 * http://purl.org/iot/vocab/m3-lite#AirHumiditySensor
 */
export const AirHumiditySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AirHumiditySensor';

/**
 * Humidity Sensor
 * 
 * Humidity sensor or hygrometer is an instrument used for measuring the moisture concent in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#HumiditySensor
 */
export const HumiditySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#HumiditySensor';

/**
 * Environment DOI
 * 
 * Environment (earthquake, flooding, fire, pollution) as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Environment
 */
export const Environment: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Environment';

/**
 * Air Pollutant Sensor
 * 
 * Air Pollutant Sensor are devices that detect and monitor the presence of air pollution in the surrounding area (source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#AirPollutantSensor
 */
export const AirPollutantSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AirPollutantSensor';

/**
 * Air Pollution Quantity Kind
 * 
 * Usually measured using Air Quality Index (AQI), it is the measure of Air Pollution in the environment. It is similar to Air Quality.
 *
 * http://purl.org/iot/vocab/m3-lite#AirPollution
 */
export const AirPollution: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AirPollution';

/**
 * Air Quality Quantity Kind
 * 
 * Usually measured using an air quality index (AQI) that is a number used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. Different countries have their own air quality indices, corresponding to different national air quality standards. It is the measure of Air Quality of the environment. It is similar to Air Pollution. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#AirQuality
 */
export const AirQuality: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AirQuality';

/**
 * Air Temperature, Weather Temperature, Ambient Temperature
 * 
 * The temperature of the air that would be indicated by a thermometer exposed to the air at a location sheltered from direct solar radiation.
 *
 * http://purl.org/iot/vocab/m3-lite#AirTemperature
 */
export const AirTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AirTemperature';

/**
 * Temperature
 * 
 * It is the air temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#Temperature
 */
export const Temperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Temperature';

/**
 * Air Thermometer
 * 
 * Device to measure the Air temperature of either indoor or outdoor atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#AirThermometer
 */
export const AirThermometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AirThermometer';

/**
 * Thermometer
 * 
 * A device to measure the temperature in a room or outside.
 *
 * http://purl.org/iot/vocab/m3-lite#Thermometer
 */
export const Thermometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Thermometer';

/**
 * Alarm System Actuating Device
 * 
 * An actuator to automatically switch on/off the alarm system.
 *
 * http://purl.org/iot/vocab/m3-lite#AlarmSystem
 */
export const AlarmSystem: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AlarmSystem';

/**
 * Alcohol Level Quantity Kind
 * 
 * Measure of Alcohol Level in the system.
 *
 * http://purl.org/iot/vocab/m3-lite#AlcoholLevel
 */
export const AlcoholLevel: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AlcoholLevel';

/**
 * Alcohol Level Sensor
 * 
 * Device used to detect and measure Alcohol Level in the system.
 *
 * http://purl.org/iot/vocab/m3-lite#AlcoholLevelSensor
 */
export const AlcoholLevelSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AlcoholLevelSensor';

/**
 * Ampere (A)
 * 
 * The ampere is the SI unit for measuring an electric current which is the flow of electric charges through a surface at the rate of one coulomb per second.The ampere is the SI unit for measuring an electric current which is the flow of electric charges through a surface at the rate of one coulomb per second.
 *
 * http://purl.org/iot/vocab/m3-lite#Ampere
 */
export const Ampere: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Ampere';

/**
 * Angular Speed
 * 
 * It is the rate of change of angular displacement and is a vector quantity (more precisely, a pseudovector) that specifies the angular speed (rotational speed) of an object and the axis about which the object is rotating. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#AngularSpeed
 */
export const AngularSpeed: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AngularSpeed';

/**
 * Animals as Sound Source
 * 
 * when the source of the sound were animals.
 *
 * http://purl.org/iot/vocab/m3-lite#Animals
 */
export const Animals: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Animals';

/**
 * Atmospheric Pressure
 * 
 * The pressure exerted by the atmosphere as a consequence of gravitational attraction exerted upon the column of air lying directly above the point in question.
 *
 * http://purl.org/iot/vocab/m3-lite#AtmosphericPressure
 */
export const AtmosphericPressure: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AtmosphericPressure';

/**
 * Pressure
 * 
 * It is the physical force exerted on or against an object by something in contact with it.
 *
 * http://purl.org/iot/vocab/m3-lite#Pressure
 */
export const Pressure: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Pressure';

/**
 * Atmospheric Pressure Sensor
 * 
 * Atmospheric Pressure Sensor, Barometer or Barometric Pressure Sensor is a scientific instrument used in meteorology to measure atmospheric pressure.
 *
 * http://purl.org/iot/vocab/m3-lite#AtmosphericPressureSensor
 */
export const AtmosphericPressureSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AtmosphericPressureSensor';

/**
 * Weather Forecasting DOI
 * 
 * Weather Forecasting, Meterology as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Weather
 */
export const Weather: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Weather';

/**
 * Automatic Measurement Type
 * 
 * When the devices are set to take the observations Automatically without any external aid.
 *
 * http://purl.org/iot/vocab/m3-lite#AutomaticSensing
 */
export const AutomaticSensing: OwlClass = 'http://purl.org/iot/vocab/m3-lite#AutomaticSensing';

/**
 * Bar
 * 
 * Metric unit of atmospheric pressure equal to 14.50 pounds per square inch (lb/in2), 1.02 kilograms per square centimetre (kg/cm2), 29.53 inches of mercury (in Hg), or 0.9869 atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#Bar
 */
export const Bar: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Bar';

/**
 * Barcode Tagging Device
 * 
 * A tagging device can be Barcode.
 *
 * http://purl.org/iot/vocab/m3-lite#Barcode
 */
export const Barcode: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Barcode';

/**
 * Battery Level Quantity Kind
 * 
 * Measure of the percentage of the battery capacity that remains available.
 *
 * http://purl.org/iot/vocab/m3-lite#BatteryLevel
 */
export const BatteryLevel: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BatteryLevel';

/**
 * Beat Per Minute (bpm)
 * 
 * Beat Per Minute (bpm) is the unit to measure heart rate.
 *
 * http://purl.org/iot/vocab/m3-lite#BeatPerMinute
 */
export const BeatPerMinute: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BeatPerMinute';

/**
 * Blind Actuating Device
 * 
 * An actuator to automatically switch on/off the window blinds.
 *
 * http://purl.org/iot/vocab/m3-lite#Blind
 */
export const Blind: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Blind';

/**
 * Blood Coagulation
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#BloodCoagulation
 */
export const BloodCoagulation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BloodCoagulation';

/**
 * Blood Glucose Quantity Kind
 * 
 * Measure of Blood glucose level or blood sugar level.
 *
 * http://purl.org/iot/vocab/m3-lite#BloodGlucose
 */
export const BloodGlucose: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BloodGlucose';

/**
 * Blood Pressure
 * 
 * Measure of the pressure in your blood vessels when your heart rests between beats.
 *
 * http://purl.org/iot/vocab/m3-lite#BloodPressure
 */
export const BloodPressure: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BloodPressure';

/**
 * Blood Pressure Sensor
 * 
 * Device used to measure Blood Pressure.
 *
 * http://purl.org/iot/vocab/m3-lite#BloodPressureSensor
 */
export const BloodPressureSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BloodPressureSensor';

/**
 * Health Care DOI
 * 
 * Healthcare as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Health
 */
export const Health: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Health';

/**
 * Board Temperature
 * 
 * Measure of board temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#BoardTemperature
 */
export const BoardTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BoardTemperature';

/**
 * Board Thermometer
 * 
 * Device used to measure board temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#BoardThermometer
 */
export const BoardThermometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BoardThermometer';

/**
 * Board Voltage Sensor
 * 
 * Sensor used to measure board input voltage.
 *
 * http://purl.org/iot/vocab/m3-lite#BoardVoltageSensor
 */
export const BoardVoltageSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BoardVoltageSensor';

/**
 * Voltage Sensor
 * 
 * Device which can measure the difference in electric potential energy between two points per unit electric charge.
 *
 * http://purl.org/iot/vocab/m3-lite#VoltageSensor
 */
export const VoltageSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VoltageSensor';

/**
 * Body Temperature
 * 
 * Measure of body temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#BodyTemperature
 */
export const BodyTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BodyTemperature';

/**
 * Body Thermometer
 * 
 * Device used to measure body temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#BodyThermometer
 */
export const BodyThermometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BodyThermometer';

/**
 * Boiler Actuating Device
 * 
 * An actuator to automatically switch on/off the boiler.
 *
 * http://purl.org/iot/vocab/m3-lite#Boiler
 */
export const Boiler: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Boiler';

/**
 * Building/Room Temperature
 * 
 * Measure of building or room temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#BuildingTemperature
 */
export const BuildingTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#BuildingTemperature';

/**
 * Bus
 * 
 * A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
 *
 * http://purl.org/iot/vocab/m3-lite#Bus
 */
export const Bus: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Bus';

/**
 * Carbon Dioxide (CO2) Quantity Kind
 * 
 * Carbon Dioxide (CO2) measure in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#CO2
 */
export const CO2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CO2';

/**
 * Carbon Dioxide (CO2) Sensor
 * 
 * Carbon Dioxide (CO2) Sensor used to measure level of CO2 in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#CO2Sensor
 */
export const CO2Sensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CO2Sensor';

/**
 * Gaseous Pollutant Sensor
 * 
 * Device used to detect poisonous gaseous in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#GaseousPollutantSensor
 */
export const GaseousPollutantSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#GaseousPollutantSensor';

/**
 * Carbon Monoxide (CO) Sensor
 * 
 * Device to detect Carbon Monoxide (CO) in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#COSensor
 */
export const COSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#COSensor';

/**
 * Calcium Quantity Kind
 * 
 * Measure of blood calcium level.
 *
 * http://purl.org/iot/vocab/m3-lite#Calcium
 */
export const Calcium: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Calcium';

/**
 * Calibration Measurement Type
 * 
 * If the measurement was taken when the sensor was being calibrated.
 *
 * http://purl.org/iot/vocab/m3-lite#CalibrationSensing
 */
export const CalibrationSensing: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CalibrationSensing';

/**
 * Candela
 * 
 * Candela is the luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 540 x 10^12 hertz and that has a radiant intensity in that direction of 1/683 watt per steradian. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#Candela
 */
export const Candela: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Candela';

/**
 * Capacitance
 * 
 * Measure of the ability of a system to store an electric charge.
 *
 * http://purl.org/iot/vocab/m3-lite#Capacitance
 */
export const Capacitance: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Capacitance';

/**
 * Centibar
 * 
 * The centibar is a unit of pressure defined as 1e-2 bar.
 *
 * http://purl.org/iot/vocab/m3-lite#Centibar
 */
export const Centibar: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Centibar';

/**
 * Centimetre, Centimeter
 * 
 * A metric unit of length, equal to one hundredth of a metre.
 *
 * http://purl.org/iot/vocab/m3-lite#Centimetre
 */
export const Centimetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Centimetre';

/**
 * Metre, Meter
 * 
 * It is the unit of length.
 *
 * http://purl.org/iot/vocab/m3-lite#Metre
 */
export const Metre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Metre';

/**
 * Chemical Agent Atmospheric Concentration Quantity Kind
 * 
 * Measure of Chemical Agent Atmospheric Concentration
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentration
 */
export const ChemicalAgentAtmosphericConcentration: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentration';

/**
 * Chemical Agent Concentration Quantity Kind
 * 
 * Measure of Chemical Agent Concentration
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentConcentration
 */
export const ChemicalAgentConcentration: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentConcentration';

/**
 * Air Particles Chemical Agent Atmospheric Concentration
 * 
 * Measure of the concentration of chemical particles suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationAirParticles
 */
export const ChemicalAgentAtmosphericConcentrationAirParticles: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationAirParticles';

/**
 * Carbon Monoxide (CO) Chemical Agent Atmospheric Concentration
 * 
 * Measure of the concentration of Carbon Monoxide (CO) gas suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationCO
 */
export const ChemicalAgentAtmosphericConcentrationCO: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationCO';

/**
 * Chemical Agent Atmospheric Concentration Dust
 * 
 * Measure of the concentration of dust suspended in the air.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationDust
 */
export const ChemicalAgentAtmosphericConcentrationDust: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationDust';

/**
 * Ammonia (NH3) Chemical Agent Atmospheric Concentration
 * 
 * Measure of the concentration of Ammonia (NH3) gas suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationNH3
 */
export const ChemicalAgentAtmosphericConcentrationNH3: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationNH3';

/**
 * Nitrogen Monoxide (NO) Chemical Agent Atmospheric Concentration
 * 
 * Measure of the concentration of Carbon Monoxide (CO) gas suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationNO
 */
export const ChemicalAgentAtmosphericConcentrationNO: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationNO';

/**
 * NO2 Chemical Agent Atmospheric Concentration
 * 
 * Measure of the concentration of NO2 gas suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationNO2
 */
export const ChemicalAgentAtmosphericConcentrationNO2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationNO2';

/**
 * Chemical Agent Atmospheric Concentration O3
 * 
 * The concentration of ozone (O3) gas suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationO3
 */
export const ChemicalAgentAtmosphericConcentrationO3: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationO3';

/**
 * Sulphur dioxide (SO2) Chemical Agent Atmospheric Concentration
 * 
 * Measure of the concentration of Sulphur dioxide (SO2) gas suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationSO2
 */
export const ChemicalAgentAtmosphericConcentrationSO2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationSO2';

/**
 * Volatile Organic Compound Chemical Agent Atmospheric Concentration
 * 
 * Measure of the concentration of Volatile Organic Compound gas suspended in the atmosphere.
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationVOC
 */
export const ChemicalAgentAtmosphericConcentrationVOC: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentAtmosphericConcentrationVOC';

/**
 * Chemical Agent Water Concentration Quantity Kind
 * 
 * Measure of Chemical Agent Concentration in Water 
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentration
 */
export const ChemicalAgentWaterConcentration: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentration';

/**
 * Ammonium ion (NH4+) Chemical Agent Water Concentration
 * 
 * Measure of NH4 ion concentration in Water 
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentrationNH4Ion
 */
export const ChemicalAgentWaterConcentrationNH4Ion: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentrationNH4Ion';

/**
 * Nitrate Ion (NO3-) Chemical Agent Water Concentration
 * 
 * Measure of NO3 ion concentration in Water 
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentrationNO3Ion
 */
export const ChemicalAgentWaterConcentrationNO3Ion: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentrationNO3Ion';

/**
 * Oxygen (O2) Chemical Agent Water Concentration
 * 
 * Measure of O2 concentration in Water 
 *
 * http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentrationO2
 */
export const ChemicalAgentWaterConcentrationO2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ChemicalAgentWaterConcentrationO2';

/**
 * Cholesterol Quantity Kind
 * 
 * Measure of the cholesterol level in a system.
 *
 * http://purl.org/iot/vocab/m3-lite#Cholesterol
 */
export const Cholesterol: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Cholesterol';

/**
 * Cholesterol Sensor
 * 
 * Device used to measure the cholesterol level in a system.
 *
 * http://purl.org/iot/vocab/m3-lite#CholesterolSensor
 */
export const CholesterolSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CholesterolSensor';

/**
 * Smart City DOI
 * 
 * Smart City as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#City
 */
export const City: OwlClass = 'http://purl.org/iot/vocab/m3-lite#City';

/**
 * Clock
 * 
 * sensor that measures time
 *
 * http://purl.org/iot/vocab/m3-lite#Clock
 */
export const Clock: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Clock';

/**
 * Cloud Cover Quantity Kind
 * 
 * Measure of cloud cover at a certain time. 
 *
 * http://purl.org/iot/vocab/m3-lite#CloudCover
 */
export const CloudCover: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CloudCover';

/**
 * Cloud Cover Sensor
 * 
 * Cloud Cover Sensor is used to detect whether it is sunny, cloudy, etc.
 *
 * http://purl.org/iot/vocab/m3-lite#CloudCoverSensor
 */
export const CloudCoverSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CloudCoverSensor';

/**
 * 
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#Coagulometer
 */
export const Coagulometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Coagulometer';

/**
 * Coffee Machine, Coffee Maker Actuating Device
 * 
 * An actuator to automatically switch on/off the coffee machine.
 *
 * http://purl.org/iot/vocab/m3-lite#CoffeeMachine
 */
export const CoffeeMachine: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CoffeeMachine';

/**
 * Computer, PC Actuating Device
 * 
 * Actuating devices for Computer or PC.
 *
 * http://purl.org/iot/vocab/m3-lite#Computer
 */
export const Computer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Computer';

/**
 * Conductivity
 * 
 * Measure of ability to conduct electricity. It is measured in siemens per metre (S/m).
 *
 * http://purl.org/iot/vocab/m3-lite#Conductivity
 */
export const Conductivity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Conductivity';

/**
 * Conductivity Sensor
 * 
 * Device used to measure the conductivity of a system.
 *
 * http://purl.org/iot/vocab/m3-lite#ConductivitySensor
 */
export const ConductivitySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ConductivitySensor';

/**
 * Construction Work Sound Source
 * 
 * When the source of the sound was a construction work.
 *
 * http://purl.org/iot/vocab/m3-lite#ConstructionWork
 */
export const ConstructionWork: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ConstructionWork';

/**
 * Coordinates
 * 
 * Triples for location in the (Latitude, Longitude, Altitude) format.
 *
 * http://purl.org/iot/vocab/m3-lite#Coordinates
 */
export const Coordinates: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Coordinates';

/**
 * Coulomb
 * 
 * SI unit of electric charge.
 *
 * http://purl.org/iot/vocab/m3-lite#Coulomb
 */
export const Coulomb: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Coulomb';

/**
 * Count
 * 
 * Number of available particular things.
 *
 * http://purl.org/iot/vocab/m3-lite#Count
 */
export const Count: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Count';

/**
 * Count Available Bicycles
 * 
 * Number of available bicycles at a particular bicycle docking station.
 *
 * http://purl.org/iot/vocab/m3-lite#CountAvailableBicycles
 */
export const CountAvailableBicycles: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CountAvailableBicycles';

/**
 * Count Available Taxis
 * 
 * Number of taxis available at a particular taxi stop.
 *
 * http://purl.org/iot/vocab/m3-lite#CountAvailableTaxis
 */
export const CountAvailableTaxis: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CountAvailableTaxis';

/**
 * Count Empty Docking Points
 * 
 * Number of empty docking points at a particular bicycle docking station.
 *
 * http://purl.org/iot/vocab/m3-lite#CountEmptyDockingPoints
 */
export const CountEmptyDockingPoints: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CountEmptyDockingPoints';

/**
 * Count People
 * 
 * Number of people within a particular area
 *
 * http://purl.org/iot/vocab/m3-lite#CountPeople
 */
export const CountPeople: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CountPeople';

/**
 * Count People Moving
 * 
 * Number of people that moved outside an area towards another area during a time window.
 *
 * http://purl.org/iot/vocab/m3-lite#CountPeopleMoving
 */
export const CountPeopleMoving: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CountPeopleMoving';

/**
 * Count People Staying
 * 
 * Number of people that stayed within an area for more than a threshold of time.
 *
 * http://purl.org/iot/vocab/m3-lite#CountPeopleStaying
 */
export const CountPeopleStaying: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CountPeopleStaying';

/**
 * Count Statellites Signal Received
 * 
 * Count of satellites from which a signal is received
 *
 * http://purl.org/iot/vocab/m3-lite#CountStatellitesSignalReceived
 */
export const CountStatellitesSignalReceived: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CountStatellitesSignalReceived';

/**
 * Counter
 * 
 * Sensors that reckons occurrences or repetitions of physical objects, phenomena or events.
 *
 * http://purl.org/iot/vocab/m3-lite#Counter
 */
export const Counter: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Counter';

/**
 * Crowd Sound Source
 * 
 * When the source of the sound was crowd.
 *
 * http://purl.org/iot/vocab/m3-lite#Crowd
 */
export const Crowd: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Crowd';

/**
 * Cupboard Actuating Device
 * 
 * An actuator to automatically open/close the cupboard.
 *
 * http://purl.org/iot/vocab/m3-lite#Cupboard
 */
export const Cupboard: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Cupboard';

/**
 * Current Sensor
 * 
 * A current sensor is a device that detects electric current in a wire, and generates a signal proportional to that current.
 *
 * http://purl.org/iot/vocab/m3-lite#CurrentSensor
 */
export const CurrentSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#CurrentSensor';

/**
 * Curtain Actuating Device
 * 
 * An actuator to automatically open/close the curtain.
 *
 * http://purl.org/iot/vocab/m3-lite#Curtain
 */
export const Curtain: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Curtain';

/**
 * Day
 * 
 * Day is a unit of time.
 *
 * http://purl.org/iot/vocab/m3-lite#Day
 */
export const Day: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Day';

/**
 * Second Time
 * 
 * Qualitatively defined as the second division of the hour by sixty, the first division by sixty being the minute. SI definition of second is "the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom.
 *
 * http://purl.org/iot/vocab/m3-lite#SecondTime
 */
export const SecondTime: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SecondTime';

/**
 * Decibel (dB)
 * 
 * Decibel is a logarithmic unit used to express the ratio of two values of a physical quantity. It is often used to measure sound level.
 *
 * http://purl.org/iot/vocab/m3-lite#Decibel
 */
export const Decibel: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Decibel';

/**
 * DecibelA (dB(A))
 * 
 * Sound pressure sensed by the human ear.
 *
 * http://purl.org/iot/vocab/m3-lite#DecibelA
 */
export const DecibelA: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DecibelA';

/**
 * Decibel Milliwatt
 * 
 * It describes power ratio in decibels of the measured power referenced to one milliwatt.
 *
 * http://purl.org/iot/vocab/m3-lite#DecibelMilliwatt
 */
export const DecibelMilliwatt: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DecibelMilliwatt';

/**
 * Degree
 * 
 * Degree.
 *
 * http://purl.org/iot/vocab/m3-lite#Degree
 */
export const Degree: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Degree';

/**
 * Degree Angle
 * 
 * A plane angle unit which is equal to 1/360 of a full rotation or pi/180 rad.
 *
 * http://purl.org/iot/vocab/m3-lite#DegreeAngle
 */
export const DegreeAngle: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DegreeAngle';

/**
 * Degree Celsius
 * 
 * A temperature unit which is equal to one kelvin degree. However, they have their zeros at different points. The centigrade scale has its zero at 273.15 K.
 *
 * http://purl.org/iot/vocab/m3-lite#DegreeCelsius
 */
export const DegreeCelsius: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DegreeCelsius';

/**
 * Degree Fahrenheit
 * 
 * Measurement Unit to represent temperature on the Fahrenheit scale.
 *
 * http://purl.org/iot/vocab/m3-lite#DegreeFahrenheit
 */
export const DegreeFahrenheit: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DegreeFahrenheit';

/**
 * Delta Dew Point
 * 
 * Difference between Dewpoint and surface temperatures.
 *
 * http://purl.org/iot/vocab/m3-lite#DeltaDewPoint
 */
export const DeltaDewPoint: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DeltaDewPoint';

/**
 * Dew Point
 * 
 * It is the temperature to which air must be cooled at constant pressure to condense to form liquid.
 *
 * http://purl.org/iot/vocab/m3-lite#DewPoint
 */
export const DewPoint: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DewPoint';

/**
 * Delta Dew Point Sensor
 * 
 * Device that measures the difference between Dewpoint and surface temperatures.
 *
 * http://purl.org/iot/vocab/m3-lite#DeltaDewPointSensor
 */
export const DeltaDewPointSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DeltaDewPointSensor';

/**
 * Device Uptime
 * 
 * Time a device is working and is available
 *
 * http://purl.org/iot/vocab/m3-lite#DeviceUptime
 */
export const DeviceUptime: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DeviceUptime';

/**
 * Device Uptime Clock
 * 
 * Sensor that measures time a device is working and is available.
 *
 * http://purl.org/iot/vocab/m3-lite#DeviceUptimeClock
 */
export const DeviceUptimeClock: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DeviceUptimeClock';

/**
 * Dew Point Sensor
 * 
 * Device that measures dew point.
 *
 * http://purl.org/iot/vocab/m3-lite#DewPointSensor
 */
export const DewPointSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DewPointSensor';

/**
 * Dew Point Temperature
 * 
 * The temperature at which dew forms and is a measure of atmospheric moisture. It is the temperature to which air must be cooled at constant pressure and water content to reach saturation. A higher dew point indicates more moisture in the air; a dew point greater than 20 Degree C (68 Degree F) is considered uncomfortable and greater than 22 Degree C (72 Degree F) is considered to be extremely humid.
 *
 * http://purl.org/iot/vocab/m3-lite#DewPointTemperature
 */
export const DewPointTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DewPointTemperature';

/**
 * Diastolic Blood Pressure
 * 
 *  Measure of the pressure in the arteries when the heart rests between beats.
 *
 * http://purl.org/iot/vocab/m3-lite#DiastolicBloodPressure
 */
export const DiastolicBloodPressure: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DiastolicBloodPressure';

/**
 * Dimensionless
 * 
 * Without dimensions; having no appreciable or noteworthy extent. Without physical meaning.
 *
 * http://purl.org/iot/vocab/m3-lite#Dimensionless
 */
export const Dimensionless: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Dimensionless';

/**
 * Direction Azimuth
 * 
 * The geodetic azimuth of the direction towards which an object is point to.
 *
 * http://purl.org/iot/vocab/m3-lite#DirectionAzimuth
 */
export const DirectionAzimuth: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DirectionAzimuth';

/**
 * Direction Heading
 * 
 * The course or direction in which a object (vehicle, person, ...) is moving.
 *
 * http://purl.org/iot/vocab/m3-lite#DirectionHeading
 */
export const DirectionHeading: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DirectionHeading';

/**
 * Direction Of Arrival
 * 
 * The azimuth direction of a  source relative to the azimuth direction of the DOA sensor.
 *
 * http://purl.org/iot/vocab/m3-lite#DirectionOfArrival
 */
export const DirectionOfArrival: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DirectionOfArrival';

/**
 * Direction Of Arrival (DOA) Sensor
 * 
 * Sensor that estimates the azimuth direction of sources relative to the sensor’s position.
 *
 * http://purl.org/iot/vocab/m3-lite#DirectionOfArrivalSensor
 */
export const DirectionOfArrivalSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DirectionOfArrivalSensor';

/**
 * Dish Washer Actuating Device
 * 
 * An actuator to automatically switch on/off the dishwasher.
 *
 * http://purl.org/iot/vocab/m3-lite#DishWasher
 */
export const DishWasher: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DishWasher';

/**
 * Distance
 * 
 * Measure of how far apart objects are.
 *
 * http://purl.org/iot/vocab/m3-lite#Distance
 */
export const Distance: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Distance';

/**
 * Driving distance between a bus and the next bus stop
 * 
 * Estimated driving distance (in meters) between a bus and the next bus stop. 
 *
 * http://purl.org/iot/vocab/m3-lite#DistanceNextBus
 */
export const DistanceNextBus: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DistanceNextBus';

/**
 * Sensor measuring the driving distance between a bus and the next bus stop
 * 
 *  Virtual device that represents a bus stop X and a bus line Y; it measures the driving distance between the next bus (belonging to line Y) and the bus stop X. 
 *
 * http://purl.org/iot/vocab/m3-lite#DistanceNextBusSensor
 */
export const DistanceNextBusSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DistanceNextBusSensor';

/**
 * Distance Sensor
 * 
 * Distance Sensor is used to detect distance between two objects for example:  the safety distance with other cars. Distance sensor can be a laser.
 *
 * http://purl.org/iot/vocab/m3-lite#DistanceSensor
 */
export const DistanceSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DistanceSensor';

/**
 * Door Actuating Device
 * 
 * An actuator to automatically open/close the door.
 *
 * http://purl.org/iot/vocab/m3-lite#Door
 */
export const Door: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Door';

/**
 * Door State Sensor
 * 
 * This sensor detects if a door is in the state of OPEN or CLOSED.
 *
 * http://purl.org/iot/vocab/m3-lite#DoorStateSensor
 */
export const DoorStateSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DoorStateSensor';

/**
 * Door Status
 * 
 * Describes if a door is OPEN or CLOSED.
 *
 * http://purl.org/iot/vocab/m3-lite#DoorStatus
 */
export const DoorStatus: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DoorStatus';

/**
 * Drawer Actuating Device
 * 
 * An actuator to automatically open/close the drawer.
 *
 * http://purl.org/iot/vocab/m3-lite#Drawer
 */
export const Drawer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Drawer';

/**
 * Dust Sensor
 * 
 * A sensing device that measures dust particle concentration.
 *
 * http://purl.org/iot/vocab/m3-lite#DustSensor
 */
export const DustSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#DustSensor';

/**
 * European Air Quality Index (EAQI)
 * 
 * Unit to measure Air Quality in European cities.
 *
 * http://purl.org/iot/vocab/m3-lite#EAQI
 */
export const EAQI: OwlClass = 'http://purl.org/iot/vocab/m3-lite#EAQI';

/**
 * ECG or EKG (Electrocardiogram)
 * 
 * ECG or EKG (Electrocardiogram) device.
 *
 * http://purl.org/iot/vocab/m3-lite#ECG
 */
export const ECG: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ECG';

/**
 * Emotion DOI
 * 
 * Affective Science, Emotion, Mood, Emotional State, Brain Wave as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Emotion
 */
export const Emotion: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Emotion';

/**
 * ESP (Electronic Stability Program) Actuating device
 * 
 * The actuator for turning ESP on/off.
 *
 * http://purl.org/iot/vocab/m3-lite#ESP
 */
export const ESP: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ESP';

/**
 * Electric Charge
 * 
 * It is the physical property of matter that causes it to experience a force when placed in an electromagnetic field. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricCharge
 */
export const ElectricCharge: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricCharge';

/**
 * Electric Current
 * 
 * Electric current is the flow of electric charge. It is a base quantity in the International System of Units. Electric current is electric charge divided by time. Electric Current is the flow (movement) of electric charge. The amount of electric current through some surface, e.g., a section through a copper conductor, is defined as the amount of electric charge flowing through that surface over time.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricCurrent
 */
export const ElectricCurrent: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricCurrent';

/**
 * Electric Field
 * 
 * Electric field is the electric force per unit charge.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricField
 */
export const ElectricField: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricField';

/**
 * Electric Field 1800 MHz
 * 
 * A field of force associated with a moving electric charge equivalent to an electric field and a magnetic field at right angles to each other and to the direction of propagation. Applied to the 1800 MHz UHF band.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricField1800MHz
 */
export const ElectricField1800MHz: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricField1800MHz';

/**
 * Electric Field 2100 MHz
 * 
 * A field of force associated with a moving electric charge equivalent to an electric field and a magnetic field at right angles to each other and to the direction of propagation. Applied to the 2100 MHz UHF band.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricField2100MHz
 */
export const ElectricField2100MHz: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricField2100MHz';

/**
 * Electric Field 2400 MHz
 * 
 * A field of force associated with a moving electric charge equivalent to an electric field and a magnetic field at right angles to each other and to the direction of propagation. Applied to the 2400 MHz UHF band.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricField2400MHz
 */
export const ElectricField2400MHz: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricField2400MHz';

/**
 * Electric Field 900 MHz
 * 
 * A field of force associated with a moving electric charge equivalent to an electric field and a magnetic field at right angles to each other and to the direction of propagation. Applied to the 900 MHz UHF band.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricField900Mhz
 */
export const ElectricField900Mhz: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricField900Mhz';

/**
 * Electric Field Sensor
 * 
 * Scientific instrument for measuring electromagnetic fields (EMF). Most of them measure the electromagnetic radiation flux density (DC fields) or the change in an electromagnetic field over time (AC fields).
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricFieldSensor
 */
export const ElectricFieldSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricFieldSensor';

/**
 * Electric Potential
 * 
 * Electric potential is the potential energy per unit charge associated with static (time-invariant) electric field.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricPotential
 */
export const ElectricPotential: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricPotential';

/**
 * Electrical Resistance
 * 
 * The electrical resistance of an electrical conductor is the opposition to the passage of an electric current through that conductor.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricalResistance
 */
export const ElectricalResistance: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricalResistance';

/**
 * Electrical Sensor
 * 
 * Sensor that measures the changes in electrical or magnetic signals based on an environmental input.
 *
 * http://purl.org/iot/vocab/m3-lite#ElectricalSensor
 */
export const ElectricalSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ElectricalSensor';

/**
 * Energy
 * 
 * Energy is the property that must be transferred to an object in order to perform work on. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#Energy
 */
export const Energy: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Energy';

/**
 * Energy DOI
 * 
 * Energy or Smart Grid as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#EnergyDOI
 */
export const EnergyDOI: OwlClass = 'http://purl.org/iot/vocab/m3-lite#EnergyDOI';

/**
 * Energy Meter
 * 
 * Sensor to measure power or energy consumption.
 *
 * http://purl.org/iot/vocab/m3-lite#EnergyMeter
 */
export const EnergyMeter: OwlClass = 'http://purl.org/iot/vocab/m3-lite#EnergyMeter';

/**
 * Experiment Measurement Type
 * 
 * Experiment based measurements.
 *
 * http://purl.org/iot/vocab/m3-lite#Experiment
 */
export const Experiment: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Experiment';

/**
 * Fall Detector
 * 
 * Device to detect is a person has fallen.
 *
 * http://purl.org/iot/vocab/m3-lite#FallDetector
 */
export const FallDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FallDetector';

/**
 * Fall State
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#FallState
 */
export const FallState: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FallState';

/**
 * Fan Sound Source
 * 
 * When the source of the sound was Fan.
 *
 * http://purl.org/iot/vocab/m3-lite#Fan
 */
export const Fan: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Fan';

/**
 * Farad
 * 
 * SI unit of electrical capacitance.
 *
 * http://purl.org/iot/vocab/m3-lite#Farad
 */
export const Farad: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Farad';

/**
 * Fill Level
 * 
 * Property used to determine the level a certain object such as waste bin is filled upto.
 *
 * http://purl.org/iot/vocab/m3-lite#FillLevel
 */
export const FillLevel: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FillLevel';

/**
 * Fill Level Gas Tank
 * 
 * Ratio of volume of combustible exhaust fluid to the total volume of diesel exhaust fluid storage container.
 *
 * http://purl.org/iot/vocab/m3-lite#FillLevelGasTank
 */
export const FillLevelGasTank: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FillLevelGasTank';

/**
 * Fill Level Gas Tank 1
 * 
 * Ratio of volume of combustible exhaust fluid to the total volume of diesel exhaust fluid storage container. This is the value for the primary tank of the vehicle.
 *
 * http://purl.org/iot/vocab/m3-lite#FillLevelGasTank1
 */
export const FillLevelGasTank1: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FillLevelGasTank1';

/**
 * Fill Level Gas Tank 2
 * 
 * Ratio of volume of combustible exhaust fluid to the total volume of diesel exhaust fluid storage container. This is the value for the secondary tank of the vehicle.
 *
 * http://purl.org/iot/vocab/m3-lite#FillLevelGasTank2
 */
export const FillLevelGasTank2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FillLevelGasTank2';

/**
 * Fill Level Waste Container
 * 
 * Ratio between the current filleage level and the total capacity of a waste container.
 *
 * http://purl.org/iot/vocab/m3-lite#FillLevelWasteContainer
 */
export const FillLevelWasteContainer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FillLevelWasteContainer';

/**
 * FloorSensor
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#FloorSensor
 */
export const FloorSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FloorSensor';

/**
 * Fog Lamp Actuating Device
 * 
 * The actuator for turning on or off the fog lamp.
 *
 * http://purl.org/iot/vocab/m3-lite#FogLamp
 */
export const FogLamp: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FogLamp';

/**
 * Food Temperature
 * 
 * Measure of temperature of the food.
 *
 * http://purl.org/iot/vocab/m3-lite#FoodTemperature
 */
export const FoodTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FoodTemperature';

/**
 * Freezer, Chiller Actuating Device
 * 
 * An actuator to automatically open/close the freezer.
 *
 * http://purl.org/iot/vocab/m3-lite#Freezer
 */
export const Freezer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Freezer';

/**
 * Frequency
 * 
 * Frequency is the number of occurrences of a repeating event per unit time.
 *
 * http://purl.org/iot/vocab/m3-lite#Frequency
 */
export const Frequency: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Frequency';

/**
 * Frequency Sensor
 * 
 * Device used to detect the frequency.
 *
 * http://purl.org/iot/vocab/m3-lite#FrequencySensor
 */
export const FrequencySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FrequencySensor';

/**
 * Fridge, Refrigerator Actuating Device
 * 
 * An actuator to automatically switch on/off the fridge.
 *
 * http://purl.org/iot/vocab/m3-lite#Fridge
 */
export const Fridge: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Fridge';

/**
 * Fuel Consumption Quantity Kind
 * 
 * The amount of fuel a vehicle uses to travel a particular distance at a particular speed.
 *
 * http://purl.org/iot/vocab/m3-lite#FuelConsumption
 */
export const FuelConsumption: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FuelConsumption';

/**
 * Fuel Consumption Instantaneous
 * 
 * A measure that displays the instantaneous fuel consumption of a vehicle during its operation.
 *
 * http://purl.org/iot/vocab/m3-lite#FuelConsumptionInstantaneous
 */
export const FuelConsumptionInstantaneous: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FuelConsumptionInstantaneous';

/**
 * Fuel Consumption Total
 * 
 * Accumulated amount of fuel used during vehicle operation.
 *
 * http://purl.org/iot/vocab/m3-lite#FuelConsumptionTotal
 */
export const FuelConsumptionTotal: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FuelConsumptionTotal';

/**
 * Fuel Level Sensor
 * 
 * Device used to detect fuel level in a system such a car.
 *
 * http://purl.org/iot/vocab/m3-lite#FuelLevel
 */
export const FuelLevel: OwlClass = 'http://purl.org/iot/vocab/m3-lite#FuelLevel';

/**
 * GPS Sensor
 * 
 * Device that allows an object to localize itself.
 *
 * http://purl.org/iot/vocab/m3-lite#GPSSensor
 */
export const GPSSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#GPSSensor';

/**
 * Gas Detector
 * 
 * Device that detects the presence of gases in an area, often as part of a safety system.
 *
 * http://purl.org/iot/vocab/m3-lite#GasDetector
 */
export const GasDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#GasDetector';

/**
 * Gauss
 * 
 * Gauss is the CGS unit of measurement of magnetic flux density (or magnetic induction) (B) (Source Wikipedia)
 *
 * http://purl.org/iot/vocab/m3-lite#Gauss
 */
export const Gauss: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Gauss';

/**
 * Glucometer Sensor
 * 
 * Device used to detect glucometer, blood sugar, blood glucose level.
 *
 * http://purl.org/iot/vocab/m3-lite#Glucometer
 */
export const Glucometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Glucometer';

/**
 * 
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#Gram
 */
export const Gram: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Gram';

/**
 * Gram Per Cubic Metre, Gram Per Cubic Meter
 * 
 * It is defined by mass in grams divided by volume in cubic metres.
 *
 * http://purl.org/iot/vocab/m3-lite#GramPerCubicMetre
 */
export const GramPerCubicMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#GramPerCubicMetre';

/**
 * Gram Per Litre, Gram Per Liter (g/L)
 * 
 * It shows how many grams of a certain substance are present in one litre of a usually liquid or gaseous mixture.
 *
 * http://purl.org/iot/vocab/m3-lite#GramPerLitre
 */
export const GramPerLitre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#GramPerLitre';

/**
 * Gyrometer Sensor
 * 
 * A gyrometer is an instrument which measures an angular speed.
 *
 * http://purl.org/iot/vocab/m3-lite#GyrometerSensor
 */
export const GyrometerSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#GyrometerSensor';

/**
 * Gyroscope Sensor
 * 
 * A gyroscope is a device for measuring or maintaining orientation.
 *
 * http://purl.org/iot/vocab/m3-lite#GyroscopeSensor
 */
export const GyroscopeSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#GyroscopeSensor';

/**
 * H2S Sensor
 * 
 * Device used to measure of hydrogen sulphide in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#H2SSensor
 */
export const H2SSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#H2SSensor';

/**
 * Horizontal Dilution of Precision
 * 
 * Describes the preceision of the GPS signal. Smaller the value is, more precise the signal is.
 *
 * http://purl.org/iot/vocab/m3-lite#HDOP
 */
export const HDOP: OwlClass = 'http://purl.org/iot/vocab/m3-lite#HDOP';

/**
 * Heart Beat
 * 
 * The number of times your heart beats each minute (bpm).
 *
 * http://purl.org/iot/vocab/m3-lite#HeartBeat
 */
export const HeartBeat: OwlClass = 'http://purl.org/iot/vocab/m3-lite#HeartBeat';

/**
 * Heart Beat Sensor
 * 
 * Device to count heart beats per minute.
 *
 * http://purl.org/iot/vocab/m3-lite#HeartBeatSensor
 */
export const HeartBeatSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#HeartBeatSensor';

/**
 * Heating Actuating Device
 * 
 * An actuator to automatically switch on/off the heating.
 *
 * http://purl.org/iot/vocab/m3-lite#Heating
 */
export const Heating: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Heating';

/**
 * Hertz
 * 
 * The SI unit of frequency, equal to one cycle per second.
 *
 * http://purl.org/iot/vocab/m3-lite#Hertz
 */
export const Hertz: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Hertz';

/**
 * Hour
 * 
 * Hour of the day.
 *
 * http://purl.org/iot/vocab/m3-lite#Hour
 */
export const Hour: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Hour';

/**
 * Household Appliance Temperature
 * 
 * Measure of Household Appliance Temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#HouseholdApplianceTemperature
 */
export const HouseholdApplianceTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#HouseholdApplianceTemperature';

/**
 *  Human Presence Detector
 * 
 * Device used to detect if an object (vehicle, room, place, etc.) is occupied by Human.
 *
 * http://purl.org/iot/vocab/m3-lite#HumanPresenceDetector
 */
export const HumanPresenceDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#HumanPresenceDetector';

/**
 * Presence Detector
 * 
 * Device used to detect if on object is occupied or not.
 *
 * http://purl.org/iot/vocab/m3-lite#PresenceDetector
 */
export const PresenceDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PresenceDetector';

/**
 * Humidity
 * 
 * A quantity representing the amount of water vapour in the atmosphere or in a gas.
 *
 * http://purl.org/iot/vocab/m3-lite#Humidity
 */
export const Humidity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Humidity';

/**
 * Hydrophone
 * 
 * A hydrophone is a microphone designed to be used underwater for recording or listening to underwater sound.
 *
 * http://purl.org/iot/vocab/m3-lite#Hydrophone
 */
export const Hydrophone: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Hydrophone';

/**
 * IEEE802.15.4 Interface Energy Meter
 * 
 * Sensor that measures the power consumption of the IEEE802.15.4 interface nodes.
 *
 * http://purl.org/iot/vocab/m3-lite#IEEE802154InterfaceEnergyMeter
 */
export const IEEE802154InterfaceEnergyMeter: OwlClass = 'http://purl.org/iot/vocab/m3-lite#IEEE802154InterfaceEnergyMeter';

/**
 * International Normalized Ratio
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#INR
 */
export const INR: OwlClass = 'http://purl.org/iot/vocab/m3-lite#INR';

/**
 * Illuminance
 * 
 * Illuminance is the total luminous flux incident on a surface, per unit area.
 *
 * http://purl.org/iot/vocab/m3-lite#Illuminance
 */
export const Illuminance: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Illuminance';

/**
 * Image Sensor
 * 
 * Sensor that detects and conveys the information that constitutes an image.
 *
 * http://purl.org/iot/vocab/m3-lite#ImageSensor
 */
export const ImageSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ImageSensor';

/**
 * Inch
 * 
 * Length in inches.
 *
 * http://purl.org/iot/vocab/m3-lite#Inch
 */
export const Inch: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Inch';

/**
 * Index
 * 
 * Arbitrary indirect reference which should be translated into meaningful measurements by using the corresponding decoding algorithm detailed in the resource description. In this case the returned values can only take certain values from a finite set.
 *
 * http://purl.org/iot/vocab/m3-lite#Index
 */
export const Index: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Index';

/**
 * Downlink Latency
 * 
 * Downlink Latency.
 *
 * http://purl.org/iot/vocab/m3-lite#IntDlLatency
 */
export const IntDlLatency: OwlClass = 'http://purl.org/iot/vocab/m3-lite#IntDlLatency';

/**
 * Downlink Throughput
 * 
 * Downlink Throughput.
 *
 * http://purl.org/iot/vocab/m3-lite#IntDlThroughputKbps
 */
export const IntDlThroughputKbps: OwlClass = 'http://purl.org/iot/vocab/m3-lite#IntDlThroughputKbps';

/**
 * Uplink Packet Loss
 * 
 * Uplink Packet Loss.
 *
 * http://purl.org/iot/vocab/m3-lite#IntUlPacketLoss
 */
export const IntUlPacketLoss: OwlClass = 'http://purl.org/iot/vocab/m3-lite#IntUlPacketLoss';

/**
 * Uplink Throughput
 * 
 * Uplink Throughput.
 *
 * http://purl.org/iot/vocab/m3-lite#IntUlThroughputKbps
 */
export const IntUlThroughputKbps: OwlClass = 'http://purl.org/iot/vocab/m3-lite#IntUlThroughputKbps';

/**
 * Invalid Measurement Type
 * 
 * If the measurement was tagged invalid.
 *
 * http://purl.org/iot/vocab/m3-lite#Invalid
 */
export const Invalid: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Invalid';

/**
 * Ionising Radiation
 * 
 * Ionising radiation is radiation that carries enough energy to free electrons from atoms or molecules, thereby ionizing them. Gamma rays, X-rays, and the higher ultraviolet part of the electromagnetic spectrum are ionizing, whereas the lower ultraviolet part of the electromagnetic spectrum, and also the lower part of the spectrum below UV, including visible light (including nearly all types of laser light), infrared, microwaves, and radio waves are all considered non-ionizing radiation.
 *
 * http://purl.org/iot/vocab/m3-lite#IonisingRadiation
 */
export const IonisingRadiation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#IonisingRadiation';

/**
 * Irrigation Actuation Device
 * 
 * An actuator to automatically irrigate.
 *
 * http://purl.org/iot/vocab/m3-lite#Irrigation
 */
export const Irrigation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Irrigation';

/**
 * Item
 * 
 * Each of the accountable elements within a group.
 *
 * http://purl.org/iot/vocab/m3-lite#Item
 */
export const Item: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Item';

/**
 * Kelvin, Degree Kelvin
 * 
 * Kelvin is a unit of measurement for temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#Kelvin
 */
export const Kelvin: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Kelvin';

/**
 * Kilo Watt Hour
 * 
 * Measure of electrical energy equivalent to a power consumption of one thousand watts for one hour.
 *
 * http://purl.org/iot/vocab/m3-lite#KiloWattHour
 */
export const KiloWattHour: OwlClass = 'http://purl.org/iot/vocab/m3-lite#KiloWattHour';

/**
 * Kilobits Per Second
 * 
 * It is a unit of data transfer rate equal to: 1,000 bits per second.
 *
 * http://purl.org/iot/vocab/m3-lite#KilobitsPerSecond
 */
export const KilobitsPerSecond: OwlClass = 'http://purl.org/iot/vocab/m3-lite#KilobitsPerSecond';

/**
 * Kilogram (kg)
 * 
 * The SI unit of mass, it is equal to the mass of the international prototype of the kilogram.
 *
 * http://purl.org/iot/vocab/m3-lite#Kilogram
 */
export const Kilogram: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Kilogram';

/**
 * Kilogram Per Cubic Metre, Kilogram Per Cubic Meter
 * 
 * It is SI derived unit of density, defined by mass in kilograms divided by volume in cubic metres.
 *
 * http://purl.org/iot/vocab/m3-lite#KilogramPerCubicMetre
 */
export const KilogramPerCubicMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#KilogramPerCubicMetre';

/**
 * Kilometre, Kilometer
 * 
 * A metric unit of measurement equal to 1,000 metres (approx 0.62 miles).
 *
 * http://purl.org/iot/vocab/m3-lite#Kilometre
 */
export const Kilometre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Kilometre';

/**
 * Kilometre Per Hour, Kilometer Per Hour
 * 
 * It is a unit of speed, expressing the number of kilometres travelled in one hour.
 *
 * http://purl.org/iot/vocab/m3-lite#KilometrePerHour
 */
export const KilometrePerHour: OwlClass = 'http://purl.org/iot/vocab/m3-lite#KilometrePerHour';

/**
 * Metre Per Second, Meter Per Second  (m/s)
 * 
 * A speed/velocity unit which is equal to the speed of an object traveling 1 metre distance in one second.
 *
 * http://purl.org/iot/vocab/m3-lite#MetrePerSecond
 */
export const MetrePerSecond: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MetrePerSecond';

/**
 * Lamp Actuating Device
 * 
 * An actuator to automatically switch on/off the lamp.
 *
 * http://purl.org/iot/vocab/m3-lite#Lamp
 */
export const Lamp: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Lamp';

/**
 * Lavatory Actuating Device
 * 
 * An actuator to automatically switch on/off the lavatory.
 *
 * http://purl.org/iot/vocab/m3-lite#Lavatory
 */
export const Lavatory: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Lavatory';

/**
 * Leaf Wetness
 * 
 * Leaf wetness is a meteorological parameter that describes the amount of dew and precipitation left on surfaces. It is used for monitoring leaf moisture for agricultural purposes, such as fungus and disease control, for control of irrigation systems, and for detection of fog and dew conditions, and early detection of rainfall. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#LeafWetness
 */
export const LeafWetness: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LeafWetness';

/**
 * Leaf Wetness Sensor
 * 
 * Leaf Wetness Sensor is used in agriculture to check whether the plants need to be watered.
 *
 * http://purl.org/iot/vocab/m3-lite#LeafWetnessSensor
 */
export const LeafWetnessSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LeafWetnessSensor';

/**
 * Light Sensor
 * 
 * Light/Illuminance Sensor is used to adjust the brightness of the surface.
 *
 * http://purl.org/iot/vocab/m3-lite#LightSensor
 */
export const LightSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LightSensor';

/**
 * Litre, Liter
 * 
 * A metric unit of capacity defined as the volume of one kilogram of water under standard conditions. It is equal to 1,000 cubic centimetres.
 *
 * http://purl.org/iot/vocab/m3-lite#Litre
 */
export const Litre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Litre';

/**
 * Litre Per 100 Kilometres, Liter Per 100 Kilometers
 * 
 * A consumption unit which is equal to the one of a vehicle which needs 1 fuel litre in order to traverse 100 kilometres.
 *
 * http://purl.org/iot/vocab/m3-lite#LitrePer100Kilometres
 */
export const LitrePer100Kilometres: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LitrePer100Kilometres';

/**
 * LoRa Interface
 * 
 * This device is used for long range low power wireless communications. We can use this device to report network metrics (SNR, latence, etc.)
 *
 * http://purl.org/iot/vocab/m3-lite#LoRaInterface
 */
export const LoRaInterface: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LoRaInterface';

/**
 * LoRa Interface Energy Meter
 * 
 * Measure the average power consumption of the LoRa interface nodes.
 *
 * http://purl.org/iot/vocab/m3-lite#LoRaInterfaceEnergyMeter
 */
export const LoRaInterfaceEnergyMeter: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LoRaInterfaceEnergyMeter';

/**
 * Location Quantity Kind
 * 
 * A particular place or position.
 *
 * http://purl.org/iot/vocab/m3-lite#LocationQK
 */
export const LocationQK: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LocationQK';

/**
 * Lumen (lm)
 * 
 * The SI unit of luminous flux, equal to the amount of light emitted per second in a unit solid angle of one steradian from a uniform source of one candela.
 *
 * http://purl.org/iot/vocab/m3-lite#Lumen
 */
export const Lumen: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Lumen';

/**
 * Luminous Flux
 * 
 * Luminous Flux is the measure of the perceived power of light.
 *
 * http://purl.org/iot/vocab/m3-lite#LuminousFlux
 */
export const LuminousFlux: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LuminousFlux';

/**
 * Luminous Intensity
 * 
 *  It is a measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle, based on the luminosity function, a standardized model of the sensitivity of the human eye. The SI unit of luminous intensity is the candela (cd), an SI base unit. (Source Wikipedia)
 *
 * http://purl.org/iot/vocab/m3-lite#LuminousIntensity
 */
export const LuminousIntensity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#LuminousIntensity';

/**
 * Lux (lx)
 * 
 * The SI unit of illuminance, equal to one lumen per square metre.
 *
 * http://purl.org/iot/vocab/m3-lite#Lux
 */
export const Lux: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Lux';

/**
 * Magnetic Field
 * 
 * A region around a magnetic material or a moving electric charge within which the force of magnetism acts.
 *
 * http://purl.org/iot/vocab/m3-lite#MagneticField
 */
export const MagneticField: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MagneticField';

/**
 * Magnetic Flux Density
 * 
 * It is the magnetic flux  through a surface is the surface integral of the normal component of the magnetic field (B) passing through that surface. The SI unit of magnetic flux is the weber (Wb). (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#MagneticFluxDensity
 */
export const MagneticFluxDensity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MagneticFluxDensity';

/**
 * Magnetometer
 * 
 * A magnetometer is an device that measures magnetism—either magnetization of magnetic material like a ferromagnet, or the strength and, in some cases, direction of the magnetic field at a point in space. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#Magnetometer
 */
export const Magnetometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Magnetometer';

/**
 * Manual Measurement Type
 * 
 * If the measurement was taken when human effort was involved.
 *
 * http://purl.org/iot/vocab/m3-lite#Manual
 */
export const Manual: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Manual';

/**
 * Mass
 * 
 * Mass is a property of a physical body. It is the measure of an object's resistance to acceleration when a net force is applied.
 *
 * http://purl.org/iot/vocab/m3-lite#Mass
 */
export const Mass: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Mass';

/**
 * Methane (CH4) Sensor
 * 
 * Device used to detect Methane in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#MethaneSensor
 */
export const MethaneSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MethaneSensor';

/**
 * Metre Per Second Square, Meter Per Second Square
 * 
 * It is the unit of acceleration.
 *
 * http://purl.org/iot/vocab/m3-lite#MetrePerSecondSquare
 */
export const MetrePerSecondSquare: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MetrePerSecondSquare';

/**
 * Microampere (uA)
 * 
 * It is a unit of electric current, or amount of electric charge per second.
 *
 * http://purl.org/iot/vocab/m3-lite#Microampere
 */
export const Microampere: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Microampere';

/**
 * Microgram (ug)
 * 
 * It is a unit of mass equal to one billionth (1×10^−9) of a kilogram.
 *
 * http://purl.org/iot/vocab/m3-lite#Microgram
 */
export const Microgram: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Microgram';

/**
 * Microgram Per Cubic Metre, Microgram Per Cubic Meter
 * 
 * Microgram per cubic metre is a unit of density defined as microgram divided by cubic metre. Milligram per cubic metre is a derived unit in the International System of Units.
 *
 * http://purl.org/iot/vocab/m3-lite#MicrogramPerCubicMetre
 */
export const MicrogramPerCubicMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MicrogramPerCubicMetre';

/**
 * Microvolt (uV)
 * 
 * It is a unit of electromotive force or potential difference equal to one millionth of a volt. 
 *
 * http://purl.org/iot/vocab/m3-lite#Microvolt
 */
export const Microvolt: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Microvolt';

/**
 * Volt
 * 
 * The SI unit of electromotive force, the difference of potential that would carry one ampere of current against one ohm resistance.
 *
 * http://purl.org/iot/vocab/m3-lite#Volt
 */
export const Volt: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Volt';

/**
 * Microwatt (uW)
 * 
 * It is a unit of power.
 *
 * http://purl.org/iot/vocab/m3-lite#Microwatt
 */
export const Microwatt: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Microwatt';

/**
 * Watt (W)
 * 
 * It is the SI unit of power, equivalent to one joule per second, corresponding to the rate of consumption of energy in an electric circuit where the potential difference is one volt and the current one ampere.
 *
 * http://purl.org/iot/vocab/m3-lite#Watt
 */
export const Watt: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Watt';

/**
 * Microwatt Per Square Centimetre, Microwatt Per Square Centimeter
 * 
 * It is one of the unit for radiative and other energy fluxes.
 *
 * http://purl.org/iot/vocab/m3-lite#MicrowattPerSquareCentimetre
 */
export const MicrowattPerSquareCentimetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MicrowattPerSquareCentimetre';

/**
 * Watt Per Square Metre, Watt Per Square Meter
 * 
 * It is the SI unit for radiative and other energy fluxes.
 *
 * http://purl.org/iot/vocab/m3-lite#WattPerSquareMetre
 */
export const WattPerSquareMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WattPerSquareMetre';

/**
 * Microwave Actuating Device
 * 
 * An actuator to automatically switch on/off the Microwave.
 *
 * http://purl.org/iot/vocab/m3-lite#Microwave
 */
export const Microwave: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Microwave';

/**
 * Mileage
 * 
 * Measure of the number of miles or the average distance that a vehicle can travel on a specified quantity of fuel
 *
 * http://purl.org/iot/vocab/m3-lite#Mileage
 */
export const Mileage: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Mileage';

/**
 * Mileage Distance To Service
 * 
 * The distance which can be travelled by the vehicle before the next service inspection is required.  A negative distance is transmitted if the service inspection has been passed.
 *
 * http://purl.org/iot/vocab/m3-lite#MileageDistanceToService
 */
export const MileageDistanceToService: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MileageDistanceToService';

/**
 * Mileage Total
 * 
 * The total distance travelled by the particular vehicle since its initial production.
 *
 * http://purl.org/iot/vocab/m3-lite#MileageTotal
 */
export const MileageTotal: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MileageTotal';

/**
 * Miles
 * 
 * It is a unit of length that is equal to 1,760 yards (approx. 1.609 kilometres).
 *
 * http://purl.org/iot/vocab/m3-lite#Miles
 */
export const Miles: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Miles';

/**
 * Milliampere (mA)
 * 
 * One thousandth of an ampere.
 *
 * http://purl.org/iot/vocab/m3-lite#Milliampere
 */
export const Milliampere: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Milliampere';

/**
 * Millibar
 * 
 * One thousandth of a bar.
 *
 * http://purl.org/iot/vocab/m3-lite#Millibar
 */
export const Millibar: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Millibar';

/**
 * Milligram (mg)
 * 
 * One thousandth of a gram.
 *
 * http://purl.org/iot/vocab/m3-lite#Milligram
 */
export const Milligram: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Milligram';

/**
 * Milligram Per Cubic Metre, Milligram Per Cubic Meter
 * 
 * It is a density measurement unit.
 *
 * http://purl.org/iot/vocab/m3-lite#MilligramPerCubicMetre
 */
export const MilligramPerCubicMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MilligramPerCubicMetre';

/**
 * Milligram Per Litre, Milligram Per Liter
 * 
 * Level of Dissolved substance in liquid measured in mg per litre.
 *
 * http://purl.org/iot/vocab/m3-lite#MilligramPerLitre
 */
export const MilligramPerLitre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MilligramPerLitre';

/**
 * Milligram Per Square Metre, Milligram Per Square Meter
 * 
 * A dose unit which is equal to 1 milligram of a substance per square metre of surface area of the recipient subject.
 *
 * http://purl.org/iot/vocab/m3-lite#MilligramPerSquareMetre
 */
export const MilligramPerSquareMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MilligramPerSquareMetre';

/**
 * Millilitre, Milliliter
 * 
 * One thousandth of a litre (0.002 pint).
 *
 * http://purl.org/iot/vocab/m3-lite#Millilitre
 */
export const Millilitre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Millilitre';

/**
 * Millimetre, Millimeter
 * 
 * One thousandth of a metre (0.039 in).
 *
 * http://purl.org/iot/vocab/m3-lite#Millimetre
 */
export const Millimetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Millimetre';

/**
 * Millimetre Per Hour, Millimeter Per Hour
 * 
 * A unit of both speed (scalar) and velocity (vector), defined as the distance of one millimetre travelled per unit hour.
 *
 * http://purl.org/iot/vocab/m3-lite#MillimetrePerHour
 */
export const MillimetrePerHour: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MillimetrePerHour';

/**
 * Millisecond
 * 
 * One thousandth of a second.
 *
 * http://purl.org/iot/vocab/m3-lite#Millisecond
 */
export const Millisecond: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Millisecond';

/**
 * Millivolt (mV)
 * 
 * One thousandth of a volt.
 *
 * http://purl.org/iot/vocab/m3-lite#Millivolt
 */
export const Millivolt: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Millivolt';

/**
 * Millivolt Per Metre, Millivolt Per Meter
 * 
 * It is a measure of the intensity of the signal of a radio transmitter.
 *
 * http://purl.org/iot/vocab/m3-lite#MillivoltPerMetre
 */
export const MillivoltPerMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MillivoltPerMetre';

/**
 * Milliwatt (mW)
 * 
 * A unit of power equal to one thousandth of a watt.
 *
 * http://purl.org/iot/vocab/m3-lite#Milliwatt
 */
export const Milliwatt: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Milliwatt';

/**
 * Minute Angle
 * 
 * A Minute of Angle (MOA) is an angular measurement. A MOA is 1/60th of a degree.
 *
 * http://purl.org/iot/vocab/m3-lite#MinuteAngle
 */
export const MinuteAngle: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MinuteAngle';

/**
 * Minute Time
 * 
 * A unit of time equal to 60 seconds or 1/60th of an hour.
 *
 * http://purl.org/iot/vocab/m3-lite#MinuteTime
 */
export const MinuteTime: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MinuteTime';

/**
 * MmHg
 * 
 * A millimetre of mercury is a manometric unit of pressure, formerly defined as the extra pressure generated by a column of mercury one millimetre high and now defined as precisely 133.322387415 pascals. It is denoted by the symbol mmHg. It  is used to measure blood pressure measurements (systolic and diastolic).
 *
 * http://purl.org/iot/vocab/m3-lite#MmHg
 */
export const MmHg: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MmHg';

/**
 * Mmol Per Litre, Mmol Per Liter
 * 
 * It is the amount of a substance that corresponds to its formula mass in milligrams. MmolPerLitre is used to measure cholesterol.
 *
 * http://purl.org/iot/vocab/m3-lite#MmolPerLitre
 */
export const MmolPerLitre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MmolPerLitre';

/**
 * Handover Execution
 * 
 * Handover Execution.
 *
 * http://purl.org/iot/vocab/m3-lite#MobHoExecSuccRate
 */
export const MobHoExecSuccRate: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MobHoExecSuccRate';

/**
 * Handover Preparation Success Rate
 * 
 * Handover Preparation Success Rate.
 *
 * http://purl.org/iot/vocab/m3-lite#MobHoPrepSuccRate
 */
export const MobHoPrepSuccRate: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MobHoPrepSuccRate';

/**
 * Handover Mobility Success Rate
 * 
 * Handover Mobility Success Rate.
 *
 * http://purl.org/iot/vocab/m3-lite#MobMobilitySuccRate
 */
export const MobMobilitySuccRate: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MobMobilitySuccRate';

/**
 * Motion
 * 
 * It is the action or process of moving or being moved.
 *
 * http://purl.org/iot/vocab/m3-lite#Motion
 */
export const Motion: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Motion';

/**
 * Motion State
 * 
 * Indicator of whether a person (or object) is detected upon his/her/its movement.
 *
 * http://purl.org/iot/vocab/m3-lite#MotionState
 */
export const MotionState: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MotionState';

/**
 * Motion State Vehicle
 * 
 * Indicates whether motion of the vehicle is detected or not.
 *
 * http://purl.org/iot/vocab/m3-lite#MotionStateVehicle
 */
export const MotionStateVehicle: OwlClass = 'http://purl.org/iot/vocab/m3-lite#MotionStateVehicle';

/**
 * NFC Tagging Device
 * 
 * A tagging device can be NFC (Near Field Communication).
 *
 * http://purl.org/iot/vocab/m3-lite#NFC
 */
export const NFC: OwlClass = 'http://purl.org/iot/vocab/m3-lite#NFC';

/**
 * NH3 Sensor
 * 
 * Device used to detect NH3 level in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#NH3Sensor
 */
export const NH3Sensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#NH3Sensor';

/**
 * Nitrogen Dioxide (NO2) Sensor
 * 
 * Sensor detecting levels of Nitrogen Dioxide (NO2) in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#NO2Sensor
 */
export const NO2Sensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#NO2Sensor';

/**
 * Nitrogen Oxide (NO) Sensor
 * 
 * Device used to detect Nitrogen Oxide (NO) in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#NOSensor
 */
export const NOSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#NOSensor';

/**
 * Neighbours Sound Source
 * 
 * When the source of the sound were noisy neighbours.
 *
 * http://purl.org/iot/vocab/m3-lite#Neighbours
 */
export const Neighbours: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Neighbours';

/**
 * Ozone (O3) Sensor
 * 
 * Device used to detect Ozone (O3) in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#O3Sensor
 */
export const O3Sensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#O3Sensor';

/**
 * Odometer
 * 
 * An odometer or odograph is an instrument that indicates distance travelled by a vehicle, such as bicycle or automobile.
 *
 * http://purl.org/iot/vocab/m3-lite#Odometer
 */
export const Odometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Odometer';

/**
 * Ohm
 * 
 * Ohm is the unit of electrical resistance.
 *
 * http://purl.org/iot/vocab/m3-lite#Ohm
 */
export const Ohm: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Ohm';

/**
 * Okta
 * 
 * Okta is the unit to measure the cloud cover.
 *
 * http://purl.org/iot/vocab/m3-lite#Okta
 */
export const Okta: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Okta';

/**
 * Optical Dust Sensor
 * 
 * A sensing device that measures dust particle concentration using optical sensing mean.
 *
 * http://purl.org/iot/vocab/m3-lite#OpticalDustSensor
 */
export const OpticalDustSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#OpticalDustSensor';

/**
 * Others
 * 
 * Relates to phenomenon and unit that are not available currently in the current version of Taxonomy.
 *
 * http://purl.org/iot/vocab/m3-lite#Others
 */
export const Others: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Others';

/**
 * Oxidation Reduction Potential (ORP) Sensor
 * 
 * Measures the Water Oxidation Reduction Potential (ORP) as the tendency of a chemical species to acquire electrons and thereby be reduced.
 *
 * http://purl.org/iot/vocab/m3-lite#OxidationReductionPotentialSensor
 */
export const OxidationReductionPotentialSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#OxidationReductionPotentialSensor';

/**
 * Oxygen Sensor
 * 
 * Device used to detect Oxygen (O2) in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#OxygenSensor
 */
export const OxygenSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#OxygenSensor';

/**
 * PH
 * 
 * It is a numeric scale used to specify the acidity or basicity of an aqueous solution.
 *
 * http://purl.org/iot/vocab/m3-lite#PH
 */
export const PH: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PH';

/**
 * PH Sensor
 * 
 * Device used to detect PH level.
 *
 * http://purl.org/iot/vocab/m3-lite#PHSensor
 */
export const PHSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PHSensor';

/**
 * PPM (parts per million)
 * 
 * It describes the concentration of something in water or soil.
 *
 * http://purl.org/iot/vocab/m3-lite#PPM
 */
export const PPM: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PPM';

/**
 * Parts Per Billion
 * 
 * It describes the concentration of something in parts per billion parts of water or soil, expressed in any (but common) unit of measurement.
 *
 * http://purl.org/iot/vocab/m3-lite#PartsPerBillion
 */
export const PartsPerBillion: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PartsPerBillion';

/**
 * Pascal
 * 
 * Unit for pressure (e.g., atmospheric pressure).
 *
 * http://purl.org/iot/vocab/m3-lite#Pascal
 */
export const Pascal: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Pascal';

/**
 * Pedometer
 * 
 * Pedometer is used to count the number of steps when walking, running, etc.
 *
 * http://purl.org/iot/vocab/m3-lite#Pedometer
 */
export const Pedometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Pedometer';

/**
 * People Count Sensor
 * 
 * Device used to count the number of people (eg., used within an indoor area).
 *
 * http://purl.org/iot/vocab/m3-lite#PeopleCountSensor
 */
export const PeopleCountSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PeopleCountSensor';

/**
 * People Flow Count Sensor
 * 
 * Device used to count the number of people the moves from an area towards another area during a time window.
 *
 * http://purl.org/iot/vocab/m3-lite#PeopleFlowCountSensor
 */
export const PeopleFlowCountSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PeopleFlowCountSensor';

/**
 * People Stay Duration Average 
 * 
 * Average time people stays within an area.
 *
 * http://purl.org/iot/vocab/m3-lite#PeopleStayDurationAverage
 */
export const PeopleStayDurationAverage: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PeopleStayDurationAverage';

/**
 * People Stay Duration Sensor
 * 
 * Device used to measure the time people stays within an area.
 *
 * http://purl.org/iot/vocab/m3-lite#PeopleStayDurationSensor
 */
export const PeopleStayDurationSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PeopleStayDurationSensor';

/**
 * Percent
 * 
 * It is the amount in or for every hundred.
 *
 * http://purl.org/iot/vocab/m3-lite#Percent
 */
export const Percent: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Percent';

/**
 * Place DOI
 * 
 * Location, Place, GPS coordinates as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Place
 */
export const Place: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Place';

/**
 * Potassium
 * 
 * It is the measure of Blood Potassium Level.
 *
 * http://purl.org/iot/vocab/m3-lite#Potassium
 */
export const Potassium: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Potassium';

/**
 * Pound
 * 
 * A unit of weight equal to 16 oz. 1 pound= 453.592 grams
 *
 * http://purl.org/iot/vocab/m3-lite#Pound
 */
export const Pound: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Pound';

/**
 * Precipitation
 * 
 * It is any product of the condensation of atmospheric water vapour that falls under gravity.
 *
 * http://purl.org/iot/vocab/m3-lite#Precipitation
 */
export const Precipitation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Precipitation';

/**
 * Precipitation Sensor
 * 
 * It is a device measuring the amount of precipitation.
 *
 * http://purl.org/iot/vocab/m3-lite#PrecipitationSensor
 */
export const PrecipitationSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PrecipitationSensor';

/**
 * Presence
 * 
 * Measure to know if an object is present. It is usually boolean.
 *
 * http://purl.org/iot/vocab/m3-lite#Presence
 */
export const Presence: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Presence';

/**
 * Presence State Driver Card
 * 
 * Indicates the presence of the first driver card.
 *
 * http://purl.org/iot/vocab/m3-lite#PresenceStateDriverCard
 */
export const PresenceStateDriverCard: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PresenceStateDriverCard';

/**
 * Presence State Driver Card 1
 * 
 * Indicates the presence of the first driver card.
 *
 * http://purl.org/iot/vocab/m3-lite#PresenceStateDriverCard1
 */
export const PresenceStateDriverCard1: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PresenceStateDriverCard1';

/**
 * Presence State Driver Card 2
 * 
 * Indicates the presence of the second driver card.
 *
 * http://purl.org/iot/vocab/m3-lite#PresenceStateDriverCard2
 */
export const PresenceStateDriverCard2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PresenceStateDriverCard2';

/**
 * Presence State Emergency Vehicle
 * 
 * The presence or absence of an emergency vehicle (ambulance, fire fighters, etc.).
 *
 * http://purl.org/iot/vocab/m3-lite#PresenceStateEmergencyVehicle
 */
export const PresenceStateEmergencyVehicle: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PresenceStateEmergencyVehicle';

/**
 * Presence State Parking
 * 
 * The presence or absence of a vehicle parked.
 *
 * http://purl.org/iot/vocab/m3-lite#PresenceStateParking
 */
export const PresenceStateParking: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PresenceStateParking';

/**
 * Presence State People
 * 
 * The presence or absence of people passing.
 *
 * http://purl.org/iot/vocab/m3-lite#PresenceStatePeople
 */
export const PresenceStatePeople: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PresenceStatePeople';

/**
 * Pressure Sensor
 * 
 * A device used to detect pressure. For example, it can be attached on the bed to infer if the user is lying, sleeping, sitting, bed occupancy, etc.
 *
 * http://purl.org/iot/vocab/m3-lite#PressureSensor
 */
export const PressureSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PressureSensor';

/**
 * Proximity
 * 
 * Measure to detect proximity.
 *
 * http://purl.org/iot/vocab/m3-lite#Proximity
 */
export const Proximity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Proximity';

/**
 * Proximity Sensor
 * 
 * Detect if something is within proximity of a sensor.
 *
 * http://purl.org/iot/vocab/m3-lite#ProximitySensor
 */
export const ProximitySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ProximitySensor';

/**
 * Public Transit Sound Source
 * 
 * When the source of the sound was public transit.
 *
 * http://purl.org/iot/vocab/m3-lite#PublicTransit
 */
export const PublicTransit: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PublicTransit';

/**
 * Pulse Oxymeter
 * 
 * Pulse Oxymeter, SpO2, Blood Oxygen Saturation Sensor are used to measure the concentration of oxygen in the blood.
 *
 * http://purl.org/iot/vocab/m3-lite#PulseOxymeter
 */
export const PulseOxymeter: OwlClass = 'http://purl.org/iot/vocab/m3-lite#PulseOxymeter';

/**
 * QR Code tagging Device
 * 
 * A tagging device can be QRCode.
 *
 * http://purl.org/iot/vocab/m3-lite#QRCode
 */
export const QRCode: OwlClass = 'http://purl.org/iot/vocab/m3-lite#QRCode';

/**
 * RFID Tagging Device
 * 
 * A tagging device can be RFID.
 *
 * http://purl.org/iot/vocab/m3-lite#RFID
 */
export const RFID: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RFID';

/**
 * Received Signal Strength Indicator
 * 
 * Received Signal Strength Indicator is the signal strength in a wireless network environment.
 *
 * http://purl.org/iot/vocab/m3-lite#RSSI
 */
export const RSSI: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RSSI';

/**
 * Radian
 * 
 * The radian is a unit of angular measure defined such that an angle of one radian subtended from the centre of a unit circle produces an arc with arc length 1.
 *
 * http://purl.org/iot/vocab/m3-lite#Radian
 */
export const Radian: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Radian';

/**
 * Radian Per Second
 * 
 * The radian per second is defined as the change in the orientation of an object, in radians, every second. The radian per second is the SI unit of angular (rotational) speed.
 *
 * http://purl.org/iot/vocab/m3-lite#RadianPerSecond
 */
export const RadianPerSecond: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RadianPerSecond';

/**
 * Radiation Particle Detector
 * 
 * A particle detector, also known as a radiation detector or Geiger counter, is a device used to detect, track, and/or identify ionising particles, such as those produced by nuclear decay, cosmic radiation, or reactions in a particle accelerator.
 *
 * http://purl.org/iot/vocab/m3-lite#RadiationParticleDetector
 */
export const RadiationParticleDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RadiationParticleDetector';

/**
 * Radiation Particles Per Minute
 * 
 * The number of ionizing events detected in one minute.
 *
 * http://purl.org/iot/vocab/m3-lite#RadiationParticlesPerMinute
 */
export const RadiationParticlesPerMinute: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RadiationParticlesPerMinute';

/**
 * Rainfall
 * 
 * The depth of precipitation (water-equivalent) that accumulated over a measurement time quantity.
 *
 * http://purl.org/iot/vocab/m3-lite#Rainfall
 */
export const Rainfall: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Rainfall';

/**
 * Reactive Power
 * 
 * The portion of electricity that establishes and sustains the electric and magnetic fields of alternating-current equipment.
 *
 * http://purl.org/iot/vocab/m3-lite#ReactivePower
 */
export const ReactivePower: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ReactivePower';

/**
 * Recognized Activity
 * 
 * Activity Recognized. This is usually made available as a part of analysis done by Google. The available activities recognized are IN_VEHICLE, ON_BICYCLE, ON_FOOT, RUNNING, STILL, TILTING, UNKNOWN, and WALKING.
 *
 * http://purl.org/iot/vocab/m3-lite#RecognizedActivity
 */
export const RecognizedActivity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RecognizedActivity';

/**
 * Relative Humidity
 * 
 * The ratio of vapour pressure to saturation vapour pressure, where vapour pressure is the pressure exerted by the molecules of water vapour and saturation vapour pressure is the pressure exerted by molecules of water vapour in AIR that has attained saturation.
 *
 * http://purl.org/iot/vocab/m3-lite#RelativeHumidity
 */
export const RelativeHumidity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RelativeHumidity';

/**
 * Connected Users
 * 
 * Connected Users to a communication channel/platform
 *
 * http://purl.org/iot/vocab/m3-lite#ResAverageLicConnectedUsers
 */
export const ResAverageLicConnectedUsers: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ResAverageLicConnectedUsers';

/**
 * ERAB Drop
 * 
 * ERAB Drop.
 *
 * http://purl.org/iot/vocab/m3-lite#RetERabDrop
 */
export const RetERabDrop: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RetERabDrop';

/**
 * Revolutions Per Minute
 * 
 * Revolutions per minute (abbreviated rpm, RPM, rev/min, r/min) is a measure of the frequency of rotation, specifically the number of rotations around a fixed axis in one minute. It is used as a measure of rotational speed of a mechanical component.
 *
 * http://purl.org/iot/vocab/m3-lite#RevolutionsPerMinute
 */
export const RevolutionsPerMinute: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RevolutionsPerMinute';

/**
 * Road Occupancy
 * 
 * Ratio of time on which a road lane section is occupied by vehicles within a given period of time.
 *
 * http://purl.org/iot/vocab/m3-lite#RoadOccupancy
 */
export const RoadOccupancy: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RoadOccupancy';

/**
 * Road Surface Thermometer
 * 
 * Device used to measure the road Surface temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#RoadSurfaceThermometer
 */
export const RoadSurfaceThermometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RoadSurfaceThermometer';

/**
 * Road Temperature
 * 
 * Temperature of the road.
 *
 * http://purl.org/iot/vocab/m3-lite#RoadTemperature
 */
export const RoadTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RoadTemperature';

/**
 * Room Temperature
 * 
 * Temperature of a room.
 *
 * http://purl.org/iot/vocab/m3-lite#RoomTemperature
 */
export const RoomTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RoomTemperature';

/**
 * Rotational Speed
 * 
 * Rotational speed (or speed of revolution) of an object rotating around an axis is the number of turns of the object divided by time, specified as revolutions per minute (rpm), revolutions per second (rev/s), or radians per second (rad/s). (Source Wikipedia)
 *
 * http://purl.org/iot/vocab/m3-lite#RotationalSpeed
 */
export const RotationalSpeed: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RotationalSpeed';

/**
 * Rotational Speed Engine
 * 
 * Rotational speed is a property that is the rate of rotation of a material around an axis, in this case the engine cylinders.
 *
 * http://purl.org/iot/vocab/m3-lite#RotationalSpeedEngine
 */
export const RotationalSpeedEngine: OwlClass = 'http://purl.org/iot/vocab/m3-lite#RotationalSpeedEngine';

/**
 * Signal to Noise Ratio
 * 
 * Compares the level of a desired signal to the level of noise. 
 *
 * http://purl.org/iot/vocab/m3-lite#SNR
 */
export const SNR: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SNR';

/**
 * Sulphur Dioxide (SO2) Sensor
 * 
 * Device use to detect Sulphur Dioxide (SO2) level in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#SO2Sensor
 */
export const SO2Sensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SO2Sensor';

/**
 * SPO2
 * 
 * It is a measure of the amount of oxygenated haemoglobin in the blood.
 *
 * http://purl.org/iot/vocab/m3-lite#SPO2
 */
export const SPO2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SPO2';

/**
 * Salinity
 * 
 * It is the measure of all the salts dissolved in water.
 *
 * http://purl.org/iot/vocab/m3-lite#Salinity
 */
export const Salinity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Salinity';

/**
 * Salt Meter
 * 
 * Device use to detect salinity of water.
 *
 * http://purl.org/iot/vocab/m3-lite#SaltMeter
 */
export const SaltMeter: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SaltMeter';

/**
 * Scale
 * 
 * Arbitrary indirect reference which should be translated into meaningful measurements by using the corresponding decoding algorithm detailed in the resource description. In this case the returned values are part of a continuous variable which can take any numeric value.
 *
 * http://purl.org/iot/vocab/m3-lite#Scale
 */
export const Scale: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Scale';

/**
 * Seat Belt Tension Actuating Device
 * 
 *  Actuator used to turn Seat Belt Tension Actuator on or off. 
 *
 * http://purl.org/iot/vocab/m3-lite#SeatBeltTensionSensor
 */
export const SeatBeltTensionSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SeatBeltTensionSensor';

/**
 * Second Angle
 * 
 * It is a unit of angular measurement equal to 1/60 of one degree.
 *
 * http://purl.org/iot/vocab/m3-lite#SecondAngle
 */
export const SecondAngle: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SecondAngle';

/**
 * Seismometer
 * 
 * Seismometers are instruments that measure motions of the ground, including those of seismic waves generated by earthquakes, volcanic eruptions, and other seismic sources.
 *
 * http://purl.org/iot/vocab/m3-lite#Seismometer
 */
export const Seismometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Seismometer';

/**
 * Shake Sensor
 * 
 * Shake sensor is used to deduce the quality of the road, earthquakes.
 *
 * http://purl.org/iot/vocab/m3-lite#ShakeSensor
 */
export const ShakeSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ShakeSensor';

/**
 * Shower Actuating Device
 * 
 * An actuator to automatically switch on/off the shower.
 *
 * http://purl.org/iot/vocab/m3-lite#Shower
 */
export const Shower: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Shower';

/**
 * Siemens Per Metre, Siemens Per Meter
 * 
 * Conductivity is measured in Siemens per metre (S/m).
 *
 * http://purl.org/iot/vocab/m3-lite#SiemensPerMetre
 */
export const SiemensPerMetre: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SiemensPerMetre';

/**
 * Sink Actuating Device
 * 
 * An actuator to automatically switch on/off the sink.
 *
 * http://purl.org/iot/vocab/m3-lite#Sink
 */
export const Sink: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Sink';

/**
 * Sirens Sound Source
 * 
 * When source of the sound were sirens either from ambulance, police car or factory etc.
 *
 * http://purl.org/iot/vocab/m3-lite#Sirens
 */
export const Sirens: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Sirens';

/**
 * Skin conductance, GSR
 * 
 * Electroderal activity (also known as skin conductance or galvanic skin response) directly correlates to the sympathetic nervous system activity and thus provides a powerful tool for monitoring arousal and certain aspects of autonomic regulation.
 *
 * http://purl.org/iot/vocab/m3-lite#SkinConductance
 */
export const SkinConductance: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SkinConductance';

/**
 * Skin Conductance Sensor
 * 
 * Device used to detect Skin Conductance.
 *
 * http://purl.org/iot/vocab/m3-lite#SkinConductanceSensor
 */
export const SkinConductanceSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SkinConductanceSensor';

/**
 * Sleep Detector
 * 
 * A sleep detector sensor which detects whether the human falls asleep or wakes up.
 * 
 * https://www.tizen.org/feature/sensor.sleep_monitor
 *
 * http://purl.org/iot/vocab/m3-lite#SleepDetector
 */
export const SleepDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SleepDetector';

/**
 * Sleep Sensor
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#SleepSensor
 */
export const SleepSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SleepSensor';

/**
 * Sleep Monitor
 * 
 * A sleep monitor sensor which tracks the human sleep state. 
 * 
 * https://www.tizen.org/feature/sensor.sleep_monitor
 *
 * http://purl.org/iot/vocab/m3-lite#SleepMonitor
 */
export const SleepMonitor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SleepMonitor';

/**
 * Sleep State
 * 
 * 
 *
 * http://purl.org/iot/vocab/m3-lite#SleepState
 */
export const SleepState: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SleepState';

/**
 * Smoke Detector
 * 
 * Device used to detect if there is a fire or the smoke.
 *
 * http://purl.org/iot/vocab/m3-lite#SmokeDetector
 */
export const SmokeDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SmokeDetector';

/**
 * Snow Chains Actuating Device
 * 
 * The actuator that turn Snow chains on/off.
 *
 * http://purl.org/iot/vocab/m3-lite#SnowChains
 */
export const SnowChains: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SnowChains';

/**
 * Sodium
 * 
 * Measure of Blood Sodium level.
 *
 * http://purl.org/iot/vocab/m3-lite#Sodium
 */
export const Sodium: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Sodium';

/**
 * Soil Humidity
 * 
 * It is the quantity of water contained in a material, such as soil. 
 *
 * http://purl.org/iot/vocab/m3-lite#SoilHumidity
 */
export const SoilHumidity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoilHumidity';

/**
 * Soil Humidity Sensor
 * 
 * Soil Humidity sensor, Soil moisture, Hygrometer are an instrument used for measuring the soil moisture or soil humidity.
 *
 * http://purl.org/iot/vocab/m3-lite#SoilHumiditySensor
 */
export const SoilHumiditySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoilHumiditySensor';

/**
 * Soil Moisture Tension
 * 
 * The force per unit area required to remove film water from soil.
 *
 * http://purl.org/iot/vocab/m3-lite#SoilMoistureTension
 */
export const SoilMoistureTension: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoilMoistureTension';

/**
 * Soil Temperature
 * 
 * Soil temperature is the bulk temperature of the soil, not the surface (skin) temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#SoilTemperature
 */
export const SoilTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoilTemperature';

/**
 * Soil Thermometer
 * 
 * This sensor reports Soil temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#SoilThermometer
 */
export const SoilThermometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoilThermometer';

/**
 * Solar Radiation Measurement, PAR Measurement (Photosynthetically Active Radiation)
 * 
 * It is the power per unit area received from the Sun in the form of electromagnetic radiation in the wavelength range of the measuring instrument. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#SolarRadiation
 */
export const SolarRadiation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SolarRadiation';

/**
 * Solar Radiation Sensor
 * 
 * Device used to detect Solar Radiation.
 *
 * http://purl.org/iot/vocab/m3-lite#SolarRadiationSensor
 */
export const SolarRadiationSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SolarRadiationSensor';

/**
 * Sound Pressure Level
 * 
 * Sound pressure level is a logarithmic measure of the RMS sound pressure of a sound relative to a reference value, the threshold of hearing. The reference sound pressure was chosen conventionally to correspond to the quietest sound at 1000 Hz that the human ear can detect (20 uPa). In this case, the specific parameter is measured in an open environment.
 *
 * http://purl.org/iot/vocab/m3-lite#SoundPressureLevel
 */
export const SoundPressureLevel: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoundPressureLevel';

/**
 * Sound Pressure Level Ambient
 * 
 * Similar to Sound.
 *
 * http://purl.org/iot/vocab/m3-lite#SoundPressureLevelAmbient
 */
export const SoundPressureLevelAmbient: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoundPressureLevelAmbient';

/**
 * Sound Sensor
 * 
 * Sensor used to detect Noise level. It can be Sound Sensor, Noise level Sensor, Volume sensor, Microphone
 *
 * http://purl.org/iot/vocab/m3-lite#SoundSensor
 */
export const SoundSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SoundSensor';

/**
 * Speed
 * 
 * The rate at which someone or something moves or operates or is able to move or operate.
 *
 * http://purl.org/iot/vocab/m3-lite#Speed
 */
export const Speed: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Speed';

/**
 * Speed Average
 * 
 * A measure of the average rate of motion of an object.
 *
 * http://purl.org/iot/vocab/m3-lite#SpeedAverage
 */
export const SpeedAverage: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SpeedAverage';

/**
 * Speed Instantaneous
 * 
 * A measure of the instantaneous rate of motion of an object.
 *
 * http://purl.org/iot/vocab/m3-lite#SpeedInstantaneous
 */
export const SpeedInstantaneous: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SpeedInstantaneous';

/**
 * Speed Median
 * 
 * A measure of the median rate of motion of an object.
 *
 * http://purl.org/iot/vocab/m3-lite#SpeedMedian
 */
export const SpeedMedian: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SpeedMedian';

/**
 * Speed Sensor
 * 
 * Sensor used to detect speed.
 *
 * http://purl.org/iot/vocab/m3-lite#SpeedSensor
 */
export const SpeedSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SpeedSensor';

/**
 * Staying People Count Sensor
 * 
 * Device used to count the number of people that stays within an area for more than a threshold of time.
 *
 * http://purl.org/iot/vocab/m3-lite#StayingPeopleCountSensor
 */
export const StayingPeopleCountSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#StayingPeopleCountSensor';

/**
 * Step
 * 
 * It is a measure of number of Step taken.
 *
 * http://purl.org/iot/vocab/m3-lite#Step
 */
export const Step: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Step';

/**
 * Sun Position Direction
 * 
 * The position of the Sun in the sky is a function of both time and the geographic coordinates of the observer on the surface of the Earth. (Source Wikipedia).
 *
 * http://purl.org/iot/vocab/m3-lite#SunPositionDirection
 */
export const SunPositionDirection: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SunPositionDirection';

/**
 * Sun Position Direction Sensor
 * 
 * Sensor used to detect sun position.
 *
 * http://purl.org/iot/vocab/m3-lite#SunPositionDirectionSensor
 */
export const SunPositionDirectionSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SunPositionDirectionSensor';

/**
 * Sun Position Elevation
 * 
 * It is the altitude of the sun, the angle between the horizon and the centre of the sun's disc.
 *
 * http://purl.org/iot/vocab/m3-lite#SunPositionElevation
 */
export const SunPositionElevation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SunPositionElevation';

/**
 * Sun Position Elevation Sensor
 * 
 * Device used to detect sun elevation.
 *
 * http://purl.org/iot/vocab/m3-lite#SunPositionElevationSensor
 */
export const SunPositionElevationSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SunPositionElevationSensor';

/**
 * Systolic Blood Pressure
 * 
 * It is the pressure when the heart beats while pumping blood.
 *
 * http://purl.org/iot/vocab/m3-lite#SystolicBloodPressure
 */
export const SystolicBloodPressure: OwlClass = 'http://purl.org/iot/vocab/m3-lite#SystolicBloodPressure';

/**
 * TV Actuating Device
 * 
 * An actuator to automatically switch on/off the television.
 *
 * http://purl.org/iot/vocab/m3-lite#TV
 */
export const TV: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TV';

/**
 * Telephone Actuating Device
 * 
 * An actuator to automatically switch on/off the Telephone.
 *
 * http://purl.org/iot/vocab/m3-lite#Telephone
 */
export const Telephone: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Telephone';

/**
 * Temperature Engine
 * 
 * The temperature of a vehicle engine.
 *
 * http://purl.org/iot/vocab/m3-lite#TemperatureEngine
 */
export const TemperatureEngine: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TemperatureEngine';

/**
 * Temperature Waste Container
 * 
 * The temperature of the air that would be indicated by a thermometer exposed to the air inside a waste container.
 *
 * http://purl.org/iot/vocab/m3-lite#TemperatureWasteContainer
 */
export const TemperatureWasteContainer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TemperatureWasteContainer';

/**
 * Tesla
 * 
 * It is the SI unit of magnetic flux density.
 *
 * http://purl.org/iot/vocab/m3-lite#Tesla
 */
export const Tesla: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Tesla';

/**
 * Throttle Position Sensor
 * 
 * It is a device used to monitor the throttle position of a vehicle.
 *
 * http://purl.org/iot/vocab/m3-lite#ThrottleSensor
 */
export const ThrottleSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#ThrottleSensor';

/**
 * Time of arrival
 * 
 * Estimated time till an object is arriving to a specific location (typically used in transportation).
 *
 * http://purl.org/iot/vocab/m3-lite#TimeOfArrival
 */
export const TimeOfArrival: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeOfArrival';

/**
 * Time of arrival for the next bus
 * 
 * Estimated time (in seconds) till a bus will arrive at a specific bus stop. 
 *
 * http://purl.org/iot/vocab/m3-lite#TimeOfArrivalNextBus
 */
export const TimeOfArrivalNextBus: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeOfArrivalNextBus';

/**
 * Time of arrival sensor for the next bus
 * 
 * Virtual device that represents a bus stop X and a bus line Y; it estimates the remaining time the next bus (belonging to line Y) will arrive at bus stop X. 
 *
 * http://purl.org/iot/vocab/m3-lite#TimeOfArrivalNextBusSensor
 */
export const TimeOfArrivalNextBusSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeOfArrivalNextBusSensor';

/**
 * Time of Arrival Sensor
 * 
 * Virtual device that estimates the remaining time for an object to arrive at a specific location.
 *
 * http://purl.org/iot/vocab/m3-lite#TimeOfArrivalSensor
 */
export const TimeOfArrivalSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeOfArrivalSensor';

/**
 * Time Related State
 * 
 * Indicator of whether a person (or object) has overpassed a particular time threshold (e.g. maximum number of hours driving, etc.)
 *
 * http://purl.org/iot/vocab/m3-lite#TimeRelatedState
 */
export const TimeRelatedState: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeRelatedState';

/**
 * Time Related State Driver
 * 
 * Indicator of whether the driver of a vehicle approaches or exceeds his/her working time limits.
 *
 * http://purl.org/iot/vocab/m3-lite#TimeRelatedStateDriver
 */
export const TimeRelatedStateDriver: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeRelatedStateDriver';

/**
 * Time Related State Driver 1
 * 
 * Indicates if the first driver approaches or exceeds working time limits (or other limits).
 *
 * http://purl.org/iot/vocab/m3-lite#TimeRelatedStateDriver1
 */
export const TimeRelatedStateDriver1: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeRelatedStateDriver1';

/**
 * Time Related State Driver 2
 * 
 * Indicates if the second driver approaches or exceeds working time limits (or other limits).
 *
 * http://purl.org/iot/vocab/m3-lite#TimeRelatedStateDriver2
 */
export const TimeRelatedStateDriver2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TimeRelatedStateDriver2';

/**
 * Timestamp
 * 
 * Sequence of characters or encoded information identifying when a certain event occurred, usually giving date and time of day, sometimes accurate to a small fraction of a second. This representation should be encoded following ISO8601.
 *
 * http://purl.org/iot/vocab/m3-lite#Timestamp
 */
export const Timestamp: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Timestamp';

/**
 * Tonne
 * 
 * It is a non-SI metric unit of mass equal to 1,000 kilograms.
 *
 * http://purl.org/iot/vocab/m3-lite#Tonne
 */
export const Tonne: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Tonne';

/**
 * Touch Sensor
 * 
 * Device that captures and records physical touch or embrace on a device and/or object.
 *
 * http://purl.org/iot/vocab/m3-lite#TouchSensor
 */
export const TouchSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TouchSensor';

/**
 * Tourism DOI
 * 
 * Tourism as an Internet of Things (IoT) applicative domain.
 *
 * http://purl.org/iot/vocab/m3-lite#Tourism
 */
export const Tourism: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Tourism';

/**
 * Traffic
 * 
 * When the source of the sound was traffic.
 *
 * http://purl.org/iot/vocab/m3-lite#Traffic
 */
export const Traffic: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Traffic';

/**
 * Traffic Intensity
 * 
 * The intensity of a traffic flow is the number of vehicles passing a cross section of a road in a unit of time.
 *
 * http://purl.org/iot/vocab/m3-lite#TrafficIntensity
 */
export const TrafficIntensity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#TrafficIntensity';

/**
 * Ultrasonic Sensor
 * 
 * Ultrasonic sensors are used to deduce human posture in smart home for example.
 *
 * http://purl.org/iot/vocab/m3-lite#UltrasonicSensor
 */
export const UltrasonicSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#UltrasonicSensor';

/**
 * Volatile Organic Compound (VOC) Sensor
 * 
 * Sensor that detects levels of Volatile Organic Components (VOC) in the environment.
 *
 * http://purl.org/iot/vocab/m3-lite#VOCSensor
 */
export const VOCSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VOCSensor';

/**
 * Vehicle Count Sensor
 * 
 * Device used to count the number of vehicles (e.g., used within the Citypulse project).
 *
 * http://purl.org/iot/vocab/m3-lite#VehicleCountSensor
 */
export const VehicleCountSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VehicleCountSensor';

/**
 * Vehicle Overspeed State
 * 
 * Measure to indicates whether the vehicle is exceeding the legal speed limit.
 *
 * http://purl.org/iot/vocab/m3-lite#VehicleOverspeedState
 */
export const VehicleOverspeedState: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VehicleOverspeedState';

/**
 *  Vehicle Presence Detector
 * 
 * Device used to detect if an vehicle is present at a place.
 *
 * http://purl.org/iot/vocab/m3-lite#VehiclePresenceDetector
 */
export const VehiclePresenceDetector: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VehiclePresenceDetector';

/**
 * Vehicles Per Minute
 * 
 * Number of vehicles that traverse a concrete region of the space in one minute.
 *
 * http://purl.org/iot/vocab/m3-lite#VehiclesPerMinute
 */
export const VehiclesPerMinute: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VehiclesPerMinute';

/**
 * Ventilation Actuating Device
 * 
 * An actuator to automatically open/close the ventilation.
 *
 * http://purl.org/iot/vocab/m3-lite#Ventilation
 */
export const Ventilation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Ventilation';

/**
 * Visibility
 * 
 * The state of being able to see or be seen.
 *
 * http://purl.org/iot/vocab/m3-lite#Visibility
 */
export const Visibility: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Visibility';

/**
 * Visibility Sensor
 * 
 * Device used to detect Visibility.
 *
 * http://purl.org/iot/vocab/m3-lite#VisibilitySensor
 */
export const VisibilitySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VisibilitySensor';

/**
 * Voice Command
 * 
 * A voice command to control a voice controlled system or environment, such as a smart home.
 *
 * http://purl.org/iot/vocab/m3-lite#VoiceCommand
 */
export const VoiceCommand: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VoiceCommand';

/**
 * Voice Command Controller
 * 
 * An actuating device called  that allows to semi-control the environment of the Voice Command Sensor.
 *
 * http://purl.org/iot/vocab/m3-lite#VoiceCommandController
 */
export const VoiceCommandController: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VoiceCommandController';

/**
 * Voice Command Sensor
 * 
 * Sensor that uses automatic speech recognition technology to match or reject a recorded voice command according to a specified set of available voice commands.
 *
 * http://purl.org/iot/vocab/m3-lite#VoiceCommandSensor
 */
export const VoiceCommandSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VoiceCommandSensor';

/**
 * Volt Ampere Reactive, VAR
 * 
 * In electric power transmission and distribution, volt-ampere reactive (var) is a unit in which reactive power is expressed in an AC electric power system.
 *
 * http://purl.org/iot/vocab/m3-lite#VoltAmpereReactive
 */
export const VoltAmpereReactive: OwlClass = 'http://purl.org/iot/vocab/m3-lite#VoltAmpereReactive';

/**
 * Voltage
 * 
 * An electromotive force or potential difference expressed in volts (Source Google).
 *
 * http://purl.org/iot/vocab/m3-lite#Voltage
 */
export const Voltage: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Voltage';

/**
 * Washing Machine Actuation Device
 * 
 * An actuator to automatically switch on/off the washing machine.
 *
 * http://purl.org/iot/vocab/m3-lite#WashingMachine
 */
export const WashingMachine: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WashingMachine';

/**
 * Water Conductivity Sensor
 * 
 * Device used to measure the conductivity of water.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterConductivitySensor
 */
export const WaterConductivitySensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterConductivitySensor';

/**
 * Water Level
 * 
 * The height reached by the water in a reservoir, river, storage tank, or similar.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterLevel
 */
export const WaterLevel: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterLevel';

/**
 * Water NH4 Ion Sensor
 * 
 * Sensor used to measure NH4 concentration level in the water.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterNH4IonSensor
 */
export const WaterNH4IonSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterNH4IonSensor';

/**
 * Water NO3 Ion Sensor
 * 
 * Sensor used to measure NO3 concentration level in the water.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterNO3IonSensor
 */
export const WaterNO3IonSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterNO3IonSensor';

/**
 * Water O2 Ion Sensor
 * 
 * Sensor used to measure O2 concentration level in the water.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterO2IonSensor
 */
export const WaterO2IonSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterO2IonSensor';

/**
 * Water PH Sensor
 * 
 * Device used to detect PH level of water.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterPHSensor
 */
export const WaterPHSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterPHSensor';

/**
 * Water Temperature
 * 
 * Sea surface temperature (SST) is the water temperature close to the ocean's surface.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterTemperature
 */
export const WaterTemperature: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterTemperature';

/**
 * Water Thermometer
 * 
 * This sensor reports Water temperature.
 *
 * http://purl.org/iot/vocab/m3-lite#WaterThermometer
 */
export const WaterThermometer: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WaterThermometer';

/**
 * Weather Luminosity
 * 
 * Luminosity.
 *
 * http://purl.org/iot/vocab/m3-lite#WeatherLuminosity
 */
export const WeatherLuminosity: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WeatherLuminosity';

/**
 * Weather Precipitation
 * 
 * Weather Precipitation.
 *
 * http://purl.org/iot/vocab/m3-lite#WeatherPrecipitation
 */
export const WeatherPrecipitation: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WeatherPrecipitation';

/**
 * Weight
 * 
 * A body's relative mass or the quantity of matter contained by it, giving rise to a downward force; the heaviness of a person or thing.
 *
 * http://purl.org/iot/vocab/m3-lite#Weight
 */
export const Weight: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Weight';

/**
 * Weight Sensor
 * 
 * Device used to weight an object.
 *
 * http://purl.org/iot/vocab/m3-lite#WeightSensor
 */
export const WeightSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WeightSensor';

/**
 * WiFi Interface Energy Meter
 * 
 * Measure the average power consumption of the WiFi interface nodes.
 *
 * http://purl.org/iot/vocab/m3-lite#WiFiInterfaceEnergyMeter
 */
export const WiFiInterfaceEnergyMeter: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WiFiInterfaceEnergyMeter';

/**
 * Wind Chill
 * 
 * The cooling effect of wind blowing on a surface.
 *
 * http://purl.org/iot/vocab/m3-lite#WindChill
 */
export const WindChill: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WindChill';

/**
 * Wind Chill Sensor
 * 
 * Device used to detect Wind Chill.
 *
 * http://purl.org/iot/vocab/m3-lite#WindChillSensor
 */
export const WindChillSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WindChillSensor';

/**
 * Wind Direction
 * 
 * The geodetic azimuth of the direction from which the wind is blowing.
 *
 * http://purl.org/iot/vocab/m3-lite#WindDirection
 */
export const WindDirection: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WindDirection';

/**
 * Wind Direction Sensor
 * 
 * Device used to detect wind direction.
 *
 * http://purl.org/iot/vocab/m3-lite#WindDirectionSensor
 */
export const WindDirectionSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WindDirectionSensor';

/**
 * Wind Velocity, Wind Speed
 * 
 * The ratio of the distance covered by moving air to the time quantity taken to cover it.
 *
 * http://purl.org/iot/vocab/m3-lite#WindSpeed
 */
export const WindSpeed: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WindSpeed';

/**
 * Wind Speed Sensor
 * 
 * Wind Speed Sensor, Anemometer or Wind Velocity Sensor is used to measure the wind speed.
 *
 * http://purl.org/iot/vocab/m3-lite#WindSpeedSensor
 */
export const WindSpeedSensor: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WindSpeedSensor';

/**
 * Window Actuating Device
 * 
 * An actuator to automatically open/close the window.
 *
 * http://purl.org/iot/vocab/m3-lite#Window
 */
export const Window: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Window';

/**
 * Working State
 * 
 * Indicator of whether a person (or object) is working or not
 *
 * http://purl.org/iot/vocab/m3-lite#WorkingState
 */
export const WorkingState: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WorkingState';

/**
 * Working State Driver
 * 
 * Indicator of whether the driver of a vehicle is present or not
 *
 * http://purl.org/iot/vocab/m3-lite#WorkingStateDriver
 */
export const WorkingStateDriver: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WorkingStateDriver';

/**
 * Working State Driver 1
 * 
 * State of work of the first driver as defined in the FMS standard.
 *
 * http://purl.org/iot/vocab/m3-lite#WorkingStateDriver1
 */
export const WorkingStateDriver1: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WorkingStateDriver1';

/**
 * Working State Driver 2
 * 
 * State of work of the second driver as defined in the FMS standard.
 *
 * http://purl.org/iot/vocab/m3-lite#WorkingStateDriver2
 */
export const WorkingStateDriver2: OwlClass = 'http://purl.org/iot/vocab/m3-lite#WorkingStateDriver2';

/**
 * W/out
 * 
 * This unit is used to measure delta dew point within the Com4Innov tesbed. Natural number (W/out unit).
 *
 * http://purl.org/iot/vocab/m3-lite#Wout
 */
export const Wout: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Wout';

/**
 * Year
 * 
 * Year as a unit of time.
 *
 * http://purl.org/iot/vocab/m3-lite#Year
 */
export const Year: OwlClass = 'http://purl.org/iot/vocab/m3-lite#Year';

/**
 * has Direction
 * 
 * The observations made by the sensors are affected by the direction of the sensing device. This property allows observations of the sensor to be associated to the Direction concept.
 *
 * http://purl.org/iot/vocab/m3-lite#hasDirection
 */
export const hasDirection: OwlObjectProperty = 'http://purl.org/iot/vocab/m3-lite#hasDirection';

/**
 * has Domain Of Interest
 * 
 * This property is used to classify devices by DomainOfInterest (e.g., blood pressure sensor is used in healthcare).
 *
 * http://purl.org/iot/vocab/m3-lite#hasDomainOfInterest
 */
export const hasDomainOfInterest: OwlObjectProperty = 'http://purl.org/iot/vocab/m3-lite#hasDomainOfInterest';

/**
 * has Measurement Type
 * 
 * Each sensing device can have a different sensing mechanism which may result in different kinds of sensor data. This property links observation of the sensor to the associated MeasurementType.
 *
 * http://purl.org/iot/vocab/m3-lite#hasMeasurementType
 */
export const hasMeasurementType: OwlObjectProperty = 'http://purl.org/iot/vocab/m3-lite#hasMeasurementType';

/**
 * has Sound Source
 * 
 * This property links sound to its environmental source.
 *
 * http://purl.org/iot/vocab/m3-lite#hasSoundSource
 */
export const hasSoundSource: OwlObjectProperty = 'http://purl.org/iot/vocab/m3-lite#hasSoundSource';

/**
 * has Source
 * 
 * This property links sensed phenomena to its environmental source.
 *
 * http://purl.org/iot/vocab/m3-lite#hasSource
 */
export const hasSource: OwlObjectProperty = 'http://purl.org/iot/vocab/m3-lite#hasSource';

export const _BASE: IriString = 'http://purl.org/iot/vocab/m3-lite#';
export const _PREFIX: string = 'm3lite';