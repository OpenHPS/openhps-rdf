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
 * http://qudt.org/schema/qudt/bits
 */
export const bits: Property = 'http://qudt.org/schema/qudt/bits';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/bytes
 */
export const bytes: Property = 'http://qudt.org/schema/qudt/bytes';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ansiSQLName
 */
export const ansiSQLName: Property = 'http://qudt.org/schema/qudt/ansiSQLName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/cName
 */
export const cName: Property = 'http://qudt.org/schema/qudt/cName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/oracleSQLName
 */
export const oracleSQLName: Property = 'http://qudt.org/schema/qudt/oracleSQLName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/protocolBuffersName
 */
export const protocolBuffersName: Property = 'http://qudt.org/schema/qudt/protocolBuffersName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/pythonName
 */
export const pythonName: Property = 'http://qudt.org/schema/qudt/pythonName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/vbName
 */
export const vbName: Property = 'http://qudt.org/schema/qudt/vbName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/length
 */
export const length: Property = 'http://qudt.org/schema/qudt/length';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/minExclusive
 */
export const minExclusive: Property = 'http://qudt.org/schema/qudt/minExclusive';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/AspectClass
 */
export const AspectClass: OwlClass = 'http://qudt.org/schema/qudt/AspectClass';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Statement
 */
export const Statement: Class = 'http://qudt.org/schema/qudt/Statement';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/LatexString
 */
export const LatexString: Datatype = 'http://qudt.org/schema/qudt/LatexString';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/UCUMcs-term
 */
export const UCUMcs_term: Datatype = 'http://qudt.org/schema/qudt/UCUMcs-term';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/UCUMci
 */
export const UCUMci: Datatype = 'http://qudt.org/schema/qudt/UCUMci';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/UCUMci-term
 */
export const UCUMci_term: Datatype = 'http://qudt.org/schema/qudt/UCUMci-term';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/UCUMcs
 */
export const UCUMcs: Datatype = 'http://qudt.org/schema/qudt/UCUMcs';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/floatPercentage
 */
export const floatPercentage: Datatype = 'http://qudt.org/schema/qudt/floatPercentage';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/integerPercentage
 */
export const integerPercentage: Datatype = 'http://qudt.org/schema/qudt/integerPercentage';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/valueUnion
 */
export const valueUnion: Datatype = 'http://qudt.org/schema/qudt/valueUnion';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/AbstractQuantityKind
 */
export const AbstractQuantityKind: OwlClass = 'http://qudt.org/schema/qudt/AbstractQuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Concept
 */
export const Concept: OwlClass = 'http://qudt.org/schema/qudt/Concept';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKind
 */
export const QuantityKind: OwlClass = 'http://qudt.org/schema/qudt/QuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/AngleUnit
 */
export const AngleUnit: OwlClass = 'http://qudt.org/schema/qudt/AngleUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/DimensionlessUnit
 */
export const DimensionlessUnit: OwlClass = 'http://qudt.org/schema/qudt/DimensionlessUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/BaseDimensionMagnitude
 */
export const BaseDimensionMagnitude: OwlClass = 'http://qudt.org/schema/qudt/BaseDimensionMagnitude';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/EndianType
 */
export const EndianType: OwlClass = 'http://qudt.org/schema/qudt/EndianType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/BinaryPrefix
 */
export const BinaryPrefix: OwlClass = 'http://qudt.org/schema/qudt/BinaryPrefix';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Prefix
 */
export const Prefix: OwlClass = 'http://qudt.org/schema/qudt/Prefix';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/BitEncodingType
 */
export const BitEncodingType: OwlClass = 'http://qudt.org/schema/qudt/BitEncodingType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Encoding
 */
export const Encoding: OwlClass = 'http://qudt.org/schema/qudt/Encoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/BooleanEncodingType
 */
export const BooleanEncodingType: OwlClass = 'http://qudt.org/schema/qudt/BooleanEncodingType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ByteEncodingType
 */
export const ByteEncodingType: OwlClass = 'http://qudt.org/schema/qudt/ByteEncodingType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CardinalityType
 */
export const CardinalityType: OwlClass = 'http://qudt.org/schema/qudt/CardinalityType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/EnumeratedValue
 */
export const EnumeratedValue: OwlClass = 'http://qudt.org/schema/qudt/EnumeratedValue';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CharEncodingType
 */
export const CharEncodingType: OwlClass = 'http://qudt.org/schema/qudt/CharEncodingType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Citation
 */
