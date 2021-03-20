import { fromPrimitiveXhtmlFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveXhtmlSchema } from '../headers';

PrimitiveXhtmlSchema.add(ElementSchema);
PrimitiveXhtmlSchema.remove(Fields.id);
PrimitiveXhtmlSchema.add({
  value: String,
});

PrimitiveXhtmlSchema.statics.parseR4 = (...args) =>
  fromPrimitiveXhtmlFhir(...args);

export default PrimitiveXhtmlSchema;
