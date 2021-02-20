import createModel from '../../models/patients.model';

import { MongoDBServiceOptions, Service } from 'feathers-mongodb';
import { Application } from '../../declarations';
import { AppConstants } from '../../db';
import { Params } from '@feathersjs/feathers';
import { R4 } from '@ahryman40k/ts-fhir-types';

type Patient = R4.IPatient;
export class Patients extends Service<Patient> {
  constructor(options: Partial<MongoDBServiceOptions>, app: Application) {
    super(options);
    app
      .get(AppConstants.MONGO_CLIENT)
      .then((conn: any) => {
        this.Model = createModel(conn);
      })
      .catch((err) => console.error(err));
  }
  create(data: Patient, params?: Params): Promise<Patient | Patient[]> {
    const { name } = data;
    const userData = {
      name,
    };
    return super.create(userData, params);
  }
}
