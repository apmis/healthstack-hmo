import { R4 } from '@ahryman40k/ts-fhir-types';
import {
  IAddress,
  IAttachment,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  INarrative,
  IPatient_Communication,
  IPatient_Contact,
  IPatient_Link,
  IPeriod,
} from '@ahryman40k/ts-fhir-types/lib/R4';
import moment from 'moment';

import {
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
  IQuantityComparator,
} from '../rtti/common';
import {
  Address,
  Age,
  Annotation,
  Attachment,
  CodeableConcept,
  Coding,
  ContactPoint,
  Extension,
  HumanName,
  Identifier,
  IdentifierUse,
  Meta,
  Money,
  Narrative,
  Patient,
  PatientCommunication,
  PatientContact,
  PatientLink,
  Period,
  PrimitiveBoolean,
  PrimitiveCode,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInt,
  PrimitiveMarkdown,
  PrimitivePositiveInt,
  PrimitiveString,
  PrimitiveUnsignedInt,
  PrimitiveUri,
  PrimitiveUrl,
  QuantityComparator,
  Range,
  Ratio,
  Reference,
  SampledData,
  Signature,
  Timing,
  TimingRepeat,
} from '../schema';

const emptyValue = { value: '' };
const emptyBoolean = { value: false };
const emptyInteger = { value: 0.0 };
const emptyDecimal = { value: 0.0 };
const emptyDate = { value: new Date() };
//TODO: How do you handle id
//TODO: How do you handle properties with underscores
//TODO: How do you handle undefined values
const fromPrimitiveDecimalFhir = (
  primitive?: number,
  element: IPrimitiveDecimal = emptyDecimal
): any => {
  const value =
    ((primitive || (element && element.value)) && primitive) || element.value;
  return (primitive || element) && new PrimitiveDecimal({ ...element, value });
};

const fromPrimitiveIntFhir = (
  primitive?: number,
  element: IPrimitiveInt = emptyInteger
): any => {
  return (
    (primitive || element) &&
    new PrimitiveInt({ ...element, value: primitive || element.value })
  );
};

const fromPrimitiveUnsignedIntFhir = (
  primitive?: number,
  element: IPrimitiveUnsignedInt = emptyInteger
): any => {
  return (
    (primitive || element) &&
    new PrimitiveUnsignedInt({ ...element, value: primitive || element.value })
  );
};

const fromPrimitivePositiveIntFhir = (
  primitive?: number,
  element: IPrimitivePositiveInt = emptyInteger
): any => {
  const value =
    ((primitive || (element && element.value)) && primitive) || element.value;
  return (
    value && new PrimitivePositiveInt({ ...element, value: Math.abs(value) })
  );
};

const fromPrimitiveStringFhir = (
  primitive?: string,
  element: IPrimitiveString = emptyValue
): any => {
  return (
    (primitive || element) &&
    new PrimitiveString({ ...element, value: primitive || element.value })
  );
};

const fromPrimitiveBooleanFhir = (
  primitive?: boolean,
  element: IPrimitiveBoolean = emptyBoolean
): any => {
  return (
    (primitive || element) &&
    new PrimitiveBoolean({ ...element, value: primitive || element.value })
  );
};

const fromPrimitiveUriFhir = (
  primitive?: string,
  element: IPrimitiveUri = emptyValue
): any => {
  return (
    (primitive || element) &&
    new PrimitiveUri({ ...element, value: primitive || element.value })
  );
};

const fromPrimitiveUrlFhir = (
  primitive?: string,
  element: IPrimitiveUrl = emptyValue
): any => {
  return (
    (primitive || element) &&
    new PrimitiveUrl({ ...element, value: primitive || element.value })
  );
};

const fromPrimitiveCanonicalFhir = fromPrimitiveUrlFhir;

const fromPrimitiveCodeFhir = (
  primitive?: string,
  element: IPrimitiveCode = emptyValue
): any => {
  return (
    (primitive || element) &&
    new PrimitiveCode({ ...element, value: primitive || element.value })
  );
};

