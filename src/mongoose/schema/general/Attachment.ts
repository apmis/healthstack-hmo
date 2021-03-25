import { fromAttachmentFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  AttachmentSchema,
  MimeTypeSchema,
  PrimitiveBase64BinarySchema,
  PrimitiveCodeSchema,
  PrimitiveDateTimeSchema,
  PrimitiveStringSchema,
  PrimitiveUnsignedIntSchema,
  PrimitiveUrlSchema,
} from '../headers';

AttachmentSchema.add(ElementSchema);
AttachmentSchema.remove(Fields.id);
AttachmentSchema.add({
  _contentType: MimeTypeSchema,
  _language: PrimitiveCodeSchema,
  _data: PrimitiveBase64BinarySchema,
  _url: PrimitiveUrlSchema,
  _size: PrimitiveUnsignedIntSchema,
  _hash: PrimitiveBase64BinarySchema,
  _title: PrimitiveStringSchema,
  _creation: PrimitiveDateTimeSchema,
});

AttachmentSchema.statics.parseR4 = (data) => fromAttachmentFhir(data);

export default AttachmentSchema;
