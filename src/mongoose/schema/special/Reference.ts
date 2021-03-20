import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  IdentifierSchema,
  PrimitiveStringSchema,
  PrimitiveUriSchema,
  ReferenceSchema,
} from '../headers';

ReferenceSchema.add(ElementSchema);
ReferenceSchema.remove(Fields.id);
ReferenceSchema.add({
  _reference: PrimitiveStringSchema,
  _type: PrimitiveUriSchema,
  identifier: IdentifierSchema,
  _display: PrimitiveStringSchema,
});

export default ReferenceSchema;
