import { fromContactPointFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import {
  ContactPointSchema,
  ContactPointSystemSchema,
  ContactPointUseSchema,
  PeriodSchema,
  PrimitivePositiveIntSchema,
  PrimitiveStringSchema,
} from '../headers';

ContactPointSchema.add(ElementSchema);
ContactPointSchema.remove('id');
ContactPointSchema.add({
  _system: ContactPointSystemSchema,
  _value: PrimitiveStringSchema,
  _use: ContactPointUseSchema,
  _rank: PrimitivePositiveIntSchema,
  period: PeriodSchema,
});

ContactPointSchema.statics.parseR4 = (data) => fromContactPointFhir(data);

export default ContactPointSchema;
