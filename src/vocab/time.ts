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
 * Generalized day
 * 
 * Day of month - formulated as a text string with a pattern constraint to reproduce the same lexical form as gDay, except that values up to 99 are permitted, in order to support calendars with more than 31 days in a month. 
 * Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.
 *
 * http://www.w3.org/2006/time#generalDay
 */
export const generalDay: Datatype = 'http://www.w3.org/2006/time#generalDay';

/**
 * Generalized month
 * 
 * Month of year - formulated as a text string with a pattern constraint to reproduce the same lexical form as gMonth, except that values up to 20 are permitted, in order to support calendars with more than 12 months in the year. 
 * Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.
 *
 * http://www.w3.org/2006/time#generalMonth
 */
export const generalMonth: Datatype = 'http://www.w3.org/2006/time#generalMonth';

/**
 * Generalized year
 * 
 * Year number - formulated as a text string with a pattern constraint to reproduce the same lexical form as gYear, but not restricted to values from the Gregorian calendar. 
 * Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.
 *
 * http://www.w3.org/2006/time#generalYear
 */
export const generalYear: Datatype = 'http://www.w3.org/2006/time#generalYear';

/**
 * Date-Time description
 * 
 * Description of date and time structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.
 *
 * http://www.w3.org/2006/time#DateTimeDescription
 */
export const DateTimeDescription: OwlClass = 'http://www.w3.org/2006/time#DateTimeDescription';

/**
 * Generalized date-time description
 * 
 * Description of date and time structured with separate values for the various elements of a calendar-clock system
 *
 * http://www.w3.org/2006/time#GeneralDateTimeDescription
 */
export const GeneralDateTimeDescription: OwlClass = 'http://www.w3.org/2006/time#GeneralDateTimeDescription';

/**
 * Date-time interval
 * 
 * DateTimeInterval is a subclass of ProperInterval, defined using the multi-element DateTimeDescription.
 *
 * http://www.w3.org/2006/time#DateTimeInterval
 */
export const DateTimeInterval: OwlClass = 'http://www.w3.org/2006/time#DateTimeInterval';

/**
 * Proper interval
 * 
 * A temporal entity with non-zero extent or duration, i.e. for which the value of the beginning and end are different
 *
 * http://www.w3.org/2006/time#ProperInterval
 */
export const ProperInterval: OwlClass = 'http://www.w3.org/2006/time#ProperInterval';

/**
 * Day of week
 * 
 * The day of week
 *
 * http://www.w3.org/2006/time#DayOfWeek
 */
export const DayOfWeek: OwlClass = 'http://www.w3.org/2006/time#DayOfWeek';

/**
 * Time duration
 * 
 * Duration of a temporal extent expressed as a number scaled by a temporal unit
 *
 * http://www.w3.org/2006/time#Duration
 */
export const Duration: OwlClass = 'http://www.w3.org/2006/time#Duration';

/**
 * Temporal duration
 * 
 * Time extent; duration of a time interval separate from its particular start position
 *
 * http://www.w3.org/2006/time#TemporalDuration
 */
export const TemporalDuration: OwlClass = 'http://www.w3.org/2006/time#TemporalDuration';

/**
 * Duration description
 * 
 * Description of temporal extent structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of each of the numeric properties is restricted to xsd:decimal
 *
 * http://www.w3.org/2006/time#DurationDescription
 */
export const DurationDescription: OwlClass = 'http://www.w3.org/2006/time#DurationDescription';

/**
 * Generalized duration description
 * 
 * Description of temporal extent structured with separate values for the various elements of a calendar-clock system.
 *
 * http://www.w3.org/2006/time#GeneralDurationDescription
 */
export const GeneralDurationDescription: OwlClass = 'http://www.w3.org/2006/time#GeneralDurationDescription';

/**
 * Temporal position
 * 
 * A position on a time-line
 *
 * http://www.w3.org/2006/time#TemporalPosition
 */
export const TemporalPosition: OwlClass = 'http://www.w3.org/2006/time#TemporalPosition';

/**
 * Time instant
 * 
 * A temporal entity with zero extent or duration
 *
 * http://www.w3.org/2006/time#Instant
 */
export const Instant: OwlClass = 'http://www.w3.org/2006/time#Instant';

/**
 * Temporal entity
 * 
 * A temporal interval or instant.
 *
 * http://www.w3.org/2006/time#TemporalEntity
 */
