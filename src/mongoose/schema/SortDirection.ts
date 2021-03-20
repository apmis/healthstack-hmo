import ElementSchema from './Element';
import Fields from './Fields';
import { SortDirectionSchema } from './headers';

SortDirectionSchema.add(ElementSchema);
SortDirectionSchema.remove(Fields.id);
SortDirectionSchema.add({
  value: String,
});

export default SortDirectionSchema;
