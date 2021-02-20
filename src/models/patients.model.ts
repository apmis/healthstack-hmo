import { DBConstants, ModelNames } from '../db';
import { MongoConnection } from '../types';

export default function (conn: MongoConnection): any {
  const Model = conn.db(DBConstants.DB_NAME).collection(ModelNames.Patients);
  return Model;
}
