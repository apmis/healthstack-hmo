import { fromEventTimingFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import { EventTimingSchema } from '../headers';

EventTimingSchema.add(ElementSchema);
EventTimingSchema.remove(Fields.id);
EventTimingSchema.add({
  value: String,
});

EventTimingSchema.statics.parseR4 = (data) => fromEventTimingFhir(data);

export default EventTimingSchema;
