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
 * Data Requirement
 * 
 * A data requirement is a prescribed directive or consensual agreement that defines the content and/or structure that constitute high quality data instances and values.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#DataRequirement
 */
export const DataRequirement: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#DataRequirement';

/**
 * Task
 * 
 * Classifies the tasks for which the data quality rule shall apply for.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#Task
 */
export const Task: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#Task';

/**
 * Illegal Value
 * 
 * An illegal value is a data value that must not be used for a property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#IllegalValue
 */
export const IllegalValue: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#IllegalValue';

/**
 * Data Requirement Violation
 * 
 * A data requirement violation occurs when a data value or a data instance does not meet its requirements.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#DataRequirementViolation
 */
export const DataRequirementViolation: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#DataRequirementViolation';

/**
 * Illegal Value Rule
 * 
 * An illegal value rule is a property requirement that specifies the values that a certain property must not obtain. Illegal value rules, therefore, refer to reference properties that hold all disallowed values.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#IllegalValueRule
 */
export const IllegalValueRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#IllegalValueRule';

/**
 * Blacklist Property
 * 
 * A blacklist property holds the values that are disallowed for a certain data set.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#BlacklistProperty
 */
export const BlacklistProperty: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#BlacklistProperty';

/**
 * 
 * 
 * An affected property specifies the property of a data instance that contains one or more data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#AffectedProperty
 */
export const AffectedProperty: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#AffectedProperty';

/**
 * Data Element
 * 
 * A data element is a class, a property, an instance, or a literal value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#DataElement
 */
export const DataElement: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#DataElement';

/**
 * Completeness
 * 
 * Completeness is the extent to which data are of sufficient breadth, depth, and scope for the task at hand.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#Completeness
 */
export const Completeness: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#Completeness';

/**
 * Data Quality Assessment
 * 
 * Data quality score is an abstract class that can be used to structure data quality dimension scores that indicate the quality state of classes and/or properties.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#DataQualityScore
 */
export const DataQualityScore: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#DataQualityScore';

/**
 * Functionally Dependent Value Rule
 * 
 * A functionally dependent value rule defines that the value of a tested property must have a certain value when the values of other properties obtain certain states (conditions). E.g. the property foo:inStock must have value "true" when the property foo:availableAmount is greater than zero.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#FuncDepValueRule
 */
export const FuncDepValueRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#FuncDepValueRule';

/**
 * Trusted Property
 * 
 * A trusted property holds the values that serve as a trusted reference in legal value rules / functional dependency reference rules, e.g. to define legal values for a tested property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#TrustedProperty
 */
export const TrustedProperty: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#TrustedProperty';

/**
 * Functional Dependency Reference Rule
 * 
 * A functional dependency reference rule is a multi property requirement that specifies legal value combinations for two or more properties that are allowed to occur within the same instance. Functional dependency reference rules refer to reference properties of classes that hold instances with all allowed value combinations.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#FuncDepReferenceRule
 */
export const FuncDepReferenceRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#FuncDepReferenceRule';

/**
 * Tested Property
 * 
 * A tested property holds the values to be analyzed for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#TestedProperty
 */
export const TestedProperty: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#TestedProperty';

/**
 * Trusted Class
 * 
 * Legal value rules and functional dependency reference rules require the specification of a trusted class as a reference that holds instances with legal values / legal value combinations.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#TrustedClass
 */
export const TrustedClass: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#TrustedClass';

/**
 * Semantic Accuracy
 * 
 * Semantic accuracy is the degree to which the data values of an instance represent the correct state of an entity’s property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#SemanticAccuracy
 */
export const SemanticAccuracy: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#SemanticAccuracy';

/**
 * Accuracy
 * 
 * Accuracy is the degree to which a data value represents the desired state regarding its syntax and semantics.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#Accuracy
 */
export const Accuracy: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#Accuracy';

/**
 * Scale Value
 * 
 * A scale value is a value of a nominal or ordinal scale.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ScaleValue
 */
export const ScaleValue: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#ScaleValue';

