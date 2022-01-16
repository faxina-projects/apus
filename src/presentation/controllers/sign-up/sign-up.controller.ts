import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { ISignUpUseCase } from '@/application/sign-up/use-cases';
import { Controller, Request } from '@/presentation/core';

class SignUpController implements Controller {
  constructor(private readonly signUpUseCase: ISignUpUseCase) {}

  public handle = async (request: Request): Promise<HttpSuccessResponseDTO> => {
    const data = request.body;
    const signUpData = await this.signUpUseCase.signUp(data);
    const responseData = new HttpSuccessResponseDTO(
      signUpData,
      'SignUp successfully',
    );

    return responseData;
  };
}

export { SignUpController };
