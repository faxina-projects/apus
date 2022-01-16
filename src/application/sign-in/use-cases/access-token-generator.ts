import { IClassTransformer } from '@/application/shared/transformers';

import { AccessTokenPayloadDataDTO } from '../dtos';
import { GenerateAccessTokenException } from '../exceptions';
import { IJwt } from '../ports';
import { IAccessTokenGenerator } from './access-token-generator.interface';

class AccessTokenGenerator implements IAccessTokenGenerator {
  constructor(
    private readonly jwt: IJwt,
    private readonly classTransformer: IClassTransformer,
  ) {}

  generate = (payload: AccessTokenPayloadDataDTO): string => {
    try {
      const plainPayload = this.classTransformer.instanceToPlain(payload);

      const token = this.jwt.sign(
        plainPayload,
        process.env.JWT_ACCESS_TOKEN_SECRET as string,
        {
          expiresIn:
            Number(process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME) * 1000,
        },
      );

      return token;
    } catch (error) {
      throw new GenerateAccessTokenException(error);
    }
  };
}

export { AccessTokenGenerator };
