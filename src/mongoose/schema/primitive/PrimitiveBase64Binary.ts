import { fromPrimitiveBase64BinaryFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveBase64BinarySchema } from '../headers';

PrimitiveBase64BinarySchema.add(ElementSchema);
PrimitiveBase64BinarySchema.remove(Fields.id);
PrimitiveBase64BinarySchema.add({
  value: String,
});

PrimitiveBase64BinarySchema.statics.parseR4 = (...args) =>
  fromPrimitiveBase64BinaryFhir(...args);

export default PrimitiveBase64BinarySchema;
