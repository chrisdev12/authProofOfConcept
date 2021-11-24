import { Router, Response, Request } from "express";
import BaseController from "./base.controller";
import { successResponse } from "./types/apiResponses";

export default class HealthCheckporintController extends BaseController {
  constructor() {
    super();
  }

  getRoutes(): Router {
    this.router.get("", this.getHealthCheckpointMessage);

    return this.router;
  }

  private getHealthCheckpointMessage(_: Request, res: Response): Response {
    return successResponse(res, "server working");
  }
}
