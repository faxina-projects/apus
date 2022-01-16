import 'reflect-metadata';
import '@/main/config/env.config';

import { App } from '@/main/app';
import { appConfig } from '@/main/config';

import { postgresDBManager } from './infrastructure/database-access/postgres';

(async (): Promise<void> => {
  try {
    await postgresDBManager.connect();

    const app = new App(appConfig.port);
    app.listen();
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
})();

process.on('uncaughtException', (error: NodeJS.UncaughtExceptionListener) => {
  console.log(error);
});

process.on(
  'unhandledRejection',
  (reason: NodeJS.UnhandledRejectionListener) => {
    console.log(reason);
  },
);
