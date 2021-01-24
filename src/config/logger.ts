/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { FastifyLoggerOptions, FastifyRequest } from 'fastify';
import { LOG_LEVEL } from './env';
import prettifier from '@mgcrea/pino-pretty-compact';

export const DEFAULT_LOGGER: FastifyLoggerOptions = {
  level: LOG_LEVEL,
  prettyPrint: {
    // colorize: true,
    // ignore: 'pid,hostname',
    // translateTime: true,
    // translateTime: 'yyyy-mm-dd HH:MM:ss.l',
    // levelFirst: true
  },
  prettifier,
  serializers: {
    // @ts-expect-error external typing error
    req(request: FastifyRequest) {
      return {
        id: request.id,
        method: request.method,
        url: request.url,
        hostname: request.hostname,
        remotePort: request.socket.remotePort,
        // Including the headers in the log could be in violation
        // of privacy laws, e.g. GDPR. You should use the "redact" option to
        // remove sensitive fields. It could also leak authentication data in
        // the logs.
        headers: request.headers,
      };
    },
  },
};