export const Citation: OwlClass = 'http://qudt.org/schema/qudt/Citation';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Comment
 */
export const Comment: OwlClass = 'http://qudt.org/schema/qudt/Comment';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Rule
 */
export const Rule: OwlClass = 'http://qudt.org/schema/qudt/Rule';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ConstantValue
 */
export const ConstantValue: OwlClass = 'http://qudt.org/schema/qudt/ConstantValue';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityValue
 */
export const QuantityValue: OwlClass = 'http://qudt.org/schema/qudt/QuantityValue';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CountingUnit
 */
export const CountingUnit: OwlClass = 'http://qudt.org/schema/qudt/CountingUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CurrencyUnit
 */
export const CurrencyUnit: OwlClass = 'http://qudt.org/schema/qudt/CurrencyUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/DataEncoding
 */
export const DataEncoding: OwlClass = 'http://qudt.org/schema/qudt/DataEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Datatype
 */
export const Datatype: OwlClass = 'http://qudt.org/schema/qudt/Datatype';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/OrderedType
 */
export const OrderedType: OwlClass = 'http://qudt.org/schema/qudt/OrderedType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/DateTimeStringEncodingType
 */
export const DateTimeStringEncodingType: OwlClass = 'http://qudt.org/schema/qudt/DateTimeStringEncodingType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/DecimalPrefix
 */
export const DecimalPrefix: OwlClass = 'http://qudt.org/schema/qudt/DecimalPrefix';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/DerivedUnit
 */
export const DerivedUnit: OwlClass = 'http://qudt.org/schema/qudt/DerivedUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Unit
 */
export const Unit: OwlClass = 'http://qudt.org/schema/qudt/Unit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Discipline
 */
export const Discipline: OwlClass = 'http://qudt.org/schema/qudt/Discipline';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/FloatingPointEncodingType
 */
export const FloatingPointEncodingType: OwlClass = 'http://qudt.org/schema/qudt/FloatingPointEncodingType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Enumeration
 */
export const Enumeration: OwlClass = 'http://qudt.org/schema/qudt/Enumeration';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/EnumerationScale
 */
export const EnumerationScale: OwlClass = 'http://qudt.org/schema/qudt/EnumerationScale';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Scale
 */
export const Scale: OwlClass = 'http://qudt.org/schema/qudt/Scale';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Figure
 */
export const Figure: OwlClass = 'http://qudt.org/schema/qudt/Figure';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/IntegerEncodingType
 */
export const IntegerEncodingType: OwlClass = 'http://qudt.org/schema/qudt/IntegerEncodingType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/IntervalScale
 */
export const IntervalScale: OwlClass = 'http://qudt.org/schema/qudt/IntervalScale';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/NominalScale
 */
export const NominalScale: OwlClass = 'http://qudt.org/schema/qudt/NominalScale';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/OrdinalScale
 */
export const OrdinalScale: OwlClass = 'http://qudt.org/schema/qudt/OrdinalScale';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/RatioScale
 */
export const RatioScale: OwlClass = 'http://qudt.org/schema/qudt/RatioScale';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/LogarithmicUnit
 */
export const LogarithmicUnit: OwlClass = 'http://qudt.org/schema/qudt/LogarithmicUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/MathsFunctionType
 */
export const MathsFunctionType: OwlClass = 'http://qudt.org/schema/qudt/MathsFunctionType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/NIST_SP811_Comment
 */
export const NIST_SP811_Comment: OwlClass = 'http://qudt.org/schema/qudt/NIST_SP811_Comment';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/NumericUnion
 */
export const NumericUnion: OwlClass = 'http://qudt.org/schema/qudt/NumericUnion';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Organization
 */
export const Organization: OwlClass = 'http://qudt.org/schema/qudt/Organization';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/PhysicalConstant
 */
export const PhysicalConstant: OwlClass = 'http://qudt.org/schema/qudt/PhysicalConstant';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Quantity
 */
export const Quantity: OwlClass = 'http://qudt.org/schema/qudt/Quantity';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector
 */
export const QuantityKindDimensionVector: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/SystemOfUnits
 */
export const SystemOfUnits: OwlClass = 'http://qudt.org/schema/qudt/SystemOfUnits';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/PlaneAngleUnit
 */
export const PlaneAngleUnit: OwlClass = 'http://qudt.org/schema/qudt/PlaneAngleUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Quantifiable
 */
