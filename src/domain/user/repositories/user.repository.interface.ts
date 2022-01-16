import { UserDTO, UpdateUserDTO, CreateUserDTO } from '../dtos';

export interface IUserRepository {
  create: (createUserData: CreateUserDTO) => Promise<UserDTO>;
  update: (userId: string, updateUserData: UpdateUserDTO) => Promise<UserDTO>;
  findAll: () => Promise<UserDTO[]>;
  findByUsername: (username: string) => Promise<UserDTO | undefined>;
  findById: (id: string) => Promise<UserDTO | undefined>;
}
