// Initializes the `messages` service on path `/messages`
import { ServiceAddons } from '@feathersjs/feathers';

import hooks from './patients.hook';
import { Patients } from './patients.class';
import { Application } from '../../declarations';
import { ServiceNames } from '../../db';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    patients: Patients & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/patients', new Patients(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service(ServiceNames.Patients);

  service.hooks(hooks);
}
