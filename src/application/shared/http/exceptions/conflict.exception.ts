import { HttpMessages, HttpStatus } from '../configs';
import { HttpBaseException } from './http-base.exception';

class ConflictException extends HttpBaseException {
  constructor(
    message: string = HttpMessages.CONFLICT,
    reason?: string,
    error?: unknown,
    data?: unknown,
  ) {
    super(message, reason, HttpStatus.CONFLICT, error, data);
  }
}

export { ConflictException };
