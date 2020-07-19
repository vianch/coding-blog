import express from 'express';
import { createServer } from 'https';
import next from 'next';

import { environmentSetup } from '../config/server/env';
import { environments } from '../config/common/constants';
import getLocalSslConfig from '../config/common/ssl.utils';
import { logger } from '../config/logger';

environmentSetup();

const {
  RUNNING_LOCAL_INSTANCE = false,
  SERVER_PORT = 3001,
  SERVER_HOST,
  NODE_ENV = environments.DEVELOPMENT,
} = process.env;

const app = next({
  dev: NODE_ENV === environments.DEVELOPMENT,
});

const run = async () => {
  try {
    await app.prepare();

    const expressServer = express();
    expressServer.get('*', app.getRequestHandler());

    const server = RUNNING_LOCAL_INSTANCE
      ? createServer(getLocalSslConfig(), expressServer) // Run https server locally
      : expressServer; // No need to configure https for AWS

    server.listen(SERVER_PORT, (error) => {
      if (error) {
        throw logger.error(error);
      }

      if (NODE_ENV === environments.DEVELOPMENT) {
        logger.info(`NODE_ENV: ${NODE_ENV}`);
      }

      logger.info(`> Server ready on ${SERVER_HOST}:${SERVER_PORT}`);
    });
  } catch (error) {
    logger.error('Fatal error starting express server: ', error);
    process.exit(1);
  }
};

run();
