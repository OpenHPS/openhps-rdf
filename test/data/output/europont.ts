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
 * IoTEntity
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IoTEntity
 */
export const IoTEntity: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IoTEntity';

/**
 * Action
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Action
 */
export const Action: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Action';

/**
 * Trigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Trigger
 */
export const Trigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Trigger';

/**
 * Agent
 * 
 * An agent (eg. person, group, software or physical artifact).
 *
 * http://elite.polito.it/ontologies/eupont.owl#Agent
 */
export const Agent: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Agent';

/**
 * Command
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Command
 */
export const Command: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Command';

/**
 * Rule
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Rule
 */
export const Rule: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Rule';

/**
 * InstantiatedAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InstantiatedAction
 */
export const InstantiatedAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InstantiatedAction';

/**
 * Channel
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Channel
 */
export const Channel: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Channel';

/**
 * Category
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Category
 */
export const Category: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Category';

/**
 * Service
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Service
 */
export const Service: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Service';

/**
 * InstantiatedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InstantiatedTrigger
 */
export const InstantiatedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InstantiatedTrigger';

/**
 * InstantiatedDetail
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InstantiatedDetail
 */
export const InstantiatedDetail: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InstantiatedDetail';

/**
 * Notification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Notification
 */
export const Notification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Notification';

/**
 * RuleInstantiatedAxiom
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RuleInstantiatedAxiom
 */
export const RuleInstantiatedAxiom: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RuleInstantiatedAxiom';

/**
 * Detail
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Detail
 */
export const Detail: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Detail';

/**
 * Location
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Location
 */
export const Location: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Location';

/**
 * AcceptCommunicationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AcceptCommunicationAction
 */
export const AcceptCommunicationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AcceptCommunicationAction';

/**
 * GetAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#GetAction
 */
export const GetAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#GetAction';

/**
 * RuleNominalAxiom
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RuleNominalAxiom
 */
export const RuleNominalAxiom: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RuleNominalAxiom';

/**
 * ActivateEnvironmentSceneAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ActivateEnvironmentSceneAction
 */
export const ActivateEnvironmentSceneAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ActivateEnvironmentSceneAction';

/**
 * SetEnvironmentComfortAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SetEnvironmentComfortAction
 */
export const SetEnvironmentComfortAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SetEnvironmentComfortAction';

/**
 * ActivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ActivityAction
 */
export const ActivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ActivityAction';

/**
 * ActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ActivityTrigger
 */
export const ActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ActivityTrigger';

/**
 * AddAlarmAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddAlarmAction
 */
export const AddAlarmAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddAlarmAction';

/**
 * AddRemindAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddRemindAction
 */
export const AddRemindAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddRemindAction';

/**
 * AddCalendarItemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddCalendarItemAction
 */
export const AddCalendarItemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddCalendarItemAction';

/**
 * SaveAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveAction
 */
export const SaveAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveAction';

/**
 * AddReminderAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddReminderAction
 */
export const AddReminderAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddReminderAction';

/**
 * AddTimerAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddTimerAction
 */
export const AddTimerAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddTimerAction';

/**
 * AddedAlarmTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddedAlarmTrigger
 */
export const AddedAlarmTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddedAlarmTrigger';

/**
 * AddedRemindTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddedRemindTrigger
 */
export const AddedRemindTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddedRemindTrigger';

/**
 * AddedCalendarItemTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddedCalendarItemTrigger
 */
export const AddedCalendarItemTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddedCalendarItemTrigger';

/**
 * SavedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SavedTrigger
 */
export const SavedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SavedTrigger';

/**
 * AddedReminderTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddedReminderTrigger
 */
export const AddedReminderTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddedReminderTrigger';

/**
 * AddedTimerTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AddedTimerTrigger
 */
export const AddedTimerTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AddedTimerTrigger';

/**
 * AirConditioner
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AirConditioner
 */
export const AirConditioner: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AirConditioner';

/**
 * SmartEnvironmentSystem
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartEnvironmentSystem
 */
export const SmartEnvironmentSystem: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartEnvironmentSystem';

/**
 * AirMonitor
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AirMonitor
 */
export const AirMonitor: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AirMonitor';

/**
 * AirPressureService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AirPressureService
 */
export const AirPressureService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AirPressureService';

/**
 * SmartEnvironmentService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartEnvironmentService
 */
export const SmartEnvironmentService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartEnvironmentService';

/**
 * AirPurifier
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AirPurifier
 */
export const AirPurifier: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AirPurifier';

/**
 * AirPurifierDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AirPurifierDisabledTrigger
 */
export const AirPurifierDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AirPurifierDisabledTrigger';

/**
 * DecreasedAirQualityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedAirQualityTrigger
 */
export const DecreasedAirQualityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedAirQualityTrigger';

/**
 * AirPurifierEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AirPurifierEnabledTrigger
 */
export const AirPurifierEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AirPurifierEnabledTrigger';

/**
 * IncreasedAirQualityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedAirQualityTrigger
 */
export const IncreasedAirQualityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedAirQualityTrigger';

/**
 * AirPurifierService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AirPurifierService
 */
export const AirPurifierService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AirPurifierService';

/**
 * AlarmClockService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AlarmClockService
 */
export const AlarmClockService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AlarmClockService';

/**
 * TimeService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TimeService
 */
export const TimeService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TimeService';

/**
 * AnswerCallAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AnswerCallAction
 */
export const AnswerCallAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AnswerCallAction';

/**
 * AntiIntrusionSystem
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AntiIntrusionSystem
 */
export const AntiIntrusionSystem: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AntiIntrusionSystem';

/**
 * Appliance
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Appliance
 */
export const Appliance: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Appliance';

/**
 * PhysicalObject
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PhysicalObject
 */
export const PhysicalObject: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PhysicalObject';

/**
 * ApplianceService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ApplianceService
 */
export const ApplianceService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ApplianceService';

/**
 * ArriveOnVehicleTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ArriveOnVehicleTrigger
 */
export const ArriveOnVehicleTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ArriveOnVehicleTrigger';

/**
 * EnterTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnterTrigger
 */
export const EnterTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnterTrigger';

/**
 * AttachementService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AttachementService
 */
export const AttachementService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AttachementService';

/**
 * CommunicationService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CommunicationService
 */
export const CommunicationService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CommunicationService';

/**
 * InformationService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InformationService
 */
export const InformationService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InformationService';

/**
 * AudioRecordingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AudioRecordingService
 */
export const AudioRecordingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AudioRecordingService';

/**
 * RecordingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RecordingService
 */
export const RecordingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RecordingService';

/**
 * AudioService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#AudioService
 */
export const AudioService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#AudioService';

/**
 * OutputService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#OutputService
 */
export const OutputService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#OutputService';

/**
 * BatteryService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#BatteryService
 */
export const BatteryService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#BatteryService';

/**
 * DeviceService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceService
 */
export const DeviceService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceService';

/**
 * Beacon
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Beacon
 */
export const Beacon: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Beacon';

/**
 * BikeTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#BikeTrackingService
 */
export const BikeTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#BikeTrackingService';

/**
 * TrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TrackingService
 */
export const TrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TrackingService';

/**
 * BlockCallAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#BlockCallAction
 */
export const BlockCallAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#BlockCallAction';

/**
 * DecreaseUserConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseUserConnectivityAction
 */
export const DecreaseUserConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseUserConnectivityAction';

/**
 * Blog
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Blog
 */
export const Blog: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Blog';

/**
 * NewsTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NewsTool
 */
export const NewsTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NewsTool';

/**
 * BluetoothService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#BluetoothService
 */
export const BluetoothService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#BluetoothService';

/**
 * NetworkService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NetworkService
 */
export const NetworkService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NetworkService';

/**
 * BrightnessDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#BrightnessDecreasedTrigger
 */
export const BrightnessDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#BrightnessDecreasedTrigger';

/**
 * ImprovedLightingConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImprovedLightingConditionTrigger
 */
export const ImprovedLightingConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImprovedLightingConditionTrigger';

/**
 * BrightnessIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#BrightnessIncreasedTrigger
 */
export const BrightnessIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#BrightnessIncreasedTrigger';

/**
 * Building
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Building
 */
export const Building: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Building';

/**
 * BuyCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#BuyCommand
 */
export const BuyCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#BuyCommand';

/**
 * CalendarService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CalendarService
 */
export const CalendarService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CalendarService';

/**
 * Calendar
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CalendarTool
 */
export const CalendarTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CalendarTool';

/**
 * OrganizerTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#OrganizerTool
 */
export const OrganizerTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#OrganizerTool';

/**
 * CallService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CallService
 */
export const CallService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CallService';

/**
 * Call
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CallTool
 */
export const CallTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CallTool';

/**
 * CommunicationTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CommunicationTool
 */
export const CommunicationTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CommunicationTool';

/**
 * Camera
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Camera
 */
export const Camera: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Camera';

/**
 * Chat
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ChatTool
 */
export const ChatTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ChatTool';

/**
 * CloseCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CloseCommand
 */
export const CloseCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CloseCommand';

/**
 * CloseNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CloseNotification
 */
export const CloseNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CloseNotification';

/**
 * CloseSafetyValveAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CloseSafetyValveAction
 */
export const CloseSafetyValveAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CloseSafetyValveAction';

/**
 * IncreaseSecurityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseSecurityAction
 */
export const IncreaseSecurityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseSecurityAction';

/**
 * CloseWindowFrameAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CloseWindowFrameAction
 */
export const CloseWindowFrameAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CloseWindowFrameAction';

/**
 * DecreaseLightingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseLightingAction
 */
export const DecreaseLightingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseLightingAction';

/**
 * IncreaseTemperatureAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseTemperatureAction
 */
export const IncreaseTemperatureAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseTemperatureAction';

/**
 * CloudPlatform
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CloudPlatform
 */
export const CloudPlatform: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CloudPlatform';

/**
 * StoragePlatform
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoragePlatform
 */
export const StoragePlatform: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoragePlatform';

/**
 * CodeHostingPlatform
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CodeHostingPlatform
 */
export const CodeHostingPlatform: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CodeHostingPlatform';

/**
 * DeveloperTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeveloperTool
 */
export const DeveloperTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeveloperTool';

/**
 * CoffeeMaker
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CoffeeMaker
 */
export const CoffeeMaker: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CoffeeMaker';

/**
 * CoffeeService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CoffeeService
 */
export const CoffeeService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CoffeeService';

/**
 * Colleague
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Colleague
 */
export const Colleague: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Colleague';

