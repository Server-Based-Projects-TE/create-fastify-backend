import { User } from 'src/typings';
// import fastifyPassport from 'fastify-passport';
import { DeserializeFunction, SerializeFunction } from 'fastify-passport/dist/Authenticator';

export type SerializedUser = User['id'];
export type DeserializedUser = Pick<User, 'id' | 'username'>;

export const serializeIntoSession: SerializeFunction<DeserializedUser, SerializedUser> = async (user: User) => user.id;
export const deserializeFromSession: DeserializeFunction<SerializedUser, DeserializedUser> = async (
  id: string
): Promise<DeserializedUser> => {
  return { id, username: 'foo' };
};