export const TemporalEntity: OwlClass = 'http://www.w3.org/2006/time#TemporalEntity';

/**
 * Time interval
 * 
 * A temporal entity with an extent or duration
 *
 * http://www.w3.org/2006/time#Interval
 */
export const Interval: OwlClass = 'http://www.w3.org/2006/time#Interval';

/**
 * 
 * 
 * 
 *
 * http://www.w3.org/2006/time#January
 */
export const January: OwlClass = 'http://www.w3.org/2006/time#January';

/**
 * Month of year
 * 
 * The month of the year
 *
 * http://www.w3.org/2006/time#MonthOfYear
 */
export const MonthOfYear: OwlClass = 'http://www.w3.org/2006/time#MonthOfYear';

/**
 * Temporal Reference System
 * 
 * A temporal reference system, such as a temporal coordinate system (with an origin, direction, and scale), a calendar-clock combination, or a (possibly hierarchical) ordinal system. 
 * 
 * This is a stub class, representing the set of all temporal reference systems.
 *
 * http://www.w3.org/2006/time#TRS
 */
export const TRS: OwlClass = 'http://www.w3.org/2006/time#TRS';

/**
 * Temporal unit
 * 
 * A standard duration, which provides a scale factor for a time extent, or the granularity or precision for a time position.
 *
 * http://www.w3.org/2006/time#TemporalUnit
 */
export const TemporalUnit: OwlClass = 'http://www.w3.org/2006/time#TemporalUnit';

/**
 * Time position
 * 
 * A temporal position described using either a (nominal) value from an ordinal reference system, or a (numeric) value in a temporal coordinate system. 
 *
 * http://www.w3.org/2006/time#TimePosition
 */
export const TimePosition: OwlClass = 'http://www.w3.org/2006/time#TimePosition';

/**
 * Time Zone
 * 
 * A Time Zone specifies the amount by which the local time is offset from UTC. 
 * 	A time zone is usually denoted geographically (e.g. Australian Eastern Daylight Time), with a constant value in a given region. 
 * The region where it applies and the offset from UTC are specified by a locally recognised governing authority.
 *
 * http://www.w3.org/2006/time#TimeZone
 */
export const TimeZone: OwlClass = 'http://www.w3.org/2006/time#TimeZone';

/**
 * Year
 * 
 * 
 *
 * http://www.w3.org/2006/time#Year
 */
export const Year: OwlClass = 'http://www.w3.org/2006/time#Year';

/**
 * Temporal reference system used
 * 
 * The temporal reference system used by a temporal position or extent description. 
 *
 * http://www.w3.org/2006/time#hasTRS
 */
export const hasTRS: OwlObjectProperty = 'http://www.w3.org/2006/time#hasTRS';

/**
 * temporal unit type
 * 
 * The temporal unit which provides the precision of a date-time value or scale of a temporal extent
 *
 * http://www.w3.org/2006/time#unitType
 */
export const unitType: OwlObjectProperty = 'http://www.w3.org/2006/time#unitType';

/**
 * day of week
 * 
 * The day of week, whose value is a member of the class time:DayOfWeek
 *
 * http://www.w3.org/2006/time#dayOfWeek
 */
export const dayOfWeek: OwlObjectProperty = 'http://www.w3.org/2006/time#dayOfWeek';

/**
 * month of year
 * 
 * The month of the year, whose value is a member of the class time:MonthOfYear
 *
 * http://www.w3.org/2006/time#monthOfYear
 */
export const monthOfYear: OwlObjectProperty = 'http://www.w3.org/2006/time#monthOfYear';

/**
 * in time zone
 * 
 * The time zone for clock elements in the temporal position
 *
 * http://www.w3.org/2006/time#timeZone
 */
export const timeZone: OwlObjectProperty = 'http://www.w3.org/2006/time#timeZone';

/**
 * after
 * 
 * Gives directionality to time. If a temporal entity T1 is after another temporal entity T2, then the beginning of T1 is after the end of T2.
 *
 * http://www.w3.org/2006/time#after
 */
export const after: OwlObjectProperty = 'http://www.w3.org/2006/time#after';

/**
 * before
 * 
 * Gives directionality to time. If a temporal entity T1 is before another temporal entity T2, then the end of T1 is before the beginning of T2. Thus, "before" can be considered to be basic to instants and derived for intervals.
 *
 * http://www.w3.org/2006/time#before
 */
