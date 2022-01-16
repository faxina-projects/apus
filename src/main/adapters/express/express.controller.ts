import { NextFunction, Request, Response } from 'express';

import { Controller } from '@/presentation/core';

abstract class ExpressController {
  constructor(protected readonly controller: Controller) {}

  abstract handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void>;
}

export { ExpressController };
