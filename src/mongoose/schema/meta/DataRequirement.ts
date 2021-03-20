import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodeableConceptSchema,
  DataRequirementCodeFilterSchema,
  DataRequirementDateFilterSchema,
  DataRequirementSchema,
  DataRequirementSortSchema,
  FHIRAllTypesSchema,
  PrimitiveCanonicalSchema,
  PrimitivePositiveIntSchema,
  PrimitiveStringSchema,
  ReferenceSchema,
} from '../headers';

DataRequirementSchema.add(ElementSchema);
DataRequirementSchema.remove(Fields.id);
DataRequirementSchema.add({
  _type: FHIRAllTypesSchema,
  profile: [PrimitiveCanonicalSchema],
  subjectCodeableConcept: CodeableConceptSchema,
  subjectReference: ReferenceSchema,
  _mustSupport: [PrimitiveStringSchema],
  codeFilter: [DataRequirementCodeFilterSchema],
  dateFilter: [DataRequirementDateFilterSchema],
  _limit: PrimitivePositiveIntSchema,
  sort: [DataRequirementSortSchema],
});

export default DataRequirementSchema;
