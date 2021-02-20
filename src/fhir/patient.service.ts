import { resolveSchema } from '@asymmetrik/node-fhir-server-core';
import app from '../app';
import { ServiceNames } from '../db';
import { Dictionary } from '../types';
import { BundleEntryShema, BundleSchema, PatientSchema } from './schema';

export const search = async (args: any, context: any) => {
  const patientsService = app.service(ServiceNames.Patients);
  const Patient = PatientSchema(args.base_version);
  const Bundle = BundleSchema(args.base_version);
  const BundleEntry = BundleEntryShema(args.base_version);
  // You will need to build your query based on the sanitized args
  const query = {}; // myCustomQueryBuilder(args);
  let results: Dictionary[] = [];
  try {
    results = (await patientsService.find()) as Dictionary[];
    const patients = results['data'].map((result) => new Patient(result));
    const entries = patients.map(
      (patient) => new BundleEntry({ resource: patient })
    );
    return new Bundle({ entry: entries });
  } catch (error) {
    console.error({ error });
  }
};