/**
 * Property Requirement
 * 
 * Property requirements are data requirements that are related to values of a single property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#PropertyRequirement
 */
export const PropertyRequirement: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#PropertyRequirement';

/**
 * Unique Value Rule
 * 
 * A unique value rule is a property requirement that specifies that each value of a certain property must be unique in instances of a certain class.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#UniqueValueRule
 */
export const UniqueValueRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#UniqueValueRule';

/**
 * Tested Class
 * 
 * A tested class is a class that holds the instances that shall be analyzed for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#TestedClass
 */
export const TestedClass: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#TestedClass';

/**
 * Value Substitution Rule
 * 
 * A value substitution rule specifies a value to be removed and a new value that shall substitute the removed value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ValueSubstitution
 */
export const ValueSubstitution: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#ValueSubstitution';

/**
 * Matching Value Rule
 * 
 * Matching value rules are multi property requirements in which the property values of other instances are used to identify data requirements violations in an instance.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#MatchingValueRule
 */
export const MatchingValueRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#MatchingValueRule';

/**
 * Property Uniqueness
 * 
 * Property uniqueness is the degree to which the values of a property (that must only contain unique values within instances of a certain class) are unique.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#PropertyUniqueness
 */
export const PropertyUniqueness: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#PropertyUniqueness';

/**
 * Uniqueness
 * 
 * Uniqueness is the degree to which properties and classes are free of duplicate values and instances.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#Uniqueness
 */
export const Uniqueness: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#Uniqueness';

/**
 * Data Cleansing Rule
 * 
 * A data cleansing rule is an unambiguous rule that precisely specifies the required state of a data value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#DataCleansingRule
 */
export const DataCleansingRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#DataCleansingRule';

/**
 * Illegal Value Range Rule
 * 
 * An illegal value range rule is a property requirement that specifies the upper and/or lower boundary of numeric values that a certain property must not obtain.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#IllegalValueRangeRule
 */
export const IllegalValueRangeRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#IllegalValueRangeRule';

/**
 * Affected Instance
 * 
 * An affected instance is a data instance that contains one or more data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#AffectedInstance
 */
export const AffectedInstance: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#AffectedInstance';

/**
 * Multi Property Cleansing Rule
 * 
 * Multi property cleansing rules can be used to cleanse the literal values of two or more dependent properties.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#MultiPropertyCleansingRule
 */
export const MultiPropertyCleansingRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#MultiPropertyCleansingRule';

/**
 * Class Requirement
 * 
 * A class requirement is a data requirement that refers to the instances of a class as a whole.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ClassRequirement
 */
export const ClassRequirement: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#ClassRequirement';

/**
 * Blacklist Class
 * 
 * A blacklist class holds instances with values that are disallowed for a certain data set. Thus, illegal value rules refer to such classes over the blacklist class property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#BlacklistClass
 */
export const BlacklistClass: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#BlacklistClass';

/**
 * Condition
 * 
 * A condition constrains instances of a class to a certain subset for which certain data quality rules apply.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#Condition
 */
export const Condition: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#Condition';

/**
 * Expiry Rule
 * 
 * An expiry rule is an outdated instance rule that specifies the expiration date of an instance that must not exceed the current date and time. Therefore, expiry rules require date information about the validity period of an instance.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ExpiryRule
 */
export const ExpiryRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#ExpiryRule';

/**
 * Outdated Instance Rule
 * 
 * An outdated instance rule is a data requirement that specifies the point in time when an instance is not current anymore.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#OutdatedInstanceRule
 */
export const OutdatedInstanceRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#OutdatedInstanceRule';

/**
 * Conditional Rule
 * 
 * A conditional rule is a multi property requirement that can be used to specify that values of a tested property A must always obtain a certain state under the condition that values of another property B obtain a certain state (condition).
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ConditionalRule
 */
export const ConditionalRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#ConditionalRule';

/**
 * Conditional Syntax Rule
 * 
 * Conditional syntax rules define that the literal values of a tested property must follow a certain syntax when the value of another property obtains a certain state. E.g. the property foo:state must have a value with two capital letters when the property foo:country obtains the value "USA".
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ConditionalSyntaxRule
 */
