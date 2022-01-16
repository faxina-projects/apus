export class CreateUserDTO {
  private constructor(
    public readonly username: string,
    public readonly password: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static build = ({
    username,
    password,
    createdAt,
    updatedAt,
  }: CreateUserDTO): CreateUserDTO => {
    return new CreateUserDTO(username, password, createdAt, updatedAt);
  };
}
