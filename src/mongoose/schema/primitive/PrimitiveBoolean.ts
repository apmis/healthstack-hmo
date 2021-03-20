import { fromPrimitiveBooleanFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { PrimitiveBooleanSchema } from '../headers';

PrimitiveBooleanSchema.add(ElementSchema);
PrimitiveBooleanSchema.remove(Fields.id);
PrimitiveBooleanSchema.add({
  value: Boolean,
});

PrimitiveBooleanSchema.statics.parseR4 = (...args) =>
  fromPrimitiveBooleanFhir(...args);

export default PrimitiveBooleanSchema;