/**
 * CommentService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CommentService
 */
export const CommentService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CommentService';

/**
 * VirtualObject
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VirtualObject
 */
export const VirtualObject: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VirtualObject';

/**
 * ConnectCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectCommand
 */
export const ConnectCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectCommand';

/**
 * ConnectDeviceAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectDeviceAction
 */
export const ConnectDeviceAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectDeviceAction';

/**
 * IncreaseConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseConnectivityAction
 */
export const IncreaseConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseConnectivityAction';

/**
 * ConnectNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectNotification
 */
export const ConnectNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectNotification';

/**
 * ConnectToDeviceAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectToDeviceAction
 */
export const ConnectToDeviceAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectToDeviceAction';

/**
 * ConnectToNetworkAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectToNetworkAction
 */
export const ConnectToNetworkAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectToNetworkAction';

/**
 * ConnectToWebServiceAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectToWebServiceAction
 */
export const ConnectToWebServiceAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectToWebServiceAction';

/**
 * ConnectedVehicle
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectedVehicle
 */
export const ConnectedVehicle: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectedVehicle';

/**
 * SmartCitySystem
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartCitySystem
 */
export const SmartCitySystem: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartCitySystem';

/**
 * ConnectionToDeviceTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectionToDeviceTrigger
 */
export const ConnectionToDeviceTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectionToDeviceTrigger';

/**
 * DeviceConnectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceConnectedTrigger
 */
export const DeviceConnectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceConnectedTrigger';

/**
 * ConnectionToNetworkTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectionToNetworkTrigger
 */
export const ConnectionToNetworkTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectionToNetworkTrigger';

/**
 * ConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectivityAction
 */
export const ConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectivityAction';

/**
 * ConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ConnectivityTrigger
 */
export const ConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ConnectivityTrigger';

/**
 * Console
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Console
 */
export const Console: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Console';

/**
 * ContactService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ContactService
 */
export const ContactService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ContactService';

/**
 * Cooker
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Cooker
 */
export const Cooker: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Cooker';

/**
 * CoolingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CoolingService
 */
export const CoolingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CoolingService';

/**
 * CoolingSystemDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CoolingSystemDisabledTrigger
 */
export const CoolingSystemDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CoolingSystemDisabledTrigger';

/**
 * IncreasedTemperatureTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedTemperatureTrigger
 */
export const IncreasedTemperatureTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedTemperatureTrigger';

/**
 * CoolingSystemEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#CoolingSystemEnabledTrigger
 */
export const CoolingSystemEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#CoolingSystemEnabledTrigger';

/**
 * DecreasedTemperatureTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedTemperatureTrigger
 */
export const DecreasedTemperatureTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedTemperatureTrigger';

/**
 * DIYElectronic
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DIYElectronic
 */
export const DIYElectronic: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DIYElectronic';

/**
 * DangerousActivityDetectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DangerousActivityDetectedTrigger
 */
export const DangerousActivityDetectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DangerousActivityDetectedTrigger';

/**
 * UnhealthyActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#UnhealthyActivityTrigger
 */
export const UnhealthyActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#UnhealthyActivityTrigger';

/**
 * DangerousActivityTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DangerousActivityTrackingService
 */
export const DangerousActivityTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DangerousActivityTrackingService';

/**
 * DecreaseAirQualityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseAirQualityAction
 */
export const DecreaseAirQualityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseAirQualityAction';

/**
 * DecreaseEnvironmentConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseEnvironmentConditionAction
 */
export const DecreaseEnvironmentConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseEnvironmentConditionAction';

/**
 * DecreaseConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseConnectivityAction
 */
export const DecreaseConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseConnectivityAction';

/**
 * EnvironmentAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnvironmentAction
 */
export const EnvironmentAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnvironmentAction';

/**
 * DecreaseHumidityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseHumidityAction
 */
export const DecreaseHumidityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseHumidityAction';

/**
 * DecreaseNoiseAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseNoiseAction
 */
export const DecreaseNoiseAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseNoiseAction';

/**
 * DecreaseSecurityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseSecurityAction
 */
export const DecreaseSecurityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseSecurityAction';

/**
 * DecreaseTemperatureAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseTemperatureAction
 */
export const DecreaseTemperatureAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseTemperatureAction';

/**
 * DecreaseVolumeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreaseVolumeAction
 */
export const DecreaseVolumeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreaseVolumeAction';

/**
 * DecreasedAirPressureTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedAirPressureTrigger
 */
export const DecreasedAirPressureTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedAirPressureTrigger';

/**
 * EnvironmentConditionDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnvironmentConditionDecreasedTrigger
 */
export const EnvironmentConditionDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnvironmentConditionDecreasedTrigger';

/**
 * DecreasedConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedConnectivityTrigger
 */
export const DecreasedConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedConnectivityTrigger';

/**
 * DecreasedHealthConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedHealthConditionTrigger
 */
export const DecreasedHealthConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedHealthConditionTrigger';

/**
 * HealthTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HealthTrigger
 */
export const HealthTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HealthTrigger';

/**
 * DecreasedHumidityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedHumidityTrigger
 */
export const DecreasedHumidityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedHumidityTrigger';

/**
 * DecreasedLightingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedLightingTrigger
 */
export const DecreasedLightingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedLightingTrigger';

/**
 * DecreasedNoiseLevelTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedNoiseLevelTrigger
 */
export const DecreasedNoiseLevelTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedNoiseLevelTrigger';

/**
 * DecreasedSecurityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedSecurityTrigger
 */
export const DecreasedSecurityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedSecurityTrigger';

/**
 * DecreasedWeatherConditionsTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DecreasedWeatherConditionsTrigger
 */
export const DecreasedWeatherConditionsTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DecreasedWeatherConditionsTrigger';

/**
 * Dehumidifier
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Dehumidifier
 */
export const Dehumidifier: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Dehumidifier';

/**
 * DehumidifierService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DehumidifierService
 */
export const DehumidifierService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DehumidifierService';

/**
 * DehumidifierSystemDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DehumidifierSystemDisabledTrigger
 */
export const DehumidifierSystemDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DehumidifierSystemDisabledTrigger';

/**
 * IncreasedHumidityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedHumidityTrigger
 */
export const IncreasedHumidityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedHumidityTrigger';

/**
 * DehumidifierSystemEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DehumidifierSystemEnabledTrigger
 */
export const DehumidifierSystemEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DehumidifierSystemEnabledTrigger';

/**
 * DeleteAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteAction
 */
export const DeleteAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteAction';

/**
 * InformationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InformationAction
 */
export const InformationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InformationAction';

/**
 * DeleteAlarmAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteAlarmAction
 */
export const DeleteAlarmAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteAlarmAction';

/**
 * DeleteRemindAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteRemindAction
 */
export const DeleteRemindAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteRemindAction';

/**
 * DeleteCalendarItemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteCalendarItemAction
 */
export const DeleteCalendarItemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteCalendarItemAction';

/**
 * DeleteCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteCommand
 */
export const DeleteCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteCommand';

/**
 * DeleteContactAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteContactAction
 */
export const DeleteContactAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteContactAction';

/**
 * DeleteFromStorageAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteFromStorageAction
 */
export const DeleteFromStorageAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteFromStorageAction';

/**
 * DeleteFileAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteFileAction
 */
export const DeleteFileAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteFileAction';

/**
 * DeleteHealthInformationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteHealthInformationAction
 */
export const DeleteHealthInformationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteHealthInformationAction';

/**
 * DeleteMediaInformationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteMediaInformationAction
 */
export const DeleteMediaInformationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteMediaInformationAction';

/**
 * DeleteNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteNotification
 */
export const DeleteNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteNotification';

/**
 * DeleteReminderAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteReminderAction
 */
export const DeleteReminderAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteReminderAction';

/**
 * DeleteTimerAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteTimerAction
 */
export const DeleteTimerAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteTimerAction';

/**
 * DeleteWebBookmarkAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeleteWebBookmarkAction
 */
export const DeleteWebBookmarkAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeleteWebBookmarkAction';

/**
 * DeletedAlarmTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedAlarmTrigger
 */
export const DeletedAlarmTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedAlarmTrigger';

/**
 * DeletedRemindTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedRemindTrigger
 */
export const DeletedRemindTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedRemindTrigger';

/**
 * DeletedAppTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedAppTrigger
 */
export const DeletedAppTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedAppTrigger';

/**
 * DeletedFromStorageTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedFromStorageTrigger
 */
export const DeletedFromStorageTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedFromStorageTrigger';

/**
 * DeletedCalendarItemTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedCalendarItemTrigger
 */
export const DeletedCalendarItemTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedCalendarItemTrigger';

/**
 * DeletedContactTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedContactTrigger
 */
export const DeletedContactTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedContactTrigger';

/**
 * DeletedFileTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedFileTrigger
 */
export const DeletedFileTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedFileTrigger';

/**
 * DeletedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedTrigger
 */
export const DeletedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedTrigger';

/**
 * DeletedHealthInformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedHealthInformationTrigger
 */
export const DeletedHealthInformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedHealthInformationTrigger';

/**
 * DeletedMediaInformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedMediaInformationTrigger
 */
export const DeletedMediaInformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedMediaInformationTrigger';

/**
 * DeletedReminderTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedReminderTrigger
 */
export const DeletedReminderTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedReminderTrigger';

/**
 * DeletedTimerTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedTimerTrigger
 */
export const DeletedTimerTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedTimerTrigger';

/**
 * InformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InformationTrigger
 */
export const InformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InformationTrigger';

/**
 * DeletedWebBookmarkTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeletedWebBookmarkTrigger
 */
export const DeletedWebBookmarkTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeletedWebBookmarkTrigger';

/**
 * DeviceAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceAction
 */
export const DeviceAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceAction';

/**
 * EnhancedConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnhancedConnectivityTrigger
 */
export const EnhancedConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnhancedConnectivityTrigger';

/**
 * DeviceConnectivityDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceConnectivityDisabledTrigger
 */
export const DeviceConnectivityDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceConnectivityDisabledTrigger';

/**
 * DeviceConnectivityEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceConnectivityEnabledTrigger
 */
export const DeviceConnectivityEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceConnectivityEnabledTrigger';

/**
 * DeviceDisconnectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceDisconnectedTrigger
 */
export const DeviceDisconnectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceDisconnectedTrigger';

/**
 * DeviceFailureTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceFailureTrigger
 */
export const DeviceFailureTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceFailureTrigger';

