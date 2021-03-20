import { R4 } from '@ahryman40k/ts-fhir-types';

import {
  Boolean,
  Code,
  DateTime,
  Decimal,
  MarkDown,
  StringDisplay,
  StringPersonName,
  StringText,
  StringTimeMetric,
  StringUri,
  StringUUID,
  StringValue,
  StringVersion,
} from './primitives';

const Quantity: R4.IQuantity = {
  value: Decimal,
  unit: StringTimeMetric,
  system: StringUri,
};

const Age: R4.IAge = Quantity as R4.IAge;

const IdentifierUse: R4.IdentifierUseKind = R4.IdentifierUseKind._official;

const Coding: R4.ICoding = {
  system: StringUri,
  version: StringVersion,
  code: Code,
  display: StringDisplay,
  userSelected: Boolean,
};

const CodeableConcept: R4.ICodeableConcept = {
  coding: [Coding],
  text: StringText,
};

const Period: R4.IPeriod = {
  start: DateTime,
  end: DateTime,
};

const Reference: R4.IReference = {
  reference: StringUUID,
  type: StringUri,
  identifier: undefined, //FIXME: Dependency issues
  display: StringDisplay,
};

const Identifier: R4.IIdentifier = {
  use: IdentifierUse,
  type: CodeableConcept,
  system: StringUri,
  value: StringValue,
  period: Period,
  assigner: Reference,
};

const Annotation: R4.IAnnotation = {
  authorReference: Reference,
  authorString: StringPersonName,
  time: DateTime,
  text: MarkDown,
};

export { Age, Annotation, MarkDown as Markdown };
