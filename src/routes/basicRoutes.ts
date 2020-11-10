import { FastifyInstance } from 'fastify';

export const basicRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });
};
