import { Document } from 'mongoose';

type IPrimitivePositiveInt = { id?: string; extension?: any[]; value?: number };
type IPrimitiveUnsignedInt = { id?: string; extension?: any[]; value?: number };
type IPrimitiveInt = { id?: string; extension?: any[]; value?: number };
type IPrimitiveDecimal = { id?: string; extension?: any[]; value?: number };
type IPrimitiveString = { id?: string; extension?: any[]; value?: string };
type IPrimitiveUri = { id?: string; extension?: any[]; value?: string };
type IPrimitiveUrl = { id?: string; extension?: any[]; value?: string };
type IPrimitiveCode = { id?: string; extension?: any[]; value?: string };
type IQuantityComparator = { id?: string; extension?: any[]; value?: string };
type IPrimitiveBoolean = { id?: string; extension?: any[]; value?: boolean };
type IPrimitiveDateTime = { id?: string; extension?: any[]; value?: Date };
type IPrimitiveMarkdown = { id?: string; extension?: any[]; value?: string };

interface IQuantity extends Document {
  value: IPrimitiveDecimal;
  comparator: IQuantityComparator;
  unit: IPrimitiveString;
  system: IPrimitiveUri;
  code: IPrimitiveCode;
}

type IIdentifierUse = IPrimitiveString;

interface ICoding {
  system: IPrimitiveUri;
  version: IPrimitiveString;
  code: IPrimitiveCode;
  display: IPrimitiveString;
  userSelected: IPrimitiveBoolean;
}

interface ICodeableConcept {
  coding: ICoding[];
  text: IPrimitiveString;
}

export {
  ICodeableConcept,
  ICoding,
  IIdentifierUse,
  IPrimitiveBoolean,
  IPrimitiveCode,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveInt,
  IPrimitiveMarkdown,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IPrimitiveUri,
  IPrimitiveUrl,
  IQuantity,
  IQuantityComparator,
};
