import { ILogger } from '@/application/shared/logger';

class LoggerAdapter implements ILogger {
  info = (data: unknown): void => {
    console.log(data);
  };
}

const loggerAdapter = new LoggerAdapter();

export { loggerAdapter };
