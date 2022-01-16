import { HttpMessages, HttpStatus } from '../configs';
import { HttpResponseDTO } from './http-response.dto';

export class HttpSuccessResponseDTO<D = any> extends HttpResponseDTO {
  public readonly data?: D;

  constructor(
    message: string = HttpMessages.OK,
    data?: D,
    httpStatus = HttpStatus.OK,
  ) {
    super(httpStatus, message);

    this.data = data;
  }
}
