interface IClassTransformer {
  instanceToPlain<T>(object: T): Record<string, unknown>;
}

export { IClassTransformer };
