import {
  IUserFinderUseCase,
  UserFinderUseCase,
} from '@/application/user/use-cases';

import { UserRepositoryFactory } from '../repositories';

class UserFinderFactory {
  private static userFinder: IUserFinderUseCase;

  private constructor() {}

  static build(): IUserFinderUseCase {
    if (!this.userFinder) {
      const userRepository = UserRepositoryFactory.build();
      this.userFinder = new UserFinderUseCase(userRepository);
    }

    return this.userFinder;
  }
}

export { UserFinderFactory };
