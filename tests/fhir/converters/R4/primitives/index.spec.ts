import 'mocha';

import { expect } from 'chai';
import moment from 'moment';

import {
  fromPrimitiveBase64BinaryFhir,
  fromPrimitiveCanonicalFhir,
  fromPrimitiveCodeFhir,
  fromPrimitiveDateTimeFhir,
  fromPrimitiveDecimalFhir,
  fromPrimitiveInstantFhir,
  fromPrimitiveMarkdownFhir,
  fromPrimitiveOidFhir,
  fromPrimitivePositiveIntFhir,
  fromPrimitiveStringFhir,
  fromPrimitiveUriFhir,
  fromPrimitiveUrlSchema,
  fromPrimitiveUuidFhir,
  fromPrimitiveXhtmlFhir,
} from '../../../../../src/mongoose/converters/from';
import {
  PrimitiveBoolean,
  PrimitiveInt,
} from '../../../../../src/mongoose/schema';
import { Primitives } from '../../../stubs';

//FIXME: Add respective parseR4 methods into the respective Schemas

describe('Primitive FHIR values to Mongo BSON Element', () => {
  describe('Base64Binary Value', () => {
    it('should deserialise a base64 binarry string value to a mongoose Base64BinarySchema', () => {
      const value: string = Primitives.StringBase64;
      const element = fromPrimitiveBase64BinaryFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringBase64);
    });
  });

  describe('Boolean Value', () => {
    it('should deserialise a boolean value to a mongoose BooleanSchema', () => {
      const value: boolean = Primitives.BooleanFalse;
      const element = PrimitiveBoolean.parseR4(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.BooleanFalse);
    });
  });

  describe('Canonical Value', () => {
    it('should deserialise a canonical value to a mongoose CanonicalSchema', () => {
      const value: string = Primitives.StringUri;
      const element = fromPrimitiveCanonicalFhir(value);
      console.log('canonical',{element})
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringUri);
    });
  });

  describe('Code Value', () => {
    it('should deserialise a code to a mongoose PrimitiveCodeSchema', () => {
      const value: string = Primitives.StringCode;
      const element = fromPrimitiveCodeFhir(value);
      console.log('code',{element})
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringCode);
    });
  });

  describe('Date Value', () => {
    it('should deserialize value of primitive date as object', () => {
      const value: string = Primitives.DateOnly;
      const element = fromPrimitiveDateTimeFhir(value);
      expect(typeof element.value).to.equal('object');
    });

    it('should deserialise a date to a mongoose PrimitiveDateSchema', () => {
      const dateTimeValue: string = Primitives.DateTime;
      const dateTimeElement = fromPrimitiveDateTimeFhir(dateTimeValue);
      expect(dateTimeElement.value.toISOString()).to.equal(
        moment(Primitives.DateTime).toISOString()
      );
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
  });

  describe('Id Value', () => {
    it('should deserialise a id to a mongoose PrimitiveIdSchema', () => {
      const value: string = Primitives.StringUUID;
      const element = fromPrimitiveCodeFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringUUID);
    });
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

  describe('Markdown Value', () => {
    it('should deserialise a markdown value to a mongoose MarkdownSchema', () => {
      const value: string = Primitives.StringGeneric;
      const element = fromPrimitiveMarkdownFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringGeneric);
    });
  });

  describe('Oid Value', () => {
    it('should deserialise a markdown value to a mongoose MarkdownSchema', () => {
      const value: string = Primitives.StringUUID;
      const element = fromPrimitiveOidFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringUUID);
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

  describe('String Value', () => {
    it('should deserialise a string value to a mongoose StringSchema', () => {
      const value: string = Primitives.StringUUID;
      const element = fromPrimitiveStringFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringUUID);
    });
  });

  describe('Time Value', () => {
    it('should deserialize value of primitive time as object', () => {
      const value: string = Primitives.DateTime;
      const element = fromPrimitiveDateTimeFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(typeof element.value).to.equal('object');
    });

    it('should deserialise a date to a mongoose PrimitiveTimeSchema', () => {
      const dateTimeValue: string = Primitives.DateTime;
      const dateTimeElement = fromPrimitiveDateTimeFhir(dateTimeValue);
      expect(dateTimeElement.value.toISOString()).to.equal(
        moment(Primitives.DateTime).toISOString()
      );
    });
  });

  describe('Unsigned Integer Value', () => {
    it('should deserialise a unsigned value to a mongoose UnsignedIntegerSchema', () => {
      const value: number = Primitives.IntegerPositive;
      const element = PrimitiveInt.parseR4(value);
      expect(element.value).to.equal(Primitives.IntegerPositive);
    });

    it('should deserialise the value to be always positive', () => {
      const positiveIntValue: number = Primitives.IntegerNegative;
      const positiveIntElement = fromPrimitivePositiveIntFhir(positiveIntValue);
      expect(positiveIntElement.value).to.equal(
        Math.abs(Primitives.IntegerNegative)
      );
    });
  });

  describe('Uri Value', () => {
    it('should deserialise a uri to a mongoose PrimitiveUriSchema', () => {
      const value: string = Primitives.StringCode;
      const element = fromPrimitiveUriFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringCode);
    });
  });

  describe('url Value', () => {
    it('should deserialise a code to a mongoose PrimitiveUrlchema', () => {
      const value: string = Primitives.StringUrl;
      const element = fromPrimitiveUrlSchema(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringUrl);
    });
  });

  describe('Uuid Value', () => {
    it('should deserialise a code to a mongoose PrimitiveUuidSchema', () => {
      const value: string = Primitives.StringUUID;
      const element = fromPrimitiveUuidFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringUUID);
    });
  });

  describe('Xhtml Value', () => {
    it('should deserialise a xhtml to a mongoose PrimitiveXhtmlSchema', () => {
      const value: string = Primitives.StringGeneric;
      const element = fromPrimitiveXhtmlFhir(value);
      expect(element._id).to.not.be.empty;
      expect(element.id).to.not.exist;
      expect(element.extension).to.be.an('array');
      expect(element.extension).to.be.empty;
      expect(element.value).to.equal(Primitives.StringGeneric);
    });
  });
});
