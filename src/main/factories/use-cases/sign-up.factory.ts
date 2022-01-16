import { ISignUpUseCase, SignUpUseCase } from '@/application/sign-up/use-cases';
import { bcryptAdapter } from '@/infrastructure/driven-adapters';

import { AccessTokenGeneratorFactory } from './access-token-generetor.factory';
import { UserCreatorFactory } from './user-creator.factory';
import { UserFinderFactory } from './user-finder.factory';

class SignUpFactory {
  private static signUpUseCase: ISignUpUseCase;

  private constructor() {}

  static build(): ISignUpUseCase {
    if (!this.signUpUseCase) {
      const userFinder = UserFinderFactory.build();
      const userCreator = UserCreatorFactory.build();
      const accessTokenGenerator = AccessTokenGeneratorFactory.build();
      this.signUpUseCase = new SignUpUseCase(
        userFinder,
        bcryptAdapter,
        userCreator,
        accessTokenGenerator,
      );
    }

    return this.signUpUseCase;
  }
}

export { SignUpFactory };