export const Quantifiable: OwlClass = 'http://qudt.org/schema/qudt/Quantifiable';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_SI
 */
export const QuantityKindDimensionVector_SI: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_SI';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS
 */
export const QuantityKindDimensionVector_CGS: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-EMU
 */
export const QuantityKindDimensionVector_CGS_EMU: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-EMU';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-ESU
 */
export const QuantityKindDimensionVector_CGS_ESU: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-ESU';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-GAUSS
 */
export const QuantityKindDimensionVector_CGS_GAUSS: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-GAUSS';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-LH
 */
export const QuantityKindDimensionVector_CGS_LH: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-LH';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_ISO
 */
export const QuantityKindDimensionVector_ISO: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_ISO';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityKindDimensionVector_Imperial
 */
export const QuantityKindDimensionVector_Imperial: OwlClass = 'http://qudt.org/schema/qudt/QuantityKindDimensionVector_Imperial';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/QuantityType
 */
export const QuantityType: OwlClass = 'http://qudt.org/schema/qudt/QuantityType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/RuleType
 */
export const RuleType: OwlClass = 'http://qudt.org/schema/qudt/RuleType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ScalarDatatype
 */
export const ScalarDatatype: OwlClass = 'http://qudt.org/schema/qudt/ScalarDatatype';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ScaleType
 */
export const ScaleType: OwlClass = 'http://qudt.org/schema/qudt/ScaleType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/TransformType
 */
export const TransformType: OwlClass = 'http://qudt.org/schema/qudt/TransformType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/SolidAngleUnit
 */
export const SolidAngleUnit: OwlClass = 'http://qudt.org/schema/qudt/SolidAngleUnit';

/**
 * 
 * 
 * undefined
 * Note that `Symbol` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://qudt.org/schema/qudt/Symbol
 */
export const Symbol__workaround: OwlClass = 'http://qudt.org/schema/qudt/Symbol';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/SystemOfQuantityKinds
 */
export const SystemOfQuantityKinds: OwlClass = 'http://qudt.org/schema/qudt/SystemOfQuantityKinds';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/UserQuantityKind
 */
export const UserQuantityKind: OwlClass = 'http://qudt.org/schema/qudt/UserQuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasBaseQuantityKind
 */
export const hasBaseQuantityKind: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasBaseQuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasRule
 */
export const hasRule: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasRule';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/encoding
 */
export const encoding: OwlObjectProperty = 'http://qudt.org/schema/qudt/encoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/bitOrder
 */
export const bitOrder: OwlObjectProperty = 'http://qudt.org/schema/qudt/bitOrder';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/byteOrder
 */
export const byteOrder: OwlObjectProperty = 'http://qudt.org/schema/qudt/byteOrder';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/cardinality
 */
export const cardinality: OwlObjectProperty = 'http://qudt.org/schema/qudt/cardinality';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/basis
 */
export const basis: OwlObjectProperty = 'http://qudt.org/schema/qudt/basis';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/orderedType
 */
export const orderedType: OwlObjectProperty = 'http://qudt.org/schema/qudt/orderedType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/enumeratedValue
 */
export const enumeratedValue: OwlObjectProperty = 'http://qudt.org/schema/qudt/enumeratedValue';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/enumeration
 */
export const enumeration: OwlObjectProperty = 'http://qudt.org/schema/qudt/enumeration';

/**
 * 
 * 
 * undefined
 * Note that `default` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://qudt.org/schema/qudt/default
 */
export const default__workaround: OwlObjectProperty = 'http://qudt.org/schema/qudt/default';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/element
 */
export const element: OwlObjectProperty = 'http://qudt.org/schema/qudt/element';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/exactMatch
 */
export const exactMatch: OwlObjectProperty = 'http://qudt.org/schema/qudt/exactMatch';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDimensionVector
 */
export const hasDimensionVector: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDimensionVector';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicableSystem
 */
export const applicableSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicableSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicableUnit
 */
export const applicableUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicableUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dataEncoding
 */
export const dataEncoding: OwlObjectProperty = 'http://qudt.org/schema/qudt/dataEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/datatype
 */
export const datatype: OwlObjectProperty = 'http://qudt.org/schema/qudt/datatype';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasUnit
 */
export const hasUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/unit
 */
export const unit: OwlObjectProperty = 'http://qudt.org/schema/qudt/unit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasQuantityKind
 */
export const hasQuantityKind: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasQuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/quantityValue
 */
