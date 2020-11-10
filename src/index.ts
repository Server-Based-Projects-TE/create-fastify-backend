import { buildFastify } from './app';
import { NODE_HOST, NODE_PORT } from './config/env';
import { logger } from './config/logger';

const server = buildFastify({ logger });

server.listen(NODE_PORT, NODE_HOST, (err) => {
  if (err) {
    server.log.error(err.message, err.stack);
    process.exit(1);
  }
});
