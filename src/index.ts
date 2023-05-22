import * as dotenv from 'dotenv';
import logger from './logger';

dotenv.config();
logger.debug(process.env.EXAMPLE_VAR);
