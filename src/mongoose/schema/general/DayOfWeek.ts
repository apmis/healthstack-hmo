import { fromDayOfWeekFhir } from '../../converters/R4';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { DayOfWeekSchema } from '../headers';

DayOfWeekSchema.add(ElementSchema);
DayOfWeekSchema.remove(Fields.id);
DayOfWeekSchema.add({
  value: String,
});

DayOfWeekSchema.statics.parseR4 = (data) => fromDayOfWeekFhir(data);

export default DayOfWeekSchema;
