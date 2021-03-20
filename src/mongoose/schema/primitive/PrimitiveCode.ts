import { fromPrimitiveCodeFhir } from '../../converters/R4';
import Fields from '../Fields';
import { PrimitiveCodeSchema, PrimitiveStringSchema } from '../headers';

PrimitiveCodeSchema.add(PrimitiveStringSchema);
PrimitiveCodeSchema.remove(Fields.id);
PrimitiveCodeSchema.add({});

PrimitiveCodeSchema.statics.parseR4 = (...args) =>
  fromPrimitiveCodeFhir(...args);

export default PrimitiveCodeSchema;
