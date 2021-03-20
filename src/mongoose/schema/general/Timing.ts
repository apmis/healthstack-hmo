import { fromTimingFhir } from '../../converters/R4';
import Fields from '../Fields';
import {
  CodeableConceptSchema,
  PrimitiveDateTimeSchema,
  TimingRepeatSchema,
  TimingSchema,
} from '../headers';
import BackboneElementSchema from './BackboneElement';

TimingSchema.add(BackboneElementSchema);
TimingSchema.remove(Fields.id);
TimingSchema.add({
  _event: [PrimitiveDateTimeSchema],
  repeat: TimingRepeatSchema,
  code: CodeableConceptSchema,
});

TimingSchema.statics.parseR4 = (data) => fromTimingFhir(data);

export default TimingSchema;
