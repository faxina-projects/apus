import { UserDTO } from '@/domain/user/dtos';

import { Mapper } from '../../../../mappers';
import { User } from '../entities';

class UserMapper extends Mapper<UserDTO, User> {
  toDTO = (entity: User): UserDTO => {
    const {
      id,
      username,
      password,
      isTwoFactorAuthEnable,
      twoFactorAuthSecret,
      createdAt,
      updatedAt,
    } = entity;

    return UserDTO.build({
      id,
      username,
      password,
      isTwoFactorAuthEnable,
      twoFactorAuthSecret,
      createdAt,
      updatedAt,
    });
  };
}

export { UserMapper };
