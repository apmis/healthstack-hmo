import { fromContactPointUseFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { ContactPointUseSchema } from '../headers';

ContactPointUseSchema.add(ElementSchema);
ContactPointUseSchema.remove(Fields.id);
ContactPointUseSchema.add({
  value: String,
});

ContactPointUseSchema.statics.parseR4 = (data) => fromContactPointUseFhir(data);

export default ContactPointUseSchema;
