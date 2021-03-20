import mongoose, { Document } from 'mongoose';

import { MongoModel } from '../../db';
import { CommonDocument, PrimitiveElementDocument } from '../document';
import { CommonModel, PrimitiveElementModel } from '../model';
import ElementSchema from './Element';
import ExtensionSchema from './Extension';
import FHIRAllTypesSchema from './FHIRAllTypes';
import AgeSchema from './general/Age';
import AnnotationSchema from './general/Annotation';
import BackboneElementSchema from './general/BackboneElement';
import CodeableConceptSchema from './general/CodeableConcept';
import CodingSchema from './general/Coding';
import ContactPointSchema from './general/ContactPoint';
import DayOfWeekSchema from './general/DayOfWeek';
import DistanceSchema from './general/Distance';
import DurationSchema from './general/Duration';
import EventTimingSchema from './general/EventTiming';
import HumanNameSchema from './general/HumanName';
import IdentifierSchema from './general/Identifier';
import IdentifierUseSchema from './general/IdentifierUse';
import MoneySchema from './general/Money';
import NameUseSchema from './general/NameUse';
import PeriodSchema from './general/Period';
import QuantitySchema from './general/Quantity';
import QuantityComparatorSchema from './general/QuantityComparator';
import RangeSchema from './general/Range';
import RatioSchema from './general/Ratio';
import SampledDataSchema from './general/SampledData';
import SignatureSchema from './general/Signature';
import SimpleQuantitySchema from './general/SimpleQuantity';
import TimingSchema from './general/Timing';
import TimingRepeatSchema from './general/TimingRepeat';
import UnitsOfTimeSchema from './general/UnitsOfTime';
import {
  AddressSchema,
  AttachmentSchema,
  NarrativeSchema,
  PatientCommunicationSchema,
  PatientContactSchema,
  PatientLinkSchema,
  PrimitiveUnsignedIntSchema,
} from './headers';
import ContactDetailSchema from './meta/ContactDetail';
import ContributorSchema from './meta/Contributor';
import ContributorTypeSchema from './meta/ContributorType';
import DataRequirementSchema from './meta/DataRequirement';
import DataRequirementCodeFilterSchema from './meta/DataRequirementCodeFilter';
import DataRequirementSortSchema from './meta/DataRequirementSort';
import ExpressionSchema from './meta/Expression';
import ParameterDefinitionSchema from './meta/ParameterDefinition';
import ParameterUseSchema from './meta/ParameterUse';
import RelatedArtifactTypeSchema from './meta/RelatedArtifactType';
import TriggerDefinitionSchema from './meta/TriggerDefinition';
import TriggerTypeSchema from './meta/TriggerType';
import UsageContextSchema from './meta/UsageContext';
import PrimitiveBooleanSchema from './primitive/PrimitiveBoolean';
import PrimitiveCanonicalSchema from './primitive/PrimitiveCanonical';
import PrimitiveCodeSchema from './primitive/PrimitiveCode';
import PrimitiveDateTimeSchema from './primitive/PrimitiveDateTime';
import PrimitiveDecimalSchema from './primitive/PrimitiveDecimal';
import PrimitiveInstantSchema from './primitive/PrimitiveInstant';
import PrimitiveIntegerSchema from './primitive/PrimitiveInteger';
import PrimitiveMarkdownSchema from './primitive/PrimitiveMarkdown';
import PrimitiveOidSchema from './primitive/PrimitiveOid';
import PrimitivePositiveIntSchema from './primitive/PrimitivePositiveInt';
import PrimitiveStringSchema from './primitive/PrimitiveString';
import PrimitiveTimeSchema from './primitive/PrimitiveTime';
import PrimitiveUriSchema from './primitive/PrimitiveUri';
import PrimitiveUrlSchema from './primitive/PrimitiveUrl';
import PrimitiveUuidSchema from './primitive/PrimitiveUuid';
import DomainResourceSchema from './resource/DomainResource';
import PatientSchema from './resource/Patient';
import ResourceSchema from './resource/Resource';
import MetaSchema from './special/Meta';
import ReferenceSchema from './special/Reference';

type FhirDocument = Document & {
  fromFhir: (data: any) => any;
};

const MongooseModel = mongoose.model;
const ContactPoint = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.ContactPoint,
  ContactPointSchema
);
const ContactDetail = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.ContactDetail,
  ContactDetailSchema
);
const Address = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Address,
  AddressSchema
);
const Age = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Age,
  AgeSchema
);
const Attachment = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Attachment,
  AttachmentSchema
);
const Annotation = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Annotation,
  AnnotationSchema
);
const BackboneElement = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.BackboneElement,
  BackboneElementSchema
);
const Coding = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Coding,
  CodingSchema
);
const Contributor = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Contributor,
  ContributorSchema
);
const ContributorType = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.ContributorType,
  ContributorTypeSchema
);
const DataRequirement = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.DataRequirement,
  DataRequirementSchema
);
const DataRequirementCodeFilter = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.DataRequirementCodeFilter,
  DataRequirementCodeFilterSchema
);
const DataRequirementSort = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.DataRequirementSort,
  DataRequirementSortSchema
);

const DayOfWeek = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.DayOfWeek,
  DayOfWeekSchema
);
const Distance = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Distance,
  DistanceSchema
);
const DomainResource = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.DomainResource,
  DomainResourceSchema
);
const Duration = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Duration,
  DurationSchema
);
const Element = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Element,
  ElementSchema
);
const EventTiming = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.EventTiming,
  EventTimingSchema
);
const Expression = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Expression,
  ExpressionSchema
);
const Extension = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Extension,
  ExtensionSchema
);
const FHIRTypes = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.FHIRTypes,
  FHIRAllTypesSchema
);

