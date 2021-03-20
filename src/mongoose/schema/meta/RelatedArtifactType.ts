import ElementSchema from '../Element';
import Fields from '../Fields';
import { RelatedArtifactTypeSchema } from '../headers';

RelatedArtifactTypeSchema.add(ElementSchema);
RelatedArtifactTypeSchema.remove(Fields.id);
RelatedArtifactTypeSchema.add({
  value: String,
});

export default RelatedArtifactTypeSchema;
