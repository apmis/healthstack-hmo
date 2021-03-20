import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  ContactDetailSchema,
  ContributorSchema,
  ContributorTypeSchema,
  PrimitiveStringSchema,
} from '../headers';

ContributorSchema.add(ElementSchema);
ContributorSchema.remove(Fields.id);
ContributorSchema.add({
  _type: ContributorTypeSchema,
  _name: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
});

export default ContributorSchema;
