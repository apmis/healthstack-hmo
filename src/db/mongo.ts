import { MongoClient } from 'mongodb';
import { Application } from '../declarations';
import { constants } from './constants';

export default (app: Application): void => {
  const dbUrl = app.get('mongoDBUrl');
  const client = MongoClient.connect(dbUrl);
  app.set(constants.MONGO_CLIENT, client);
};