const fromQuantityComparatorFhir = (
  primitive?: string,
  element: IQuantityComparator = emptyValue
): any => {
  return (
    (primitive || element) &&
    new QuantityComparator({ ...element, value: primitive || element.value })
  );
};

const fromMimeTypeFhir = fromPrimitiveStringFhir;

const fromSignatureFhir = (signature: R4.ISignature): any => {
  const {
    id,
    extension,
    type,
    who,
    when,
    onBehalfOf,
    targetFormat,
    sigFormat,
    data,
  } = signature;
  const { _when, _targetFormat, _sigFormat } = signature;
  return new Signature({
    id,
    extension,
    type: type.map((obj) => fromCodingFhir(obj)),
    _when: fromPrimitiveInstantFhir(when, _when),
    who: who && fromReferenceFhir(who),
    onBehalfOf: onBehalfOf && fromReferenceFhir(onBehalfOf),
    _targetFormat: fromMimeTypeFhir(targetFormat, _targetFormat),
    _sigFormat: fromMimeTypeFhir(sigFormat, _sigFormat),
    data: fromPrimitiveBase64BinaryFhir(data),
  });
};

const fromIdentifierUseFhir = (
  identifierUseKind?: R4.IdentifierUseKind,
  element: IIdentifierUse = emptyValue
): any => {
  return (
    (identifierUseKind || element) &&
    new IdentifierUse({ ...element, value: identifierUseKind || element.value })
  );
};

const fromPrimitiveDateFhir = (
  primitive?: string,
  element: IPrimitiveDateTime = emptyDate
): any => {
  const value = moment(primitive || element.value)
    .startOf('day')
    .toDate();
  return (primitive || element) && new PrimitiveDateTime({ ...element, value });
};

const fromPrimitiveTimeFhir = (
  primitive?: string,
  element: IPrimitiveDateTime = emptyDate
): any => {
  const value = moment(primitive || element.value);
  return (primitive || element) && new PrimitiveDateTime({ ...element, value });
};

const fromPrimitiveDateTimeFhir = (
  primitive?: string,
  element: IPrimitiveDateTime = emptyDate
): any => {
  const value = moment(primitive || element.value);
  return (primitive || element) && new PrimitiveDateTime({ ...element, value });
};

const fromPrimitiveInstantFhir = (
  primitive?: string,
  element: IPrimitiveDateTime = emptyDate
): any => {
  const value = moment(primitive || element.value);
  return (primitive || element) && new PrimitiveDateTime({ ...element, value });
};

const fromPrimitiveMarkdownFhir = (
  primitive?: string,
  element: IPrimitiveMarkdown = emptyValue
): any => {
  return (
    (primitive || element) &&
    new PrimitiveMarkdown({ ...element, value: primitive || element.value })
  );
};

const fromPrimitiveOidFhir = fromPrimitiveStringFhir;
const fromPrimitiveIdFhir = fromPrimitiveStringFhir;
const fromNarrativeStatusFhir = fromPrimitiveStringFhir;
const fromContactPointSystemFhir = fromPrimitiveStringFhir;
const fromContactPointUseFhir = fromPrimitiveStringFhir;
const fromPrimitiveBase64BinaryFhir = fromPrimitiveStringFhir;
const fromPrimitiveUrlSchema = fromPrimitiveStringFhir;
const fromPrimitiveUuidFhir = fromPrimitiveStringFhir;
const fromPrimitiveXhtmlFhir = fromPrimitiveStringFhir;
const fromDayOfWeekFhir = fromPrimitiveStringFhir;
const fromEventTimingFhir = fromPrimitiveStringFhir;
const fromCurrencyCode = fromPrimitiveStringFhir;
const fromNameUseFhir = fromPrimitiveStringFhir;
const fromUnitOfTimeFhir = fromPrimitiveStringFhir;