/**
 * WorseFunctionalityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorseFunctionalityTrigger
 */
export const WorseFunctionalityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorseFunctionalityTrigger';

/**
 * DeviceLeakTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceLeakTrigger
 */
export const DeviceLeakTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceLeakTrigger';

/**
 * DevicePluggedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DevicePluggedTrigger
 */
export const DevicePluggedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DevicePluggedTrigger';

/**
 * ImprovedConsumptionConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImprovedConsumptionConditionTrigger
 */
export const ImprovedConsumptionConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImprovedConsumptionConditionTrigger';

/**
 * DeviceSavingModeDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceSavingModeDisabledTrigger
 */
export const DeviceSavingModeDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceSavingModeDisabledTrigger';

/**
 * DeviceSavingModeEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceSavingModeEnabledTrigger
 */
export const DeviceSavingModeEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceSavingModeEnabledTrigger';

/**
 * WorseConsumptionConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorseConsumptionConditionTrigger
 */
export const WorseConsumptionConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorseConsumptionConditionTrigger';

/**
 * DeviceTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceTrigger
 */
export const DeviceTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceTrigger';

/**
 * DeviceTurnedOffTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceTurnedOffTrigger
 */
export const DeviceTurnedOffTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceTurnedOffTrigger';

/**
 * UserConnectivityDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#UserConnectivityDecreasedTrigger
 */
export const UserConnectivityDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#UserConnectivityDecreasedTrigger';

/**
 * DeviceTurnedOnTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceTurnedOnTrigger
 */
export const DeviceTurnedOnTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceTurnedOnTrigger';

/**
 * UserConnectivityIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#UserConnectivityIncreasedTrigger
 */
export const UserConnectivityIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#UserConnectivityIncreasedTrigger';

/**
 * DeviceUnpluggedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceUnpluggedTrigger
 */
export const DeviceUnpluggedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceUnpluggedTrigger';

/**
 * DeviceUsageWarningTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DeviceUsageWarningTrigger
 */
export const DeviceUsageWarningTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DeviceUsageWarningTrigger';

/**
 * DisableAirPurifierSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableAirPurifierSystemAction
 */
export const DisableAirPurifierSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableAirPurifierSystemAction';

/**
 * DisableAirplaneModeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableAirplaneModeAction
 */
export const DisableAirplaneModeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableAirplaneModeAction';

/**
 * EnableDeviceConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableDeviceConnectivityAction
 */
export const EnableDeviceConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableDeviceConnectivityAction';

/**
 * DisableBluetoothConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableBluetoothConnectivityAction
 */
export const DisableBluetoothConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableBluetoothConnectivityAction';

/**
 * DisableDeviceConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableDeviceConnectivityAction
 */
export const DisableDeviceConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableDeviceConnectivityAction';

/**
 * DisableCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableCommand
 */
export const DisableCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableCommand';

/**
 * DisableCoolingSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableCoolingSystemAction
 */
export const DisableCoolingSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableCoolingSystemAction';

/**
 * DisableDehumidifierSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableDehumidifierSystemAction
 */
export const DisableDehumidifierSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableDehumidifierSystemAction';

/**
 * IncreaseHumidityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseHumidityAction
 */
export const IncreaseHumidityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseHumidityAction';

/**
 * DisableDeviceSavingModeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableDeviceSavingModeAction
 */
export const DisableDeviceSavingModeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableDeviceSavingModeAction';

/**
 * WorseConsumptionConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorseConsumptionConditionAction
 */
export const WorseConsumptionConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorseConsumptionConditionAction';

/**
 * DisableGPSAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableGPSAction
 */
export const DisableGPSAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableGPSAction';

/**
 * DisableHeatingSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableHeatingSystemAction
 */
export const DisableHeatingSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableHeatingSystemAction';

/**
 * DisableHumidifierSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableHumidifierSystemAction
 */
export const DisableHumidifierSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableHumidifierSystemAction';

/**
 * DisableInternetConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableInternetConnectivityAction
 */
export const DisableInternetConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableInternetConnectivityAction';

/**
 * DisableLightingSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableLightingSystemAction
 */
export const DisableLightingSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableLightingSystemAction';

/**
 * DisableNFCConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableNFCConnectivityAction
 */
export const DisableNFCConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableNFCConnectivityAction';

/**
 * DisableNightModeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableNightModeAction
 */
export const DisableNightModeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableNightModeAction';

/**
 * ImproveLightingConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImproveLightingConditionAction
 */
export const ImproveLightingConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImproveLightingConditionAction';

/**
 * DisableNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableNotification
 */
export const DisableNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableNotification';

/**
 * DisableNotificationsAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableNotificationsAction
 */
export const DisableNotificationsAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableNotificationsAction';

/**
 * DisableScreenRotationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableScreenRotationAction
 */
export const DisableScreenRotationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableScreenRotationAction';

/**
 * WorseUsabilityConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorseUsabilityConditionAction
 */
export const WorseUsabilityConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorseUsabilityConditionAction';

/**
 * DisableSecuritySystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableSecuritySystemAction
 */
export const DisableSecuritySystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableSecuritySystemAction';

/**
 * DisableWateringSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisableWateringSystemAction
 */
export const DisableWateringSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisableWateringSystemAction';

/**
 * DisabledAirplaneModeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisabledAirplaneModeTrigger
 */
export const DisabledAirplaneModeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisabledAirplaneModeTrigger';

/**
 * DisabledBluetoothConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisabledBluetoothConnectivityTrigger
 */
export const DisabledBluetoothConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisabledBluetoothConnectivityTrigger';

/**
 * DisabledGPSTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisabledGPSTrigger
 */
export const DisabledGPSTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisabledGPSTrigger';

/**
 * DisabledInternetConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisabledInternetConnectivityTrigger
 */
export const DisabledInternetConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisabledInternetConnectivityTrigger';

/**
 * DisabledNFCConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisabledNFCConnectivityTrigger
 */
export const DisabledNFCConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisabledNFCConnectivityTrigger';

/**
 * DisconnectCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisconnectCommand
 */
export const DisconnectCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisconnectCommand';

/**
 * DisconnectDeviceAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisconnectDeviceAction
 */
export const DisconnectDeviceAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisconnectDeviceAction';

/**
 * DisconnectFromDeviceAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisconnectFromDeviceAction
 */
export const DisconnectFromDeviceAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisconnectFromDeviceAction';

/**
 * DisconnectFromNetworkAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisconnectFromNetworkAction
 */
export const DisconnectFromNetworkAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisconnectFromNetworkAction';

/**
 * DisconnectNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisconnectNotification
 */
export const DisconnectNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisconnectNotification';

/**
 * DisconnectedFromDeviceTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisconnectedFromDeviceTrigger
 */
export const DisconnectedFromDeviceTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisconnectedFromDeviceTrigger';

/**
 * DisconnectedFromNetworkTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisconnectedFromNetworkTrigger
 */
export const DisconnectedFromNetworkTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisconnectedFromNetworkTrigger';

/**
 * Dishwasher
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Dishwasher
 */
export const Dishwasher: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Dishwasher';

/**
 * DisplayService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisplaySerivce
 */
export const DisplaySerivce: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisplaySerivce';

/**
 * DisplayService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DisplyService
 */
export const DisplyService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DisplyService';

/**
 * DiswashingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DiswashingService
 */
export const DiswashingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DiswashingService';

/**
 * Dryer
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Dryer
 */
export const Dryer: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Dryer';

/**
 * DryingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DryingService
 */
export const DryingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DryingService';

/**
 * DVDPlayer
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#DvdPlayer
 */
export const DvdPlayer: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#DvdPlayer';

/**
 * EUDPlatform
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EUDPlatform
 */
export const EUDPlatform: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EUDPlatform';

/**
 * EcommerceService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EcommerceService
 */
export const EcommerceService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EcommerceService';

/**
 * ECommerceWebsite
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EcommerceWebSite
 */
export const EcommerceWebSite: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EcommerceWebSite';

/**
 * ShoppingTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShoppingTool
 */
export const ShoppingTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShoppingTool';

/**
 * EMail
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EmailTool
 */
export const EmailTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EmailTool';

/**
 * EnableAirPurifierSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableAirPurifierSystemAction
 */
export const EnableAirPurifierSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableAirPurifierSystemAction';

/**
 * IncreaseAirQualityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseAirQualityAction
 */
export const IncreaseAirQualityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseAirQualityAction';

/**
 * EnableAirplaneModeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableAirplaneModeAction
 */
export const EnableAirplaneModeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableAirplaneModeAction';

/**
 * EnableBluetoothConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableBluetoothConnectivityAction
 */
export const EnableBluetoothConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableBluetoothConnectivityAction';

/**
 * EnableCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableCommand
 */
export const EnableCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableCommand';

/**
 * EnableCoolingSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableCoolingSystemAction
 */
export const EnableCoolingSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableCoolingSystemAction';

/**
 * EnableDehumidifierSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableDehumidifierSystemAction
 */
export const EnableDehumidifierSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableDehumidifierSystemAction';

/**
 * EnableDeviceSavingModeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableDeviceSavingModeAction
 */
export const EnableDeviceSavingModeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableDeviceSavingModeAction';

/**
 * ImproveConsumptionConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImproveConsumptionConditionAction
 */
export const ImproveConsumptionConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImproveConsumptionConditionAction';

/**
 * EnableGPSAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableGPSAction
 */
export const EnableGPSAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableGPSAction';

/**
 * EnableHeatingSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableHeatingSystemAction
 */
export const EnableHeatingSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableHeatingSystemAction';

/**
 * EnableHumidifierSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableHumidifierSystemAction
 */
export const EnableHumidifierSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableHumidifierSystemAction';

/**
 * EnableInternetConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableInternetConnectivityAction
 */
export const EnableInternetConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableInternetConnectivityAction';

/**
 * EnableLightingSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableLightingSystemAction
 */
export const EnableLightingSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableLightingSystemAction';

/**
 * IncreaseLightingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseLightingAction
 */
export const IncreaseLightingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseLightingAction';

/**
 * EnableNGFCConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableNFCConnctivityAction
 */
export const EnableNFCConnctivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableNFCConnctivityAction';

/**
 * EnableNightModeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableNightModeAction
 */
