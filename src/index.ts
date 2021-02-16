import {
  initialize,
  loggers,
  constants,
} from '@asymmetrik/node-fhir-server-core';
const { VERSIONS } = constants;
import logger from './logger';
import app from './app';

const port = app.get('port');

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

const config = {
  profiles: {
    patient: {
      service: './build/fhir/patient.service.js',
      versions: [VERSIONS['4_0_0']],
    },
  },
};
const fhirServer = initialize(config, app);
const fhirLogger = loggers.get('default');

fhirServer.listen(port, () => {
  logger.info(
    'Starting the FHIR Server on http://%s:%d',
    app.get('host'),
    port
  );
});

// fhirServer.on('listening', () =>
//   fhirLogger.info('Starting the FHIR Server on http://%s:%d', app.get('host'), port)
// );
