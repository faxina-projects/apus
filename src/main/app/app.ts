import helmet from 'helmet';

import {
  HealthCheckRouterFactory,
  SignUpRouterFactory,
} from '../factories/routers';
import { loggerMiddleware } from '../middlewares';
import { Application, json, ServerApp, urlencoded } from './core';

class App {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = ServerApp();
    this.port = port;
    this.initMiddlewares();
    this.initRoutes();
  }

  private initMiddlewares = (): void => {
    this.app.use(helmet());
    this.app.use(loggerMiddleware.handle);
    this.app.use(urlencoded({ extended: true }));

    this.app.use(json());
  };

  public listen = (): void => {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };

  private initRoutes = (): void => {
    const healthCheckRouter = HealthCheckRouterFactory.build();
    const signUpRouter = SignUpRouterFactory.build();

    this.app.use('/', healthCheckRouter.router);
    this.app.use('/', signUpRouter.router);
  };
}

export { App };
