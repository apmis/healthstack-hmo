import 'mocha';

import { expect } from 'chai';

import { Patient, PrimitiveString } from '../src/mongoose/schema';

describe('Array', () => {
  describe('Patients', () => {
    it('should save patient', async () => {
      const patient = new Patient({
        name: [
          {
            given: new PrimitiveString({ value: 'John' }),
          },
        ],
      });
      expect(patient.isNew).to.equal(true);
      const model = await patient.save();
      expect(model.isNew).to.equal(false);
    });

    it('should save patient properties', async () => {
      const patient = new Patient({
        name: [
          {
            given: new PrimitiveString({ value: 'John' }),
          },
        ],
      });
      const saved = await patient.save();
      const savedPatient = await Patient.find({
        'name.given': { $eq: 'John' },
      });
      console.log({ savedPatient });
    });
  });
});
