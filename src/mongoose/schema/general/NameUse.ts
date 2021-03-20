import { fromNameUseFhir } from '../../converters/R4';
import Fields from '../Fields';
import { ElementSchema, NameUseSchema } from '../headers';

NameUseSchema.add(ElementSchema);
NameUseSchema.remove(Fields.id);
NameUseSchema.add({
  value: String,
});

NameUseSchema.statics.parseR4 = (data) => fromNameUseFhir(data);

export default NameUseSchema;
