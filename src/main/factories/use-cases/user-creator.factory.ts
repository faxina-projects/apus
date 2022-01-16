import {
  IUserCreatorUseCase,
  UserCreatorUseCase,
} from '@/application/user/use-cases';
import { dayjsAdapter } from '@/infrastructure/driven-adapters';

import { UserRepositoryFactory } from '../repositories';

class UserCreatorFactory {
  private static userCreator: IUserCreatorUseCase;

  private constructor() {}

  static build(): IUserCreatorUseCase {
    if (!this.userCreator) {
      const userRepository = UserRepositoryFactory.build();
      this.userCreator = new UserCreatorUseCase(dayjsAdapter, userRepository);
    }

    return this.userCreator;
  }
}

export { UserCreatorFactory };
