import { fromAgeFhir } from '../../converters/from';
import Fields from '../Fields';
import { AgeSchema } from '../headers';
import QuantitySchema from './Quantity';

AgeSchema.add(QuantitySchema);
AgeSchema.remove(Fields.id);
AgeSchema.add({});

AgeSchema.statics.parseR4 = (data) => fromAgeFhir(data);

export default AgeSchema;
