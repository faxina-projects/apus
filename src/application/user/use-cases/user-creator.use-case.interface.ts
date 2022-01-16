import { CreateUserDTO, GetUserDTO } from '@/domain/user/dtos';

interface IUserCreatorUseCase {
  create(
    createUserData: Omit<CreateUserDTO, 'createdAt' | 'updatedAt'>,
  ): Promise<GetUserDTO>;
}

export { IUserCreatorUseCase };
