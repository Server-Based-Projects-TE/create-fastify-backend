import { FastifyRequest } from 'fastify';
import { Strategy } from 'fastify-passport';
import { createError } from 'src/utils';
import { DeserializedUser, deserializeFromSession } from './session';

type FastifyLocalAuthenticateRequest = FastifyRequest<{ Body: { username: string; password: string } }>;

const authenticateAsync = async (request: FastifyLocalAuthenticateRequest): Promise<DeserializedUser> => {
  const { body } = request;
  const { username, password } = body;
  if (!username || !password) {
    throw createError(400, 'Missing username or password');
  }
  if (password !== 'bar') {
    throw createError(403, 'Invalid username or password');
  }
  const foundUser = { id: '1', username };
  const deserializedUser = deserializeFromSession(foundUser.id, request);
  return deserializedUser;
};

export class LocalStrategy extends Strategy {
  constructor() {
    super('local');
  }
  authenticate(request: FastifyLocalAuthenticateRequest): void {
    authenticateAsync(request).then(this.success).catch(this.error);
  }
}
