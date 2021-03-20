import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CodingSchema,
  DataRequirementCodeFilterSchema,
  PrimitiveCanonicalSchema,
  PrimitiveStringSchema,
} from '../headers';

DataRequirementCodeFilterSchema.add(ElementSchema);
DataRequirementCodeFilterSchema.remove(Fields.id);
DataRequirementCodeFilterSchema.add({
  _path: PrimitiveStringSchema,
  _searchParam: PrimitiveStringSchema,
  valueSet: PrimitiveCanonicalSchema,
  code: [CodingSchema],
});

export default DataRequirementCodeFilterSchema;
