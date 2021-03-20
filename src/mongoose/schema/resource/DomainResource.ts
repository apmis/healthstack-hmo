import Fields from '../Fields';
import {
  DomainResourceSchema,
  ExtensionSchema,
  NarrativeSchema,
} from '../headers';
import ResourceSchema from './Resource';

DomainResourceSchema.add(ResourceSchema);
DomainResourceSchema.remove(Fields.id);
DomainResourceSchema.add({
  text: NarrativeSchema,
  contained: [ResourceSchema],
  extension: [ExtensionSchema],
  modifierExtension: [ExtensionSchema],
});

export default DomainResourceSchema;
