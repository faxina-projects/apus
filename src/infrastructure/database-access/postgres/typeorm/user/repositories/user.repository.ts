import { getRepository, Repository } from 'typeorm';

import { CreateUserDTO, UpdateUserDTO, UserDTO } from '@/domain/user/dtos';
import { IUserRepository } from '@/domain/user/repositories';

import { Mapper } from '../../../../mappers';
import { User } from '../entities';
import { UpdateUserException } from '../exceptions';
import { UserMapper } from '../mappers';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;
  private readonly userMapper: Mapper<UserDTO, User>;

  constructor() {
    this.repository = getRepository(User, 'apus-db');
    this.userMapper = new UserMapper();
  }

  create = async (createUserData: CreateUserDTO): Promise<UserDTO> => {
    const userEntity = this.repository.create({ ...createUserData });
    const user = await this.repository.save(userEntity);
    return this.userMapper.toDTO(user);
  };

  update = async (userId: string, userDTO: UpdateUserDTO): Promise<UserDTO> => {
    const rows = await this.repository
      .createQueryBuilder()
      .update()
      .set({
        ...userDTO,
      })
      .where({ id: userId })
      .returning('*')
      .execute();

    const rowsChanged = rows.raw[0];

    if (!rowsChanged) {
      throw new UpdateUserException();
    }

    return this.userMapper.toDTO(rowsChanged);
  };

  findAll = async (): Promise<UserDTO[]> => {
    const users = await this.repository.find();
    return users.map((user) => this.userMapper.toDTO(user));
  };

  findByUsername = async (username: string): Promise<UserDTO | undefined> => {
    const user = await this.repository.findOne({ username });
    return user ? this.userMapper.toDTO(user) : undefined;
  };

  findById = async (id: string): Promise<UserDTO | undefined> => {
    const user = await this.repository.findOne(id);
    return user ? this.userMapper.toDTO(user) : undefined;
  };
}

export { UserRepository };
