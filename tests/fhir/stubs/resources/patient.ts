import { R4 } from '@ahryman40k/ts-fhir-types';
import {
  AddressTypeKind,
  AddressUseKind,
  ContactPointSystemKind,
  ContactPointUseKind,
  HumanNameUseKind,
  IdentifierUseKind,
  NarrativeStatusKind,
  Patient_ContactGenderKind,
  Patient_LinkTypeKind,
  PatientGenderKind,
} from '@ahryman40k/ts-fhir-types/lib/R4';

import {
  Boolean,
  BooleanFalse,
  BooleanTrue,
  DateOnly,
  DateTime,
  IntegerPositive,
  IntegerZero,
  StringAddressLine,
  StringChar,
  StringCity,
  StringCode,
  StringContentType,
  StringCountry,
  StringData,
  StringDisplay,
  StringDistrict,
  StringGeneric,
  StringHash,
  StringLanguage,
  StringPersonName,
  StringProfile,
  StringState,
  StringSystem,
  StringText,
  StringTitle,
  StringUri,
  StringUrl,
  StringUUID,
  StringValue,
  StringVersion,
  XHTML,
} from '../primitives';

const Coding: R4.ICoding = {
  extension: [],
  system: StringSystem,
  version: StringVersion,
  code: StringCode,
  display: StringDisplay,
  userSelected: Boolean,
};

const Meta: R4.IMeta = {
  extension: [],
  versionId: StringUUID,
  lastUpdated: DateTime,
  source: StringGeneric,
  profile: [StringProfile],
  security: [Coding],
  tag: [Coding],
};

const Narrative: R4.INarrative = {
  extension: [],
  div: XHTML,
  status: NarrativeStatusKind._empty,
};

const CodeableConcept: R4.ICodeableConcept = {
  extension: [],
  coding: [Coding],
  text: StringText,
};

const Period: R4.IPeriod = {
  start: DateTime,
  end: DateTime,
};

const Identifier: R4.IIdentifier = {
  extension: [],
  use: IdentifierUseKind._usual,
  type: CodeableConcept,
  system: StringSystem,
  value: StringValue,
  period: Period,
};

const HumanName: R4.IHumanName = {
  extension: [],
  use: HumanNameUseKind._usual,
  text: StringText,
  family: StringPersonName,
  given: [StringPersonName, StringPersonName],
  prefix: [StringChar],
  suffix: [StringChar],
  period: Period,
};

const ContactPoint: R4.IContactPoint = {
  extension: [],
  system: ContactPointSystemKind._phone,
  value: StringValue,
  use: ContactPointUseKind._temp,
  rank: IntegerZero,
  period: Period,
};

const Address: R4.IAddress = {
  extension: [],
  use: AddressUseKind._temp,
  type: AddressTypeKind._both,
  text: StringText,
  line: [StringAddressLine],
  city: StringCity,
  district: StringDistrict,
  state: StringState,
  postalCode: StringCode,
  country: StringCountry,
  period: Period,
};

const Attachment: R4.IAttachment = {
  extension: [],
  contentType: StringContentType,
  language: StringLanguage,
  data: StringData,
  url: StringUrl,
  size: IntegerPositive,
  hash: StringHash,
  title: StringTitle,
  creation: DateTime,
};

const Reference: R4.IReference = {
  extension: [],
  reference: StringUUID,
  type: StringGeneric,
  identifier: Identifier,
  display: StringDisplay,
};

const PatientContact: R4.IPatient_Contact = {
  extension: [],
  modifierExtension: [],
  relationship: [CodeableConcept],
  name: HumanName,
  telecom: [ContactPoint],
  address: Address,
  gender: Patient_ContactGenderKind._male,
  organization: Reference,
  period: Period,
};

const PatientCommunication: R4.IPatient_Communication = {
  language: CodeableConcept,
  extension: [],
  modifierExtension: [],
  preferred: BooleanTrue,
};

const PatientLink = {
  other: Reference,
  extension: [],
  modifierExtension: [],
  type: Patient_LinkTypeKind._refer,
};

const Patient: R4.IPatient = {
  resourceType: 'Patient',
  meta: Meta,
  implicitRules: StringUri,
  language: StringLanguage,
  text: Narrative,
  contained: [],
  extension: [],
  modifierExtension: [],
  identifier: [Identifier],
  active: BooleanFalse,
  name: [HumanName],
  telecom: [ContactPoint],
  gender: PatientGenderKind._male,
  birthDate: DateOnly,
  deceasedBoolean: BooleanFalse,
  deceasedDateTime: DateOnly,
  address: [Address],
  maritalStatus: CodeableConcept,
  multipleBirthBoolean: BooleanFalse,
  multipleBirthInteger: IntegerZero,
  photo: [Attachment],
  contact: [PatientContact],
  communication: [PatientCommunication],
  generalPractitioner: [Reference],
  managingOrganization: Reference,
  link: [PatientLink],
};

export default Patient;
