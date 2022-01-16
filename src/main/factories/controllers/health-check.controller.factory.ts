import { HealthCheckController } from '@/presentation/controllers';
import { Controller } from '@/presentation/core';

class HealthCheckControllerFactory {
  private static healthCheckController: Controller;

  private constructor() {}

  static build(): HealthCheckController {
    if (!this.healthCheckController) {
      this.healthCheckController = new HealthCheckController();
    }

    return this.healthCheckController;
  }
}

export { HealthCheckControllerFactory };
