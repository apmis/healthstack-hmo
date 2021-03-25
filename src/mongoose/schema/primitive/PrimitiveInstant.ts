import { fromPrimitiveInstantFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveInstantSchema } from '../headers';

PrimitiveInstantSchema.add(ElementSchema);
PrimitiveInstantSchema.remove(Fields.id);
PrimitiveInstantSchema.add({
  value: Date,
});

PrimitiveInstantSchema.statics.parseR4 = (...args) =>
  fromPrimitiveInstantFhir(...args);

export default PrimitiveInstantSchema;
