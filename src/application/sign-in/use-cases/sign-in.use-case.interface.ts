import { SignInCredentialsDTO, SignInDataDTO } from '../dtos';

interface ISignInUseCase {
  signIn: (signInData: SignInCredentialsDTO) => Promise<SignInDataDTO>;
}

export { ISignInUseCase };
