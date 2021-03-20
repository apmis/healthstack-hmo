import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodeableConceptSchema,
  CodingSchema,
  QuantitySchema,
  RangeSchema,
  ReferenceSchema,
  UsageContextSchema,
} from '../headers';

UsageContextSchema.add(ElementSchema);
UsageContextSchema.remove(Fields.id);
UsageContextSchema.add({
  code: CodingSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueReference: ReferenceSchema,
});

export default UsageContextSchema;
