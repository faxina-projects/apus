import { instanceToPlain } from 'class-transformer';

import { IClassTransformer } from '@/application/shared/transformers';

class ClassTransformerAdapter implements IClassTransformer {
  instanceToPlain<T>(object: T): Record<string, unknown> {
    return instanceToPlain(object);
  }
}

const classTransformerAdapter = new ClassTransformerAdapter();

export { classTransformerAdapter };
