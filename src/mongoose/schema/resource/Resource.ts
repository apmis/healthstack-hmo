import {
  MetaSchema,
  PrimitiveCodeSchema,
  PrimitiveUriSchema,
  ResourceSchema,
} from '../headers';

ResourceSchema.add({
  id: String,
  meta: MetaSchema,
  _implicitRules: PrimitiveUriSchema,
  _language: PrimitiveCodeSchema,
  resourceType: String,
});

export default ResourceSchema;
