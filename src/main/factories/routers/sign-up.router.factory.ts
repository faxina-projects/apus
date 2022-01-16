import { ExpressSignUpControllerAdapter } from '@/main/adapters/express';
import { SignUpRouter } from '@/main/routers';

import { SignUpControllerFactory } from '../controllers';

class SignUpRouterFactory {
  private static signUpRouter: SignUpRouter;

  private constructor() {}

  static build(): SignUpRouter {
    if (!this.signUpRouter) {
      const healthCheckController = SignUpControllerFactory.build();
      const expressSignUpControllerAdapter = new ExpressSignUpControllerAdapter(
        healthCheckController,
      );

      this.signUpRouter = new SignUpRouter(expressSignUpControllerAdapter);
    }

    return this.signUpRouter;
  }
}

export { SignUpRouterFactory };