export const EnableNightModeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableNightModeAction';

/**
 * EnableNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableNotification
 */
export const EnableNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableNotification';

/**
 * EnableNotificationsAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableNotificationsAction
 */
export const EnableNotificationsAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableNotificationsAction';

/**
 * IncreaseUserConnectivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseUserConnectivityAction
 */
export const IncreaseUserConnectivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseUserConnectivityAction';

/**
 * EnableScreenRotationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableScreenRotationAction
 */
export const EnableScreenRotationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableScreenRotationAction';

/**
 * ImproveUsabilityConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImproveUsabilityConditionAction
 */
export const ImproveUsabilityConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImproveUsabilityConditionAction';

/**
 * EnableSecuritySystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableSecuritySystemAction
 */
export const EnableSecuritySystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableSecuritySystemAction';

/**
 * EnableSpeakerphoneAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableSpeakerphoneAction
 */
export const EnableSpeakerphoneAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableSpeakerphoneAction';

/**
 * EnableWateringSystemAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnableWateringSystemAction
 */
export const EnableWateringSystemAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnableWateringSystemAction';

/**
 * EnabledAirplaneModeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnabledAirplaneModeTrigger
 */
export const EnabledAirplaneModeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnabledAirplaneModeTrigger';

/**
 * EnabledBluetoothConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnabledBluetoothConnectivityTrigger
 */
export const EnabledBluetoothConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnabledBluetoothConnectivityTrigger';

/**
 * EnabledGPSTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnabledGPSTrigger
 */
export const EnabledGPSTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnabledGPSTrigger';

/**
 * EnabledInternetConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnabledInternetConnectivityTrigger
 */
export const EnabledInternetConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnabledInternetConnectivityTrigger';

/**
 * EnabledNFCConnectivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnabledNFCConnectivityTrigger
 */
export const EnabledNFCConnectivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnabledNFCConnectivityTrigger';

/**
 * EndCallAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EndCallAction
 */
export const EndCallAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EndCallAction';

/**
 * EnterNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnterNotification
 */
export const EnterNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnterNotification';

/**
 * MovingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MovingTrigger
 */
export const MovingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MovingTrigger';

/**
 * EnvironmentTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnvironmentTrigger
 */
export const EnvironmentTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnvironmentTrigger';

/**
 * EnvironmentConditionIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EnvironmentConditionIncreasedTrigger
 */
export const EnvironmentConditionIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EnvironmentConditionIncreasedTrigger';

/**
 * EveryDayTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EveryDayTrigger
 */
export const EveryDayTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EveryDayTrigger';

/**
 * EveryTimeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EveryTimeTrigger
 */
export const EveryTimeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EveryTimeTrigger';

/**
 * EveryHourTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EveryHourTrigger
 */
export const EveryHourTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EveryHourTrigger';

/**
 * EveryMonthTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EveryMonthTrigger
 */
export const EveryMonthTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EveryMonthTrigger';

/**
 * TimeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TimeTrigger
 */
export const TimeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TimeTrigger';

/**
 * EveryWeekTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EveryWeekTrigger
 */
export const EveryWeekTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EveryWeekTrigger';

/**
 * EveryYearTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#EveryYearTrigger
 */
export const EveryYearTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#EveryYearTrigger';

/**
 * ExitNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ExitNotification
 */
export const ExitNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ExitNotification';

/**
 * ExitTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ExitTrigger
 */
export const ExitTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ExitTrigger';

/**
 * FailureDetectionService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#FailureDetectionService
 */
export const FailureDetectionService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#FailureDetectionService';

/**
 * Family
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Family
 */
export const Family: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Family';

/**
 * Fax
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Fax
 */
export const Fax: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Fax';

/**
 * FileService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#FileService
 */
export const FileService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#FileService';

/**
 * FocusTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#FocusTrackingService
 */
export const FocusTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#FocusTrackingService';

/**
 * FrameService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#FrameService
 */
export const FrameService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#FrameService';

/**
 * Fridge
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Fridge
 */
export const Fridge: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Fridge';

/**
 * Friend
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Friend
 */
export const Friend: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Friend';

/**
 * GPSEnterAreaTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#GPSEnterAreaTrigger
 */
export const GPSEnterAreaTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#GPSEnterAreaTrigger';

/**
 * GPSExitAreaTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#GPSExitAreaTrigger
 */
export const GPSExitAreaTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#GPSExitAreaTrigger';

/**
 * GPSService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#GPSService
 */
export const GPSService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#GPSService';

/**
 * PositioningService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PostioningService
 */
export const PostioningService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PostioningService';

/**
 * GameService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#GameService
 */
export const GameService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#GameService';

/**
 * MediaService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MediaService
 */
export const MediaService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MediaService';

/**
 * GeographicalArea
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#GeographicalArea
 */
export const GeographicalArea: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#GeographicalArea';

/**
 * GroceryShoppingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#GroceryShoppingService
 */
export const GroceryShoppingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#GroceryShoppingService';

/**
 * HealthInformationService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HealthInformationService
 */
export const HealthInformationService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HealthInformationService';

/**
 * HealthyActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HealthyActivityTrigger
 */
export const HealthyActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HealthyActivityTrigger';

/**
 * IncreasedHealthConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedHealthConditionTrigger
 */
export const IncreasedHealthConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedHealthConditionTrigger';

/**
 * HealthyGoalNotReachedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HealthyGoalNotReachedTrigger
 */
export const HealthyGoalNotReachedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HealthyGoalNotReachedTrigger';

/**
 * HealthyGoalReachedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HealthyGoalReachedTrigger
 */
export const HealthyGoalReachedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HealthyGoalReachedTrigger';

/**
 * Heater
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Heater
 */
export const Heater: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Heater';

/**
 * HeatingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HeatingService
 */
export const HeatingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HeatingService';

/**
 * HeatingSystemDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HeatingSystemDisabledTrigger
 */
export const HeatingSystemDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HeatingSystemDisabledTrigger';

/**
 * HeatingSystemEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HeatingSystemEnabledTrigger
 */
export const HeatingSystemEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HeatingSystemEnabledTrigger';

/**
 * HiFi
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HiFi
 */
export const HiFi: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HiFi';

/**
 * HighSensedDeviceConsumptionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HighSensedDeviceConsumptionTrigger
 */
export const HighSensedDeviceConsumptionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HighSensedDeviceConsumptionTrigger';

/**
 * Hub
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Hub
 */
export const Hub: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Hub';

/**
 * Humidifier
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Humidifier
 */
export const Humidifier: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Humidifier';

/**
 * HumidifierService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HumidifierService
 */
export const HumidifierService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HumidifierService';

/**
 * HumiditySetToTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#HumiditySetToTrigger
 */
export const HumiditySetToTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#HumiditySetToTrigger';

/**
 * ImproveDeviceConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImproveDeviceConditionAction
 */
export const ImproveDeviceConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImproveDeviceConditionAction';

/**
 * ImprovedDeviceConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImprovedDeviceConditionTrigger
 */
export const ImprovedDeviceConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImprovedDeviceConditionTrigger';

/**
 * ImprovedHealthyParameterTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImprovedHealthyParameterTrigger
 */
export const ImprovedHealthyParameterTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImprovedHealthyParameterTrigger';

/**
 * ImprovedUsabilityConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ImprovedUsabilityConditionTrigger
 */
export const ImprovedUsabilityConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ImprovedUsabilityConditionTrigger';

/**
 * IncreaseEnvironmentConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseEnvironmentConditionAction
 */
export const IncreaseEnvironmentConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseEnvironmentConditionAction';

/**
 * IncreaseVolumeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreaseVolumeAction
 */
export const IncreaseVolumeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreaseVolumeAction';

/**
 * IncreasedAirPressureTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedAirPressureTrigger
 */
export const IncreasedAirPressureTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedAirPressureTrigger';

/**
 * IncreasedLightingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedLightingTrigger
 */
export const IncreasedLightingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedLightingTrigger';

/**
 * IncreasedNoiseLevelTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedNoiseLevelTrigger
 */
export const IncreasedNoiseLevelTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedNoiseLevelTrigger';

/**
 * IncreasedSecurityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedSecurityTrigger
 */
export const IncreasedSecurityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedSecurityTrigger';

/**
 * IncreasedWeatherConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#IncreasedWeatherConditionTrigger
 */
export const IncreasedWeatherConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#IncreasedWeatherConditionTrigger';

/**
 * InformationWebsite
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InformationWebSite
 */
export const InformationWebSite: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InformationWebSite';

/**
 * InteractionService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#InteractionService
 */
export const InteractionService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#InteractionService';

/**
 * Lamp
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Lamp
 */
export const Lamp: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Lamp';

/**
 * Laptop
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Laptop
 */
export const Laptop: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Laptop';

/**
 * UserDevice
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#UserDevice
 */
export const UserDevice: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#UserDevice';

/**
 * LeakDetectionService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#LeakDetectionService
 */
export const LeakDetectionService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#LeakDetectionService';

/**
 * LightingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#LightingService
 */
export const LightingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#LightingService';

/**
 * LightingSystemDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#LightingSystemDisabledTrigger
 */
export const LightingSystemDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#LightingSystemDisabledTrigger';

/**
 * LightingSystemEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#LightingSystemEnabledTrigger
 */
export const LightingSystemEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#LightingSystemEnabledTrigger';

/**
 * LikeService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#LikeService
 */
export const LikeService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#LikeService';

/**
 * LowPowerTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#LowPowerTrigger
 */
export const LowPowerTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#LowPowerTrigger';

/**
 * MeasureAboveThresholdNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MeasureAboveThresholdNotification
 */
export const MeasureAboveThresholdNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MeasureAboveThresholdNotification';

/**
 * MeasureAvailableNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MeasureAvailableNotification
 */
export const MeasureAvailableNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MeasureAvailableNotification';

/**
 * MeasureBelowThresholdNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MeasureBelowThresholdNotification
 */
export const MeasureBelowThresholdNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MeasureBelowThresholdNotification';

/**
 * MediaInformationService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MediaInformationService
 */
export const MediaInformationService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MediaInformationService';

/**
 * MediaTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MediaTool
 */
export const MediaTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MediaTool';

/**
 * MessageService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MessageService
 */
export const MessageService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MessageService';

/**
 * MobileDevice
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MobileDevice
 */
export const MobileDevice: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MobileDevice';

/**
 * MoveAppAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MoveAppAction
 */
export const MoveAppAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MoveAppAction';

