import { fromSampledDataFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  PrimitiveDecimalSchema,
  PrimitivePositiveIntSchema,
  PrimitiveStringSchema,
  SampledDataSchema,
  SimpleQuantitySchema,
} from '../headers';

SampledDataSchema.add(ElementSchema);
SampledDataSchema.remove(Fields.id);
SampledDataSchema.add({
  origin: SimpleQuantitySchema,
  _period: PrimitiveDecimalSchema,
  _factor: PrimitiveDecimalSchema,
  _lowerLimit: PrimitiveDecimalSchema,
  _upperLimit: PrimitiveDecimalSchema,
  _dimensions: PrimitivePositiveIntSchema,
  _data: PrimitiveStringSchema,
});

SampledDataSchema.statics.parseR4 = (data) => fromSampledDataFhir(data);

export default SampledDataSchema;
