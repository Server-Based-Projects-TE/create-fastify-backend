import { FastifyRequest } from 'fastify';
import { Strategy } from 'fastify-passport';
import { createError } from 'src/utils';
import { DeserializedUser, deserializeFromSession } from './session';

/*
import { FastifyRequest } from 'fastify';
export declare class Strategy {
    name: string;
    constructor(name: string);
    authenticate(request: FastifyRequest, options?: any): void;
    success: (user: any, info?: any) => void;
    fail: ((challenge?: any, status?: number) => void) | ((status?: number) => void);
    redirect: (url: string, status?: number) => void;
    pass: () => void;
    error: (err: Error) => void;
}
*/

type FastifyLocalAuthenticateRequest = FastifyRequest<{ Body: { username: string; password: string } }>;

const authenticateAsync = async (request: FastifyLocalAuthenticateRequest): Promise<DeserializedUser> => {
  const { body } = request;
  const { username, password } = body;
  if (!username || !password) {
    throw createError(400, 'Missing username or password');
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

// export const authenticateLocalAsync = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<DeserializedUser> =>
//   new Promise((resolve, reject) => {
//     passport.authenticate('local', (err, user) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       if (!user) {
//         reject(createError(500));
//         return;
//       }
//       // Persist into session
//       req.logIn(user, (err) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(user);
//       });
//     })(req, res, next);
//   });