export const quantityValue: OwlObjectProperty = 'http://qudt.org/schema/qudt/quantityValue';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/generalization
 */
export const generalization: OwlObjectProperty = 'http://qudt.org/schema/qudt/generalization';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionVectorForSI
 */
export const dimensionVectorForSI: OwlObjectProperty = 'http://qudt.org/schema/qudt/dimensionVectorForSI';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/qkdvDenominator
 */
export const qkdvDenominator: OwlObjectProperty = 'http://qudt.org/schema/qudt/qkdvDenominator';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/qkdvNumerator
 */
export const qkdvNumerator: OwlObjectProperty = 'http://qudt.org/schema/qudt/qkdvNumerator';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicableCGSUnit
 */
export const applicableCGSUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicableCGSUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicableISOUnit
 */
export const applicableISOUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicableISOUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicableImperialUnit
 */
export const applicableImperialUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicableImperialUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicableSIUnit
 */
export const applicableSIUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicableSIUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicableUSCustomaryUnit
 */
export const applicableUSCustomaryUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicableUSCustomaryUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasReferenceQuantityKind
 */
export const hasReferenceQuantityKind: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasReferenceQuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ruleType
 */
export const ruleType: OwlObjectProperty = 'http://qudt.org/schema/qudt/ruleType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/permissibleMaths
 */
export const permissibleMaths: OwlObjectProperty = 'http://qudt.org/schema/qudt/permissibleMaths';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/scaleType
 */
export const scaleType: OwlObjectProperty = 'http://qudt.org/schema/qudt/scaleType';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/permissibleTransformation
 */
export const permissibleTransformation: OwlObjectProperty = 'http://qudt.org/schema/qudt/permissibleTransformation';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/baseDimensionEnumeration
 */
export const baseDimensionEnumeration: OwlObjectProperty = 'http://qudt.org/schema/qudt/baseDimensionEnumeration';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/systemDerivedQuantityKind
 */
export const systemDerivedQuantityKind: OwlObjectProperty = 'http://qudt.org/schema/qudt/systemDerivedQuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasUnitSystem
 */
export const hasUnitSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasUnitSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicablePhysicalConstant
 */
export const applicablePhysicalConstant: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicablePhysicalConstant';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/prefix
 */
export const prefix: OwlObjectProperty = 'http://qudt.org/schema/qudt/prefix';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasAllowedUnit
 */
export const hasAllowedUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasAllowedUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasBaseUnit
 */
export const hasBaseUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasBaseUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasCoherentUnit
 */
export const hasCoherentUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasCoherentUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDefinedUnit
 */
export const hasDefinedUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDefinedUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDerivedCoherentUnit
 */
export const hasDerivedCoherentUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDerivedCoherentUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDerivedUnit
 */
export const hasDerivedUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDerivedUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/definedUnitOfSystem
 */
export const definedUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/definedUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/derivedCoherentUnitOfSystem
 */
export const derivedCoherentUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/derivedCoherentUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/derivedUnitOfSystem
 */
export const derivedUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/derivedUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/allowedUnitOfSystem
 */
export const allowedUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/allowedUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/isUnitOfSystem
 */
export const isUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/isUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/applicablePlanckUnit
 */
export const applicablePlanckUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/applicablePlanckUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/baseUnitOfSystem
 */
export const baseUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/baseUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/coherentUnitOfSystem
 */
export const coherentUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/coherentUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/belongsToSystemOfQuantities
 */
export const belongsToSystemOfQuantities: OwlObjectProperty = 'http://qudt.org/schema/qudt/belongsToSystemOfQuantities';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/categorizedAs
 */
export const categorizedAs: OwlObjectProperty = 'http://qudt.org/schema/qudt/categorizedAs';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/coherentUnitSystem
 */
export const coherentUnitSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/coherentUnitSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/denominatorDimensionVector
 */
export const denominatorDimensionVector: OwlObjectProperty = 'http://qudt.org/schema/qudt/denominatorDimensionVector';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/derivedNonCoherentUnitOfSystem
 */
export const derivedNonCoherentUnitOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/derivedNonCoherentUnitOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDerivedNonCoherentUnit
 */
export const hasDerivedNonCoherentUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDerivedNonCoherentUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/derivedQuantityKindOfSystem
 */
export const derivedQuantityKindOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/derivedQuantityKindOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionInverse
 */
