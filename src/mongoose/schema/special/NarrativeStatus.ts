import Fields from '../Fields';
import { ElementSchema, NarrativeStatusSchema } from '../headers';

NarrativeStatusSchema.add(ElementSchema);
NarrativeStatusSchema.remove(Fields.id);
NarrativeStatusSchema.add({
  value: String,
});

export default NarrativeStatusSchema;
