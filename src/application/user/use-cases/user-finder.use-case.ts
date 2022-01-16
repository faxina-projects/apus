import { HttpBaseException } from '@/application/shared/http/exceptions';
import { UserDTO } from '@/domain/user/dtos';
import { IUserRepository } from '@/domain/user/repositories';

import {
  FindUserByUsernameException,
  UserNotFoundException,
} from '../exceptions';
import { IUserFinderUseCase } from './user-finder.use-case.interface';

class UserFinderUseCase implements IUserFinderUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async findByUsername(username: string): Promise<UserDTO> {
    try {
      const userCreated = await this.userRepository.findByUsername(username);

      if (!userCreated) {
        throw new UserNotFoundException();
      }
      return userCreated;
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }
      throw new FindUserByUsernameException(error.message, error, { username });
    }
  }
}

export { UserFinderUseCase };
