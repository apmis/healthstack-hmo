import { fromDurationFhir } from '../../converters/from';
import Fields from '../Fields';
import { DurationSchema } from '../headers';
import QuantitySchema from './Quantity';

DurationSchema.add(QuantitySchema);
DurationSchema.remove(Fields.id);
DurationSchema.add({});

DurationSchema.statics.parseR4 = (data) => fromDurationFhir(data);

export default DurationSchema;
