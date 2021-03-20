import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  ContactDetailSchema,
  ContactPointSchema,
  PrimitiveStringSchema,
} from '../headers';

ContactDetailSchema.add(ElementSchema);
ContactDetailSchema.remove(Fields.id);
ContactDetailSchema.add({
  _name: PrimitiveStringSchema,
  telecom: [ContactPointSchema],
});

export default ContactDetailSchema;