export const ConditionalSyntaxRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#ConditionalSyntaxRule';

/**
 * Multi Property Requirement
 * 
 * Multi property requirements are data requirements that consider values from two or more properties.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#MultiPropertyRequirement
 */
export const MultiPropertyRequirement: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#MultiPropertyRequirement';

/**
 * 
 * 
 * An affected class holds one or more affected instances
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#AffectedClass
 */
export const AffectedClass: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#AffectedClass';

/**
 * Unit
 * 
 * Class for units of numerical values that are used to express certain property states.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#Unit
 */
export const Unit: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#Unit';

/**
 * Syntactic Accuracy
 * 
 * Syntactic accuracy is the degree to which data values of a property represent legal values and are free from syntax violations.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#SyntacticAccuracy
 */
export const SyntacticAccuracy: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#SyntacticAccuracy';

/**
 * Update Rule
 * 
 * An update rule is an outdated instance rule that specifies the maximum duration tolerated without any updates. Update rules require timestamps about the last update of an instance.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#UpdateRule
 */
export const UpdateRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#UpdateRule';

/**
 * Syntax Violation
 * 
 * A syntax violation is a data requirement violation that occurs when a data value contains disallowed characters or does not match a predefined pattern.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#SyntaxViolation
 */
export const SyntaxViolation: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#SyntaxViolation';

/**
 * 
 * 
 * A value is out of range when it is not part of the legal value range or when it is part of the illegal value range.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#OutOfRangeValue
 */
export const OutOfRangeValue: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#OutOfRangeValue';

/**
 * Legal Value Range Rule
 * 
 * A legal value range rule is a property requirement that specifies the upper and/or lower boundary of numeric values that a certain property is allowed to obtain.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#LegalValueRangeRule
 */
export const LegalValueRangeRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#LegalValueRangeRule';

/**
 * Property Completeness Rule
 * 
 * A property completeness rule is a data requirement that specifies that a certain property and/or its value must exist in all instances of a certain class.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#PropertyCompletenessRule
 */
export const PropertyCompletenessRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#PropertyCompletenessRule';

/**
 * Duplicate Instance Rule
 * 
 * A duplicate instance rule is a multi property requirement which specifies the properties that (when seen together) uniquely identify an entity. I.e. if the properties of two or more different instances represent the same state, then the instances represent the same entity. Thus, the instances are considered to be duplicates.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#DuplicateInstanceRule
 */
export const DuplicateInstanceRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#DuplicateInstanceRule';

/**
 * Missing Value
 * 
 * A missing value occurs when a property of an instance does not hold a value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#MissingValue
 */
export const MissingValue: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#MissingValue';

/**
 * Missing Element
 * 
 * A missing element is a data requirement violation that occurs when schema elements, instances, or data values are missing, but required.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#MissingElement
 */
export const MissingElement: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#MissingElement';

/**
 * Literal Cleansing Rule
 * 
 * Literal cleansing rules can be used to cleanse the literal values of a certain property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#LiteralCleansingRule
 */
export const LiteralCleansingRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#LiteralCleansingRule';

/**
 * Functional Dependency Violation
 * 
 * A functional dependency violation is a combination of different property values within the same instance that must not occur together. E.g. an instance describing the man “Peter Miller” has the value “Mr.” as salutation property, but the value “female” as sex.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#FunctionalDependencyViolation
 */
export const FunctionalDependencyViolation: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#FunctionalDependencyViolation';

/**
 * White Space Removal Rule
 * 
 * A white space removal rule states that whitespaces at the beginning of a string and at the end of a string shall be removed for the specified property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#WhitespaceRemoval
 */
export const WhitespaceRemoval: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#WhitespaceRemoval';

/**
 * Missing Property
 * 
 * A property is missing when an instances does not contain a specific property that is required.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#MissingProperty
 */
export const MissingProperty: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#MissingProperty';

