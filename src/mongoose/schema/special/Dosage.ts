import Fields from '../Fields';
import BackboneElementSchema from '../general/BackboneElement';
import {
  CodeableConceptSchema,
  DosageDoseAndRateSchema,
  DosageSchema,
  PrimitiveBooleanSchema,
  PrimitiveIntegerSchema,
  PrimitiveStringSchema,
  RatioSchema,
  SimpleQuantitySchema,
  TimingSchema,
} from '../headers';

DosageSchema.add(BackboneElementSchema);
DosageSchema.remove(Fields.id);
DosageSchema.add({
  _sequence: PrimitiveIntegerSchema,
  _text: PrimitiveStringSchema,
  additionalInstruction: [CodeableConceptSchema],
  _patientInstruction: PrimitiveStringSchema,
  timing: TimingSchema,
  _asNeededBoolean: PrimitiveBooleanSchema,
  asNeededCodeableConcept: CodeableConceptSchema,
  site: CodeableConceptSchema,
  route: CodeableConceptSchema,
  method: CodeableConceptSchema,
  doseAndRate: [DosageDoseAndRateSchema],
  maxDosePerPeriod: RatioSchema,
  maxDosePerAdministration: SimpleQuantitySchema,
  maxDosePerLifetime: SimpleQuantitySchema,
});

module.exports.DosageSchema = DosageSchema;
