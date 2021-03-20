import { fromQuantityFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  PrimitiveCodeSchema,
  PrimitiveDecimalSchema,
  PrimitiveStringSchema,
  PrimitiveUriSchema,
  QuantityComparatorSchema,
  QuantitySchema,
} from '../headers';

QuantitySchema.add(ElementSchema);
QuantitySchema.remove(Fields.id);
QuantitySchema.add({
  _value: PrimitiveDecimalSchema,
  _comparator: QuantityComparatorSchema,
  _unit: PrimitiveStringSchema,
  _system: PrimitiveUriSchema,
  _code: PrimitiveCodeSchema,
});

QuantitySchema.statics.parseR4 = (data) => fromQuantityFhir(data);

export default QuantitySchema;
