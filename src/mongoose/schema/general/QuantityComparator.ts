import { fromQuantityComparatorFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { QuantityComparatorSchema } from '../headers';

QuantityComparatorSchema.add(ElementSchema);
QuantityComparatorSchema.remove(Fields.id);
QuantityComparatorSchema.add({
  value: String,
});

QuantityComparatorSchema.statics.parseR4 = (data) =>
  fromQuantityComparatorFhir(data);

export default QuantityComparatorSchema;