/**
 * Legal Value Rule
 * 
 * A legal value rule is a property requirement that specifies all values that a certain property is allowed to obtain. Legal value rules, therefore, refer to reference properties of classes that hold instances with all allowed values.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#LegalValueRule
 */
export const LegalValueRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#LegalValueRule';

/**
 * Custom Requirement
 * 
 * A custom requirement is a data requirement that is expressed via a SPARQL query.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#CustomRequirement
 */
export const CustomRequirement: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#CustomRequirement';

/**
 * Strict Value Combination Rule
 * 
 * A strict value combination is a combination of two values of different properties that may only be assigned to each other, but not to other values.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#StrictValueCombination
 */
export const StrictValueCombination: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#StrictValueCombination';

/**
 * Conditional Data Competeness Rule
 * 
 * Conditional property completeness rules specify that a tested property and/or its literal values must exist when the value of another property obtains a certain state. E.g. the property foo:state must exist and have a value when the property foo:country obtains the value "USA".
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ConditionalPropertyCompletenessRule
 */
export const ConditionalPropertyCompletenessRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#ConditionalPropertyCompletenessRule';

/**
 * Property Completion Rule
 * 
 * A property completion rule specifies a property and value that shall be added to certain instances.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#PropertyCompletion
 */
export const PropertyCompletion: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#PropertyCompletion';

/**
 * Syntax Rule
 * 
 * A syntax rule is a property requirement that specifies the allowed characters and/or character pattern to be used in values for a certain property in instances of a certain class.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#SyntaxRule
 */
export const SyntaxRule: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#SyntaxRule';

/**
 * Missing Property and Value
 * 
 * Class for instances that miss both a property and its value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#MissingPropertyAndValue
 */
export const MissingPropertyAndValue: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#MissingPropertyAndValue';

/**
 * Timeliness
 * 
 * Timeliness is the degree to which instances of a specific class (1) are updated within an expected time or (2) have not exceeded their expiration date.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#Timeliness
 */
export const Timeliness: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#Timeliness';

/**
 * Population Uniqueness
 * 
 * Entity uniqueness is the degree to which entities (that must be uniquely represented within a certain class) are unique.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#PopulationUniqueness
 */
export const PopulationUniqueness: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#PopulationUniqueness';

/**
 * Uniqueness Violation
 * 
 * A uniqueness violation occurs when two or more identical values are assigned to a property that requires unique values.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#UniquenessViolation
 */
export const UniquenessViolation: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#UniquenessViolation';

/**
 * Outdated Instance
 * 
 * An instance is outdated when it represents an outdated state of its corresponding real-world entity.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#OutdatedInstance
 */
export const OutdatedInstance: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#OutdatedInstance';

/**
 * Population Completeness
 * 
 * Population completeness is the degree to which all objects of a certain reference are represented in a specific class.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#PopulationCompleteness
 */
export const PopulationCompleteness: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#PopulationCompleteness';

/**
 * Property Completeness
 * 
 * Property completeness is the degree to which values for a specific property are missing in entities of a specific class.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#PropertyCompleteness
 */
export const PropertyCompleteness: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#PropertyCompleteness';

/**
 * Duplicate Instance
 * 
 * Two or more instances are duplicates when they represent the same real world entity.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#DuplicateInstance
 */
export const DuplicateInstance: OwlClass = 'http://purl.org/dqm-vocabulary/v1/dqm#DuplicateInstance';

/**
 * Sub Task Of
 * 
 * Property that can be used to represent hierachies of between tasks.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#subTaskOf
 */
export const subTaskOf: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#subTaskOf';

/**
 * Data Requirements Relationship
 * 
 * The data requirements relationship property is an abstract property that holds object properties that are used to define internal and external relationships of data requirements.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#dataRequirementsRelationship
 */
export const dataRequirementsRelationship: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#dataRequirementsRelationship';

/**
 * Blacklist Property
 * 
 * A blacklist property holds the values that are disallowed for a certain data set.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#blacklistProperty
 */
export const blacklistProperty: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#blacklistProperty';

/**
 * Data Element Relationship
 * 
 * The data element relationship property is an abstract property that holds object properties that are used to define internal and external relationships of data elements.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#dataElementRelationship
 */
