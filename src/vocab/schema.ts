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
 * http://schema.org/source
 */
export const source: Property = 'http://schema.org/source';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contributor
 */
export const contributor: Property = 'http://schema.org/contributor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isPartOf
 */
export const isPartOf: Property = 'http://schema.org/isPartOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/supersededBy
 */
export const supersededBy: Property = 'http://schema.org/supersededBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Property
 */
export const Property: Class = 'http://schema.org/Property';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sameAs
 */
export const sameAs: Property = 'http://schema.org/sameAs';

/**
 * 
 * 
 * 
 *
 * http://schema.org/abridged
 */
export const abridged: Property = 'http://schema.org/abridged';

/**
 * 
 * 
 * 
 *
 * http://schema.org/domainIncludes
 */
export const domainIncludes: Property = 'http://schema.org/domainIncludes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/rangeIncludes
 */
export const rangeIncludes: Property = 'http://schema.org/rangeIncludes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/abstract
 */
export const abstract: Property = 'http://schema.org/abstract';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accelerationTime
 */
export const accelerationTime: Property = 'http://schema.org/accelerationTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/acceptedAnswer
 */
export const acceptedAnswer: Property = 'http://schema.org/acceptedAnswer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/suggestedAnswer
 */
export const suggestedAnswer: Property = 'http://schema.org/suggestedAnswer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/acceptedOffer
 */
export const acceptedOffer: Property = 'http://schema.org/acceptedOffer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/acceptedPaymentMethod
 */
export const acceptedPaymentMethod: Property = 'http://schema.org/acceptedPaymentMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/acceptsReservations
 */
export const acceptsReservations: Property = 'http://schema.org/acceptsReservations';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessCode
 */
export const accessCode: Property = 'http://schema.org/accessCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessMode
 */
export const accessMode: Property = 'http://schema.org/accessMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessModeSufficient
 */
export const accessModeSufficient: Property = 'http://schema.org/accessModeSufficient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessibilityAPI
 */
export const accessibilityAPI: Property = 'http://schema.org/accessibilityAPI';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessibilityControl
 */
export const accessibilityControl: Property = 'http://schema.org/accessibilityControl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessibilityFeature
 */
export const accessibilityFeature: Property = 'http://schema.org/accessibilityFeature';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessibilityHazard
 */
export const accessibilityHazard: Property = 'http://schema.org/accessibilityHazard';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accessibilitySummary
 */
export const accessibilitySummary: Property = 'http://schema.org/accessibilitySummary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accommodationCategory
 */
export const accommodationCategory: Property = 'http://schema.org/accommodationCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/category
 */
export const category: Property = 'http://schema.org/category';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accommodationFloorPlan
 */
export const accommodationFloorPlan: Property = 'http://schema.org/accommodationFloorPlan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accountId
 */
export const accountId: Property = 'http://schema.org/accountId';

/**
 * 
 * 
 * 
 *
 * http://schema.org/identifier
 */
export const identifier: Property = 'http://schema.org/identifier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accountMinimumInflow
 */
export const accountMinimumInflow: Property = 'http://schema.org/accountMinimumInflow';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accountOverdraftLimit
 */
export const accountOverdraftLimit: Property = 'http://schema.org/accountOverdraftLimit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/accountablePerson
 */
export const accountablePerson: Property = 'http://schema.org/accountablePerson';

/**
 * 
 * 
 * 
 *
 * http://schema.org/acquireLicensePage
 */
export const acquireLicensePage: Property = 'http://schema.org/acquireLicensePage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/usageInfo
 */
export const usageInfo: Property = 'http://schema.org/usageInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/acquiredFrom
 */
export const acquiredFrom: Property = 'http://schema.org/acquiredFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/acrissCode
 */
export const acrissCode: Property = 'http://schema.org/acrissCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actionAccessibilityRequirement
 */
export const actionAccessibilityRequirement: Property = 'http://schema.org/actionAccessibilityRequirement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actionPlatform
 */
export const actionPlatform: Property = 'http://schema.org/actionPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actionProcess
 */
export const actionProcess: Property = 'http://schema.org/actionProcess';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actionStatus
 */
export const actionStatus: Property = 'http://schema.org/actionStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actionableFeedbackPolicy
 */
export const actionableFeedbackPolicy: Property = 'http://schema.org/actionableFeedbackPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publishingPrinciples
 */
export const publishingPrinciples: Property = 'http://schema.org/publishingPrinciples';

/**
 * 
 * 
 * 
 *
 * http://schema.org/activeIngredient
 */
export const activeIngredient: Property = 'http://schema.org/activeIngredient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/activityDuration
 */
export const activityDuration: Property = 'http://schema.org/activityDuration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/activityFrequency
 */
export const activityFrequency: Property = 'http://schema.org/activityFrequency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actors
 */
export const actors: Property = 'http://schema.org/actors';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actor
 */
export const actor: Property = 'http://schema.org/actor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/addOn
 */
export const addOn: Property = 'http://schema.org/addOn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/additionalName
 */
export const additionalName: Property = 'http://schema.org/additionalName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/alternateName
 */
export const alternateName: Property = 'http://schema.org/alternateName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/additionalNumberOfGuests
 */
export const additionalNumberOfGuests: Property = 'http://schema.org/additionalNumberOfGuests';

/**
 * 
 * 
 * 
 *
 * http://schema.org/additionalProperty
 */
export const additionalProperty: Property = 'http://schema.org/additionalProperty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/additionalType
 */
export const additionalType: Property = 'http://schema.org/additionalType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/additionalVariable
 */
export const additionalVariable: Property = 'http://schema.org/additionalVariable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/address
 */
export const address: Property = 'http://schema.org/address';

/**
 * 
 * 
 * 
 *
 * http://schema.org/addressCountry
 */
export const addressCountry: Property = 'http://schema.org/addressCountry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/addressLocality
 */
export const addressLocality: Property = 'http://schema.org/addressLocality';

/**
 * 
 * 
 * 
 *
 * http://schema.org/addressRegion
 */
export const addressRegion: Property = 'http://schema.org/addressRegion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/administrationRoute
 */
export const administrationRoute: Property = 'http://schema.org/administrationRoute';

/**
 * 
 * 
 * 
 *
 * http://schema.org/advanceBookingRequirement
 */
export const advanceBookingRequirement: Property = 'http://schema.org/advanceBookingRequirement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/adverseOutcome
 */
export const adverseOutcome: Property = 'http://schema.org/adverseOutcome';

/**
 * 
 * 
 * 
 *
 * http://schema.org/affectedBy
 */
export const affectedBy: Property = 'http://schema.org/affectedBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/affiliation
 */
export const affiliation: Property = 'http://schema.org/affiliation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/memberOf
 */
export const memberOf: Property = 'http://schema.org/memberOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/afterMedia
 */
export const afterMedia: Property = 'http://schema.org/afterMedia';

/**
 * 
 * 
 * 
 *
 * http://schema.org/agent
 */
export const agent: Property = 'http://schema.org/agent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/agentInteractionStatistic
 */
export const agentInteractionStatistic: Property = 'http://schema.org/agentInteractionStatistic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/aggregateElement
 */
export const aggregateElement: Property = 'http://schema.org/aggregateElement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/aggregateRating
 */
export const aggregateRating: Property = 'http://schema.org/aggregateRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/aircraft
 */
export const aircraft: Property = 'http://schema.org/aircraft';

/**
 * 
 * 
 * 
 *
 * http://schema.org/albumProductionType
 */
export const albumProductionType: Property = 'http://schema.org/albumProductionType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/albumReleaseType
 */
export const albumReleaseType: Property = 'http://schema.org/albumReleaseType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/albums
 */
export const albums: Property = 'http://schema.org/albums';

/**
 * 
 * 
 * 
 *
 * http://schema.org/album
 */
export const album: Property = 'http://schema.org/album';

/**
 * 
 * 
 * 
 *
 * http://schema.org/alcoholWarning
 */
export const alcoholWarning: Property = 'http://schema.org/alcoholWarning';

/**
 * 
 * 
 * 
 *
 * http://schema.org/algorithm
 */
export const algorithm: Property = 'http://schema.org/algorithm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/alignmentType
 */
export const alignmentType: Property = 'http://schema.org/alignmentType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/alternativeHeadline
 */
export const alternativeHeadline: Property = 'http://schema.org/alternativeHeadline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/alternativeOf
 */
export const alternativeOf: Property = 'http://schema.org/alternativeOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/amenityFeature
 */
export const amenityFeature: Property = 'http://schema.org/amenityFeature';

/**
 * 
 * 
 * 
 *
 * http://schema.org/amount
 */
export const amount: Property = 'http://schema.org/amount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/amountOfThisGood
 */
export const amountOfThisGood: Property = 'http://schema.org/amountOfThisGood';

/**
 * 
 * 
 * 
 *
 * http://schema.org/announcementLocation
 */
export const announcementLocation: Property = 'http://schema.org/announcementLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/spatialCoverage
 */
export const spatialCoverage: Property = 'http://schema.org/spatialCoverage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/annualPercentageRate
 */
export const annualPercentageRate: Property = 'http://schema.org/annualPercentageRate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/answerCount
 */
export const answerCount: Property = 'http://schema.org/answerCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/answerExplanation
 */
export const answerExplanation: Property = 'http://schema.org/answerExplanation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/antagonist
 */
export const antagonist: Property = 'http://schema.org/antagonist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/appearance
 */
export const appearance: Property = 'http://schema.org/appearance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workExample
 */
export const workExample: Property = 'http://schema.org/workExample';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicableCountry
 */
export const applicableCountry: Property = 'http://schema.org/applicableCountry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicableLocation
 */
export const applicableLocation: Property = 'http://schema.org/applicableLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicantLocationRequirements
 */
export const applicantLocationRequirements: Property = 'http://schema.org/applicantLocationRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/application
 */
export const application: Property = 'http://schema.org/application';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actionApplication
 */
export const actionApplication: Property = 'http://schema.org/actionApplication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicationCategory
 */
export const applicationCategory: Property = 'http://schema.org/applicationCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicationContact
 */
export const applicationContact: Property = 'http://schema.org/applicationContact';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicationDeadline
 */
export const applicationDeadline: Property = 'http://schema.org/applicationDeadline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicationStartDate
 */
export const applicationStartDate: Property = 'http://schema.org/applicationStartDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicationSubCategory
 */
export const applicationSubCategory: Property = 'http://schema.org/applicationSubCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/applicationSuite
 */
export const applicationSuite: Property = 'http://schema.org/applicationSuite';

/**
 * 
 * 
 * 
 *
 * http://schema.org/appliesToDeliveryMethod
 */
export const appliesToDeliveryMethod: Property = 'http://schema.org/appliesToDeliveryMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/appliesToPaymentMethod
 */
export const appliesToPaymentMethod: Property = 'http://schema.org/appliesToPaymentMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/archivedAt
 */
export const archivedAt: Property = 'http://schema.org/archivedAt';

/**
 * 
 * 
 * 
 *
 * http://schema.org/area
 */
export const area: Property = 'http://schema.org/area';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceArea
 */
export const serviceArea: Property = 'http://schema.org/serviceArea';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalAirport
 */
export const arrivalAirport: Property = 'http://schema.org/arrivalAirport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalBoatTerminal
 */
export const arrivalBoatTerminal: Property = 'http://schema.org/arrivalBoatTerminal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalBusStop
 */
export const arrivalBusStop: Property = 'http://schema.org/arrivalBusStop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalGate
 */
export const arrivalGate: Property = 'http://schema.org/arrivalGate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalPlatform
 */
export const arrivalPlatform: Property = 'http://schema.org/arrivalPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalStation
 */
export const arrivalStation: Property = 'http://schema.org/arrivalStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalTerminal
 */
export const arrivalTerminal: Property = 'http://schema.org/arrivalTerminal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arrivalTime
 */
export const arrivalTime: Property = 'http://schema.org/arrivalTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/artEdition
 */
export const artEdition: Property = 'http://schema.org/artEdition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/artMedium
 */
export const artMedium: Property = 'http://schema.org/artMedium';

/**
 * 
 * 
 * 
 *
 * http://schema.org/material
 */
export const material: Property = 'http://schema.org/material';

/**
 * 
 * 
 * 
 *
 * http://schema.org/artform
 */
export const artform: Property = 'http://schema.org/artform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/articleBody
 */
export const articleBody: Property = 'http://schema.org/articleBody';

/**
 * 
 * 
 * 
 *
 * http://schema.org/articleSection
 */
export const articleSection: Property = 'http://schema.org/articleSection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/artist
 */
export const artist: Property = 'http://schema.org/artist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/asin
 */
export const asin: Property = 'http://schema.org/asin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/aspect
 */
export const aspect: Property = 'http://schema.org/aspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mainContentOfPage
 */
export const mainContentOfPage: Property = 'http://schema.org/mainContentOfPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/assembly
 */
export const assembly: Property = 'http://schema.org/assembly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/executableLibraryName
 */
export const executableLibraryName: Property = 'http://schema.org/executableLibraryName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/assemblyVersion
 */
export const assemblyVersion: Property = 'http://schema.org/assemblyVersion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/assesses
 */
export const assesses: Property = 'http://schema.org/assesses';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedAnatomy
 */
export const associatedAnatomy: Property = 'http://schema.org/associatedAnatomy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedArticle
 */
export const associatedArticle: Property = 'http://schema.org/associatedArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedClaimReview
 */
export const associatedClaimReview: Property = 'http://schema.org/associatedClaimReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedReview
 */
export const associatedReview: Property = 'http://schema.org/associatedReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedDisease
 */
export const associatedDisease: Property = 'http://schema.org/associatedDisease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedMedia
 */
export const associatedMedia: Property = 'http://schema.org/associatedMedia';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedMediaReview
 */
export const associatedMediaReview: Property = 'http://schema.org/associatedMediaReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/associatedPathophysiology
 */
export const associatedPathophysiology: Property = 'http://schema.org/associatedPathophysiology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/athlete
 */
export const athlete: Property = 'http://schema.org/athlete';

/**
 * 
 * 
 * 
 *
 * http://schema.org/attendees
 */
export const attendees: Property = 'http://schema.org/attendees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/attendee
 */
export const attendee: Property = 'http://schema.org/attendee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/audienceType
 */
export const audienceType: Property = 'http://schema.org/audienceType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/audio
 */
export const audio: Property = 'http://schema.org/audio';

/**
 * 
 * 
 * 
 *
 * http://schema.org/auditDate
 */
export const auditDate: Property = 'http://schema.org/auditDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/authenticator
 */
export const authenticator: Property = 'http://schema.org/authenticator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/author
 */
export const author: Property = 'http://schema.org/author';

/**
 * 
 * 
 * 
 *
 * http://schema.org/authorizedRepresentative
 */
export const authorizedRepresentative: Property = 'http://schema.org/authorizedRepresentative';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availability
 */
export const availability: Property = 'http://schema.org/availability';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availabilityEnds
 */
export const availabilityEnds: Property = 'http://schema.org/availabilityEnds';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availabilityStarts
 */
export const availabilityStarts: Property = 'http://schema.org/availabilityStarts';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableAtOrFrom
 */
export const availableAtOrFrom: Property = 'http://schema.org/availableAtOrFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/areaServed
 */
export const areaServed: Property = 'http://schema.org/areaServed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableChannel
 */
export const availableChannel: Property = 'http://schema.org/availableChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableDeliveryMethod
 */
export const availableDeliveryMethod: Property = 'http://schema.org/availableDeliveryMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableFrom
 */
export const availableFrom: Property = 'http://schema.org/availableFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableIn
 */
export const availableIn: Property = 'http://schema.org/availableIn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableLanguage
 */
export const availableLanguage: Property = 'http://schema.org/availableLanguage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableService
 */
export const availableService: Property = 'http://schema.org/availableService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableStrength
 */
export const availableStrength: Property = 'http://schema.org/availableStrength';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableTest
 */
export const availableTest: Property = 'http://schema.org/availableTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableThrough
 */
export const availableThrough: Property = 'http://schema.org/availableThrough';

/**
 * 
 * 
 * 
 *
 * http://schema.org/awards
 */
export const awards: Property = 'http://schema.org/awards';

/**
 * 
 * 
 * 
 *
 * http://schema.org/award
 */
export const award: Property = 'http://schema.org/award';

/**
 * 
 * 
 * 
 *
 * http://schema.org/awayTeam
 */
export const awayTeam: Property = 'http://schema.org/awayTeam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/competitor
 */
export const competitor: Property = 'http://schema.org/competitor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/backstory
 */
export const backstory: Property = 'http://schema.org/backstory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bankAccountType
 */
export const bankAccountType: Property = 'http://schema.org/bankAccountType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/baseSalary
 */
export const baseSalary: Property = 'http://schema.org/baseSalary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bccRecipient
 */
export const bccRecipient: Property = 'http://schema.org/bccRecipient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recipient
 */
export const recipient: Property = 'http://schema.org/recipient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bed
 */
export const bed: Property = 'http://schema.org/bed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/beforeMedia
 */
export const beforeMedia: Property = 'http://schema.org/beforeMedia';

/**
 * 
 * 
 * 
 *
 * http://schema.org/beneficiaryBank
 */
export const beneficiaryBank: Property = 'http://schema.org/beneficiaryBank';

/**
 * 
 * 
 * 
 *
 * http://schema.org/benefits
 */
export const benefits: Property = 'http://schema.org/benefits';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jobBenefits
 */
export const jobBenefits: Property = 'http://schema.org/jobBenefits';

/**
 * 
 * 
 * 
 *
 * http://schema.org/benefitsSummaryUrl
 */
export const benefitsSummaryUrl: Property = 'http://schema.org/benefitsSummaryUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bestRating
 */
export const bestRating: Property = 'http://schema.org/bestRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/billingAddress
 */
export const billingAddress: Property = 'http://schema.org/billingAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/billingDuration
 */
export const billingDuration: Property = 'http://schema.org/billingDuration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/billingIncrement
 */
export const billingIncrement: Property = 'http://schema.org/billingIncrement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/billingPeriod
 */
export const billingPeriod: Property = 'http://schema.org/billingPeriod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/billingStart
 */
export const billingStart: Property = 'http://schema.org/billingStart';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bioChemInteraction
 */
export const bioChemInteraction: Property = 'http://schema.org/bioChemInteraction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bioChemSimilarity
 */
export const bioChemSimilarity: Property = 'http://schema.org/bioChemSimilarity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/biologicalRole
 */
export const biologicalRole: Property = 'http://schema.org/biologicalRole';

/**
 * 
 * 
 * 
 *
 * http://schema.org/biomechnicalClass
 */
export const biomechnicalClass: Property = 'http://schema.org/biomechnicalClass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/birthDate
 */
export const birthDate: Property = 'http://schema.org/birthDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/birthPlace
 */
export const birthPlace: Property = 'http://schema.org/birthPlace';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bitrate
 */
export const bitrate: Property = 'http://schema.org/bitrate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/blogPosts
 */
export const blogPosts: Property = 'http://schema.org/blogPosts';

/**
 * 
 * 
 * 
 *
 * http://schema.org/blogPost
 */
export const blogPost: Property = 'http://schema.org/blogPost';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bloodSupply
 */
export const bloodSupply: Property = 'http://schema.org/bloodSupply';

/**
 * 
 * 
 * 
 *
 * http://schema.org/boardingGroup
 */
export const boardingGroup: Property = 'http://schema.org/boardingGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/boardingPolicy
 */
export const boardingPolicy: Property = 'http://schema.org/boardingPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bodyLocation
 */
export const bodyLocation: Property = 'http://schema.org/bodyLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bodyType
 */
export const bodyType: Property = 'http://schema.org/bodyType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bookEdition
 */
export const bookEdition: Property = 'http://schema.org/bookEdition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bookFormat
 */
export const bookFormat: Property = 'http://schema.org/bookFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bookingAgent
 */
export const bookingAgent: Property = 'http://schema.org/bookingAgent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broker
 */
export const broker: Property = 'http://schema.org/broker';

/**
 * 
 * 
 * 
 *
 * http://schema.org/bookingTime
 */
export const bookingTime: Property = 'http://schema.org/bookingTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/borrower
 */
export const borrower: Property = 'http://schema.org/borrower';

/**
 * 
 * 
 * 
 *
 * http://schema.org/participant
 */
export const participant: Property = 'http://schema.org/participant';

/**
 * 
 * 
 * 
 *
 * http://schema.org/box
 */
export const box: Property = 'http://schema.org/box';

/**
 * 
 * 
 * 
 *
 * http://schema.org/branch
 */
export const branch: Property = 'http://schema.org/branch';

/**
 * 
 * 
 * 
 *
 * http://schema.org/arterialBranch
 */
export const arterialBranch: Property = 'http://schema.org/arterialBranch';

/**
 * 
 * 
 * 
 *
 * http://schema.org/branchCode
 */
export const branchCode: Property = 'http://schema.org/branchCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/branchOf
 */
export const branchOf: Property = 'http://schema.org/branchOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/parentOrganization
 */
export const parentOrganization: Property = 'http://schema.org/parentOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/brand
 */
export const brand: Property = 'http://schema.org/brand';

/**
 * 
 * 
 * 
 *
 * http://schema.org/breadcrumb
 */
export const breadcrumb: Property = 'http://schema.org/breadcrumb';

/**
 * 
 * 
 * 
 *
 * http://schema.org/breastfeedingWarning
 */
export const breastfeedingWarning: Property = 'http://schema.org/breastfeedingWarning';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastAffiliateOf
 */
export const broadcastAffiliateOf: Property = 'http://schema.org/broadcastAffiliateOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastChannelId
 */
export const broadcastChannelId: Property = 'http://schema.org/broadcastChannelId';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastDisplayName
 */
export const broadcastDisplayName: Property = 'http://schema.org/broadcastDisplayName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastFrequency
 */
export const broadcastFrequency: Property = 'http://schema.org/broadcastFrequency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastFrequencyValue
 */
export const broadcastFrequencyValue: Property = 'http://schema.org/broadcastFrequencyValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastOfEvent
 */
export const broadcastOfEvent: Property = 'http://schema.org/broadcastOfEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastServiceTier
 */
export const broadcastServiceTier: Property = 'http://schema.org/broadcastServiceTier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastSignalModulation
 */
export const broadcastSignalModulation: Property = 'http://schema.org/broadcastSignalModulation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastSubChannel
 */
export const broadcastSubChannel: Property = 'http://schema.org/broadcastSubChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcastTimezone
 */
export const broadcastTimezone: Property = 'http://schema.org/broadcastTimezone';

/**
 * 
 * 
 * 
 *
 * http://schema.org/broadcaster
 */
export const broadcaster: Property = 'http://schema.org/broadcaster';

/**
 * 
 * 
 * 
 *
 * http://schema.org/browserRequirements
 */
export const browserRequirements: Property = 'http://schema.org/browserRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/busName
 */
export const busName: Property = 'http://schema.org/busName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/busNumber
 */
export const busNumber: Property = 'http://schema.org/busNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/businessDays
 */
export const businessDays: Property = 'http://schema.org/businessDays';

/**
 * 
 * 
 * 
 *
 * http://schema.org/businessFunction
 */
export const businessFunction: Property = 'http://schema.org/businessFunction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/buyer
 */
export const buyer: Property = 'http://schema.org/buyer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/byArtist
 */
export const byArtist: Property = 'http://schema.org/byArtist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/byDay
 */
export const byDay: Property = 'http://schema.org/byDay';

/**
 * 
 * 
 * 
 *
 * http://schema.org/byMonth
 */
export const byMonth: Property = 'http://schema.org/byMonth';

/**
 * 
 * 
 * 
 *
 * http://schema.org/byMonthDay
 */
export const byMonthDay: Property = 'http://schema.org/byMonthDay';

/**
 * 
 * 
 * 
 *
 * http://schema.org/byMonthWeek
 */
export const byMonthWeek: Property = 'http://schema.org/byMonthWeek';

/**
 * 
 * 
 * 
 *
 * http://schema.org/callSign
 */
export const callSign: Property = 'http://schema.org/callSign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/calories
 */
export const calories: Property = 'http://schema.org/calories';

/**
 * 
 * 
 * 
 *
 * http://schema.org/candidate
 */
export const candidate: Property = 'http://schema.org/candidate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/object
 */
export const object: Property = 'http://schema.org/object';

/**
 * 
 * 
 * 
 *
 * http://schema.org/carbohydrateContent
 */
export const carbohydrateContent: Property = 'http://schema.org/carbohydrateContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cargoVolume
 */
export const cargoVolume: Property = 'http://schema.org/cargoVolume';

/**
 * 
 * 
 * 
 *
 * http://schema.org/carrier
 */
export const carrier: Property = 'http://schema.org/carrier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/provider
 */
export const provider: Property = 'http://schema.org/provider';

/**
 * 
 * 
 * 
 *
 * http://schema.org/carrierRequirements
 */
export const carrierRequirements: Property = 'http://schema.org/carrierRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cashBack
 */
export const cashBack: Property = 'http://schema.org/cashBack';

/**
 * 
 * 
 * 
 *
 * http://schema.org/catalog
 */
export const catalog: Property = 'http://schema.org/catalog';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includedInDataCatalog
 */
export const includedInDataCatalog: Property = 'http://schema.org/includedInDataCatalog';

/**
 * 
 * 
 * 
 *
 * http://schema.org/catalogNumber
 */
export const catalogNumber: Property = 'http://schema.org/catalogNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ccRecipient
 */
export const ccRecipient: Property = 'http://schema.org/ccRecipient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/certificationIdentification
 */
export const certificationIdentification: Property = 'http://schema.org/certificationIdentification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/certificationRating
 */
export const certificationRating: Property = 'http://schema.org/certificationRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/certificationStatus
 */
export const certificationStatus: Property = 'http://schema.org/certificationStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/character
 */
export const character: Property = 'http://schema.org/character';

/**
 * 
 * 
 * 
 *
 * http://schema.org/characterAttribute
 */
export const characterAttribute: Property = 'http://schema.org/characterAttribute';

/**
 * 
 * 
 * 
 *
 * http://schema.org/characterName
 */
export const characterName: Property = 'http://schema.org/characterName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cheatCode
 */
export const cheatCode: Property = 'http://schema.org/cheatCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/checkinTime
 */
export const checkinTime: Property = 'http://schema.org/checkinTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/checkoutPageURLTemplate
 */
export const checkoutPageURLTemplate: Property = 'http://schema.org/checkoutPageURLTemplate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/checkoutTime
 */
export const checkoutTime: Property = 'http://schema.org/checkoutTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/chemicalComposition
 */
export const chemicalComposition: Property = 'http://schema.org/chemicalComposition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/chemicalRole
 */
export const chemicalRole: Property = 'http://schema.org/chemicalRole';

/**
 * 
 * 
 * 
 *
 * http://schema.org/childMaxAge
 */
export const childMaxAge: Property = 'http://schema.org/childMaxAge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/childMinAge
 */
export const childMinAge: Property = 'http://schema.org/childMinAge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/children
 */
export const children: Property = 'http://schema.org/children';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cholesterolContent
 */
export const cholesterolContent: Property = 'http://schema.org/cholesterolContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/circle
 */
export const circle: Property = 'http://schema.org/circle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/citation
 */
export const citation: Property = 'http://schema.org/citation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/claimInterpreter
 */
export const claimInterpreter: Property = 'http://schema.org/claimInterpreter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/claimReviewed
 */
export const claimReviewed: Property = 'http://schema.org/claimReviewed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/clincalPharmacology
 */
export const clincalPharmacology: Property = 'http://schema.org/clincalPharmacology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/clinicalPharmacology
 */
export const clinicalPharmacology: Property = 'http://schema.org/clinicalPharmacology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/clipNumber
 */
export const clipNumber: Property = 'http://schema.org/clipNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/position
 */
export const position: Property = 'http://schema.org/position';

/**
 * 
 * 
 * 
 *
 * http://schema.org/closes
 */
export const closes: Property = 'http://schema.org/closes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/coach
 */
export const coach: Property = 'http://schema.org/coach';

/**
 * 
 * 
 * 
 *
 * http://schema.org/code
 */
export const code: Property = 'http://schema.org/code';

/**
 * 
 * 
 * 
 *
 * http://schema.org/codeRepository
 */
export const codeRepository: Property = 'http://schema.org/codeRepository';

/**
 * 
 * 
 * 
 *
 * http://schema.org/codeValue
 */
export const codeValue: Property = 'http://schema.org/codeValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/termCode
 */
export const termCode: Property = 'http://schema.org/termCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/codingSystem
 */
export const codingSystem: Property = 'http://schema.org/codingSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/colleagues
 */
export const colleagues: Property = 'http://schema.org/colleagues';

/**
 * 
 * 
 * 
 *
 * http://schema.org/colleague
 */
export const colleague: Property = 'http://schema.org/colleague';

/**
 * 
 * 
 * 
 *
 * http://schema.org/collection
 */
export const collection: Property = 'http://schema.org/collection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/targetCollection
 */
export const targetCollection: Property = 'http://schema.org/targetCollection';

/**
 * collectionSize
 * 
 * The number of items in the [[Collection]].
 *
 * http://schema.org/collectionSize
 */
export const collectionSize: Property = 'http://schema.org/collectionSize';

/**
 * 
 * 
 * 
 *
 * http://schema.org/color
 */
export const color: Property = 'http://schema.org/color';

/**
 * 
 * 
 * 
 *
 * http://schema.org/colorSwatch
 */
export const colorSwatch: Property = 'http://schema.org/colorSwatch';

/**
 * 
 * 
 * 
 *
 * http://schema.org/image
 */
export const image: Property = 'http://schema.org/image';

/**
 * 
 * 
 * 
 *
 * http://schema.org/colorist
 */
export const colorist: Property = 'http://schema.org/colorist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/comment
 */
export const comment: Property = 'http://schema.org/comment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/commentCount
 */
export const commentCount: Property = 'http://schema.org/commentCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/commentText
 */
export const commentText: Property = 'http://schema.org/commentText';

/**
 * 
 * 
 * 
 *
 * http://schema.org/commentTime
 */
export const commentTime: Property = 'http://schema.org/commentTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/companyRegistration
 */
export const companyRegistration: Property = 'http://schema.org/companyRegistration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/competencyRequired
 */
export const competencyRequired: Property = 'http://schema.org/competencyRequired';

/**
 * 
 * 
 * 
 *
 * http://schema.org/composer
 */
export const composer: Property = 'http://schema.org/composer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/comprisedOf
 */
export const comprisedOf: Property = 'http://schema.org/comprisedOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/conditionsOfAccess
 */
export const conditionsOfAccess: Property = 'http://schema.org/conditionsOfAccess';

/**
 * 
 * 
 * 
 *
 * http://schema.org/confirmationNumber
 */
export const confirmationNumber: Property = 'http://schema.org/confirmationNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/connectedTo
 */
export const connectedTo: Property = 'http://schema.org/connectedTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/constraintProperty
 */
export const constraintProperty: Property = 'http://schema.org/constraintProperty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/consumerNotice
 */
export const consumerNotice: Property = 'http://schema.org/consumerNotice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contactOption
 */
export const contactOption: Property = 'http://schema.org/contactOption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contactPoints
 */
export const contactPoints: Property = 'http://schema.org/contactPoints';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contactPoint
 */
export const contactPoint: Property = 'http://schema.org/contactPoint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contactType
 */
export const contactType: Property = 'http://schema.org/contactType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contactlessPayment
 */
export const contactlessPayment: Property = 'http://schema.org/contactlessPayment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/containedIn
 */
export const containedIn: Property = 'http://schema.org/containedIn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/containedInPlace
 */
export const containedInPlace: Property = 'http://schema.org/containedInPlace';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contentRating
 */
export const contentRating: Property = 'http://schema.org/contentRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contentReferenceTime
 */
export const contentReferenceTime: Property = 'http://schema.org/contentReferenceTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contentSize
 */
export const contentSize: Property = 'http://schema.org/contentSize';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contentType
 */
export const contentType: Property = 'http://schema.org/contentType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contentUrl
 */
export const contentUrl: Property = 'http://schema.org/contentUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contraindication
 */
export const contraindication: Property = 'http://schema.org/contraindication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cookTime
 */
export const cookTime: Property = 'http://schema.org/cookTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/performTime
 */
export const performTime: Property = 'http://schema.org/performTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cookingMethod
 */
export const cookingMethod: Property = 'http://schema.org/cookingMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/copyrightHolder
 */
export const copyrightHolder: Property = 'http://schema.org/copyrightHolder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/copyrightNotice
 */
export const copyrightNotice: Property = 'http://schema.org/copyrightNotice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/copyrightYear
 */
export const copyrightYear: Property = 'http://schema.org/copyrightYear';

/**
 * 
 * 
 * 
 *
 * http://schema.org/correction
 */
export const correction: Property = 'http://schema.org/correction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/correctionsPolicy
 */
export const correctionsPolicy: Property = 'http://schema.org/correctionsPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/costCategory
 */
export const costCategory: Property = 'http://schema.org/costCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/costCurrency
 */
export const costCurrency: Property = 'http://schema.org/costCurrency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/costOrigin
 */
export const costOrigin: Property = 'http://schema.org/costOrigin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/costPerUnit
 */
export const costPerUnit: Property = 'http://schema.org/costPerUnit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/countriesNotSupported
 */
export const countriesNotSupported: Property = 'http://schema.org/countriesNotSupported';

/**
 * 
 * 
 * 
 *
 * http://schema.org/countriesSupported
 */
export const countriesSupported: Property = 'http://schema.org/countriesSupported';

/**
 * 
 * 
 * 
 *
 * http://schema.org/countryOfAssembly
 */
export const countryOfAssembly: Property = 'http://schema.org/countryOfAssembly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/countryOfLastProcessing
 */
export const countryOfLastProcessing: Property = 'http://schema.org/countryOfLastProcessing';

/**
 * 
 * 
 * 
 *
 * http://schema.org/countryOfOrigin
 */
export const countryOfOrigin: Property = 'http://schema.org/countryOfOrigin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/course
 */
export const course: Property = 'http://schema.org/course';

/**
 * 
 * 
 * 
 *
 * http://schema.org/location
 */
export const location: Property = 'http://schema.org/location';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exerciseCourse
 */
export const exerciseCourse: Property = 'http://schema.org/exerciseCourse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/courseCode
 */
export const courseCode: Property = 'http://schema.org/courseCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/courseMode
 */
export const courseMode: Property = 'http://schema.org/courseMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/coursePrerequisites
 */
export const coursePrerequisites: Property = 'http://schema.org/coursePrerequisites';

/**
 * 
 * 
 * 
 *
 * http://schema.org/courseSchedule
 */
export const courseSchedule: Property = 'http://schema.org/courseSchedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/courseWorkload
 */
export const courseWorkload: Property = 'http://schema.org/courseWorkload';

/**
 * 
 * 
 * 
 *
 * http://schema.org/coverageEndTime
 */
export const coverageEndTime: Property = 'http://schema.org/coverageEndTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/coverageStartTime
 */
export const coverageStartTime: Property = 'http://schema.org/coverageStartTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/creativeWorkStatus
 */
export const creativeWorkStatus: Property = 'http://schema.org/creativeWorkStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/credentialCategory
 */
export const credentialCategory: Property = 'http://schema.org/credentialCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/creditText
 */
export const creditText: Property = 'http://schema.org/creditText';

/**
 * 
 * 
 * 
 *
 * http://schema.org/creditedTo
 */
export const creditedTo: Property = 'http://schema.org/creditedTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cssSelector
 */
export const cssSelector: Property = 'http://schema.org/cssSelector';

/**
 * 
 * 
 * 
 *
 * http://schema.org/currenciesAccepted
 */
export const currenciesAccepted: Property = 'http://schema.org/currenciesAccepted';

/**
 * 
 * 
 * 
 *
 * http://schema.org/currency
 */
export const currency: Property = 'http://schema.org/currency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/currentExchangeRate
 */
export const currentExchangeRate: Property = 'http://schema.org/currentExchangeRate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/customer
 */
export const customer: Property = 'http://schema.org/customer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/customerRemorseReturnFees
 */
export const customerRemorseReturnFees: Property = 'http://schema.org/customerRemorseReturnFees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/customerRemorseReturnLabelSource
 */
export const customerRemorseReturnLabelSource: Property = 'http://schema.org/customerRemorseReturnLabelSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/customerRemorseReturnShippingFeesAmount
 */
export const customerRemorseReturnShippingFeesAmount: Property = 'http://schema.org/customerRemorseReturnShippingFeesAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cutoffTime
 */
export const cutoffTime: Property = 'http://schema.org/cutoffTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdCollectionDate
 */
export const cvdCollectionDate: Property = 'http://schema.org/cvdCollectionDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdFacilityCounty
 */
export const cvdFacilityCounty: Property = 'http://schema.org/cvdFacilityCounty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdFacilityId
 */
export const cvdFacilityId: Property = 'http://schema.org/cvdFacilityId';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumBeds
 */
export const cvdNumBeds: Property = 'http://schema.org/cvdNumBeds';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumBedsOcc
 */
export const cvdNumBedsOcc: Property = 'http://schema.org/cvdNumBedsOcc';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumC19Died
 */
export const cvdNumC19Died: Property = 'http://schema.org/cvdNumC19Died';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumC19HOPats
 */
export const cvdNumC19HOPats: Property = 'http://schema.org/cvdNumC19HOPats';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumC19HospPats
 */
export const cvdNumC19HospPats: Property = 'http://schema.org/cvdNumC19HospPats';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumC19MechVentPats
 */
export const cvdNumC19MechVentPats: Property = 'http://schema.org/cvdNumC19MechVentPats';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumC19OFMechVentPats
 */
export const cvdNumC19OFMechVentPats: Property = 'http://schema.org/cvdNumC19OFMechVentPats';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumC19OverflowPats
 */
export const cvdNumC19OverflowPats: Property = 'http://schema.org/cvdNumC19OverflowPats';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumICUBeds
 */
export const cvdNumICUBeds: Property = 'http://schema.org/cvdNumICUBeds';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumICUBedsOcc
 */
export const cvdNumICUBedsOcc: Property = 'http://schema.org/cvdNumICUBedsOcc';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumTotBeds
 */
export const cvdNumTotBeds: Property = 'http://schema.org/cvdNumTotBeds';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumVent
 */
export const cvdNumVent: Property = 'http://schema.org/cvdNumVent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cvdNumVentUse
 */
export const cvdNumVentUse: Property = 'http://schema.org/cvdNumVentUse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/data
 */
export const data: Property = 'http://schema.org/data';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dataFeedElement
 */
export const dataFeedElement: Property = 'http://schema.org/dataFeedElement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/datasetTimeInterval
 */
export const datasetTimeInterval: Property = 'http://schema.org/datasetTimeInterval';

/**
 * 
 * 
 * 
 *
 * http://schema.org/temporalCoverage
 */
export const temporalCoverage: Property = 'http://schema.org/temporalCoverage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateDeleted
 */
export const dateDeleted: Property = 'http://schema.org/dateDeleted';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateIssued
 */
export const dateIssued: Property = 'http://schema.org/dateIssued';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateModified
 */
export const dateModified: Property = 'http://schema.org/dateModified';

/**
 * 
 * 
 * 
 *
 * http://schema.org/datePosted
 */
export const datePosted: Property = 'http://schema.org/datePosted';

/**
 * 
 * 
 * 
 *
 * http://schema.org/datePublished
 */
export const datePublished: Property = 'http://schema.org/datePublished';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateRead
 */
export const dateRead: Property = 'http://schema.org/dateRead';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateReceived
 */
export const dateReceived: Property = 'http://schema.org/dateReceived';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateSent
 */
export const dateSent: Property = 'http://schema.org/dateSent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateVehicleFirstRegistered
 */
export const dateVehicleFirstRegistered: Property = 'http://schema.org/dateVehicleFirstRegistered';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateline
 */
export const dateline: Property = 'http://schema.org/dateline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dayOfWeek
 */
export const dayOfWeek: Property = 'http://schema.org/dayOfWeek';

/**
 * 
 * 
 * 
 *
 * http://schema.org/deathDate
 */
export const deathDate: Property = 'http://schema.org/deathDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/deathPlace
 */
export const deathPlace: Property = 'http://schema.org/deathPlace';

/**
 * 
 * 
 * 
 *
 * http://schema.org/defaultValue
 */
export const defaultValue: Property = 'http://schema.org/defaultValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/deliveryAddress
 */
export const deliveryAddress: Property = 'http://schema.org/deliveryAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/deliveryLeadTime
 */
export const deliveryLeadTime: Property = 'http://schema.org/deliveryLeadTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/deliveryMethod
 */
export const deliveryMethod: Property = 'http://schema.org/deliveryMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/instrument
 */
export const instrument: Property = 'http://schema.org/instrument';

/**
 * 
 * 
 * 
 *
 * http://schema.org/deliveryStatus
 */
export const deliveryStatus: Property = 'http://schema.org/deliveryStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/deliveryTime
 */
export const deliveryTime: Property = 'http://schema.org/deliveryTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/department
 */
export const department: Property = 'http://schema.org/department';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departureAirport
 */
export const departureAirport: Property = 'http://schema.org/departureAirport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departureBoatTerminal
 */
export const departureBoatTerminal: Property = 'http://schema.org/departureBoatTerminal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departureBusStop
 */
export const departureBusStop: Property = 'http://schema.org/departureBusStop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departureGate
 */
export const departureGate: Property = 'http://schema.org/departureGate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departurePlatform
 */
export const departurePlatform: Property = 'http://schema.org/departurePlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departureStation
 */
export const departureStation: Property = 'http://schema.org/departureStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departureTerminal
 */
export const departureTerminal: Property = 'http://schema.org/departureTerminal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/departureTime
 */
export const departureTime: Property = 'http://schema.org/departureTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dependencies
 */
export const dependencies: Property = 'http://schema.org/dependencies';

/**
 * 
 * 
 * 
 *
 * http://schema.org/depth
 */
export const depth: Property = 'http://schema.org/depth';

/**
 * 
 * 
 * 
 *
 * http://schema.org/device
 */
export const device: Property = 'http://schema.org/device';

/**
 * 
 * 
 * 
 *
 * http://schema.org/availableOnDevice
 */
export const availableOnDevice: Property = 'http://schema.org/availableOnDevice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/diagnosis
 */
export const diagnosis: Property = 'http://schema.org/diagnosis';

/**
 * 
 * 
 * 
 *
 * http://schema.org/diagram
 */
export const diagram: Property = 'http://schema.org/diagram';

/**
 * 
 * 
 * 
 *
 * http://schema.org/diet
 */
export const diet: Property = 'http://schema.org/diet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dietFeatures
 */
export const dietFeatures: Property = 'http://schema.org/dietFeatures';

/**
 * 
 * 
 * 
 *
 * http://schema.org/differentialDiagnosis
 */
export const differentialDiagnosis: Property = 'http://schema.org/differentialDiagnosis';

/**
 * 
 * 
 * 
 *
 * http://schema.org/digitalSourceType
 */
export const digitalSourceType: Property = 'http://schema.org/digitalSourceType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/directApply
 */
export const directApply: Property = 'http://schema.org/directApply';

/**
 * 
 * 
 * 
 *
 * http://schema.org/directors
 */
export const directors: Property = 'http://schema.org/directors';

/**
 * 
 * 
 * 
 *
 * http://schema.org/director
 */
export const director: Property = 'http://schema.org/director';

/**
 * 
 * 
 * 
 *
 * http://schema.org/disambiguatingDescription
 */
export const disambiguatingDescription: Property = 'http://schema.org/disambiguatingDescription';

/**
 * 
 * 
 * 
 *
 * http://schema.org/description
 */
export const description: Property = 'http://schema.org/description';

/**
 * 
 * 
 * 
 *
 * http://schema.org/discount
 */
export const discount: Property = 'http://schema.org/discount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/discountCode
 */
export const discountCode: Property = 'http://schema.org/discountCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/discountCurrency
 */
export const discountCurrency: Property = 'http://schema.org/discountCurrency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/discusses
 */
export const discusses: Property = 'http://schema.org/discusses';

/**
 * 
 * 
 * 
 *
 * http://schema.org/discussionUrl
 */
export const discussionUrl: Property = 'http://schema.org/discussionUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/diseasePreventionInfo
 */
export const diseasePreventionInfo: Property = 'http://schema.org/diseasePreventionInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/diseaseSpreadStatistics
 */
export const diseaseSpreadStatistics: Property = 'http://schema.org/diseaseSpreadStatistics';

/**
 * 
 * 
 * 
 *
 * http://schema.org/displayLocation
 */
export const displayLocation: Property = 'http://schema.org/displayLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dissolutionDate
 */
export const dissolutionDate: Property = 'http://schema.org/dissolutionDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/distance
 */
export const distance: Property = 'http://schema.org/distance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/distinguishingSign
 */
export const distinguishingSign: Property = 'http://schema.org/distinguishingSign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/distribution
 */
export const distribution: Property = 'http://schema.org/distribution';

/**
 * 
 * 
 * 
 *
 * http://schema.org/diversityPolicy
 */
export const diversityPolicy: Property = 'http://schema.org/diversityPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/diversityStaffingReport
 */
export const diversityStaffingReport: Property = 'http://schema.org/diversityStaffingReport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/documentation
 */
export const documentation: Property = 'http://schema.org/documentation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/doesNotShip
 */
export const doesNotShip: Property = 'http://schema.org/doesNotShip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/domiciledMortgage
 */
export const domiciledMortgage: Property = 'http://schema.org/domiciledMortgage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/doorTime
 */
export const doorTime: Property = 'http://schema.org/doorTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dosageForm
 */
export const dosageForm: Property = 'http://schema.org/dosageForm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/doseSchedule
 */
export const doseSchedule: Property = 'http://schema.org/doseSchedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/doseUnit
 */
export const doseUnit: Property = 'http://schema.org/doseUnit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/doseValue
 */
export const doseValue: Property = 'http://schema.org/doseValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/downPayment
 */
export const downPayment: Property = 'http://schema.org/downPayment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/downloadUrl
 */
export const downloadUrl: Property = 'http://schema.org/downloadUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/downvoteCount
 */
export const downvoteCount: Property = 'http://schema.org/downvoteCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/drainsTo
 */
export const drainsTo: Property = 'http://schema.org/drainsTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/driveWheelConfiguration
 */
export const driveWheelConfiguration: Property = 'http://schema.org/driveWheelConfiguration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dropoffLocation
 */
export const dropoffLocation: Property = 'http://schema.org/dropoffLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dropoffTime
 */
export const dropoffTime: Property = 'http://schema.org/dropoffTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/drug
 */
export const drug: Property = 'http://schema.org/drug';

/**
 * 
 * 
 * 
 *
 * http://schema.org/drugClass
 */
export const drugClass: Property = 'http://schema.org/drugClass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/drugUnit
 */
export const drugUnit: Property = 'http://schema.org/drugUnit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/duns
 */
export const duns: Property = 'http://schema.org/duns';

/**
 * 
 * 
 * 
 *
 * http://schema.org/duplicateTherapy
 */
export const duplicateTherapy: Property = 'http://schema.org/duplicateTherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/durationOfWarranty
 */
export const durationOfWarranty: Property = 'http://schema.org/durationOfWarranty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/duration
 */
export const duration: Property = 'http://schema.org/duration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/duringMedia
 */
export const duringMedia: Property = 'http://schema.org/duringMedia';

/**
 * 
 * 
 * 
 *
 * http://schema.org/earlyPrepaymentPenalty
 */
export const earlyPrepaymentPenalty: Property = 'http://schema.org/earlyPrepaymentPenalty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/editEIDR
 */
export const editEIDR: Property = 'http://schema.org/editEIDR';

/**
 * 
 * 
 * 
 *
 * http://schema.org/editor
 */
export const editor: Property = 'http://schema.org/editor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eduQuestionType
 */
export const eduQuestionType: Property = 'http://schema.org/eduQuestionType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationRequirements
 */
export const educationRequirements: Property = 'http://schema.org/educationRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationalAlignment
 */
export const educationalAlignment: Property = 'http://schema.org/educationalAlignment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationalCredentialAwarded
 */
export const educationalCredentialAwarded: Property = 'http://schema.org/educationalCredentialAwarded';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationalFramework
 */
export const educationalFramework: Property = 'http://schema.org/educationalFramework';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationalLevel
 */
export const educationalLevel: Property = 'http://schema.org/educationalLevel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationalProgramMode
 */
export const educationalProgramMode: Property = 'http://schema.org/educationalProgramMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationalRole
 */
export const educationalRole: Property = 'http://schema.org/educationalRole';

/**
 * 
 * 
 * 
 *
 * http://schema.org/educationalUse
 */
export const educationalUse: Property = 'http://schema.org/educationalUse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/elevation
 */
export const elevation: Property = 'http://schema.org/elevation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eligibilityToWorkRequirement
 */
export const eligibilityToWorkRequirement: Property = 'http://schema.org/eligibilityToWorkRequirement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eligibleCustomerType
 */
export const eligibleCustomerType: Property = 'http://schema.org/eligibleCustomerType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eligibleDuration
 */
export const eligibleDuration: Property = 'http://schema.org/eligibleDuration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eligibleQuantity
 */
export const eligibleQuantity: Property = 'http://schema.org/eligibleQuantity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eligibleRegion
 */
export const eligibleRegion: Property = 'http://schema.org/eligibleRegion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eligibleTransactionVolume
 */
export const eligibleTransactionVolume: Property = 'http://schema.org/eligibleTransactionVolume';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eligibleWithSupplier
 */
export const eligibleWithSupplier: Property = 'http://schema.org/eligibleWithSupplier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/email
 */
export const email: Property = 'http://schema.org/email';

/**
 * 
 * 
 * 
 *
 * http://schema.org/embedUrl
 */
export const embedUrl: Property = 'http://schema.org/embedUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/embeddedTextCaption
 */
export const embeddedTextCaption: Property = 'http://schema.org/embeddedTextCaption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/caption
 */
export const caption: Property = 'http://schema.org/caption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/emissionsCO2
 */
export const emissionsCO2: Property = 'http://schema.org/emissionsCO2';

/**
 * 
 * 
 * 
 *
 * http://schema.org/employees
 */
export const employees: Property = 'http://schema.org/employees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/employee
 */
export const employee: Property = 'http://schema.org/employee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/employerOverview
 */
export const employerOverview: Property = 'http://schema.org/employerOverview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/employmentType
 */
export const employmentType: Property = 'http://schema.org/employmentType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/employmentUnit
 */
export const employmentUnit: Property = 'http://schema.org/employmentUnit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/encodingType
 */
export const encodingType: Property = 'http://schema.org/encodingType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/encodings
 */
export const encodings: Property = 'http://schema.org/encodings';

/**
 * 
 * 
 * 
 *
 * http://schema.org/encoding
 */
export const encoding: Property = 'http://schema.org/encoding';

/**
 * 
 * 
 * 
 *
 * http://schema.org/endOffset
 */
export const endOffset: Property = 'http://schema.org/endOffset';

/**
 * 
 * 
 * 
 *
 * http://schema.org/endTime
 */
export const endTime: Property = 'http://schema.org/endTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/endorsee
 */
export const endorsee: Property = 'http://schema.org/endorsee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/endorsers
 */
export const endorsers: Property = 'http://schema.org/endorsers';

/**
 * 
 * 
 * 
 *
 * http://schema.org/energyEfficiencyScaleMax
 */
export const energyEfficiencyScaleMax: Property = 'http://schema.org/energyEfficiencyScaleMax';

/**
 * 
 * 
 * 
 *
 * http://schema.org/energyEfficiencyScaleMin
 */
export const energyEfficiencyScaleMin: Property = 'http://schema.org/energyEfficiencyScaleMin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/engineDisplacement
 */
export const engineDisplacement: Property = 'http://schema.org/engineDisplacement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/enginePower
 */
export const enginePower: Property = 'http://schema.org/enginePower';

/**
 * 
 * 
 * 
 *
 * http://schema.org/engineType
 */
export const engineType: Property = 'http://schema.org/engineType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/entertainmentBusiness
 */
export const entertainmentBusiness: Property = 'http://schema.org/entertainmentBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/epidemiology
 */
export const epidemiology: Property = 'http://schema.org/epidemiology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/episodeNumber
 */
export const episodeNumber: Property = 'http://schema.org/episodeNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/episodes
 */
export const episodes: Property = 'http://schema.org/episodes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/episode
 */
export const episode: Property = 'http://schema.org/episode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/equal
 */
export const equal: Property = 'http://schema.org/equal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/error
 */
export const error: Property = 'http://schema.org/error';

/**
 * 
 * 
 * 
 *
 * http://schema.org/errorCode
 */
export const errorCode: Property = 'http://schema.org/errorCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/estimatedCost
 */
export const estimatedCost: Property = 'http://schema.org/estimatedCost';

/**
 * 
 * 
 * 
 *
 * http://schema.org/estimatedFlightDuration
 */
export const estimatedFlightDuration: Property = 'http://schema.org/estimatedFlightDuration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/estimatedSalary
 */
export const estimatedSalary: Property = 'http://schema.org/estimatedSalary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/estimatesRiskOf
 */
export const estimatesRiskOf: Property = 'http://schema.org/estimatesRiskOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ethicsPolicy
 */
export const ethicsPolicy: Property = 'http://schema.org/ethicsPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eventAttendanceMode
 */
export const eventAttendanceMode: Property = 'http://schema.org/eventAttendanceMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eventSchedule
 */
export const eventSchedule: Property = 'http://schema.org/eventSchedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/eventStatus
 */
export const eventStatus: Property = 'http://schema.org/eventStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/events
 */
export const events: Property = 'http://schema.org/events';

/**
 * 
 * 
 * 
 *
 * http://schema.org/event
 */
export const event: Property = 'http://schema.org/event';

/**
 * 
 * 
 * 
 *
 * http://schema.org/evidenceLevel
 */
export const evidenceLevel: Property = 'http://schema.org/evidenceLevel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/evidenceOrigin
 */
export const evidenceOrigin: Property = 'http://schema.org/evidenceOrigin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exceptDate
 */
export const exceptDate: Property = 'http://schema.org/exceptDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exchangeRateSpread
 */
export const exchangeRateSpread: Property = 'http://schema.org/exchangeRateSpread';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exercisePlan
 */
export const exercisePlan: Property = 'http://schema.org/exercisePlan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exerciseRelatedDiet
 */
export const exerciseRelatedDiet: Property = 'http://schema.org/exerciseRelatedDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exerciseType
 */
export const exerciseType: Property = 'http://schema.org/exerciseType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exifData
 */
export const exifData: Property = 'http://schema.org/exifData';

/**
 * 
 * 
 * 
 *
 * http://schema.org/expectedArrivalFrom
 */
export const expectedArrivalFrom: Property = 'http://schema.org/expectedArrivalFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/expectedArrivalUntil
 */
export const expectedArrivalUntil: Property = 'http://schema.org/expectedArrivalUntil';

/**
 * 
 * 
 * 
 *
 * http://schema.org/expectedPrognosis
 */
export const expectedPrognosis: Property = 'http://schema.org/expectedPrognosis';

/**
 * 
 * 
 * 
 *
 * http://schema.org/expectsAcceptanceOf
 */
export const expectsAcceptanceOf: Property = 'http://schema.org/expectsAcceptanceOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/experienceInPlaceOfEducation
 */
export const experienceInPlaceOfEducation: Property = 'http://schema.org/experienceInPlaceOfEducation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/experienceRequirements
 */
export const experienceRequirements: Property = 'http://schema.org/experienceRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/expertConsiderations
 */
export const expertConsiderations: Property = 'http://schema.org/expertConsiderations';

/**
 * 
 * 
 * 
 *
 * http://schema.org/expires
 */
export const expires: Property = 'http://schema.org/expires';

/**
 * 
 * 
 * 
 *
 * http://schema.org/expressedIn
 */
export const expressedIn: Property = 'http://schema.org/expressedIn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/extendedAddress
 */
export const extendedAddress: Property = 'http://schema.org/extendedAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/familyName
 */
export const familyName: Property = 'http://schema.org/familyName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fatContent
 */
export const fatContent: Property = 'http://schema.org/fatContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/faxNumber
 */
export const faxNumber: Property = 'http://schema.org/faxNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/featureList
 */
export const featureList: Property = 'http://schema.org/featureList';

/**
 * 
 * 
 * 
 *
 * http://schema.org/feesAndCommissionsSpecification
 */
export const feesAndCommissionsSpecification: Property = 'http://schema.org/feesAndCommissionsSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fiberContent
 */
export const fiberContent: Property = 'http://schema.org/fiberContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fileFormat
 */
export const fileFormat: Property = 'http://schema.org/fileFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/encodingFormat
 */
export const encodingFormat: Property = 'http://schema.org/encodingFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fileSize
 */
export const fileSize: Property = 'http://schema.org/fileSize';

/**
 * 
 * 
 * 
 *
 * http://schema.org/financialAidEligible
 */
export const financialAidEligible: Property = 'http://schema.org/financialAidEligible';

/**
 * 
 * 
 * 
 *
 * http://schema.org/firstAppearance
 */
export const firstAppearance: Property = 'http://schema.org/firstAppearance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/firstPerformance
 */
export const firstPerformance: Property = 'http://schema.org/firstPerformance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/flightDistance
 */
export const flightDistance: Property = 'http://schema.org/flightDistance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/flightNumber
 */
export const flightNumber: Property = 'http://schema.org/flightNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/floorLevel
 */
export const floorLevel: Property = 'http://schema.org/floorLevel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/floorLimit
 */
export const floorLimit: Property = 'http://schema.org/floorLimit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/floorSize
 */
export const floorSize: Property = 'http://schema.org/floorSize';

/**
 * 
 * 
 * 
 *
 * http://schema.org/followee
 */
export const followee: Property = 'http://schema.org/followee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/follows
 */
export const follows: Property = 'http://schema.org/follows';

/**
 * 
 * 
 * 
 *
 * http://schema.org/followup
 */
export const followup: Property = 'http://schema.org/followup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/foodEstablishment
 */
export const foodEstablishment: Property = 'http://schema.org/foodEstablishment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/foodEvent
 */
export const foodEvent: Property = 'http://schema.org/foodEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/foodWarning
 */
export const foodWarning: Property = 'http://schema.org/foodWarning';

/**
 * 
 * 
 * 
 *
 * http://schema.org/founders
 */
export const founders: Property = 'http://schema.org/founders';

/**
 * 
 * 
 * 
 *
 * http://schema.org/founder
 */
export const founder: Property = 'http://schema.org/founder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/foundingDate
 */
export const foundingDate: Property = 'http://schema.org/foundingDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/foundingLocation
 */
export const foundingLocation: Property = 'http://schema.org/foundingLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/free
 */
export const free: Property = 'http://schema.org/free';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isAccessibleForFree
 */
export const isAccessibleForFree: Property = 'http://schema.org/isAccessibleForFree';

/**
 * 
 * 
 * 
 *
 * http://schema.org/freeShippingThreshold
 */
export const freeShippingThreshold: Property = 'http://schema.org/freeShippingThreshold';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fromLocation
 */
export const fromLocation: Property = 'http://schema.org/fromLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fuelCapacity
 */
export const fuelCapacity: Property = 'http://schema.org/fuelCapacity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fuelConsumption
 */
export const fuelConsumption: Property = 'http://schema.org/fuelConsumption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fuelEfficiency
 */
export const fuelEfficiency: Property = 'http://schema.org/fuelEfficiency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fuelType
 */
export const fuelType: Property = 'http://schema.org/fuelType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fulfillmentType
 */
export const fulfillmentType: Property = 'http://schema.org/fulfillmentType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/functionalClass
 */
export const functionalClass: Property = 'http://schema.org/functionalClass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/funder
 */
export const funder: Property = 'http://schema.org/funder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sponsor
 */
export const sponsor: Property = 'http://schema.org/sponsor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gameAvailabilityType
 */
export const gameAvailabilityType: Property = 'http://schema.org/gameAvailabilityType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gameEdition
 */
export const gameEdition: Property = 'http://schema.org/gameEdition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gameItem
 */
export const gameItem: Property = 'http://schema.org/gameItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gameLocation
 */
export const gameLocation: Property = 'http://schema.org/gameLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gamePlatform
 */
export const gamePlatform: Property = 'http://schema.org/gamePlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gameTip
 */
export const gameTip: Property = 'http://schema.org/gameTip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gender
 */
export const gender: Property = 'http://schema.org/gender';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geo
 */
export const geo: Property = 'http://schema.org/geo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoContains
 */
export const geoContains: Property = 'http://schema.org/geoContains';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoCoveredBy
 */
export const geoCoveredBy: Property = 'http://schema.org/geoCoveredBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoCovers
 */
export const geoCovers: Property = 'http://schema.org/geoCovers';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoCrosses
 */
export const geoCrosses: Property = 'http://schema.org/geoCrosses';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoDisjoint
 */
export const geoDisjoint: Property = 'http://schema.org/geoDisjoint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoEquals
 */
export const geoEquals: Property = 'http://schema.org/geoEquals';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoIntersects
 */
export const geoIntersects: Property = 'http://schema.org/geoIntersects';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoMidpoint
 */
export const geoMidpoint: Property = 'http://schema.org/geoMidpoint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoOverlaps
 */
export const geoOverlaps: Property = 'http://schema.org/geoOverlaps';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoRadius
 */
export const geoRadius: Property = 'http://schema.org/geoRadius';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoTouches
 */
export const geoTouches: Property = 'http://schema.org/geoTouches';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geoWithin
 */
export const geoWithin: Property = 'http://schema.org/geoWithin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/geographicArea
 */
export const geographicArea: Property = 'http://schema.org/geographicArea';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gettingTestedInfo
 */
export const gettingTestedInfo: Property = 'http://schema.org/gettingTestedInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/givenName
 */
export const givenName: Property = 'http://schema.org/givenName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/globalLocationNumber
 */
export const globalLocationNumber: Property = 'http://schema.org/globalLocationNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/governmentBenefitsInfo
 */
export const governmentBenefitsInfo: Property = 'http://schema.org/governmentBenefitsInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gracePeriod
 */
export const gracePeriod: Property = 'http://schema.org/gracePeriod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/grantee
 */
export const grantee: Property = 'http://schema.org/grantee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/greater
 */
export const greater: Property = 'http://schema.org/greater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/greaterOrEqual
 */
export const greaterOrEqual: Property = 'http://schema.org/greaterOrEqual';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gtin12
 */
export const gtin12: Property = 'http://schema.org/gtin12';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gtin
 */
export const gtin: Property = 'http://schema.org/gtin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gtin13
 */
export const gtin13: Property = 'http://schema.org/gtin13';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gtin14
 */
export const gtin14: Property = 'http://schema.org/gtin14';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gtin8
 */
export const gtin8: Property = 'http://schema.org/gtin8';

/**
 * 
 * 
 * 
 *
 * http://schema.org/guideline
 */
export const guideline: Property = 'http://schema.org/guideline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/guidelineDate
 */
export const guidelineDate: Property = 'http://schema.org/guidelineDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/guidelineSubject
 */
export const guidelineSubject: Property = 'http://schema.org/guidelineSubject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/handlingTime
 */
export const handlingTime: Property = 'http://schema.org/handlingTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasAdultConsideration
 */
export const hasAdultConsideration: Property = 'http://schema.org/hasAdultConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasBioPolymerSequence
 */
export const hasBioPolymerSequence: Property = 'http://schema.org/hasBioPolymerSequence';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasRepresentation
 */
export const hasRepresentation: Property = 'http://schema.org/hasRepresentation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasCategoryCode
 */
export const hasCategoryCode: Property = 'http://schema.org/hasCategoryCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasDefinedTerm
 */
export const hasDefinedTerm: Property = 'http://schema.org/hasDefinedTerm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasCourse
 */
export const hasCourse: Property = 'http://schema.org/hasCourse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasCourseInstance
 */
export const hasCourseInstance: Property = 'http://schema.org/hasCourseInstance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasCredential
 */
export const hasCredential: Property = 'http://schema.org/hasCredential';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasDeliveryMethod
 */
export const hasDeliveryMethod: Property = 'http://schema.org/hasDeliveryMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasDigitalDocumentPermission
 */
export const hasDigitalDocumentPermission: Property = 'http://schema.org/hasDigitalDocumentPermission';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasDigitalProductPassport
 */
export const hasDigitalProductPassport: Property = 'http://schema.org/hasDigitalProductPassport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasCertification
 */
export const hasCertification: Property = 'http://schema.org/hasCertification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasDriveThroughService
 */
export const hasDriveThroughService: Property = 'http://schema.org/hasDriveThroughService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasEnergyConsumptionDetails
 */
export const hasEnergyConsumptionDetails: Property = 'http://schema.org/hasEnergyConsumptionDetails';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasEnergyEfficiencyCategory
 */
export const hasEnergyEfficiencyCategory: Property = 'http://schema.org/hasEnergyEfficiencyCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasGS1DigitalLink
 */
export const hasGS1DigitalLink: Property = 'http://schema.org/hasGS1DigitalLink';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasHealthAspect
 */
export const hasHealthAspect: Property = 'http://schema.org/hasHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMeasurement
 */
export const hasMeasurement: Property = 'http://schema.org/hasMeasurement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMemberProgram
 */
export const hasMemberProgram: Property = 'http://schema.org/hasMemberProgram';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMenuItem
 */
export const hasMenuItem: Property = 'http://schema.org/hasMenuItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMenuSection
 */
export const hasMenuSection: Property = 'http://schema.org/hasMenuSection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMolecularFunction
 */
export const hasMolecularFunction: Property = 'http://schema.org/hasMolecularFunction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasOccupation
 */
export const hasOccupation: Property = 'http://schema.org/hasOccupation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasOfferCatalog
 */
export const hasOfferCatalog: Property = 'http://schema.org/hasOfferCatalog';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasPOS
 */
export const hasPOS: Property = 'http://schema.org/hasPOS';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasParticipationOffer
 */
export const hasParticipationOffer: Property = 'http://schema.org/hasParticipationOffer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasProductReturnPolicy
 */
export const hasProductReturnPolicy: Property = 'http://schema.org/hasProductReturnPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMerchantReturnPolicy
 */
export const hasMerchantReturnPolicy: Property = 'http://schema.org/hasMerchantReturnPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasShippingService
 */
export const hasShippingService: Property = 'http://schema.org/hasShippingService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasSponsorshipOffer
 */
export const hasSponsorshipOffer: Property = 'http://schema.org/hasSponsorshipOffer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasStore
 */
export const hasStore: Property = 'http://schema.org/hasStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasTierBenefit
 */
export const hasTierBenefit: Property = 'http://schema.org/hasTierBenefit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasTierRequirement
 */
export const hasTierRequirement: Property = 'http://schema.org/hasTierRequirement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/headline
 */
export const headline: Property = 'http://schema.org/headline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthCondition
 */
export const healthCondition: Property = 'http://schema.org/healthCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanCoinsuranceOption
 */
export const healthPlanCoinsuranceOption: Property = 'http://schema.org/healthPlanCoinsuranceOption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanCoinsuranceRate
 */
export const healthPlanCoinsuranceRate: Property = 'http://schema.org/healthPlanCoinsuranceRate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanCopay
 */
export const healthPlanCopay: Property = 'http://schema.org/healthPlanCopay';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanCopayOption
 */
export const healthPlanCopayOption: Property = 'http://schema.org/healthPlanCopayOption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanCostSharing
 */
export const healthPlanCostSharing: Property = 'http://schema.org/healthPlanCostSharing';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanDrugOption
 */
export const healthPlanDrugOption: Property = 'http://schema.org/healthPlanDrugOption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanDrugTier
 */
export const healthPlanDrugTier: Property = 'http://schema.org/healthPlanDrugTier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanId
 */
export const healthPlanId: Property = 'http://schema.org/healthPlanId';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanMarketingUrl
 */
export const healthPlanMarketingUrl: Property = 'http://schema.org/healthPlanMarketingUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanNetworkId
 */
export const healthPlanNetworkId: Property = 'http://schema.org/healthPlanNetworkId';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanNetworkTier
 */
export const healthPlanNetworkTier: Property = 'http://schema.org/healthPlanNetworkTier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthPlanPharmacyCategory
 */
export const healthPlanPharmacyCategory: Property = 'http://schema.org/healthPlanPharmacyCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/healthcareReportingData
 */
export const healthcareReportingData: Property = 'http://schema.org/healthcareReportingData';

/**
 * 
 * 
 * 
 *
 * http://schema.org/height
 */
export const height: Property = 'http://schema.org/height';

/**
 * 
 * 
 * 
 *
 * http://schema.org/highPrice
 */
export const highPrice: Property = 'http://schema.org/highPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hiringOrganization
 */
export const hiringOrganization: Property = 'http://schema.org/hiringOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/homeLocation
 */
export const homeLocation: Property = 'http://schema.org/homeLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/homeTeam
 */
export const homeTeam: Property = 'http://schema.org/homeTeam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/honorificPrefix
 */
export const honorificPrefix: Property = 'http://schema.org/honorificPrefix';

/**
 * 
 * 
 * 
 *
 * http://schema.org/honorificSuffix
 */
export const honorificSuffix: Property = 'http://schema.org/honorificSuffix';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hospitalAffiliation
 */
export const hospitalAffiliation: Property = 'http://schema.org/hospitalAffiliation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hostingOrganization
 */
export const hostingOrganization: Property = 'http://schema.org/hostingOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hoursAvailable
 */
export const hoursAvailable: Property = 'http://schema.org/hoursAvailable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/howPerformed
 */
export const howPerformed: Property = 'http://schema.org/howPerformed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/httpMethod
 */
export const httpMethod: Property = 'http://schema.org/httpMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/iataCode
 */
export const iataCode: Property = 'http://schema.org/iataCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/icaoCode
 */
export const icaoCode: Property = 'http://schema.org/icaoCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/identifyingExam
 */
export const identifyingExam: Property = 'http://schema.org/identifyingExam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/identifyingTest
 */
export const identifyingTest: Property = 'http://schema.org/identifyingTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/illustrator
 */
export const illustrator: Property = 'http://schema.org/illustrator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/imagingTechnique
 */
export const imagingTechnique: Property = 'http://schema.org/imagingTechnique';

/**
 * 
 * 
 * 
 *
 * http://schema.org/importer
 */
export const importer: Property = 'http://schema.org/importer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inAlbum
 */
export const inAlbum: Property = 'http://schema.org/inAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inBroadcastLineup
 */
export const inBroadcastLineup: Property = 'http://schema.org/inBroadcastLineup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inChI
 */
export const inChI: Property = 'http://schema.org/inChI';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inChIKey
 */
export const inChIKey: Property = 'http://schema.org/inChIKey';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inCodeSet
 */
export const inCodeSet: Property = 'http://schema.org/inCodeSet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inDefinedTermSet
 */
export const inDefinedTermSet: Property = 'http://schema.org/inDefinedTermSet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inPlaylist
 */
export const inPlaylist: Property = 'http://schema.org/inPlaylist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inProductGroupWithID
 */
export const inProductGroupWithID: Property = 'http://schema.org/inProductGroupWithID';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inStoreReturnsOffered
 */
export const inStoreReturnsOffered: Property = 'http://schema.org/inStoreReturnsOffered';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inSupportOf
 */
export const inSupportOf: Property = 'http://schema.org/inSupportOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/incentiveAmount
 */
export const incentiveAmount: Property = 'http://schema.org/incentiveAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/incentiveStatus
 */
export const incentiveStatus: Property = 'http://schema.org/incentiveStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/incentiveType
 */
export const incentiveType: Property = 'http://schema.org/incentiveType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/incentives
 */
export const incentives: Property = 'http://schema.org/incentives';

/**
 * 
 * 
 * 
 *
 * http://schema.org/incentiveCompensation
 */
export const incentiveCompensation: Property = 'http://schema.org/incentiveCompensation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/incentivizedItem
 */
export const incentivizedItem: Property = 'http://schema.org/incentivizedItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includedComposition
 */
export const includedComposition: Property = 'http://schema.org/includedComposition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includedDataCatalog
 */
export const includedDataCatalog: Property = 'http://schema.org/includedDataCatalog';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includedInHealthInsurancePlan
 */
export const includedInHealthInsurancePlan: Property = 'http://schema.org/includedInHealthInsurancePlan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includedRiskFactor
 */
export const includedRiskFactor: Property = 'http://schema.org/includedRiskFactor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includesAttraction
 */
export const includesAttraction: Property = 'http://schema.org/includesAttraction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includesHealthPlanFormulary
 */
export const includesHealthPlanFormulary: Property = 'http://schema.org/includesHealthPlanFormulary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includesHealthPlanNetwork
 */
export const includesHealthPlanNetwork: Property = 'http://schema.org/includesHealthPlanNetwork';

/**
 * 
 * 
 * 
 *
 * http://schema.org/includesObject
 */
export const includesObject: Property = 'http://schema.org/includesObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/incomeLimit
 */
export const incomeLimit: Property = 'http://schema.org/incomeLimit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/increasesRiskOf
 */
export const increasesRiskOf: Property = 'http://schema.org/increasesRiskOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/industry
 */
export const industry: Property = 'http://schema.org/industry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ineligibleRegion
 */
export const ineligibleRegion: Property = 'http://schema.org/ineligibleRegion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/infectiousAgent
 */
export const infectiousAgent: Property = 'http://schema.org/infectiousAgent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/infectiousAgentClass
 */
export const infectiousAgentClass: Property = 'http://schema.org/infectiousAgentClass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ingredients
 */
export const ingredients: Property = 'http://schema.org/ingredients';

/**
 * 
 * 
 * 
 *
 * http://schema.org/supply
 */
export const supply: Property = 'http://schema.org/supply';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recipeIngredient
 */
export const recipeIngredient: Property = 'http://schema.org/recipeIngredient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inker
 */
export const inker: Property = 'http://schema.org/inker';

/**
 * 
 * 
 * 
 *
 * http://schema.org/insertion
 */
export const insertion: Property = 'http://schema.org/insertion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/installUrl
 */
export const installUrl: Property = 'http://schema.org/installUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/instructor
 */
export const instructor: Property = 'http://schema.org/instructor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/intensity
 */
export const intensity: Property = 'http://schema.org/intensity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interactingDrug
 */
export const interactingDrug: Property = 'http://schema.org/interactingDrug';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interactionCount
 */
export const interactionCount: Property = 'http://schema.org/interactionCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interactionStatistic
 */
export const interactionStatistic: Property = 'http://schema.org/interactionStatistic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interactionService
 */
export const interactionService: Property = 'http://schema.org/interactionService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interactionType
 */
export const interactionType: Property = 'http://schema.org/interactionType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interactivityType
 */
export const interactivityType: Property = 'http://schema.org/interactivityType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interestRate
 */
export const interestRate: Property = 'http://schema.org/interestRate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/interpretedAsClaim
 */
export const interpretedAsClaim: Property = 'http://schema.org/interpretedAsClaim';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inventoryLevel
 */
export const inventoryLevel: Property = 'http://schema.org/inventoryLevel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inverseOf
 */
export const inverseOf: Property = 'http://schema.org/inverseOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isAcceptingNewPatients
 */
export const isAcceptingNewPatients: Property = 'http://schema.org/isAcceptingNewPatients';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isAccessoryOrSparePartFor
 */
export const isAccessoryOrSparePartFor: Property = 'http://schema.org/isAccessoryOrSparePartFor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isAvailableGenerically
 */
export const isAvailableGenerically: Property = 'http://schema.org/isAvailableGenerically';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isBasedOnUrl
 */
export const isBasedOnUrl: Property = 'http://schema.org/isBasedOnUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isBasedOn
 */
export const isBasedOn: Property = 'http://schema.org/isBasedOn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isConsumableFor
 */
export const isConsumableFor: Property = 'http://schema.org/isConsumableFor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isFamilyFriendly
 */
export const isFamilyFriendly: Property = 'http://schema.org/isFamilyFriendly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isGift
 */
export const isGift: Property = 'http://schema.org/isGift';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isInvolvedInBiologicalProcess
 */
export const isInvolvedInBiologicalProcess: Property = 'http://schema.org/isInvolvedInBiologicalProcess';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isLiveBroadcast
 */
export const isLiveBroadcast: Property = 'http://schema.org/isLiveBroadcast';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isLocatedInSubcellularLocation
 */
export const isLocatedInSubcellularLocation: Property = 'http://schema.org/isLocatedInSubcellularLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isOftenBoughtWith
 */
export const isOftenBoughtWith: Property = 'http://schema.org/isOftenBoughtWith';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isRelatedTo
 */
export const isRelatedTo: Property = 'http://schema.org/isRelatedTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isPlanForApartment
 */
export const isPlanForApartment: Property = 'http://schema.org/isPlanForApartment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isProprietary
 */
export const isProprietary: Property = 'http://schema.org/isProprietary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isResizable
 */
export const isResizable: Property = 'http://schema.org/isResizable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isSimilarTo
 */
export const isSimilarTo: Property = 'http://schema.org/isSimilarTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isStoreOn
 */
export const isStoreOn: Property = 'http://schema.org/isStoreOn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isUnlabelledFallback
 */
export const isUnlabelledFallback: Property = 'http://schema.org/isUnlabelledFallback';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isbn
 */
export const isbn: Property = 'http://schema.org/isbn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isicV4
 */
export const isicV4: Property = 'http://schema.org/isicV4';

/**
 * 
 * 
 * 
 *
 * http://schema.org/iso6523Code
 */
export const iso6523Code: Property = 'http://schema.org/iso6523Code';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isrcCode
 */
export const isrcCode: Property = 'http://schema.org/isrcCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/issn
 */
export const issn: Property = 'http://schema.org/issn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/issueNumber
 */
export const issueNumber: Property = 'http://schema.org/issueNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/issuedBy
 */
export const issuedBy: Property = 'http://schema.org/issuedBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/issuedThrough
 */
export const issuedThrough: Property = 'http://schema.org/issuedThrough';

/**
 * 
 * 
 * 
 *
 * http://schema.org/iswcCode
 */
export const iswcCode: Property = 'http://schema.org/iswcCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/item
 */
export const item: Property = 'http://schema.org/item';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemCondition
 */
export const itemCondition: Property = 'http://schema.org/itemCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemDefectReturnFees
 */
export const itemDefectReturnFees: Property = 'http://schema.org/itemDefectReturnFees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemDefectReturnLabelSource
 */
export const itemDefectReturnLabelSource: Property = 'http://schema.org/itemDefectReturnLabelSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemDefectReturnShippingFeesAmount
 */
export const itemDefectReturnShippingFeesAmount: Property = 'http://schema.org/itemDefectReturnShippingFeesAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemListElement
 */
export const itemListElement: Property = 'http://schema.org/itemListElement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemListOrder
 */
export const itemListOrder: Property = 'http://schema.org/itemListOrder';

/**
 * itemLocation
 * 
 * Current location of the item.
 *
 * http://schema.org/itemLocation
 */
export const itemLocation: Property = 'http://schema.org/itemLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemPopularity
 */
export const itemPopularity: Property = 'http://schema.org/itemPopularity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemReviewed
 */
export const itemReviewed: Property = 'http://schema.org/itemReviewed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemShipped
 */
export const itemShipped: Property = 'http://schema.org/itemShipped';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itinerary
 */
export const itinerary: Property = 'http://schema.org/itinerary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/iupacName
 */
export const iupacName: Property = 'http://schema.org/iupacName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jobDuration
 */
export const jobDuration: Property = 'http://schema.org/jobDuration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jobImmediateStart
 */
export const jobImmediateStart: Property = 'http://schema.org/jobImmediateStart';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jobLocation
 */
export const jobLocation: Property = 'http://schema.org/jobLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jobLocationType
 */
export const jobLocationType: Property = 'http://schema.org/jobLocationType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jobStartDate
 */
export const jobStartDate: Property = 'http://schema.org/jobStartDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jobTitle
 */
export const jobTitle: Property = 'http://schema.org/jobTitle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/keywords
 */
export const keywords: Property = 'http://schema.org/keywords';

/**
 * 
 * 
 * 
 *
 * http://schema.org/knownVehicleDamages
 */
export const knownVehicleDamages: Property = 'http://schema.org/knownVehicleDamages';

/**
 * 
 * 
 * 
 *
 * http://schema.org/knows
 */
export const knows: Property = 'http://schema.org/knows';

/**
 * 
 * 
 * 
 *
 * http://schema.org/knowsAbout
 */
export const knowsAbout: Property = 'http://schema.org/knowsAbout';

/**
 * 
 * 
 * 
 *
 * http://schema.org/knowsLanguage
 */
export const knowsLanguage: Property = 'http://schema.org/knowsLanguage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/labelDetails
 */
export const labelDetails: Property = 'http://schema.org/labelDetails';

/**
 * 
 * 
 * 
 *
 * http://schema.org/landlord
 */
export const landlord: Property = 'http://schema.org/landlord';

/**
 * 
 * 
 * 
 *
 * http://schema.org/language
 */
export const language: Property = 'http://schema.org/language';

/**
 * 
 * 
 * 
 *
 * http://schema.org/inLanguage
 */
export const inLanguage: Property = 'http://schema.org/inLanguage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lastReviewed
 */
export const lastReviewed: Property = 'http://schema.org/lastReviewed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/latitude
 */
export const latitude: Property = 'http://schema.org/latitude';

/**
 * 
 * 
 * 
 *
 * http://schema.org/layoutImage
 */
export const layoutImage: Property = 'http://schema.org/layoutImage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/learningResourceType
 */
export const learningResourceType: Property = 'http://schema.org/learningResourceType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/leaseLength
 */
export const leaseLength: Property = 'http://schema.org/leaseLength';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legalAddress
 */
export const legalAddress: Property = 'http://schema.org/legalAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legalName
 */
export const legalName: Property = 'http://schema.org/legalName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legalRepresentative
 */
export const legalRepresentative: Property = 'http://schema.org/legalRepresentative';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legalStatus
 */
export const legalStatus: Property = 'http://schema.org/legalStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationAmends
 */
export const legislationAmends: Property = 'http://schema.org/legislationAmends';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationChanges
 */
export const legislationChanges: Property = 'http://schema.org/legislationChanges';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationCommences
 */
export const legislationCommences: Property = 'http://schema.org/legislationCommences';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationConsolidates
 */
export const legislationConsolidates: Property = 'http://schema.org/legislationConsolidates';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationCorrects
 */
export const legislationCorrects: Property = 'http://schema.org/legislationCorrects';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationCountersignedBy
 */
export const legislationCountersignedBy: Property = 'http://schema.org/legislationCountersignedBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationDate
 */
export const legislationDate: Property = 'http://schema.org/legislationDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dateCreated
 */
export const dateCreated: Property = 'http://schema.org/dateCreated';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationDateOfApplicability
 */
export const legislationDateOfApplicability: Property = 'http://schema.org/legislationDateOfApplicability';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationDateVersion
 */
export const legislationDateVersion: Property = 'http://schema.org/legislationDateVersion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationEnsuresImplementationOf
 */
export const legislationEnsuresImplementationOf: Property = 'http://schema.org/legislationEnsuresImplementationOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationApplies
 */
export const legislationApplies: Property = 'http://schema.org/legislationApplies';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationIdentifier
 */
export const legislationIdentifier: Property = 'http://schema.org/legislationIdentifier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationJurisdiction
 */
export const legislationJurisdiction: Property = 'http://schema.org/legislationJurisdiction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/jurisdiction
 */
export const jurisdiction: Property = 'http://schema.org/jurisdiction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationLegalForce
 */
export const legislationLegalForce: Property = 'http://schema.org/legislationLegalForce';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationLegalValue
 */
export const legislationLegalValue: Property = 'http://schema.org/legislationLegalValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationPassedBy
 */
export const legislationPassedBy: Property = 'http://schema.org/legislationPassedBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/creator
 */
export const creator: Property = 'http://schema.org/creator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationRepeals
 */
export const legislationRepeals: Property = 'http://schema.org/legislationRepeals';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationResponsible
 */
export const legislationResponsible: Property = 'http://schema.org/legislationResponsible';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationTransposes
 */
export const legislationTransposes: Property = 'http://schema.org/legislationTransposes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/legislationType
 */
export const legislationType: Property = 'http://schema.org/legislationType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/genre
 */
export const genre: Property = 'http://schema.org/genre';

/**
 * 
 * 
 * 
 *
 * http://schema.org/leiCode
 */
export const leiCode: Property = 'http://schema.org/leiCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lender
 */
export const lender: Property = 'http://schema.org/lender';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lesser
 */
export const lesser: Property = 'http://schema.org/lesser';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lesserOrEqual
 */
export const lesserOrEqual: Property = 'http://schema.org/lesserOrEqual';

/**
 * 
 * 
 * 
 *
 * http://schema.org/letterer
 */
export const letterer: Property = 'http://schema.org/letterer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/license
 */
export const license: Property = 'http://schema.org/license';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lifeEvent
 */
export const lifeEvent: Property = 'http://schema.org/lifeEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/line
 */
export const line: Property = 'http://schema.org/line';

/**
 * 
 * 
 * 
 *
 * http://schema.org/linkRelationship
 */
export const linkRelationship: Property = 'http://schema.org/linkRelationship';

/**
 * 
 * 
 * 
 *
 * http://schema.org/liveBlogUpdate
 */
export const liveBlogUpdate: Property = 'http://schema.org/liveBlogUpdate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/loanMortgageMandateAmount
 */
export const loanMortgageMandateAmount: Property = 'http://schema.org/loanMortgageMandateAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/loanPaymentAmount
 */
export const loanPaymentAmount: Property = 'http://schema.org/loanPaymentAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/loanPaymentFrequency
 */
export const loanPaymentFrequency: Property = 'http://schema.org/loanPaymentFrequency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/loanRepaymentForm
 */
export const loanRepaymentForm: Property = 'http://schema.org/loanRepaymentForm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/loanTerm
 */
export const loanTerm: Property = 'http://schema.org/loanTerm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/loanType
 */
export const loanType: Property = 'http://schema.org/loanType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/locationCreated
 */
export const locationCreated: Property = 'http://schema.org/locationCreated';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lodgingUnitDescription
 */
export const lodgingUnitDescription: Property = 'http://schema.org/lodgingUnitDescription';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lodgingUnitType
 */
export const lodgingUnitType: Property = 'http://schema.org/lodgingUnitType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/logo
 */
export const logo: Property = 'http://schema.org/logo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/longitude
 */
export const longitude: Property = 'http://schema.org/longitude';

/**
 * 
 * 
 * 
 *
 * http://schema.org/loser
 */
export const loser: Property = 'http://schema.org/loser';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lowPrice
 */
export const lowPrice: Property = 'http://schema.org/lowPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lyricist
 */
export const lyricist: Property = 'http://schema.org/lyricist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/lyrics
 */
export const lyrics: Property = 'http://schema.org/lyrics';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maintainer
 */
export const maintainer: Property = 'http://schema.org/maintainer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/manufacturer
 */
export const manufacturer: Property = 'http://schema.org/manufacturer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/map
 */
export const map: Property = 'http://schema.org/map';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMap
 */
export const hasMap: Property = 'http://schema.org/hasMap';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mapType
 */
export const mapType: Property = 'http://schema.org/mapType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maps
 */
export const maps: Property = 'http://schema.org/maps';

/**
 * 
 * 
 * 
 *
 * http://schema.org/marginOfError
 */
export const marginOfError: Property = 'http://schema.org/marginOfError';

/**
 * 
 * 
 * 
 *
 * http://schema.org/masthead
 */
export const masthead: Property = 'http://schema.org/masthead';

/**
 * materialExtent
 * 
 * The quantity of the materials being described or an expression of the physical space they occupy.
 *
 * http://schema.org/materialExtent
 */
export const materialExtent: Property = 'http://schema.org/materialExtent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mathExpression
 */
export const mathExpression: Property = 'http://schema.org/mathExpression';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maxPrice
 */
export const maxPrice: Property = 'http://schema.org/maxPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maxValue
 */
export const maxValue: Property = 'http://schema.org/maxValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maximumAttendeeCapacity
 */
export const maximumAttendeeCapacity: Property = 'http://schema.org/maximumAttendeeCapacity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maximumEnrollment
 */
export const maximumEnrollment: Property = 'http://schema.org/maximumEnrollment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maximumIntake
 */
export const maximumIntake: Property = 'http://schema.org/maximumIntake';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maximumPhysicalAttendeeCapacity
 */
export const maximumPhysicalAttendeeCapacity: Property = 'http://schema.org/maximumPhysicalAttendeeCapacity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/maximumVirtualAttendeeCapacity
 */
export const maximumVirtualAttendeeCapacity: Property = 'http://schema.org/maximumVirtualAttendeeCapacity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mealService
 */
export const mealService: Property = 'http://schema.org/mealService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/measuredProperty
 */
export const measuredProperty: Property = 'http://schema.org/measuredProperty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/measurementDenominator
 */
export const measurementDenominator: Property = 'http://schema.org/measurementDenominator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/measurementMethod
 */
export const measurementMethod: Property = 'http://schema.org/measurementMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/measurementTechnique
 */
export const measurementTechnique: Property = 'http://schema.org/measurementTechnique';

/**
 * 
 * 
 * 
 *
 * http://schema.org/measurementQualifier
 */
export const measurementQualifier: Property = 'http://schema.org/measurementQualifier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mechanismOfAction
 */
export const mechanismOfAction: Property = 'http://schema.org/mechanismOfAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mediaAuthenticityCategory
 */
export const mediaAuthenticityCategory: Property = 'http://schema.org/mediaAuthenticityCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mediaItemAppearance
 */
export const mediaItemAppearance: Property = 'http://schema.org/mediaItemAppearance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/median
 */
export const median: Property = 'http://schema.org/median';

/**
 * 
 * 
 * 
 *
 * http://schema.org/medicalAudience
 */
export const medicalAudience: Property = 'http://schema.org/medicalAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/medicalSpecialty
 */
export const medicalSpecialty: Property = 'http://schema.org/medicalSpecialty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/medicineSystem
 */
export const medicineSystem: Property = 'http://schema.org/medicineSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/meetsEmissionStandard
 */
export const meetsEmissionStandard: Property = 'http://schema.org/meetsEmissionStandard';

/**
 * 
 * 
 * 
 *
 * http://schema.org/members
 */
export const members: Property = 'http://schema.org/members';

/**
 * 
 * 
 * 
 *
 * http://schema.org/member
 */
export const member: Property = 'http://schema.org/member';

/**
 * 
 * 
 * 
 *
 * http://schema.org/membershipNumber
 */
export const membershipNumber: Property = 'http://schema.org/membershipNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/membershipPointsEarned
 */
export const membershipPointsEarned: Property = 'http://schema.org/membershipPointsEarned';

/**
 * 
 * 
 * 
 *
 * http://schema.org/memoryRequirements
 */
export const memoryRequirements: Property = 'http://schema.org/memoryRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mentions
 */
export const mentions: Property = 'http://schema.org/mentions';

/**
 * 
 * 
 * 
 *
 * http://schema.org/menu
 */
export const menu: Property = 'http://schema.org/menu';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasMenu
 */
export const hasMenu: Property = 'http://schema.org/hasMenu';

/**
 * 
 * 
 * 
 *
 * http://schema.org/menuAddOn
 */
export const menuAddOn: Property = 'http://schema.org/menuAddOn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/merchant
 */
export const merchant: Property = 'http://schema.org/merchant';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seller
 */
export const seller: Property = 'http://schema.org/seller';

/**
 * 
 * 
 * 
 *
 * http://schema.org/messageAttachment
 */
export const messageAttachment: Property = 'http://schema.org/messageAttachment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mileageFromOdometer
 */
export const mileageFromOdometer: Property = 'http://schema.org/mileageFromOdometer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/minPrice
 */
export const minPrice: Property = 'http://schema.org/minPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/minValue
 */
export const minValue: Property = 'http://schema.org/minValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/minimumOrderValue
 */
export const minimumOrderValue: Property = 'http://schema.org/minimumOrderValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/minimumPaymentDue
 */
export const minimumPaymentDue: Property = 'http://schema.org/minimumPaymentDue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/missionCoveragePrioritiesPolicy
 */
export const missionCoveragePrioritiesPolicy: Property = 'http://schema.org/missionCoveragePrioritiesPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mobileUrl
 */
export const mobileUrl: Property = 'http://schema.org/mobileUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/model
 */
export const model: Property = 'http://schema.org/model';

/**
 * 
 * 
 * 
 *
 * http://schema.org/modelDate
 */
export const modelDate: Property = 'http://schema.org/modelDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/modifiedTime
 */
export const modifiedTime: Property = 'http://schema.org/modifiedTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/molecularFormula
 */
export const molecularFormula: Property = 'http://schema.org/molecularFormula';

/**
 * 
 * 
 * 
 *
 * http://schema.org/molecularWeight
 */
export const molecularWeight: Property = 'http://schema.org/molecularWeight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/monoisotopicMolecularWeight
 */
export const monoisotopicMolecularWeight: Property = 'http://schema.org/monoisotopicMolecularWeight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/monthlyMinimumRepaymentAmount
 */
export const monthlyMinimumRepaymentAmount: Property = 'http://schema.org/monthlyMinimumRepaymentAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/monthsOfExperience
 */
export const monthsOfExperience: Property = 'http://schema.org/monthsOfExperience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mpn
 */
export const mpn: Property = 'http://schema.org/mpn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/multipleValues
 */
export const multipleValues: Property = 'http://schema.org/multipleValues';

/**
 * 
 * 
 * 
 *
 * http://schema.org/muscleAction
 */
export const muscleAction: Property = 'http://schema.org/muscleAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/musicArrangement
 */
export const musicArrangement: Property = 'http://schema.org/musicArrangement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/musicBy
 */
export const musicBy: Property = 'http://schema.org/musicBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/musicCompositionForm
 */
export const musicCompositionForm: Property = 'http://schema.org/musicCompositionForm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/musicGroupMember
 */
export const musicGroupMember: Property = 'http://schema.org/musicGroupMember';

/**
 * 
 * 
 * 
 *
 * http://schema.org/musicReleaseFormat
 */
export const musicReleaseFormat: Property = 'http://schema.org/musicReleaseFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/musicalKey
 */
export const musicalKey: Property = 'http://schema.org/musicalKey';

/**
 * 
 * 
 * 
 *
 * http://schema.org/naics
 */
export const naics: Property = 'http://schema.org/naics';

/**
 * 
 * 
 * 
 *
 * http://schema.org/name
 */
export const name: Property = 'http://schema.org/name';

/**
 * 
 * 
 * 
 *
 * http://schema.org/namedPosition
 */
export const namedPosition: Property = 'http://schema.org/namedPosition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/roleName
 */
export const roleName: Property = 'http://schema.org/roleName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nationality
 */
export const nationality: Property = 'http://schema.org/nationality';

/**
 * 
 * 
 * 
 *
 * http://schema.org/naturalProgression
 */
export const naturalProgression: Property = 'http://schema.org/naturalProgression';

/**
 * 
 * 
 * 
 *
 * http://schema.org/negativeNotes
 */
export const negativeNotes: Property = 'http://schema.org/negativeNotes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nerve
 */
export const nerve: Property = 'http://schema.org/nerve';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nerveMotor
 */
export const nerveMotor: Property = 'http://schema.org/nerveMotor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/netWorth
 */
export const netWorth: Property = 'http://schema.org/netWorth';

/**
 * 
 * 
 * 
 *
 * http://schema.org/newsUpdatesAndGuidelines
 */
export const newsUpdatesAndGuidelines: Property = 'http://schema.org/newsUpdatesAndGuidelines';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nextItem
 */
export const nextItem: Property = 'http://schema.org/nextItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/noBylinesPolicy
 */
export const noBylinesPolicy: Property = 'http://schema.org/noBylinesPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nonEqual
 */
export const nonEqual: Property = 'http://schema.org/nonEqual';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nonProprietaryName
 */
export const nonProprietaryName: Property = 'http://schema.org/nonProprietaryName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nonprofitStatus
 */
export const nonprofitStatus: Property = 'http://schema.org/nonprofitStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/normalRange
 */
export const normalRange: Property = 'http://schema.org/normalRange';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nsn
 */
export const nsn: Property = 'http://schema.org/nsn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numAdults
 */
export const numAdults: Property = 'http://schema.org/numAdults';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numChildren
 */
export const numChildren: Property = 'http://schema.org/numChildren';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numConstraints
 */
export const numConstraints: Property = 'http://schema.org/numConstraints';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numItems
 */
export const numItems: Property = 'http://schema.org/numItems';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numTracks
 */
export const numTracks: Property = 'http://schema.org/numTracks';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfAccommodationUnits
 */
export const numberOfAccommodationUnits: Property = 'http://schema.org/numberOfAccommodationUnits';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfAirbags
 */
export const numberOfAirbags: Property = 'http://schema.org/numberOfAirbags';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfAvailableAccommodationUnits
 */
export const numberOfAvailableAccommodationUnits: Property = 'http://schema.org/numberOfAvailableAccommodationUnits';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfAxles
 */
export const numberOfAxles: Property = 'http://schema.org/numberOfAxles';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfBathroomsTotal
 */
export const numberOfBathroomsTotal: Property = 'http://schema.org/numberOfBathroomsTotal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfBedrooms
 */
export const numberOfBedrooms: Property = 'http://schema.org/numberOfBedrooms';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfBeds
 */
export const numberOfBeds: Property = 'http://schema.org/numberOfBeds';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfCredits
 */
export const numberOfCredits: Property = 'http://schema.org/numberOfCredits';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfDoors
 */
export const numberOfDoors: Property = 'http://schema.org/numberOfDoors';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfEmployees
 */
export const numberOfEmployees: Property = 'http://schema.org/numberOfEmployees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfEpisodes
 */
export const numberOfEpisodes: Property = 'http://schema.org/numberOfEpisodes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfForwardGears
 */
export const numberOfForwardGears: Property = 'http://schema.org/numberOfForwardGears';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfFullBathrooms
 */
export const numberOfFullBathrooms: Property = 'http://schema.org/numberOfFullBathrooms';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfItems
 */
export const numberOfItems: Property = 'http://schema.org/numberOfItems';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfLoanPayments
 */
export const numberOfLoanPayments: Property = 'http://schema.org/numberOfLoanPayments';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfPages
 */
export const numberOfPages: Property = 'http://schema.org/numberOfPages';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfPartialBathrooms
 */
export const numberOfPartialBathrooms: Property = 'http://schema.org/numberOfPartialBathrooms';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfPlayers
 */
export const numberOfPlayers: Property = 'http://schema.org/numberOfPlayers';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfPreviousOwners
 */
export const numberOfPreviousOwners: Property = 'http://schema.org/numberOfPreviousOwners';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfRooms
 */
export const numberOfRooms: Property = 'http://schema.org/numberOfRooms';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberOfSeasons
 */
export const numberOfSeasons: Property = 'http://schema.org/numberOfSeasons';

/**
 * 
 * 
 * 
 *
 * http://schema.org/numberedPosition
 */
export const numberedPosition: Property = 'http://schema.org/numberedPosition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/nutrition
 */
export const nutrition: Property = 'http://schema.org/nutrition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/observationAbout
 */
export const observationAbout: Property = 'http://schema.org/observationAbout';

/**
 * 
 * 
 * 
 *
 * http://schema.org/observationDate
 */
export const observationDate: Property = 'http://schema.org/observationDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/observationPeriod
 */
export const observationPeriod: Property = 'http://schema.org/observationPeriod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/occupancy
 */
export const occupancy: Property = 'http://schema.org/occupancy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/occupationLocation
 */
export const occupationLocation: Property = 'http://schema.org/occupationLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/occupationalCategory
 */
export const occupationalCategory: Property = 'http://schema.org/occupationalCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/occupationalCredentialAwarded
 */
export const occupationalCredentialAwarded: Property = 'http://schema.org/occupationalCredentialAwarded';

/**
 * 
 * 
 * 
 *
 * http://schema.org/offerCount
 */
export const offerCount: Property = 'http://schema.org/offerCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/offersPrescriptionByMail
 */
export const offersPrescriptionByMail: Property = 'http://schema.org/offersPrescriptionByMail';

/**
 * 
 * 
 * 
 *
 * http://schema.org/openingHours
 */
export const openingHours: Property = 'http://schema.org/openingHours';

/**
 * 
 * 
 * 
 *
 * http://schema.org/openingHoursSpecification
 */
export const openingHoursSpecification: Property = 'http://schema.org/openingHoursSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/opens
 */
export const opens: Property = 'http://schema.org/opens';

/**
 * 
 * 
 * 
 *
 * http://schema.org/operatingSystem
 */
export const operatingSystem: Property = 'http://schema.org/operatingSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/opponent
 */
export const opponent: Property = 'http://schema.org/opponent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/option
 */
export const option: Property = 'http://schema.org/option';

/**
 * 
 * 
 * 
 *
 * http://schema.org/actionOption
 */
export const actionOption: Property = 'http://schema.org/actionOption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderDate
 */
export const orderDate: Property = 'http://schema.org/orderDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderDelivery
 */
export const orderDelivery: Property = 'http://schema.org/orderDelivery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderItemNumber
 */
export const orderItemNumber: Property = 'http://schema.org/orderItemNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderItemStatus
 */
export const orderItemStatus: Property = 'http://schema.org/orderItemStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderNumber
 */
export const orderNumber: Property = 'http://schema.org/orderNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderPercentage
 */
export const orderPercentage: Property = 'http://schema.org/orderPercentage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderQuantity
 */
export const orderQuantity: Property = 'http://schema.org/orderQuantity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderStatus
 */
export const orderStatus: Property = 'http://schema.org/orderStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderValue
 */
export const orderValue: Property = 'http://schema.org/orderValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/orderedItem
 */
export const orderedItem: Property = 'http://schema.org/orderedItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/organizer
 */
export const organizer: Property = 'http://schema.org/organizer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/originAddress
 */
export const originAddress: Property = 'http://schema.org/originAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/originalMediaContextDescription
 */
export const originalMediaContextDescription: Property = 'http://schema.org/originalMediaContextDescription';

/**
 * 
 * 
 * 
 *
 * http://schema.org/originalMediaLink
 */
export const originalMediaLink: Property = 'http://schema.org/originalMediaLink';

/**
 * 
 * 
 * 
 *
 * http://schema.org/originatesFrom
 */
export const originatesFrom: Property = 'http://schema.org/originatesFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/overdosage
 */
export const overdosage: Property = 'http://schema.org/overdosage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ownedFrom
 */
export const ownedFrom: Property = 'http://schema.org/ownedFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ownedThrough
 */
export const ownedThrough: Property = 'http://schema.org/ownedThrough';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ownershipFundingInfo
 */
export const ownershipFundingInfo: Property = 'http://schema.org/ownershipFundingInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pageEnd
 */
export const pageEnd: Property = 'http://schema.org/pageEnd';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pageStart
 */
export const pageStart: Property = 'http://schema.org/pageStart';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pagination
 */
export const pagination: Property = 'http://schema.org/pagination';

/**
 * 
 * 
 * 
 *
 * http://schema.org/parentItem
 */
export const parentItem: Property = 'http://schema.org/parentItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/parentService
 */
export const parentService: Property = 'http://schema.org/parentService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/parents
 */
export const parents: Property = 'http://schema.org/parents';

/**
 * 
 * 
 * 
 *
 * http://schema.org/parent
 */
export const parent: Property = 'http://schema.org/parent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfEpisode
 */
export const partOfEpisode: Property = 'http://schema.org/partOfEpisode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfInvoice
 */
export const partOfInvoice: Property = 'http://schema.org/partOfInvoice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfOrder
 */
export const partOfOrder: Property = 'http://schema.org/partOfOrder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfSeason
 */
export const partOfSeason: Property = 'http://schema.org/partOfSeason';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfSystem
 */
export const partOfSystem: Property = 'http://schema.org/partOfSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfTVSeries
 */
export const partOfTVSeries: Property = 'http://schema.org/partOfTVSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfSeries
 */
export const partOfSeries: Property = 'http://schema.org/partOfSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partySize
 */
export const partySize: Property = 'http://schema.org/partySize';

/**
 * 
 * 
 * 
 *
 * http://schema.org/passengerPriorityStatus
 */
export const passengerPriorityStatus: Property = 'http://schema.org/passengerPriorityStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/passengerSequenceNumber
 */
export const passengerSequenceNumber: Property = 'http://schema.org/passengerSequenceNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pathophysiology
 */
export const pathophysiology: Property = 'http://schema.org/pathophysiology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pattern
 */
export const pattern: Property = 'http://schema.org/pattern';

/**
 * 
 * 
 * 
 *
 * http://schema.org/payload
 */
export const payload: Property = 'http://schema.org/payload';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentAccepted
 */
export const paymentAccepted: Property = 'http://schema.org/paymentAccepted';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentDue
 */
export const paymentDue: Property = 'http://schema.org/paymentDue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentDueDate
 */
export const paymentDueDate: Property = 'http://schema.org/paymentDueDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentMethod
 */
export const paymentMethod: Property = 'http://schema.org/paymentMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentMethodId
 */
export const paymentMethodId: Property = 'http://schema.org/paymentMethodId';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentMethodType
 */
export const paymentMethodType: Property = 'http://schema.org/paymentMethodType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentStatus
 */
export const paymentStatus: Property = 'http://schema.org/paymentStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/paymentUrl
 */
export const paymentUrl: Property = 'http://schema.org/paymentUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/penciler
 */
export const penciler: Property = 'http://schema.org/penciler';

/**
 * 
 * 
 * 
 *
 * http://schema.org/percentile10
 */
export const percentile10: Property = 'http://schema.org/percentile10';

/**
 * 
 * 
 * 
 *
 * http://schema.org/percentile25
 */
export const percentile25: Property = 'http://schema.org/percentile25';

/**
 * 
 * 
 * 
 *
 * http://schema.org/percentile75
 */
export const percentile75: Property = 'http://schema.org/percentile75';

/**
 * 
 * 
 * 
 *
 * http://schema.org/percentile90
 */
export const percentile90: Property = 'http://schema.org/percentile90';

/**
 * 
 * 
 * 
 *
 * http://schema.org/performerIn
 */
export const performerIn: Property = 'http://schema.org/performerIn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/performers
 */
export const performers: Property = 'http://schema.org/performers';

/**
 * 
 * 
 * 
 *
 * http://schema.org/performer
 */
export const performer: Property = 'http://schema.org/performer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/permissionType
 */
export const permissionType: Property = 'http://schema.org/permissionType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/permissions
 */
export const permissions: Property = 'http://schema.org/permissions';

/**
 * 
 * 
 * 
 *
 * http://schema.org/permitAudience
 */
export const permitAudience: Property = 'http://schema.org/permitAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/permittedUsage
 */
export const permittedUsage: Property = 'http://schema.org/permittedUsage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/petsAllowed
 */
export const petsAllowed: Property = 'http://schema.org/petsAllowed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/phoneticText
 */
export const phoneticText: Property = 'http://schema.org/phoneticText';

/**
 * 
 * 
 * 
 *
 * http://schema.org/photos
 */
export const photos: Property = 'http://schema.org/photos';

/**
 * 
 * 
 * 
 *
 * http://schema.org/photo
 */
export const photo: Property = 'http://schema.org/photo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/physicalRequirement
 */
export const physicalRequirement: Property = 'http://schema.org/physicalRequirement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/physiologicalBenefits
 */
export const physiologicalBenefits: Property = 'http://schema.org/physiologicalBenefits';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pickupLocation
 */
export const pickupLocation: Property = 'http://schema.org/pickupLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pickupTime
 */
export const pickupTime: Property = 'http://schema.org/pickupTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/playMode
 */
export const playMode: Property = 'http://schema.org/playMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/playerType
 */
export const playerType: Property = 'http://schema.org/playerType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/playersOnline
 */
export const playersOnline: Property = 'http://schema.org/playersOnline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/polygon
 */
export const polygon: Property = 'http://schema.org/polygon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/populationType
 */
export const populationType: Property = 'http://schema.org/populationType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/positiveNotes
 */
export const positiveNotes: Property = 'http://schema.org/positiveNotes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/possibleComplication
 */
export const possibleComplication: Property = 'http://schema.org/possibleComplication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/possibleTreatment
 */
export const possibleTreatment: Property = 'http://schema.org/possibleTreatment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/postOfficeBoxNumber
 */
export const postOfficeBoxNumber: Property = 'http://schema.org/postOfficeBoxNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/postOp
 */
export const postOp: Property = 'http://schema.org/postOp';

/**
 * 
 * 
 * 
 *
 * http://schema.org/postalCode
 */
export const postalCode: Property = 'http://schema.org/postalCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/postalCodeBegin
 */
export const postalCodeBegin: Property = 'http://schema.org/postalCodeBegin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/postalCodeEnd
 */
export const postalCodeEnd: Property = 'http://schema.org/postalCodeEnd';

/**
 * 
 * 
 * 
 *
 * http://schema.org/postalCodePrefix
 */
export const postalCodePrefix: Property = 'http://schema.org/postalCodePrefix';

/**
 * 
 * 
 * 
 *
 * http://schema.org/postalCodeRange
 */
export const postalCodeRange: Property = 'http://schema.org/postalCodeRange';

/**
 * 
 * 
 * 
 *
 * http://schema.org/potentialAction
 */
export const potentialAction: Property = 'http://schema.org/potentialAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/potentialUse
 */
export const potentialUse: Property = 'http://schema.org/potentialUse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/practicesAt
 */
export const practicesAt: Property = 'http://schema.org/practicesAt';

/**
 * 
 * 
 * 
 *
 * http://schema.org/preOp
 */
export const preOp: Property = 'http://schema.org/preOp';

/**
 * 
 * 
 * 
 *
 * http://schema.org/predecessorOf
 */
export const predecessorOf: Property = 'http://schema.org/predecessorOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pregnancyCategory
 */
export const pregnancyCategory: Property = 'http://schema.org/pregnancyCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pregnancyWarning
 */
export const pregnancyWarning: Property = 'http://schema.org/pregnancyWarning';

/**
 * 
 * 
 * 
 *
 * http://schema.org/prepTime
 */
export const prepTime: Property = 'http://schema.org/prepTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/preparation
 */
export const preparation: Property = 'http://schema.org/preparation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/prescribingInfo
 */
export const prescribingInfo: Property = 'http://schema.org/prescribingInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/prescriptionStatus
 */
export const prescriptionStatus: Property = 'http://schema.org/prescriptionStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/previousItem
 */
export const previousItem: Property = 'http://schema.org/previousItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/previousStartDate
 */
export const previousStartDate: Property = 'http://schema.org/previousStartDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/price
 */
export const price: Property = 'http://schema.org/price';

/**
 * 
 * 
 * 
 *
 * http://schema.org/priceComponent
 */
export const priceComponent: Property = 'http://schema.org/priceComponent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/priceComponentType
 */
export const priceComponentType: Property = 'http://schema.org/priceComponentType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/priceCurrency
 */
export const priceCurrency: Property = 'http://schema.org/priceCurrency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/priceRange
 */
export const priceRange: Property = 'http://schema.org/priceRange';

/**
 * 
 * 
 * 
 *
 * http://schema.org/priceSpecification
 */
export const priceSpecification: Property = 'http://schema.org/priceSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/priceType
 */
export const priceType: Property = 'http://schema.org/priceType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/priceValidUntil
 */
export const priceValidUntil: Property = 'http://schema.org/priceValidUntil';

/**
 * 
 * 
 * 
 *
 * http://schema.org/endDate
 */
export const endDate: Property = 'http://schema.org/endDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/primaryImageOfPage
 */
export const primaryImageOfPage: Property = 'http://schema.org/primaryImageOfPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/primaryPrevention
 */
export const primaryPrevention: Property = 'http://schema.org/primaryPrevention';

/**
 * 
 * 
 * 
 *
 * http://schema.org/printColumn
 */
export const printColumn: Property = 'http://schema.org/printColumn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/printEdition
 */
export const printEdition: Property = 'http://schema.org/printEdition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/printPage
 */
export const printPage: Property = 'http://schema.org/printPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/printSection
 */
export const printSection: Property = 'http://schema.org/printSection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/procedure
 */
export const procedure: Property = 'http://schema.org/procedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/procedureType
 */
export const procedureType: Property = 'http://schema.org/procedureType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/processingTime
 */
export const processingTime: Property = 'http://schema.org/processingTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/processorRequirements
 */
export const processorRequirements: Property = 'http://schema.org/processorRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/producer
 */
export const producer: Property = 'http://schema.org/producer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/produces
 */
export const produces: Property = 'http://schema.org/produces';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceOutput
 */
export const serviceOutput: Property = 'http://schema.org/serviceOutput';

/**
 * 
 * 
 * 
 *
 * http://schema.org/productGroupID
 */
export const productGroupID: Property = 'http://schema.org/productGroupID';

/**
 * 
 * 
 * 
 *
 * http://schema.org/productID
 */
export const productID: Property = 'http://schema.org/productID';

/**
 * 
 * 
 * 
 *
 * http://schema.org/productReturnDays
 */
export const productReturnDays: Property = 'http://schema.org/productReturnDays';

/**
 * 
 * 
 * 
 *
 * http://schema.org/merchantReturnDays
 */
export const merchantReturnDays: Property = 'http://schema.org/merchantReturnDays';

/**
 * 
 * 
 * 
 *
 * http://schema.org/productReturnLink
 */
export const productReturnLink: Property = 'http://schema.org/productReturnLink';

/**
 * 
 * 
 * 
 *
 * http://schema.org/merchantReturnLink
 */
export const merchantReturnLink: Property = 'http://schema.org/merchantReturnLink';

/**
 * 
 * 
 * 
 *
 * http://schema.org/productSupported
 */
export const productSupported: Property = 'http://schema.org/productSupported';

/**
 * 
 * 
 * 
 *
 * http://schema.org/productionCompany
 */
export const productionCompany: Property = 'http://schema.org/productionCompany';

/**
 * 
 * 
 * 
 *
 * http://schema.org/productionDate
 */
export const productionDate: Property = 'http://schema.org/productionDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/proficiencyLevel
 */
export const proficiencyLevel: Property = 'http://schema.org/proficiencyLevel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/program
 */
export const program: Property = 'http://schema.org/program';

/**
 * 
 * 
 * 
 *
 * http://schema.org/programMembershipUsed
 */
export const programMembershipUsed: Property = 'http://schema.org/programMembershipUsed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/programName
 */
export const programName: Property = 'http://schema.org/programName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/programPrerequisites
 */
export const programPrerequisites: Property = 'http://schema.org/programPrerequisites';

/**
 * 
 * 
 * 
 *
 * http://schema.org/programType
 */
export const programType: Property = 'http://schema.org/programType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/programmingLanguage
 */
export const programmingLanguage: Property = 'http://schema.org/programmingLanguage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/programmingModel
 */
export const programmingModel: Property = 'http://schema.org/programmingModel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/pronouns
 */
export const pronouns: Property = 'http://schema.org/pronouns';

/**
 * 
 * 
 * 
 *
 * http://schema.org/propertyID
 */
export const propertyID: Property = 'http://schema.org/propertyID';

/**
 * 
 * 
 * 
 *
 * http://schema.org/proprietaryName
 */
export const proprietaryName: Property = 'http://schema.org/proprietaryName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/proteinContent
 */
export const proteinContent: Property = 'http://schema.org/proteinContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/providerMobility
 */
export const providerMobility: Property = 'http://schema.org/providerMobility';

/**
 * 
 * 
 * 
 *
 * http://schema.org/providesService
 */
export const providesService: Property = 'http://schema.org/providesService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publicAccess
 */
export const publicAccess: Property = 'http://schema.org/publicAccess';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publicTransportClosuresInfo
 */
export const publicTransportClosuresInfo: Property = 'http://schema.org/publicTransportClosuresInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publication
 */
export const publication: Property = 'http://schema.org/publication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publicationType
 */
export const publicationType: Property = 'http://schema.org/publicationType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publishedBy
 */
export const publishedBy: Property = 'http://schema.org/publishedBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publishedOn
 */
export const publishedOn: Property = 'http://schema.org/publishedOn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publisher
 */
export const publisher: Property = 'http://schema.org/publisher';

/**
 * 
 * 
 * 
 *
 * http://schema.org/publisherImprint
 */
export const publisherImprint: Property = 'http://schema.org/publisherImprint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/purchaseDate
 */
export const purchaseDate: Property = 'http://schema.org/purchaseDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/purchasePriceLimit
 */
export const purchasePriceLimit: Property = 'http://schema.org/purchasePriceLimit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/purchaseType
 */
export const purchaseType: Property = 'http://schema.org/purchaseType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/qualifications
 */
export const qualifications: Property = 'http://schema.org/qualifications';

/**
 * 
 * 
 * 
 *
 * http://schema.org/qualifiedExpense
 */
export const qualifiedExpense: Property = 'http://schema.org/qualifiedExpense';

/**
 * 
 * 
 * 
 *
 * http://schema.org/quarantineGuidelines
 */
export const quarantineGuidelines: Property = 'http://schema.org/quarantineGuidelines';

/**
 * 
 * 
 * 
 *
 * http://schema.org/query
 */
export const query: Property = 'http://schema.org/query';

/**
 * 
 * 
 * 
 *
 * http://schema.org/quest
 */
export const quest: Property = 'http://schema.org/quest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/question
 */
export const question: Property = 'http://schema.org/question';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ratingCount
 */
export const ratingCount: Property = 'http://schema.org/ratingCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ratingExplanation
 */
export const ratingExplanation: Property = 'http://schema.org/ratingExplanation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ratingValue
 */
export const ratingValue: Property = 'http://schema.org/ratingValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/readBy
 */
export const readBy: Property = 'http://schema.org/readBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/readonlyValue
 */
export const readonlyValue: Property = 'http://schema.org/readonlyValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/realEstateAgent
 */
export const realEstateAgent: Property = 'http://schema.org/realEstateAgent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recipe
 */
export const recipe: Property = 'http://schema.org/recipe';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recipeCategory
 */
export const recipeCategory: Property = 'http://schema.org/recipeCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recipeCuisine
 */
export const recipeCuisine: Property = 'http://schema.org/recipeCuisine';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recipeInstructions
 */
export const recipeInstructions: Property = 'http://schema.org/recipeInstructions';

/**
 * 
 * 
 * 
 *
 * http://schema.org/step
 */
export const step: Property = 'http://schema.org/step';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recipeYield
 */
export const recipeYield: Property = 'http://schema.org/recipeYield';

/**
 * 
 * 
 * undefined
 * Note that `yield` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://schema.org/yield
 */
export const yield__workaround: Property = 'http://schema.org/yield';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recognizedBy
 */
export const recognizedBy: Property = 'http://schema.org/recognizedBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recognizingAuthority
 */
export const recognizingAuthority: Property = 'http://schema.org/recognizingAuthority';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recommendationStrength
 */
export const recommendationStrength: Property = 'http://schema.org/recommendationStrength';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recommendedIntake
 */
export const recommendedIntake: Property = 'http://schema.org/recommendedIntake';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recordLabel
 */
export const recordLabel: Property = 'http://schema.org/recordLabel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recourseLoan
 */
export const recourseLoan: Property = 'http://schema.org/recourseLoan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recycledContentPercentage
 */
export const recycledContentPercentage: Property = 'http://schema.org/recycledContentPercentage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/referee
 */
export const referee: Property = 'http://schema.org/referee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/referenceQuantity
 */
export const referenceQuantity: Property = 'http://schema.org/referenceQuantity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/referencesOrder
 */
export const referencesOrder: Property = 'http://schema.org/referencesOrder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/refundType
 */
export const refundType: Property = 'http://schema.org/refundType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/regionDrained
 */
export const regionDrained: Property = 'http://schema.org/regionDrained';

/**
 * 
 * 
 * 
 *
 * http://schema.org/regionsAllowed
 */
export const regionsAllowed: Property = 'http://schema.org/regionsAllowed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relatedAnatomy
 */
export const relatedAnatomy: Property = 'http://schema.org/relatedAnatomy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relatedCondition
 */
export const relatedCondition: Property = 'http://schema.org/relatedCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relatedDrug
 */
export const relatedDrug: Property = 'http://schema.org/relatedDrug';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relatedLink
 */
export const relatedLink: Property = 'http://schema.org/relatedLink';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relatedStructure
 */
export const relatedStructure: Property = 'http://schema.org/relatedStructure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relatedTherapy
 */
export const relatedTherapy: Property = 'http://schema.org/relatedTherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relatedTo
 */
export const relatedTo: Property = 'http://schema.org/relatedTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/releaseDate
 */
export const releaseDate: Property = 'http://schema.org/releaseDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/releaseNotes
 */
export const releaseNotes: Property = 'http://schema.org/releaseNotes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/releasedEvent
 */
export const releasedEvent: Property = 'http://schema.org/releasedEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relevantOccupation
 */
export const relevantOccupation: Property = 'http://schema.org/relevantOccupation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/relevantSpecialty
 */
export const relevantSpecialty: Property = 'http://schema.org/relevantSpecialty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/remainingAttendeeCapacity
 */
export const remainingAttendeeCapacity: Property = 'http://schema.org/remainingAttendeeCapacity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/renegotiableLoan
 */
export const renegotiableLoan: Property = 'http://schema.org/renegotiableLoan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/repeatCount
 */
export const repeatCount: Property = 'http://schema.org/repeatCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/repeatFrequency
 */
export const repeatFrequency: Property = 'http://schema.org/repeatFrequency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/frequency
 */
export const frequency: Property = 'http://schema.org/frequency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/repetitions
 */
export const repetitions: Property = 'http://schema.org/repetitions';

/**
 * 
 * 
 * 
 *
 * http://schema.org/replacee
 */
export const replacee: Property = 'http://schema.org/replacee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/replacer
 */
export const replacer: Property = 'http://schema.org/replacer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/replyToUrl
 */
export const replyToUrl: Property = 'http://schema.org/replyToUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reportNumber
 */
export const reportNumber: Property = 'http://schema.org/reportNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/representativeOfPage
 */
export const representativeOfPage: Property = 'http://schema.org/representativeOfPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/requiredCollateral
 */
export const requiredCollateral: Property = 'http://schema.org/requiredCollateral';

/**
 * 
 * 
 * 
 *
 * http://schema.org/requiredGender
 */
export const requiredGender: Property = 'http://schema.org/requiredGender';

/**
 * 
 * 
 * 
 *
 * http://schema.org/requiredMaxAge
 */
export const requiredMaxAge: Property = 'http://schema.org/requiredMaxAge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/requiredMinAge
 */
export const requiredMinAge: Property = 'http://schema.org/requiredMinAge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/requiredQuantity
 */
export const requiredQuantity: Property = 'http://schema.org/requiredQuantity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/requirements
 */
export const requirements: Property = 'http://schema.org/requirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/softwareRequirements
 */
export const softwareRequirements: Property = 'http://schema.org/softwareRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/requiresSubscription
 */
export const requiresSubscription: Property = 'http://schema.org/requiresSubscription';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reservationFor
 */
export const reservationFor: Property = 'http://schema.org/reservationFor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reservationId
 */
export const reservationId: Property = 'http://schema.org/reservationId';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reservationStatus
 */
export const reservationStatus: Property = 'http://schema.org/reservationStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reservedTicket
 */
export const reservedTicket: Property = 'http://schema.org/reservedTicket';

/**
 * 
 * 
 * 
 *
 * http://schema.org/responsibilities
 */
export const responsibilities: Property = 'http://schema.org/responsibilities';

/**
 * 
 * 
 * 
 *
 * http://schema.org/restPeriods
 */
export const restPeriods: Property = 'http://schema.org/restPeriods';

/**
 * 
 * 
 * 
 *
 * http://schema.org/restockingFee
 */
export const restockingFee: Property = 'http://schema.org/restockingFee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/resultComment
 */
export const resultComment: Property = 'http://schema.org/resultComment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/result
 */
export const result: Property = 'http://schema.org/result';

/**
 * 
 * 
 * 
 *
 * http://schema.org/resultReview
 */
export const resultReview: Property = 'http://schema.org/resultReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/returnFees
 */
export const returnFees: Property = 'http://schema.org/returnFees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/returnLabelSource
 */
export const returnLabelSource: Property = 'http://schema.org/returnLabelSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/returnMethod
 */
export const returnMethod: Property = 'http://schema.org/returnMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/returnPolicyCategory
 */
export const returnPolicyCategory: Property = 'http://schema.org/returnPolicyCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/returnPolicyCountry
 */
export const returnPolicyCountry: Property = 'http://schema.org/returnPolicyCountry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/returnPolicySeasonalOverride
 */
export const returnPolicySeasonalOverride: Property = 'http://schema.org/returnPolicySeasonalOverride';

/**
 * 
 * 
 * 
 *
 * http://schema.org/returnShippingFeesAmount
 */
export const returnShippingFeesAmount: Property = 'http://schema.org/returnShippingFeesAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reviewAspect
 */
export const reviewAspect: Property = 'http://schema.org/reviewAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reviewBody
 */
export const reviewBody: Property = 'http://schema.org/reviewBody';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reviewCount
 */
export const reviewCount: Property = 'http://schema.org/reviewCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reviewRating
 */
export const reviewRating: Property = 'http://schema.org/reviewRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reviewedBy
 */
export const reviewedBy: Property = 'http://schema.org/reviewedBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/reviews
 */
export const reviews: Property = 'http://schema.org/reviews';

/**
 * 
 * 
 * 
 *
 * http://schema.org/review
 */
export const review: Property = 'http://schema.org/review';

/**
 * 
 * 
 * 
 *
 * http://schema.org/riskFactor
 */
export const riskFactor: Property = 'http://schema.org/riskFactor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/risks
 */
export const risks: Property = 'http://schema.org/risks';

/**
 * 
 * 
 * 
 *
 * http://schema.org/roofLoad
 */
export const roofLoad: Property = 'http://schema.org/roofLoad';

/**
 * 
 * 
 * 
 *
 * http://schema.org/rsvpResponse
 */
export const rsvpResponse: Property = 'http://schema.org/rsvpResponse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/runsTo
 */
export const runsTo: Property = 'http://schema.org/runsTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/runtime
 */
export const runtime: Property = 'http://schema.org/runtime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/runtimePlatform
 */
export const runtimePlatform: Property = 'http://schema.org/runtimePlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/rxcui
 */
export const rxcui: Property = 'http://schema.org/rxcui';

/**
 * 
 * 
 * 
 *
 * http://schema.org/safetyConsideration
 */
export const safetyConsideration: Property = 'http://schema.org/safetyConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/salaryCurrency
 */
export const salaryCurrency: Property = 'http://schema.org/salaryCurrency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/salaryUponCompletion
 */
export const salaryUponCompletion: Property = 'http://schema.org/salaryUponCompletion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sampleType
 */
export const sampleType: Property = 'http://schema.org/sampleType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/codeSampleType
 */
export const codeSampleType: Property = 'http://schema.org/codeSampleType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/saturatedFatContent
 */
export const saturatedFatContent: Property = 'http://schema.org/saturatedFatContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/scheduleTimezone
 */
export const scheduleTimezone: Property = 'http://schema.org/scheduleTimezone';

/**
 * 
 * 
 * 
 *
 * http://schema.org/scheduledPaymentDate
 */
export const scheduledPaymentDate: Property = 'http://schema.org/scheduledPaymentDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/scheduledTime
 */
export const scheduledTime: Property = 'http://schema.org/scheduledTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/schemaVersion
 */
export const schemaVersion: Property = 'http://schema.org/schemaVersion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/schoolClosuresInfo
 */
export const schoolClosuresInfo: Property = 'http://schema.org/schoolClosuresInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/screenCount
 */
export const screenCount: Property = 'http://schema.org/screenCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/screenshot
 */
export const screenshot: Property = 'http://schema.org/screenshot';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sdDatePublished
 */
export const sdDatePublished: Property = 'http://schema.org/sdDatePublished';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sdLicense
 */
export const sdLicense: Property = 'http://schema.org/sdLicense';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sdPublisher
 */
export const sdPublisher: Property = 'http://schema.org/sdPublisher';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seasonNumber
 */
export const seasonNumber: Property = 'http://schema.org/seasonNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seasonalOverride
 */
export const seasonalOverride: Property = 'http://schema.org/seasonalOverride';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seasons
 */
export const seasons: Property = 'http://schema.org/seasons';

/**
 * 
 * 
 * 
 *
 * http://schema.org/season
 */
export const season: Property = 'http://schema.org/season';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seatNumber
 */
export const seatNumber: Property = 'http://schema.org/seatNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seatRow
 */
export const seatRow: Property = 'http://schema.org/seatRow';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seatSection
 */
export const seatSection: Property = 'http://schema.org/seatSection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seatingCapacity
 */
export const seatingCapacity: Property = 'http://schema.org/seatingCapacity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seatingType
 */
export const seatingType: Property = 'http://schema.org/seatingType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/secondaryPrevention
 */
export const secondaryPrevention: Property = 'http://schema.org/secondaryPrevention';

/**
 * 
 * 
 * 
 *
 * http://schema.org/securityClearanceRequirement
 */
export const securityClearanceRequirement: Property = 'http://schema.org/securityClearanceRequirement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/securityScreening
 */
export const securityScreening: Property = 'http://schema.org/securityScreening';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seeks
 */
export const seeks: Property = 'http://schema.org/seeks';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sender
 */
export const sender: Property = 'http://schema.org/sender';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sensoryRequirement
 */
export const sensoryRequirement: Property = 'http://schema.org/sensoryRequirement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sensoryUnit
 */
export const sensoryUnit: Property = 'http://schema.org/sensoryUnit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/seriousAdverseOutcome
 */
export const seriousAdverseOutcome: Property = 'http://schema.org/seriousAdverseOutcome';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serverStatus
 */
export const serverStatus: Property = 'http://schema.org/serverStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/servesCuisine
 */
export const servesCuisine: Property = 'http://schema.org/servesCuisine';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceAudience
 */
export const serviceAudience: Property = 'http://schema.org/serviceAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/audience
 */
export const audience: Property = 'http://schema.org/audience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceLocation
 */
export const serviceLocation: Property = 'http://schema.org/serviceLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceOperator
 */
export const serviceOperator: Property = 'http://schema.org/serviceOperator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/servicePhone
 */
export const servicePhone: Property = 'http://schema.org/servicePhone';

/**
 * 
 * 
 * 
 *
 * http://schema.org/servicePostalAddress
 */
export const servicePostalAddress: Property = 'http://schema.org/servicePostalAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceSmsNumber
 */
export const serviceSmsNumber: Property = 'http://schema.org/serviceSmsNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceType
 */
export const serviceType: Property = 'http://schema.org/serviceType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serviceUrl
 */
export const serviceUrl: Property = 'http://schema.org/serviceUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/servingSize
 */
export const servingSize: Property = 'http://schema.org/servingSize';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sha256
 */
export const sha256: Property = 'http://schema.org/sha256';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sharedContent
 */
export const sharedContent: Property = 'http://schema.org/sharedContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/shippingConditions
 */
export const shippingConditions: Property = 'http://schema.org/shippingConditions';

/**
 * 
 * 
 * 
 *
 * http://schema.org/shippingDestination
 */
export const shippingDestination: Property = 'http://schema.org/shippingDestination';

/**
 * 
 * 
 * 
 *
 * http://schema.org/shippingDetails
 */
export const shippingDetails: Property = 'http://schema.org/shippingDetails';

/**
 * 
 * 
 * 
 *
 * http://schema.org/shippingLabel
 */
export const shippingLabel: Property = 'http://schema.org/shippingLabel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/shippingOrigin
 */
export const shippingOrigin: Property = 'http://schema.org/shippingOrigin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/shippingRate
 */
export const shippingRate: Property = 'http://schema.org/shippingRate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/shippingSettingsLink
 */
export const shippingSettingsLink: Property = 'http://schema.org/shippingSettingsLink';

/**
 * 
 * 
 * 
 *
 * http://schema.org/siblings
 */
export const siblings: Property = 'http://schema.org/siblings';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sibling
 */
export const sibling: Property = 'http://schema.org/sibling';

/**
 * 
 * 
 * 
 *
 * http://schema.org/signDetected
 */
export const signDetected: Property = 'http://schema.org/signDetected';

/**
 * 
 * 
 * 
 *
 * http://schema.org/signOrSymptom
 */
export const signOrSymptom: Property = 'http://schema.org/signOrSymptom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/significance
 */
export const significance: Property = 'http://schema.org/significance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/significantLinks
 */
export const significantLinks: Property = 'http://schema.org/significantLinks';

/**
 * 
 * 
 * 
 *
 * http://schema.org/significantLink
 */
export const significantLink: Property = 'http://schema.org/significantLink';

/**
 * 
 * 
 * 
 *
 * http://schema.org/size
 */
export const size: Property = 'http://schema.org/size';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sizeGroup
 */
export const sizeGroup: Property = 'http://schema.org/sizeGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sizeSystem
 */
export const sizeSystem: Property = 'http://schema.org/sizeSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/skills
 */
export const skills: Property = 'http://schema.org/skills';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sku
 */
export const sku: Property = 'http://schema.org/sku';

/**
 * 
 * 
 * 
 *
 * http://schema.org/slogan
 */
export const slogan: Property = 'http://schema.org/slogan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/smiles
 */
export const smiles: Property = 'http://schema.org/smiles';

/**
 * 
 * 
 * 
 *
 * http://schema.org/smokingAllowed
 */
export const smokingAllowed: Property = 'http://schema.org/smokingAllowed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sodiumContent
 */
export const sodiumContent: Property = 'http://schema.org/sodiumContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/softwareAddOn
 */
export const softwareAddOn: Property = 'http://schema.org/softwareAddOn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/softwareHelp
 */
export const softwareHelp: Property = 'http://schema.org/softwareHelp';

/**
 * 
 * 
 * 
 *
 * http://schema.org/softwareVersion
 */
export const softwareVersion: Property = 'http://schema.org/softwareVersion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sourceOrganization
 */
export const sourceOrganization: Property = 'http://schema.org/sourceOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sourcedFrom
 */
export const sourcedFrom: Property = 'http://schema.org/sourcedFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/spatial
 */
export const spatial: Property = 'http://schema.org/spatial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/speakable
 */
export const speakable: Property = 'http://schema.org/speakable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/specialCommitments
 */
export const specialCommitments: Property = 'http://schema.org/specialCommitments';

/**
 * 
 * 
 * 
 *
 * http://schema.org/specialOpeningHoursSpecification
 */
export const specialOpeningHoursSpecification: Property = 'http://schema.org/specialOpeningHoursSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/specialty
 */
export const specialty: Property = 'http://schema.org/specialty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/specification
 */
export const specification: Property = 'http://schema.org/specification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/speechToTextMarkup
 */
export const speechToTextMarkup: Property = 'http://schema.org/speechToTextMarkup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/speed
 */
export const speed: Property = 'http://schema.org/speed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/spokenByCharacter
 */
export const spokenByCharacter: Property = 'http://schema.org/spokenByCharacter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sport
 */
export const sport: Property = 'http://schema.org/sport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sportsActivityLocation
 */
export const sportsActivityLocation: Property = 'http://schema.org/sportsActivityLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sportsEvent
 */
export const sportsEvent: Property = 'http://schema.org/sportsEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sportsTeam
 */
export const sportsTeam: Property = 'http://schema.org/sportsTeam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/spouse
 */
export const spouse: Property = 'http://schema.org/spouse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/stage
 */
export const stage: Property = 'http://schema.org/stage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/stageAsNumber
 */
export const stageAsNumber: Property = 'http://schema.org/stageAsNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/starRating
 */
export const starRating: Property = 'http://schema.org/starRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/startDate
 */
export const startDate: Property = 'http://schema.org/startDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/startOffset
 */
export const startOffset: Property = 'http://schema.org/startOffset';

/**
 * 
 * 
 * 
 *
 * http://schema.org/startTime
 */
export const startTime: Property = 'http://schema.org/startTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/statType
 */
export const statType: Property = 'http://schema.org/statType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/status
 */
export const status: Property = 'http://schema.org/status';

/**
 * 
 * 
 * 
 *
 * http://schema.org/steeringPosition
 */
export const steeringPosition: Property = 'http://schema.org/steeringPosition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/stepValue
 */
export const stepValue: Property = 'http://schema.org/stepValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/steps
 */
export const steps: Property = 'http://schema.org/steps';

/**
 * 
 * 
 * 
 *
 * http://schema.org/storageRequirements
 */
export const storageRequirements: Property = 'http://schema.org/storageRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/streetAddress
 */
export const streetAddress: Property = 'http://schema.org/streetAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/strengthUnit
 */
export const strengthUnit: Property = 'http://schema.org/strengthUnit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/strengthValue
 */
export const strengthValue: Property = 'http://schema.org/strengthValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/structuralClass
 */
export const structuralClass: Property = 'http://schema.org/structuralClass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/study
 */
export const study: Property = 'http://schema.org/study';

/**
 * 
 * 
 * 
 *
 * http://schema.org/studyDesign
 */
export const studyDesign: Property = 'http://schema.org/studyDesign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/studyLocation
 */
export const studyLocation: Property = 'http://schema.org/studyLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/studySubject
 */
export const studySubject: Property = 'http://schema.org/studySubject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/stupidProperty
 */
export const stupidProperty: Property = 'http://schema.org/stupidProperty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subEvents
 */
export const subEvents: Property = 'http://schema.org/subEvents';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subEvent
 */
export const subEvent: Property = 'http://schema.org/subEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subReservation
 */
export const subReservation: Property = 'http://schema.org/subReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subStageSuffix
 */
export const subStageSuffix: Property = 'http://schema.org/subStageSuffix';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subStructure
 */
export const subStructure: Property = 'http://schema.org/subStructure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subTest
 */
export const subTest: Property = 'http://schema.org/subTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/substanceOfConcern
 */
export const substanceOfConcern: Property = 'http://schema.org/substanceOfConcern';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subtitleLanguage
 */
export const subtitleLanguage: Property = 'http://schema.org/subtitleLanguage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/successorOf
 */
export const successorOf: Property = 'http://schema.org/successorOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/sugarContent
 */
export const sugarContent: Property = 'http://schema.org/sugarContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/suggestedAge
 */
export const suggestedAge: Property = 'http://schema.org/suggestedAge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/suggestedGender
 */
export const suggestedGender: Property = 'http://schema.org/suggestedGender';

/**
 * 
 * 
 * 
 *
 * http://schema.org/suggestedMaxAge
 */
export const suggestedMaxAge: Property = 'http://schema.org/suggestedMaxAge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/suggestedMeasurement
 */
export const suggestedMeasurement: Property = 'http://schema.org/suggestedMeasurement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/suggestedMinAge
 */
export const suggestedMinAge: Property = 'http://schema.org/suggestedMinAge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/suitableForDiet
 */
export const suitableForDiet: Property = 'http://schema.org/suitableForDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/supplyTo
 */
export const supplyTo: Property = 'http://schema.org/supplyTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/supportingData
 */
export const supportingData: Property = 'http://schema.org/supportingData';

/**
 * 
 * 
 * 
 *
 * http://schema.org/surface
 */
export const surface: Property = 'http://schema.org/surface';

/**
 * 
 * 
 * 
 *
 * http://schema.org/artworkSurface
 */
export const artworkSurface: Property = 'http://schema.org/artworkSurface';

/**
 * 
 * 
 * 
 *
 * http://schema.org/syllabusSections
 */
export const syllabusSections: Property = 'http://schema.org/syllabusSections';

/**
 * 
 * 
 * 
 *
 * http://schema.org/target
 */
export const target: Property = 'http://schema.org/target';

/**
 * 
 * 
 * 
 *
 * http://schema.org/targetDescription
 */
export const targetDescription: Property = 'http://schema.org/targetDescription';

/**
 * 
 * 
 * 
 *
 * http://schema.org/targetName
 */
export const targetName: Property = 'http://schema.org/targetName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/targetPlatform
 */
export const targetPlatform: Property = 'http://schema.org/targetPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/targetPopulation
 */
export const targetPopulation: Property = 'http://schema.org/targetPopulation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/targetProduct
 */
export const targetProduct: Property = 'http://schema.org/targetProduct';

/**
 * 
 * 
 * 
 *
 * http://schema.org/targetUrl
 */
export const targetUrl: Property = 'http://schema.org/targetUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/taxID
 */
export const taxID: Property = 'http://schema.org/taxID';

/**
 * 
 * 
 * 
 *
 * http://schema.org/taxonRank
 */
export const taxonRank: Property = 'http://schema.org/taxonRank';

/**
 * 
 * 
 * 
 *
 * http://schema.org/taxonomicRange
 */
export const taxonomicRange: Property = 'http://schema.org/taxonomicRange';

/**
 * 
 * 
 * 
 *
 * http://schema.org/teaches
 */
export const teaches: Property = 'http://schema.org/teaches';

/**
 * 
 * 
 * 
 *
 * http://schema.org/telephone
 */
export const telephone: Property = 'http://schema.org/telephone';

/**
 * 
 * 
 * 
 *
 * http://schema.org/temporal
 */
export const temporal: Property = 'http://schema.org/temporal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/termDuration
 */
export const termDuration: Property = 'http://schema.org/termDuration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/termsOfService
 */
export const termsOfService: Property = 'http://schema.org/termsOfService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/termsPerYear
 */
export const termsPerYear: Property = 'http://schema.org/termsPerYear';

/**
 * 
 * 
 * 
 *
 * http://schema.org/text
 */
export const text: Property = 'http://schema.org/text';

/**
 * 
 * 
 * 
 *
 * http://schema.org/textValue
 */
export const textValue: Property = 'http://schema.org/textValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/thumbnail
 */
export const thumbnail: Property = 'http://schema.org/thumbnail';

/**
 * 
 * 
 * 
 *
 * http://schema.org/thumbnailUrl
 */
export const thumbnailUrl: Property = 'http://schema.org/thumbnailUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tickerSymbol
 */
export const tickerSymbol: Property = 'http://schema.org/tickerSymbol';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ticketNumber
 */
export const ticketNumber: Property = 'http://schema.org/ticketNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ticketToken
 */
export const ticketToken: Property = 'http://schema.org/ticketToken';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ticketedSeat
 */
export const ticketedSeat: Property = 'http://schema.org/ticketedSeat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/timeOfDay
 */
export const timeOfDay: Property = 'http://schema.org/timeOfDay';

/**
 * 
 * 
 * 
 *
 * http://schema.org/timeRequired
 */
export const timeRequired: Property = 'http://schema.org/timeRequired';

/**
 * 
 * 
 * 
 *
 * http://schema.org/timeToComplete
 */
export const timeToComplete: Property = 'http://schema.org/timeToComplete';

/**
 * 
 * 
 * 
 *
 * http://schema.org/timestamp
 */
export const timestamp: Property = 'http://schema.org/timestamp';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tissueSample
 */
export const tissueSample: Property = 'http://schema.org/tissueSample';

/**
 * 
 * 
 * 
 *
 * http://schema.org/title
 */
export const title: Property = 'http://schema.org/title';

/**
 * 
 * 
 * 
 *
 * http://schema.org/titleEIDR
 */
export const titleEIDR: Property = 'http://schema.org/titleEIDR';

/**
 * 
 * 
 * 
 *
 * http://schema.org/toLocation
 */
export const toLocation: Property = 'http://schema.org/toLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/toRecipient
 */
export const toRecipient: Property = 'http://schema.org/toRecipient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tocContinuation
 */
export const tocContinuation: Property = 'http://schema.org/tocContinuation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tocEntry
 */
export const tocEntry: Property = 'http://schema.org/tocEntry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasPart
 */
export const hasPart: Property = 'http://schema.org/hasPart';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tongueWeight
 */
export const tongueWeight: Property = 'http://schema.org/tongueWeight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tool
 */
export const tool: Property = 'http://schema.org/tool';

/**
 * 
 * 
 * 
 *
 * http://schema.org/torque
 */
export const torque: Property = 'http://schema.org/torque';

/**
 * 
 * 
 * 
 *
 * http://schema.org/totalHistoricalEnrollment
 */
export const totalHistoricalEnrollment: Property = 'http://schema.org/totalHistoricalEnrollment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/totalJobOpenings
 */
export const totalJobOpenings: Property = 'http://schema.org/totalJobOpenings';

/**
 * 
 * 
 * 
 *
 * http://schema.org/totalPaymentDue
 */
export const totalPaymentDue: Property = 'http://schema.org/totalPaymentDue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/totalPrice
 */
export const totalPrice: Property = 'http://schema.org/totalPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/totalTime
 */
export const totalTime: Property = 'http://schema.org/totalTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tourBookingPage
 */
export const tourBookingPage: Property = 'http://schema.org/tourBookingPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/touristType
 */
export const touristType: Property = 'http://schema.org/touristType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trackingNumber
 */
export const trackingNumber: Property = 'http://schema.org/trackingNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trackingUrl
 */
export const trackingUrl: Property = 'http://schema.org/trackingUrl';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tracks
 */
export const tracks: Property = 'http://schema.org/tracks';

/**
 * 
 * 
 * 
 *
 * http://schema.org/track
 */
export const track: Property = 'http://schema.org/track';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trailer
 */
export const trailer: Property = 'http://schema.org/trailer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trailerWeight
 */
export const trailerWeight: Property = 'http://schema.org/trailerWeight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trainName
 */
export const trainName: Property = 'http://schema.org/trainName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trainNumber
 */
export const trainNumber: Property = 'http://schema.org/trainNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trainingSalary
 */
export const trainingSalary: Property = 'http://schema.org/trainingSalary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/transFatContent
 */
export const transFatContent: Property = 'http://schema.org/transFatContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/transcript
 */
export const transcript: Property = 'http://schema.org/transcript';

/**
 * 
 * 
 * 
 *
 * http://schema.org/transitTime
 */
export const transitTime: Property = 'http://schema.org/transitTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/transitTimeLabel
 */
export const transitTimeLabel: Property = 'http://schema.org/transitTimeLabel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/translator
 */
export const translator: Property = 'http://schema.org/translator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/transmissionMethod
 */
export const transmissionMethod: Property = 'http://schema.org/transmissionMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/travelBans
 */
export const travelBans: Property = 'http://schema.org/travelBans';

/**
 * 
 * 
 * 
 *
 * http://schema.org/trialDesign
 */
export const trialDesign: Property = 'http://schema.org/trialDesign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tributary
 */
export const tributary: Property = 'http://schema.org/tributary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/tripOrigin
 */
export const tripOrigin: Property = 'http://schema.org/tripOrigin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/typeOfBed
 */
export const typeOfBed: Property = 'http://schema.org/typeOfBed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/typeOfGood
 */
export const typeOfGood: Property = 'http://schema.org/typeOfGood';

/**
 * 
 * 
 * 
 *
 * http://schema.org/typicalAgeRange
 */
export const typicalAgeRange: Property = 'http://schema.org/typicalAgeRange';

/**
 * 
 * 
 * 
 *
 * http://schema.org/typicalCreditsPerTerm
 */
export const typicalCreditsPerTerm: Property = 'http://schema.org/typicalCreditsPerTerm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/typicalTest
 */
export const typicalTest: Property = 'http://schema.org/typicalTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/underName
 */
export const underName: Property = 'http://schema.org/underName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/unitCode
 */
export const unitCode: Property = 'http://schema.org/unitCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/unitText
 */
export const unitText: Property = 'http://schema.org/unitText';

/**
 * 
 * 
 * 
 *
 * http://schema.org/unnamedSourcesPolicy
 */
export const unnamedSourcesPolicy: Property = 'http://schema.org/unnamedSourcesPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/unsaturatedFatContent
 */
export const unsaturatedFatContent: Property = 'http://schema.org/unsaturatedFatContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/uploadDate
 */
export const uploadDate: Property = 'http://schema.org/uploadDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/upvoteCount
 */
export const upvoteCount: Property = 'http://schema.org/upvoteCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/url
 */
export const url: Property = 'http://schema.org/url';

/**
 * 
 * 
 * 
 *
 * http://schema.org/urlTemplate
 */
export const urlTemplate: Property = 'http://schema.org/urlTemplate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/usNPI
 */
export const usNPI: Property = 'http://schema.org/usNPI';

/**
 * 
 * 
 * 
 *
 * http://schema.org/usedToDiagnose
 */
export const usedToDiagnose: Property = 'http://schema.org/usedToDiagnose';

/**
 * 
 * 
 * 
 *
 * http://schema.org/userInteractionCount
 */
export const userInteractionCount: Property = 'http://schema.org/userInteractionCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/usesDevice
 */
export const usesDevice: Property = 'http://schema.org/usesDevice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/usesHealthPlanIdStandard
 */
export const usesHealthPlanIdStandard: Property = 'http://schema.org/usesHealthPlanIdStandard';

/**
 * 
 * 
 * 
 *
 * http://schema.org/utterances
 */
export const utterances: Property = 'http://schema.org/utterances';

/**
 * 
 * 
 * 
 *
 * http://schema.org/validFor
 */
export const validFor: Property = 'http://schema.org/validFor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/validForMemberTier
 */
export const validForMemberTier: Property = 'http://schema.org/validForMemberTier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/validFrom
 */
export const validFrom: Property = 'http://schema.org/validFrom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/validIn
 */
export const validIn: Property = 'http://schema.org/validIn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/validThrough
 */
export const validThrough: Property = 'http://schema.org/validThrough';

/**
 * 
 * 
 * 
 *
 * http://schema.org/validUntil
 */
export const validUntil: Property = 'http://schema.org/validUntil';

/**
 * 
 * 
 * 
 *
 * http://schema.org/value
 */
export const value: Property = 'http://schema.org/value';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valueAddedTaxIncluded
 */
export const valueAddedTaxIncluded: Property = 'http://schema.org/valueAddedTaxIncluded';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valueGroup
 */
export const valueGroup: Property = 'http://schema.org/valueGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valueMaxLength
 */
export const valueMaxLength: Property = 'http://schema.org/valueMaxLength';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valueMinLength
 */
export const valueMinLength: Property = 'http://schema.org/valueMinLength';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valueName
 */
export const valueName: Property = 'http://schema.org/valueName';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valuePattern
 */
export const valuePattern: Property = 'http://schema.org/valuePattern';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valueReference
 */
export const valueReference: Property = 'http://schema.org/valueReference';

/**
 * 
 * 
 * 
 *
 * http://schema.org/valueRequired
 */
export const valueRequired: Property = 'http://schema.org/valueRequired';

/**
 * 
 * 
 * 
 *
 * http://schema.org/variableMeasured
 */
export const variableMeasured: Property = 'http://schema.org/variableMeasured';

/**
 * 
 * 
 * 
 *
 * http://schema.org/variablesMeasured
 */
export const variablesMeasured: Property = 'http://schema.org/variablesMeasured';

/**
 * 
 * 
 * 
 *
 * http://schema.org/variantCover
 */
export const variantCover: Property = 'http://schema.org/variantCover';

/**
 * 
 * 
 * 
 *
 * http://schema.org/variesBy
 */
export const variesBy: Property = 'http://schema.org/variesBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vatID
 */
export const vatID: Property = 'http://schema.org/vatID';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleConfiguration
 */
export const vehicleConfiguration: Property = 'http://schema.org/vehicleConfiguration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleEngine
 */
export const vehicleEngine: Property = 'http://schema.org/vehicleEngine';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleIdentificationNumber
 */
export const vehicleIdentificationNumber: Property = 'http://schema.org/vehicleIdentificationNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/serialNumber
 */
export const serialNumber: Property = 'http://schema.org/serialNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleInteriorColor
 */
export const vehicleInteriorColor: Property = 'http://schema.org/vehicleInteriorColor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleInteriorType
 */
export const vehicleInteriorType: Property = 'http://schema.org/vehicleInteriorType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleModelDate
 */
export const vehicleModelDate: Property = 'http://schema.org/vehicleModelDate';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleSeatingCapacity
 */
export const vehicleSeatingCapacity: Property = 'http://schema.org/vehicleSeatingCapacity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleSpecialUsage
 */
export const vehicleSpecialUsage: Property = 'http://schema.org/vehicleSpecialUsage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vehicleTransmission
 */
export const vehicleTransmission: Property = 'http://schema.org/vehicleTransmission';

/**
 * 
 * 
 * 
 *
 * http://schema.org/vendor
 */
export const vendor: Property = 'http://schema.org/vendor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/verificationFactCheckingPolicy
 */
export const verificationFactCheckingPolicy: Property = 'http://schema.org/verificationFactCheckingPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/version
 */
export const version: Property = 'http://schema.org/version';

/**
 * 
 * 
 * 
 *
 * http://schema.org/video
 */
export const video: Property = 'http://schema.org/video';

/**
 * 
 * 
 * 
 *
 * http://schema.org/videoFormat
 */
export const videoFormat: Property = 'http://schema.org/videoFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/videoFrameSize
 */
export const videoFrameSize: Property = 'http://schema.org/videoFrameSize';

/**
 * 
 * 
 * 
 *
 * http://schema.org/videoQuality
 */
export const videoQuality: Property = 'http://schema.org/videoQuality';

/**
 * 
 * 
 * 
 *
 * http://schema.org/volumeNumber
 */
export const volumeNumber: Property = 'http://schema.org/volumeNumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/warning
 */
export const warning: Property = 'http://schema.org/warning';

/**
 * 
 * 
 * 
 *
 * http://schema.org/warrantyPromise
 */
export const warrantyPromise: Property = 'http://schema.org/warrantyPromise';

/**
 * 
 * 
 * 
 *
 * http://schema.org/warranty
 */
export const warranty: Property = 'http://schema.org/warranty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/warrantyScope
 */
export const warrantyScope: Property = 'http://schema.org/warrantyScope';

/**
 * 
 * 
 * 
 *
 * http://schema.org/webCheckinTime
 */
export const webCheckinTime: Property = 'http://schema.org/webCheckinTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/webFeed
 */
export const webFeed: Property = 'http://schema.org/webFeed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/weight
 */
export const weight: Property = 'http://schema.org/weight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/weightPercentage
 */
export const weightPercentage: Property = 'http://schema.org/weightPercentage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/weightTotal
 */
export const weightTotal: Property = 'http://schema.org/weightTotal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/wheelbase
 */
export const wheelbase: Property = 'http://schema.org/wheelbase';

/**
 * 
 * 
 * 
 *
 * http://schema.org/width
 */
export const width: Property = 'http://schema.org/width';

/**
 * 
 * 
 * 
 *
 * http://schema.org/winner
 */
export const winner: Property = 'http://schema.org/winner';

/**
 * 
 * 
 * 
 *
 * http://schema.org/wordCount
 */
export const wordCount: Property = 'http://schema.org/wordCount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workHours
 */
export const workHours: Property = 'http://schema.org/workHours';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workLocation
 */
export const workLocation: Property = 'http://schema.org/workLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workPerformed
 */
export const workPerformed: Property = 'http://schema.org/workPerformed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workFeatured
 */
export const workFeatured: Property = 'http://schema.org/workFeatured';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workPresented
 */
export const workPresented: Property = 'http://schema.org/workPresented';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workload
 */
export const workload: Property = 'http://schema.org/workload';

/**
 * 
 * 
 * 
 *
 * http://schema.org/worksFor
 */
export const worksFor: Property = 'http://schema.org/worksFor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/worstRating
 */
export const worstRating: Property = 'http://schema.org/worstRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/xpath
 */
export const xpath: Property = 'http://schema.org/xpath';

/**
 * 
 * 
 * 
 *
 * http://schema.org/yearBuilt
 */
export const yearBuilt: Property = 'http://schema.org/yearBuilt';

/**
 * 
 * 
 * 
 *
 * http://schema.org/yearlyRevenue
 */
export const yearlyRevenue: Property = 'http://schema.org/yearlyRevenue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/yearsInOperation
 */
export const yearsInOperation: Property = 'http://schema.org/yearsInOperation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/albumRelease
 */
export const albumRelease: Property = 'http://schema.org/albumRelease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/releaseOf
 */
export const releaseOf: Property = 'http://schema.org/releaseOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/alumni
 */
export const alumni: Property = 'http://schema.org/alumni';

/**
 * 
 * 
 * 
 *
 * http://schema.org/alumniOf
 */
export const alumniOf: Property = 'http://schema.org/alumniOf';

/**
 * archiveHeld
 * 
 * Collection, [fonds](https://en.wikipedia.org/wiki/Fonds), or item held, kept or maintained by an [[ArchiveOrganization]].
 *
 * http://schema.org/archiveHeld
 */
export const archiveHeld: Property = 'http://schema.org/archiveHeld';

/**
 * holdingArchive
 * 
 * [[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]].
 *
 * http://schema.org/holdingArchive
 */
export const holdingArchive: Property = 'http://schema.org/holdingArchive';

/**
 * 
 * 
 * 
 *
 * http://schema.org/cause
 */
export const cause: Property = 'http://schema.org/cause';

/**
 * 
 * 
 * 
 *
 * http://schema.org/causeOf
 */
export const causeOf: Property = 'http://schema.org/causeOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/childTaxon
 */
export const childTaxon: Property = 'http://schema.org/childTaxon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/parentTaxon
 */
export const parentTaxon: Property = 'http://schema.org/parentTaxon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/containsPlace
 */
export const containsPlace: Property = 'http://schema.org/containsPlace';

/**
 * 
 * 
 * 
 *
 * http://schema.org/containsSeason
 */
export const containsSeason: Property = 'http://schema.org/containsSeason';

/**
 * 
 * 
 * 
 *
 * http://schema.org/contentLocation
 */
export const contentLocation: Property = 'http://schema.org/contentLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/dataset
 */
export const dataset: Property = 'http://schema.org/dataset';

/**
 * 
 * 
 * 
 *
 * http://schema.org/encodesBioChemEntity
 */
export const encodesBioChemEntity: Property = 'http://schema.org/encodesBioChemEntity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isEncodedByBioChemEntity
 */
export const isEncodedByBioChemEntity: Property = 'http://schema.org/isEncodedByBioChemEntity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/encodesCreativeWork
 */
export const encodesCreativeWork: Property = 'http://schema.org/encodesCreativeWork';

/**
 * 
 * 
 * 
 *
 * http://schema.org/exampleOfWork
 */
export const exampleOfWork: Property = 'http://schema.org/exampleOfWork';

/**
 * 
 * 
 * 
 *
 * http://schema.org/fundedItem
 */
export const fundedItem: Property = 'http://schema.org/fundedItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/funding
 */
export const funding: Property = 'http://schema.org/funding';

/**
 * 
 * 
 * 
 *
 * http://schema.org/game
 */
export const game: Property = 'http://schema.org/game';

/**
 * 
 * 
 * 
 *
 * http://schema.org/gameServer
 */
export const gameServer: Property = 'http://schema.org/gameServer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasBioChemEntityPart
 */
export const hasBioChemEntityPart: Property = 'http://schema.org/hasBioChemEntityPart';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isPartOfBioChemEntity
 */
export const isPartOfBioChemEntity: Property = 'http://schema.org/isPartOfBioChemEntity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasBroadcastChannel
 */
export const hasBroadcastChannel: Property = 'http://schema.org/hasBroadcastChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/providesBroadcastService
 */
export const providesBroadcastService: Property = 'http://schema.org/providesBroadcastService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasTiers
 */
export const hasTiers: Property = 'http://schema.org/hasTiers';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isTierOf
 */
export const isTierOf: Property = 'http://schema.org/isTierOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/hasVariant
 */
export const hasVariant: Property = 'http://schema.org/hasVariant';

/**
 * 
 * 
 * 
 *
 * http://schema.org/isVariantOf
 */
export const isVariantOf: Property = 'http://schema.org/isVariantOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/itemOffered
 */
export const itemOffered: Property = 'http://schema.org/itemOffered';

/**
 * 
 * 
 * 
 *
 * http://schema.org/offers
 */
export const offers: Property = 'http://schema.org/offers';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mainEntity
 */
export const mainEntity: Property = 'http://schema.org/mainEntity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/about
 */
export const about: Property = 'http://schema.org/about';

/**
 * 
 * 
 * 
 *
 * http://schema.org/mainEntityOfPage
 */
export const mainEntityOfPage: Property = 'http://schema.org/mainEntityOfPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/makesOffer
 */
export const makesOffer: Property = 'http://schema.org/makesOffer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/offeredBy
 */
export const offeredBy: Property = 'http://schema.org/offeredBy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/owner
 */
export const owner: Property = 'http://schema.org/owner';

/**
 * 
 * 
 * 
 *
 * http://schema.org/owns
 */
export const owns: Property = 'http://schema.org/owns';

/**
 * 
 * 
 * 
 *
 * http://schema.org/partOfTrip
 */
export const partOfTrip: Property = 'http://schema.org/partOfTrip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subTrip
 */
export const subTrip: Property = 'http://schema.org/subTrip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recordedAs
 */
export const recordedAs: Property = 'http://schema.org/recordedAs';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recordingOf
 */
export const recordingOf: Property = 'http://schema.org/recordingOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recordedAt
 */
export const recordedAt: Property = 'http://schema.org/recordedAt';

/**
 * 
 * 
 * 
 *
 * http://schema.org/recordedIn
 */
export const recordedIn: Property = 'http://schema.org/recordedIn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subOrganization
 */
export const subOrganization: Property = 'http://schema.org/subOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/subjectOf
 */
export const subjectOf: Property = 'http://schema.org/subjectOf';

/**
 * 
 * 
 * 
 *
 * http://schema.org/superEvent
 */
export const superEvent: Property = 'http://schema.org/superEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/translationOfWork
 */
export const translationOfWork: Property = 'http://schema.org/translationOfWork';

/**
 * 
 * 
 * 
 *
 * http://schema.org/workTranslation
 */
export const workTranslation: Property = 'http://schema.org/workTranslation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MediaObject
 */
export const MediaObject: Class = 'http://schema.org/MediaObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AMRadioChannel
 */
export const AMRadioChannel: Class = 'http://schema.org/AMRadioChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadioChannel
 */
export const RadioChannel: Class = 'http://schema.org/RadioChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/APIReference
 */
export const APIReference: Class = 'http://schema.org/APIReference';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TechArticle
 */
export const TechArticle: Class = 'http://schema.org/TechArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AboutPage
 */
export const AboutPage: Class = 'http://schema.org/AboutPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WebPage
 */
export const WebPage: Class = 'http://schema.org/WebPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AcceptAction
 */
export const AcceptAction: Class = 'http://schema.org/AcceptAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AllocateAction
 */
export const AllocateAction: Class = 'http://schema.org/AllocateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Accommodation
 */
export const Accommodation: Class = 'http://schema.org/Accommodation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Place
 */
export const Place: Class = 'http://schema.org/Place';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AccountingService
 */
export const AccountingService: Class = 'http://schema.org/AccountingService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FinancialService
 */
export const FinancialService: Class = 'http://schema.org/FinancialService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AchieveAction
 */
export const AchieveAction: Class = 'http://schema.org/AchieveAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Action
 */
export const Action: Class = 'http://schema.org/Action';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Thing
 */
export const Thing: Class = 'http://schema.org/Thing';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ActionAccessSpecification
 */
export const ActionAccessSpecification: Class = 'http://schema.org/ActionAccessSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Intangible
 */
export const Intangible: Class = 'http://schema.org/Intangible';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ActionStatusType
 */
export const ActionStatusType: Class = 'http://schema.org/ActionStatusType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StatusEnumeration
 */
export const StatusEnumeration: Class = 'http://schema.org/StatusEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ActivateAction
 */
export const ActivateAction: Class = 'http://schema.org/ActivateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ControlAction
 */
export const ControlAction: Class = 'http://schema.org/ControlAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AddAction
 */
export const AddAction: Class = 'http://schema.org/AddAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UpdateAction
 */
export const UpdateAction: Class = 'http://schema.org/UpdateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AdministrativeArea
 */
export const AdministrativeArea: Class = 'http://schema.org/AdministrativeArea';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AdultEntertainment
 */
export const AdultEntertainment: Class = 'http://schema.org/AdultEntertainment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EntertainmentBusiness
 */
export const EntertainmentBusiness: Class = 'http://schema.org/EntertainmentBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AdultOrientedEnumeration
 */
export const AdultOrientedEnumeration: Class = 'http://schema.org/AdultOrientedEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Enumeration
 */
export const Enumeration: Class = 'http://schema.org/Enumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AdvertiserContentArticle
 */
export const AdvertiserContentArticle: Class = 'http://schema.org/AdvertiserContentArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Article
 */
export const Article: Class = 'http://schema.org/Article';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AggregateOffer
 */
export const AggregateOffer: Class = 'http://schema.org/AggregateOffer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Offer
 */
export const Offer: Class = 'http://schema.org/Offer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AggregateRating
 */
export const AggregateRating: Class = 'http://schema.org/AggregateRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Rating
 */
export const Rating: Class = 'http://schema.org/Rating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AgreeAction
 */
export const AgreeAction: Class = 'http://schema.org/AgreeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReactAction
 */
export const ReactAction: Class = 'http://schema.org/ReactAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Airline
 */
export const Airline: Class = 'http://schema.org/Airline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Organization
 */
export const Organization: Class = 'http://schema.org/Organization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Airport
 */
export const Airport: Class = 'http://schema.org/Airport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CivicStructure
 */
export const CivicStructure: Class = 'http://schema.org/CivicStructure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AlignmentObject
 */
export const AlignmentObject: Class = 'http://schema.org/AlignmentObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrganizeAction
 */
export const OrganizeAction: Class = 'http://schema.org/OrganizeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AmpStory
 */
export const AmpStory: Class = 'http://schema.org/AmpStory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CreativeWork
 */
export const CreativeWork: Class = 'http://schema.org/CreativeWork';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AmusementPark
 */
export const AmusementPark: Class = 'http://schema.org/AmusementPark';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AnalysisNewsArticle
 */
export const AnalysisNewsArticle: Class = 'http://schema.org/AnalysisNewsArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NewsArticle
 */
export const NewsArticle: Class = 'http://schema.org/NewsArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AnatomicalStructure
 */
export const AnatomicalStructure: Class = 'http://schema.org/AnatomicalStructure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalEntity
 */
export const MedicalEntity: Class = 'http://schema.org/MedicalEntity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AnatomicalSystem
 */
export const AnatomicalSystem: Class = 'http://schema.org/AnatomicalSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AnimalShelter
 */
export const AnimalShelter: Class = 'http://schema.org/AnimalShelter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LocalBusiness
 */
export const LocalBusiness: Class = 'http://schema.org/LocalBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Answer
 */
export const Answer: Class = 'http://schema.org/Answer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Comment
 */
export const Comment: Class = 'http://schema.org/Comment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Apartment
 */
export const Apartment: Class = 'http://schema.org/Apartment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ApartmentComplex
 */
export const ApartmentComplex: Class = 'http://schema.org/ApartmentComplex';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Residence
 */
export const Residence: Class = 'http://schema.org/Residence';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AppendAction
 */
export const AppendAction: Class = 'http://schema.org/AppendAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InsertAction
 */
export const InsertAction: Class = 'http://schema.org/InsertAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ApplyAction
 */
export const ApplyAction: Class = 'http://schema.org/ApplyAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ApprovedIndication
 */
export const ApprovedIndication: Class = 'http://schema.org/ApprovedIndication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalIndication
 */
export const MedicalIndication: Class = 'http://schema.org/MedicalIndication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Aquarium
 */
export const Aquarium: Class = 'http://schema.org/Aquarium';

/**
 * ArchiveComponent
 * 
 * An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.
 *
 * http://schema.org/ArchiveComponent
 */
export const ArchiveComponent: Class = 'http://schema.org/ArchiveComponent';

/**
 * ArchiveOrganization
 * 
 * An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.
 *
 * http://schema.org/ArchiveOrganization
 */
export const ArchiveOrganization: Class = 'http://schema.org/ArchiveOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ArriveAction
 */
export const ArriveAction: Class = 'http://schema.org/ArriveAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MoveAction
 */
export const MoveAction: Class = 'http://schema.org/MoveAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ArtGallery
 */
export const ArtGallery: Class = 'http://schema.org/ArtGallery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Artery
 */
export const Artery: Class = 'http://schema.org/Artery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Vessel
 */
export const Vessel: Class = 'http://schema.org/Vessel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AskAction
 */
export const AskAction: Class = 'http://schema.org/AskAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CommunicateAction
 */
export const CommunicateAction: Class = 'http://schema.org/CommunicateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AskPublicNewsArticle
 */
export const AskPublicNewsArticle: Class = 'http://schema.org/AskPublicNewsArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AssessAction
 */
export const AssessAction: Class = 'http://schema.org/AssessAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AssignAction
 */
export const AssignAction: Class = 'http://schema.org/AssignAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Atlas
 */
export const Atlas: Class = 'http://schema.org/Atlas';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Attorney
 */
export const Attorney: Class = 'http://schema.org/Attorney';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LegalService
 */
export const LegalService: Class = 'http://schema.org/LegalService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Audience
 */
export const Audience: Class = 'http://schema.org/Audience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AudioObject
 */
export const AudioObject: Class = 'http://schema.org/AudioObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AudioObjectSnapshot
 */
export const AudioObjectSnapshot: Class = 'http://schema.org/AudioObjectSnapshot';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Audiobook
 */
export const Audiobook: Class = 'http://schema.org/Audiobook';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Book
 */
export const Book: Class = 'http://schema.org/Book';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AuthenticateAction
 */
export const AuthenticateAction: Class = 'http://schema.org/AuthenticateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AuthorizeAction
 */
export const AuthorizeAction: Class = 'http://schema.org/AuthorizeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutoBodyShop
 */
export const AutoBodyShop: Class = 'http://schema.org/AutoBodyShop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutomotiveBusiness
 */
export const AutomotiveBusiness: Class = 'http://schema.org/AutomotiveBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutoDealer
 */
export const AutoDealer: Class = 'http://schema.org/AutoDealer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutoPartsStore
 */
export const AutoPartsStore: Class = 'http://schema.org/AutoPartsStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Store
 */
export const Store: Class = 'http://schema.org/Store';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutoRental
 */
export const AutoRental: Class = 'http://schema.org/AutoRental';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutoRepair
 */
export const AutoRepair: Class = 'http://schema.org/AutoRepair';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutoWash
 */
export const AutoWash: Class = 'http://schema.org/AutoWash';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AutomatedTeller
 */
export const AutomatedTeller: Class = 'http://schema.org/AutomatedTeller';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BackgroundNewsArticle
 */
export const BackgroundNewsArticle: Class = 'http://schema.org/BackgroundNewsArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Bakery
 */
export const Bakery: Class = 'http://schema.org/Bakery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FoodEstablishment
 */
export const FoodEstablishment: Class = 'http://schema.org/FoodEstablishment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BankAccount
 */
export const BankAccount: Class = 'http://schema.org/BankAccount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FinancialProduct
 */
export const FinancialProduct: Class = 'http://schema.org/FinancialProduct';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BankOrCreditUnion
 */
export const BankOrCreditUnion: Class = 'http://schema.org/BankOrCreditUnion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BarOrPub
 */
export const BarOrPub: Class = 'http://schema.org/BarOrPub';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Barcode
 */
export const Barcode: Class = 'http://schema.org/Barcode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ImageObject
 */
export const ImageObject: Class = 'http://schema.org/ImageObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Beach
 */
export const Beach: Class = 'http://schema.org/Beach';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BeautySalon
 */
export const BeautySalon: Class = 'http://schema.org/BeautySalon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthAndBeautyBusiness
 */
export const HealthAndBeautyBusiness: Class = 'http://schema.org/HealthAndBeautyBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BedAndBreakfast
 */
export const BedAndBreakfast: Class = 'http://schema.org/BedAndBreakfast';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LodgingBusiness
 */
export const LodgingBusiness: Class = 'http://schema.org/LodgingBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BedDetails
 */
export const BedDetails: Class = 'http://schema.org/BedDetails';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BedType
 */
export const BedType: Class = 'http://schema.org/BedType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/QualitativeValue
 */
export const QualitativeValue: Class = 'http://schema.org/QualitativeValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BefriendAction
 */
export const BefriendAction: Class = 'http://schema.org/BefriendAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InteractAction
 */
export const InteractAction: Class = 'http://schema.org/InteractAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BikeStore
 */
export const BikeStore: Class = 'http://schema.org/BikeStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BioChemEntity
 */
export const BioChemEntity: Class = 'http://schema.org/BioChemEntity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Blog
 */
export const Blog: Class = 'http://schema.org/Blog';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BlogPosting
 */
export const BlogPosting: Class = 'http://schema.org/BlogPosting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SocialMediaPosting
 */
export const SocialMediaPosting: Class = 'http://schema.org/SocialMediaPosting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BloodTest
 */
export const BloodTest: Class = 'http://schema.org/BloodTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalTest
 */
export const MedicalTest: Class = 'http://schema.org/MedicalTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BoardingPolicyType
 */
export const BoardingPolicyType: Class = 'http://schema.org/BoardingPolicyType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BoatReservation
 */
export const BoatReservation: Class = 'http://schema.org/BoatReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Reservation
 */
export const Reservation: Class = 'http://schema.org/Reservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BoatTerminal
 */
export const BoatTerminal: Class = 'http://schema.org/BoatTerminal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BoatTrip
 */
export const BoatTrip: Class = 'http://schema.org/BoatTrip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Trip
 */
export const Trip: Class = 'http://schema.org/Trip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementTypeEnumeration
 */
export const BodyMeasurementTypeEnumeration: Class = 'http://schema.org/BodyMeasurementTypeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MeasurementTypeEnumeration
 */
export const MeasurementTypeEnumeration: Class = 'http://schema.org/MeasurementTypeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyOfWater
 */
export const BodyOfWater: Class = 'http://schema.org/BodyOfWater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Landform
 */
export const Landform: Class = 'http://schema.org/Landform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Bone
 */
export const Bone: Class = 'http://schema.org/Bone';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BookFormatType
 */
export const BookFormatType: Class = 'http://schema.org/BookFormatType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BookSeries
 */
export const BookSeries: Class = 'http://schema.org/BookSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CreativeWorkSeries
 */
export const CreativeWorkSeries: Class = 'http://schema.org/CreativeWorkSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BookStore
 */
export const BookStore: Class = 'http://schema.org/BookStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BookmarkAction
 */
export const BookmarkAction: Class = 'http://schema.org/BookmarkAction';

/**
 * 
 * 
 * undefined
 * Note that `Boolean` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://schema.org/Boolean
 */
export const Boolean__workaround: Class = 'http://schema.org/Boolean';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DataType
 */
export const DataType: Class = 'http://schema.org/DataType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BorrowAction
 */
export const BorrowAction: Class = 'http://schema.org/BorrowAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TransferAction
 */
export const TransferAction: Class = 'http://schema.org/TransferAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BowlingAlley
 */
export const BowlingAlley: Class = 'http://schema.org/BowlingAlley';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SportsActivityLocation
 */
export const SportsActivityLocation: Class = 'http://schema.org/SportsActivityLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BrainStructure
 */
export const BrainStructure: Class = 'http://schema.org/BrainStructure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Brand
 */
export const Brand: Class = 'http://schema.org/Brand';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BreadcrumbList
 */
export const BreadcrumbList: Class = 'http://schema.org/BreadcrumbList';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ItemList
 */
export const ItemList: Class = 'http://schema.org/ItemList';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Brewery
 */
export const Brewery: Class = 'http://schema.org/Brewery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Bridge
 */
export const Bridge: Class = 'http://schema.org/Bridge';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BroadcastChannel
 */
export const BroadcastChannel: Class = 'http://schema.org/BroadcastChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BroadcastEvent
 */
export const BroadcastEvent: Class = 'http://schema.org/BroadcastEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PublicationEvent
 */
export const PublicationEvent: Class = 'http://schema.org/PublicationEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BroadcastFrequencySpecification
 */
export const BroadcastFrequencySpecification: Class = 'http://schema.org/BroadcastFrequencySpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BroadcastService
 */
export const BroadcastService: Class = 'http://schema.org/BroadcastService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Service
 */
export const Service: Class = 'http://schema.org/Service';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BrokerageAccount
 */
export const BrokerageAccount: Class = 'http://schema.org/BrokerageAccount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InvestmentOrDeposit
 */
export const InvestmentOrDeposit: Class = 'http://schema.org/InvestmentOrDeposit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BuddhistTemple
 */
export const BuddhistTemple: Class = 'http://schema.org/BuddhistTemple';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PlaceOfWorship
 */
export const PlaceOfWorship: Class = 'http://schema.org/PlaceOfWorship';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusOrCoach
 */
export const BusOrCoach: Class = 'http://schema.org/BusOrCoach';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Vehicle
 */
export const Vehicle: Class = 'http://schema.org/Vehicle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusReservation
 */
export const BusReservation: Class = 'http://schema.org/BusReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusStation
 */
export const BusStation: Class = 'http://schema.org/BusStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusStop
 */
export const BusStop: Class = 'http://schema.org/BusStop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusTrip
 */
export const BusTrip: Class = 'http://schema.org/BusTrip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusinessAudience
 */
export const BusinessAudience: Class = 'http://schema.org/BusinessAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusinessEntityType
 */
export const BusinessEntityType: Class = 'http://schema.org/BusinessEntityType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusinessEvent
 */
export const BusinessEvent: Class = 'http://schema.org/BusinessEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Event
 */
export const Event: Class = 'http://schema.org/Event';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusinessFunction
 */
export const BusinessFunction: Class = 'http://schema.org/BusinessFunction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BuyAction
 */
export const BuyAction: Class = 'http://schema.org/BuyAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TradeAction
 */
export const TradeAction: Class = 'http://schema.org/TradeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CDCPMDRecord
 */
export const CDCPMDRecord: Class = 'http://schema.org/CDCPMDRecord';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StructuredValue
 */
export const StructuredValue: Class = 'http://schema.org/StructuredValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CableOrSatelliteService
 */
export const CableOrSatelliteService: Class = 'http://schema.org/CableOrSatelliteService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CafeOrCoffeeShop
 */
export const CafeOrCoffeeShop: Class = 'http://schema.org/CafeOrCoffeeShop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Campground
 */
export const Campground: Class = 'http://schema.org/Campground';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CampingPitch
 */
export const CampingPitch: Class = 'http://schema.org/CampingPitch';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Canal
 */
export const Canal: Class = 'http://schema.org/Canal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CancelAction
 */
export const CancelAction: Class = 'http://schema.org/CancelAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PlanAction
 */
export const PlanAction: Class = 'http://schema.org/PlanAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Car
 */
export const Car: Class = 'http://schema.org/Car';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CarUsageType
 */
export const CarUsageType: Class = 'http://schema.org/CarUsageType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Casino
 */
export const Casino: Class = 'http://schema.org/Casino';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CategoryCode
 */
export const CategoryCode: Class = 'http://schema.org/CategoryCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DefinedTerm
 */
export const DefinedTerm: Class = 'http://schema.org/DefinedTerm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CategoryCodeSet
 */
export const CategoryCodeSet: Class = 'http://schema.org/CategoryCodeSet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DefinedTermSet
 */
export const DefinedTermSet: Class = 'http://schema.org/DefinedTermSet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CatholicChurch
 */
export const CatholicChurch: Class = 'http://schema.org/CatholicChurch';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Church
 */
export const Church: Class = 'http://schema.org/Church';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Cemetery
 */
export const Cemetery: Class = 'http://schema.org/Cemetery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Certification
 */
export const Certification: Class = 'http://schema.org/Certification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CertificationStatusEnumeration
 */
export const CertificationStatusEnumeration: Class = 'http://schema.org/CertificationStatusEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Chapter
 */
export const Chapter: Class = 'http://schema.org/Chapter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CheckAction
 */
export const CheckAction: Class = 'http://schema.org/CheckAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FindAction
 */
export const FindAction: Class = 'http://schema.org/FindAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CheckInAction
 */
export const CheckInAction: Class = 'http://schema.org/CheckInAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CheckOutAction
 */
export const CheckOutAction: Class = 'http://schema.org/CheckOutAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CheckoutPage
 */
export const CheckoutPage: Class = 'http://schema.org/CheckoutPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ChemicalSubstance
 */
export const ChemicalSubstance: Class = 'http://schema.org/ChemicalSubstance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ChildCare
 */
export const ChildCare: Class = 'http://schema.org/ChildCare';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ChildrensEvent
 */
export const ChildrensEvent: Class = 'http://schema.org/ChildrensEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ChooseAction
 */
export const ChooseAction: Class = 'http://schema.org/ChooseAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/City
 */
export const City: Class = 'http://schema.org/City';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CityHall
 */
export const CityHall: Class = 'http://schema.org/CityHall';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GovernmentBuilding
 */
export const GovernmentBuilding: Class = 'http://schema.org/GovernmentBuilding';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Claim
 */
export const Claim: Class = 'http://schema.org/Claim';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ClaimReview
 */
export const ClaimReview: Class = 'http://schema.org/ClaimReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Review
 */
export const Review: Class = 'http://schema.org/Review';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Class
 */
export const Class: Class = 'http://schema.org/Class';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Clip
 */
export const Clip: Class = 'http://schema.org/Clip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ClothingStore
 */
export const ClothingStore: Class = 'http://schema.org/ClothingStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Code
 */
export const Code: Class = 'http://schema.org/Code';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SoftwareSourceCode
 */
export const SoftwareSourceCode: Class = 'http://schema.org/SoftwareSourceCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Collection
 */
export const Collection: Class = 'http://schema.org/Collection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CollectionPage
 */
export const CollectionPage: Class = 'http://schema.org/CollectionPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CollegeOrUniversity
 */
export const CollegeOrUniversity: Class = 'http://schema.org/CollegeOrUniversity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EducationalOrganization
 */
export const EducationalOrganization: Class = 'http://schema.org/EducationalOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComedyClub
 */
export const ComedyClub: Class = 'http://schema.org/ComedyClub';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComedyEvent
 */
export const ComedyEvent: Class = 'http://schema.org/ComedyEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComicCoverArt
 */
export const ComicCoverArt: Class = 'http://schema.org/ComicCoverArt';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComicStory
 */
export const ComicStory: Class = 'http://schema.org/ComicStory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CoverArt
 */
export const CoverArt: Class = 'http://schema.org/CoverArt';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComicIssue
 */
export const ComicIssue: Class = 'http://schema.org/ComicIssue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PublicationIssue
 */
export const PublicationIssue: Class = 'http://schema.org/PublicationIssue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComicSeries
 */
export const ComicSeries: Class = 'http://schema.org/ComicSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Periodical
 */
export const Periodical: Class = 'http://schema.org/Periodical';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CommentAction
 */
export const CommentAction: Class = 'http://schema.org/CommentAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompleteDataFeed
 */
export const CompleteDataFeed: Class = 'http://schema.org/CompleteDataFeed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DataFeed
 */
export const DataFeed: Class = 'http://schema.org/DataFeed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompoundPriceSpecification
 */
export const CompoundPriceSpecification: Class = 'http://schema.org/CompoundPriceSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PriceSpecification
 */
export const PriceSpecification: Class = 'http://schema.org/PriceSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComputerLanguage
 */
export const ComputerLanguage: Class = 'http://schema.org/ComputerLanguage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ComputerStore
 */
export const ComputerStore: Class = 'http://schema.org/ComputerStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ConferenceEvent
 */
export const ConferenceEvent: Class = 'http://schema.org/ConferenceEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ConfirmAction
 */
export const ConfirmAction: Class = 'http://schema.org/ConfirmAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InformAction
 */
export const InformAction: Class = 'http://schema.org/InformAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Consortium
 */
export const Consortium: Class = 'http://schema.org/Consortium';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ConstraintNode
 */
export const ConstraintNode: Class = 'http://schema.org/ConstraintNode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ConsumeAction
 */
export const ConsumeAction: Class = 'http://schema.org/ConsumeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ContactPage
 */
export const ContactPage: Class = 'http://schema.org/ContactPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ContactPoint
 */
export const ContactPoint: Class = 'http://schema.org/ContactPoint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ContactPointOption
 */
export const ContactPointOption: Class = 'http://schema.org/ContactPointOption';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Continent
 */
export const Continent: Class = 'http://schema.org/Continent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ConvenienceStore
 */
export const ConvenienceStore: Class = 'http://schema.org/ConvenienceStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Conversation
 */
export const Conversation: Class = 'http://schema.org/Conversation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CookAction
 */
export const CookAction: Class = 'http://schema.org/CookAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CreateAction
 */
export const CreateAction: Class = 'http://schema.org/CreateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Cooperative
 */
export const Cooperative: Class = 'http://schema.org/Cooperative';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Corporation
 */
export const Corporation: Class = 'http://schema.org/Corporation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CorrectionComment
 */
export const CorrectionComment: Class = 'http://schema.org/CorrectionComment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Country
 */
export const Country: Class = 'http://schema.org/Country';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Course
 */
export const Course: Class = 'http://schema.org/Course';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LearningResource
 */
export const LearningResource: Class = 'http://schema.org/LearningResource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CourseInstance
 */
export const CourseInstance: Class = 'http://schema.org/CourseInstance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Courthouse
 */
export const Courthouse: Class = 'http://schema.org/Courthouse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VisualArtwork
 */
export const VisualArtwork: Class = 'http://schema.org/VisualArtwork';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CovidTestingFacility
 */
export const CovidTestingFacility: Class = 'http://schema.org/CovidTestingFacility';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalClinic
 */
export const MedicalClinic: Class = 'http://schema.org/MedicalClinic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CreativeWorkSeason
 */
export const CreativeWorkSeason: Class = 'http://schema.org/CreativeWorkSeason';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Series
 */
export const Series: Class = 'http://schema.org/Series';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Credential
 */
export const Credential: Class = 'http://schema.org/Credential';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CreditCard
 */
export const CreditCard: Class = 'http://schema.org/CreditCard';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LoanOrCredit
 */
export const LoanOrCredit: Class = 'http://schema.org/LoanOrCredit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentCard
 */
export const PaymentCard: Class = 'http://schema.org/PaymentCard';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Crematorium
 */
export const Crematorium: Class = 'http://schema.org/Crematorium';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CriticReview
 */
export const CriticReview: Class = 'http://schema.org/CriticReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CssSelectorType
 */
export const CssSelectorType: Class = 'http://schema.org/CssSelectorType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Text
 */
export const Text: Class = 'http://schema.org/Text';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CurrencyConversionService
 */
export const CurrencyConversionService: Class = 'http://schema.org/CurrencyConversionService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DDxElement
 */
export const DDxElement: Class = 'http://schema.org/DDxElement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalIntangible
 */
export const MedicalIntangible: Class = 'http://schema.org/MedicalIntangible';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DENonprofitType
 */
export const DENonprofitType: Class = 'http://schema.org/DENonprofitType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NonprofitType
 */
export const NonprofitType: Class = 'http://schema.org/NonprofitType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DanceEvent
 */
export const DanceEvent: Class = 'http://schema.org/DanceEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DanceGroup
 */
export const DanceGroup: Class = 'http://schema.org/DanceGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PerformingGroup
 */
export const PerformingGroup: Class = 'http://schema.org/PerformingGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DataCatalog
 */
export const DataCatalog: Class = 'http://schema.org/DataCatalog';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DataDownload
 */
export const DataDownload: Class = 'http://schema.org/DataDownload';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Dataset
 */
export const Dataset: Class = 'http://schema.org/Dataset';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DataFeedItem
 */
export const DataFeedItem: Class = 'http://schema.org/DataFeedItem';

/**
 * 
 * 
 * undefined
 * Note that `Date` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://schema.org/Date
 */
export const Date__workaround: Class = 'http://schema.org/Date';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DateTime
 */
export const DateTime: Class = 'http://schema.org/DateTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DatedMoneySpecification
 */
export const DatedMoneySpecification: Class = 'http://schema.org/DatedMoneySpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MonetaryAmount
 */
export const MonetaryAmount: Class = 'http://schema.org/MonetaryAmount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DayOfWeek
 */
export const DayOfWeek: Class = 'http://schema.org/DayOfWeek';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DaySpa
 */
export const DaySpa: Class = 'http://schema.org/DaySpa';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DeactivateAction
 */
export const DeactivateAction: Class = 'http://schema.org/DeactivateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DeclarationOfConformity
 */
export const DeclarationOfConformity: Class = 'http://schema.org/DeclarationOfConformity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DefenceEstablishment
 */
export const DefenceEstablishment: Class = 'http://schema.org/DefenceEstablishment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DefinedRegion
 */
export const DefinedRegion: Class = 'http://schema.org/DefinedRegion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DeleteAction
 */
export const DeleteAction: Class = 'http://schema.org/DeleteAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DeliveryChargeSpecification
 */
export const DeliveryChargeSpecification: Class = 'http://schema.org/DeliveryChargeSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DeliveryEvent
 */
export const DeliveryEvent: Class = 'http://schema.org/DeliveryEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DeliveryMethod
 */
export const DeliveryMethod: Class = 'http://schema.org/DeliveryMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DeliveryTimeSettings
 */
export const DeliveryTimeSettings: Class = 'http://schema.org/DeliveryTimeSettings';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShippingConditions
 */
export const ShippingConditions: Class = 'http://schema.org/ShippingConditions';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Demand
 */
export const Demand: Class = 'http://schema.org/Demand';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Dentist
 */
export const Dentist: Class = 'http://schema.org/Dentist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalBusiness
 */
export const MedicalBusiness: Class = 'http://schema.org/MedicalBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalOrganization
 */
export const MedicalOrganization: Class = 'http://schema.org/MedicalOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DepartAction
 */
export const DepartAction: Class = 'http://schema.org/DepartAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DepartmentStore
 */
export const DepartmentStore: Class = 'http://schema.org/DepartmentStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DepositAccount
 */
export const DepositAccount: Class = 'http://schema.org/DepositAccount';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DiagnosticLab
 */
export const DiagnosticLab: Class = 'http://schema.org/DiagnosticLab';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DiagnosticProcedure
 */
export const DiagnosticProcedure: Class = 'http://schema.org/DiagnosticProcedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalProcedure
 */
export const MedicalProcedure: Class = 'http://schema.org/MedicalProcedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Diet
 */
export const Diet: Class = 'http://schema.org/Diet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LifestyleModification
 */
export const LifestyleModification: Class = 'http://schema.org/LifestyleModification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DietarySupplement
 */
export const DietarySupplement: Class = 'http://schema.org/DietarySupplement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Product
 */
export const Product: Class = 'http://schema.org/Product';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Substance
 */
export const Substance: Class = 'http://schema.org/Substance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalDocument
 */
export const DigitalDocument: Class = 'http://schema.org/DigitalDocument';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalDocumentPermission
 */
export const DigitalDocumentPermission: Class = 'http://schema.org/DigitalDocumentPermission';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalDocumentPermissionType
 */
export const DigitalDocumentPermissionType: Class = 'http://schema.org/DigitalDocumentPermissionType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalPlatformEnumeration
 */
export const DigitalPlatformEnumeration: Class = 'http://schema.org/DigitalPlatformEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalProductPassport
 */
export const DigitalProductPassport: Class = 'http://schema.org/DigitalProductPassport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DisagreeAction
 */
export const DisagreeAction: Class = 'http://schema.org/DisagreeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DiscoverAction
 */
export const DiscoverAction: Class = 'http://schema.org/DiscoverAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DiscussionForumPosting
 */
export const DiscussionForumPosting: Class = 'http://schema.org/DiscussionForumPosting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DislikeAction
 */
export const DislikeAction: Class = 'http://schema.org/DislikeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Distance
 */
export const Distance: Class = 'http://schema.org/Distance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Quantity
 */
export const Quantity: Class = 'http://schema.org/Quantity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Distillery
 */
export const Distillery: Class = 'http://schema.org/Distillery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DonateAction
 */
export const DonateAction: Class = 'http://schema.org/DonateAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DoseSchedule
 */
export const DoseSchedule: Class = 'http://schema.org/DoseSchedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DownloadAction
 */
export const DownloadAction: Class = 'http://schema.org/DownloadAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrawAction
 */
export const DrawAction: Class = 'http://schema.org/DrawAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Drawing
 */
export const Drawing: Class = 'http://schema.org/Drawing';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrinkAction
 */
export const DrinkAction: Class = 'http://schema.org/DrinkAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DriveWheelConfigurationValue
 */
export const DriveWheelConfigurationValue: Class = 'http://schema.org/DriveWheelConfigurationValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Drug
 */
export const Drug: Class = 'http://schema.org/Drug';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrugClass
 */
export const DrugClass: Class = 'http://schema.org/DrugClass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrugCost
 */
export const DrugCost: Class = 'http://schema.org/DrugCost';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrugCostCategory
 */
export const DrugCostCategory: Class = 'http://schema.org/DrugCostCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalEnumeration
 */
export const MedicalEnumeration: Class = 'http://schema.org/MedicalEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrugLegalStatus
 */
export const DrugLegalStatus: Class = 'http://schema.org/DrugLegalStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrugPregnancyCategory
 */
export const DrugPregnancyCategory: Class = 'http://schema.org/DrugPregnancyCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrugPrescriptionStatus
 */
export const DrugPrescriptionStatus: Class = 'http://schema.org/DrugPrescriptionStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrugStrength
 */
export const DrugStrength: Class = 'http://schema.org/DrugStrength';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DryCleaningOrLaundry
 */
export const DryCleaningOrLaundry: Class = 'http://schema.org/DryCleaningOrLaundry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Duration
 */
export const Duration: Class = 'http://schema.org/Duration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyEnumeration
 */
export const EUEnergyEfficiencyEnumeration: Class = 'http://schema.org/EUEnergyEfficiencyEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EnergyEfficiencyEnumeration
 */
export const EnergyEfficiencyEnumeration: Class = 'http://schema.org/EnergyEfficiencyEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EatAction
 */
export const EatAction: Class = 'http://schema.org/EatAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EducationEvent
 */
export const EducationEvent: Class = 'http://schema.org/EducationEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EducationalAudience
 */
export const EducationalAudience: Class = 'http://schema.org/EducationalAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EducationalOccupationalCredential
 */
export const EducationalOccupationalCredential: Class = 'http://schema.org/EducationalOccupationalCredential';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EducationalOccupationalProgram
 */
export const EducationalOccupationalProgram: Class = 'http://schema.org/EducationalOccupationalProgram';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Electrician
 */
export const Electrician: Class = 'http://schema.org/Electrician';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HomeAndConstructionBusiness
 */
export const HomeAndConstructionBusiness: Class = 'http://schema.org/HomeAndConstructionBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ElectronicsStore
 */
export const ElectronicsStore: Class = 'http://schema.org/ElectronicsStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ElementarySchool
 */
export const ElementarySchool: Class = 'http://schema.org/ElementarySchool';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EmailMessage
 */
export const EmailMessage: Class = 'http://schema.org/EmailMessage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Message
 */
export const Message: Class = 'http://schema.org/Message';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Embassy
 */
export const Embassy: Class = 'http://schema.org/Embassy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EmergencyService
 */
export const EmergencyService: Class = 'http://schema.org/EmergencyService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EmployeeRole
 */
export const EmployeeRole: Class = 'http://schema.org/EmployeeRole';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrganizationRole
 */
export const OrganizationRole: Class = 'http://schema.org/OrganizationRole';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EmployerAggregateRating
 */
export const EmployerAggregateRating: Class = 'http://schema.org/EmployerAggregateRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EmployerReview
 */
export const EmployerReview: Class = 'http://schema.org/EmployerReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EmploymentAgency
 */
export const EmploymentAgency: Class = 'http://schema.org/EmploymentAgency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EndorseAction
 */
export const EndorseAction: Class = 'http://schema.org/EndorseAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EndorsementRating
 */
export const EndorsementRating: Class = 'http://schema.org/EndorsementRating';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Energy
 */
export const Energy: Class = 'http://schema.org/Energy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EnergyConsumptionDetails
 */
export const EnergyConsumptionDetails: Class = 'http://schema.org/EnergyConsumptionDetails';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EnergyStarEnergyEfficiencyEnumeration
 */
export const EnergyStarEnergyEfficiencyEnumeration: Class = 'http://schema.org/EnergyStarEnergyEfficiencyEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EngineSpecification
 */
export const EngineSpecification: Class = 'http://schema.org/EngineSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EntryPoint
 */
export const EntryPoint: Class = 'http://schema.org/EntryPoint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EnvironmentalProductDeclaration
 */
export const EnvironmentalProductDeclaration: Class = 'http://schema.org/EnvironmentalProductDeclaration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Episode
 */
export const Episode: Class = 'http://schema.org/Episode';

/**
 * 
 * 
 * undefined
 * Note that `Error` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://schema.org/Error
 */
export const Error__workaround: Class = 'http://schema.org/Error';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InstantaneousEvent
 */
export const InstantaneousEvent: Class = 'http://schema.org/InstantaneousEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventAttendanceModeEnumeration
 */
export const EventAttendanceModeEnumeration: Class = 'http://schema.org/EventAttendanceModeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventReservation
 */
export const EventReservation: Class = 'http://schema.org/EventReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventSeries
 */
export const EventSeries: Class = 'http://schema.org/EventSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventStatusType
 */
export const EventStatusType: Class = 'http://schema.org/EventStatusType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventVenue
 */
export const EventVenue: Class = 'http://schema.org/EventVenue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ExchangeRateSpecification
 */
export const ExchangeRateSpecification: Class = 'http://schema.org/ExchangeRateSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ExerciseAction
 */
export const ExerciseAction: Class = 'http://schema.org/ExerciseAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PlayAction
 */
export const PlayAction: Class = 'http://schema.org/PlayAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ExerciseGym
 */
export const ExerciseGym: Class = 'http://schema.org/ExerciseGym';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ExercisePlan
 */
export const ExercisePlan: Class = 'http://schema.org/ExercisePlan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PhysicalActivity
 */
export const PhysicalActivity: Class = 'http://schema.org/PhysicalActivity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ExhibitionEvent
 */
export const ExhibitionEvent: Class = 'http://schema.org/ExhibitionEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FAQPage
 */
export const FAQPage: Class = 'http://schema.org/FAQPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FMRadioChannel
 */
export const FMRadioChannel: Class = 'http://schema.org/FMRadioChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FastFoodRestaurant
 */
export const FastFoodRestaurant: Class = 'http://schema.org/FastFoodRestaurant';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Festival
 */
export const Festival: Class = 'http://schema.org/Festival';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FilmAction
 */
export const FilmAction: Class = 'http://schema.org/FilmAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FinancialIncentive
 */
export const FinancialIncentive: Class = 'http://schema.org/FinancialIncentive';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FireStation
 */
export const FireStation: Class = 'http://schema.org/FireStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Flight
 */
export const Flight: Class = 'http://schema.org/Flight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FlightReservation
 */
export const FlightReservation: Class = 'http://schema.org/FlightReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Float
 */
export const Float: Class = 'http://schema.org/Float';

/**
 * 
 * 
 * undefined
 * Note that `Number` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://schema.org/Number
 */
export const Number__workaround: Class = 'http://schema.org/Number';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FloorPlan
 */
export const FloorPlan: Class = 'http://schema.org/FloorPlan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Florist
 */
export const Florist: Class = 'http://schema.org/Florist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FollowAction
 */
export const FollowAction: Class = 'http://schema.org/FollowAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FoodEstablishmentReservation
 */
export const FoodEstablishmentReservation: Class = 'http://schema.org/FoodEstablishmentReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FoodEvent
 */
export const FoodEvent: Class = 'http://schema.org/FoodEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FoodService
 */
export const FoodService: Class = 'http://schema.org/FoodService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FulfillmentTypeEnumeration
 */
export const FulfillmentTypeEnumeration: Class = 'http://schema.org/FulfillmentTypeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FundingAgency
 */
export const FundingAgency: Class = 'http://schema.org/FundingAgency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Project
 */
export const Project: Class = 'http://schema.org/Project';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FundingScheme
 */
export const FundingScheme: Class = 'http://schema.org/FundingScheme';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FurnitureStore
 */
export const FurnitureStore: Class = 'http://schema.org/FurnitureStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Game
 */
export const Game: Class = 'http://schema.org/Game';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GameAvailabilityEnumeration
 */
export const GameAvailabilityEnumeration: Class = 'http://schema.org/GameAvailabilityEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GamePlayMode
 */
export const GamePlayMode: Class = 'http://schema.org/GamePlayMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GameServer
 */
export const GameServer: Class = 'http://schema.org/GameServer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GameServerStatus
 */
export const GameServerStatus: Class = 'http://schema.org/GameServerStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GardenStore
 */
export const GardenStore: Class = 'http://schema.org/GardenStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GasStation
 */
export const GasStation: Class = 'http://schema.org/GasStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GatedResidenceCommunity
 */
export const GatedResidenceCommunity: Class = 'http://schema.org/GatedResidenceCommunity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GenderType
 */
export const GenderType: Class = 'http://schema.org/GenderType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Gene
 */
export const Gene: Class = 'http://schema.org/Gene';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GeneralContractor
 */
export const GeneralContractor: Class = 'http://schema.org/GeneralContractor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GeoCircle
 */
export const GeoCircle: Class = 'http://schema.org/GeoCircle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GeoShape
 */
export const GeoShape: Class = 'http://schema.org/GeoShape';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GeoCoordinates
 */
export const GeoCoordinates: Class = 'http://schema.org/GeoCoordinates';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GeospatialGeometry
 */
export const GeospatialGeometry: Class = 'http://schema.org/GeospatialGeometry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GiveAction
 */
export const GiveAction: Class = 'http://schema.org/GiveAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GolfCourse
 */
export const GolfCourse: Class = 'http://schema.org/GolfCourse';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GovernmentBenefitsType
 */
export const GovernmentBenefitsType: Class = 'http://schema.org/GovernmentBenefitsType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GovernmentOffice
 */
export const GovernmentOffice: Class = 'http://schema.org/GovernmentOffice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GovernmentOrganization
 */
export const GovernmentOrganization: Class = 'http://schema.org/GovernmentOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GovernmentPermit
 */
export const GovernmentPermit: Class = 'http://schema.org/GovernmentPermit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Permit
 */
export const Permit: Class = 'http://schema.org/Permit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GovernmentService
 */
export const GovernmentService: Class = 'http://schema.org/GovernmentService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Grant
 */
export const Grant: Class = 'http://schema.org/Grant';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GroceryStore
 */
export const GroceryStore: Class = 'http://schema.org/GroceryStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Guide
 */
export const Guide: Class = 'http://schema.org/Guide';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HVACBusiness
 */
export const HVACBusiness: Class = 'http://schema.org/HVACBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Hackathon
 */
export const Hackathon: Class = 'http://schema.org/Hackathon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HairSalon
 */
export const HairSalon: Class = 'http://schema.org/HairSalon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HardwareStore
 */
export const HardwareStore: Class = 'http://schema.org/HardwareStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthAspectEnumeration
 */
export const HealthAspectEnumeration: Class = 'http://schema.org/HealthAspectEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthClub
 */
export const HealthClub: Class = 'http://schema.org/HealthClub';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthInsurancePlan
 */
export const HealthInsurancePlan: Class = 'http://schema.org/HealthInsurancePlan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthPlanCostSharingSpecification
 */
export const HealthPlanCostSharingSpecification: Class = 'http://schema.org/HealthPlanCostSharingSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthPlanFormulary
 */
export const HealthPlanFormulary: Class = 'http://schema.org/HealthPlanFormulary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthPlanNetwork
 */
export const HealthPlanNetwork: Class = 'http://schema.org/HealthPlanNetwork';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthTopicContent
 */
export const HealthTopicContent: Class = 'http://schema.org/HealthTopicContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WebContent
 */
export const WebContent: Class = 'http://schema.org/WebContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HighSchool
 */
export const HighSchool: Class = 'http://schema.org/HighSchool';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HinduTemple
 */
export const HinduTemple: Class = 'http://schema.org/HinduTemple';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HobbyShop
 */
export const HobbyShop: Class = 'http://schema.org/HobbyShop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HomeGoodsStore
 */
export const HomeGoodsStore: Class = 'http://schema.org/HomeGoodsStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Hospital
 */
export const Hospital: Class = 'http://schema.org/Hospital';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Hostel
 */
export const Hostel: Class = 'http://schema.org/Hostel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Hotel
 */
export const Hotel: Class = 'http://schema.org/Hotel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HotelRoom
 */
export const HotelRoom: Class = 'http://schema.org/HotelRoom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Room
 */
export const Room: Class = 'http://schema.org/Room';

/**
 * 
 * 
 * 
 *
 * http://schema.org/House
 */
export const House: Class = 'http://schema.org/House';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HousePainter
 */
export const HousePainter: Class = 'http://schema.org/HousePainter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowTo
 */
export const HowTo: Class = 'http://schema.org/HowTo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowToDirection
 */
export const HowToDirection: Class = 'http://schema.org/HowToDirection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ListItem
 */
export const ListItem: Class = 'http://schema.org/ListItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowToItem
 */
export const HowToItem: Class = 'http://schema.org/HowToItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowToSection
 */
export const HowToSection: Class = 'http://schema.org/HowToSection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowToStep
 */
export const HowToStep: Class = 'http://schema.org/HowToStep';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowToSupply
 */
export const HowToSupply: Class = 'http://schema.org/HowToSupply';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowToTip
 */
export const HowToTip: Class = 'http://schema.org/HowToTip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowToTool
 */
export const HowToTool: Class = 'http://schema.org/HowToTool';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HyperToc
 */
export const HyperToc: Class = 'http://schema.org/HyperToc';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HyperTocEntry
 */
export const HyperTocEntry: Class = 'http://schema.org/HyperTocEntry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IPTCDigitalSourceEnumeration
 */
export const IPTCDigitalSourceEnumeration: Class = 'http://schema.org/IPTCDigitalSourceEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MediaEnumeration
 */
export const MediaEnumeration: Class = 'http://schema.org/MediaEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITNonprofitType
 */
export const ITNonprofitType: Class = 'http://schema.org/ITNonprofitType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IceCreamShop
 */
export const IceCreamShop: Class = 'http://schema.org/IceCreamShop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IgnoreAction
 */
export const IgnoreAction: Class = 'http://schema.org/IgnoreAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ImageGallery
 */
export const ImageGallery: Class = 'http://schema.org/ImageGallery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MediaGallery
 */
export const MediaGallery: Class = 'http://schema.org/MediaGallery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ImageObjectSnapshot
 */
export const ImageObjectSnapshot: Class = 'http://schema.org/ImageObjectSnapshot';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ImagingTest
 */
export const ImagingTest: Class = 'http://schema.org/ImagingTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveQualifiedExpenseType
 */
export const IncentiveQualifiedExpenseType: Class = 'http://schema.org/IncentiveQualifiedExpenseType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveStatus
 */
export const IncentiveStatus: Class = 'http://schema.org/IncentiveStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveType
 */
export const IncentiveType: Class = 'http://schema.org/IncentiveType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IndividualPhysician
 */
export const IndividualPhysician: Class = 'http://schema.org/IndividualPhysician';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Physician
 */
export const Physician: Class = 'http://schema.org/Physician';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IndividualProduct
 */
export const IndividualProduct: Class = 'http://schema.org/IndividualProduct';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductModel
 */
export const ProductModel: Class = 'http://schema.org/ProductModel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InfectiousAgentClass
 */
export const InfectiousAgentClass: Class = 'http://schema.org/InfectiousAgentClass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InfectiousDisease
 */
export const InfectiousDisease: Class = 'http://schema.org/InfectiousDisease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalCondition
 */
export const MedicalCondition: Class = 'http://schema.org/MedicalCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InstallAction
 */
export const InstallAction: Class = 'http://schema.org/InstallAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InsuranceAgency
 */
export const InsuranceAgency: Class = 'http://schema.org/InsuranceAgency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Integer
 */
export const Integer: Class = 'http://schema.org/Integer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InteractionCounter
 */
export const InteractionCounter: Class = 'http://schema.org/InteractionCounter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InternetCafe
 */
export const InternetCafe: Class = 'http://schema.org/InternetCafe';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InvestmentFund
 */
export const InvestmentFund: Class = 'http://schema.org/InvestmentFund';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InviteAction
 */
export const InviteAction: Class = 'http://schema.org/InviteAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Invoice
 */
export const Invoice: Class = 'http://schema.org/Invoice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ItemAvailability
 */
export const ItemAvailability: Class = 'http://schema.org/ItemAvailability';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ItemListOrderType
 */
export const ItemListOrderType: Class = 'http://schema.org/ItemListOrderType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ItemPage
 */
export const ItemPage: Class = 'http://schema.org/ItemPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/JewelryStore
 */
export const JewelryStore: Class = 'http://schema.org/JewelryStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/JobPosting
 */
export const JobPosting: Class = 'http://schema.org/JobPosting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/JoinAction
 */
export const JoinAction: Class = 'http://schema.org/JoinAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Joint
 */
export const Joint: Class = 'http://schema.org/Joint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LakeBodyOfWater
 */
export const LakeBodyOfWater: Class = 'http://schema.org/LakeBodyOfWater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LandmarksOrHistoricalBuildings
 */
export const LandmarksOrHistoricalBuildings: Class = 'http://schema.org/LandmarksOrHistoricalBuildings';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Language
 */
export const Language: Class = 'http://schema.org/Language';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LeaveAction
 */
export const LeaveAction: Class = 'http://schema.org/LeaveAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LegalForceStatus
 */
export const LegalForceStatus: Class = 'http://schema.org/LegalForceStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LegalValueLevel
 */
export const LegalValueLevel: Class = 'http://schema.org/LegalValueLevel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Legislation
 */
export const Legislation: Class = 'http://schema.org/Legislation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LegislationObject
 */
export const LegislationObject: Class = 'http://schema.org/LegislationObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LegislativeBuilding
 */
export const LegislativeBuilding: Class = 'http://schema.org/LegislativeBuilding';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LendAction
 */
export const LendAction: Class = 'http://schema.org/LendAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Library
 */
export const Library: Class = 'http://schema.org/Library';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LibrarySystem
 */
export const LibrarySystem: Class = 'http://schema.org/LibrarySystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Ligament
 */
export const Ligament: Class = 'http://schema.org/Ligament';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LikeAction
 */
export const LikeAction: Class = 'http://schema.org/LikeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LinkRole
 */
export const LinkRole: Class = 'http://schema.org/LinkRole';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Role
 */
export const Role: Class = 'http://schema.org/Role';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LiquorStore
 */
export const LiquorStore: Class = 'http://schema.org/LiquorStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ListenAction
 */
export const ListenAction: Class = 'http://schema.org/ListenAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LiteraryEvent
 */
export const LiteraryEvent: Class = 'http://schema.org/LiteraryEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LiveBlogPosting
 */
export const LiveBlogPosting: Class = 'http://schema.org/LiveBlogPosting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LocationFeatureSpecification
 */
export const LocationFeatureSpecification: Class = 'http://schema.org/LocationFeatureSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PropertyValue
 */
export const PropertyValue: Class = 'http://schema.org/PropertyValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Locksmith
 */
export const Locksmith: Class = 'http://schema.org/Locksmith';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LodgingReservation
 */
export const LodgingReservation: Class = 'http://schema.org/LodgingReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LoginAction
 */
export const LoginAction: Class = 'http://schema.org/LoginAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LoseAction
 */
export const LoseAction: Class = 'http://schema.org/LoseAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LymphaticVessel
 */
export const LymphaticVessel: Class = 'http://schema.org/LymphaticVessel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Manuscript
 */
export const Manuscript: Class = 'http://schema.org/Manuscript';

/**
 * 
 * 
 * undefined
 * Note that `Map` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://schema.org/Map
 */
export const Map__workaround: Class = 'http://schema.org/Map';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MapCategoryType
 */
export const MapCategoryType: Class = 'http://schema.org/MapCategoryType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MarryAction
 */
export const MarryAction: Class = 'http://schema.org/MarryAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Mass
 */
export const Mass: Class = 'http://schema.org/Mass';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MathSolver
 */
export const MathSolver: Class = 'http://schema.org/MathSolver';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MaximumDoseSchedule
 */
export const MaximumDoseSchedule: Class = 'http://schema.org/MaximumDoseSchedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MeasurementMethodEnum
 */
export const MeasurementMethodEnum: Class = 'http://schema.org/MeasurementMethodEnum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MediaManipulationRatingEnumeration
 */
export const MediaManipulationRatingEnumeration: Class = 'http://schema.org/MediaManipulationRatingEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MediaReview
 */
export const MediaReview: Class = 'http://schema.org/MediaReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MediaReviewItem
 */
export const MediaReviewItem: Class = 'http://schema.org/MediaReviewItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MediaSubscription
 */
export const MediaSubscription: Class = 'http://schema.org/MediaSubscription';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalAudience
 */
export const MedicalAudience: Class = 'http://schema.org/MedicalAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PeopleAudience
 */
export const PeopleAudience: Class = 'http://schema.org/PeopleAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalAudienceType
 */
export const MedicalAudienceType: Class = 'http://schema.org/MedicalAudienceType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalCause
 */
export const MedicalCause: Class = 'http://schema.org/MedicalCause';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalCode
 */
export const MedicalCode: Class = 'http://schema.org/MedicalCode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalConditionStage
 */
export const MedicalConditionStage: Class = 'http://schema.org/MedicalConditionStage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalContraindication
 */
export const MedicalContraindication: Class = 'http://schema.org/MedicalContraindication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalDevice
 */
export const MedicalDevice: Class = 'http://schema.org/MedicalDevice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalDevicePurpose
 */
export const MedicalDevicePurpose: Class = 'http://schema.org/MedicalDevicePurpose';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalEvidenceLevel
 */
export const MedicalEvidenceLevel: Class = 'http://schema.org/MedicalEvidenceLevel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalGuideline
 */
export const MedicalGuideline: Class = 'http://schema.org/MedicalGuideline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalGuidelineContraindication
 */
export const MedicalGuidelineContraindication: Class = 'http://schema.org/MedicalGuidelineContraindication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalGuidelineRecommendation
 */
export const MedicalGuidelineRecommendation: Class = 'http://schema.org/MedicalGuidelineRecommendation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalImagingTechnique
 */
export const MedicalImagingTechnique: Class = 'http://schema.org/MedicalImagingTechnique';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalObservationalStudy
 */
export const MedicalObservationalStudy: Class = 'http://schema.org/MedicalObservationalStudy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalStudy
 */
export const MedicalStudy: Class = 'http://schema.org/MedicalStudy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalObservationalStudyDesign
 */
export const MedicalObservationalStudyDesign: Class = 'http://schema.org/MedicalObservationalStudyDesign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalProcedureType
 */
export const MedicalProcedureType: Class = 'http://schema.org/MedicalProcedureType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalRiskCalculator
 */
export const MedicalRiskCalculator: Class = 'http://schema.org/MedicalRiskCalculator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalRiskEstimator
 */
export const MedicalRiskEstimator: Class = 'http://schema.org/MedicalRiskEstimator';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalRiskFactor
 */
export const MedicalRiskFactor: Class = 'http://schema.org/MedicalRiskFactor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalRiskScore
 */
export const MedicalRiskScore: Class = 'http://schema.org/MedicalRiskScore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalScholarlyArticle
 */
export const MedicalScholarlyArticle: Class = 'http://schema.org/MedicalScholarlyArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ScholarlyArticle
 */
export const ScholarlyArticle: Class = 'http://schema.org/ScholarlyArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalSign
 */
export const MedicalSign: Class = 'http://schema.org/MedicalSign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalSignOrSymptom
 */
export const MedicalSignOrSymptom: Class = 'http://schema.org/MedicalSignOrSymptom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalSpecialty
 */
export const MedicalSpecialty: Class = 'http://schema.org/MedicalSpecialty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Specialty
 */
export const Specialty: Class = 'http://schema.org/Specialty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalStudyStatus
 */
export const MedicalStudyStatus: Class = 'http://schema.org/MedicalStudyStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalSymptom
 */
export const MedicalSymptom: Class = 'http://schema.org/MedicalSymptom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalTestPanel
 */
export const MedicalTestPanel: Class = 'http://schema.org/MedicalTestPanel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalTherapy
 */
export const MedicalTherapy: Class = 'http://schema.org/MedicalTherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TherapeuticProcedure
 */
export const TherapeuticProcedure: Class = 'http://schema.org/TherapeuticProcedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalTrial
 */
export const MedicalTrial: Class = 'http://schema.org/MedicalTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalTrialDesign
 */
export const MedicalTrialDesign: Class = 'http://schema.org/MedicalTrialDesign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalWebPage
 */
export const MedicalWebPage: Class = 'http://schema.org/MedicalWebPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicineSystem
 */
export const MedicineSystem: Class = 'http://schema.org/MedicineSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MeetingRoom
 */
export const MeetingRoom: Class = 'http://schema.org/MeetingRoom';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MemberProgram
 */
export const MemberProgram: Class = 'http://schema.org/MemberProgram';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MemberProgramTier
 */
export const MemberProgramTier: Class = 'http://schema.org/MemberProgramTier';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MensClothingStore
 */
export const MensClothingStore: Class = 'http://schema.org/MensClothingStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Menu
 */
export const Menu: Class = 'http://schema.org/Menu';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MenuItem
 */
export const MenuItem: Class = 'http://schema.org/MenuItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MenuSection
 */
export const MenuSection: Class = 'http://schema.org/MenuSection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MerchantReturnEnumeration
 */
export const MerchantReturnEnumeration: Class = 'http://schema.org/MerchantReturnEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MerchantReturnPolicy
 */
export const MerchantReturnPolicy: Class = 'http://schema.org/MerchantReturnPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MerchantReturnPolicySeasonalOverride
 */
export const MerchantReturnPolicySeasonalOverride: Class = 'http://schema.org/MerchantReturnPolicySeasonalOverride';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MiddleSchool
 */
export const MiddleSchool: Class = 'http://schema.org/MiddleSchool';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MobileApplication
 */
export const MobileApplication: Class = 'http://schema.org/MobileApplication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SoftwareApplication
 */
export const SoftwareApplication: Class = 'http://schema.org/SoftwareApplication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MobilePhoneStore
 */
export const MobilePhoneStore: Class = 'http://schema.org/MobilePhoneStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MolecularEntity
 */
export const MolecularEntity: Class = 'http://schema.org/MolecularEntity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MonetaryAmountDistribution
 */
export const MonetaryAmountDistribution: Class = 'http://schema.org/MonetaryAmountDistribution';

/**
 * 
 * 
 * 
 *
 * http://schema.org/QuantitativeValueDistribution
 */
export const QuantitativeValueDistribution: Class = 'http://schema.org/QuantitativeValueDistribution';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MonetaryGrant
 */
export const MonetaryGrant: Class = 'http://schema.org/MonetaryGrant';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MoneyTransfer
 */
export const MoneyTransfer: Class = 'http://schema.org/MoneyTransfer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MortgageLoan
 */
export const MortgageLoan: Class = 'http://schema.org/MortgageLoan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Mosque
 */
export const Mosque: Class = 'http://schema.org/Mosque';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Motel
 */
export const Motel: Class = 'http://schema.org/Motel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Motorcycle
 */
export const Motorcycle: Class = 'http://schema.org/Motorcycle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MotorcycleDealer
 */
export const MotorcycleDealer: Class = 'http://schema.org/MotorcycleDealer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MotorcycleRepair
 */
export const MotorcycleRepair: Class = 'http://schema.org/MotorcycleRepair';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MotorizedBicycle
 */
export const MotorizedBicycle: Class = 'http://schema.org/MotorizedBicycle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Mountain
 */
export const Mountain: Class = 'http://schema.org/Mountain';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Movie
 */
export const Movie: Class = 'http://schema.org/Movie';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MovieClip
 */
export const MovieClip: Class = 'http://schema.org/MovieClip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MovieRentalStore
 */
export const MovieRentalStore: Class = 'http://schema.org/MovieRentalStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MovieSeries
 */
export const MovieSeries: Class = 'http://schema.org/MovieSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MovieTheater
 */
export const MovieTheater: Class = 'http://schema.org/MovieTheater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MovingCompany
 */
export const MovingCompany: Class = 'http://schema.org/MovingCompany';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Muscle
 */
export const Muscle: Class = 'http://schema.org/Muscle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Museum
 */
export const Museum: Class = 'http://schema.org/Museum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicAlbum
 */
export const MusicAlbum: Class = 'http://schema.org/MusicAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicPlaylist
 */
export const MusicPlaylist: Class = 'http://schema.org/MusicPlaylist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicAlbumProductionType
 */
export const MusicAlbumProductionType: Class = 'http://schema.org/MusicAlbumProductionType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicAlbumReleaseType
 */
export const MusicAlbumReleaseType: Class = 'http://schema.org/MusicAlbumReleaseType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicComposition
 */
export const MusicComposition: Class = 'http://schema.org/MusicComposition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicEvent
 */
export const MusicEvent: Class = 'http://schema.org/MusicEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicGroup
 */
export const MusicGroup: Class = 'http://schema.org/MusicGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicRecording
 */
export const MusicRecording: Class = 'http://schema.org/MusicRecording';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicRelease
 */
export const MusicRelease: Class = 'http://schema.org/MusicRelease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicReleaseFormatType
 */
export const MusicReleaseFormatType: Class = 'http://schema.org/MusicReleaseFormatType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicStore
 */
export const MusicStore: Class = 'http://schema.org/MusicStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicVenue
 */
export const MusicVenue: Class = 'http://schema.org/MusicVenue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusicVideoObject
 */
export const MusicVideoObject: Class = 'http://schema.org/MusicVideoObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NGO
 */
export const NGO: Class = 'http://schema.org/NGO';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NLNonprofitType
 */
export const NLNonprofitType: Class = 'http://schema.org/NLNonprofitType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NailSalon
 */
export const NailSalon: Class = 'http://schema.org/NailSalon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nerve
 */
export const Nerve: Class = 'http://schema.org/Nerve';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NewsMediaOrganization
 */
export const NewsMediaOrganization: Class = 'http://schema.org/NewsMediaOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Newspaper
 */
export const Newspaper: Class = 'http://schema.org/Newspaper';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NightClub
 */
export const NightClub: Class = 'http://schema.org/NightClub';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Notary
 */
export const Notary: Class = 'http://schema.org/Notary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NoteDigitalDocument
 */
export const NoteDigitalDocument: Class = 'http://schema.org/NoteDigitalDocument';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NutritionInformation
 */
export const NutritionInformation: Class = 'http://schema.org/NutritionInformation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Observation
 */
export const Observation: Class = 'http://schema.org/Observation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/QuantitativeValue
 */
export const QuantitativeValue: Class = 'http://schema.org/QuantitativeValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Occupation
 */
export const Occupation: Class = 'http://schema.org/Occupation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OccupationalExperienceRequirements
 */
export const OccupationalExperienceRequirements: Class = 'http://schema.org/OccupationalExperienceRequirements';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OccupationalTherapy
 */
export const OccupationalTherapy: Class = 'http://schema.org/OccupationalTherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OceanBodyOfWater
 */
export const OceanBodyOfWater: Class = 'http://schema.org/OceanBodyOfWater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfferCatalog
 */
export const OfferCatalog: Class = 'http://schema.org/OfferCatalog';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfferForLease
 */
export const OfferForLease: Class = 'http://schema.org/OfferForLease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfferForPurchase
 */
export const OfferForPurchase: Class = 'http://schema.org/OfferForPurchase';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfferItemCondition
 */
export const OfferItemCondition: Class = 'http://schema.org/OfferItemCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfferShippingDetails
 */
export const OfferShippingDetails: Class = 'http://schema.org/OfferShippingDetails';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfficeEquipmentStore
 */
export const OfficeEquipmentStore: Class = 'http://schema.org/OfficeEquipmentStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnDemandEvent
 */
export const OnDemandEvent: Class = 'http://schema.org/OnDemandEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnlineBusiness
 */
export const OnlineBusiness: Class = 'http://schema.org/OnlineBusiness';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnlineMarketplace
 */
export const OnlineMarketplace: Class = 'http://schema.org/OnlineMarketplace';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnlineStore
 */
export const OnlineStore: Class = 'http://schema.org/OnlineStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OpeningHoursSpecification
 */
export const OpeningHoursSpecification: Class = 'http://schema.org/OpeningHoursSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OperatingSystem
 */
export const OperatingSystem: Class = 'http://schema.org/OperatingSystem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OpinionNewsArticle
 */
export const OpinionNewsArticle: Class = 'http://schema.org/OpinionNewsArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Optician
 */
export const Optician: Class = 'http://schema.org/Optician';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Order
 */
export const Order: Class = 'http://schema.org/Order';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderAction
 */
export const OrderAction: Class = 'http://schema.org/OrderAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderItem
 */
export const OrderItem: Class = 'http://schema.org/OrderItem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderStatus
 */
export const OrderStatus: Class = 'http://schema.org/OrderStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OutletStore
 */
export const OutletStore: Class = 'http://schema.org/OutletStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OwnershipInfo
 */
export const OwnershipInfo: Class = 'http://schema.org/OwnershipInfo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaintAction
 */
export const PaintAction: Class = 'http://schema.org/PaintAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Painting
 */
export const Painting: Class = 'http://schema.org/Painting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PalliativeProcedure
 */
export const PalliativeProcedure: Class = 'http://schema.org/PalliativeProcedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ParcelDelivery
 */
export const ParcelDelivery: Class = 'http://schema.org/ParcelDelivery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ParentAudience
 */
export const ParentAudience: Class = 'http://schema.org/ParentAudience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Park
 */
export const Park: Class = 'http://schema.org/Park';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ParkingFacility
 */
export const ParkingFacility: Class = 'http://schema.org/ParkingFacility';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PathologyTest
 */
export const PathologyTest: Class = 'http://schema.org/PathologyTest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Patient
 */
export const Patient: Class = 'http://schema.org/Patient';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Person
 */
export const Person: Class = 'http://schema.org/Person';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PawnShop
 */
export const PawnShop: Class = 'http://schema.org/PawnShop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PayAction
 */
export const PayAction: Class = 'http://schema.org/PayAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentMethod
 */
export const PaymentMethod: Class = 'http://schema.org/PaymentMethod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentChargeSpecification
 */
export const PaymentChargeSpecification: Class = 'http://schema.org/PaymentChargeSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentMethodType
 */
export const PaymentMethodType: Class = 'http://schema.org/PaymentMethodType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentService
 */
export const PaymentService: Class = 'http://schema.org/PaymentService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentStatusType
 */
export const PaymentStatusType: Class = 'http://schema.org/PaymentStatusType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PerformAction
 */
export const PerformAction: Class = 'http://schema.org/PerformAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PerformanceRole
 */
export const PerformanceRole: Class = 'http://schema.org/PerformanceRole';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PerformingArtsEvent
 */
export const PerformingArtsEvent: Class = 'http://schema.org/PerformingArtsEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PerformingArtsTheater
 */
export const PerformingArtsTheater: Class = 'http://schema.org/PerformingArtsTheater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PetStore
 */
export const PetStore: Class = 'http://schema.org/PetStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Pharmacy
 */
export const Pharmacy: Class = 'http://schema.org/Pharmacy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Photograph
 */
export const Photograph: Class = 'http://schema.org/Photograph';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PhotographAction
 */
export const PhotographAction: Class = 'http://schema.org/PhotographAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PhysicalActivityCategory
 */
export const PhysicalActivityCategory: Class = 'http://schema.org/PhysicalActivityCategory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PhysicalExam
 */
export const PhysicalExam: Class = 'http://schema.org/PhysicalExam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PhysicalTherapy
 */
export const PhysicalTherapy: Class = 'http://schema.org/PhysicalTherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PhysiciansOffice
 */
export const PhysiciansOffice: Class = 'http://schema.org/PhysiciansOffice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Play
 */
export const Play: Class = 'http://schema.org/Play';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PlayGameAction
 */
export const PlayGameAction: Class = 'http://schema.org/PlayGameAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Playground
 */
export const Playground: Class = 'http://schema.org/Playground';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Plumber
 */
export const Plumber: Class = 'http://schema.org/Plumber';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PodcastEpisode
 */
export const PodcastEpisode: Class = 'http://schema.org/PodcastEpisode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PodcastSeason
 */
export const PodcastSeason: Class = 'http://schema.org/PodcastSeason';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PodcastSeries
 */
export const PodcastSeries: Class = 'http://schema.org/PodcastSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PoliceStation
 */
export const PoliceStation: Class = 'http://schema.org/PoliceStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PoliticalParty
 */
export const PoliticalParty: Class = 'http://schema.org/PoliticalParty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Pond
 */
export const Pond: Class = 'http://schema.org/Pond';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PostOffice
 */
export const PostOffice: Class = 'http://schema.org/PostOffice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PostalAddress
 */
export const PostalAddress: Class = 'http://schema.org/PostalAddress';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PostalCodeRangeSpecification
 */
export const PostalCodeRangeSpecification: Class = 'http://schema.org/PostalCodeRangeSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Poster
 */
export const Poster: Class = 'http://schema.org/Poster';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PreOrderAction
 */
export const PreOrderAction: Class = 'http://schema.org/PreOrderAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PrependAction
 */
export const PrependAction: Class = 'http://schema.org/PrependAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Preschool
 */
export const Preschool: Class = 'http://schema.org/Preschool';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PresentationDigitalDocument
 */
export const PresentationDigitalDocument: Class = 'http://schema.org/PresentationDigitalDocument';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PreventionIndication
 */
export const PreventionIndication: Class = 'http://schema.org/PreventionIndication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PriceComponentTypeEnumeration
 */
export const PriceComponentTypeEnumeration: Class = 'http://schema.org/PriceComponentTypeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PriceTypeEnumeration
 */
export const PriceTypeEnumeration: Class = 'http://schema.org/PriceTypeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductCollection
 */
export const ProductCollection: Class = 'http://schema.org/ProductCollection';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductGroup
 */
export const ProductGroup: Class = 'http://schema.org/ProductGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductReturnEnumeration
 */
export const ProductReturnEnumeration: Class = 'http://schema.org/ProductReturnEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductReturnPolicy
 */
export const ProductReturnPolicy: Class = 'http://schema.org/ProductReturnPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProfessionalService
 */
export const ProfessionalService: Class = 'http://schema.org/ProfessionalService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProfilePage
 */
export const ProfilePage: Class = 'http://schema.org/ProfilePage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProgramMembership
 */
export const ProgramMembership: Class = 'http://schema.org/ProgramMembership';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PronounceableText
 */
export const PronounceableText: Class = 'http://schema.org/PronounceableText';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PropertyValueSpecification
 */
export const PropertyValueSpecification: Class = 'http://schema.org/PropertyValueSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Protein
 */
export const Protein: Class = 'http://schema.org/Protein';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PsychologicalTreatment
 */
export const PsychologicalTreatment: Class = 'http://schema.org/PsychologicalTreatment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PublicSwimmingPool
 */
export const PublicSwimmingPool: Class = 'http://schema.org/PublicSwimmingPool';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PublicToilet
 */
export const PublicToilet: Class = 'http://schema.org/PublicToilet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PublicationVolume
 */
export const PublicationVolume: Class = 'http://schema.org/PublicationVolume';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PurchaseType
 */
export const PurchaseType: Class = 'http://schema.org/PurchaseType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/QAPage
 */
export const QAPage: Class = 'http://schema.org/QAPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Question
 */
export const Question: Class = 'http://schema.org/Question';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Quiz
 */
export const Quiz: Class = 'http://schema.org/Quiz';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Quotation
 */
export const Quotation: Class = 'http://schema.org/Quotation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/QuoteAction
 */
export const QuoteAction: Class = 'http://schema.org/QuoteAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RVPark
 */
export const RVPark: Class = 'http://schema.org/RVPark';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadiationTherapy
 */
export const RadiationTherapy: Class = 'http://schema.org/RadiationTherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadioBroadcastService
 */
export const RadioBroadcastService: Class = 'http://schema.org/RadioBroadcastService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadioClip
 */
export const RadioClip: Class = 'http://schema.org/RadioClip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadioEpisode
 */
export const RadioEpisode: Class = 'http://schema.org/RadioEpisode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadioSeason
 */
export const RadioSeason: Class = 'http://schema.org/RadioSeason';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadioSeries
 */
export const RadioSeries: Class = 'http://schema.org/RadioSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RadioStation
 */
export const RadioStation: Class = 'http://schema.org/RadioStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReadAction
 */
export const ReadAction: Class = 'http://schema.org/ReadAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RealEstateAgent
 */
export const RealEstateAgent: Class = 'http://schema.org/RealEstateAgent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RealEstateListing
 */
export const RealEstateListing: Class = 'http://schema.org/RealEstateListing';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReceiveAction
 */
export const ReceiveAction: Class = 'http://schema.org/ReceiveAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Recipe
 */
export const Recipe: Class = 'http://schema.org/Recipe';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Recommendation
 */
export const Recommendation: Class = 'http://schema.org/Recommendation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RecommendedDoseSchedule
 */
export const RecommendedDoseSchedule: Class = 'http://schema.org/RecommendedDoseSchedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RecyclingCenter
 */
export const RecyclingCenter: Class = 'http://schema.org/RecyclingCenter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RefundTypeEnumeration
 */
export const RefundTypeEnumeration: Class = 'http://schema.org/RefundTypeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RegisterAction
 */
export const RegisterAction: Class = 'http://schema.org/RegisterAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RejectAction
 */
export const RejectAction: Class = 'http://schema.org/RejectAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RentAction
 */
export const RentAction: Class = 'http://schema.org/RentAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RentalCarReservation
 */
export const RentalCarReservation: Class = 'http://schema.org/RentalCarReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RepaymentSpecification
 */
export const RepaymentSpecification: Class = 'http://schema.org/RepaymentSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReplaceAction
 */
export const ReplaceAction: Class = 'http://schema.org/ReplaceAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReplyAction
 */
export const ReplyAction: Class = 'http://schema.org/ReplyAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Report
 */
export const Report: Class = 'http://schema.org/Report';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReportageNewsArticle
 */
export const ReportageNewsArticle: Class = 'http://schema.org/ReportageNewsArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReportedDoseSchedule
 */
export const ReportedDoseSchedule: Class = 'http://schema.org/ReportedDoseSchedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ResearchOrganization
 */
export const ResearchOrganization: Class = 'http://schema.org/ResearchOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ResearchProject
 */
export const ResearchProject: Class = 'http://schema.org/ResearchProject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Researcher
 */
export const Researcher: Class = 'http://schema.org/Researcher';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReservationPackage
 */
export const ReservationPackage: Class = 'http://schema.org/ReservationPackage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReservationStatusType
 */
export const ReservationStatusType: Class = 'http://schema.org/ReservationStatusType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReserveAction
 */
export const ReserveAction: Class = 'http://schema.org/ReserveAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Reservoir
 */
export const Reservoir: Class = 'http://schema.org/Reservoir';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ResetPasswordAction
 */
export const ResetPasswordAction: Class = 'http://schema.org/ResetPasswordAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Resort
 */
export const Resort: Class = 'http://schema.org/Resort';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Restaurant
 */
export const Restaurant: Class = 'http://schema.org/Restaurant';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RestrictedDiet
 */
export const RestrictedDiet: Class = 'http://schema.org/RestrictedDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ResumeAction
 */
export const ResumeAction: Class = 'http://schema.org/ResumeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnAction
 */
export const ReturnAction: Class = 'http://schema.org/ReturnAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnFeesEnumeration
 */
export const ReturnFeesEnumeration: Class = 'http://schema.org/ReturnFeesEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnLabelSourceEnumeration
 */
export const ReturnLabelSourceEnumeration: Class = 'http://schema.org/ReturnLabelSourceEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnMethodEnumeration
 */
export const ReturnMethodEnumeration: Class = 'http://schema.org/ReturnMethodEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReviewAction
 */
export const ReviewAction: Class = 'http://schema.org/ReviewAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReviewNewsArticle
 */
export const ReviewNewsArticle: Class = 'http://schema.org/ReviewNewsArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RiverBodyOfWater
 */
export const RiverBodyOfWater: Class = 'http://schema.org/RiverBodyOfWater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RoofingContractor
 */
export const RoofingContractor: Class = 'http://schema.org/RoofingContractor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RsvpAction
 */
export const RsvpAction: Class = 'http://schema.org/RsvpAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RsvpResponseType
 */
export const RsvpResponseType: Class = 'http://schema.org/RsvpResponseType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RuntimePlatform
 */
export const RuntimePlatform: Class = 'http://schema.org/RuntimePlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SaleEvent
 */
export const SaleEvent: Class = 'http://schema.org/SaleEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SatiricalArticle
 */
export const SatiricalArticle: Class = 'http://schema.org/SatiricalArticle';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Schedule
 */
export const Schedule: Class = 'http://schema.org/Schedule';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ScheduleAction
 */
export const ScheduleAction: Class = 'http://schema.org/ScheduleAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/School
 */
export const School: Class = 'http://schema.org/School';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SchoolDistrict
 */
export const SchoolDistrict: Class = 'http://schema.org/SchoolDistrict';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ScreeningEvent
 */
export const ScreeningEvent: Class = 'http://schema.org/ScreeningEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Sculpture
 */
export const Sculpture: Class = 'http://schema.org/Sculpture';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SeaBodyOfWater
 */
export const SeaBodyOfWater: Class = 'http://schema.org/SeaBodyOfWater';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SearchAction
 */
export const SearchAction: Class = 'http://schema.org/SearchAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SearchRescueOrganization
 */
export const SearchRescueOrganization: Class = 'http://schema.org/SearchRescueOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SearchResultsPage
 */
export const SearchResultsPage: Class = 'http://schema.org/SearchResultsPage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Season
 */
export const Season: Class = 'http://schema.org/Season';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Seat
 */
export const Seat: Class = 'http://schema.org/Seat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SeekToAction
 */
export const SeekToAction: Class = 'http://schema.org/SeekToAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SelfStorage
 */
export const SelfStorage: Class = 'http://schema.org/SelfStorage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SellAction
 */
export const SellAction: Class = 'http://schema.org/SellAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SendAction
 */
export const SendAction: Class = 'http://schema.org/SendAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SequentialArt
 */
export const SequentialArt: Class = 'http://schema.org/SequentialArt';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ServiceChannel
 */
export const ServiceChannel: Class = 'http://schema.org/ServiceChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ServicePeriod
 */
export const ServicePeriod: Class = 'http://schema.org/ServicePeriod';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShareAction
 */
export const ShareAction: Class = 'http://schema.org/ShareAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SheetMusic
 */
export const SheetMusic: Class = 'http://schema.org/SheetMusic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShippingDeliveryTime
 */
export const ShippingDeliveryTime: Class = 'http://schema.org/ShippingDeliveryTime';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShippingRateSettings
 */
export const ShippingRateSettings: Class = 'http://schema.org/ShippingRateSettings';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShippingService
 */
export const ShippingService: Class = 'http://schema.org/ShippingService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShoeStore
 */
export const ShoeStore: Class = 'http://schema.org/ShoeStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShoppingCenter
 */
export const ShoppingCenter: Class = 'http://schema.org/ShoppingCenter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ShortStory
 */
export const ShortStory: Class = 'http://schema.org/ShortStory';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SingleFamilyResidence
 */
export const SingleFamilyResidence: Class = 'http://schema.org/SingleFamilyResidence';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SiteNavigationElement
 */
export const SiteNavigationElement: Class = 'http://schema.org/SiteNavigationElement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WebPageElement
 */
export const WebPageElement: Class = 'http://schema.org/WebPageElement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SizeGroupEnumeration
 */
export const SizeGroupEnumeration: Class = 'http://schema.org/SizeGroupEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SizeSpecification
 */
export const SizeSpecification: Class = 'http://schema.org/SizeSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SizeSystemEnumeration
 */
export const SizeSystemEnumeration: Class = 'http://schema.org/SizeSystemEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SkiResort
 */
export const SkiResort: Class = 'http://schema.org/SkiResort';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SocialEvent
 */
export const SocialEvent: Class = 'http://schema.org/SocialEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SolveMathAction
 */
export const SolveMathAction: Class = 'http://schema.org/SolveMathAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SomeProducts
 */
export const SomeProducts: Class = 'http://schema.org/SomeProducts';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SpeakableSpecification
 */
export const SpeakableSpecification: Class = 'http://schema.org/SpeakableSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SpecialAnnouncement
 */
export const SpecialAnnouncement: Class = 'http://schema.org/SpecialAnnouncement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SportingGoodsStore
 */
export const SportingGoodsStore: Class = 'http://schema.org/SportingGoodsStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SportsClub
 */
export const SportsClub: Class = 'http://schema.org/SportsClub';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SportsEvent
 */
export const SportsEvent: Class = 'http://schema.org/SportsEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SportsOrganization
 */
export const SportsOrganization: Class = 'http://schema.org/SportsOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SportsTeam
 */
export const SportsTeam: Class = 'http://schema.org/SportsTeam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SpreadsheetDigitalDocument
 */
export const SpreadsheetDigitalDocument: Class = 'http://schema.org/SpreadsheetDigitalDocument';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StadiumOrArena
 */
export const StadiumOrArena: Class = 'http://schema.org/StadiumOrArena';

/**
 * 
 * 
 * 
 *
 * http://schema.org/State
 */
export const State: Class = 'http://schema.org/State';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Statement
 */
export const Statement: Class = 'http://schema.org/Statement';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StatisticalPopulation
 */
export const StatisticalPopulation: Class = 'http://schema.org/StatisticalPopulation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StatisticalVariable
 */
export const StatisticalVariable: Class = 'http://schema.org/StatisticalVariable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SteeringPositionValue
 */
export const SteeringPositionValue: Class = 'http://schema.org/SteeringPositionValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StupidType
 */
export const StupidType: Class = 'http://schema.org/StupidType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SubscribeAction
 */
export const SubscribeAction: Class = 'http://schema.org/SubscribeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SubwayStation
 */
export const SubwayStation: Class = 'http://schema.org/SubwayStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Suite
 */
export const Suite: Class = 'http://schema.org/Suite';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SuperficialAnatomy
 */
export const SuperficialAnatomy: Class = 'http://schema.org/SuperficialAnatomy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SurgicalProcedure
 */
export const SurgicalProcedure: Class = 'http://schema.org/SurgicalProcedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SuspendAction
 */
export const SuspendAction: Class = 'http://schema.org/SuspendAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Syllabus
 */
export const Syllabus: Class = 'http://schema.org/Syllabus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Synagogue
 */
export const Synagogue: Class = 'http://schema.org/Synagogue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TVClip
 */
export const TVClip: Class = 'http://schema.org/TVClip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TVEpisode
 */
export const TVEpisode: Class = 'http://schema.org/TVEpisode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TVSeason
 */
export const TVSeason: Class = 'http://schema.org/TVSeason';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TVSeries
 */
export const TVSeries: Class = 'http://schema.org/TVSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Table
 */
export const Table: Class = 'http://schema.org/Table';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TakeAction
 */
export const TakeAction: Class = 'http://schema.org/TakeAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TattooParlor
 */
export const TattooParlor: Class = 'http://schema.org/TattooParlor';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Taxi
 */
export const Taxi: Class = 'http://schema.org/Taxi';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TaxiService
 */
export const TaxiService: Class = 'http://schema.org/TaxiService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TaxiReservation
 */
export const TaxiReservation: Class = 'http://schema.org/TaxiReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TaxiStand
 */
export const TaxiStand: Class = 'http://schema.org/TaxiStand';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Taxon
 */
export const Taxon: Class = 'http://schema.org/Taxon';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TelevisionChannel
 */
export const TelevisionChannel: Class = 'http://schema.org/TelevisionChannel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TelevisionStation
 */
export const TelevisionStation: Class = 'http://schema.org/TelevisionStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TennisComplex
 */
export const TennisComplex: Class = 'http://schema.org/TennisComplex';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TextDigitalDocument
 */
export const TextDigitalDocument: Class = 'http://schema.org/TextDigitalDocument';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TextObject
 */
export const TextObject: Class = 'http://schema.org/TextObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TheaterEvent
 */
export const TheaterEvent: Class = 'http://schema.org/TheaterEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TheaterGroup
 */
export const TheaterGroup: Class = 'http://schema.org/TheaterGroup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Thesis
 */
export const Thesis: Class = 'http://schema.org/Thesis';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Ticket
 */
export const Ticket: Class = 'http://schema.org/Ticket';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TieAction
 */
export const TieAction: Class = 'http://schema.org/TieAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TierBenefitEnumeration
 */
export const TierBenefitEnumeration: Class = 'http://schema.org/TierBenefitEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Time
 */
export const Time: Class = 'http://schema.org/Time';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TipAction
 */
export const TipAction: Class = 'http://schema.org/TipAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TireShop
 */
export const TireShop: Class = 'http://schema.org/TireShop';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TouristAttraction
 */
export const TouristAttraction: Class = 'http://schema.org/TouristAttraction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TouristDestination
 */
export const TouristDestination: Class = 'http://schema.org/TouristDestination';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TouristInformationCenter
 */
export const TouristInformationCenter: Class = 'http://schema.org/TouristInformationCenter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TouristTrip
 */
export const TouristTrip: Class = 'http://schema.org/TouristTrip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ToyStore
 */
export const ToyStore: Class = 'http://schema.org/ToyStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TrackAction
 */
export const TrackAction: Class = 'http://schema.org/TrackAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TrainReservation
 */
export const TrainReservation: Class = 'http://schema.org/TrainReservation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TrainStation
 */
export const TrainStation: Class = 'http://schema.org/TrainStation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TrainTrip
 */
export const TrainTrip: Class = 'http://schema.org/TrainTrip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TravelAction
 */
export const TravelAction: Class = 'http://schema.org/TravelAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TravelAgency
 */
export const TravelAgency: Class = 'http://schema.org/TravelAgency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TreatmentIndication
 */
export const TreatmentIndication: Class = 'http://schema.org/TreatmentIndication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TypeAndQuantityNode
 */
export const TypeAndQuantityNode: Class = 'http://schema.org/TypeAndQuantityNode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UKNonprofitType
 */
export const UKNonprofitType: Class = 'http://schema.org/UKNonprofitType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/URL
 */
export const URL: Class = 'http://schema.org/URL';

/**
 * 
 * 
 * 
 *
 * http://schema.org/USNonprofitType
 */
export const USNonprofitType: Class = 'http://schema.org/USNonprofitType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UnRegisterAction
 */
export const UnRegisterAction: Class = 'http://schema.org/UnRegisterAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UnitPriceSpecification
 */
export const UnitPriceSpecification: Class = 'http://schema.org/UnitPriceSpecification';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UseAction
 */
export const UseAction: Class = 'http://schema.org/UseAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserBlocks
 */
export const UserBlocks: Class = 'http://schema.org/UserBlocks';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserInteraction
 */
export const UserInteraction: Class = 'http://schema.org/UserInteraction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserCheckins
 */
export const UserCheckins: Class = 'http://schema.org/UserCheckins';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserComments
 */
export const UserComments: Class = 'http://schema.org/UserComments';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserDownloads
 */
export const UserDownloads: Class = 'http://schema.org/UserDownloads';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserLikes
 */
export const UserLikes: Class = 'http://schema.org/UserLikes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserPageVisits
 */
export const UserPageVisits: Class = 'http://schema.org/UserPageVisits';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserPlays
 */
export const UserPlays: Class = 'http://schema.org/UserPlays';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserPlusOnes
 */
export const UserPlusOnes: Class = 'http://schema.org/UserPlusOnes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserReview
 */
export const UserReview: Class = 'http://schema.org/UserReview';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UserTweets
 */
export const UserTweets: Class = 'http://schema.org/UserTweets';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VacationRental
 */
export const VacationRental: Class = 'http://schema.org/VacationRental';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Vein
 */
export const Vein: Class = 'http://schema.org/Vein';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VeterinaryCare
 */
export const VeterinaryCare: Class = 'http://schema.org/VeterinaryCare';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VideoGallery
 */
export const VideoGallery: Class = 'http://schema.org/VideoGallery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VideoGame
 */
export const VideoGame: Class = 'http://schema.org/VideoGame';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VideoGameClip
 */
export const VideoGameClip: Class = 'http://schema.org/VideoGameClip';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VideoGameSeries
 */
export const VideoGameSeries: Class = 'http://schema.org/VideoGameSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VideoObject
 */
export const VideoObject: Class = 'http://schema.org/VideoObject';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VideoObjectSnapshot
 */
export const VideoObjectSnapshot: Class = 'http://schema.org/VideoObjectSnapshot';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ViewAction
 */
export const ViewAction: Class = 'http://schema.org/ViewAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VirtualLocation
 */
export const VirtualLocation: Class = 'http://schema.org/VirtualLocation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VisualArtsEvent
 */
export const VisualArtsEvent: Class = 'http://schema.org/VisualArtsEvent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VitalSign
 */
export const VitalSign: Class = 'http://schema.org/VitalSign';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Volcano
 */
export const Volcano: Class = 'http://schema.org/Volcano';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VoteAction
 */
export const VoteAction: Class = 'http://schema.org/VoteAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WPAdBlock
 */
export const WPAdBlock: Class = 'http://schema.org/WPAdBlock';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WPFooter
 */
export const WPFooter: Class = 'http://schema.org/WPFooter';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WPHeader
 */
export const WPHeader: Class = 'http://schema.org/WPHeader';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WPSideBar
 */
export const WPSideBar: Class = 'http://schema.org/WPSideBar';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WantAction
 */
export const WantAction: Class = 'http://schema.org/WantAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WarrantyPromise
 */
export const WarrantyPromise: Class = 'http://schema.org/WarrantyPromise';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WarrantyScope
 */
export const WarrantyScope: Class = 'http://schema.org/WarrantyScope';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WatchAction
 */
export const WatchAction: Class = 'http://schema.org/WatchAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Waterfall
 */
export const Waterfall: Class = 'http://schema.org/Waterfall';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearAction
 */
export const WearAction: Class = 'http://schema.org/WearAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementTypeEnumeration
 */
export const WearableMeasurementTypeEnumeration: Class = 'http://schema.org/WearableMeasurementTypeEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupEnumeration
 */
export const WearableSizeGroupEnumeration: Class = 'http://schema.org/WearableSizeGroupEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemEnumeration
 */
export const WearableSizeSystemEnumeration: Class = 'http://schema.org/WearableSizeSystemEnumeration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WebAPI
 */
export const WebAPI: Class = 'http://schema.org/WebAPI';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WebApplication
 */
export const WebApplication: Class = 'http://schema.org/WebApplication';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WebSite
 */
export const WebSite: Class = 'http://schema.org/WebSite';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WholesaleStore
 */
export const WholesaleStore: Class = 'http://schema.org/WholesaleStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WinAction
 */
export const WinAction: Class = 'http://schema.org/WinAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Winery
 */
export const Winery: Class = 'http://schema.org/Winery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WorkBasedProgram
 */
export const WorkBasedProgram: Class = 'http://schema.org/WorkBasedProgram';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WorkersUnion
 */
export const WorkersUnion: Class = 'http://schema.org/WorkersUnion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WriteAction
 */
export const WriteAction: Class = 'http://schema.org/WriteAction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/XPathType
 */
export const XPathType: Class = 'http://schema.org/XPathType';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Zoo
 */
export const Zoo: Class = 'http://schema.org/Zoo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Abdomen
 */
export const Abdomen: OtherIndividual = 'http://schema.org/Abdomen';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ActivationFee
 */
export const ActivationFee: OtherIndividual = 'http://schema.org/ActivationFee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ActiveActionStatus
 */
export const ActiveActionStatus: OtherIndividual = 'http://schema.org/ActiveActionStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ActiveNotRecruiting
 */
export const ActiveNotRecruiting: OtherIndividual = 'http://schema.org/ActiveNotRecruiting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AerobicActivity
 */
export const AerobicActivity: OtherIndividual = 'http://schema.org/AerobicActivity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AlbumRelease
 */
export const AlbumRelease: OtherIndividual = 'http://schema.org/AlbumRelease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AlcoholConsideration
 */
export const AlcoholConsideration: OtherIndividual = 'http://schema.org/AlcoholConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AlgorithmicMediaDigitalSource
 */
export const AlgorithmicMediaDigitalSource: OtherIndividual = 'http://schema.org/AlgorithmicMediaDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AlgorithmicallyEnhancedDigitalSource
 */
export const AlgorithmicallyEnhancedDigitalSource: OtherIndividual = 'http://schema.org/AlgorithmicallyEnhancedDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AllWheelDriveConfiguration
 */
export const AllWheelDriveConfiguration: OtherIndividual = 'http://schema.org/AllWheelDriveConfiguration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AllergiesHealthAspect
 */
export const AllergiesHealthAspect: OtherIndividual = 'http://schema.org/AllergiesHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AnaerobicActivity
 */
export const AnaerobicActivity: OtherIndividual = 'http://schema.org/AnaerobicActivity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AndroidPlatform
 */
export const AndroidPlatform: OtherIndividual = 'http://schema.org/AndroidPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Anesthesia
 */
export const Anesthesia: OtherIndividual = 'http://schema.org/Anesthesia';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Appearance
 */
export const Appearance: OtherIndividual = 'http://schema.org/Appearance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AudiobookFormat
 */
export const AudiobookFormat: OtherIndividual = 'http://schema.org/AudiobookFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Audiology
 */
export const Audiology: OtherIndividual = 'http://schema.org/Audiology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/AuthoritativeLegalValue
 */
export const AuthoritativeLegalValue: OtherIndividual = 'http://schema.org/AuthoritativeLegalValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Ayurvedic
 */
export const Ayurvedic: OtherIndividual = 'http://schema.org/Ayurvedic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BackOrder
 */
export const BackOrder: OtherIndividual = 'http://schema.org/BackOrder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Bacteria
 */
export const Bacteria: OtherIndividual = 'http://schema.org/Bacteria';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Balance
 */
export const Balance: OtherIndividual = 'http://schema.org/Balance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BasicIncome
 */
export const BasicIncome: OtherIndividual = 'http://schema.org/BasicIncome';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BenefitsHealthAspect
 */
export const BenefitsHealthAspect: OtherIndividual = 'http://schema.org/BenefitsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementArm
 */
export const BodyMeasurementArm: OtherIndividual = 'http://schema.org/BodyMeasurementArm';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementBust
 */
export const BodyMeasurementBust: OtherIndividual = 'http://schema.org/BodyMeasurementBust';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementChest
 */
export const BodyMeasurementChest: OtherIndividual = 'http://schema.org/BodyMeasurementChest';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementFoot
 */
export const BodyMeasurementFoot: OtherIndividual = 'http://schema.org/BodyMeasurementFoot';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementHand
 */
export const BodyMeasurementHand: OtherIndividual = 'http://schema.org/BodyMeasurementHand';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementHead
 */
export const BodyMeasurementHead: OtherIndividual = 'http://schema.org/BodyMeasurementHead';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementHeight
 */
export const BodyMeasurementHeight: OtherIndividual = 'http://schema.org/BodyMeasurementHeight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementHips
 */
export const BodyMeasurementHips: OtherIndividual = 'http://schema.org/BodyMeasurementHips';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementInsideLeg
 */
export const BodyMeasurementInsideLeg: OtherIndividual = 'http://schema.org/BodyMeasurementInsideLeg';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementNeck
 */
export const BodyMeasurementNeck: OtherIndividual = 'http://schema.org/BodyMeasurementNeck';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementUnderbust
 */
export const BodyMeasurementUnderbust: OtherIndividual = 'http://schema.org/BodyMeasurementUnderbust';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementWaist
 */
export const BodyMeasurementWaist: OtherIndividual = 'http://schema.org/BodyMeasurementWaist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BodyMeasurementWeight
 */
export const BodyMeasurementWeight: OtherIndividual = 'http://schema.org/BodyMeasurementWeight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BroadcastRelease
 */
export const BroadcastRelease: OtherIndividual = 'http://schema.org/BroadcastRelease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/BusinessSupport
 */
export const BusinessSupport: OtherIndividual = 'http://schema.org/BusinessSupport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ByBankTransferInAdvance
 */
export const ByBankTransferInAdvance: OtherIndividual = 'http://schema.org/ByBankTransferInAdvance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ByInvoice
 */
export const ByInvoice: OtherIndividual = 'http://schema.org/ByInvoice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CDFormat
 */
export const CDFormat: OtherIndividual = 'http://schema.org/CDFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/COD
 */
export const COD: OtherIndividual = 'http://schema.org/COD';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CT
 */
export const CT: OtherIndividual = 'http://schema.org/CT';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Cardiovascular
 */
export const Cardiovascular: OtherIndividual = 'http://schema.org/Cardiovascular';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CardiovascularExam
 */
export const CardiovascularExam: OtherIndividual = 'http://schema.org/CardiovascularExam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CaseSeries
 */
export const CaseSeries: OtherIndividual = 'http://schema.org/CaseSeries';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Cash
 */
export const Cash: OtherIndividual = 'http://schema.org/Cash';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CassetteFormat
 */
export const CassetteFormat: OtherIndividual = 'http://schema.org/CassetteFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CausesHealthAspect
 */
export const CausesHealthAspect: OtherIndividual = 'http://schema.org/CausesHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CertificationActive
 */
export const CertificationActive: OtherIndividual = 'http://schema.org/CertificationActive';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CertificationInactive
 */
export const CertificationInactive: OtherIndividual = 'http://schema.org/CertificationInactive';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CharitableIncorporatedOrganization
 */
export const CharitableIncorporatedOrganization: OtherIndividual = 'http://schema.org/CharitableIncorporatedOrganization';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CheckInAdvance
 */
export const CheckInAdvance: OtherIndividual = 'http://schema.org/CheckInAdvance';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Chiropractic
 */
export const Chiropractic: OtherIndividual = 'http://schema.org/Chiropractic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CleaningFee
 */
export const CleaningFee: OtherIndividual = 'http://schema.org/CleaningFee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Clinician
 */
export const Clinician: OtherIndividual = 'http://schema.org/Clinician';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CoOp
 */
export const CoOp: OtherIndividual = 'http://schema.org/CoOp';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CohortStudy
 */
export const CohortStudy: OtherIndividual = 'http://schema.org/CohortStudy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CommentPermission
 */
export const CommentPermission: OtherIndividual = 'http://schema.org/CommentPermission';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CommunityHealth
 */
export const CommunityHealth: OtherIndividual = 'http://schema.org/CommunityHealth';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompilationAlbum
 */
export const CompilationAlbum: OtherIndividual = 'http://schema.org/CompilationAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Completed
 */
export const Completed: OtherIndividual = 'http://schema.org/Completed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompletedActionStatus
 */
export const CompletedActionStatus: OtherIndividual = 'http://schema.org/CompletedActionStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompositeCaptureDigitalSource
 */
export const CompositeCaptureDigitalSource: OtherIndividual = 'http://schema.org/CompositeCaptureDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompositeDigitalSource
 */
export const CompositeDigitalSource: OtherIndividual = 'http://schema.org/CompositeDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompositeSyntheticDigitalSource
 */
export const CompositeSyntheticDigitalSource: OtherIndividual = 'http://schema.org/CompositeSyntheticDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CompositeWithTrainedAlgorithmicMediaDigitalSource
 */
export const CompositeWithTrainedAlgorithmicMediaDigitalSource: OtherIndividual = 'http://schema.org/CompositeWithTrainedAlgorithmicMediaDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ContagiousnessHealthAspect
 */
export const ContagiousnessHealthAspect: OtherIndividual = 'http://schema.org/ContagiousnessHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/CrossSectional
 */
export const CrossSectional: OtherIndividual = 'http://schema.org/CrossSectional';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DECooperativeCharity
 */
export const DECooperativeCharity: OtherIndividual = 'http://schema.org/DECooperativeCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DEFoundationCharity
 */
export const DEFoundationCharity: OtherIndividual = 'http://schema.org/DEFoundationCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DEJointStockCompanyCharity
 */
export const DEJointStockCompanyCharity: OtherIndividual = 'http://schema.org/DEJointStockCompanyCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DELimitedLiabilityCharity
 */
export const DELimitedLiabilityCharity: OtherIndividual = 'http://schema.org/DELimitedLiabilityCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DENotRegisteredAssociationCharity
 */
export const DENotRegisteredAssociationCharity: OtherIndividual = 'http://schema.org/DENotRegisteredAssociationCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DEPublicCharity
 */
export const DEPublicCharity: OtherIndividual = 'http://schema.org/DEPublicCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DERegisteredAssociationCharity
 */
export const DERegisteredAssociationCharity: OtherIndividual = 'http://schema.org/DERegisteredAssociationCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DJMixAlbum
 */
export const DJMixAlbum: OtherIndividual = 'http://schema.org/DJMixAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DVDFormat
 */
export const DVDFormat: OtherIndividual = 'http://schema.org/DVDFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DamagedCondition
 */
export const DamagedCondition: OtherIndividual = 'http://schema.org/DamagedCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DangerousGoodConsideration
 */
export const DangerousGoodConsideration: OtherIndividual = 'http://schema.org/DangerousGoodConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DataDrivenMediaDigitalSource
 */
export const DataDrivenMediaDigitalSource: OtherIndividual = 'http://schema.org/DataDrivenMediaDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DecontextualizedContent
 */
export const DecontextualizedContent: OtherIndividual = 'http://schema.org/DecontextualizedContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DefinitiveLegalValue
 */
export const DefinitiveLegalValue: OtherIndividual = 'http://schema.org/DefinitiveLegalValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DemoAlbum
 */
export const DemoAlbum: OtherIndividual = 'http://schema.org/DemoAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DemoGameAvailability
 */
export const DemoGameAvailability: OtherIndividual = 'http://schema.org/DemoGameAvailability';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Dentistry
 */
export const Dentistry: OtherIndividual = 'http://schema.org/Dentistry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Dermatologic
 */
export const Dermatologic: OtherIndividual = 'http://schema.org/Dermatologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Dermatology
 */
export const Dermatology: OtherIndividual = 'http://schema.org/Dermatology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DesktopWebPlatform
 */
export const DesktopWebPlatform: OtherIndividual = 'http://schema.org/DesktopWebPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DiabeticDiet
 */
export const DiabeticDiet: OtherIndividual = 'http://schema.org/DiabeticDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Diagnostic
 */
export const Diagnostic: OtherIndividual = 'http://schema.org/Diagnostic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DietNutrition
 */
export const DietNutrition: OtherIndividual = 'http://schema.org/DietNutrition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalArtDigitalSource
 */
export const DigitalArtDigitalSource: OtherIndividual = 'http://schema.org/DigitalArtDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalAudioTapeFormat
 */
export const DigitalAudioTapeFormat: OtherIndividual = 'http://schema.org/DigitalAudioTapeFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalCaptureDigitalSource
 */
export const DigitalCaptureDigitalSource: OtherIndividual = 'http://schema.org/DigitalCaptureDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DigitalFormat
 */
export const DigitalFormat: OtherIndividual = 'http://schema.org/DigitalFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DirectDebit
 */
export const DirectDebit: OtherIndividual = 'http://schema.org/DirectDebit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DisabilitySupport
 */
export const DisabilitySupport: OtherIndividual = 'http://schema.org/DisabilitySupport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Discontinued
 */
export const Discontinued: OtherIndividual = 'http://schema.org/Discontinued';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DistanceFee
 */
export const DistanceFee: OtherIndividual = 'http://schema.org/DistanceFee';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DoubleBlindedTrial
 */
export const DoubleBlindedTrial: OtherIndividual = 'http://schema.org/DoubleBlindedTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Downpayment
 */
export const Downpayment: OtherIndividual = 'http://schema.org/Downpayment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/DrivingSchoolVehicleUsage
 */
export const DrivingSchoolVehicleUsage: OtherIndividual = 'http://schema.org/DrivingSchoolVehicleUsage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EBook
 */
export const EBook: OtherIndividual = 'http://schema.org/EBook';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EPRelease
 */
export const EPRelease: OtherIndividual = 'http://schema.org/EPRelease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryA
 */
export const EUEnergyEfficiencyCategoryA: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryA';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryA1Plus
 */
export const EUEnergyEfficiencyCategoryA1Plus: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryA1Plus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryA2Plus
 */
export const EUEnergyEfficiencyCategoryA2Plus: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryA2Plus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryA3Plus
 */
export const EUEnergyEfficiencyCategoryA3Plus: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryA3Plus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryB
 */
export const EUEnergyEfficiencyCategoryB: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryB';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryC
 */
export const EUEnergyEfficiencyCategoryC: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryC';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryD
 */
export const EUEnergyEfficiencyCategoryD: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryD';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryE
 */
export const EUEnergyEfficiencyCategoryE: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryE';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryF
 */
export const EUEnergyEfficiencyCategoryF: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryF';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EUEnergyEfficiencyCategoryG
 */
export const EUEnergyEfficiencyCategoryG: OtherIndividual = 'http://schema.org/EUEnergyEfficiencyCategoryG';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Ear
 */
export const Ear: OtherIndividual = 'http://schema.org/Ear';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EditedOrCroppedContent
 */
export const EditedOrCroppedContent: OtherIndividual = 'http://schema.org/EditedOrCroppedContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EffectivenessHealthAspect
 */
export const EffectivenessHealthAspect: OtherIndividual = 'http://schema.org/EffectivenessHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Emergency
 */
export const Emergency: OtherIndividual = 'http://schema.org/Emergency';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Endocrine
 */
export const Endocrine: OtherIndividual = 'http://schema.org/Endocrine';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EnergyStarCertified
 */
export const EnergyStarCertified: OtherIndividual = 'http://schema.org/EnergyStarCertified';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EnrollingByInvitation
 */
export const EnrollingByInvitation: OtherIndividual = 'http://schema.org/EnrollingByInvitation';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventCancelled
 */
export const EventCancelled: OtherIndividual = 'http://schema.org/EventCancelled';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventMovedOnline
 */
export const EventMovedOnline: OtherIndividual = 'http://schema.org/EventMovedOnline';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventPostponed
 */
export const EventPostponed: OtherIndividual = 'http://schema.org/EventPostponed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventRescheduled
 */
export const EventRescheduled: OtherIndividual = 'http://schema.org/EventRescheduled';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EventScheduled
 */
export const EventScheduled: OtherIndividual = 'http://schema.org/EventScheduled';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EvidenceLevelA
 */
export const EvidenceLevelA: OtherIndividual = 'http://schema.org/EvidenceLevelA';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EvidenceLevelB
 */
export const EvidenceLevelB: OtherIndividual = 'http://schema.org/EvidenceLevelB';

/**
 * 
 * 
 * 
 *
 * http://schema.org/EvidenceLevelC
 */
export const EvidenceLevelC: OtherIndividual = 'http://schema.org/EvidenceLevelC';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ExampleMeasurementMethodEnum
 */
export const ExampleMeasurementMethodEnum: OtherIndividual = 'http://schema.org/ExampleMeasurementMethodEnum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ExchangeRefund
 */
export const ExchangeRefund: OtherIndividual = 'http://schema.org/ExchangeRefund';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Eye
 */
export const Eye: OtherIndividual = 'http://schema.org/Eye';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FDAcategoryA
 */
export const FDAcategoryA: OtherIndividual = 'http://schema.org/FDAcategoryA';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FDAcategoryB
 */
export const FDAcategoryB: OtherIndividual = 'http://schema.org/FDAcategoryB';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FDAcategoryC
 */
export const FDAcategoryC: OtherIndividual = 'http://schema.org/FDAcategoryC';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FDAcategoryD
 */
export const FDAcategoryD: OtherIndividual = 'http://schema.org/FDAcategoryD';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FDAcategoryX
 */
export const FDAcategoryX: OtherIndividual = 'http://schema.org/FDAcategoryX';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FDAnotEvaluated
 */
export const FDAnotEvaluated: OtherIndividual = 'http://schema.org/FDAnotEvaluated';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FailedActionStatus
 */
export const FailedActionStatus: OtherIndividual = 'http://schema.org/FailedActionStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/False
 */
export const False: OtherIndividual = 'http://schema.org/False';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Female
 */
export const Female: OtherIndividual = 'http://schema.org/Female';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Flexibility
 */
export const Flexibility: OtherIndividual = 'http://schema.org/Flexibility';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FourWheelDriveConfiguration
 */
export const FourWheelDriveConfiguration: OtherIndividual = 'http://schema.org/FourWheelDriveConfiguration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FreeReturn
 */
export const FreeReturn: OtherIndividual = 'http://schema.org/FreeReturn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Friday
 */
export const Friday: OtherIndividual = 'http://schema.org/Friday';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FrontWheelDriveConfiguration
 */
export const FrontWheelDriveConfiguration: OtherIndividual = 'http://schema.org/FrontWheelDriveConfiguration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FulfillmentTypeCollectionPoint
 */
export const FulfillmentTypeCollectionPoint: OtherIndividual = 'http://schema.org/FulfillmentTypeCollectionPoint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FulfillmentTypeDelivery
 */
export const FulfillmentTypeDelivery: OtherIndividual = 'http://schema.org/FulfillmentTypeDelivery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FulfillmentTypePickupDropoff
 */
export const FulfillmentTypePickupDropoff: OtherIndividual = 'http://schema.org/FulfillmentTypePickupDropoff';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FulfillmentTypePickupInStore
 */
export const FulfillmentTypePickupInStore: OtherIndividual = 'http://schema.org/FulfillmentTypePickupInStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FulfillmentTypeScheduledDelivery
 */
export const FulfillmentTypeScheduledDelivery: OtherIndividual = 'http://schema.org/FulfillmentTypeScheduledDelivery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FullGameAvailability
 */
export const FullGameAvailability: OtherIndividual = 'http://schema.org/FullGameAvailability';

/**
 * 
 * 
 * 
 *
 * http://schema.org/FullRefund
 */
export const FullRefund: OtherIndividual = 'http://schema.org/FullRefund';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Fungus
 */
export const Fungus: OtherIndividual = 'http://schema.org/Fungus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Gastroenterologic
 */
export const Gastroenterologic: OtherIndividual = 'http://schema.org/Gastroenterologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GenericWebPlatform
 */
export const GenericWebPlatform: OtherIndividual = 'http://schema.org/GenericWebPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Genetic
 */
export const Genetic: OtherIndividual = 'http://schema.org/Genetic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Genitourinary
 */
export const Genitourinary: OtherIndividual = 'http://schema.org/Genitourinary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Geriatric
 */
export const Geriatric: OtherIndividual = 'http://schema.org/Geriatric';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GettingAccessHealthAspect
 */
export const GettingAccessHealthAspect: OtherIndividual = 'http://schema.org/GettingAccessHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GlutenFreeDiet
 */
export const GlutenFreeDiet: OtherIndividual = 'http://schema.org/GlutenFreeDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GraphicNovel
 */
export const GraphicNovel: OtherIndividual = 'http://schema.org/GraphicNovel';

/**
 * 
 * 
 * 
 *
 * http://schema.org/GroupBoardingPolicy
 */
export const GroupBoardingPolicy: OtherIndividual = 'http://schema.org/GroupBoardingPolicy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Gynecologic
 */
export const Gynecologic: OtherIndividual = 'http://schema.org/Gynecologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HalalDiet
 */
export const HalalDiet: OtherIndividual = 'http://schema.org/HalalDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Hardcover
 */
export const Hardcover: OtherIndividual = 'http://schema.org/Hardcover';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Head
 */
export const Head: OtherIndividual = 'http://schema.org/Head';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthCare
 */
export const HealthCare: OtherIndividual = 'http://schema.org/HealthCare';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HealthcareConsideration
 */
export const HealthcareConsideration: OtherIndividual = 'http://schema.org/HealthcareConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HearingImpairedSupported
 */
export const HearingImpairedSupported: OtherIndividual = 'http://schema.org/HearingImpairedSupported';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Hematologic
 */
export const Hematologic: OtherIndividual = 'http://schema.org/Hematologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HinduDiet
 */
export const HinduDiet: OtherIndividual = 'http://schema.org/HinduDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Homeopathic
 */
export const Homeopathic: OtherIndividual = 'http://schema.org/Homeopathic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowItWorksHealthAspect
 */
export const HowItWorksHealthAspect: OtherIndividual = 'http://schema.org/HowItWorksHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/HowOrWhereHealthAspect
 */
export const HowOrWhereHealthAspect: OtherIndividual = 'http://schema.org/HowOrWhereHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IOSPlatform
 */
export const IOSPlatform: OtherIndividual = 'http://schema.org/IOSPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITAssociativeNetworkCharity
 */
export const ITAssociativeNetworkCharity: OtherIndividual = 'http://schema.org/ITAssociativeNetworkCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITCooperativeCharity
 */
export const ITCooperativeCharity: OtherIndividual = 'http://schema.org/ITCooperativeCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITSocialCooperativeCharity
 */
export const ITSocialCooperativeCharity: OtherIndividual = 'http://schema.org/ITSocialCooperativeCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITMutualAidCharity
 */
export const ITMutualAidCharity: OtherIndividual = 'http://schema.org/ITMutualAidCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITOtherThirdSectorEntityCharity
 */
export const ITOtherThirdSectorEntityCharity: OtherIndividual = 'http://schema.org/ITOtherThirdSectorEntityCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITPhilanthropicEntityCharity
 */
export const ITPhilanthropicEntityCharity: OtherIndividual = 'http://schema.org/ITPhilanthropicEntityCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITSocialCompanyCharity
 */
export const ITSocialCompanyCharity: OtherIndividual = 'http://schema.org/ITSocialCompanyCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITSocialEnterpriseCharity
 */
export const ITSocialEnterpriseCharity: OtherIndividual = 'http://schema.org/ITSocialEnterpriseCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITSocialPromotionCharity
 */
export const ITSocialPromotionCharity: OtherIndividual = 'http://schema.org/ITSocialPromotionCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITSportCompanyCharity
 */
export const ITSportCompanyCharity: OtherIndividual = 'http://schema.org/ITSportCompanyCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITAmateurSportsClubCharity
 */
export const ITAmateurSportsClubCharity: OtherIndividual = 'http://schema.org/ITAmateurSportsClubCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ITVolunteerAssociationCharity
 */
export const ITVolunteerAssociationCharity: OtherIndividual = 'http://schema.org/ITVolunteerAssociationCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InForce
 */
export const InForce: OtherIndividual = 'http://schema.org/InForce';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InStock
 */
export const InStock: OtherIndividual = 'http://schema.org/InStock';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InStoreOnly
 */
export const InStoreOnly: OtherIndividual = 'http://schema.org/InStoreOnly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InStorePrepay
 */
export const InStorePrepay: OtherIndividual = 'http://schema.org/InStorePrepay';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveQualifiedExpenseTypeGoodsOnly
 */
export const IncentiveQualifiedExpenseTypeGoodsOnly: OtherIndividual = 'http://schema.org/IncentiveQualifiedExpenseTypeGoodsOnly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveQualifiedExpenseTypeGoodsOrServices
 */
export const IncentiveQualifiedExpenseTypeGoodsOrServices: OtherIndividual = 'http://schema.org/IncentiveQualifiedExpenseTypeGoodsOrServices';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveQualifiedExpenseTypeServicesOnly
 */
export const IncentiveQualifiedExpenseTypeServicesOnly: OtherIndividual = 'http://schema.org/IncentiveQualifiedExpenseTypeServicesOnly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveQualifiedExpenseTypeUtilityBill
 */
export const IncentiveQualifiedExpenseTypeUtilityBill: OtherIndividual = 'http://schema.org/IncentiveQualifiedExpenseTypeUtilityBill';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveStatusActive
 */
export const IncentiveStatusActive: OtherIndividual = 'http://schema.org/IncentiveStatusActive';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveStatusInDevelopment
 */
export const IncentiveStatusInDevelopment: OtherIndividual = 'http://schema.org/IncentiveStatusInDevelopment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveStatusOnHold
 */
export const IncentiveStatusOnHold: OtherIndividual = 'http://schema.org/IncentiveStatusOnHold';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveStatusRetired
 */
export const IncentiveStatusRetired: OtherIndividual = 'http://schema.org/IncentiveStatusRetired';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveTypeLoan
 */
export const IncentiveTypeLoan: OtherIndividual = 'http://schema.org/IncentiveTypeLoan';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveTypeRebateOrSubsidy
 */
export const IncentiveTypeRebateOrSubsidy: OtherIndividual = 'http://schema.org/IncentiveTypeRebateOrSubsidy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveTypeTaxCredit
 */
export const IncentiveTypeTaxCredit: OtherIndividual = 'http://schema.org/IncentiveTypeTaxCredit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveTypeTaxDeduction
 */
export const IncentiveTypeTaxDeduction: OtherIndividual = 'http://schema.org/IncentiveTypeTaxDeduction';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IncentiveTypeTaxWaiver
 */
export const IncentiveTypeTaxWaiver: OtherIndividual = 'http://schema.org/IncentiveTypeTaxWaiver';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Infectious
 */
export const Infectious: OtherIndividual = 'http://schema.org/Infectious';

/**
 * 
 * 
 * 
 *
 * http://schema.org/IngredientsHealthAspect
 */
export const IngredientsHealthAspect: OtherIndividual = 'http://schema.org/IngredientsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Installment
 */
export const Installment: OtherIndividual = 'http://schema.org/Installment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InternationalTrial
 */
export const InternationalTrial: OtherIndividual = 'http://schema.org/InternationalTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/InvoicePrice
 */
export const InvoicePrice: OtherIndividual = 'http://schema.org/InvoicePrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ItemListOrderAscending
 */
export const ItemListOrderAscending: OtherIndividual = 'http://schema.org/ItemListOrderAscending';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ItemListOrderDescending
 */
export const ItemListOrderDescending: OtherIndividual = 'http://schema.org/ItemListOrderDescending';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ItemListUnordered
 */
export const ItemListUnordered: OtherIndividual = 'http://schema.org/ItemListUnordered';

/**
 * 
 * 
 * 
 *
 * http://schema.org/KeepProduct
 */
export const KeepProduct: OtherIndividual = 'http://schema.org/KeepProduct';

/**
 * 
 * 
 * 
 *
 * http://schema.org/KosherDiet
 */
export const KosherDiet: OtherIndividual = 'http://schema.org/KosherDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LaboratoryScience
 */
export const LaboratoryScience: OtherIndividual = 'http://schema.org/LaboratoryScience';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LaserDiscFormat
 */
export const LaserDiscFormat: OtherIndividual = 'http://schema.org/LaserDiscFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LeftHandDriving
 */
export const LeftHandDriving: OtherIndividual = 'http://schema.org/LeftHandDriving';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LeisureTimeActivity
 */
export const LeisureTimeActivity: OtherIndividual = 'http://schema.org/LeisureTimeActivity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LimitedAvailability
 */
export const LimitedAvailability: OtherIndividual = 'http://schema.org/LimitedAvailability';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LimitedByGuaranteeCharity
 */
export const LimitedByGuaranteeCharity: OtherIndividual = 'http://schema.org/LimitedByGuaranteeCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ListPrice
 */
export const ListPrice: OtherIndividual = 'http://schema.org/ListPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LiveAlbum
 */
export const LiveAlbum: OtherIndividual = 'http://schema.org/LiveAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LivingWithHealthAspect
 */
export const LivingWithHealthAspect: OtherIndividual = 'http://schema.org/LivingWithHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LockerDelivery
 */
export const LockerDelivery: OtherIndividual = 'http://schema.org/LockerDelivery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Longitudinal
 */
export const Longitudinal: OtherIndividual = 'http://schema.org/Longitudinal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LowCalorieDiet
 */
export const LowCalorieDiet: OtherIndividual = 'http://schema.org/LowCalorieDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LowFatDiet
 */
export const LowFatDiet: OtherIndividual = 'http://schema.org/LowFatDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LowLactoseDiet
 */
export const LowLactoseDiet: OtherIndividual = 'http://schema.org/LowLactoseDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/LowSaltDiet
 */
export const LowSaltDiet: OtherIndividual = 'http://schema.org/LowSaltDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Lung
 */
export const Lung: OtherIndividual = 'http://schema.org/Lung';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MRI
 */
export const MRI: OtherIndividual = 'http://schema.org/MRI';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MSRP
 */
export const MSRP: OtherIndividual = 'http://schema.org/MSRP';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MadeToOrder
 */
export const MadeToOrder: OtherIndividual = 'http://schema.org/MadeToOrder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Male
 */
export const Male: OtherIndividual = 'http://schema.org/Male';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MaximumRetailPrice
 */
export const MaximumRetailPrice: OtherIndividual = 'http://schema.org/MaximumRetailPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MayTreatHealthAspect
 */
export const MayTreatHealthAspect: OtherIndividual = 'http://schema.org/MayTreatHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MedicalResearcher
 */
export const MedicalResearcher: OtherIndividual = 'http://schema.org/MedicalResearcher';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Midwifery
 */
export const Midwifery: OtherIndividual = 'http://schema.org/Midwifery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MinimumAdvertisedPrice
 */
export const MinimumAdvertisedPrice: OtherIndividual = 'http://schema.org/MinimumAdvertisedPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MinorHumanEditsDigitalSource
 */
export const MinorHumanEditsDigitalSource: OtherIndividual = 'http://schema.org/MinorHumanEditsDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MisconceptionsHealthAspect
 */
export const MisconceptionsHealthAspect: OtherIndividual = 'http://schema.org/MisconceptionsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MixedEventAttendanceMode
 */
export const MixedEventAttendanceMode: OtherIndividual = 'http://schema.org/MixedEventAttendanceMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MixtapeAlbum
 */
export const MixtapeAlbum: OtherIndividual = 'http://schema.org/MixtapeAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MobileWebPlatform
 */
export const MobileWebPlatform: OtherIndividual = 'http://schema.org/MobileWebPlatform';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Monday
 */
export const Monday: OtherIndividual = 'http://schema.org/Monday';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MultiCenterTrial
 */
export const MultiCenterTrial: OtherIndividual = 'http://schema.org/MultiCenterTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MultiFrameComputationalCaptureDigitalSource
 */
export const MultiFrameComputationalCaptureDigitalSource: OtherIndividual = 'http://schema.org/MultiFrameComputationalCaptureDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MultiPlayer
 */
export const MultiPlayer: OtherIndividual = 'http://schema.org/MultiPlayer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MulticellularParasite
 */
export const MulticellularParasite: OtherIndividual = 'http://schema.org/MulticellularParasite';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Musculoskeletal
 */
export const Musculoskeletal: OtherIndividual = 'http://schema.org/Musculoskeletal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MusculoskeletalExam
 */
export const MusculoskeletalExam: OtherIndividual = 'http://schema.org/MusculoskeletalExam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NarcoticConsideration
 */
export const NarcoticConsideration: OtherIndividual = 'http://schema.org/NarcoticConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Neck
 */
export const Neck: OtherIndividual = 'http://schema.org/Neck';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NegativeFilmDigitalSource
 */
export const NegativeFilmDigitalSource: OtherIndividual = 'http://schema.org/NegativeFilmDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Neuro
 */
export const Neuro: OtherIndividual = 'http://schema.org/Neuro';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Neurologic
 */
export const Neurologic: OtherIndividual = 'http://schema.org/Neurologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NewCondition
 */
export const NewCondition: OtherIndividual = 'http://schema.org/NewCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NoninvasiveProcedure
 */
export const NoninvasiveProcedure: OtherIndividual = 'http://schema.org/NoninvasiveProcedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501a
 */
export const Nonprofit501a: OtherIndividual = 'http://schema.org/Nonprofit501a';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c1
 */
export const Nonprofit501c1: OtherIndividual = 'http://schema.org/Nonprofit501c1';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c10
 */
export const Nonprofit501c10: OtherIndividual = 'http://schema.org/Nonprofit501c10';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c11
 */
export const Nonprofit501c11: OtherIndividual = 'http://schema.org/Nonprofit501c11';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c12
 */
export const Nonprofit501c12: OtherIndividual = 'http://schema.org/Nonprofit501c12';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c13
 */
export const Nonprofit501c13: OtherIndividual = 'http://schema.org/Nonprofit501c13';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c14
 */
export const Nonprofit501c14: OtherIndividual = 'http://schema.org/Nonprofit501c14';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c15
 */
export const Nonprofit501c15: OtherIndividual = 'http://schema.org/Nonprofit501c15';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c16
 */
export const Nonprofit501c16: OtherIndividual = 'http://schema.org/Nonprofit501c16';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c17
 */
export const Nonprofit501c17: OtherIndividual = 'http://schema.org/Nonprofit501c17';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c18
 */
export const Nonprofit501c18: OtherIndividual = 'http://schema.org/Nonprofit501c18';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c19
 */
export const Nonprofit501c19: OtherIndividual = 'http://schema.org/Nonprofit501c19';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c2
 */
export const Nonprofit501c2: OtherIndividual = 'http://schema.org/Nonprofit501c2';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c20
 */
export const Nonprofit501c20: OtherIndividual = 'http://schema.org/Nonprofit501c20';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c21
 */
export const Nonprofit501c21: OtherIndividual = 'http://schema.org/Nonprofit501c21';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c22
 */
export const Nonprofit501c22: OtherIndividual = 'http://schema.org/Nonprofit501c22';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c23
 */
export const Nonprofit501c23: OtherIndividual = 'http://schema.org/Nonprofit501c23';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c24
 */
export const Nonprofit501c24: OtherIndividual = 'http://schema.org/Nonprofit501c24';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c25
 */
export const Nonprofit501c25: OtherIndividual = 'http://schema.org/Nonprofit501c25';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c26
 */
export const Nonprofit501c26: OtherIndividual = 'http://schema.org/Nonprofit501c26';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c27
 */
export const Nonprofit501c27: OtherIndividual = 'http://schema.org/Nonprofit501c27';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c28
 */
export const Nonprofit501c28: OtherIndividual = 'http://schema.org/Nonprofit501c28';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c3
 */
export const Nonprofit501c3: OtherIndividual = 'http://schema.org/Nonprofit501c3';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c4
 */
export const Nonprofit501c4: OtherIndividual = 'http://schema.org/Nonprofit501c4';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c5
 */
export const Nonprofit501c5: OtherIndividual = 'http://schema.org/Nonprofit501c5';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c6
 */
export const Nonprofit501c6: OtherIndividual = 'http://schema.org/Nonprofit501c6';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c7
 */
export const Nonprofit501c7: OtherIndividual = 'http://schema.org/Nonprofit501c7';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c8
 */
export const Nonprofit501c8: OtherIndividual = 'http://schema.org/Nonprofit501c8';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501c9
 */
export const Nonprofit501c9: OtherIndividual = 'http://schema.org/Nonprofit501c9';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501d
 */
export const Nonprofit501d: OtherIndividual = 'http://schema.org/Nonprofit501d';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501e
 */
export const Nonprofit501e: OtherIndividual = 'http://schema.org/Nonprofit501e';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501f
 */
export const Nonprofit501f: OtherIndividual = 'http://schema.org/Nonprofit501f';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501k
 */
export const Nonprofit501k: OtherIndividual = 'http://schema.org/Nonprofit501k';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501n
 */
export const Nonprofit501n: OtherIndividual = 'http://schema.org/Nonprofit501n';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit501q
 */
export const Nonprofit501q: OtherIndividual = 'http://schema.org/Nonprofit501q';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nonprofit527
 */
export const Nonprofit527: OtherIndividual = 'http://schema.org/Nonprofit527';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NonprofitANBI
 */
export const NonprofitANBI: OtherIndividual = 'http://schema.org/NonprofitANBI';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NonprofitSBBI
 */
export const NonprofitSBBI: OtherIndividual = 'http://schema.org/NonprofitSBBI';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nose
 */
export const Nose: OtherIndividual = 'http://schema.org/Nose';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NotInForce
 */
export const NotInForce: OtherIndividual = 'http://schema.org/NotInForce';

/**
 * 
 * 
 * 
 *
 * http://schema.org/NotYetRecruiting
 */
export const NotYetRecruiting: OtherIndividual = 'http://schema.org/NotYetRecruiting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Nursing
 */
export const Nursing: OtherIndividual = 'http://schema.org/Nursing';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OTC
 */
export const OTC: OtherIndividual = 'http://schema.org/OTC';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Observational
 */
export const Observational: OtherIndividual = 'http://schema.org/Observational';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Obstetric
 */
export const Obstetric: OtherIndividual = 'http://schema.org/Obstetric';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OccupationalActivity
 */
export const OccupationalActivity: OtherIndividual = 'http://schema.org/OccupationalActivity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfficialLegalValue
 */
export const OfficialLegalValue: OtherIndividual = 'http://schema.org/OfficialLegalValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfflineEventAttendanceMode
 */
export const OfflineEventAttendanceMode: OtherIndividual = 'http://schema.org/OfflineEventAttendanceMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfflinePermanently
 */
export const OfflinePermanently: OtherIndividual = 'http://schema.org/OfflinePermanently';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OfflineTemporarily
 */
export const OfflineTemporarily: OtherIndividual = 'http://schema.org/OfflineTemporarily';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnSitePickup
 */
export const OnSitePickup: OtherIndividual = 'http://schema.org/OnSitePickup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Oncologic
 */
export const Oncologic: OtherIndividual = 'http://schema.org/Oncologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OneTimePayments
 */
export const OneTimePayments: OtherIndividual = 'http://schema.org/OneTimePayments';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Online
 */
export const Online: OtherIndividual = 'http://schema.org/Online';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnlineEventAttendanceMode
 */
export const OnlineEventAttendanceMode: OtherIndividual = 'http://schema.org/OnlineEventAttendanceMode';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnlineFull
 */
export const OnlineFull: OtherIndividual = 'http://schema.org/OnlineFull';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OnlineOnly
 */
export const OnlineOnly: OtherIndividual = 'http://schema.org/OnlineOnly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OpenTrial
 */
export const OpenTrial: OtherIndividual = 'http://schema.org/OpenTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Ophthalmology
 */
export const Ophthalmology: OtherIndividual = 'http://schema.org/Ophthalmology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Optometric
 */
export const Optometric: OtherIndividual = 'http://schema.org/Optometric';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderCancelled
 */
export const OrderCancelled: OtherIndividual = 'http://schema.org/OrderCancelled';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderDelivered
 */
export const OrderDelivered: OtherIndividual = 'http://schema.org/OrderDelivered';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderInTransit
 */
export const OrderInTransit: OtherIndividual = 'http://schema.org/OrderInTransit';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderPaymentDue
 */
export const OrderPaymentDue: OtherIndividual = 'http://schema.org/OrderPaymentDue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderPickupAvailable
 */
export const OrderPickupAvailable: OtherIndividual = 'http://schema.org/OrderPickupAvailable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderProblem
 */
export const OrderProblem: OtherIndividual = 'http://schema.org/OrderProblem';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderProcessing
 */
export const OrderProcessing: OtherIndividual = 'http://schema.org/OrderProcessing';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OrderReturned
 */
export const OrderReturned: OtherIndividual = 'http://schema.org/OrderReturned';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OriginalMediaContent
 */
export const OriginalMediaContent: OtherIndividual = 'http://schema.org/OriginalMediaContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OriginalShippingFees
 */
export const OriginalShippingFees: OtherIndividual = 'http://schema.org/OriginalShippingFees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Osteopathic
 */
export const Osteopathic: OtherIndividual = 'http://schema.org/Osteopathic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Otolaryngologic
 */
export const Otolaryngologic: OtherIndividual = 'http://schema.org/Otolaryngologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OutOfStock
 */
export const OutOfStock: OtherIndividual = 'http://schema.org/OutOfStock';

/**
 * 
 * 
 * 
 *
 * http://schema.org/OverviewHealthAspect
 */
export const OverviewHealthAspect: OtherIndividual = 'http://schema.org/OverviewHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PET
 */
export const PET: OtherIndividual = 'http://schema.org/PET';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaidLeave
 */
export const PaidLeave: OtherIndividual = 'http://schema.org/PaidLeave';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Pamphlet
 */
export const Pamphlet: OtherIndividual = 'http://schema.org/Pamphlet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Paperback
 */
export const Paperback: OtherIndividual = 'http://schema.org/Paperback';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ParcelService
 */
export const ParcelService: OtherIndividual = 'http://schema.org/ParcelService';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ParentalSupport
 */
export const ParentalSupport: OtherIndividual = 'http://schema.org/ParentalSupport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ParkingMap
 */
export const ParkingMap: OtherIndividual = 'http://schema.org/ParkingMap';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PartiallyInForce
 */
export const PartiallyInForce: OtherIndividual = 'http://schema.org/PartiallyInForce';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Pathology
 */
export const Pathology: OtherIndividual = 'http://schema.org/Pathology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PatientExperienceHealthAspect
 */
export const PatientExperienceHealthAspect: OtherIndividual = 'http://schema.org/PatientExperienceHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentAutomaticallyApplied
 */
export const PaymentAutomaticallyApplied: OtherIndividual = 'http://schema.org/PaymentAutomaticallyApplied';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentComplete
 */
export const PaymentComplete: OtherIndividual = 'http://schema.org/PaymentComplete';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentDeclined
 */
export const PaymentDeclined: OtherIndividual = 'http://schema.org/PaymentDeclined';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentDue
 */
export const PaymentDue: OtherIndividual = 'http://schema.org/PaymentDue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PaymentPastDue
 */
export const PaymentPastDue: OtherIndividual = 'http://schema.org/PaymentPastDue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Pediatric
 */
export const Pediatric: OtherIndividual = 'http://schema.org/Pediatric';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PercutaneousProcedure
 */
export const PercutaneousProcedure: OtherIndividual = 'http://schema.org/PercutaneousProcedure';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PharmacySpecialty
 */
export const PharmacySpecialty: OtherIndividual = 'http://schema.org/PharmacySpecialty';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PhoneCarrierPayment
 */
export const PhoneCarrierPayment: OtherIndividual = 'http://schema.org/PhoneCarrierPayment';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Physiotherapy
 */
export const Physiotherapy: OtherIndividual = 'http://schema.org/Physiotherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PlaceboControlledTrial
 */
export const PlaceboControlledTrial: OtherIndividual = 'http://schema.org/PlaceboControlledTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PlasticSurgery
 */
export const PlasticSurgery: OtherIndividual = 'http://schema.org/PlasticSurgery';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Podiatric
 */
export const Podiatric: OtherIndividual = 'http://schema.org/Podiatric';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PositiveFilmDigitalSource
 */
export const PositiveFilmDigitalSource: OtherIndividual = 'http://schema.org/PositiveFilmDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PotentialActionStatus
 */
export const PotentialActionStatus: OtherIndividual = 'http://schema.org/PotentialActionStatus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PreOrder
 */
export const PreOrder: OtherIndividual = 'http://schema.org/PreOrder';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PreSale
 */
export const PreSale: OtherIndividual = 'http://schema.org/PreSale';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PregnancyHealthAspect
 */
export const PregnancyHealthAspect: OtherIndividual = 'http://schema.org/PregnancyHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PrescriptionOnly
 */
export const PrescriptionOnly: OtherIndividual = 'http://schema.org/PrescriptionOnly';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PreventionHealthAspect
 */
export const PreventionHealthAspect: OtherIndividual = 'http://schema.org/PreventionHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PrimaryCare
 */
export const PrimaryCare: OtherIndividual = 'http://schema.org/PrimaryCare';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PrintDigitalSource
 */
export const PrintDigitalSource: OtherIndividual = 'http://schema.org/PrintDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Prion
 */
export const Prion: OtherIndividual = 'http://schema.org/Prion';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductReturnFiniteReturnWindow
 */
export const ProductReturnFiniteReturnWindow: OtherIndividual = 'http://schema.org/ProductReturnFiniteReturnWindow';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MerchantReturnFiniteReturnWindow
 */
export const MerchantReturnFiniteReturnWindow: OtherIndividual = 'http://schema.org/MerchantReturnFiniteReturnWindow';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductReturnNotPermitted
 */
export const ProductReturnNotPermitted: OtherIndividual = 'http://schema.org/ProductReturnNotPermitted';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MerchantReturnNotPermitted
 */
export const MerchantReturnNotPermitted: OtherIndividual = 'http://schema.org/MerchantReturnNotPermitted';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductReturnUnlimitedWindow
 */
export const ProductReturnUnlimitedWindow: OtherIndividual = 'http://schema.org/ProductReturnUnlimitedWindow';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MerchantReturnUnlimitedWindow
 */
export const MerchantReturnUnlimitedWindow: OtherIndividual = 'http://schema.org/MerchantReturnUnlimitedWindow';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ProductReturnUnspecified
 */
export const ProductReturnUnspecified: OtherIndividual = 'http://schema.org/ProductReturnUnspecified';

/**
 * 
 * 
 * 
 *
 * http://schema.org/MerchantReturnUnspecified
 */
export const MerchantReturnUnspecified: OtherIndividual = 'http://schema.org/MerchantReturnUnspecified';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PrognosisHealthAspect
 */
export const PrognosisHealthAspect: OtherIndividual = 'http://schema.org/PrognosisHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Protozoa
 */
export const Protozoa: OtherIndividual = 'http://schema.org/Protozoa';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Psychiatric
 */
export const Psychiatric: OtherIndividual = 'http://schema.org/Psychiatric';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PublicHealth
 */
export const PublicHealth: OtherIndividual = 'http://schema.org/PublicHealth';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PublicHolidays
 */
export const PublicHolidays: OtherIndividual = 'http://schema.org/PublicHolidays';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Pulmonary
 */
export const Pulmonary: OtherIndividual = 'http://schema.org/Pulmonary';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PurchaseTypeLease
 */
export const PurchaseTypeLease: OtherIndividual = 'http://schema.org/PurchaseTypeLease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PurchaseTypeNewPurchase
 */
export const PurchaseTypeNewPurchase: OtherIndividual = 'http://schema.org/PurchaseTypeNewPurchase';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PurchaseTypeTradeIn
 */
export const PurchaseTypeTradeIn: OtherIndividual = 'http://schema.org/PurchaseTypeTradeIn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/PurchaseTypeUsedPurchase
 */
export const PurchaseTypeUsedPurchase: OtherIndividual = 'http://schema.org/PurchaseTypeUsedPurchase';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Radiography
 */
export const Radiography: OtherIndividual = 'http://schema.org/Radiography';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RandomizedTrial
 */
export const RandomizedTrial: OtherIndividual = 'http://schema.org/RandomizedTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReadPermission
 */
export const ReadPermission: OtherIndividual = 'http://schema.org/ReadPermission';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RearWheelDriveConfiguration
 */
export const RearWheelDriveConfiguration: OtherIndividual = 'http://schema.org/RearWheelDriveConfiguration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Recruiting
 */
export const Recruiting: OtherIndividual = 'http://schema.org/Recruiting';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReducedRelevanceForChildrenConsideration
 */
export const ReducedRelevanceForChildrenConsideration: OtherIndividual = 'http://schema.org/ReducedRelevanceForChildrenConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RefurbishedCondition
 */
export const RefurbishedCondition: OtherIndividual = 'http://schema.org/RefurbishedCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Registry
 */
export const Registry: OtherIndividual = 'http://schema.org/Registry';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RegularPrice
 */
export const RegularPrice: OtherIndividual = 'http://schema.org/RegularPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReimbursementCap
 */
export const ReimbursementCap: OtherIndividual = 'http://schema.org/ReimbursementCap';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RelatedTopicsHealthAspect
 */
export const RelatedTopicsHealthAspect: OtherIndividual = 'http://schema.org/RelatedTopicsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RemixAlbum
 */
export const RemixAlbum: OtherIndividual = 'http://schema.org/RemixAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Renal
 */
export const Renal: OtherIndividual = 'http://schema.org/Renal';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RentalVehicleUsage
 */
export const RentalVehicleUsage: OtherIndividual = 'http://schema.org/RentalVehicleUsage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReservationCancelled
 */
export const ReservationCancelled: OtherIndividual = 'http://schema.org/ReservationCancelled';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReservationConfirmed
 */
export const ReservationConfirmed: OtherIndividual = 'http://schema.org/ReservationConfirmed';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReservationHold
 */
export const ReservationHold: OtherIndividual = 'http://schema.org/ReservationHold';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReservationPending
 */
export const ReservationPending: OtherIndividual = 'http://schema.org/ReservationPending';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Reserved
 */
export const Reserved: OtherIndividual = 'http://schema.org/Reserved';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RespiratoryTherapy
 */
export const RespiratoryTherapy: OtherIndividual = 'http://schema.org/RespiratoryTherapy';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RestockingFees
 */
export const RestockingFees: OtherIndividual = 'http://schema.org/RestockingFees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ResultsAvailable
 */
export const ResultsAvailable: OtherIndividual = 'http://schema.org/ResultsAvailable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ResultsNotAvailable
 */
export const ResultsNotAvailable: OtherIndividual = 'http://schema.org/ResultsNotAvailable';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Retail
 */
export const Retail: OtherIndividual = 'http://schema.org/Retail';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnAtKiosk
 */
export const ReturnAtKiosk: OtherIndividual = 'http://schema.org/ReturnAtKiosk';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnByMail
 */
export const ReturnByMail: OtherIndividual = 'http://schema.org/ReturnByMail';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnFeesCustomerResponsibility
 */
export const ReturnFeesCustomerResponsibility: OtherIndividual = 'http://schema.org/ReturnFeesCustomerResponsibility';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnInStore
 */
export const ReturnInStore: OtherIndividual = 'http://schema.org/ReturnInStore';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnLabelCustomerResponsibility
 */
export const ReturnLabelCustomerResponsibility: OtherIndividual = 'http://schema.org/ReturnLabelCustomerResponsibility';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnLabelDownloadAndPrint
 */
export const ReturnLabelDownloadAndPrint: OtherIndividual = 'http://schema.org/ReturnLabelDownloadAndPrint';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnLabelInBox
 */
export const ReturnLabelInBox: OtherIndividual = 'http://schema.org/ReturnLabelInBox';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ReturnShippingFees
 */
export const ReturnShippingFees: OtherIndividual = 'http://schema.org/ReturnShippingFees';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Rheumatologic
 */
export const Rheumatologic: OtherIndividual = 'http://schema.org/Rheumatologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RightHandDriving
 */
export const RightHandDriving: OtherIndividual = 'http://schema.org/RightHandDriving';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RisksOrComplicationsHealthAspect
 */
export const RisksOrComplicationsHealthAspect: OtherIndividual = 'http://schema.org/RisksOrComplicationsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RsvpResponseMaybe
 */
export const RsvpResponseMaybe: OtherIndividual = 'http://schema.org/RsvpResponseMaybe';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RsvpResponseNo
 */
export const RsvpResponseNo: OtherIndividual = 'http://schema.org/RsvpResponseNo';

/**
 * 
 * 
 * 
 *
 * http://schema.org/RsvpResponseYes
 */
export const RsvpResponseYes: OtherIndividual = 'http://schema.org/RsvpResponseYes';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SRP
 */
export const SRP: OtherIndividual = 'http://schema.org/SRP';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SafetyHealthAspect
 */
export const SafetyHealthAspect: OtherIndividual = 'http://schema.org/SafetyHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SalePrice
 */
export const SalePrice: OtherIndividual = 'http://schema.org/SalePrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SatireOrParodyContent
 */
export const SatireOrParodyContent: OtherIndividual = 'http://schema.org/SatireOrParodyContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Saturday
 */
export const Saturday: OtherIndividual = 'http://schema.org/Saturday';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ScreenCaptureDigitalSource
 */
export const ScreenCaptureDigitalSource: OtherIndividual = 'http://schema.org/ScreenCaptureDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ScreeningHealthAspect
 */
export const ScreeningHealthAspect: OtherIndividual = 'http://schema.org/ScreeningHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SeatingMap
 */
export const SeatingMap: OtherIndividual = 'http://schema.org/SeatingMap';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SeeDoctorHealthAspect
 */
export const SeeDoctorHealthAspect: OtherIndividual = 'http://schema.org/SeeDoctorHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SelfCareHealthAspect
 */
export const SelfCareHealthAspect: OtherIndividual = 'http://schema.org/SelfCareHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SexualContentConsideration
 */
export const SexualContentConsideration: OtherIndividual = 'http://schema.org/SexualContentConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SideEffectsHealthAspect
 */
export const SideEffectsHealthAspect: OtherIndividual = 'http://schema.org/SideEffectsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SingleBlindedTrial
 */
export const SingleBlindedTrial: OtherIndividual = 'http://schema.org/SingleBlindedTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SingleCenterTrial
 */
export const SingleCenterTrial: OtherIndividual = 'http://schema.org/SingleCenterTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SinglePlayer
 */
export const SinglePlayer: OtherIndividual = 'http://schema.org/SinglePlayer';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SingleRelease
 */
export const SingleRelease: OtherIndividual = 'http://schema.org/SingleRelease';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SizeSystemImperial
 */
export const SizeSystemImperial: OtherIndividual = 'http://schema.org/SizeSystemImperial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SizeSystemMetric
 */
export const SizeSystemMetric: OtherIndividual = 'http://schema.org/SizeSystemMetric';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Skin
 */
export const Skin: OtherIndividual = 'http://schema.org/Skin';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SoldOut
 */
export const SoldOut: OtherIndividual = 'http://schema.org/SoldOut';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SoundtrackAlbum
 */
export const SoundtrackAlbum: OtherIndividual = 'http://schema.org/SoundtrackAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SpeechPathology
 */
export const SpeechPathology: OtherIndividual = 'http://schema.org/SpeechPathology';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SpokenWordAlbum
 */
export const SpokenWordAlbum: OtherIndividual = 'http://schema.org/SpokenWordAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StagedContent
 */
export const StagedContent: OtherIndividual = 'http://schema.org/StagedContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StagesHealthAspect
 */
export const StagesHealthAspect: OtherIndividual = 'http://schema.org/StagesHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StoreCreditRefund
 */
export const StoreCreditRefund: OtherIndividual = 'http://schema.org/StoreCreditRefund';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StrengthTraining
 */
export const StrengthTraining: OtherIndividual = 'http://schema.org/StrengthTraining';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StrikethroughPrice
 */
export const StrikethroughPrice: OtherIndividual = 'http://schema.org/StrikethroughPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/StudioAlbum
 */
export const StudioAlbum: OtherIndividual = 'http://schema.org/StudioAlbum';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Subscription
 */
export const Subscription: OtherIndividual = 'http://schema.org/Subscription';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Sunday
 */
export const Sunday: OtherIndividual = 'http://schema.org/Sunday';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Surgical
 */
export const Surgical: OtherIndividual = 'http://schema.org/Surgical';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Suspended
 */
export const Suspended: OtherIndividual = 'http://schema.org/Suspended';

/**
 * 
 * 
 * 
 *
 * http://schema.org/SymptomsHealthAspect
 */
export const SymptomsHealthAspect: OtherIndividual = 'http://schema.org/SymptomsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TaxiVehicleUsage
 */
export const TaxiVehicleUsage: OtherIndividual = 'http://schema.org/TaxiVehicleUsage';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Terminated
 */
export const Terminated: OtherIndividual = 'http://schema.org/Terminated';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Therapeutic
 */
export const Therapeutic: OtherIndividual = 'http://schema.org/Therapeutic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Throat
 */
export const Throat: OtherIndividual = 'http://schema.org/Throat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Thursday
 */
export const Thursday: OtherIndividual = 'http://schema.org/Thursday';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TierBenefitLoyaltyPoints
 */
export const TierBenefitLoyaltyPoints: OtherIndividual = 'http://schema.org/TierBenefitLoyaltyPoints';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TierBenefitLoyaltyPrice
 */
export const TierBenefitLoyaltyPrice: OtherIndividual = 'http://schema.org/TierBenefitLoyaltyPrice';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TierBenefitLoyaltyReturns
 */
export const TierBenefitLoyaltyReturns: OtherIndividual = 'http://schema.org/TierBenefitLoyaltyReturns';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TierBenefitLoyaltyShipping
 */
export const TierBenefitLoyaltyShipping: OtherIndividual = 'http://schema.org/TierBenefitLoyaltyShipping';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TobaccoNicotineConsideration
 */
export const TobaccoNicotineConsideration: OtherIndividual = 'http://schema.org/TobaccoNicotineConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TollFree
 */
export const TollFree: OtherIndividual = 'http://schema.org/TollFree';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Toxicologic
 */
export const Toxicologic: OtherIndividual = 'http://schema.org/Toxicologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TraditionalChinese
 */
export const TraditionalChinese: OtherIndividual = 'http://schema.org/TraditionalChinese';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TrainedAlgorithmicMediaDigitalSource
 */
export const TrainedAlgorithmicMediaDigitalSource: OtherIndividual = 'http://schema.org/TrainedAlgorithmicMediaDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TransformedContent
 */
export const TransformedContent: OtherIndividual = 'http://schema.org/TransformedContent';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TransitMap
 */
export const TransitMap: OtherIndividual = 'http://schema.org/TransitMap';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TreatmentsHealthAspect
 */
export const TreatmentsHealthAspect: OtherIndividual = 'http://schema.org/TreatmentsHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TripleBlindedTrial
 */
export const TripleBlindedTrial: OtherIndividual = 'http://schema.org/TripleBlindedTrial';

/**
 * 
 * 
 * 
 *
 * http://schema.org/True
 */
export const True: OtherIndividual = 'http://schema.org/True';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Tuesday
 */
export const Tuesday: OtherIndividual = 'http://schema.org/Tuesday';

/**
 * 
 * 
 * 
 *
 * http://schema.org/TypesHealthAspect
 */
export const TypesHealthAspect: OtherIndividual = 'http://schema.org/TypesHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UKTrust
 */
export const UKTrust: OtherIndividual = 'http://schema.org/UKTrust';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Ultrasound
 */
export const Ultrasound: OtherIndividual = 'http://schema.org/Ultrasound';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UnclassifiedAdultConsideration
 */
export const UnclassifiedAdultConsideration: OtherIndividual = 'http://schema.org/UnclassifiedAdultConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UnemploymentSupport
 */
export const UnemploymentSupport: OtherIndividual = 'http://schema.org/UnemploymentSupport';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UnincorporatedAssociationCharity
 */
export const UnincorporatedAssociationCharity: OtherIndividual = 'http://schema.org/UnincorporatedAssociationCharity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UnofficialLegalValue
 */
export const UnofficialLegalValue: OtherIndividual = 'http://schema.org/UnofficialLegalValue';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Urologic
 */
export const Urologic: OtherIndividual = 'http://schema.org/Urologic';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UsageOrScheduleHealthAspect
 */
export const UsageOrScheduleHealthAspect: OtherIndividual = 'http://schema.org/UsageOrScheduleHealthAspect';

/**
 * 
 * 
 * 
 *
 * http://schema.org/UsedCondition
 */
export const UsedCondition: OtherIndividual = 'http://schema.org/UsedCondition';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VeganDiet
 */
export const VeganDiet: OtherIndividual = 'http://schema.org/VeganDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VegetarianDiet
 */
export const VegetarianDiet: OtherIndividual = 'http://schema.org/VegetarianDiet';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VenueMap
 */
export const VenueMap: OtherIndividual = 'http://schema.org/VenueMap';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VinylFormat
 */
export const VinylFormat: OtherIndividual = 'http://schema.org/VinylFormat';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ViolenceConsideration
 */
export const ViolenceConsideration: OtherIndividual = 'http://schema.org/ViolenceConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/VirtualRecordingDigitalSource
 */
export const VirtualRecordingDigitalSource: OtherIndividual = 'http://schema.org/VirtualRecordingDigitalSource';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Virus
 */
export const Virus: OtherIndividual = 'http://schema.org/Virus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WeaponConsideration
 */
export const WeaponConsideration: OtherIndividual = 'http://schema.org/WeaponConsideration';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementBack
 */
export const WearableMeasurementBack: OtherIndividual = 'http://schema.org/WearableMeasurementBack';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementChestOrBust
 */
export const WearableMeasurementChestOrBust: OtherIndividual = 'http://schema.org/WearableMeasurementChestOrBust';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementCollar
 */
export const WearableMeasurementCollar: OtherIndividual = 'http://schema.org/WearableMeasurementCollar';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementCup
 */
export const WearableMeasurementCup: OtherIndividual = 'http://schema.org/WearableMeasurementCup';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementHeight
 */
export const WearableMeasurementHeight: OtherIndividual = 'http://schema.org/WearableMeasurementHeight';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementHips
 */
export const WearableMeasurementHips: OtherIndividual = 'http://schema.org/WearableMeasurementHips';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementInseam
 */
export const WearableMeasurementInseam: OtherIndividual = 'http://schema.org/WearableMeasurementInseam';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementLength
 */
export const WearableMeasurementLength: OtherIndividual = 'http://schema.org/WearableMeasurementLength';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementOutsideLeg
 */
export const WearableMeasurementOutsideLeg: OtherIndividual = 'http://schema.org/WearableMeasurementOutsideLeg';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementSleeve
 */
export const WearableMeasurementSleeve: OtherIndividual = 'http://schema.org/WearableMeasurementSleeve';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementWaist
 */
export const WearableMeasurementWaist: OtherIndividual = 'http://schema.org/WearableMeasurementWaist';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableMeasurementWidth
 */
export const WearableMeasurementWidth: OtherIndividual = 'http://schema.org/WearableMeasurementWidth';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupBig
 */
export const WearableSizeGroupBig: OtherIndividual = 'http://schema.org/WearableSizeGroupBig';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupBoys
 */
export const WearableSizeGroupBoys: OtherIndividual = 'http://schema.org/WearableSizeGroupBoys';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupExtraShort
 */
export const WearableSizeGroupExtraShort: OtherIndividual = 'http://schema.org/WearableSizeGroupExtraShort';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupExtraTall
 */
export const WearableSizeGroupExtraTall: OtherIndividual = 'http://schema.org/WearableSizeGroupExtraTall';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupGirls
 */
export const WearableSizeGroupGirls: OtherIndividual = 'http://schema.org/WearableSizeGroupGirls';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupHusky
 */
export const WearableSizeGroupHusky: OtherIndividual = 'http://schema.org/WearableSizeGroupHusky';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupInfants
 */
export const WearableSizeGroupInfants: OtherIndividual = 'http://schema.org/WearableSizeGroupInfants';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupJuniors
 */
export const WearableSizeGroupJuniors: OtherIndividual = 'http://schema.org/WearableSizeGroupJuniors';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupMaternity
 */
export const WearableSizeGroupMaternity: OtherIndividual = 'http://schema.org/WearableSizeGroupMaternity';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupMens
 */
export const WearableSizeGroupMens: OtherIndividual = 'http://schema.org/WearableSizeGroupMens';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupMisses
 */
export const WearableSizeGroupMisses: OtherIndividual = 'http://schema.org/WearableSizeGroupMisses';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupPetite
 */
export const WearableSizeGroupPetite: OtherIndividual = 'http://schema.org/WearableSizeGroupPetite';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupPlus
 */
export const WearableSizeGroupPlus: OtherIndividual = 'http://schema.org/WearableSizeGroupPlus';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupRegular
 */
export const WearableSizeGroupRegular: OtherIndividual = 'http://schema.org/WearableSizeGroupRegular';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupShort
 */
export const WearableSizeGroupShort: OtherIndividual = 'http://schema.org/WearableSizeGroupShort';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupTall
 */
export const WearableSizeGroupTall: OtherIndividual = 'http://schema.org/WearableSizeGroupTall';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeGroupWomens
 */
export const WearableSizeGroupWomens: OtherIndividual = 'http://schema.org/WearableSizeGroupWomens';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemAU
 */
export const WearableSizeSystemAU: OtherIndividual = 'http://schema.org/WearableSizeSystemAU';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemBR
 */
export const WearableSizeSystemBR: OtherIndividual = 'http://schema.org/WearableSizeSystemBR';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemCN
 */
export const WearableSizeSystemCN: OtherIndividual = 'http://schema.org/WearableSizeSystemCN';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemContinental
 */
export const WearableSizeSystemContinental: OtherIndividual = 'http://schema.org/WearableSizeSystemContinental';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemDE
 */
export const WearableSizeSystemDE: OtherIndividual = 'http://schema.org/WearableSizeSystemDE';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemEN13402
 */
export const WearableSizeSystemEN13402: OtherIndividual = 'http://schema.org/WearableSizeSystemEN13402';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemEurope
 */
export const WearableSizeSystemEurope: OtherIndividual = 'http://schema.org/WearableSizeSystemEurope';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemFR
 */
export const WearableSizeSystemFR: OtherIndividual = 'http://schema.org/WearableSizeSystemFR';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemGS1
 */
export const WearableSizeSystemGS1: OtherIndividual = 'http://schema.org/WearableSizeSystemGS1';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemIT
 */
export const WearableSizeSystemIT: OtherIndividual = 'http://schema.org/WearableSizeSystemIT';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemJP
 */
export const WearableSizeSystemJP: OtherIndividual = 'http://schema.org/WearableSizeSystemJP';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemMX
 */
export const WearableSizeSystemMX: OtherIndividual = 'http://schema.org/WearableSizeSystemMX';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemUK
 */
export const WearableSizeSystemUK: OtherIndividual = 'http://schema.org/WearableSizeSystemUK';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WearableSizeSystemUS
 */
export const WearableSizeSystemUS: OtherIndividual = 'http://schema.org/WearableSizeSystemUS';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Wednesday
 */
export const Wednesday: OtherIndividual = 'http://schema.org/Wednesday';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WesternConventional
 */
export const WesternConventional: OtherIndividual = 'http://schema.org/WesternConventional';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Wholesale
 */
export const Wholesale: OtherIndividual = 'http://schema.org/Wholesale';

/**
 * 
 * 
 * 
 *
 * http://schema.org/Withdrawn
 */
export const Withdrawn: OtherIndividual = 'http://schema.org/Withdrawn';

/**
 * 
 * 
 * 
 *
 * http://schema.org/WritePermission
 */
export const WritePermission: OtherIndividual = 'http://schema.org/WritePermission';

/**
 * 
 * 
 * 
 *
 * http://schema.org/XRay
 */
export const XRay: OtherIndividual = 'http://schema.org/XRay';

/**
 * 
 * 
 * 
 *
 * http://schema.org/ZoneBoardingPolicy
 */
export const ZoneBoardingPolicy: OtherIndividual = 'http://schema.org/ZoneBoardingPolicy';

export const _BASE: IriString = 'http://schema.org/';
export const _PREFIX: string = 'schema';