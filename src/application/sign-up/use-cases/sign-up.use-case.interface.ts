import { SignUpDTO } from '../dtos';

interface ISignUpUseCase {
  signUp(signUpData: SignUpDTO): Promise<any>;
}

export { ISignUpUseCase };
