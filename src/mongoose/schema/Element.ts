import { ElementSchema, ExtensionSchema } from './headers';

ElementSchema.add({
  id: String,
  extension: [ExtensionSchema],
});

export default ElementSchema;
