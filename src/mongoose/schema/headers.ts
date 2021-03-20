/* eslint-disable max-len */
import { Schema } from 'mongoose';

const PrimitiveBooleanSchema = new Schema<any, any>({});

const PrimitiveDateSchema = new Schema({}); // Element (value:Date)
const PrimitiveIntegerSchema = new Schema<any, any>({});
const PrimitiveUriSchema = new Schema({});
const PrimitiveXhtmlSchema = new Schema({});

// Address
const AddressTypeSchema = new Schema({}); // Primitive(String)
const AddressUseSchema = new Schema({}); // Primitive(String)

const PrimitiveDecimalSchema = new Schema({});
const QuantityComparatorSchema = new Schema({});

const QuantitySchema = new Schema({});

const AgeSchema = new Schema({});

const AnnotationSchema = new Schema({});
const PrimitiveMarkdownSchema = new Schema({});

const ContactDetailSchema = new Schema({});
const ContributorTypeSchema = new Schema({});
const ContributorSchema = new Schema({});

const CountSchema = new Schema({});

const PrimitiveCanonicalSchema = new Schema({});
const DataRequirementDateFilterSchema = new Schema({});

const SortDirectionSchema = new Schema({});

const DataRequirementSortSchema = new Schema({});
const DataRequirementCodeFilterSchema = new Schema({});

const DataRequirementSchema = new Schema({});

const DistanceSchema = new Schema({});

const DosageDoseAndRateSchema = new Schema({});
const DosageSchema = new Schema({});
const DurationSchema = new Schema({});

const PrimitiveIdSchema = new Schema({});
const ExpressionSchema = new Schema({});

const CurrencyCodeSchema = new Schema({});
const MoneySchema = new Schema({});
const MoneyQuantitySchema = new Schema({});

const FHIRAllTypesSchema = new Schema({});
const ParameterUseSchema = new Schema({});
const ParameterDefinitionSchema = new Schema({});

const PrimitiveInstantSchema = new Schema({});

const PrimitiveOidSchema = new Schema({});

const PrimitivePositiveIntSchema = new Schema({});

const PrimitiveTimeSchema = new Schema({});

const PrimitiveUrlSchema = new Schema({});

const PrimitiveUuidSchema = new Schema({});

const SimpleQuantitySchema = new Schema({});
const RangeSchema = new Schema({});

const RatioSchema = new Schema({});

const RelatedArtifactTypeSchema = new Schema({});
const RelatedArtifactSchema = new Schema({});

const SampledDataSchema = new Schema({});
const SignatureSchema = new Schema({});

const UnitsOfTimeSchema = new Schema({});
const DayOfWeekSchema = new Schema({});
const EventTimingSchema = new Schema({});
const TimingRepeatSchema = new Schema({});
const TimingSchema = new Schema({});

const TriggerTypeSchema = new Schema({});
const TriggerDefinitionSchema = new Schema({});

const UsageContextSchema = new Schema({});

const ExtensionSchema = new Schema({}); // Composite(Any Type)
const ElementSchema = new Schema({}); // Composite(Extension),

const PrimitiveDateTimeSchema = new Schema({}); // Element(Date)
const PeriodSchema = new Schema({}); // Composite(Element,PrimitiveDateTime)
const AddressSchema = new Schema({}); // ElementWith(AddressType, AddressUse, Period, Primitive(String))
const PrimitiveStringSchema = new Schema({}); // Primitive (String)

const AdministrativeGenderSchema = new Schema({}); //Primitive String
const MimeTypeSchema = new Schema({}); // Element(String)
const PrimitiveBase64BinarySchema = new Schema({}); // Element(Me)
const PrimitiveCodeSchema = new Schema({}); // Primitive (PrimitiveString)

const PrimitiveUnsignedIntSchema = new Schema({}); //Primitive (Int)

const AttachmentSchema = new Schema({}); // ElementWith (MimeType, Primitives)

const CodingSchema = new Schema({}); // Composite (Primitives, Element(Me))
const CodeableConceptSchema = new Schema({}); // Composite(Coding, Element, Primitive)

const ContactPointSystemSchema = new Schema({}); // Element(Me)
const ContactPointUseSchema = new Schema({}); // Element(Me)
const ContactPointSchema = new Schema({}); // ElementWith (ContactPointSystem, ContactPointUse, Period, Primitives)

