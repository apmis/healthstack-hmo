import { fromTimingRepeatFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  DayOfWeekSchema,
  DurationSchema,
  EventTimingSchema,
  PeriodSchema,
  PrimitiveDecimalSchema,
  PrimitivePositiveIntSchema,
  PrimitiveTimeSchema,
  PrimitiveUnsignedIntSchema,
  RangeSchema,
  TimingRepeatSchema,
  UnitsOfTimeSchema,
} from '../headers';

TimingRepeatSchema.add(ElementSchema);
TimingRepeatSchema.remove(Fields.id);
TimingRepeatSchema.add({
  boundsDuration: DurationSchema,
  boundsRange: RangeSchema,
  boundsPeriod: PeriodSchema,
  _count: PrimitivePositiveIntSchema,
  _countMax: PrimitivePositiveIntSchema,
  _duration: PrimitiveDecimalSchema,
  _durationMax: PrimitiveDecimalSchema,
  _durationUnit: UnitsOfTimeSchema,
  _frequency: PrimitivePositiveIntSchema,
  _frequencyMax: PrimitivePositiveIntSchema,
  _period: PrimitiveDecimalSchema,
  _periodMax: PrimitiveDecimalSchema,
  _periodUnit: UnitsOfTimeSchema,
  _dayOfWeek: [DayOfWeekSchema],
  _timeOfDay: [PrimitiveTimeSchema],
  _when: [EventTimingSchema],
  _offset: PrimitiveUnsignedIntSchema,
});

TimingRepeatSchema.statics.parseR4 = (data) => fromTimingRepeatFhir(data);

export default TimingRepeatSchema;
