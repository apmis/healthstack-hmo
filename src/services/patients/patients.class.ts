import {
  initialize,
  loggers,
  constants,
} from '@asymmetrik/node-fhir-server-core';
const { VERSIONS } = constants;

import { MongoDBServiceOptions, Service } from 'feathers-mongodb';
import { Application } from '../../declarations';
import { constants as dbConstants } from '../../db/constants';

const { MONGO_CLIENT, PATIENTS_MODEL } = dbConstants;

export class Patients extends Service {
  constructor(options: Partial<MongoDBServiceOptions>, app: Application) {
    super(options);
    console.log({ MONGO_CLIENT });
    app
      .get(MONGO_CLIENT)
      .then((conn) => {
        this.Model = conn.db('feathers').collection('patients');
      })
      .catch((err) => console.error(err));
  }
}
