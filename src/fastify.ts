import createFastify from 'fastify';
import { logger } from './config/logger';
import { basicRoutes, usersRoutes } from './routes';

export const fastify = createFastify({
  logger,
});

export const log = fastify.log;

fastify.register(basicRoutes);
fastify.register(usersRoutes);
