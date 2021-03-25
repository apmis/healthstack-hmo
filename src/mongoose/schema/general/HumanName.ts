import { fromHumanNameFhir } from '../../converters/from';
import Fields from '../Fields';
import {
  ElementSchema,
  HumanNameSchema,
  NameUseSchema,
  PeriodSchema,
  PrimitiveStringSchema,
} from '../headers';

HumanNameSchema.add(ElementSchema);
HumanNameSchema.remove(Fields.id);
HumanNameSchema.add({
  _use: NameUseSchema,
  _text: PrimitiveStringSchema,
  _family: PrimitiveStringSchema,
  _given: [PrimitiveStringSchema],
  _prefix: [PrimitiveStringSchema],
  _suffix: [PrimitiveStringSchema],
  period: PeriodSchema,
});

HumanNameSchema.statics.parseR4 = (data) => fromHumanNameFhir(data);

export default HumanNameSchema;
