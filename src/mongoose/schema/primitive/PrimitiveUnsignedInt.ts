import { fromPrimitiveUnsignedIntFhir } from '../../converters/R4';
import Fields from '../Fields';
import { PrimitiveUnsignedIntSchema } from '../headers';
import PrimitiveIntegerSchema from './PrimitiveInteger';

PrimitiveUnsignedIntSchema.add(PrimitiveIntegerSchema);
PrimitiveUnsignedIntSchema.remove(Fields.id);
PrimitiveUnsignedIntSchema.add({});

PrimitiveUnsignedIntSchema.statics.parseR4 = (...args) =>
  fromPrimitiveUnsignedIntFhir(...args);

export default PrimitiveUnsignedIntSchema;
