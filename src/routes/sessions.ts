import { FastifyInstance } from 'fastify';
import fastifyPassport from 'fastify-passport';
import { createError } from 'src/utils';

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

  fastify.post<{ Body: { username: string; password: string } }>('/register', async (request) => {
    const { username, password } = request.body;
    if (!username || !password) {
      throw createError(400, 'Missing username or password');
    }
    const user = { id: 1, username, password };
    await request.logIn(user);
    return { ok: 1, user };
  });

  fastify.get('/me', { preValidation: requireUser() }, async (request) => {
    return request.user;
  });
};