const fromAgeFhir = (data: R4.IAge): any => {
  const { id, extension, code, comparator, value, unit, system } = data;
  const { _code, _comparator, _value, _unit, _system } = data;
  return new Age({
    _id: id,
    extension,
    _value: value && fromPrimitiveDecimalFhir(value, _value),
    _comparator:
      comparator && fromQuantityComparatorFhir(comparator, _comparator),
    _unit: unit && fromPrimitiveStringFhir(unit, _unit),
    _system: system && fromPrimitiveUriFhir(system, _system),
    _code: code && fromPrimitiveCodeFhir(code, _code),
  });
};

const fromMoneyFhir = (data: R4.IMoney): any => {
  const { id, extension, value, currency } = data;
  const { _value, _currency } = data;

  return new Money({
    id,
    extension,
    value: fromPrimitiveDecimalFhir(value, _value),
    currency: fromCurrencyCode(currency, _currency),
  });
};

const fromTimingRepeatFhir = (data: R4.ITiming_Repeat): any => {
  const {
    id,
    extension,
    modifierExtension,
    boundsDuration,
    boundsRange,
    boundsPeriod,
    count,
    countMax,
    duration,
    durationMax,
    durationUnit,
    frequency,
    frequencyMax,
    period,
    periodMax,
    periodUnit,
    dayOfWeek,
    timeOfDay,
    when,
    offset,
  } = data;
  const {
    _count,
    _countMax,
    _duration,
    _durationMax,
    _durationUnit,
    _frequency,
    _frequencyMax,
    _period,
    _periodUnit,
    _dayOfWeek,
    _timeOfDay,
    _when,
    _offset,
  } = data;
  return new TimingRepeat({
    id,
    extension,
    modifierExtension,
    boundsDuration: boundsDuration && fromDurationFhir(boundsDuration),
    boundsRange: boundsRange && fromRangeFhir(boundsRange),
    boundsPeriod: boundsPeriod && fromPeriodFhir(boundsPeriod),
    _count: fromPrimitivePositiveIntFhir(count, _count),
    _countMax: fromPrimitivePositiveIntFhir(countMax, _countMax),
    _duration: duration && fromPrimitiveDecimalFhir(duration, _duration),
    _durationMax: fromPrimitiveDecimalFhir(durationMax, _durationMax),
    _durationUnit: fromUnitOfTimeFhir(durationUnit, _durationUnit),
    _frequency: fromPrimitivePositiveIntFhir(frequency, _frequency),
    _frequencyMax: fromPrimitivePositiveIntFhir(frequencyMax, _frequencyMax),
    _period: fromPrimitiveDecimalFhir(period, _period),
    _periodMax: fromPrimitiveDecimalFhir(periodMax),
    _periodUnit: fromUnitOfTimeFhir(periodUnit, _periodUnit),
    _dayOfWeek: dayOfWeek?.map((obj, index) =>
      fromDayOfWeekFhir(obj, _dayOfWeek && _dayOfWeek[index])
    ),
    _timeOfDay: timeOfDay?.map((obj, index) =>
      fromPrimitiveTimeFhir(obj, _timeOfDay && _timeOfDay[index])
    ),
    _when: when?.map((obj, index) =>
      fromEventTimingFhir(obj, _when && _when[index])
    ),
    _offset: fromPrimitiveUnsignedIntFhir(offset, _offset),
  });
};

const fromTimingFhir = (data: R4.ITiming): any => {
  const { id, extension, modifierExtension, event, repeat, code } = data;
  const { _event } = data;

  return new Timing({
    id,
    extension,
    modifierExtension,
    _event: event?.map((obj, index) =>
      fromPrimitiveDateTimeFhir(obj, _event && _event[index])
    ),
    repeat: repeat && fromTimingRepeatFhir(repeat),
    code: code && fromCodeableConceptFhir(code),
  });
};

