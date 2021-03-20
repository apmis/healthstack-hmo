import { fromIdentifierFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodeableConceptSchema,
  IdentifierSchema,
  IdentifierUseSchema,
  PeriodSchema,
  PrimitiveStringSchema,
  PrimitiveUriSchema,
  ReferenceSchema,
} from '../headers';

IdentifierSchema.add(ElementSchema);
IdentifierSchema.remove(Fields.id);
IdentifierSchema.add({
  _use: IdentifierUseSchema,
  type: CodeableConceptSchema,
  _system: PrimitiveUriSchema,
  _value: PrimitiveStringSchema,
  period: PeriodSchema,
  assigner: ReferenceSchema,
});

IdentifierSchema.statics.parseR4 = (data) => fromIdentifierFhir(data);

export default IdentifierSchema;
