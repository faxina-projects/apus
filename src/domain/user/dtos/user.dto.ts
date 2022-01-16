export class UserDTO {
  private constructor(
    public readonly id: string,
    public readonly username: string,
    public readonly password: string,
    public readonly isTwoFactorAuthEnable: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly twoFactorAuthSecret?: string,
  ) {}

  static build = ({
    id,
    username,
    password,
    isTwoFactorAuthEnable,
    twoFactorAuthSecret,
    createdAt,
    updatedAt,
  }: UserDTO): UserDTO => {
    return new UserDTO(
      id,
      username,
      password,
      isTwoFactorAuthEnable,
      createdAt,
      updatedAt,
      twoFactorAuthSecret,
    );
  };
}
