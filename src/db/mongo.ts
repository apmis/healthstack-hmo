import { MongoClient } from 'mongodb';

import { AppConstants } from '../constants';
import { Application } from '../declarations';

export default (app: Application): void => {
  const { MONGO_CLIENT, MONGODB_URL } = AppConstants;
  const dbUrl = app.get(MONGODB_URL);
  const client = MongoClient.connect(dbUrl);
  app.set(MONGO_CLIENT, client);
};
