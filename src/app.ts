import fastify from 'fastify';

// Require the framework and instantiate it
export const app = fastify({
  logger: {
    prettyPrint: {
      colorize: true,
      ignore: 'pid,hostname',
    },
  },
});

// Declare a route
app.get('/', async (request, reply) => {
  return { hello: 'world' };
});