const NarrativeStatusSchema = new Schema({}); // Element (Me)
const NarrativeSchema = new Schema({}); // Composite (NarrativeStatus, PrimitievXhtml)
const MetaSchema = new Schema({}); // ElementWith(Coding, Primitives)
const ResourceSchema = new Schema({}); // Composite(Meta)
const DomainResourceSchema = new Schema({}); // Composite (Extension, Narrative, Resource)

const NameUseSchema = new Schema({}); // Element (value:string)
const HumanNameSchema = new Schema({}); // ElementWith (NameUse, Period, PrimitiveString)

const IdentifierUseSchema = new Schema({}); // Element (value:string)
const ReferenceSchema = new Schema({}); // ElementWith (Identifier, Primitives)
const IdentifierSchema = new Schema({}); // ElementWith (IdentifierUse, Period, Primitives, Reference)

const BackboneElementSchema = new Schema({}); // ElementWith (Extension)
const PatientCommunicationSchema = new Schema({}); // BackboneElementWith (CodableConcept)

const PatientContactSchema = new Schema({}); // BackboneElementWith (CodableConcept, Primitive)

const LinkTypeSchema = new Schema({}); // Element (value:string)
const PatientLinkSchema = new Schema({}); // BackboneElement (LinkType, Reference)

const PatientSchema = new Schema({});

export {
  AddressSchema,
  AddressTypeSchema,
  AddressUseSchema,
  AdministrativeGenderSchema,
  AgeSchema,
  AnnotationSchema,
  AttachmentSchema,
  BackboneElementSchema,
  CodeableConceptSchema,
  CodingSchema,
  ContactDetailSchema,
  ContactPointSchema,
  ContactPointSystemSchema,
  ContactPointUseSchema,
  ContributorSchema,
  ContributorTypeSchema,
  CountSchema,
  CurrencyCodeSchema,
  DataRequirementCodeFilterSchema,
  DataRequirementDateFilterSchema,
  DataRequirementSchema,
  DataRequirementSortSchema,
  DayOfWeekSchema,
  DistanceSchema,
  DomainResourceSchema,
  DosageDoseAndRateSchema,
  DosageSchema,
  DurationSchema,
  ElementSchema,
  EventTimingSchema,
  ExpressionSchema,
  ExtensionSchema,
  FHIRAllTypesSchema,
  HumanNameSchema,
  IdentifierSchema,
  IdentifierUseSchema,
  LinkTypeSchema,
  MetaSchema,
  MimeTypeSchema,
  MoneyQuantitySchema,
  MoneySchema,
  NameUseSchema,
  NarrativeSchema,
  NarrativeStatusSchema,
  ParameterDefinitionSchema,
  ParameterUseSchema,
  PatientCommunicationSchema,
  PatientContactSchema,
  PatientLinkSchema,
  PatientSchema,
  PeriodSchema,
  PrimitiveBase64BinarySchema,
  PrimitiveBooleanSchema,
  PrimitiveCanonicalSchema,
  PrimitiveCodeSchema,
  PrimitiveDateSchema,
  PrimitiveDateTimeSchema,
  PrimitiveDecimalSchema,
  PrimitiveIdSchema,
  PrimitiveInstantSchema,
  PrimitiveIntegerSchema,
  PrimitiveMarkdownSchema,
  PrimitiveOidSchema,
  PrimitivePositiveIntSchema,
  PrimitiveStringSchema,
  PrimitiveTimeSchema,
  PrimitiveUnsignedIntSchema,
  PrimitiveUriSchema,
  PrimitiveUrlSchema,
  PrimitiveUuidSchema,
  PrimitiveXhtmlSchema,
  QuantityComparatorSchema,
  QuantitySchema,
  RangeSchema,
  RatioSchema,
  ReferenceSchema,
  RelatedArtifactSchema,
  RelatedArtifactTypeSchema,
  ResourceSchema,
  SampledDataSchema,
  SignatureSchema,
  SimpleQuantitySchema,
  SortDirectionSchema,
  TimingRepeatSchema,
  TimingSchema,
  TriggerDefinitionSchema,
  TriggerTypeSchema,
  UnitsOfTimeSchema,
  UsageContextSchema,
};