export const dataElementRelationship: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#dataElementRelationship';

/**
 * Reference Property
 * 
 * The reference property points to the URI of a property that holds trusted values, i.e. values of high quality
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty
 */
export const referenceProperty: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty';

/**
 * Reference Class
 * 
 * The reference class property points to the URI of a class that contains trusted instances, i.e. instances of high quality.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#referenceClass
 */
export const referenceClass: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#referenceClass';

/**
 * Tested Property
 * 
 * The property with the values that shall be tested for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#testedProperty
 */
export const testedProperty: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#testedProperty';

/**
 * Rule Violation
 * 
 * Connects data requirements with data quality problems that have been identified using the requirement.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ruleViolation
 */
export const ruleViolation: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#ruleViolation';

/**
 * Rule Of Identification
 * 
 * The rule of identification property connects the data quality problem instances with the instance of the data requirement that has detected the problem.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#ruleOfIdentification
 */
export const ruleOfIdentification: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#ruleOfIdentification';

/**
 * Tested Class
 * 
 * The tested class property specifies the class that holds the instances that shall be tested for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#testedClass
 */
export const testedClass: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#testedClass';

/**
 * Tested Property 5
 * 
 * The property with the values that shall be tested for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#testedProperty5
 */
export const testedProperty5: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#testedProperty5';

/**
 * Based On
 * 
 * Connects a data quality score with the data requirements that were used to calculate the score.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#basedOn
 */
export const basedOn: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#basedOn';

/**
 * Has Score
 * 
 * Connects data requirements with the data quality score which was calculated based on the requirement.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasScore
 */
export const hasScore: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#hasScore';

/**
 * Assessed Property
 * 
 * The assessed property represents all properties that have been tested for rule violations during the computation of the assessment score.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#assessedProperty
 */
export const assessedProperty: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#assessedProperty';

/**
 * Blacklist Class
 * 
 * A blacklist class holds instances with values that are disallowed for a certain data set.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#blacklistClass
 */
export const blacklistClass: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#blacklistClass';

/**
 * Data Cleansing Rule Relationship
 * 
 * Data cleansing rule relationships are object properties of the data cleansing rules.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#dataCleansingRuleRelationship
 */
export const dataCleansingRuleRelationship: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#dataCleansingRuleRelationship';

/**
 * 
 * 
 * 
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#affectedInstance
 */
export const affectedInstance: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#affectedInstance';

/**
 * Affected Class
 * 
 * An affected class holds one or more instances with one or more data requirement violations.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#affectedClass
 */
export const affectedClass: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#affectedClass';

/**
 * Unit of Measurement
 * 
 * Indicates the unit of measurement, e.g. of data quality scores. It is recommended to use UN/CEFACT common codes to specify the unit of measurement, e.g. "P1" stands for percent.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#unitOfMeasurement
 */
export const unitOfMeasurement: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#unitOfMeasurement';

/**
 * Has Condition 1
 * 
 * Connects a conditional rule with a certain condition.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasCondition1
 */
export const hasCondition1: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#hasCondition1';

/**
 * Condition
 * 
 * Connects a conditional rule with a certain condition
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasCondition
 */
export const hasCondition: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#hasCondition';

/**
 * Has Condition 2
 * 
 * Connects a conditional rule with a certain condition.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasCondition2
 */
export const hasCondition2: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#hasCondition2';

/**
 * Reference Property 1
 * 
 * The reference property points to the URI of a property that holds trusted values, i.e. values of high quality
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty1
 */
export const referenceProperty1: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty1';

/**
 * Has Condition 3
 * 
 * Connects a conditional rule with a certain condition.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasCondition3
 */
export const hasCondition3: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#hasCondition3';

/**
 * Has Properties
 * 
 * Reconnects mapped classes and properties with each other.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasProperties
 */
export const hasProperties: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#hasProperties';

/**
 * 
 * 
 * Links an instances to the next instance in an ordinal scale.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#next
 */
export const next: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#next';

