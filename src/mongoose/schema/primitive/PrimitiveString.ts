import { fromPrimitiveStringFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveStringSchema } from '../headers';

PrimitiveStringSchema.add(ElementSchema);
PrimitiveStringSchema.remove(Fields.id);
PrimitiveStringSchema.add({
  value: String,
});

PrimitiveStringSchema.statics.parseR4 = (...args) =>
  fromPrimitiveStringFhir(...args);

export default PrimitiveStringSchema;
