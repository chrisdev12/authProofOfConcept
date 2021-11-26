import { Response, Request } from "express";
import BaseController from "../common/base.controller";

export default class HealthCheckController extends BaseController {
  getOnlineServerMsg = (_: Request, res: Response): Response =>
    this.successResponse(res, "server working");
}
