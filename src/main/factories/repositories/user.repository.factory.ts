import { IUserRepository } from '@/domain/user/repositories';
import { UserRepository } from '@/infrastructure/database-access/postgres/typeorm/user/repositories';

class UserRepositoryFactory {
  private static userRepository: IUserRepository;

  private constructor() {}

  static build(): IUserRepository {
    if (!this.userRepository) {
      this.userRepository = new UserRepository();
    }

    return this.userRepository;
  }
}

export { UserRepositoryFactory };
