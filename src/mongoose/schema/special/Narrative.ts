import Fields from '../Fields';
import { ElementSchema, NarrativeSchema } from '../headers';
import PrimitiveXhtmlSchema from '../primitive/PrimitiveXhtml';
import NarrativeStatusSchema from './NarrativeStatus';

NarrativeSchema.add(ElementSchema);
NarrativeSchema.remove(Fields.id);
NarrativeSchema.add({
  _status: NarrativeStatusSchema,
  div: PrimitiveXhtmlSchema,
});

export default NarrativeSchema;
