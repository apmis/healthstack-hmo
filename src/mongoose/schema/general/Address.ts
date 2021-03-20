import { fromAddressFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  AddressSchema,
  AddressTypeSchema,
  AddressUseSchema,
  PeriodSchema,
  PrimitiveStringSchema,
} from '../headers';

AddressSchema.add(ElementSchema);
AddressSchema.remove(Fields.id);
AddressSchema.add({
  _use: AddressUseSchema,
  _type: AddressTypeSchema,
  _text: PrimitiveStringSchema,
  _line: [PrimitiveStringSchema],
  _city: PrimitiveStringSchema,
  _district: PrimitiveStringSchema,
  _state: PrimitiveStringSchema,
  _postalCode: PrimitiveStringSchema,
  _country: PrimitiveStringSchema,
  period: PeriodSchema,
});

AddressSchema.statics.parseR4 = (data) => fromAddressFhir(data);

export default AddressSchema;
