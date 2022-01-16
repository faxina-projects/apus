import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';

import { Request } from './request';

interface Controller<Body = any, Params = any, ResponseData = any> {
  handle: (
    request: Request<Body, Params>,
  ) => Promise<HttpSuccessResponseDTO<ResponseData>>;
}

export { Controller };
