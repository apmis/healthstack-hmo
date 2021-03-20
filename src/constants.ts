const FhirModel = {
  Patient: 'patient',
  Bundle: 'bundle',
  BundleEntry: 'bundleentry',
};

const FhirResource = {
  Patient: 'Patient',
};

const MongoModel = {
  ContactDetail: 'ContactDetail',
  Address: 'Address',
  Age: 'Age',
  Annotation: 'Annotation',
  Attachment: 'Attachment',
  BackboneElement: 'BackboneElement',
  CodeableConcept: 'CodeableConcept',
  Coding: 'Coding',
  ContactPoint: 'ContactPoint',
  Contributor: 'Contributor',
  ContributorType: 'ContributorType',
  DataRequirement: 'DataRequirement',
  DataRequirementCodeFilter: 'DataRequirementCodeFilter',
  DataRequirementSortFilter: 'DataRequirementSortFilter',
  DataRequirementSort: 'DataRequirementSort',
  DayOfWeek: 'DayOfWeek',
  Distance: 'Distance',
  DomainResource: 'DomainResource',
  Duration: 'Duration',
  Element: 'Element',
  EventTiming: 'EventTiming',
  Expression: 'Expression',
  Extension: 'Extension',
  FHIRTypes: 'FHIRTypes',
  Fields: 'Fields',
  Money: 'Money',
  HumanName: 'HumanName',
  NameUse: 'NameUse',
  Meta: 'Meta',
  Narrative: 'Narrative',
  Identifier: 'Identifier',
  IdentifierUse: 'IdentifierUse',
  Patient: 'Patient',
  PatientContact: 'PatientContact',
  PatientLink: 'PatientLink',
  PatientCommunication: 'PatientCommunication',
  ParameterDefinition: 'ParameterDefinition',
  ParameterUse: 'ParameterUse',
  Period: 'Period',
  PrimitiveCanonical: 'PrimitiveCanonical',
  PrimitiveCode: 'PrimitiveCode',
  PrimitiveBoolean: 'PrimitiveBoolean',
  PrimitiveDateTime: 'PrimitiveDateTime',
  PrimitiveDecimal: 'PrimitiveDecimal',
  PrimitiveInstant: 'PrimitiveInstant',
  PrimitiveInt: 'PrimitiveInt',
  PrimitiveInteger: 'PrimitiveInteger',
  PrimitiveMarkdown: 'PrimitiveMarkdown',
  PrimitiveOid: 'PrimitiveOid',
  PrimitivePositiveInt: 'PrimitivePositiveInt',
  PrimitiveString: 'PrimitiveString',
  PrimitiveTime: 'PrimitiveTime',
  PrimitiveUri: 'PrimitiveUri',
  PrimitiveUrl: 'PrimitiveUrl',
  PrimitiveUnsignedInt: 'PrimitiveUnsignedInt',
  PrimitiveUuid: 'PrimitiveUuid',
  Quantity: 'Quantity',
  QuantityComparator: 'QuantityComparator',
  Range: 'Range',
  Ratio: 'Ratio',
  Reference: 'Reference',
  RelatedArtifact: 'RelatedArtifact',
  RelatedArtifactType: 'RelatedArtifactType',
  Resource: 'Resource',
  SampledData: 'SampledData',
  Signature: 'Signature',
  SimpleQuantity: 'SimpleQuantity',
  SortDirection: 'SortDirection',
  Timing: 'Timing',
  TimingRepeat: 'TimingRepeat',
  TriggerDefinition: 'TriggerDefinition',
  TriggerType: 'TriggerType',
  UnitsOfTime: 'UnitsOfTime',
  UsageContext: 'UsageContext',
};

enum ServiceName {
  Patient = 'patients',
}

const AppConstants = {
  Paginate: 'paginate',
  MONGODB_URL: 'mongoDBUrl',
  MONGO_CLIENT: 'mongoClient',
};

const Messages = {
  invalidParam: 'Provided Patient Data not valid',
};

const DBConstants = {
  DB_NAME: 'health-stack',
};

export {
  AppConstants,
  DBConstants,
  FhirModel,
  FhirResource,
  Messages,
  MongoModel,
  ServiceName,
};
