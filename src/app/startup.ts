/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application } from "express";
import express from "express";
import { ControllerRoute } from "./types/controllerRoute";
import dotenv from "dotenv";
dotenv.config();

export default class Server {
  private app: Application;

  /**
   * @param port Port Application listens on
   * @param middleware Array of middleware to be applied to app
   * @param routes Array of express.Router objects for application routes
   */
  constructor(
    private port: number | string,
    middlewares: Array<any>,
    routes: Array<ControllerRoute>
  ) {
    this.app = express();
    this.setUpMiddlewares(middlewares);
    this.setUpRoutes(routes);
  }

  private setUpMiddlewares(mware: any[]) {
    mware.forEach((middleware) => this.app.use(middleware));
  }

  private setUpRoutes(routes: Array<ControllerRoute>) {
    routes.forEach((resource) =>
      this.app.use(resource.basePath, resource.controller.getRoutes())
    );
  }

  public init() {
    this.app.listen(this.port, () => {
      console.log(`The application is listening on port ${process.env.PORT}`);
    });
  }
}
