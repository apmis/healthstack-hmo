import { fromRangeFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { RangeSchema, SimpleQuantitySchema } from '../headers';

RangeSchema.add(ElementSchema);
RangeSchema.remove(Fields.id);
RangeSchema.add({
  low: SimpleQuantitySchema,
  high: SimpleQuantitySchema,
});

RangeSchema.statics.parseR4 = (data) => fromRangeFhir(data);

export default RangeSchema;
