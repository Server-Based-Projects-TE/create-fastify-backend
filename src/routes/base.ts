import { FastifyInstance } from 'fastify';
import version from 'src/config/version.json';

export const baseRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });
  fastify.get('/version', async () => {
    return version;
  });
};
