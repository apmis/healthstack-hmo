import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  DataRequirementSchema,
  ExpressionSchema,
  PrimitiveDateSchema,
  PrimitiveDateTimeSchema,
  PrimitiveStringSchema,
  ReferenceSchema,
  TimingSchema,
  TriggerDefinitionSchema,
  TriggerTypeSchema,
} from '../headers';

TriggerDefinitionSchema.add(ElementSchema);
TriggerDefinitionSchema.remove(Fields.id);
TriggerDefinitionSchema.add({
  _type: TriggerTypeSchema,
  _name: PrimitiveStringSchema,
  timingTiming: TimingSchema,
  timingReference: ReferenceSchema,
  _timingDate: PrimitiveDateSchema,
  timingDateTime: PrimitiveDateTimeSchema,
  data: [DataRequirementSchema],
  condition: ExpressionSchema,
});

export default TriggerDefinitionSchema;
