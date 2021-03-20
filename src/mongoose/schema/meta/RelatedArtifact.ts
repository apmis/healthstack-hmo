import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  AttachmentSchema,
  PrimitiveCanonicalSchema,
  PrimitiveMarkdownSchema,
  PrimitiveStringSchema,
  PrimitiveUrlSchema,
  RelatedArtifactSchema,
  RelatedArtifactTypeSchema,
} from '../headers';

RelatedArtifactSchema.add(ElementSchema);
RelatedArtifactSchema.remove(Fields.id);
RelatedArtifactSchema.add({
  _type: RelatedArtifactTypeSchema,
  _label: PrimitiveStringSchema,
  _display: PrimitiveStringSchema,
  _citation: PrimitiveMarkdownSchema,
  _url: PrimitiveUrlSchema,
  document: AttachmentSchema,
  resource: PrimitiveCanonicalSchema,
});

export default RelatedArtifactSchema;
