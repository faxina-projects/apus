import { HttpBaseException } from '@/application/shared/http/exceptions';
import { AccessTokenPayloadDataDTO } from '@/application/sign-in/dtos';
import { IAccessTokenGenerator } from '@/application/sign-in/use-cases';
import {
  UserAlreadyExistsException,
  UserNotFoundException,
} from '@/application/user/exceptions';
import {
  IUserCreatorUseCase,
  IUserFinderUseCase,
} from '@/application/user/use-cases';

import { SignUpDTO } from '../dtos';
import { SignUpException } from '../exceptions';
import { ICryptor } from '../ports';
import { ISignUpUseCase } from './sign-up.use-case.interface';

class SignUpUseCase implements ISignUpUseCase {
  constructor(
    private readonly userFinderUseCase: IUserFinderUseCase,
    private readonly cryptor: ICryptor,
    private readonly userCreatorUseCase: IUserCreatorUseCase,
    private readonly accessTokenGenerator: IAccessTokenGenerator,
  ) {}

  async signUp(signUpData: SignUpDTO): Promise<any> {
    try {
      const { password, username } = signUpData;

      await this.verifyUserAlreadyExists(username);

      const salt = await this.cryptor.genSalt();
      const hashedPassword = await this.cryptor.hash(password, salt);

      const newUser = await this.userCreatorUseCase.create({
        ...signUpData,
        password: hashedPassword,
      });

      const { id } = newUser;

      const accessTokenPayloadData = AccessTokenPayloadDataDTO.build({
        id,
        username,
      });
      const token = this.accessTokenGenerator.generate(accessTokenPayloadData);
      return token;
    } catch (error: any) {
      let message = error.message;
      if (HttpBaseException.isSafeError(error)) {
        message = `${error.message}:${error.reason}`;
      }
      throw new SignUpException(message, error, { signUpData });
    }
  }

  private async verifyUserAlreadyExists(username: string): Promise<void> {
    try {
      await this.userFinderUseCase.findByUsername(username);

      throw new UserAlreadyExistsException();
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        return;
      }
      throw new SignUpException(
        'Failed to verify if user already exists',
        error,
        { username },
      );
    }
  }
}

export { SignUpUseCase };