export const dimensionInverse: OwlObjectProperty = 'http://qudt.org/schema/qudt/dimensionInverse';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/elementKind
 */
export const elementKind: OwlObjectProperty = 'http://qudt.org/schema/qudt/elementKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/figure
 */
export const figure: OwlObjectProperty = 'http://qudt.org/schema/qudt/figure';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/specialization
 */
export const specialization: OwlObjectProperty = 'http://qudt.org/schema/qudt/specialization';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDenominatorPart
 */
export const hasDenominatorPart: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDenominatorPart';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDimension
 */
export const hasDimension: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDimension';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasDimensionExpression
 */
export const hasDimensionExpression: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasDimensionExpression';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasNonCoherentUnit
 */
export const hasNonCoherentUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasNonCoherentUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasNumeratorPart
 */
export const hasNumeratorPart: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasNumeratorPart';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasPrefixUnit
 */
export const hasPrefixUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasPrefixUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasQuantity
 */
export const hasQuantity: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasQuantity';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasVocabulary
 */
export const hasVocabulary: OwlObjectProperty = 'http://qudt.org/schema/qudt/hasVocabulary';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/isBaseQuantityKindOfSystem
 */
export const isBaseQuantityKindOfSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/isBaseQuantityKindOfSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/isDimensionInSystem
 */
export const isDimensionInSystem: OwlObjectProperty = 'http://qudt.org/schema/qudt/isDimensionInSystem';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/isQuantityKindOf
 */
export const isQuantityKindOf: OwlObjectProperty = 'http://qudt.org/schema/qudt/isQuantityKindOf';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/numeratorDimensionVector
 */
export const numeratorDimensionVector: OwlObjectProperty = 'http://qudt.org/schema/qudt/numeratorDimensionVector';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/omUnit
 */
export const omUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/omUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/quantity
 */
export const quantity: OwlObjectProperty = 'http://qudt.org/schema/qudt/quantity';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/reference
 */
export const reference: OwlObjectProperty = 'http://qudt.org/schema/qudt/reference';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/referenceUnit
 */
export const referenceUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/referenceUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/relevantQuantityKind
 */
export const relevantQuantityKind: OwlObjectProperty = 'http://qudt.org/schema/qudt/relevantQuantityKind';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/relevantUnit
 */
export const relevantUnit: OwlObjectProperty = 'http://qudt.org/schema/qudt/relevantUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/siExactMatch
 */
export const siExactMatch: OwlObjectProperty = 'http://qudt.org/schema/qudt/siExactMatch';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/systemDefinition
 */
export const systemDefinition: OwlObjectProperty = 'http://qudt.org/schema/qudt/systemDefinition';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/systemDimension
 */
export const systemDimension: OwlObjectProperty = 'http://qudt.org/schema/qudt/systemDimension';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/unitFor
 */
export const unitFor: OwlObjectProperty = 'http://qudt.org/schema/qudt/unitFor';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/valueQuantity
 */
export const valueQuantity: OwlObjectProperty = 'http://qudt.org/schema/qudt/valueQuantity';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/symbol
 */
export const symbol: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/symbol';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/altSymbol
 */
export const altSymbol: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/altSymbol';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/latexSymbol
 */
export const latexSymbol: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/latexSymbol';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/vectorMagnitude
 */
export const vectorMagnitude: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/vectorMagnitude';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/plainTextDescription
 */
export const plainTextDescription: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/plainTextDescription';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/url
 */
export const url: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/url';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/rationale
 */
export const rationale: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/rationale';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/abbreviation
 */
export const abbreviation: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/abbreviation';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/deprecated
 */
export const deprecated: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/deprecated';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/id
 */
export const id: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/id';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/exactConstant
 */
export const exactConstant: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/exactConstant';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/currencyCode
 */
export const currencyCode: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/currencyCode';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/currencyExponent
 */
export const currencyExponent: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/currencyExponent';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/bounded
 */
export const bounded: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/bounded';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/javaName
 */
export const javaName: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/javaName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/jsName
 */
export const jsName: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/jsName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/matlabName
 */
export const matlabName: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/matlabName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/microsoftSQLServerName
 */
export const microsoftSQLServerName: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/microsoftSQLServerName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/mySQLName
 */
export const mySQLName: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/mySQLName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/odbcName
 */
export const odbcName: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/odbcName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/oleDBName
 */
export const oleDBName: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/oleDBName';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/allowedPattern
 */
