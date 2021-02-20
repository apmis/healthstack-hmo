type Dictionary = { [Key: string]: any };

type DictionaryOf<T> = { [Key: string]: T };

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  nextOfKin: Patient;
}

interface MongoConnection {
  db: (modelName: string) => any;
}

export { Dictionary, DictionaryOf, MongoConnection, Patient };