const CodeableConcept = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.CodeableConcept,
  CodeableConceptSchema
);

//const Fields = MongooseModel<CommonDocument, CommonModel>(MongoModel.Fields, FieldSchema);
const HumanName = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.HumanName,
  HumanNameSchema
);
const Identifier = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Identifier,
  IdentifierSchema
);
const Meta = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Meta,
  MetaSchema
);
const Narrative = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Narrative,
  NarrativeSchema
);
const IdentifierUse = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.IdentifierUse,
  IdentifierUseSchema
);
const Money = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Money,
  MoneySchema
);
const NameUse = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.NameUse,
  NameUseSchema
);
const ParameterDefinition = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.ParameterDefinition,
  ParameterDefinitionSchema
);
const ParameterUse = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.ParameterUse,
  ParameterUseSchema
);
const Patient = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Patient,
  PatientSchema
);
const PatientContact = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PatientContact,
  PatientContactSchema
);
const PatientLink = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PatientLink,
  PatientLinkSchema
);
const PatientCommunication = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PatientCommunication,
  PatientCommunicationSchema
);
const Period = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Period,
  PeriodSchema
);

const PrimitiveBoolean = MongooseModel<
  PrimitiveElementDocument,
  PrimitiveElementModel
>(MongoModel.PrimitiveBoolean, PrimitiveBooleanSchema);
const PrimitiveCode = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveCode,
  PrimitiveCodeSchema
);
const PrimitiveCanonical = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveCanonical,
  PrimitiveCanonicalSchema
);
const PrimitiveDecimal = MongooseModel<FhirDocument>(
  MongoModel.PrimitiveDecimal,
  PrimitiveDecimalSchema
);
const PrimitiveInstant = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveInstant,
  PrimitiveInstantSchema
);
const PrimitiveInt = MongooseModel<
  PrimitiveElementDocument,
  PrimitiveElementModel
>(MongoModel.PrimitiveInt, PrimitiveIntegerSchema);
const PrimitiveMarkdown = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveMarkdown,
  PrimitiveMarkdownSchema
);
const PrimitiveOid = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveOid,
  PrimitiveOidSchema
);
const PrimitivePositiveInt = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitivePositiveInt,
  PrimitivePositiveIntSchema
);
const PrimitiveUnsignedInt = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveUnsignedInt,
  PrimitiveUnsignedIntSchema
);
const PrimitiveString = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveString,
  PrimitiveStringSchema
);
const PrimitiveTime = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveTime,
  PrimitiveTimeSchema
);

const PrimitiveDateTime = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveDateTime,
  PrimitiveDateTimeSchema
);

const PrimitiveUri = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveUri,
  PrimitiveUriSchema
);
const PrimitiveUrl = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveUrl,
  PrimitiveUrlSchema
);
const PrimitiveUuid = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.PrimitiveUuid,
  PrimitiveUuidSchema
);
const Quantity = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Quantity,
  QuantitySchema
);
const QuantityComparator = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.QuantityComparator,
  QuantityComparatorSchema
);
const Range = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Range,
  RangeSchema
);
const Ratio = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Ratio,
  RatioSchema
);
const Reference = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Reference,
  ReferenceSchema
);
const RelatedArtifact = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.RelatedArtifact,
  RelatedArtifactTypeSchema
);
const RelatedArtifactType = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.RelatedArtifactType,
  RelatedArtifactTypeSchema
);
const Resource = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Resource,
  ResourceSchema
);
const SampledData = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.SampledData,
  SampledDataSchema
);
const Signature = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Signature,
  SignatureSchema
);
const SimpleQuantity = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.SimpleQuantity,
  SimpleQuantitySchema
);
const Timing = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.Timing,
  TimingSchema
);
const TimingRepeat = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.TimingRepeat,
  TimingRepeatSchema
);
const TriggerDefinition = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.TriggerDefinition,
  TriggerDefinitionSchema
);
const TriggerType = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.TriggerType,
  TriggerTypeSchema
);
const UnitsOfTime = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.UnitsOfTime,
  UnitsOfTimeSchema
);
const UsageContext = MongooseModel<CommonDocument, CommonModel>(
  MongoModel.UsageContext,
  UsageContextSchema
);

export {
  Address,
  Age,
  Annotation,
  Attachment,
  BackboneElement,
  CodeableConcept,
  Coding,
  ContactDetail,
  ContactPoint,
  Contributor,
  ContributorType,
  DataRequirement,
  DataRequirementCodeFilter,
  DataRequirementSort,
  DayOfWeek,
  Distance,
  DomainResource,
  Duration,
  Element,
  EventTiming,
  Expression,
  Extension,
  FHIRTypes,
  HumanName,
  Identifier,
  IdentifierUse,
  Meta,
  Money,
  NameUse,
  Narrative,
  ParameterDefinition,
  ParameterUse,
  Patient,
  PatientCommunication,
  PatientContact,
  PatientLink,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveCode,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInstant,
  PrimitiveInt,
  PrimitiveMarkdown,
  PrimitiveOid,
  PrimitivePositiveInt,
  PrimitiveString,
  PrimitiveTime,
  PrimitiveUnsignedInt,
  PrimitiveUri,
  PrimitiveUrl,
  PrimitiveUuid,
  Quantity,
  QuantityComparator,
  Range,
  Ratio,
  Reference,
  RelatedArtifact,
  RelatedArtifactType,
  Resource,
  SampledData,
  Signature,
  SimpleQuantity,
  Timing,
  TimingRepeat,
  TriggerDefinition,
  TriggerType,
  UnitsOfTime,
  UsageContext,
};
