class AccessTokenPayloadDataDTO {
  private constructor(
    public readonly id: string,
    public readonly username: string,
  ) {}

  static build = ({
    id,
    username,
  }: AccessTokenPayloadDataDTO): AccessTokenPayloadDataDTO => {
    return new AccessTokenPayloadDataDTO(id, username);
  };
}

export { AccessTokenPayloadDataDTO };
