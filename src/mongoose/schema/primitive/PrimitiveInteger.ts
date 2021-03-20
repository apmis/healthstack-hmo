import { fromPrimitiveIntFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveIntegerSchema } from '../headers';

PrimitiveIntegerSchema.add(ElementSchema);
PrimitiveIntegerSchema.remove(Fields.id);
PrimitiveIntegerSchema.add({
  value: Number,
});

PrimitiveIntegerSchema.statics.parseR4 = (...args) =>
  fromPrimitiveIntFhir(...args);

export default PrimitiveIntegerSchema;
