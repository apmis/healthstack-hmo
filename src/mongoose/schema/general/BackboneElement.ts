import ElementSchema from '../Element';
import Fields from '../Fields';
import { BackboneElementSchema, ExtensionSchema } from '../headers';

BackboneElementSchema.add(ElementSchema);
BackboneElementSchema.remove(Fields.id);
BackboneElementSchema.add({
  modifierExtension: [ExtensionSchema],
});

export default BackboneElementSchema;