export const before: OwlObjectProperty = 'http://www.w3.org/2006/time#before';

/**
 * has beginning
 * 
 * Beginning of a temporal entity
 *
 * http://www.w3.org/2006/time#hasBeginning
 */
export const hasBeginning: OwlObjectProperty = 'http://www.w3.org/2006/time#hasBeginning';

/**
 * has time
 * 
 * Supports the association of a temporal entity (instant or interval) to any thing
 *
 * http://www.w3.org/2006/time#hasTime
 */
export const hasTime: OwlObjectProperty = 'http://www.w3.org/2006/time#hasTime';

/**
 * has Date-Time description
 * 
 * Value of DateTimeInterval expressed as a structured value. The beginning and end of the interval coincide with the limits of the shortest element in the description.
 *
 * http://www.w3.org/2006/time#hasDateTimeDescription
 */
export const hasDateTimeDescription: OwlObjectProperty = 'http://www.w3.org/2006/time#hasDateTimeDescription';

/**
 * has duration
 * 
 * Duration of a temporal entity, expressed as a scaled value or nominal value
 *
 * http://www.w3.org/2006/time#hasDuration
 */
export const hasDuration: OwlObjectProperty = 'http://www.w3.org/2006/time#hasDuration';

/**
 * has temporal duration
 * 
 * Duration of a temporal entity.
 *
 * http://www.w3.org/2006/time#hasTemporalDuration
 */
export const hasTemporalDuration: OwlObjectProperty = 'http://www.w3.org/2006/time#hasTemporalDuration';

/**
 * has duration description
 * 
 * Duration of a temporal entity, expressed using a structured description
 *
 * http://www.w3.org/2006/time#hasDurationDescription
 */
export const hasDurationDescription: OwlObjectProperty = 'http://www.w3.org/2006/time#hasDurationDescription';

/**
 * has end
 * 
 * End of a temporal entity.
 *
 * http://www.w3.org/2006/time#hasEnd
 */
export const hasEnd: OwlObjectProperty = 'http://www.w3.org/2006/time#hasEnd';

/**
 * in date-time description
 * 
 * Position of an instant, expressed using a structured description
 *
 * http://www.w3.org/2006/time#inDateTime
 */
export const inDateTime: OwlObjectProperty = 'http://www.w3.org/2006/time#inDateTime';

/**
 * Temporal position
 * 
 * Position of a time instant
 *
 * http://www.w3.org/2006/time#inTemporalPosition
 */
export const inTemporalPosition: OwlObjectProperty = 'http://www.w3.org/2006/time#inTemporalPosition';

/**
 * Time position
 * 
 * Position of an instant, expressed as a temporal coordinate or nominal value
 *
 * http://www.w3.org/2006/time#inTimePosition
 */
export const inTimePosition: OwlObjectProperty = 'http://www.w3.org/2006/time#inTimePosition';

/**
 * has time instant inside
 * 
 * An instant that falls inside the interval. It is not intended to include beginnings and ends of intervals.
 *
 * http://www.w3.org/2006/time#inside
 */
export const inside: OwlObjectProperty = 'http://www.w3.org/2006/time#inside';

/**
 * interval after
 * 
 * If a proper interval T1 is intervalAfter another proper interval T2, then the beginning of T1 is after the end of T2.
 *
 * http://www.w3.org/2006/time#intervalAfter
 */
export const intervalAfter: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalAfter';

/**
 * interval disjoint
 * 
 * If a proper interval T1 is intervalDisjoint another proper interval T2, then the beginning of T1 is after the end of T2, or the end of T1 is before the beginning of T2, i.e. the intervals do not overlap in any way, but their ordering relationship is not known.
 *
 * http://www.w3.org/2006/time#intervalDisjoint
 */
export const intervalDisjoint: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalDisjoint';

/**
 * interval before
 * 
 * If a proper interval T1 is intervalBefore another proper interval T2, then the end of T1 is before the beginning of T2.
 *
 * http://www.w3.org/2006/time#intervalBefore
 */
export const intervalBefore: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalBefore';

/**
 * interval contains
 * 
 * If a proper interval T1 is intervalContains another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is after the end of T2.
 *
 * http://www.w3.org/2006/time#intervalContains
 */
export const intervalContains: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalContains';

/**
 * interval during
 * 
 * If a proper interval T1 is intervalDuring another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is before the end of T2.
 *
 * http://www.w3.org/2006/time#intervalDuring
 */