/**
 * StoreAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoreAction
 */
export const StoreAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoreAction';

/**
 * MoveOnVehicleTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MoveOnVehicleTrigger
 */
export const MoveOnVehicleTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MoveOnVehicleTrigger';

/**
 * PlacesTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PlacesTrigger
 */
export const PlacesTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PlacesTrigger';

/**
 * MusicPlatform
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MusicPlatform
 */
export const MusicPlatform: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MusicPlatform';

/**
 * MusicService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MusicService
 */
export const MusicService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MusicService';

/**
 * MuteCallAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#MuteCallAction
 */
export const MuteCallAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#MuteCallAction';

/**
 * NFCService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NFCService
 */
export const NFCService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NFCService';

/**
 * NewCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NewCommand
 */
export const NewCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NewCommand';

/**
 * NewNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NewNotification
 */
export const NewNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NewNotification';

/**
 * NewsService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NewsService
 */
export const NewsService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NewsService';

/**
 * NewsWebsite
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NewsWebSite
 */
export const NewsWebSite: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NewsWebSite';

/**
 * NightModeDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NightModeDisabledTrigger
 */
export const NightModeDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NightModeDisabledTrigger';

/**
 * NightModeEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NightModeEnabledTrigger
 */
export const NightModeEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NightModeEnabledTrigger';

/**
 * NoiseService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NoiseService
 */
export const NoiseService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NoiseService';

/**
 * Notes
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NoteTool
 */
export const NoteTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NoteTool';

/**
 * NotificationProfileSetToTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NotificationProfileSetToTrigger
 */
export const NotificationProfileSetToTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NotificationProfileSetToTrigger';

/**
 * NotificationService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NotificationService
 */
export const NotificationService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NotificationService';

/**
 * Notification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NotificationTool
 */
export const NotificationTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NotificationTool';

/**
 * NotificationsDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NotificationsDisabledTrigger
 */
export const NotificationsDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NotificationsDisabledTrigger';

/**
 * NotificationsEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#NotificationsEnabledTrigger
 */
export const NotificationsEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#NotificationsEnabledTrigger';

/**
 * OpenCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#OpenCommand
 */
export const OpenCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#OpenCommand';

/**
 * OpenNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#OpenNotification
 */
export const OpenNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#OpenNotification';

/**
 * OpenWindowFrameAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#OpenWindowFrameAction
 */
export const OpenWindowFrameAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#OpenWindowFrameAction';

/**
 * Oven
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Oven
 */
export const Oven: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Oven';

/**
 * OvenService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#OvenService
 */
export const OvenService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#OvenService';

/**
 * PC
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PC
 */
export const PC: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PC';

/**
 * Phone
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Phone
 */
export const Phone: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Phone';

/**
 * PhoneCallMutedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PhoneCallMutedTrigger
 */
export const PhoneCallMutedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PhoneCallMutedTrigger';

/**
 * PhoneCallRejectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PhoneCallRejectedTrigger
 */
export const PhoneCallRejectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PhoneCallRejectedTrigger';

/**
 * PhotoPlatform
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PhotoPlatform
 */
export const PhotoPlatform: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PhotoPlatform';

/**
 * PhotoRecordingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PhotoRecordingService
 */
export const PhotoRecordingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PhotoRecordingService';

/**
 * PositionRegistrationService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PositionRegistrationService
 */
export const PositionRegistrationService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PositionRegistrationService';

/**
 * PositionRegistrationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PositionRegistrationTrigger
 */
export const PositionRegistrationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PositionRegistrationTrigger';

/**
 * PostService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PostService
 */
export const PostService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PostService';

/**
 * PowerService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PowerService
 */
export const PowerService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PowerService';

/**
 * PresenceDetectedNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PresenceDetectedNotification
 */
export const PresenceDetectedNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PresenceDetectedNotification';

/**
 * PresenceNoLongerDetectedNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PresenceNoLongerDetectedNotification
 */
export const PresenceNoLongerDetectedNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PresenceNoLongerDetectedNotification';

/**
 * PrintService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#PrintService
 */
export const PrintService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#PrintService';

/**
 * Printer
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Printer
 */
export const Printer: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Printer';

/**
 * ProfileUpdateService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ProfileUpdateService
 */
export const ProfileUpdateService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ProfileUpdateService';

/**
 * QuestionService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#QuestionService
 */
export const QuestionService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#QuestionService';

/**
 * Radio
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Radio
 */
export const Radio: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Radio';

/**
 * RainfallMeasurementAvailableTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RainfallMeasurementAvailableTrigger
 */
export const RainfallMeasurementAvailableTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RainfallMeasurementAvailableTrigger';

/**
 * ReceiveNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceiveNotification
 */
export const ReceiveNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceiveNotification';

/**
 * ReceivedAnswerTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedAnswerTrigger
 */
export const ReceivedAnswerTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedAnswerTrigger';

/**
 * ReceivedPrivateInformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedPrivateInformationTrigger
 */
export const ReceivedPrivateInformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedPrivateInformationTrigger';

/**
 * ReceivedAppNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedAppNotificationTrigger
 */
export const ReceivedAppNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedAppNotificationTrigger';

/**
 * ReceivedNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedNotificationTrigger
 */
export const ReceivedNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedNotificationTrigger';

/**
 * ReceivedAttachmentTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedAttachmentTrigger
 */
export const ReceivedAttachmentTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedAttachmentTrigger';

/**
 * ReceivedBreakingNewsTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedBreakingNewsTrigger
 */
export const ReceivedBreakingNewsTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedBreakingNewsTrigger';

/**
 * ReceivedNewsTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedNewsTrigger
 */
export const ReceivedNewsTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedNewsTrigger';

/**
 * ReceivedCommentTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedCommentTrigger
 */
export const ReceivedCommentTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedCommentTrigger';

/**
 * ReceivedContactNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedContactNotificationTrigger
 */
export const ReceivedContactNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedContactNotificationTrigger';

/**
 * ReceivedDocumentInfoNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedDocumentInfoNotificationTrigger
 */
export const ReceivedDocumentInfoNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedDocumentInfoNotificationTrigger';

/**
 * ReceivedFromDeviceTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedFromDeviceTrigger
 */
export const ReceivedFromDeviceTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedFromDeviceTrigger';

/**
 * ReceivedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedTrigger
 */
export const ReceivedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedTrigger';

/**
 * ReceivedFromDiyTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedFromDiyTrigger
 */
export const ReceivedFromDiyTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedFromDiyTrigger';

/**
 * ReceivedIncomingCallTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedIncomingCallTrigger
 */
export const ReceivedIncomingCallTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedIncomingCallTrigger';

/**
 * ReceivedLikeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedLikeTrigger
 */
export const ReceivedLikeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedLikeTrigger';

/**
 * ReceivedMessageTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedMessageTrigger
 */
export const ReceivedMessageTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedMessageTrigger';

/**
 * ReceivedMissedCallNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedMissedCallNotificationTrigger
 */
export const ReceivedMissedCallNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedMissedCallNotificationTrigger';

/**
 * ReceivedPaymentNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedPaymentNotificationTrigger
 */
export const ReceivedPaymentNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedPaymentNotificationTrigger';

/**
 * ReceivedPostTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedPostTrigger
 */
export const ReceivedPostTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedPostTrigger';

/**
 * ReceivedRecommendationNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedRecommendationNotificationTrigger
 */
export const ReceivedRecommendationNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedRecommendationNotificationTrigger';

/**
 * ReceivedRemindNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedRemindNotificationTrigger
 */
export const ReceivedRemindNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedRemindNotificationTrigger';

/**
 * ReceivedShippingNotificationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedShippingNotificationTrigger
 */
export const ReceivedShippingNotificationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedShippingNotificationTrigger';

/**
 * ReceivedTagTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedTagTrigger
 */
export const ReceivedTagTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedTagTrigger';

/**
 * ReceivedUnlikeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReceivedUnlikeTrigger
 */
export const ReceivedUnlikeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReceivedUnlikeTrigger';

/**
 * RecordCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RecordCommand
 */
export const RecordCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RecordCommand';

/**
 * RecordNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RecordNotification
 */
export const RecordNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RecordNotification';

/**
 * RejectCallAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RejectCallAction
 */
export const RejectCallAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RejectCallAction';

/**
 * ReminderService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ReminderService
 */
export const ReminderService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ReminderService';

/**
 * Room
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Room
 */
export const Room: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Room';

/**
 * RuleAxiom
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RuleAxiom
 */
export const RuleAxiom: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RuleAxiom';

/**
 * RunTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#RunTrackingService
 */
export const RunTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#RunTrackingService';

/**
 * SMS
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SMSTool
 */
export const SMSTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SMSTool';

/**
 * SaveCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveCommand
 */
export const SaveCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveCommand';

/**
 * SaveContactAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveContactAction
 */
export const SaveContactAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveContactAction';

/**
 * SaveFileAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveFileAction
 */
export const SaveFileAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveFileAction';

/**
 * SaveHealthInformationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveHealthInformationAction
 */
export const SaveHealthInformationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveHealthInformationAction';

/**
 * SaveMediaInformationAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveMediaInformationAction
 */
export const SaveMediaInformationAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveMediaInformationAction';

/**
 * SaveNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveNotification
 */
export const SaveNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveNotification';

/**
 * SaveWebBookmarkAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SaveWebBookmarkAction
 */
export const SaveWebBookmarkAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SaveWebBookmarkAction';

/**
 * ScanBluetoothTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ScanBluetoothTrigger
 */
export const ScanBluetoothTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ScanBluetoothTrigger';

/**
 * ScanWifiTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ScanWifiTrigger
 */
export const ScanWifiTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ScanWifiTrigger';

/**
 * ScreenRotationDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ScreenRotationDisabledTrigger
 */
export const ScreenRotationDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ScreenRotationDisabledTrigger';

/**
 * WorseUsabilityConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorseUsabilityConditionTrigger
 */
export const WorseUsabilityConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorseUsabilityConditionTrigger';

/**
 * ScreenRotationEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ScreenRotationEnabledTrigger
 */
export const ScreenRotationEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ScreenRotationEnabledTrigger';

/**
 * SecurityService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SecurityService
 */
export const SecurityService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SecurityService';

/**
 * SecurityShutdownAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SecurityShutdownAction
 */
export const SecurityShutdownAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SecurityShutdownAction';

/**
 * SecuritySystemDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SecuritySystemDisabledTrigger
 */
export const SecuritySystemDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SecuritySystemDisabledTrigger';

/**
 * StartedListeningMusicTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SecuritySystemEnabledTrigger
 */