/**
 * Reference Property 2
 * 
 * The reference property points to the URI of a property that holds trusted values, i.e. values of high quality
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty2
 */
export const referenceProperty2: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty2';

/**
 * Cleanses Class
 * 
 * This property identifies classes that contain instances that shall be cleansed via a data cleansing rule.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#cleansesClass
 */
export const cleansesClass: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#cleansesClass';

/**
 * Has Condition 4
 * 
 * Connects a conditional rule with a certain condition.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasCondition4
 */
export const hasCondition4: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#hasCondition4';

/**
 * Reference Property 3
 * 
 * The reference property points to the URI of a property that holds trusted values, i.e. values of high quality
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty3
 */
export const referenceProperty3: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty3';

/**
 * Applies For
 * 
 * Connects data requirements with the tasks in which the requirement applies.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#appliesFor
 */
export const appliesFor: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#appliesFor';

/**
 * Has Requirement
 * 
 * Specifies the data requirements that have to be fulfilled to perform the task.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasRequirement
 */
export const hasRequirement: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#hasRequirement';

/**
 * Has Condition 5
 * 
 * Connects a conditional rule with a certain condition.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasCondition5
 */
export const hasCondition5: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#hasCondition5';

/**
 * Reference Property 4
 * 
 * The reference property points to the URI of a property that holds trusted values, i.e. values of high quality
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty4
 */
export const referenceProperty4: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty4';

/**
 * 
 * 
 * 
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#affectedProperty
 */
export const affectedProperty: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#affectedProperty';

/**
 * Reference Property 5
 * 
 * The reference property points to the URI of a property that holds trusted values, i.e. values of high quality
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty5
 */
export const referenceProperty5: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#referenceProperty5';

/**
 * Unit of Confidence
 * 
 * The unit in which confidence is expressed.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#unitOfConfidence
 */
export const unitOfConfidence: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#unitOfConfidence';

/**
 * Assessed Class
 * 
 * The assessed class is the class that holds the instances that have been analyzed to compute the assessment score.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#assessedClass
 */
export const assessedClass: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#assessedClass';

/**
 * Conditional Property
 * 
 * The conditional property property indicates the URI of a property that holds values that can be used to filter the relevant subset of data for which a rule applies.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#conditionalProperty
 */
export const conditionalProperty: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#conditionalProperty';

/**
 * Tested Property 2
 * 
 * The property with the values that shall be tested for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#testedProperty2
 */
export const testedProperty2: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#testedProperty2';

/**
 * Tested Property 1
 * 
 * The property with the values that shall be tested for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#testedProperty1
 */
export const testedProperty1: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#testedProperty1';

/**
 * Scale Values
 * 
 * Links to values of a certain ordinal or nominal scale.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#scaleValues
 */
export const scaleValues: OwlObjectProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#scaleValues';

/**
 * Tested Property 4
 * 
 * The property with the values that shall be tested for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#testedProperty4
 */
export const testedProperty4: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#testedProperty4';

/**
 * Cleanses Property 1
 * 
 * This property identifies a property that holds values that shall be cleansed.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#cleansesProperty1
 */
export const cleansesProperty1: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#cleansesProperty1';

/**
 * Tested Property 3
 * 
 * The property with the values that shall be tested for data quality problems.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#testedProperty3
 */
export const testedProperty3: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#testedProperty3';

/**
 * Unit of Importance
 * 
 * The unit in which importance is expressed.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#unitOfImportance
 */
export const unitOfImportance: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#unitOfImportance';

/**
 * Task Dependent
 * 
 * Specifies whether the data quality rule is task dependent.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#taskDependent
 */
export const taskDependent: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#taskDependent';

/**
 * Requirement Metadata
 * 
 * An abstract property that holds generic datatype properties that describe a data requirement.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#reqMetadata
 */
export const reqMetadata: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#reqMetadata';

/**
 * Requirement Name
 * 
 * Specifies the name of a data requirement in natural language.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#reqName
 */
export const reqName: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#reqName';

/**
 * Requirement Description
 * 
 * Describes a data requirement in natural language.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#reqDescription
 */
