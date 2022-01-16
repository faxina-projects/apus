import { HttpBaseException } from '@/application/shared/http/exceptions';
import { ICryptor } from '@/application/sign-up/ports';
import { IUserFinderUseCase } from '@/application/user/use-cases';

import {
  AccessTokenPayloadDataDTO,
  SignInCredentialsDTO,
  SignInDataDTO,
} from '../dtos';
import { InvalidCredentialsException, SignInException } from '../exceptions';
import { IAccessTokenGenerator } from './access-token-generator.interface';
import { ISignInUseCase } from './sign-in.use-case.interface';

class SignInUseCase implements ISignInUseCase {
  constructor(
    private readonly userFinder: IUserFinderUseCase,
    private readonly cyptor: ICryptor,
    private readonly accessTokenGenerator: IAccessTokenGenerator,
  ) {}

  signIn = async (signInData: SignInCredentialsDTO): Promise<SignInDataDTO> => {
    try {
      const { username, password } = signInData;

      const user = await this.userFinder.findByUsername(username);

      const { id, password: storedPassword } = user;

      const isValidPassword = await this.cyptor.compare(
        password,
        storedPassword,
      );

      if (!isValidPassword) {
        throw new InvalidCredentialsException();
      }
      const payload = AccessTokenPayloadDataDTO.build({ id, username });

      const accessToken = this.accessTokenGenerator.generate(payload);
      return SignInDataDTO.build({ accessToken });
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }

      throw new SignInException(error.message, error, { signInData });
    }
  };
}

export { SignInUseCase };
