import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class UpdateUserException extends InternalServerErrorException {
  constructor(data?: unknown) {
    super('Failed to update user', undefined, undefined, data);
  }
}
export { UpdateUserException };
