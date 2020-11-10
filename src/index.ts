import { log } from 'console';
import { app } from './app';
import { NODE_HOST, NODE_PORT } from './config/env';

// Run the server!
app.listen(NODE_PORT, NODE_HOST, function (err, address) {
  if (err) {
    app.log.error(err.message, err.stack);
    process.exit(1);
  }
  // app.log.info(`server listening on ${address}`);
});
