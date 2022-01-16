import { Router, RouterType } from '../app/core';

abstract class BaseRouter {
  public router: RouterType;

  constructor() {
    this.router = Router();
  }

  protected abstract initRoutes: () => void;
}

export { BaseRouter };
