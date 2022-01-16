import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class GenerateAccessTokenException extends InternalServerErrorException {
  constructor(error?: unknown, data?: unknown) {
    super('Failed to generate access token', undefined, error, data);
  }
}

export { GenerateAccessTokenException };
