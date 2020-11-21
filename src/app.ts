import fastifySession, { MemoryStore } from '@mgcrea/fastify-session';
import { RedisStore } from '@mgcrea/fastify-session-redis-store';
import createFastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifyCookie from 'fastify-cookie';
import fastifyPassport from 'fastify-passport';
import Redis from 'ioredis';
import { IS_PROD, IS_TEST, REDIS_URI, SESSION_KEY, SESSION_TTL } from './config/env';
import { DEFAULT_LOGGER } from './config/logger';
import { LocalStrategy } from './config/passport/LocalStrategy';
import { deserializeFromSession, serializeIntoSession } from './config/passport/session';
import { fastifyAuth, FastifyAuthPluginOptions } from './plugins/auth';
import { baseRoutes, sessionsRoutes, usersRoutes } from './routes';

export type BuildFastifyOptions = FastifyServerOptions & FastifyAuthPluginOptions;

export const buildFastify = (options: BuildFastifyOptions = {}): FastifyInstance => {
  const { logger = DEFAULT_LOGGER, ...otherOptions } = options;
  const fastify = createFastify({ logger, ...otherOptions });

  // Support sessions using cookies
  fastify.register(fastifyCookie);
  fastify.register(fastifySession, {
    store: IS_TEST ? new MemoryStore() : new RedisStore({ client: new Redis(REDIS_URI), ttl: SESSION_TTL }),
    key: SESSION_KEY,
    cookie: { secure: IS_PROD ? true : false, maxAge: SESSION_TTL },
  });

  // Initialize passport
  fastify.register(fastifyPassport.initialize());
  // - with support for sessions
  fastify.register(fastifyPassport.secureSession());
  fastifyPassport.registerUserSerializer(serializeIntoSession);
  fastifyPassport.registerUserDeserializer(deserializeFromSession);
  // - with specific auth strategies
  fastifyPassport.use(new LocalStrategy());
  // - and auth helper plugin
  fastify.register(fastifyAuth, {
    bypassAuth: options.bypassAuth,
  });

  // Register routes
  fastify.register(baseRoutes);
  fastify.register(sessionsRoutes);
  fastify.register(usersRoutes);

  return fastify;
};
