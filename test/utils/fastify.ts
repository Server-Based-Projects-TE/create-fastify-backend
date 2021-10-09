import { buildFastify } from 'src/app';

export const buildTestFastify: typeof buildFastify = (options) => {
  const fastify = buildFastify(options);
  // Test related plugins can be registered here
  return fastify;
};