const fromQuantityFhir = (data: R4.IQuantity): any => {
  const { id, extension, value, comparator, unit, system, code } = data;
  const { _value, _comparator, _unit, _system, _code } = data;
  return {
    id,
    extension: extension && extension.map((obj) => fromExtensionFhir(obj)),
    _value: fromPrimitiveDecimalFhir(value, _value),
    _comparator: fromQuantityComparatorFhir(comparator, _comparator),
    _unit: fromPrimitiveStringFhir(unit, _unit),
    _system: fromPrimitiveUriFhir(system, _system),
    code: fromPrimitiveCodeFhir(code, _code),
  };
};

const fromDurationFhir = (data: R4.IDuration): any => {
  const { id, extension, value, comparator, unit, system, code } = data;
  const { _value, _comparator, _unit, _system, _code } = data;
  return {
    id,
    extension: extension && extension.map((obj) => fromExtensionFhir(obj)),
    _value: fromPrimitiveDecimalFhir(value, _value),
    _comparator: fromQuantityComparatorFhir(comparator, _comparator),
    _unit: fromPrimitiveStringFhir(unit, _unit),
    _system: fromPrimitiveUriFhir(system, _system),
    code: fromPrimitiveCodeFhir(code, _code),
  };
};

const fromSimpleQuantityFhir = fromQuantityFhir;

const fromRangeFhir = (range: R4.IRange): any => {
  const { low, high } = range;
  return new Range({
    low: low && fromQuantityFhir(low),
    high: high && fromQuantityFhir(high),
  });
};

const fromRatioFhir = (ratio: R4.IRatio): any => {
  const { id, extension, numerator, denominator } = ratio;
  return new Ratio({
    _id: id,
    extension,
    numerator: numerator && fromQuantityFhir(numerator),
    denomenator: denominator && fromQuantityFhir(denominator),
  });
};

const fromCountFhir = fromQuantityFhir;
const fromDistanceFhir = fromQuantityFhir;

const fromCodingFhir = (coding: R4.ICoding): any => {
  const {
    id,
    extension,
    code,
    system,
    version,
    display,
    userSelected,
  } = coding;
  const { _code, _system, _version, _display, _userSelected } = coding;
  return new Coding({
    _id: id,
    extension,
    _system: fromPrimitiveStringFhir(system, _system),
    _version: fromPrimitiveStringFhir(version, _version),
    _code: fromPrimitiveStringFhir(code, _code),
    _display: fromPrimitiveStringFhir(display, _display),
    _userSelected: fromPrimitiveBooleanFhir(userSelected, _userSelected),
  });
};

const fromCodeableConceptFhir = (codeableConcept: R4.ICodeableConcept): any => {
  const { coding, text } = codeableConcept;
  return new CodeableConcept({
    coding: coding?.map((obj) => fromCodingFhir(obj)),
    text: text && fromPrimitiveStringFhir(text),
  });
};

const fromIdentifierFhir = (identifier: IIdentifier): any => {
  const { use, type, system, value, assigner } = identifier;
  return new Identifier({
    use: use && fromIdentifierUseFhir(use),
    type: type && fromCodeableConceptFhir(type),
    system: system && fromPrimitiveUriFhir(system),
    value: value && fromPrimitiveStringFhir(value),
    assigner: assigner && fromReferenceFhir(assigner),
  });
};

const fromReferenceFhir = (value: R4.IReference): any => {
  const { reference, type, identifier, display } = value;
  return new Reference({
    _reference: reference && fromPrimitiveStringFhir(reference),
    _type: type && fromPrimitiveStringFhir(type),
    identifier: identifier && fromIdentifierFhir(identifier),
    _display: display && fromPrimitiveStringFhir(display),
  });
};

const fromExtensionFhir = (value?: IExtension): any => {
  return new Extension({ ...value });
};

const fromAnnotationFhir = (data: R4.IAnnotation): any => {
  const { authorReference, authorString, extension, time, text } = data;
  return new Annotation({
    authorReference: authorReference && fromReferenceFhir(authorReference),
    authorString: authorString && fromPrimitiveStringFhir(authorString),
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    _time: time && fromPrimitiveDateTimeFhir(time),
    text: text && fromPrimitiveMarkdownFhir(text),
  });
};

