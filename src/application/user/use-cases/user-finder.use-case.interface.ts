import { UserDTO } from '@/domain/user/dtos';

interface IUserFinderUseCase {
  findByUsername(username: string): Promise<UserDTO>;
}

export { IUserFinderUseCase };
