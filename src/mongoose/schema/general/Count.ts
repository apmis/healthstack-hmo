import { fromCountFhir } from '../../converters/from';
import Fields from '../Fields';
import { CountSchema, QuantitySchema } from '../headers';

CountSchema.add(QuantitySchema);
CountSchema.remove(Fields.id);
CountSchema.add({});

CountSchema.statics.parseR4 = (data) => fromCountFhir(data);

export default CountSchema;