export const SecuritySystemEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SecuritySystemEnabledTrigger';

/**
 * SendAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendAction
 */
export const SendAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendAction';

/**
 * SendAttachmentAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendAttachmentAction
 */
export const SendAttachmentAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendAttachmentAction';

/**
 * SendToPersonAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendToPersonAction
 */
export const SendToPersonAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendToPersonAction';

/**
 * SendCallAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendCallAction
 */
export const SendCallAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendCallAction';

/**
 * SendCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendCommand
 */
export const SendCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendCommand';

/**
 * SendMessageAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendMessageAction
 */
export const SendMessageAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendMessageAction';

/**
 * SendNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendNotification
 */
export const SendNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendNotification';

/**
 * SendQuestionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendQuestionAction
 */
export const SendQuestionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendQuestionAction';

/**
 * SendRequestAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendRequestAction
 */
export const SendRequestAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendRequestAction';

/**
 * SendToDeviceAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendToDeviceAction
 */
export const SendToDeviceAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendToDeviceAction';

/**
 * SendToDisplayAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendToDisplayAction
 */
export const SendToDisplayAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendToDisplayAction';

/**
 * SendToDiyAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendToDiyAction
 */
export const SendToDiyAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendToDiyAction';

/**
 * SendToPrintAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendToPrintAction
 */
export const SendToPrintAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendToPrintAction';

/**
 * SendToSpeakerAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendToSpeakerAction
 */
export const SendToSpeakerAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendToSpeakerAction';

/**
 * SendWebRequestAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SendWebRequestAction
 */
export const SendWebRequestAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SendWebRequestAction';

/**
 * SensedAirPressureDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedAirPressureDecreasedTrigger
 */
export const SensedAirPressureDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedAirPressureDecreasedTrigger';

/**
 * SensedAirPressureIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedAirPressureIncreasedTrigger
 */
export const SensedAirPressureIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedAirPressureIncreasedTrigger';

/**
 * SensedAirQualityDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedAirQualityDecreasedTrigger
 */
export const SensedAirQualityDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedAirQualityDecreasedTrigger';

/**
 * SensedAirQualityIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedAirQualityIncreasedTrigger
 */
export const SensedAirQualityIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedAirQualityIncreasedTrigger';

/**
 * SensedHealthyParameterTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedHealthyParameterTrigger
 */
export const SensedHealthyParameterTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedHealthyParameterTrigger';

/**
 * WorsenedHealthyParameterTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorsenedHealthyParameterTrigger
 */
export const WorsenedHealthyParameterTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorsenedHealthyParameterTrigger';

/**
 * SensedHumididtyDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedHumididtyDecreasedTrigger
 */
export const SensedHumididtyDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedHumididtyDecreasedTrigger';

/**
 * SensedHumidityIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedHumidityIncreasedTrigger
 */
export const SensedHumidityIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedHumidityIncreasedTrigger';

/**
 * SensedLightingDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedLightingDecreasedTrigger
 */
export const SensedLightingDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedLightingDecreasedTrigger';

/**
 * SensedLightingIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedLightingIncreasedTrigger
 */
export const SensedLightingIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedLightingIncreasedTrigger';

/**
 * SensedNoiseLevelDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedNoiseLevelDecreasedTrigger
 */
export const SensedNoiseLevelDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedNoiseLevelDecreasedTrigger';

/**
 * SensedNoiseLevelIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedNoiseLevelIncreasedTrigger
 */
export const SensedNoiseLevelIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedNoiseLevelIncreasedTrigger';

/**
 * SensedRainDetectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedRainDetectedTrigger
 */
export const SensedRainDetectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedRainDetectedTrigger';

/**
 * SensedRainNoLongerDetectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedRainNoLongerDetectedTrigger
 */
export const SensedRainNoLongerDetectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedRainNoLongerDetectedTrigger';

/**
 * SensedTemperatureDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedTemperatureDecreasedTrigger
 */
export const SensedTemperatureDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedTemperatureDecreasedTrigger';

/**
 * SensedTemperatureIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedTemperatureIncreasedTrigger
 */
export const SensedTemperatureIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedTemperatureIncreasedTrigger';

/**
 * SensedWindDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedWindDecreasedTrigger
 */
export const SensedWindDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedWindDecreasedTrigger';

/**
 * SensedWindIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensedWindIncreasedTrigger
 */
export const SensedWindIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensedWindIncreasedTrigger';

/**
 * SensorPresenceDetectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensorPresenceDetectedTrigger
 */
export const SensorPresenceDetectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensorPresenceDetectedTrigger';

/**
 * SensorPresenceNoLongerDetectedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SensorPresenceNoLongerDetectedTrigger
 */
export const SensorPresenceNoLongerDetectedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SensorPresenceNoLongerDetectedTrigger';

/**
 * SentMessageTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentMessageTrigger
 */
export const SentMessageTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentMessageTrigger';

/**
 * SentPrivateInformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentPrivateInformationTrigger
 */
export const SentPrivateInformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentPrivateInformationTrigger';

/**
 * SentOutcomingCallTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentOutcomingCallTrigger
 */
export const SentOutcomingCallTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentOutcomingCallTrigger';

/**
 * SentTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentTrigger
 */
export const SentTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentTrigger';

/**
 * SentPullTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentPullTrigger
 */
export const SentPullTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentPullTrigger';

/**
 * SentRequestTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentRequestTrigger
 */
export const SentRequestTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentRequestTrigger';

/**
 * SentQuestionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentQuestionTrigger
 */
export const SentQuestionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentQuestionTrigger';

/**
 * SentSharedInformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentSharedInformationTrigger
 */
export const SentSharedInformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentSharedInformationTrigger';

/**
 * SentSubscriptionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SentSubscriptionTrigger
 */
export const SentSubscriptionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SentSubscriptionTrigger';

/**
 * SetBrightnessAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SetBrightnessAction
 */
export const SetBrightnessAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SetBrightnessAction';

/**
 * SetHumidityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SetHumidityAction
 */
export const SetHumidityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SetHumidityAction';

/**
 * SetLightingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SetLightingAction
 */
export const SetLightingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SetLightingAction';

/**
 * SetTemperatureAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SetTemperatureAction
 */
export const SetTemperatureAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SetTemperatureAction';

/**
 * SetToCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SetToCommand
 */
export const SetToCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SetToCommand';

/**
 * SetToNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SetToNotification
 */
export const SetToNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SetToNotification';

/**
 * ShareAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareAction
 */
export const ShareAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareAction';

/**
 * ShareCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareCommand
 */
export const ShareCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareCommand';

/**
 * ShareCommentAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareCommentAction
 */
export const ShareCommentAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareCommentAction';

/**
 * ShareFileAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareFileAction
 */
export const ShareFileAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareFileAction';

/**
 * ShareLikeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareLikeAction
 */
export const ShareLikeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareLikeAction';

/**
 * ShareNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareNotification
 */
export const ShareNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareNotification';

/**
 * SharePostAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SharePostAction
 */
export const SharePostAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SharePostAction';

/**
 * ShareProfileUpdateAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareProfileUpdateAction
 */
export const ShareProfileUpdateAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareProfileUpdateAction';

/**
 * ShareTagAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareTagAction
 */
export const ShareTagAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareTagAction';

/**
 * ShareUnlikeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShareUnlikeAction
 */
export const ShareUnlikeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShareUnlikeAction';

/**
 * SharedCommentTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SharedCommentTrigger
 */
export const SharedCommentTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SharedCommentTrigger';

/**
 * SharedLikeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SharedLikeTrigger
 */
export const SharedLikeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SharedLikeTrigger';

/**
 * SharedPostTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SharedPostTrigger
 */
export const SharedPostTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SharedPostTrigger';

/**
 * SharedProfileUpdateTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SharedProfileUpdateTrigger
 */
export const SharedProfileUpdateTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SharedProfileUpdateTrigger';

/**
 * SharedTagTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SharedTagTrigger
 */
export const SharedTagTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SharedTagTrigger';

/**
 * SharedUnlikeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SharedUnlikeTrigger
 */
export const SharedUnlikeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SharedUnlikeTrigger';

/**
 * ShipmentTrackingTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ShipmentTrackingTool
 */
export const ShipmentTrackingTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ShipmentTrackingTool';

/**
 * SleepTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SleepTrackingService
 */
export const SleepTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SleepTrackingService';

/**
 * Blind
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartBlind
 */
export const SmartBlind: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartBlind';

/**
 * SmartBracelet
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartBracelet
 */
export const SmartBracelet: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartBracelet';

/**
 * Door
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartDoor
 */
export const SmartDoor: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartDoor';

/**
 * SmartWatch
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartWatch
 */
export const SmartWatch: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartWatch';

/**
 * Window
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SmartWindow
 */
export const SmartWindow: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SmartWindow';

/**
 * Smartphone
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Smartphone
 */
export const Smartphone: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Smartphone';

/**
 * SocialNetwork
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SocialNetwork
 */
export const SocialNetwork: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SocialNetwork';

/**
 * SpeakerPhoneActivatedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#SpeakerPhoneActivatedTrigger
 */
export const SpeakerPhoneActivatedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#SpeakerPhoneActivatedTrigger';

/**
 * Sprinkler
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Sprinkler
 */
export const Sprinkler: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Sprinkler';

/**
 * StartActivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartActivityAction
 */
export const StartActivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartActivityAction';

/**
 * StartAppAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartAppAction
 */
export const StartAppAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartAppAction';

/**
 * StartEntertainmentAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartEntertainementAction
 */
export const StartEntertainementAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartEntertainementAction';

/**
 * StartBrewingCoffeeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartBrewingCoffeeAction
 */
export const StartBrewingCoffeeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartBrewingCoffeeAction';

/**
 * StartCookingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartCookingAction
 */
export const StartCookingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartCookingAction';

/**
 * StartBuyingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartBuyingAction
 */
export const StartBuyingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartBuyingAction';

/**
 * StartCleaningAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartCleaningAction
 */
export const StartCleaningAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartCleaningAction';

/**
 * StartCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartCommand
 */
export const StartCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartCommand';

/**
 * StartDishwashingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartDiswashingAction
 */
export const StartDiswashingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartDiswashingAction';

/**
 * StartWashingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartWashingAction
 */
export const StartWashingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartWashingAction';

/**
 * StartDryingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartDryingAction
 */
export const StartDryingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartDryingAction';

/**
 * StartFocusingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartFocusingAction
 */
export const StartFocusingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartFocusingAction';

/**
 * StartFocusingSessionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartFocusingSessionAction
 */
export const StartFocusingSessionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartFocusingSessionAction';

