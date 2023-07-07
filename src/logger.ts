import { createLogger, format, transports } from 'winston';
import { TransformableInfo } from 'logform';

const { combine, timestamp, colorize, printf } = format;

// Define log format
const logFormat = printf(({ level, message, timestamp }: TransformableInfo) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create logger instance
export const logger = createLogger({
  format: combine(timestamp(), colorize(), logFormat),
  transports: [new transports.Console()],
});
