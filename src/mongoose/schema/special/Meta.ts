import ElementSchema = require('../Element');
import {
  CodingSchema,
  MetaSchema,
  PrimitiveCanonicalSchema,
  PrimitiveIdSchema,
  PrimitiveInstantSchema,
  PrimitiveUriSchema,
} from '../headers';

MetaSchema.add(ElementSchema);
MetaSchema.remove('id');
MetaSchema.add({
  _versionId: PrimitiveIdSchema,
  _lastUpdated: PrimitiveInstantSchema,
  _source: PrimitiveUriSchema,
  profile: [PrimitiveCanonicalSchema],
  security: [CodingSchema],
  tag: [CodingSchema],
});
export default MetaSchema;
