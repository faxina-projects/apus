import {
  AccessTokenGenerator,
  IAccessTokenGenerator,
} from '@/application/sign-in/use-cases';
import {
  classTransformerAdapter,
  jwtAdapter,
} from '@/infrastructure/driven-adapters';

class AccessTokenGeneratorFactory {
  private static accessTokenGenerator: IAccessTokenGenerator;

  private constructor() {}

  static build(): IAccessTokenGenerator {
    if (!this.accessTokenGenerator) {
      this.accessTokenGenerator = new AccessTokenGenerator(
        jwtAdapter,
        classTransformerAdapter,
      );
    }

    return this.accessTokenGenerator;
  }
}

export { AccessTokenGeneratorFactory };