const fromMetaFhir = (data: R4.IMeta): any => {
  const {
    id,
    extension,
    versionId,
    lastUpdated,
    source,
    profile,
    security,
    tag,
  } = data;
  const { _source } = data;
  return new Meta({
    _id: id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    versionId: fromPrimitiveIdFhir(versionId),
    _lastUpdated: fromPrimitiveDateTimeFhir(lastUpdated),
    _source: fromPrimitiveUriFhir(source, _source),
    profile,
    security: security?.map((obj) => fromCodingFhir(obj)),
    tag: tag?.map((tag) => fromCodingFhir(tag)),
  });
};

const fromNarattiveFhir = (data: INarrative): any => {
  const { div, id, extension, status } = data;
  const { _status } = data;
  return new Narrative({
    div,
    id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    _status: fromNarrativeStatusFhir(status, _status),
  });
};

const fromPeriodFhir = (data: IPeriod): any => {
  const { id, extension, start, end } = data;
  const { _start, _end } = data;
  return new Period({
    _id: id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    _start: fromPrimitiveDateTimeFhir(start, _start),
    _end: fromPrimitiveDateTimeFhir(end, _end),
  });
};

const fromSampledDataFhir = (data: R4.ISampledData): any => {
  const {
    id,
    extension,
    origin,
    period,
    factor,
    lowerLimit,
    upperLimit,
    dimensions,
  } = data;
  return new SampledData({
    _id: id,
    extension,
    origin: fromSimpleQuantityFhir(origin),
    _period: fromPrimitiveDecimalFhir(period),
    _factor: fromPrimitiveDecimalFhir(factor),
    _lowerLimit: fromPrimitiveDecimalFhir(lowerLimit),
    _upperLimit: fromPrimitiveDecimalFhir(upperLimit),
    _dimensions: fromPrimitivePositiveIntFhir(dimensions),
  });
};

const fromContactPointFhir = (data: IContactPoint): any => {
  const { system, value, use, rank, period } = data;
  return new ContactPoint({
    system: fromContactPointSystemFhir(system),
    value: fromPrimitiveStringFhir(value),
    use: fromContactPointUseFhir(use),
    rank: rank && fromPrimitivePositiveIntFhir(rank),
    period: period && fromPeriodFhir(period),
  });
};

const fromHumanNameFhir = (data: IHumanName): any => {
  const {
    id,
    extension,
    use,
    text,
    family,
    given,
    prefix,
    suffix,
    period,
  } = data;
  const { _use, _text, _family, _given, _prefix, _suffix } = data;

  return new HumanName({
    id,
    extension,
    _use: use && fromPrimitiveStringFhir(use, _use),
    _text: text && fromPrimitiveStringFhir(text, _text),
    _family: family && fromPrimitiveStringFhir(family, _family),
    _given: given?.map((obj, index) =>
      fromPrimitiveStringFhir(obj, _given && _given[index])
    ),
    _prefix: prefix?.map((obj, index) =>
      fromPrimitiveStringFhir(obj, _prefix && _prefix[index])
    ),
    _suffix: suffix?.map((obj, index) =>
      fromPrimitiveStringFhir(obj, _suffix && _suffix[index])
    ),
    period: period && fromPeriodFhir(period),
  });
};

const fromAddressFhir = (data: IAddress): any => {
  const {
    id,
    extension,
    use,
    type,
    text,
    line,
    city,
    district,
    state,
    postalCode,
    country,
    period,
  } = data;
  const {
    _use,
    _type,
    _text,
    _line,
    _city,
    _district,
    _state,
    _postalCode,
    _country,
  } = data;
  return new Address({
    _id: id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    _use: fromPrimitiveStringFhir(use, _use),
    _type: fromPrimitiveStringFhir(type, _type),
    _text: fromPrimitiveStringFhir(text, _text),
    _line: line?.map((obj, index) =>
      fromPrimitiveStringFhir(obj, _line && _line[index])
    ),
    _city: fromPrimitiveStringFhir(city, _city),
    _district: fromPrimitiveStringFhir(district, _district),
    _state: fromPrimitiveStringFhir(state, _state),
    _postalCode: fromPrimitiveStringFhir(postalCode, _postalCode),
    _country: fromPrimitiveStringFhir(country, _country),
    period: period && fromPeriodFhir(period),
  });
};

