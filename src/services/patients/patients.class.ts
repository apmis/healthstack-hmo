import { Params } from '@feathersjs/feathers';
import { MongooseServiceOptions, Service } from 'feathers-mongoose';

import { AppConstants } from '../../db';
import { Application } from '../../declarations';
import { Patient } from '../../models/patients.model';
import { Patient as PatientDB } from '../../mongoose/schema';

export class PatientServiceClass extends Service<Patient> {
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super({
      ...options,
      paginate: app.get(AppConstants.Paginate),
      Model: PatientDB,
    });
  }
  create(patient: Patient, params?: Params): Promise<Patient | Patient[]> {
    const response = super.create(patient, params);
    return response;
  }
}
