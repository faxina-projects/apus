import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryColumn('uuid', { name: 'id', generated: 'uuid' })
  public id: string;

  @Column('varchar', { name: 'username', unique: true, nullable: false })
  public username: string;

  @Column('varchar', { name: 'password', nullable: false })
  public password: string;

  @Column('boolean', { name: 'is_two_factor_enable', default: false })
  public isTwoFactorAuthEnable: boolean;

  @Column('varchar', { name: 'two_factor_auth_secret', nullable: true })
  public twoFactorAuthSecret?: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: false,
  })
  public createdAt: string;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    nullable: false,
  })
  public updatedAt: string;

  constructor(
    id: string,
    username: string,
    password: string,
    isTwoFactorAuthEnable: boolean,
    twoFactorAuthSecret: string,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.isTwoFactorAuthEnable = isTwoFactorAuthEnable;
    this.twoFactorAuthSecret = twoFactorAuthSecret;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
