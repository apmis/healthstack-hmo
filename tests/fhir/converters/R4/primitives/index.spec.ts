import 'mocha';

import { expect } from 'chai';
import moment from 'moment';

import {
  fromPrimitiveCanonicalFhir,
  fromPrimitiveCodeFhir,
  fromPrimitiveDateTimeFhir,
  fromPrimitiveDecimalFhir,
  fromPrimitiveInstantFhir,
  fromPrimitivePositiveIntFhir,
} from '../../../../../src/mongoose/converters/R4';
import {
  PrimitiveBoolean,
  PrimitiveInt,
} from '../../../../../src/mongoose/schema';
import { Primitives } from '../../../stubs';

describe('Primitive FHIR values to Mongo BSON Element', () => {
  describe('Boolean Value', () => {
    it('should deserialise a boolean value to a mongoose BooleanSchema', () => {
      const booleanValue: boolean = Primitives.BooleanFalse;
      const booleanElement = PrimitiveBoolean.parseR4(booleanValue);
      expect(booleanElement.value).to.equal(Primitives.BooleanFalse);
    });
  });

  describe('Positive Integer Value', () => {
    it('should deserialise a positive value to a mongoose PositiveIntegerSchema', () => {
      const positiveIntValue: number = Primitives.IntegerPositive;
      const positiveIntElement = PrimitiveInt.parseR4(positiveIntValue);
      expect(positiveIntElement.value).to.equal(Primitives.IntegerPositive);
    });

    it('should deserialise the value to be always positive', () => {
      const positiveIntValue: number = Primitives.IntegerNegative;
      const positiveIntElement = fromPrimitivePositiveIntFhir(positiveIntValue);
      expect(positiveIntElement.value).to.equal(
        Math.abs(Primitives.IntegerNegative)
      );
    });
  });

  describe('Cannonical Value', () => {
    it('should deserialise a cannonical url to a mongoose PrimitiveCanonicalSchema', () => {
      const canonicalValue: string = Primitives.StringUrl;
      const canonicalElement = fromPrimitiveCanonicalFhir(canonicalValue);
      expect(canonicalElement.value).to.equal(Primitives.StringUrl);
    });
  });

  describe('Code Value', () => {
    it('should deserialise a code to a mongoose PrimitiveCodeSchema', () => {
      const codeValue: string = Primitives.StringCode;
      const codeElement = fromPrimitiveCodeFhir(codeValue);
      expect(codeElement.value).to.equal(Primitives.StringCode);
    });
  });

  describe('DateTime Value', () => {
    it('should deserialize value of primitive datetime as object', () => {
      const dateTimeValue: string = Primitives.DateTime;
      const dateTimeElement = fromPrimitiveDateTimeFhir(dateTimeValue);
      expect(typeof dateTimeElement.value).to.equal('object');
    });

    it('should deserialise a date to a mongoose PrimitiveDateTimeSchema', () => {
      const dateTimeValue: string = Primitives.DateTime;
      const dateTimeElement = fromPrimitiveDateTimeFhir(dateTimeValue);
      expect(dateTimeElement.value.toISOString()).to.equal(
        moment(Primitives.DateTime).toISOString()
      );
    });
  });

  describe('Decimal Value', () => {
    it('should deserialise a decimal to a mongoose PrimitiveCodeSchema', () => {
      const decimalValue: number = Primitives.Decimal;
      const decimalElement = fromPrimitiveDecimalFhir(decimalValue);
      expect(decimalElement.value).to.equal(Primitives.Decimal);
    });

    describe('Instant Value', () => {
      it('should deserialise a instant to a mongoose PrimitiveInstantSchema', () => {
        const instantValue: string = Primitives.DateInstant;
        const instantElement = fromPrimitiveInstantFhir(instantValue);
        expect(instantElement.value.toUTCString()).to.equal(
          new Date(Primitives.DateInstant).toUTCString()
        );
      });
    });
  });

  describe('Positive Integer Value', () => {
    it('should deserialise a positive value to a mongoose PositiveIntegerSchema', () => {
      const positiveIntValue: number = Primitives.IntegerPositive;
      const positiveIntElement = fromPrimitivePositiveIntFhir(positiveIntValue);
      expect(positiveIntElement.value).to.equal(Primitives.IntegerPositive);
    });

    it('should deserialise the value to be always positive', () => {
      const positiveIntValue: number = Primitives.IntegerNegative;
      const positiveIntElement = fromPrimitivePositiveIntFhir(positiveIntValue);
      expect(positiveIntElement.value).to.equal(
        Math.abs(Primitives.IntegerNegative)
      );
    });
  });
});
