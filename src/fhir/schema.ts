import { resolveSchema } from '@asymmetrik/node-fhir-server-core';

const PatientSchema = (version) => resolveSchema(version, 'patient');
const BundleSchema = (version) => resolveSchema(version, 'bundle');
const BundleEntryShema = (version) => resolveSchema(version, 'bundleentry');

export { BundleEntryShema, BundleSchema, PatientSchema };
