import { Connection, createConnection } from 'typeorm';

import { IDBManager } from '../inderface';
import { apusDBConfig } from './typeorm/config';

class PostgresDBManager implements IDBManager<Connection> {
  async connect(): Promise<Connection> {
    const connection = await createConnection(apusDBConfig);
    return connection;
  }
}

const postgresDBManager = new PostgresDBManager();

export { postgresDBManager };
