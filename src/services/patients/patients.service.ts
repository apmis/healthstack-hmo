// Initializes the `messages` service on path `/messages`
import { ServiceAddons } from '@feathersjs/feathers';

import { ServiceName } from '../../db';
import { Application } from '../../declarations';
import { PatientServiceClass } from './patients.class';
import hooks from './patients.hook';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    patients: PatientServiceClass & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  // Initialize our service with any options it requires
  app.use('/patients', new PatientServiceClass({}, app));

  // Get our initialized service so that we can register hooks
  const service = app.service(ServiceName.Patient);

  service.hooks(hooks);
}
