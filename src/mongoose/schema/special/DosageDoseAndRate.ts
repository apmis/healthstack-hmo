import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodeableConceptSchema,
  DosageDoseAndRateSchema,
  RangeSchema,
  RatioSchema,
  SimpleQuantitySchema,
} from '../headers';

DosageDoseAndRateSchema.add(ElementSchema);
DosageDoseAndRateSchema.remove(Fields.id);
DosageDoseAndRateSchema.add({
  type: CodeableConceptSchema,
  doseRange: RangeSchema,
  doseSimpleQuantity: SimpleQuantitySchema,
  rateRatio: RatioSchema,
  rateRange: RangeSchema,
  rateSimpleQuantity: SimpleQuantitySchema,
});

export default DosageDoseAndRateSchema;
