import path from 'path';
import { ConnectionOptions } from 'typeorm';

export const apusDBConfig: ConnectionOptions = {
  name: 'apus-db',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [path.join(__dirname, '**', 'entities', '*.entity{.ts,.js}')],
  synchronize: false,
};
