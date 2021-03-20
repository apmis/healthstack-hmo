import app from '../app';
import { ServiceName } from '../db';
import { Dictionary } from '../types';
import { BundleEntryShema, BundleSchema, PatientSchema } from './schema';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const search = async (args: any) => {
  const patientsService = app.service(ServiceName.Patient);
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
