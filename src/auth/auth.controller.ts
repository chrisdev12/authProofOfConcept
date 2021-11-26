import { Response, Request } from "express";
import BaseController from "../common/base.controller";
import IAuth from "./interfaces/iAuth";

export default class AuthController extends BaseController {
  constructor(private authService: IAuth) {
    super();
    this.authService = authService;
  }

  registerNewUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this.authService.register({
        email: req.body.email,
        password: req.body.password,
      });

      return this.successResponse(res, "user created");
    } catch (error) {
      return this.errorResponse(res, error);
    }
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const token = await this.authService.login({
        email: req.body.email,
        password: req.body.password,
      });

      return this.successResponse(res, token);
    } catch (error) {
      return this.errorResponse(res, error, 401);
    }
  };

  refreshSession = async (req: Request, res: Response): Promise<Response> => {
    try {
      const refeshSessionRequest = {
        email: req.body.email,
        refreshToken: req.body.refreshToken,
      };
      const token = await this.authService.refreshSession(refeshSessionRequest);

      return this.successResponse(res, token);
    } catch (error) {
      return this.errorResponse(res, error, 401);
    }
  };
}
