import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class GenerateDateNowException extends InternalServerErrorException {
  constructor(error?: any) {
    super('Failed to generate date now', undefined, error);
  }
}

export { GenerateDateNowException };
