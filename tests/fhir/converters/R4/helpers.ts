import { expect } from 'chai';

const assertPatient = (patient) => {
  expect(patient.isNew).to.equal(true);
};
