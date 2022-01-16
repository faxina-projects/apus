import jwt from 'jsonwebtoken';

import {
  IJwt,
  Payload,
  Secret,
  SignOptions,
} from '@/application/sign-in/ports';

import { JwtSignException, JwtVerifyException } from './exceptions';

class JwtAdapter implements IJwt {
  sign = <P extends Payload>(
    payload: P,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
  ): string => {
    try {
      const token = jwt.sign(payload, secretOrPrivateKey, options);
      return token;
    } catch (error) {
      throw new JwtSignException(error, payload);
    }
  };

  verify = <P extends Payload>(
    token: string,
    secretOrPrivateKey: Secret,
  ): P => {
    try {
      const payload = jwt.verify(token, secretOrPrivateKey) as P;
      return payload;
    } catch (error) {
      throw new JwtVerifyException(error, token);
    }
  };
}

const jwtAdapter = new JwtAdapter();

export { jwtAdapter };