const fromAttachmentFhir = (attachment: IAttachment): any => {
  const {
    id,
    extension,
    contentType,
    language,
    data,
    url,
    size,
    hash,
    title,
    creation,
  } = attachment;
  const {
    _contentType,
    _language,
    _data,
    _url,
    _size,
    _hash,
    _title,
    _creation,
  } = attachment;

  return new Attachment({
    _id: id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    _contentType: fromPrimitiveStringFhir(contentType, _contentType),
    _language: fromPrimitiveCodeFhir(language, _language),
    _data: fromPrimitiveBase64BinaryFhir(data, _data),
    _url: fromPrimitiveUrlFhir(url, _url),
    _size: size && fromPrimitiveUnsignedIntFhir(size, _size),
    _hash: hash && fromPrimitiveBase64BinaryFhir(hash, _hash),
    _title: fromPrimitiveStringFhir(title, _title),
    _creation: fromPrimitiveDateTimeFhir(creation, _creation),
  });
};

const fromPatientContactFhir = (data: IPatient_Contact): any => {
  const {
    id,
    extension,
    modifierExtension,
    relationship,
    name,
    telecom,
    address,
    gender,
    organization,
    period,
  } = data;
  const { _gender } = data;

  return new PatientContact({
    _id: id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    modifierExtension: modifierExtension?.map((obj) => fromExtensionFhir(obj)),
    relationship: relationship?.map((obj) => fromCodeableConceptFhir(obj)),
    name: name && fromHumanNameFhir(name),
    telecom: telecom?.map((obj) => fromContactPointFhir(obj)),
    address: address && fromAddressFhir(address),
    _gender: fromPrimitiveStringFhir(gender, _gender),
    organization: organization && fromReferenceFhir(organization),
    period: period && fromPeriodFhir(period),
  });
};

const fromPatientCommunicationFhir = (data: IPatient_Communication): any => {
  const { language, id, extension, modifierExtension, preferred } = data;
  const { _preferred } = data;

  return new PatientCommunication({
    _id: id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    language: fromCodeableConceptFhir(language),
    modifierExtension: modifierExtension?.map((obj) => fromExtensionFhir(obj)),
    _preferred: fromPrimitiveBooleanFhir(preferred, _preferred),
  });
};

const fromPatientLink = (data: IPatient_Link): any => {
  const { id, extension, modifierExtension, type } = data;
  const { _type } = data;
  return new PatientLink({
    _id: id,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    modifierExtension: modifierExtension?.map((obj) => fromExtensionFhir(obj)),
    _type: fromPrimitiveStringFhir(type, _type),
  });
};

