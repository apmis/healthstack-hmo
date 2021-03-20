import ElementSchema from '../Element';
import Fields from '../Fields';
import { ContributorTypeSchema } from '../headers';

ContributorTypeSchema.add(ElementSchema);
ContributorTypeSchema.remove(Fields.id);
ContributorTypeSchema.add({
  value: String,
});

export default ContributorTypeSchema;
