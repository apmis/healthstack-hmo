import 'mocha';

import { R4 } from '@ahryman40k/ts-fhir-types';
import { IAnnotation } from '@ahryman40k/ts-fhir-types/lib/R4';
import { expect } from 'chai';

import { fromAnnotationFhir } from '../../../../src/mongoose/converters/from';
import { Elements, Primitives } from '../../stubs';

describe('Annotation FHIR JSON to Mongo BSON Converters', () => {
  describe('Annotation', () => {
    it('should deserialise all annotation attributes', () => {
      const annotationJSON: R4.IAnnotation = Elements.Annotation;
      const annotation = fromAnnotationFhir(annotationJSON);
      //TODO: Below commented code
      //assertReference()
      console.log(JSON.stringify({ annotationJSON, annotation }));
      expect(annotation.authorReference?._reference?.value).to.equal(
        Primitives.StringUUID
      );
      expect(annotation.authorString.value).to.equal(
        Primitives.StringPersonName
      );
      expect(new Date(annotation._time.value).getTime()).to.equal(
        new Date(Primitives.DateTime).getTime()
      );
      expect(annotation.text.value).to.equal(Primitives.MarkDown);
    });
  });
});
