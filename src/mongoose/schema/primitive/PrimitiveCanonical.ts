import { fromPrimitiveCanonicalFhir } from '../../converters/from';
import Fields from '../Fields';
import { PrimitiveCanonicalSchema } from '../headers';
import PrimitiveUriSchema from './PrimitiveUri';

PrimitiveCanonicalSchema.add(PrimitiveUriSchema);
PrimitiveCanonicalSchema.remove(Fields.id);
PrimitiveCanonicalSchema.add({});

PrimitiveCanonicalSchema.statics.parseR4 = (...args) =>
  fromPrimitiveCanonicalFhir(...args);

export default PrimitiveCanonicalSchema;
