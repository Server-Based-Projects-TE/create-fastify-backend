import { FastifyInstance } from 'fastify';
import { User } from 'src/typings';

const USERS: User[] = [
  { id: '1', username: 'foo' },
  { id: '2', username: 'bar' },
  { id: '3', username: 'baz' },
];

export const usersRoutes = async (fastify: FastifyInstance): Promise<void> => {
  // const collection = fastify.mongo.db.collection('test_collection')

  fastify.get('/users', async () => {
    // const result = await collection.find().toArray();
    const result = USERS;
    if (result.length === 0) {
      throw new Error('No documents found');
    }
    return result;
  });

  fastify.get<{ Params: { user: string } }>('/users/:user', async (request) => {
    // const result = await collection.findOne({ user: request.params.user });
    const { user: userId } = request.params;
    const result = USERS.find(({ id }) => id === userId);
    if (!result) {
      throw new Error('Invalid value');
    }
    return result;
  });
};
