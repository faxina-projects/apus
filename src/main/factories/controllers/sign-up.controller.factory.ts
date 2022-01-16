import { SignUpController } from '@/presentation/controllers';

import { SignUpFactory } from '../use-cases';

class SignUpControllerFactory {
  private static signUpController: SignUpController;

  private constructor() {}

  static build(): SignUpController {
    if (!this.signUpController) {
      const signUpService = SignUpFactory.build();
      this.signUpController = new SignUpController(signUpService);
    }

    return this.signUpController;
  }
}

export { SignUpControllerFactory };
