import { ConflictException } from '@/application/shared/http/exceptions';

class UserAlreadyExistsException extends ConflictException {
  constructor(data?: unknown) {
    super('User already exists', undefined, undefined, data);
  }
}

export { UserAlreadyExistsException };
