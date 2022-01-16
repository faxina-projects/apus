import { ExpressHealthCheckControllerAdapter } from '@/main/adapters/express';
import { HealthCheckRouter } from '@/main/routers';

import { HealthCheckControllerFactory } from '../controllers';

class HealthCheckRouterFactory {
  private static healthCheckRouter: HealthCheckRouter;

  private constructor() {}

  static build(): HealthCheckRouter {
    if (!this.healthCheckRouter) {
      const healthCheckController = HealthCheckControllerFactory.build();
      const expressHealthCheckController =
        new ExpressHealthCheckControllerAdapter(healthCheckController);

      this.healthCheckRouter = new HealthCheckRouter(
        expressHealthCheckController,
      );
    }

    return this.healthCheckRouter;
  }
}

export { HealthCheckRouterFactory };
