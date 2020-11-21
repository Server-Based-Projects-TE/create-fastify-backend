import { buildFastify } from './app';
import { NODE_HOST, NODE_PORT } from './config/env';
import './config/setup';

const server = buildFastify();

server.listen(NODE_PORT, NODE_HOST, (err) => {
  if (err) {
    server.log.error(`${err.message}\n${err.stack}`);
    process.exit(1);
  }
});
