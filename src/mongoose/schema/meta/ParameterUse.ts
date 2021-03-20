import ElementSchema from '../Element';
import Fields from '../Fields';
import { ParameterUseSchema } from '../headers';

ParameterUseSchema.add(ElementSchema);
ParameterUseSchema.remove(Fields.id);
ParameterUseSchema.add({
  value: String,
});

export default ParameterUseSchema;
