import { fromSignatureFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodingSchema,
  MimeTypeSchema,
  PrimitiveBase64BinarySchema,
  PrimitiveInstantSchema,
  ReferenceSchema,
  SignatureSchema,
} from '../headers';

SignatureSchema.add(ElementSchema);
SignatureSchema.remove(Fields.id);
SignatureSchema.add({
  type: [CodingSchema],
  _when: PrimitiveInstantSchema,
  who: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  _targetFormat: MimeTypeSchema,
  _sigFormat: MimeTypeSchema,
  _data: PrimitiveBase64BinarySchema,
});

SignatureSchema.statics.parseR4 = (data) => fromSignatureFhir(data);

export default SignatureSchema;
