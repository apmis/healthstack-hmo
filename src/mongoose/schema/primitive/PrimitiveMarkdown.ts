import { fromPrimitiveMarkdownFhir } from '../../converters/R4';
import Fields from '../Fields';
import { PrimitiveMarkdownSchema } from '../headers';
import PrimitiveStringSchema from './PrimitiveString';

PrimitiveMarkdownSchema.add(PrimitiveStringSchema);
PrimitiveMarkdownSchema.remove(Fields.id);
PrimitiveMarkdownSchema.add({});

PrimitiveMarkdownSchema.statics.parseR4 = (...args) =>
  fromPrimitiveMarkdownFhir(...args);

export default PrimitiveMarkdownSchema;
