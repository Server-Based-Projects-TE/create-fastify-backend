import createFastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifyCookie from 'fastify-cookie';
import { RedisStore } from 'fastify-redis-session';
import fastifySession, { MemoryStore } from '@mgcrea/fastify-session';
import Redis from 'ioredis';
import { IS_PROD, IS_TEST, REDIS_URI, SESSION_SECRET, SESSION_TTL } from './config/env';
import { basicRoutes, usersRoutes } from './routes';

export const buildFastify = (options?: FastifyServerOptions): FastifyInstance => {
  const fastify = createFastify(options);

  fastify.register(fastifyCookie);
  fastify.register(fastifySession, {
    store: IS_TEST ? new MemoryStore() : new RedisStore({ client: new Redis(REDIS_URI), ttl: SESSION_TTL }),
    secret: SESSION_SECRET,
    cookie: { secure: IS_PROD ? true : false, maxAge: SESSION_TTL },
  });

  fastify.register(basicRoutes);
  fastify.register(usersRoutes);

  // fastify.addHook('preHandler', (request, reply, next) => {
  //   request.session.user = { name: 'max' };
  //   next();
  // });

  return fastify;
};
