export class GetUserDTO {
  private constructor(
    public readonly id: string,
    public readonly username: string,
    public readonly isTwoFactorAuthEnable: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly twoFactorAuthSecret?: string,
  ) {}

  static build = ({
    id,
    username,
    isTwoFactorAuthEnable,
    twoFactorAuthSecret,
    createdAt,
    updatedAt,
  }: GetUserDTO): GetUserDTO => {
    return new GetUserDTO(
      id,
      username,
      isTwoFactorAuthEnable,
      createdAt,
      updatedAt,
      twoFactorAuthSecret,
    );
  };
}
