import { createLogger, transports } from 'winston';

export default createLogger({
  level: 'debug',
  transports: [
    new transports.Console(),
  ],
});
