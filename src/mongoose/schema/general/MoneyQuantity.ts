import Fields from '../Fields';
import {
  MoneyQuantitySchema,
  PrimitiveCodeSchema,
  PrimitiveDecimalSchema,
  PrimitiveStringSchema,
  PrimitiveUriSchema,
  QuantityComparatorSchema,
  QuantitySchema,
} from '../headers';

MoneyQuantitySchema.add(QuantitySchema);
MoneyQuantitySchema.remove(Fields.id);
MoneyQuantitySchema.add({
  value: PrimitiveDecimalSchema,
  comparator: QuantityComparatorSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
});

//MoneyQuantitySchema.statics.parseR4 = (data) => fromMoneyQuantityFhir(data);

module.exports.MoneyQuantitySchema = MoneyQuantitySchema;
