import thungMiddleware from 'redux-thunk';
import { logger } from './logger.middleware';

export const middleware = [thungMiddleware, logger];