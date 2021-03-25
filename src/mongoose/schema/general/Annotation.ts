import { fromAnnotationFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  AnnotationSchema,
  PrimitiveDateTimeSchema,
  PrimitiveStringSchema,
  ReferenceSchema,
} from '../headers';
import PrimitiveMarkdownSchema from '../primitive/PrimitiveMarkdown';

AnnotationSchema.add(ElementSchema);
AnnotationSchema.remove(Fields.id);
AnnotationSchema.add({
  authorReference: ReferenceSchema,
  authorString: PrimitiveStringSchema,
  _time: PrimitiveDateTimeSchema,
  text: PrimitiveMarkdownSchema,
});

AnnotationSchema.statics.parseR4 = (data) => fromAnnotationFhir(data);

export default AnnotationSchema;
