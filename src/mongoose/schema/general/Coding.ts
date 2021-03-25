import { fromCodingFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodingSchema,
  PrimitiveBooleanSchema,
  PrimitiveCodeSchema,
  PrimitiveStringSchema,
  PrimitiveUriSchema,
} from '../headers';

CodingSchema.add(ElementSchema);
CodingSchema.remove(Fields.id);
CodingSchema.add({
  _system: PrimitiveUriSchema,
  _version: PrimitiveStringSchema,
  _code: PrimitiveCodeSchema,
  _display: PrimitiveStringSchema,
  _userSelected: PrimitiveBooleanSchema,
});

CodingSchema.statics.parseR4 = (data) => fromCodingFhir(data);

export default CodingSchema;
