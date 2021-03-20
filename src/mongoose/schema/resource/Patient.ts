import Fields from '../Fields';
import {
  AddressSchema,
  AdministrativeGenderSchema,
  AttachmentSchema,
  CodeableConceptSchema,
  ContactPointSchema,
  HumanNameSchema,
  IdentifierSchema,
  PatientCommunicationSchema,
  PatientContactSchema,
  PatientLinkSchema,
  PatientSchema,
  PrimitiveBooleanSchema,
  PrimitiveDateSchema,
  PrimitiveDateTimeSchema,
  PrimitiveIntegerSchema,
  ReferenceSchema,
} from '../headers';
import DomainResourceSchema from './DomainResource';

PatientSchema.add(DomainResourceSchema);
PatientSchema.remove(Fields.id);
PatientSchema.add({
  identifier: [IdentifierSchema],
  _active: PrimitiveBooleanSchema,
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  _gender: AdministrativeGenderSchema,
  _birthDate: PrimitiveDateSchema,
  _deceasedBoolean: PrimitiveBooleanSchema,
  deceasedDateTime: PrimitiveDateTimeSchema,
  address: [AddressSchema],
  maritalStatus: CodeableConceptSchema,
  _multipleBirthBoolean: PrimitiveBooleanSchema,
  _multipleBirthInteger: PrimitiveIntegerSchema,
  photo: [AttachmentSchema],
  contact: [PatientContactSchema],
  communication: [PatientCommunicationSchema],
  generalPractitioner: [ReferenceSchema],
  managingOrganization: ReferenceSchema,
  link: [PatientLinkSchema],
});

export default PatientSchema;
