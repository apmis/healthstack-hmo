import { MongoClient } from 'mongodb';
import { Application } from '../declarations';
import { AppConstants } from '../constants';

export default (app: Application): void => {
  const { MONGO_CLIENT, MONGODB_URL } = AppConstants;
  const dbUrl = app.get(MONGODB_URL);
  const client = MongoClient.connect(dbUrl);
  app.set(MONGO_CLIENT, client);
};