export const reqDescription: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#reqDescription';

/**
 * Required Value
 * 
 * Specifies whether a value for a property must exist.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#requiredValue
 */
export const requiredValue: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#requiredValue';

/**
 * Official Name
 * 
 * Official name of a value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#officialName
 */
export const officialName: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#officialName';

/**
 * Time Of Identification
 * 
 * The time of identification property specifies the date and time in which the data quality problem was detected
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#timeOfIdentification
 */
export const timeOfIdentification: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#timeOfIdentification';

/**
 * New Value
 * 
 * The new value property specifies the new value which shall substitute the current value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#newValue
 */
export const newValue: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#newValue';

/**
 * Cleansing Property
 * 
 * Cleansing properties are properties of data cleansing rules.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#cleansingProperty
 */
export const cleansingProperty: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#cleansingProperty';

/**
 * Valid From
 * 
 * Specifies the date and time from which a rule is valid.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#validFrom
 */
export const validFrom: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#validFrom';

/**
 * Not Equal To
 * 
 * Holds one or more consecutive characters that are used to identify values of another property that do not match with the value of this property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#notEqualTo
 */
export const notEqualTo: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#notEqualTo';

/**
 * Operated Value
 * 
 * The operated value property is an abstract property for datatype properties that are used to express string filtering criteria.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#operatedValue
 */
export const operatedValue: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#operatedValue';

/**
 * Has URI
 * 
 * The hasURI property is used to map properties to instances of a class.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#hasURI
 */
export const hasURI: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#hasURI';

/**
 * Technical Name
 * 
 * Technical name of a value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#technicalName
 */
export const technicalName: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#technicalName';

/**
 * Required Property
 * 
 * Specifies whether a property must exist.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#requiredProperty
 */
export const requiredProperty: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#requiredProperty';

/**
 * Valid Until
 * 
 * Specifies the date and time until a rule stays valid.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#validUntil
 */
export const validUntil: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#validUntil';

/**
 * Last Modified
 * 
 * The property lastModified indicates the date and time when the rule was last modified.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#lastModified
 */
export const lastModified: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#lastModified';

/**
 * Less Than
 * 
 * Holds a numeric value that is used to identify values of a property that are less than the value of this property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#lessThan
 */
export const lessThan: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#lessThan';

/**
 * Contains
 * 
 * Holds one or more consecutive characters that are supposed to be found in strings of another property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#contains
 */
export const contains: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#contains';

/**
 * Upper Limit
 * 
 * Specifies the upper limit a numeric property value shall obtain.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#upperLimit
 */
export const upperLimit: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#upperLimit';

/**
 * Rank
 * 
 * Position of a value in an ordinal scale.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#rank
 */
export const rank: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#rank';

/**
 * Expected Update Interval
 * 
 * The expected update interval specifies the time interval in which instances of a specific class must be updated in order to be current.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#expectedUpdateInterval
 */
export const expectedUpdateInterval: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#expectedUpdateInterval';

/**
 * Greater Than
 * 
 * Holds a numeric value that is used to identify values of a property that are greater than the value of this property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#greaterThan
 */
export const greaterThan: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#greaterThan';

/**
 * Time Of Assessment
 * 
 * The time of assessment represents the data and time when the data quality score was computed.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#timeOfAssessment
 */
export const timeOfAssessment: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#timeOfAssessment';

/**
 * Current Value
 * 
 * The current value propertiy specifies the value to be removed.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#currentValue
 */
export const currentValue: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#currentValue';

/**
 * Unit Name
 * 
 * Name of a unit of measurement.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#unitName
 */
export const unitName: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#unitName';

/**
 * Plain Score
 * 
 * The plain score represents a data quality dimension score that was assessed by using a certain formula that accounts for the violations of data quality rules related to the size of the relevant data set.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#plainScore
 */
export const plainScore: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#plainScore';

/**
 * Pattern
 * 
 * The pattern property can be used to express value patterns based on a simple syntax without the need for knowing regular expressions. E.g. the pattern "AaaaaNN" where "A" stands for capital letters, "a" for small letters, and "N" for numbers.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#pattern
 */
