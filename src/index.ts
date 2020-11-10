import { fastify, log } from './fastify';
import { NODE_HOST, NODE_PORT } from './config/env';

// Run the server!
fastify.listen(NODE_PORT, NODE_HOST, (err) => {
  if (err) {
    log.error(err.message, err.stack);
    process.exit(1);
  }
  // app.log.info(`server listening on ${address}`);
});
