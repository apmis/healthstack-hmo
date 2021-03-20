import { fromPrimitiveDecimalFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveDecimalSchema } from '../headers';

PrimitiveDecimalSchema.add(ElementSchema);
PrimitiveDecimalSchema.remove(Fields.id);
PrimitiveDecimalSchema.add({
  value: Number,
});

PrimitiveDecimalSchema.statics.parseR4 = (...args) =>
  fromPrimitiveDecimalFhir(...args);

export default PrimitiveDecimalSchema;