export const pattern: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#pattern';

/**
 * SPARQL rule
 * 
 * This property can store custom data requirements that are expressed via SPARQL queries.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#sparqlrule
 */
export const sparqlrule: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#sparqlrule';

/**
 * Confidence
 * 
 * The confidence property indicates how confident a rule creators is regarding the correctness of the rule.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#confidence
 */
export const confidence: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#confidence';

/**
 * Add Property
 * 
 * A property that shall be added to an instance.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#addProperty
 */
export const addProperty: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#addProperty';

/**
 * Ends With
 * 
 * Holds one or more consecutive characters that are supposed to be found at the end of strings of another property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#endsWith
 */
export const endsWith: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#endsWith';

/**
 * Weighted Score
 * 
 * A weighted score is a data quality dimension score that is computed by integration of importance values of data requirements, tasks, or data elements.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#weightedScore
 */
export const weightedScore: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#weightedScore';

/**
 * Equals
 * 
 * Holds one or more consecutive characters that are supposed to be found in the same order in strings of another property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#equals
 */
export const equals: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#equals';

/**
 * Value Meaning
 * 
 * Meaning of a value.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#valueMeaning
 */
export const valueMeaning: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#valueMeaning';

/**
 * Lower Limit
 * 
 * Specifies the lower limit a numeric property value shall obtain.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#lowerLimit
 */
export const lowerLimit: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#lowerLimit';

/**
 * Requirement Source
 * 
 * Specifies the source of a data requirement.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#reqSource
 */
export const reqSource: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#reqSource';

/**
 * Validation
 * 
 * Validation indicates whether a data quality rule shall be used for validation during data entry.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#validation
 */
export const validation: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#validation';

/**
 * Unit Description
 * 
 * Description of a unit of measurement.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#unitDescription
 */
export const unitDescription: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#unitDescription';

/**
 * Assessment
 * 
 * The assessment property indicates whether the rule shall be used for data quality assessment.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#assessment
 */
export const assessment: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#assessment';

/**
 * Task Description
 * 
 * Describes the task in natural language.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#taskDescription
 */
export const taskDescription: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#taskDescription';

/**
 * Filtering
 * 
 * The filtering property indicates whether the rule shall be used for information filtering, i.e. only high quality data is retrieved.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#filtering
 */
export const filtering: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#filtering';

/**
 * Starts With
 * 
 * Holds one or more consecutive characters that are supposed to be found at the beginning of strings of another property.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#startsWith
 */
export const startsWith: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#startsWith';

/**
 * Cleansing
 * 
 * The data cleansing property specifies whether the rule shall be applied to cleanse the data in a data source.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#cleansing
 */
export const cleansing: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#cleansing';

/**
 * Add Value
 * 
 * A value that shall be added to a property of an instance.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#addValue
 */
export const addValue: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#addValue';

/**
 * Importance
 * 
 * Specifies the importance of a task, a data quality rule, or a data element.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#importance
 */
export const importance: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#importance';

/**
 * Task Name
 * 
 * Specifies the name of the task.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#taskName
 */
export const taskName: OwlDatatypeProperty = 'http://purl.org/dqm-vocabulary/v1/dqm#taskName';

/**
 * UN/CEFACT common code
 * 
 * UN/CEFACT common code of a unit of measurement.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#commonCode
 */
export const commonCode: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#commonCode';

/**
 * Scale Type
 * 
 * Type of statistical scale.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#scaleType
 */
export const scaleType: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#scaleType';

/**
 * Regular Expression
 * 
 * The regular expressions property can be used to express legal character ranges and data patterns for values of a certain property via regular expressions.
 *
 * http://purl.org/dqm-vocabulary/v1/dqm#regex
 */
export const regex: OtherIndividual = 'http://purl.org/dqm-vocabulary/v1/dqm#regex';

export const _BASE: IriString = 'http://purl.org/dqm-vocabulary/v1/dqm#';
export const _PREFIX: string = 'dqm';