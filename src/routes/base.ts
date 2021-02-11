import { FastifyInstance } from 'fastify';
import release from 'src/config/release.json';
import { createError } from 'src/utils';

export const baseRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  fastify.get('/healthz', async () => {
    return { ok: 1 };
  });

  fastify.get('/version', async () => {
    return release;
  });

  fastify.get('/500', async () => {
    throw createError(500);
  });
};
