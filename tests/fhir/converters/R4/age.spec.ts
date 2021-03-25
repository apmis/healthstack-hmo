import 'mocha';

import { R4 } from '@ahryman40k/ts-fhir-types';
import { expect } from 'chai';

import { fromAgeFhir } from '../../../../src/mongoose/converters/from';
import { Elements, Primitives } from '../../stubs';

describe('Age FHIR JSON to Mongo BSON Converters', () => {
  describe('Age', () => {
    it('should deserialise all age attributes', () => {
      const ageJSON: R4.IAge = Elements.Age;
      const age = fromAgeFhir(ageJSON);
      expect(age._value.value).to.equal(Primitives.Decimal);
      expect(age._unit.value).to.equal(Primitives.StringTimeMetric);
      expect(age._system.value).to.equal(Primitives.StringUri);
    });
  });
});
