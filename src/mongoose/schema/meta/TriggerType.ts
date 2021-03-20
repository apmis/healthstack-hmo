import ElementSchema from '../Element';
import Fields from '../Fields';
import { TriggerTypeSchema } from '../headers';

TriggerTypeSchema.add(ElementSchema);
TriggerTypeSchema.remove(Fields.id);
TriggerTypeSchema.add({
  value: String,
});

export default TriggerTypeSchema;