export const intervalDuring: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalDuring';

/**
 * interval in
 * 
 * If a proper interval T1 is intervalIn another proper interval T2, then the beginning of T1 is after the beginning of T2 or is coincident with the beginning of T2, and the end of T1 is before the end of T2, or is coincident with the end of T2, except that end of T1 may not be coincident with the end of T2 if the beginning of T1 is coincident with the beginning of T2.
 *
 * http://www.w3.org/2006/time#intervalIn
 */
export const intervalIn: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalIn';

/**
 * interval equals
 * 
 * If a proper interval T1 is intervalEquals another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is coincident with the end of T2.
 *
 * http://www.w3.org/2006/time#intervalEquals
 */
export const intervalEquals: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalEquals';

/**
 * interval finished by
 * 
 * If a proper interval T1 is intervalFinishedBy another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is coincident with the end of T2.
 *
 * http://www.w3.org/2006/time#intervalFinishedBy
 */
export const intervalFinishedBy: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalFinishedBy';

/**
 * interval finishes
 * 
 * If a proper interval T1 is intervalFinishes another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is coincident with the end of T2.
 *
 * http://www.w3.org/2006/time#intervalFinishes
 */
export const intervalFinishes: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalFinishes';

/**
 * interval meets
 * 
 * If a proper interval T1 is intervalMeets another proper interval T2, then the end of T1 is coincident with the beginning of T2.
 *
 * http://www.w3.org/2006/time#intervalMeets
 */
export const intervalMeets: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalMeets';

/**
 * interval met by
 * 
 * If a proper interval T1 is intervalMetBy another proper interval T2, then the beginning of T1 is coincident with the end of T2.
 *
 * http://www.w3.org/2006/time#intervalMetBy
 */
export const intervalMetBy: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalMetBy';

/**
 * interval overlapped by
 * 
 * If a proper interval T1 is intervalOverlappedBy another proper interval T2, then the beginning of T1 is after the beginning of T2, the beginning of T1 is before the end of T2, and the end of T1 is after the end of T2.
 *
 * http://www.w3.org/2006/time#intervalOverlappedBy
 */
export const intervalOverlappedBy: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalOverlappedBy';

/**
 * interval overlaps
 * 
 * If a proper interval T1 is intervalOverlaps another proper interval T2, then the beginning of T1 is before the beginning of T2, the end of T1 is after the beginning of T2, and the end of T1 is before the end of T2.
 *
 * http://www.w3.org/2006/time#intervalOverlaps
 */
export const intervalOverlaps: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalOverlaps';

/**
 * interval started by
 * 
 * If a proper interval T1 is intervalStarted another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is after the end of T2.
 *
 * http://www.w3.org/2006/time#intervalStartedBy
 */
export const intervalStartedBy: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalStartedBy';

/**
 * interval starts
 * 
 * If a proper interval T1 is intervalStarts another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is before the end of T2.
 *
 * http://www.w3.org/2006/time#intervalStarts
 */
export const intervalStarts: OwlObjectProperty = 'http://www.w3.org/2006/time#intervalStarts';

/**
 * day
 * 
 * Day position in a calendar-clock system.
 * 
 * The range of this property is not specified, so can be replaced by any specific representation of a calendar day from any calendar. 
 *
 * http://www.w3.org/2006/time#day
 */
export const day: OwlDatatypeProperty = 'http://www.w3.org/2006/time#day';

/**
 * month
 * 
 * Month position in a calendar-clock system.
 * 
 * The range of this property is not specified, so can be replaced by any specific representation of a calendar month from any calendar. 
 *
 * http://www.w3.org/2006/time#month
 */
export const month: OwlDatatypeProperty = 'http://www.w3.org/2006/time#month';

/**
 * year
 * 
 * Year position in a calendar-clock system.
 * 
 * The range of this property is not specified, so can be replaced by any specific representation of a calendar year from any calendar. 
 *
 * http://www.w3.org/2006/time#year
 */
export const year: OwlDatatypeProperty = 'http://www.w3.org/2006/time#year';

/**
 * Numeric value of temporal duration
 * 
 * Value of a temporal extent expressed as a decimal number scaled by a temporal unit
 *
 * http://www.w3.org/2006/time#numericDuration
 */
export const numericDuration: OwlDatatypeProperty = 'http://www.w3.org/2006/time#numericDuration';

