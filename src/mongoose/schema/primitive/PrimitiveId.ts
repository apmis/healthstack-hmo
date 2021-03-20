import { fromPrimitiveIdFhir } from '../../converters/R4';
import Fields from '../Fields';
import { PrimitiveIdSchema } from '../headers';
import PrimitiveStringSchema from './PrimitiveString';

PrimitiveIdSchema.add(PrimitiveStringSchema);
PrimitiveIdSchema.remove(Fields.id);
PrimitiveIdSchema.add({});

PrimitiveIdSchema.statics.parseR4 = (...args) => fromPrimitiveIdFhir(...args);

export default PrimitiveIdSchema;
