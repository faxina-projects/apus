import { ILogger } from '@/application/shared/logger';
import { loggerAdapter } from '@/infrastructure/driven-adapters';

import { IRequest, NextFunction, Response } from '../app/core';
import { IMiddleware } from './middleware.interface';

class LoggerMiddleware implements IMiddleware {
  constructor(private readonly logger: ILogger) {}

  handle = (
    _exception: Error,
    request: IRequest,
    _response: Response<unknown, Record<string, unknown>>,
    next: NextFunction,
  ): void => {
    this.logger.info(`${request.method} ${request.path}`);
    next();
  };
}

const loggerMiddleware = new LoggerMiddleware(loggerAdapter);

export { loggerMiddleware };
