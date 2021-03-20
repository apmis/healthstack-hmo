import { Model } from 'mongoose';

import { CommonDocument, PrimitiveElementDocument } from '../document';

export interface CommonModel extends Model<CommonDocument> {
  parseR4: (value?: any, element?: any) => CommonDocument;
}

export interface PrimitiveElementModel extends Model<PrimitiveElementDocument> {
  parseR4: (value?: any, element?: any) => PrimitiveElementDocument;
}
