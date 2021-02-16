import { type } from 'os';

type Dictionary = { [Key: string]: any };

type DictionaryOf<T> = { [Key: string]: T };

export { Dictionary, DictionaryOf };
