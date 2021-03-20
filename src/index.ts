import { constants, initialize } from '@asymmetrik/node-fhir-server-core';
const { VERSIONS } = constants;
import app from './app';
import * as PatientFhirService from './fhir/patient.service';
import logger from './logger';

const port = app.get('port');

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

const config = {
  profiles: {
    patient: {
      service: PatientFhirService,
      versions: [VERSIONS['4_0_0']],
    },
  },
};
const fhirServer = initialize(config, app);

fhirServer.listen(port, () => {
  logger.info(
    'Starting the FHIR Server on http://%s:%d',
    app.get('host'),
    port
  );
});
