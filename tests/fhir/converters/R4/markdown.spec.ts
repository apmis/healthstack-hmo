import 'mocha';

import { R4 } from '@ahryman40k/ts-fhir-types';
import { expect } from 'chai';

import { fromPrimitiveMarkdownFhir } from '../../../../src/mongoose/converters/R4';
import { IPrimitiveMarkdown } from '../../../../src/mongoose/rtti/common';
import { Elements, Primitives } from '../../stubs';

describe('Markdown FHIR JSON to Mongo BSON Converters', () => {
  describe('Markdown', () => {
    it('should deserialise markdown value', () => {
      const markdownJSON = Elements.Markdown;
      const markdown: IPrimitiveMarkdown = fromPrimitiveMarkdownFhir(
        markdownJSON
      );
      //TODO: Below commented code
      //assertReference()
      console.log(JSON.stringify({ markdownJSON, markdown }));
      expect(markdown.value).to.equal(Primitives.MarkDown);
    });
  });
});