/**
 * days duration
 * 
 * length of, or element of the length of, a temporal extent expressed in days
 *
 * http://www.w3.org/2006/time#days
 */
export const days: OwlDatatypeProperty = 'http://www.w3.org/2006/time#days';

/**
 * hours duration
 * 
 * length of, or element of the length of, a temporal extent expressed in hours
 *
 * http://www.w3.org/2006/time#hours
 */
export const hours: OwlDatatypeProperty = 'http://www.w3.org/2006/time#hours';

/**
 * minutes
 * 
 * length, or element of, a temporal extent expressed in minutes
 *
 * http://www.w3.org/2006/time#minutes
 */
export const minutes: OwlDatatypeProperty = 'http://www.w3.org/2006/time#minutes';

/**
 * months duration
 * 
 * length of, or element of the length of, a temporal extent expressed in months
 *
 * http://www.w3.org/2006/time#months
 */
export const months: OwlDatatypeProperty = 'http://www.w3.org/2006/time#months';

/**
 * seconds duration
 * 
 * length of, or element of the length of, a temporal extent expressed in seconds
 *
 * http://www.w3.org/2006/time#seconds
 */
export const seconds: OwlDatatypeProperty = 'http://www.w3.org/2006/time#seconds';

/**
 * weeks duration
 * 
 * length of, or element of the length of, a temporal extent expressed in weeks
 *
 * http://www.w3.org/2006/time#weeks
 */
export const weeks: OwlDatatypeProperty = 'http://www.w3.org/2006/time#weeks';

/**
 * years duration
 * 
 * length of, or element of the length of, a temporal extent expressed in years
 *
 * http://www.w3.org/2006/time#years
 */
export const years: OwlDatatypeProperty = 'http://www.w3.org/2006/time#years';

/**
 * day of year
 * 
 * The number of the day within the year
 *
 * http://www.w3.org/2006/time#dayOfYear
 */
export const dayOfYear: OwlDatatypeProperty = 'http://www.w3.org/2006/time#dayOfYear';

/**
 * hour
 * 
 * Hour position in a calendar-clock system.
 *
 * http://www.w3.org/2006/time#hour
 */
export const hour: OwlDatatypeProperty = 'http://www.w3.org/2006/time#hour';

/**
 * minute
 * 
 * Minute position in a calendar-clock system.
 *
 * http://www.w3.org/2006/time#minute
 */
export const minute: OwlDatatypeProperty = 'http://www.w3.org/2006/time#minute';

/**
 * second
 * 
 * Second position in a calendar-clock system.
 *
 * http://www.w3.org/2006/time#second
 */
export const second: OwlDatatypeProperty = 'http://www.w3.org/2006/time#second';

/**
 * week
 * 
 * Week number within the year.
 *
 * http://www.w3.org/2006/time#week
 */
export const week: OwlDatatypeProperty = 'http://www.w3.org/2006/time#week';

/**
 * Numeric value of temporal position
 * 
 * The (numeric) value indicating position within a temporal coordinate system 
 *
 * http://www.w3.org/2006/time#numericPosition
 */
export const numericPosition: OwlDatatypeProperty = 'http://www.w3.org/2006/time#numericPosition';

/**
 * Name of temporal position
 * 
 * The (nominal) value indicating temporal position in an ordinal reference system 
 *
 * http://www.w3.org/2006/time#nominalPosition
 */
export const nominalPosition: OwlDatatypeProperty = 'http://www.w3.org/2006/time#nominalPosition';

/**
 * has XSD duration
 * 
 * Extent of a temporal entity, expressed using xsd:duration
 *
 * http://www.w3.org/2006/time#hasXSDDuration
 */
export const hasXSDDuration: OwlDatatypeProperty = 'http://www.w3.org/2006/time#hasXSDDuration';

/**
 * in XSD date
 * 
 * Position of an instant, expressed using xsd:date
 *
 * http://www.w3.org/2006/time#inXSDDate
 */
export const inXSDDate: OwlDatatypeProperty = 'http://www.w3.org/2006/time#inXSDDate';

/**
 * in XSD Date-Time
 * 
 * Position of an instant, expressed using xsd:dateTime
 *
 * http://www.w3.org/2006/time#inXSDDateTime
 */
export const inXSDDateTime: OwlDatatypeProperty = 'http://www.w3.org/2006/time#inXSDDateTime';

