import { ExpressController } from '@/main/adapters/express';

import { BaseRouter } from '../base.router';

class HealthCheckRouter extends BaseRouter {
  constructor(private readonly healthCheckController: ExpressController) {
    super();
    this.initRoutes();
  }

  protected initRoutes = (): void => {
    this.router.get('/health-check', this.healthCheckController.handle);
  };
}

export { HealthCheckRouter };
