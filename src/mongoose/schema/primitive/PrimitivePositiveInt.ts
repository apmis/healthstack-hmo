import { fromPrimitivePositiveIntFhir } from '../../converters/R4';
import Fields from '../Fields';
import { PrimitivePositiveIntSchema } from '../headers';
import PrimitiveIntegerSchema from './PrimitiveInteger';

PrimitivePositiveIntSchema.add(PrimitiveIntegerSchema);
PrimitivePositiveIntSchema.remove(Fields.id);
PrimitivePositiveIntSchema.add({});

PrimitivePositiveIntSchema.statics.parseR4 = (...args) =>
  fromPrimitivePositiveIntFhir(...args);

export default PrimitivePositiveIntSchema;
