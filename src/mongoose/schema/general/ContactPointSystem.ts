import { fromContactPointSystemFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { ContactPointSystemSchema } from '../headers';

ContactPointSystemSchema.add(ElementSchema);
ContactPointSystemSchema.remove(Fields.id);
ContactPointSystemSchema.add({
  value: String,
});

ContactPointSystemSchema.statics.parseR4 = (data) =>
  fromContactPointSystemFhir(data);

export default ContactPointSystemSchema;
