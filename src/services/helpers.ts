import {
  ContactPoint,
  PrimitiveBoolean,
  PrimitiveString,
} from '../mongoose/schema';
import { Dictionary } from '../types';

const toMongoObj = (
  fhirObj: Dictionary,
  mongoJSON: Dictionary = {}
): Dictionary => {
  Object.keys(fhirObj).forEach((key) => {
    const value = fhirObj[key];
    if (key === 'resourceType') {
      mongoJSON[key] = value;
    } else if (key === 'telecom') {
      const st = new ContactPoint({ value });
      mongoJSON[key] = st;
    } else if (Array.isArray(value)) {
      mongoJSON[key] = value.map((obj) =>
        typeof obj === 'string'
          ? new PrimitiveString({ value: obj })
          : toMongoObj(obj)
      );
    } else if (typeof value === 'string') {
      const st = new PrimitiveString({ value });
      mongoJSON[key] = st;
    } else if (typeof value === 'boolean') {
      const st = new PrimitiveBoolean({ value });
      mongoJSON[key] = st;
    } else if (typeof value === 'object') {
      mongoJSON[key] = toMongoObj(value, {});
    } else {
      mongoJSON[key] = value;
    }
  });
  return mongoJSON;
};

export { toMongoObj };
