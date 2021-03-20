import { resolveSchema } from '@asymmetrik/node-fhir-server-core';

import { FhirModel } from '../db';

const PatientSchema = (version: string): any =>
  resolveSchema(version, FhirModel.Patient);
const BundleSchema = (version: string): any =>
  resolveSchema(version, FhirModel.Bundle);
const BundleEntryShema = (version: string): any =>
  resolveSchema(version, FhirModel.BundleEntry);

export { BundleEntryShema, BundleSchema, PatientSchema };
