import { ExpressController } from '@/main/adapters/express';

import { BaseRouter } from '../base.router';

class SignUpRouter extends BaseRouter {
  constructor(private readonly signUpController: ExpressController) {
    super();
    this.initRoutes();
  }

  protected initRoutes = (): void => {
    this.router.post('/sign-up', this.signUpController.handle);
  };
}

export { SignUpRouter };
