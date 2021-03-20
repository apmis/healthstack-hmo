import ElementSchema from './Element';
import Fields from './Fields';
import { FHIRAllTypesSchema } from './headers';

FHIRAllTypesSchema.add(ElementSchema);
FHIRAllTypesSchema.remove(Fields.id);
FHIRAllTypesSchema.add({
  value: String,
});

export default FHIRAllTypesSchema;
