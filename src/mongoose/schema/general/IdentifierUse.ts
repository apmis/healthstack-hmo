import { fromIdentifierUseFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { IdentifierUseSchema } from '../headers';

IdentifierUseSchema.add(ElementSchema);
IdentifierUseSchema.remove(Fields.id);
IdentifierUseSchema.add({
  value: String,
});

IdentifierUseSchema.statics.parseR4 = (data) => fromIdentifierUseFhir(data);

export default IdentifierUseSchema;
