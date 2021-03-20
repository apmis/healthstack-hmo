import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  FHIRAllTypesSchema,
  ParameterDefinitionSchema,
  ParameterUseSchema,
  PrimitiveCanonicalSchema,
  PrimitiveCodeSchema,
  PrimitiveIntegerSchema,
  PrimitiveStringSchema,
} from '../headers';

ParameterDefinitionSchema.add(ElementSchema);
ParameterDefinitionSchema.remove(Fields.id);
ParameterDefinitionSchema.add({
  _name: PrimitiveCodeSchema,
  _use: ParameterUseSchema,
  _min: PrimitiveIntegerSchema,
  _max: PrimitiveStringSchema,
  _documentation: PrimitiveStringSchema,
  _type: FHIRAllTypesSchema,
  profile: PrimitiveCanonicalSchema,
});

export default ParameterDefinitionSchema;