/**
 * in XSD Date-Time-Stamp
 * 
 * Position of an instant, expressed using xsd:dateTimeStamp
 *
 * http://www.w3.org/2006/time#inXSDDateTimeStamp
 */
export const inXSDDateTimeStamp: OwlDatatypeProperty = 'http://www.w3.org/2006/time#inXSDDateTimeStamp';

/**
 * in XSD g-Year
 * 
 * Position of an instant, expressed using xsd:gYear
 *
 * http://www.w3.org/2006/time#inXSDgYear
 */
export const inXSDgYear: OwlDatatypeProperty = 'http://www.w3.org/2006/time#inXSDgYear';

/**
 * in XSD g-YearMonth
 * 
 * Position of an instant, expressed using xsd:gYearMonth
 *
 * http://www.w3.org/2006/time#inXSDgYearMonth
 */
export const inXSDgYearMonth: OwlDatatypeProperty = 'http://www.w3.org/2006/time#inXSDgYearMonth';

/**
 * has XSD date-time
 * 
 * Value of DateTimeInterval expressed as a compact value.
 *
 * http://www.w3.org/2006/time#xsdDateTime
 */
export const xsdDateTime: OwlDatatypeProperty = 'http://www.w3.org/2006/time#xsdDateTime';

/**
 * Friday
 * 
 * 
 *
 * http://www.w3.org/2006/time#Friday
 */
export const Friday: OtherIndividual = 'http://www.w3.org/2006/time#Friday';

/**
 * Month (unit of temporal duration)
 * 
 * 
 *
 * http://www.w3.org/2006/time#unitMonth
 */
export const unitMonth: OtherIndividual = 'http://www.w3.org/2006/time#unitMonth';

/**
 * Monday
 * 
 * 
 *
 * http://www.w3.org/2006/time#Monday
 */
export const Monday: OtherIndividual = 'http://www.w3.org/2006/time#Monday';

/**
 * Saturday
 * 
 * 
 *
 * http://www.w3.org/2006/time#Saturday
 */
export const Saturday: OtherIndividual = 'http://www.w3.org/2006/time#Saturday';

/**
 * Sunday
 * 
 * 
 *
 * http://www.w3.org/2006/time#Sunday
 */
export const Sunday: OtherIndividual = 'http://www.w3.org/2006/time#Sunday';

/**
 * Thursday
 * 
 * 
 *
 * http://www.w3.org/2006/time#Thursday
 */
export const Thursday: OtherIndividual = 'http://www.w3.org/2006/time#Thursday';

/**
 * Tuesday
 * 
 * 
 *
 * http://www.w3.org/2006/time#Tuesday
 */
export const Tuesday: OtherIndividual = 'http://www.w3.org/2006/time#Tuesday';

/**
 * Wednesday
 * 
 * 
 *
 * http://www.w3.org/2006/time#Wednesday
 */
export const Wednesday: OtherIndividual = 'http://www.w3.org/2006/time#Wednesday';

/**
 * Day (unit of temporal duration)
 * 
 * 
 *
 * http://www.w3.org/2006/time#unitDay
 */
export const unitDay: OtherIndividual = 'http://www.w3.org/2006/time#unitDay';

/**
 * Hour (unit of temporal duration)
 * 
 * 
 *
 * http://www.w3.org/2006/time#unitHour
 */
export const unitHour: OtherIndividual = 'http://www.w3.org/2006/time#unitHour';

/**
 * Minute (unit of temporal duration)
 * 
 * 
 *
 * http://www.w3.org/2006/time#unitMinute
 */
export const unitMinute: OtherIndividual = 'http://www.w3.org/2006/time#unitMinute';

/**
 * Second (unit of temporal duration)
 * 
 * 
 *
 * http://www.w3.org/2006/time#unitSecond
 */
export const unitSecond: OtherIndividual = 'http://www.w3.org/2006/time#unitSecond';

/**
 * Week (unit of temporal duration)
 * 
 * 
 *
 * http://www.w3.org/2006/time#unitWeek
 */
export const unitWeek: OtherIndividual = 'http://www.w3.org/2006/time#unitWeek';

/**
 * Year (unit of temporal duration)
 * 
 * 
 *
 * http://www.w3.org/2006/time#unitYear
 */
export const unitYear: OtherIndividual = 'http://www.w3.org/2006/time#unitYear';

export const _BASE: IriString = 'http://www.w3.org/2006/time#';
export const _PREFIX: string = 'time';