import { Document } from 'mongoose';

export type CommonDocument = Document;

export interface PrimitiveElementDocument extends CommonDocument {
  value: string | number | boolean;
}
