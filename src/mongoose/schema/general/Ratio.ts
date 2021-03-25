import { fromRatioFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { QuantitySchema, RatioSchema } from '../headers';

RatioSchema.add(ElementSchema);
RatioSchema.remove(Fields.id);
RatioSchema.add({
  numerator: QuantitySchema,
  denominator: QuantitySchema,
});

RatioSchema.statics.parseR4 = (data) => fromRatioFhir(data);

export default RatioSchema;
