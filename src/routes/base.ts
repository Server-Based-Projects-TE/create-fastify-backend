import { FastifyInstance } from 'fastify';
import version from 'src/config/release.json';
import { createError } from 'src/utils';

export const baseRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  fastify.get('/version', async () => {
    return version;
  });

  fastify.get('/500', async () => {
    throw createError(500);
  });
};
