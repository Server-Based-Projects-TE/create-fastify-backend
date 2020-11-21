import { FastifyPluginAsync, onRequestHookHandler } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { IS_TEST } from 'src/config/env';
import { createError } from 'src/utils';

export type FastifyAuthPluginOptions = {
  bypassAuth?: boolean;
};

export const fastifyAuthPlugin: FastifyPluginAsync<FastifyAuthPluginOptions> = async (
  fastify,
  options
): Promise<void> => {
  const { bypassAuth } = options;
  const requireUser = (): onRequestHookHandler => async (request) => {
    if (IS_TEST && bypassAuth) {
      return;
    }
    if (!request.isAuthenticated()) {
      throw createError(401);
    }
  };
  fastify.decorate('requireUser', requireUser);
};

export const fastifyAuth = fastifyPlugin(fastifyAuthPlugin);

declare module 'fastify' {
  interface FastifyInstance {
    requireUser: () => onRequestHookHandler;
  }
}
