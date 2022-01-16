import { NextFunction, Request, Response } from 'express';

import { Controller } from '@/presentation/core';

import { ExpressController } from './express.controller';

class ExpressHealthCheckControllerAdapter extends ExpressController {
  constructor(constroller: Controller) {
    super(constroller);
  }

  public handle = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const responseData = await this.controller.handle(request);

      response.status(responseData.httpStatus).send(responseData);
    } catch (error) {
      next(error);
    }
  };
}

export { ExpressHealthCheckControllerAdapter };
