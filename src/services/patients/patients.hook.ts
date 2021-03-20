// Don't remove this comment. It's needed to format import lines nicely.

import { R4 } from '@ahryman40k/ts-fhir-types';
import { HookContext } from '@feathersjs/feathers';
import { isLeft } from 'fp-ts/lib/Either';

import { FhirResource, Messages } from '../../db';
import { toMongoObj } from '../helpers';

const injectResourceType = (context: HookContext): any => {
  const { data } = context;
  data.resourceType = FhirResource.Patient;
  return context;
};

const transformData = (context: HookContext): any => {
  context.data = toMongoObj(context.data);
  return context;
};

const validate = (context: HookContext): any => {
  const { data } = context;
  data.resourceType = FhirResource.Patient;
  const validationResult = R4.RTTI_Patient.decode(data);
  if (isLeft(validationResult)) {
    throw Error(Messages.invalidParam);
  }
  return context;
};

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [injectResourceType, validate, transformData],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [
      (context: HookContext): any => {
        console.error(
          `Error in ${context.path} calling ${context.method}  method`
        );

        return context;
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },
};
