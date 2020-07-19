import fs from 'fs';

import { logger } from '../logger';

const noCertificateErrorMessage =
  '\n--------------------------------------------------------------------------------------------\n' +
  '  NOTE:\n' +
  '  You must set up a self-signed certificate in order to run the site locally with HTTPS.\n' +
  '  To do that, run these commands in the terminal:\n' +
  '  > openssl genrsa -out server.key 2048\n' +
  '  > openssl req -new -x509 -key server.key -out server.cert -days 365\n' +
  '  Then, move both server.key and server.cert to the root of your project.\n' +
  '  More info: https://www.thepolyglotdeveloper.com/2018/11/create-self-signed-certificate-nodejs-macos/\n' +
  '--------------------------------------------------------------------------------------------\n';

const getLocalSslConfig = () => {
  const config = {};
  try {
    config.key = fs.readFileSync('server.key');
    config.cert = fs.readFileSync('server.cert');
  } catch (error) {
    if (error.code === 'ENOENT') {
      logger.error(noCertificateErrorMessage);
      throw error;
    }
  }
  return config;
};

export default getLocalSslConfig;
