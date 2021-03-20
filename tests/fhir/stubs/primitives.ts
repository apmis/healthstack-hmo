const Decimal = 12.02;
const IntegerZero = 0;
const IntegerPositive = 12;
const IntegerNegative = -12;
const String = 'string';
const StringUUID = '123e4567-e89b-12d3-a456-426614174000';
const StringSpace = 'string with spaces';
const StringSymbol = 'string * symbols';
const StringTimeMetric = 'years';

const StringContentType = 'application/pdf';
const StringLanguage = 'english';
const StringData = '$*(nwnjkwev232423m2348234*(@#';
const StringUrl = 'http://www.example.com';
const StringHash = 'wvwwevwevwerr23423v';
const StringSystem = 'unknown';
const StringCode = 'NG_12345';
const StringDisplay = 'unknown';
const StringVersion = '1.0';
const StringProfile = 'unknown';
const StringGeneric = 'generic';
const StringText = 'This is a test';
const StringValue = 'value';
const StringPersonName = 'John';
const StringChar = 'A';
const StringAddressLine = 'No 1, no street name';
const StringDistrict = 'Earth';
const StringCity = 'City';
const StringState = 'State';
const StringCountry = 'Country';
const StringTitle = 'Title';
const StringUri = 'http://example.com';
const Code = String;
const DateTime = new Date().toISOString();
const DateInstant = new Date().toUTCString();
const DateOnly = new Date().toISOString().substring(0, 10);
const Boolean = true;
const BooleanTrue = true;
const BooleanFalse = false;
const MarkDown = `
### List
- One
- Two
- Three
`;
const XHTML = '<div>hello</div>';

export {
  Boolean,
  BooleanFalse,
  BooleanTrue,
  Code,
  DateInstant,
  DateOnly,
  DateTime,
  Decimal,
  IntegerNegative,
  IntegerPositive,
  IntegerZero,
  MarkDown,
  StringAddressLine,
  StringChar,
  StringCity,
  StringCode,
  StringContentType,
  StringCountry,
  StringData,
  StringDisplay,
  StringDistrict,
  StringGeneric,
  StringHash,
  StringLanguage,
  StringPersonName,
  StringProfile,
  StringSpace,
  StringState,
  StringSymbol,
  StringSystem,
  StringText,
  StringTimeMetric,
  StringTitle,
  StringUri,
  StringUrl,
  StringUUID,
  StringValue,
  StringVersion,
  XHTML,
};
