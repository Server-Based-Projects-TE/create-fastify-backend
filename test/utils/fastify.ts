import { buildFastify } from 'src/app';
import 'test/typings';

export const buildTestFastify: typeof buildFastify = (options) => {
  const fastify = buildFastify(options);
  // Test related plugins can be registered here
  return fastify;
};
