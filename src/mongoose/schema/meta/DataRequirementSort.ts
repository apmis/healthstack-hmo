import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  DataRequirementSortSchema,
  PrimitiveStringSchema,
  SortDirectionSchema,
} from '../headers';

DataRequirementSortSchema.add(ElementSchema);
DataRequirementSortSchema.remove(Fields.id);
DataRequirementSortSchema.add({
  _path: PrimitiveStringSchema,
  _direction: SortDirectionSchema,
});

export default DataRequirementSortSchema;
