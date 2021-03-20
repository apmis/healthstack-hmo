import { fromPrimitiveUrlSchema } from '../../converters/R4';
import Fields from '../Fields';
import { PrimitiveUrlSchema } from '../headers';
import PrimitiveUriSchema from './PrimitiveUri';

PrimitiveUrlSchema.add(PrimitiveUriSchema);
PrimitiveUrlSchema.remove(Fields.id);
PrimitiveUrlSchema.add({});

PrimitiveUrlSchema.statics.parseR4 = (...args) =>
  fromPrimitiveUrlSchema(...args);

export default PrimitiveUrlSchema;
