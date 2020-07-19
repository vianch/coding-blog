const winston = require('winston');

const timeStampFormat = 'YYYY-MM-DD HH:mm:ss';

const logger = () =>
  winston.createLogger({
    defaultMeta: { stage: process.env.NODE_ENV },
    format: winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.timestamp({ format: timeStampFormat }),
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: winston.format.json(),
      }),
      new winston.transports.File({
        filename: 'logs/combined.log',
        format: winston.format.json(),
      }),
    ],
  });

/**
 * Server Logger.
 * Currently only supports four levels.
 * @param {string}  message - string to be logged
 * @param {Object?} options - object to be logged as structured data.
 */
export const serverLogger = {
  debug(...args) {
    logger().debug(...args);
  },
  error(...args) {
    logger().error(...args);
  },
  info(...args) {
    logger().info(...args);
  },
  logException(e, ...msgArgs) {
    logger().error(e, ...msgArgs);
  },
  warn(...args) {
    logger().warn(...args);
  },
};
