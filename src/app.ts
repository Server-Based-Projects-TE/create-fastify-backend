import createFastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import { basicRoutes, usersRoutes } from './routes';

export const buildFastify = (options?: FastifyServerOptions): FastifyInstance => {
  const fastify = createFastify(options);
  fastify.register(basicRoutes);
  fastify.register(usersRoutes);
  return fastify;
};