export const allowedPattern: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/allowedPattern';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dbpediaMatch
 */
export const dbpediaMatch: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dbpediaMatch';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/imageLocation
 */
export const imageLocation: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/imageLocation';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/figureCaption
 */
export const figureCaption: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/figureCaption';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/figureLabel
 */
export const figureLabel: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/figureLabel';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/height
 */
export const height: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/height';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/image
 */
export const image: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/image';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/landscape
 */
export const landscape: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/landscape';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/width
 */
export const width: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/width';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/order
 */
export const order: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/order';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/latexDefinition
 */
export const latexDefinition: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/latexDefinition';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/mathMLdefinition
 */
export const mathMLdefinition: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/mathMLdefinition';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/isoNormativeReference
 */
export const isoNormativeReference: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/isoNormativeReference';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/normativeReference
 */
export const normativeReference: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/normativeReference';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ucumCode
 */
export const ucumCode: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/ucumCode';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/prefixMultiplier
 */
export const prefixMultiplier: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/prefixMultiplier';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/standardUncertainty
 */
export const standardUncertainty: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/standardUncertainty';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/relativeStandardUncertainty
 */
export const relativeStandardUncertainty: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/relativeStandardUncertainty';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/standardUncertaintySN
 */
export const standardUncertaintySN: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/standardUncertaintySN';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/value
 */
export const value: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/value';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/valueSN
 */
export const valueSN: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/valueSN';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/isDeltaQuantity
 */
export const isDeltaQuantity: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/isDeltaQuantity';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/iec61360Code
 */
export const iec61360Code: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/iec61360Code';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponentForAmountOfSubstance
 */
export const dimensionExponentForAmountOfSubstance: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponentForAmountOfSubstance';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponentForElectricCurrent
 */
export const dimensionExponentForElectricCurrent: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponentForElectricCurrent';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponentForLength
 */
export const dimensionExponentForLength: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponentForLength';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponentForLuminousIntensity
 */
export const dimensionExponentForLuminousIntensity: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponentForLuminousIntensity';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponentForMass
 */
export const dimensionExponentForMass: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponentForMass';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponentForThermodynamicTemperature
 */
export const dimensionExponentForThermodynamicTemperature: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponentForThermodynamicTemperature';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponentForTime
 */
export const dimensionExponentForTime: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponentForTime';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionlessExponent
 */
export const dimensionlessExponent: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionlessExponent';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/rdfsDatatype
 */
export const rdfsDatatype: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/rdfsDatatype';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/maxExclusive
 */
export const maxExclusive: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/maxExclusive';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/maxInclusive
 */
export const maxInclusive: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/maxInclusive';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/minInclusive
 */
export const minInclusive: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/minInclusive';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dataStructure
 */
export const dataStructure: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dataStructure';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/udunitsCode
 */
export const udunitsCode: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/udunitsCode';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/uneceCommonCode
 */
export const uneceCommonCode: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/uneceCommonCode';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/conversionMultiplier
 */
export const conversionMultiplier: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/conversionMultiplier';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/conversionMultiplierSN
 */
export const conversionMultiplierSN: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/conversionMultiplierSN';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/conversionOffset
 */
export const conversionOffset: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/conversionOffset';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/conversionOffsetSN
 */
export const conversionOffsetSN: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/conversionOffsetSN';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/siUnitsExpression
 */
export const siUnitsExpression: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/siUnitsExpression';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/acronym
 */
export const acronym: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/acronym';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/code
 */
export const code: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/code';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/currencyNumber
 */
export const currencyNumber: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/currencyNumber';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/dimensionExponent
 */
export const dimensionExponent: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/dimensionExponent';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/fieldCode
 */
export const fieldCode: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/fieldCode';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/guidance
 */
export const guidance: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/guidance';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/hasCitation
 */
export const hasCitation: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/hasCitation';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/isMetricUnit
 */
export const isMetricUnit: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/isMetricUnit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/lowerBound
 */
export const lowerBound: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/lowerBound';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/mathDefinition
 */
export const mathDefinition: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/mathDefinition';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/upperBound
 */
export const upperBound: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/upperBound';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/negativeDeltaLimit
 */
export const negativeDeltaLimit: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/negativeDeltaLimit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/numericValue
 */
export const numericValue: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/numericValue';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/onlineReference
 */
export const onlineReference: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/onlineReference';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/outOfScope
 */
export const outOfScope: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/outOfScope';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/positiveDeltaLimit
 */
