import { IDateHelper } from '@/application/shared/helpers';
import { CreateUserDTO, GetUserDTO } from '@/domain/user/dtos';
import { IUserRepository } from '@/domain/user/repositories';

import { IUserCreatorUseCase } from './user-creator.use-case.interface';

class UserCreatorUseCase implements IUserCreatorUseCase {
  constructor(
    private readonly dateHelper: IDateHelper,
    private readonly userRepository: IUserRepository,
  ) {}

  async create(
    createUserData: Omit<CreateUserDTO, 'createdAt' | 'updatedAt'>,
  ): Promise<GetUserDTO> {
    const dateNow = this.dateHelper.iso8601DateNow();
    const createUser = CreateUserDTO.build({
      ...createUserData,
      createdAt: dateNow,
      updatedAt: dateNow,
    });
    const userCreated = await this.userRepository.create(createUser);
    return userCreated;
  }
}

export { UserCreatorUseCase };
