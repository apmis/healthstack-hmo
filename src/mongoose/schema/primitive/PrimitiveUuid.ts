import { fromPrimitiveUuidFhir } from '../../converters/from';
import Fields from '../Fields';
import { PrimitiveUuidSchema } from '../headers';
import PrimitiveUriSchema from './PrimitiveUri';

PrimitiveUuidSchema.add(PrimitiveUriSchema);
PrimitiveUuidSchema.remove(Fields.id);
PrimitiveUuidSchema.add({});

PrimitiveUuidSchema.statics.parseR4 = (...args) =>
  fromPrimitiveUuidFhir(...args);

export default PrimitiveUuidSchema;