export const positiveDeltaLimit: OwlDatatypeProperty = 'http://qudt.org/schema/qudt/positiveDeltaLimit';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Aspect
 */
export const Aspect: OtherIndividual = 'http://qudt.org/schema/qudt/Aspect';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/informativeReference
 */
export const informativeReference: OtherIndividual = 'http://qudt.org/schema/qudt/informativeReference';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/BigEndian
 */
export const BigEndian: OtherIndividual = 'http://qudt.org/schema/qudt/BigEndian';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/BitEncoding
 */
export const BitEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/BitEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/BooleanEncoding
 */
export const BooleanEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/BooleanEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/OctetEncoding
 */
export const OctetEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/OctetEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CT_COUNTABLY-INFINITE
 */
export const CT_COUNTABLY_INFINITE: OtherIndividual = 'http://qudt.org/schema/qudt/CT_COUNTABLY-INFINITE';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CT_FINITE
 */
export const CT_FINITE: OtherIndividual = 'http://qudt.org/schema/qudt/CT_FINITE';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CT_UNCOUNTABLE
 */
export const CT_UNCOUNTABLE: OtherIndividual = 'http://qudt.org/schema/qudt/CT_UNCOUNTABLE';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/CharEncoding
 */
export const CharEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/CharEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Verifiable
 */
export const Verifiable: OtherIndividual = 'http://qudt.org/schema/qudt/Verifiable';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/DoublePrecisionEncoding
 */
export const DoublePrecisionEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/DoublePrecisionEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/EnumeratedQuantity
 */
export const EnumeratedQuantity: OtherIndividual = 'http://qudt.org/schema/qudt/EnumeratedQuantity';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/IEEE754_1985RealEncoding
 */
export const IEEE754_1985RealEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/IEEE754_1985RealEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ISO8601-UTCDateTime-BasicFormat
 */
export const ISO8601_UTCDateTime_BasicFormat: OtherIndividual = 'http://qudt.org/schema/qudt/ISO8601-UTCDateTime-BasicFormat';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/LongUnsignedIntegerEncoding
 */
export const LongUnsignedIntegerEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/LongUnsignedIntegerEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ShortUnsignedIntegerEncoding
 */
export const ShortUnsignedIntegerEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/ShortUnsignedIntegerEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/SignedIntegerEncoding
 */
export const SignedIntegerEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/SignedIntegerEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/UnsignedIntegerEncoding
 */
export const UnsignedIntegerEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/UnsignedIntegerEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/LittleEndian
 */
export const LittleEndian: OtherIndividual = 'http://qudt.org/schema/qudt/LittleEndian';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/Unordered
 */
export const Unordered: OtherIndividual = 'http://qudt.org/schema/qudt/Unordered';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/PartiallyOrdered
 */
export const PartiallyOrdered: OtherIndividual = 'http://qudt.org/schema/qudt/PartiallyOrdered';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/TotallyOrdered
 */
export const TotallyOrdered: OtherIndividual = 'http://qudt.org/schema/qudt/TotallyOrdered';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/SIGNED
 */
export const SIGNED: OtherIndividual = 'http://qudt.org/schema/qudt/SIGNED';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ShortSignedIntegerEncoding
 */
export const ShortSignedIntegerEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/ShortSignedIntegerEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/SinglePrecisionRealEncoding
 */
export const SinglePrecisionRealEncoding: OtherIndividual = 'http://qudt.org/schema/qudt/SinglePrecisionRealEncoding';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/UNSIGNED
 */
export const UNSIGNED: OtherIndividual = 'http://qudt.org/schema/qudt/UNSIGNED';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/example
 */
export const example: OtherIndividual = 'http://qudt.org/schema/qudt/example';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/expression
 */
export const expression: OtherIndividual = 'http://qudt.org/schema/qudt/expression';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ucumCaseInsensitiveCode
 */
export const ucumCaseInsensitiveCode: OtherIndividual = 'http://qudt.org/schema/qudt/ucumCaseInsensitiveCode';

/**
 * 
 * 
 * 
 *
 * http://qudt.org/schema/qudt/ucumCaseSensitiveCode
 */
export const ucumCaseSensitiveCode: OtherIndividual = 'http://qudt.org/schema/qudt/ucumCaseSensitiveCode';

export const _BASE: IriString = 'http://qudt.org/schema/qudt/';
export const _PREFIX: string = 'qudt';