//Patient
const fromPatientFhir = (data: R4.IPatient): any => {
  const {
    resourceType,
    id,
    meta,
    implicitRules,
    language,
    text,
    contained,
    extension,
    modifierExtension,
    identifier,
    active,
    name,
    telecom,
    gender,
    birthDate,
    deceasedBoolean,
    deceasedDateTime,
    address,
    maritalStatus,
    multipleBirthBoolean,
    multipleBirthInteger,
    photo,
    contact,
    communication,
    generalPractitioner,
    managingOrganization,
    link,
  } = data;
  const {
    _implicitRules,
    _language,
    _active,
    _gender,
    _birthDate,
    _deceasedBoolean,
    _deceasedDateTime,
    _multipleBirthBoolean,
    _multipleBirthInteger,
  } = data;
  return new Patient({
    resourceType: resourceType || 'Patient',
    _id: id,
    meta: meta && fromMetaFhir(meta),
    _implicitRules:
      implicitRules && fromPrimitiveStringFhir(implicitRules, _implicitRules),
    _language: language && fromPrimitiveStringFhir(language, _language),
    text: text && fromNarattiveFhir(text),
    contained,
    extension: extension?.map((obj) => fromExtensionFhir(obj)),
    modifierExtension,
    identifier,
    _active: fromPrimitiveBooleanFhir(active, _active),
    name: name?.map((obj) => fromHumanNameFhir(obj)),
    telecom: telecom?.map((obj) => fromContactPointFhir(obj)),
    _gender: gender && fromPrimitiveStringFhir(gender, _gender),
    _birthDate: birthDate && fromPrimitiveDateTimeFhir(birthDate, _birthDate),
    _deceasedBoolean:
      deceasedBoolean &&
      fromPrimitiveBooleanFhir(deceasedBoolean, _deceasedBoolean),
    deceasedDateTime:
      deceasedDateTime &&
      fromPrimitiveDateTimeFhir(deceasedDateTime, _deceasedDateTime),
    address: address?.map((obj) => fromAddressFhir(obj)),
    maritalStatus: maritalStatus && fromCodeableConceptFhir(maritalStatus),
    _multipleBirthBoolean:
      multipleBirthBoolean &&
      fromPrimitiveBooleanFhir(multipleBirthBoolean, _multipleBirthBoolean),
    _multipleBirthInteger:
      multipleBirthInteger &&
      fromPrimitivePositiveIntFhir(multipleBirthInteger, _multipleBirthInteger),
    photo: photo?.map((obj) => fromAttachmentFhir(obj)),
    contact: contact?.map((obj) => fromPatientContactFhir(obj)),
    communication: communication?.map((obj) =>
      fromPatientCommunicationFhir(obj)
    ),
    generalPractitioner: generalPractitioner?.map((obj) =>
      fromReferenceFhir(obj)
    ),
    managingOrganization:
      managingOrganization && fromReferenceFhir(managingOrganization),
    link: link?.map((obj) => fromPatientLink(obj)),
  });
};

const fromBackboneElementFhir = (): any => {
  //FIXME: Should this be empty
  return {} as any;
};

export {
  fromAddressFhir,
  fromAgeFhir,
  fromAnnotationFhir,
  fromAttachmentFhir,
  fromBackboneElementFhir,
  fromCodeableConceptFhir,
  fromCodingFhir,
  fromContactPointFhir,
  fromContactPointSystemFhir,
  fromContactPointUseFhir,
  fromCountFhir,
  fromDayOfWeekFhir,
  fromDistanceFhir,
  fromDurationFhir,
  fromEventTimingFhir,
  fromExtensionFhir,
  fromHumanNameFhir,
  fromIdentifierFhir,
  fromIdentifierUseFhir,
  fromMoneyFhir,
  fromNameUseFhir,
  fromPatientFhir,
  fromPeriodFhir,
  fromPrimitiveBase64BinaryFhir,
  fromPrimitiveBooleanFhir,
  fromPrimitiveCanonicalFhir,
  fromPrimitiveCodeFhir,
  fromPrimitiveDateFhir,
  fromPrimitiveDateTimeFhir,
  fromPrimitiveDecimalFhir,
  fromPrimitiveIdFhir,
  fromPrimitiveInstantFhir,
  fromPrimitiveIntFhir,
  fromPrimitiveMarkdownFhir,
  fromPrimitiveOidFhir,
  fromPrimitivePositiveIntFhir,
  fromPrimitiveStringFhir,
  fromPrimitiveTimeFhir,
  fromPrimitiveUnsignedIntFhir,
  fromPrimitiveUriFhir,
  fromPrimitiveUrlSchema,
  fromPrimitiveUuidFhir,
  fromPrimitiveXhtmlFhir,
  fromQuantityComparatorFhir,
  fromQuantityFhir,
  fromRangeFhir,
  fromRatioFhir,
  fromSampledDataFhir,
  fromSignatureFhir,
  fromSimpleQuantityFhir,
  fromTimingFhir,
  fromTimingRepeatFhir,
  fromUnitOfTimeFhir,
};
