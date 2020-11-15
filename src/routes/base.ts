import { FastifyInstance } from 'fastify';
import { PACKAGE_NAME, PACKAGE_VERSION } from 'src/config/env';
import release from 'src/config/release.json';
import { createError } from 'src/utils';

export const baseRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  fastify.get('/version', async () => {
    return { name: PACKAGE_NAME, version: PACKAGE_VERSION, release };
  });

  fastify.get('/500', async () => {
    throw createError(500);
  });
};
