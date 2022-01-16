export class UpdateUserDTO {
  private constructor(
    public readonly username?: string,
    public readonly password?: string,
    public readonly isTwoFactorAuthEnable?: boolean,
    public readonly twoFactorAuthSecret?: string,
    public readonly updatedAt?: string,
  ) {}

  static build = ({
    username,
    password,
    isTwoFactorAuthEnable,
    twoFactorAuthSecret,
    updatedAt,
  }: UpdateUserDTO): UpdateUserDTO => {
    return new UpdateUserDTO(
      username,
      password,
      isTwoFactorAuthEnable,
      twoFactorAuthSecret,
      updatedAt,
    );
  };
}
