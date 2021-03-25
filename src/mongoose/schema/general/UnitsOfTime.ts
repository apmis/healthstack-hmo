import { fromUnitOfTimeFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { UnitsOfTimeSchema } from '../headers';

UnitsOfTimeSchema.add(ElementSchema);
UnitsOfTimeSchema.remove(Fields.id);
UnitsOfTimeSchema.add({
  value: String,
});

UnitsOfTimeSchema.statics.parseR4 = (data) => fromUnitOfTimeFhir(data);

export default UnitsOfTimeSchema;
