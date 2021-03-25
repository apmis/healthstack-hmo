import { fromCodeableConceptFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodeableConceptSchema,
  CodingSchema,
  PrimitiveStringSchema,
} from '../headers';

CodeableConceptSchema.add(ElementSchema);
CodeableConceptSchema.remove(Fields.id);
CodeableConceptSchema.add({
  coding: [CodingSchema],
  _text: PrimitiveStringSchema,
});

CodeableConceptSchema.statics.parseR4 = (data) => fromCodeableConceptFhir(data);

export default CodeableConceptSchema;
