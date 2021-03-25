import { fromSimpleQuantityFhir } from '../../converters/from';
import Fields from '../Fields';
import {
  PrimitiveCodeSchema,
  PrimitiveDecimalSchema,
  PrimitiveStringSchema,
  PrimitiveUriSchema,
  SimpleQuantitySchema,
} from '../headers';
import QuantitySchema from './Quantity';

SimpleQuantitySchema.add(QuantitySchema);
SimpleQuantitySchema.remove(Fields.id);
SimpleQuantitySchema.add({
  value: PrimitiveDecimalSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
});

SimpleQuantitySchema.statics.parseR4 = (data) => fromSimpleQuantityFhir(data);

export default SimpleQuantitySchema;
