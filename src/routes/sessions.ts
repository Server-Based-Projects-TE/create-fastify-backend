import { FastifyInstance } from 'fastify';
import fastifyPassport from 'fastify-passport';

export const sessionsRoutes = async (fastify: FastifyInstance): Promise<void> => {
  const { requireUser } = fastify;

  fastify.post(
    '/login',
    { preValidation: fastifyPassport.authenticate('local', { authInfo: false }) },
    async (request) => ({ ok: 1, user: request.user })
  );

  fastify.post('/logout', async (request) => {
    const { user } = request;
    await request.logout();
    if (user) {
      request.log.info(`Successful logout from ip="${request.ip}"`);
    }
    return { ok: 1 };
  });

  fastify.get('/me', { preValidation: requireUser() }, async (request) => {
    return request.user;
  });
};
