import { fromPrimitiveUriFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveUriSchema } from '../headers';

PrimitiveUriSchema.add(ElementSchema);
PrimitiveUriSchema.remove(Fields.id);
PrimitiveUriSchema.add({
  value: String,
});

PrimitiveUriSchema.statics.parseR4 = (...args) => fromPrimitiveUriFhir(...args);

export default PrimitiveUriSchema;
