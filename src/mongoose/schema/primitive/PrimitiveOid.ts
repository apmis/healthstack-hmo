import { fromPrimitiveOidFhir } from '../../converters/from';
import Fields from '../Fields';
import { PrimitiveOidSchema } from '../headers';
import PrimitiveUriSchema from './PrimitiveUri';

PrimitiveOidSchema.add(PrimitiveUriSchema);
PrimitiveOidSchema.remove(Fields.id);
PrimitiveOidSchema.add({});

PrimitiveOidSchema.statics.parseR4 = (...args) => fromPrimitiveOidFhir(...args);

export default PrimitiveOidSchema;
