import { Router } from "express";

export default abstract class BaseController {
  protected router: Router;
  constructor() {
    this.router = Router();
  }

  /**
   * @goal getRoutes method should be used to define and return the routes/resources
   * that will be used on the controller
   */

  abstract getRoutes(): Router;
}
