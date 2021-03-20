import { fromPrimitiveDateTimeFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveDateTimeSchema } from '../headers';

PrimitiveDateTimeSchema.add(ElementSchema);
PrimitiveDateTimeSchema.remove(Fields.id);
PrimitiveDateTimeSchema.add({
  value: Date,
});

PrimitiveDateTimeSchema.statics.parseR4 = (...args) =>
  fromPrimitiveDateTimeFhir(...args);

export default PrimitiveDateTimeSchema;
