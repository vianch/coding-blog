import noop from 'lodash/noop';

/* Config */
import { environments } from '../constants';
import { serverLogger } from './logger';

/* Services */
const isClient = () => typeof window !== 'undefined';

const defaultLogger = {
  debug: noop,
  error: noop,
  info: noop,
  logException: noop,
  warn: noop,
};

export const isProduction = process.env.NODE_ENV === environments.PRODUCTION;
export const clientLogger = isProduction ? defaultLogger : console;
export const logger = isClient() ? clientLogger : serverLogger;
