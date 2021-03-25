import { fromPrimitiveDateFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveDateSchema } from '../headers';

PrimitiveDateSchema.add(ElementSchema);
PrimitiveDateSchema.remove(Fields.id);
PrimitiveDateSchema.add({
  value: Date,
});

PrimitiveDateSchema.statics.parseR4 = (...args) =>
  fromPrimitiveDateFhir(...args);

export default PrimitiveDateSchema;
