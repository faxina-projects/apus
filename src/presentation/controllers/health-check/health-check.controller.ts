import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { Controller, Request } from '@/presentation/core';

class HealthCheckController implements Controller {
  public handle = async (
    _request: Request,
  ): Promise<HttpSuccessResponseDTO> => {
    const responseData = new HttpSuccessResponseDTO('API is up');

    return responseData;
  };
}

export { HealthCheckController };
