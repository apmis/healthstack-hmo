import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  ExpressionSchema,
  PrimitiveCodeSchema,
  PrimitiveIdSchema,
  PrimitiveStringSchema,
  PrimitiveUriSchema,
} from '../headers';

ExpressionSchema.add(ElementSchema);
ExpressionSchema.remove(Fields.id);
ExpressionSchema.add({
  _description: PrimitiveStringSchema,
  _name: PrimitiveIdSchema,
  _language: PrimitiveCodeSchema,
  _expression: PrimitiveStringSchema,
  _reference: PrimitiveUriSchema,
});

export default ExpressionSchema;
