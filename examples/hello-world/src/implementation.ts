import { a } from '@vardario/apimda/core';
import { createAwsLambdaHandler } from '@vardario/apimda/server';
import { helloController } from './definition.js';

export const helloImpl = a.implement(helloController, {
  hello: async ({ message }) => `Hello ${message ?? 'world'}`
});

export const handler = createAwsLambdaHandler(helloImpl);
