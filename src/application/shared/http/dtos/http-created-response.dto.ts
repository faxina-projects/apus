import { HttpStatus } from '../configs';
import { HttpSuccessResponseDTO } from './http-success-response.dto';

export class HttpCreatedResponseDTO<D = any> extends HttpSuccessResponseDTO {
  public readonly data?: D;

  constructor(message: string, data?: D) {
    super(message, data, HttpStatus.CREATED);

    this.data = data;
  }
}
