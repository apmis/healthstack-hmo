import { fromPrimitiveTimeFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveTimeSchema } from '../headers';

PrimitiveTimeSchema.add(ElementSchema);
PrimitiveTimeSchema.remove(Fields.id);
PrimitiveTimeSchema.add({
  value: Date,
});

PrimitiveTimeSchema.statics.parseR4 = (...args) =>
  fromPrimitiveTimeFhir(...args);

export default PrimitiveTimeSchema;
