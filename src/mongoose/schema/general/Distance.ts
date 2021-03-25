import { fromDistanceFhir } from '../../converters/from';
import Fields from '../Fields';
import { DistanceSchema } from '../headers';
import QuantitySchema from './Quantity';

DistanceSchema.add(QuantitySchema);
DistanceSchema.remove(Fields.id);
DistanceSchema.add({});

DistanceSchema.statics.parseR4 = (data) => fromDistanceFhir(data);

export default DistanceSchema;
