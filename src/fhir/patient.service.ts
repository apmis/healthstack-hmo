import { resolveSchema } from '@asymmetrik/node-fhir-server-core';
import app from '../app';
import { Dictionary } from '../types';

export const search = async (args, context) => {
  const patientsService = app.service('patients');
  const Patient = resolveSchema(args.base_version, 'patient');
  const Bundle = resolveSchema(args.base_version, 'bundle');
  const BundleEntry = resolveSchema(args.base_version, 'bundleentry');
  // You will need to build your query based on the sanitized args
  const query = {}; // myCustomQueryBuilder(args);
  let results: Dictionary[] = [];
  try {
    console.log({ results });
    results = (await patientsService.find()) as Dictionary[];
    const patients = results['data'].map((result) => new Patient(result));
    const entries = patients.map(
      (patient) => new BundleEntry({ resource: patient })
    );
    return new Bundle({ entry: entries });
  } catch (error) {
    console.log({ error });
  }
};