/**
 * StartListeningMusicAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartListeningMusicAction
 */
export const StartListeningMusicAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartListeningMusicAction';

/**
 * StartNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartNotification
 */
export const StartNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartNotification';

/**
 * StartOvenCookingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartOvenCookingAction
 */
export const StartOvenCookingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartOvenCookingAction';

/**
 * StartPlayingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartPlayingAction
 */
export const StartPlayingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartPlayingAction';

/**
 * StartStudyingSessionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartStudyingSessionAction
 */
export const StartStudyingSessionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartStudyingSessionAction';

/**
 * StartSuperMarketBuyingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartSuperMarketBuyingAction
 */
export const StartSuperMarketBuyingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartSuperMarketBuyingAction';

/**
 * StartUsingSmartphoneAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartUsingSmartphoneAction
 */
export const StartUsingSmartphoneAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartUsingSmartphoneAction';

/**
 * StartVacuumAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartVacuumAction
 */
export const StartVacuumAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartVacuumAction';

/**
 * StartWashingClothesAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartWashingClothesAction
 */
export const StartWashingClothesAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartWashingClothesAction';

/**
 * StartWatchingTvAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartWatchingTvAction
 */
export const StartWatchingTvAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartWatchingTvAction';

/**
 * StartedActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedActivityTrigger
 */
export const StartedActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedActivityTrigger';

/**
 * StartedAppTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedAppTrigger
 */
export const StartedAppTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedAppTrigger';

/**
 * StartedEntertainementTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedEntertainementTrigger
 */
export const StartedEntertainementTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedEntertainementTrigger';

/**
 * StartedBikeSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedBikeSessionTrigger
 */
export const StartedBikeSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedBikeSessionTrigger';

/**
 * StartedPhysicalActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedPhysicalActivityTrigger
 */
export const StartedPhysicalActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedPhysicalActivityTrigger';

/**
 * StartedBrewingCoffeeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedBrewingCoffeeTrigger
 */
export const StartedBrewingCoffeeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedBrewingCoffeeTrigger';

/**
 * StartedCookingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedCookingTrigger
 */
export const StartedCookingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedCookingTrigger';

/**
 * StartedCleaningTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedCleaningTrigger
 */
export const StartedCleaningTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedCleaningTrigger';

/**
 * StartedDiswashingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedDiswashingTrigger
 */
export const StartedDiswashingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedDiswashingTrigger';

/**
 * StartedWashingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedWashingTrigger
 */
export const StartedWashingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedWashingTrigger';

/**
 * StartedDryingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedDryingTrigger
 */
export const StartedDryingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedDryingTrigger';

/**
 * StartedFocusingSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedFocusingSessionTrigger
 */
export const StartedFocusingSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedFocusingSessionTrigger';

/**
 * StartedFocusingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedFocusingTrigger
 */
export const StartedFocusingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedFocusingTrigger';

/**
 * StartedInteractionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedInteractionTrigger
 */
export const StartedInteractionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedInteractionTrigger';

/**
 * StartedListeningMusicTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedListeningMusicTrigger
 */
export const StartedListeningMusicTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedListeningMusicTrigger';

/**
 * StartedOvenCookingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedOvenCookingTrigger
 */
export const StartedOvenCookingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedOvenCookingTrigger';

/**
 * StartedPlayingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedPlayingTrigger
 */
export const StartedPlayingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedPlayingTrigger';

/**
 * StartedRelaxingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedRelaxingTrigger
 */
export const StartedRelaxingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedRelaxingTrigger';

/**
 * StartedRunSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedRunSessionTrigger
 */
export const StartedRunSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedRunSessionTrigger';

/**
 * StartedSleepingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedSleepingTrigger
 */
export const StartedSleepingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedSleepingTrigger';

/**
 * StartedStudyingSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedStudyingSessionTrigger
 */
export const StartedStudyingSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedStudyingSessionTrigger';

/**
 * StartedUsingSmartphoneTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedUsingSmartphoneTrigger
 */
export const StartedUsingSmartphoneTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedUsingSmartphoneTrigger';

/**
 * StartedVacuumTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedVacuumTrigger
 */
export const StartedVacuumTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedVacuumTrigger';

/**
 * StartedWalkingSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedWalkingSessionTrigger
 */
export const StartedWalkingSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedWalkingSessionTrigger';

/**
 * StartedWatchingTvTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartedWatchingTvTrigger
 */
export const StartedWatchingTvTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartedWatchingTvTrigger';

/**
 * StartingWashingClothesTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StartingWashingClothesTrigger
 */
export const StartingWashingClothesTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StartingWashingClothesTrigger';

/**
 * StopActivityAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopActivityAction
 */
export const StopActivityAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopActivityAction';

/**
 * StopAppAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopAppAction
 */
export const StopAppAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopAppAction';

/**
 * StopEntertainmentAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopEntertainementAction
 */
export const StopEntertainementAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopEntertainementAction';

/**
 * StopBrewingCoffeeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopBrewingCoffeeAction
 */
export const StopBrewingCoffeeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopBrewingCoffeeAction';

/**
 * StopCookingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopCookingAction
 */
export const StopCookingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopCookingAction';

/**
 * StopCleaningAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopCleaningAction
 */
export const StopCleaningAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopCleaningAction';

/**
 * StopCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopCommand
 */
export const StopCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopCommand';

/**
 * StopDishwashingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopDiswashingAction
 */
export const StopDiswashingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopDiswashingAction';

/**
 * StopWashingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopWashingAction
 */
export const StopWashingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopWashingAction';

/**
 * StopDryingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopDryingAction
 */
export const StopDryingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopDryingAction';

/**
 * StopFocusingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopFocusingAction
 */
export const StopFocusingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopFocusingAction';

/**
 * StopFocusingSessionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopFocusingSessionAction
 */
export const StopFocusingSessionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopFocusingSessionAction';

/**
 * StopListeningMusicAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopListeningMusicAction
 */
export const StopListeningMusicAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopListeningMusicAction';

/**
 * StopNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopNotification
 */
export const StopNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopNotification';

/**
 * StopOvenCookingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopOvenCookingAction
 */
export const StopOvenCookingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopOvenCookingAction';

/**
 * StopPlayingAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopPlayingAction
 */
export const StopPlayingAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopPlayingAction';

/**
 * StopStudyingSessionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopStudyingSessionAction
 */
export const StopStudyingSessionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopStudyingSessionAction';

/**
 * StopUsingSmartphoneAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopUsingSmartphoneAction
 */
export const StopUsingSmartphoneAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopUsingSmartphoneAction';

/**
 * StopVacuumAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopVacuumAction
 */
export const StopVacuumAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopVacuumAction';

/**
 * StopWashingClothesAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopWashingClothesAction
 */
export const StopWashingClothesAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopWashingClothesAction';

/**
 * StopWatchingTvAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StopWatchingTvAction
 */
export const StopWatchingTvAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StopWatchingTvAction';

/**
 * StoppedActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedActivityTrigger
 */
export const StoppedActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedActivityTrigger';

/**
 * StoppedAppTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedAppTrigger
 */
export const StoppedAppTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedAppTrigger';

/**
 * StoppedEntertainementTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedEntertainementTrigger
 */
export const StoppedEntertainementTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedEntertainementTrigger';

/**
 * StoppedBikeSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedBikeSessionTrigger
 */
export const StoppedBikeSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedBikeSessionTrigger';

/**
 * StoppedPhysicalActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedPhysicalActivityTrigger
 */
export const StoppedPhysicalActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedPhysicalActivityTrigger';

/**
 * StoppedBrewingCoffeeTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedBrewingCoffeeTrigger
 */
export const StoppedBrewingCoffeeTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedBrewingCoffeeTrigger';

/**
 * StoppedCookingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedCookingTrigger
 */
export const StoppedCookingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedCookingTrigger';

/**
 * StoppedDiswashingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedDiswashingTrigger
 */
export const StoppedDiswashingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedDiswashingTrigger';

/**
 * StoppedWashingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedWashingTrigger
 */
export const StoppedWashingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedWashingTrigger';

/**
 * StoppedDryingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedDryingTrigger
 */
export const StoppedDryingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedDryingTrigger';

/**
 * StoppedFocusingSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedFocusingSessionTrigger
 */
export const StoppedFocusingSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedFocusingSessionTrigger';

/**
 * StoppedFocusingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedFocusingTrigger
 */
export const StoppedFocusingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedFocusingTrigger';

/**
 * StoppedListeningMusicTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedListeningMusicTrigger
 */
export const StoppedListeningMusicTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedListeningMusicTrigger';

/**
 * StoppedOvenCookingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedOvenCookingTrigger
 */
export const StoppedOvenCookingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedOvenCookingTrigger';

/**
 * StoppedPlayingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedPlayingTrigger
 */
export const StoppedPlayingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedPlayingTrigger';

/**
 * StoppedRelaxingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedRelaxingTrigger
 */
export const StoppedRelaxingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedRelaxingTrigger';

/**
 * StoppedRunSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedRunSessionTrigger
 */
export const StoppedRunSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedRunSessionTrigger';

/**
 * StoppedSleepingTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedSleepingTrigger
 */
export const StoppedSleepingTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedSleepingTrigger';

/**
 * StoppedStudyingSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedStudyingSessionTrigger
 */
export const StoppedStudyingSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedStudyingSessionTrigger';

/**
 * StoppedUsingSmartphoneTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedUsingSmartphoneTrigger
 */
export const StoppedUsingSmartphoneTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedUsingSmartphoneTrigger';

/**
 * StoppedWalkingSessionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedWalkingSessionTrigger
 */
export const StoppedWalkingSessionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedWalkingSessionTrigger';

/**
 * StoppedWashingClothesTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedWashingClothesTrigger
 */
export const StoppedWashingClothesTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedWashingClothesTrigger';

/**
 * StoppedWatchingTvTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoppedWatchingTvTrigger
 */
export const StoppedWatchingTvTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoppedWatchingTvTrigger';

/**
 * StoredAppTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredAppTrigger
 */
export const StoredAppTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredAppTrigger';

/**
 * StoredTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredTrigger
 */
export const StoredTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredTrigger';

/**
 * StoredBackupTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredBackupTrigger
 */
export const StoredBackupTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredBackupTrigger';

/**
 * StoredContactTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredContactTrigger
 */
export const StoredContactTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredContactTrigger';

/**
 * StoredFileTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredFileTrigger
 */
export const StoredFileTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredFileTrigger';

/**
 * StoredHealthInformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredHealthInformationTrigger
 */
