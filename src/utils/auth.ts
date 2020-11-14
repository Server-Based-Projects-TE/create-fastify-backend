import { RouteShorthandOptions } from 'fastify';
import { createError } from './errors';

export const requireUser: RouteShorthandOptions = {
  preValidation: async (request) => {
    console.dir(request.user);
    if (!request.isAuthenticated()) {
      throw createError(401);
    }
  },
};
