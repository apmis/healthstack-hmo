import { fromMoneyFhir } from '../../converters/from';
import ElementSchema from '../Element';
import Fields from '../Fields';
import {
  CurrencyCodeSchema,
  MoneySchema,
  PrimitiveDecimalSchema,
} from '../headers';

MoneySchema.add(ElementSchema);
MoneySchema.remove(Fields.id);
MoneySchema.add({
  _value: PrimitiveDecimalSchema,
  _currency: CurrencyCodeSchema,
});

MoneySchema.statics.parseR4 = (data) => fromMoneyFhir(data);

export default MoneySchema;