export const StoredHealthInformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredHealthInformationTrigger';

/**
 * StoredMediaInformationTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredMediaInformationTrigger
 */
export const StoredMediaInformationTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredMediaInformationTrigger';

/**
 * StoredWebBookmarkTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StoredWebBookmarkTrigger
 */
export const StoredWebBookmarkTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StoredWebBookmarkTrigger';

/**
 * StudyingTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#StudyingTrackingService
 */
export const StudyingTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#StudyingTrackingService';

/**
 * TVService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TVService
 */
export const TVService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TVService';

/**
 * Tablet
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Tablet
 */
export const Tablet: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Tablet';

/**
 * TagService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TagService
 */
export const TagService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TagService';

/**
 * TakeAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakeAction
 */
export const TakeAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakeAction';

/**
 * TakeAudioAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakeAudioAction
 */
export const TakeAudioAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakeAudioAction';

/**
 * TakePhotoAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakePhotoAction
 */
export const TakePhotoAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakePhotoAction';

/**
 * TakeVideoAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakeVideoAction
 */
export const TakeVideoAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakeVideoAction';

/**
 * TakenAudioTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakenAudioTrigger
 */
export const TakenAudioTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakenAudioTrigger';

/**
 * TakenTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakenTrigger
 */
export const TakenTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakenTrigger';

/**
 * TakenImageTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakenImageTrigger
 */
export const TakenImageTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakenImageTrigger';

/**
 * TakenVideoTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TakenVideoTrigger
 */
export const TakenVideoTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TakenVideoTrigger';

/**
 * TapButtonActivityTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TapButtonActivityTrigger
 */
export const TapButtonActivityTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TapButtonActivityTrigger';

/**
 * TemperatureSetToTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TemperatureSetToTrigger
 */
export const TemperatureSetToTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TemperatureSetToTrigger';

/**
 * TemporalTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TemporalTrigger
 */
export const TemporalTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TemporalTrigger';

/**
 * Thermostat
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Thermostat
 */
export const Thermostat: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Thermostat';

/**
 * TimeManagement
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TimeManagementTool
 */
export const TimeManagementTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TimeManagementTool';

/**
 * TimerService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TimerService
 */
export const TimerService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TimerService';

/**
 * ToDo
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ToDoTool
 */
export const ToDoTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ToDoTool';

/**
 * ToggleCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ToggleCommand
 */
export const ToggleCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ToggleCommand';

/**
 * ToggleSwitchTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#ToggleSwitchTrigger
 */
export const ToggleSwitchTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#ToggleSwitchTrigger';

/**
 * TurnAlarmOffAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TurnAlarmOffAction
 */
export const TurnAlarmOffAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TurnAlarmOffAction';

/**
 * TurnDeviceOffAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TurnDeviceOffAction
 */
export const TurnDeviceOffAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TurnDeviceOffAction';

/**
 * TurnDeviceOnAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TurnDeviceOnAction
 */
export const TurnDeviceOnAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TurnDeviceOnAction';

/**
 * TurnOffCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TurnOffCommand
 */
export const TurnOffCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TurnOffCommand';

/**
 * TurnOffNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TurnOffNotification
 */
export const TurnOffNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TurnOffNotification';

/**
 * TurnOnCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TurnOnCommand
 */
export const TurnOnCommand: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TurnOnCommand';

/**
 * TurnOnNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#TurnOnNotification
 */
export const TurnOnNotification: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#TurnOnNotification';

/**
 * TV
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Tv
 */
export const Tv: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Tv';

/**
 * UnlikeService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#UnlikeService
 */
export const UnlikeService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#UnlikeService';

/**
 * UpdatedWallpaperTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#UpdatedWallpaperTrigger
 */
export const UpdatedWallpaperTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#UpdatedWallpaperTrigger';

/**
 * VacuumService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VacuumService
 */
export const VacuumService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VacuumService';

/**
 * VehicleTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VehicleTrackingService
 */
export const VehicleTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VehicleTrackingService';

/**
 * Ventilator
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#Ventilator
 */
export const Ventilator: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#Ventilator';

/**
 * VideoPlatform
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VideoPlatform
 */
export const VideoPlatform: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VideoPlatform';

/**
 * VideoRecordingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VideoRecordingService
 */
export const VideoRecordingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VideoRecordingService';

/**
 * VideoService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VideoService
 */
export const VideoService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VideoService';

/**
 * VoiceAssistant
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VoiceAssistant
 */
export const VoiceAssistant: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VoiceAssistant';

/**
 * VolumeDecreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VolumeDecreasedTrigger
 */
export const VolumeDecreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VolumeDecreasedTrigger';

/**
 * VolumeIncreasedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VolumeIncreasedTrigger
 */
export const VolumeIncreasedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VolumeIncreasedTrigger';

/**
 * VolumeService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#VolumeService
 */
export const VolumeService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#VolumeService';

/**
 * WalkTrackingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WalkTrackingService
 */
export const WalkTrackingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WalkTrackingService';

/**
 * WashingMachine
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WashingMachine
 */
export const WashingMachine: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WashingMachine';

/**
 * WashingService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WashingService
 */
export const WashingService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WashingService';

/**
 * WaterTemperatureSystemDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WaterTemperatureSystemDisabledTrigger
 */
export const WaterTemperatureSystemDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WaterTemperatureSystemDisabledTrigger';

/**
 * WaterTemperatureSystemEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WaterTemperatureSystemEnabledTrigger
 */
export const WaterTemperatureSystemEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WaterTemperatureSystemEnabledTrigger';

/**
 * WateringService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WateringService
 */
export const WateringService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WateringService';

/**
 * WateringSystemDisabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WateringSystemDisabledTrigger
 */
export const WateringSystemDisabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WateringSystemDisabledTrigger';

/**
 * WateringSystemEnabledTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WateringSystemEnabledTrigger
 */
export const WateringSystemEnabledTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WateringSystemEnabledTrigger';

/**
 * WeatherService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WeatherService
 */
export const WeatherService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WeatherService';

/**
 * WeatherStation
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WeatherStation
 */
export const WeatherStation: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WeatherStation';

/**
 * WeatherWebsite
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WeatherWebSite
 */
export const WeatherWebSite: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WeatherWebSite';

/**
 * WebBookmarkService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WebBookmarkService
 */
export const WebBookmarkService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WebBookmarkService';

/**
 * WebBookmarkTool
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WebBookmarkTool
 */
export const WebBookmarkTool: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WebBookmarkTool';

/**
 * WebRequestService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WebRequestService
 */
export const WebRequestService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WebRequestService';

/**
 * WifiService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WifiService
 */
export const WifiService: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WifiService';

/**
 * WindowFrameClosedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WindowFrameClosedTrigger
 */
export const WindowFrameClosedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WindowFrameClosedTrigger';

/**
 * WindowFrameOpenedTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WindowFrameOpenedTrigger
 */
export const WindowFrameOpenedTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WindowFrameOpenedTrigger';

/**
 * WorseDeviceConditionAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorseDeviceConditionAction
 */
export const WorseDeviceConditionAction: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorseDeviceConditionAction';

/**
 * WorseDeviceConditionTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#WorseDeviceConditionTrigger
 */
export const WorseDeviceConditionTrigger: OwlClass = 'http://elite.polito.it/ontologies/eupont.owl#WorseDeviceConditionTrigger';

/**
 * allowTo
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#allowTo
 */
export const allowTo: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#allowTo';

/**
 * canControl
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#canControl
 */
export const canControl: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#canControl';

/**
 * channelOffer
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#channelOffer
 */
export const channelOffer: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#channelOffer';

/**
 * isOfChannel
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#isOfChannel
 */
export const isOfChannel: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#isOfChannel';

/**
 * commandAllowTo
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#commandAllowTo
 */
export const commandAllowTo: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#commandAllowTo';

/**
 * hasAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasAction
 */
export const hasAction: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasAction';

/**
 * hasCategory
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasCategory
 */
export const hasCategory: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasCategory';

/**
 * hasCommand
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasCommand
 */
export const hasCommand: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasCommand';

/**
 * hasDetail
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasDetail
 */
export const hasDetail: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasDetail';

/**
 * hasNotification
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasNotification
 */
export const hasNotification: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasNotification';

/**
 * hasRegisteredEntity
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasRegisteredEntity
 */
export const hasRegisteredEntity: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasRegisteredEntity';

/**
 * hasTechnology
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasTechnology
 */
export const hasTechnology: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasTechnology';

/**
 * hasService
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasService
 */
export const hasService: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasService';

/**
 * hasTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#hasTrigger
 */
export const hasTrigger: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#hasTrigger';

/**
 * location
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#location
 */
export const location: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#location';

/**
 * nominal
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#nominal
 */
export const nominal: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#nominal';

/**
 * nominalAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#nominalAction
 */
export const nominalAction: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#nominalAction';

/**
 * nominalDetail
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#nominalDetail
 */
export const nominalDetail: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#nominalDetail';

/**
 * nominalTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#nominalTrigger
 */
export const nominalTrigger: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#nominalTrigger';

/**
 * notificationAllowTo
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#notificationAllowTo
 */
export const notificationAllowTo: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#notificationAllowTo';

/**
 * offerAction
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#offerAction
 */
export const offerAction: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#offerAction';

/**
 * offerDetail
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#offerDetail
 */
export const offerDetail: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#offerDetail';

/**
 * offerTrigger
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#offerTrigger
 */
export const offerTrigger: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#offerTrigger';

/**
 * triggers
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#triggers
 */
export const triggers: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#triggers';

/**
 * where
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#where
 */
export const where: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#where';

/**
 * which
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#which
 */
export const which: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#which';

/**
 * who
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#who
 */
export const who: OwlObjectProperty = 'http://elite.polito.it/ontologies/eupont.owl#who';

/**
 * 
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#description
 */
export const description: OwlDatatypeProperty = 'http://elite.polito.it/ontologies/eupont.owl#description';

/**
 * 
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#detail
 */
export const detail: OwlDatatypeProperty = 'http://elite.polito.it/ontologies/eupont.owl#detail';

/**
 * 
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#type
 */
export const type: OwlDatatypeProperty = 'http://elite.polito.it/ontologies/eupont.owl#type';

/**
 * 
 * 
 * 
 *
 * http://elite.polito.it/ontologies/eupont.owl#value
 */
export const value: OwlDatatypeProperty = 'http://elite.polito.it/ontologies/eupont.owl#value';

export const _BASE: IriString = 'http://elite.polito.it/ontologies/eupont.owl#';
export const _PREFIX: string = 'europont';