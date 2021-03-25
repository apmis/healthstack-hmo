import { fromPeriodFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PeriodSchema, PrimitiveDateTimeSchema } from '../headers';

PeriodSchema.add(ElementSchema);
PeriodSchema.remove(Fields.id);
PeriodSchema.add({
  _start: PrimitiveDateTimeSchema,
  _end: PrimitiveDateTimeSchema,
});

PeriodSchema.statics.parseR4 = (data) => fromPeriodFhir(data);

export default PeriodSchema;
