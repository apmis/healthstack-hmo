import 'mocha';

import { R4 } from '@ahryman40k/ts-fhir-types';
import { expect } from 'chai';

import { fromPatientFhir } from '../../../../../src/mongoose/converters/R4';
import { Primitives, Resource } from '../../../stubs';

describe('Patient FHIR JSON to Mongo BSON Converters', () => {
  describe('Patient Atributes', () => {
    it('should deserialise all patient attributes', () => {
      const patientJSON: R4.IPatient = Resource.Patient;
      const patient = fromPatientFhir(patientJSON);
      expect(patient._active.value).to.equal(Primitives.BooleanFalse);
    });
  });
});
