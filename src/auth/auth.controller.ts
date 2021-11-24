import { Response, Router, Request } from "express";
import BaseController from "../app/base.controller";
import { successResponse, errorResponse } from "../app/types/apiResponses";
import CognitoService from "./services/cognitoService";
import IAuthService from "./services/iAuthService";

export default class AuthController extends BaseController {
  private authService: IAuthService;

  constructor() {
    super();
    const cognitoService = new CognitoService();
    this.authService = cognitoService;
  }

  getRoutes(): Router {
    this.router.post("/signup", this.signUpUser);
    this.router.post("", this.signInUser);

    return this.router;
  }

  private signUpUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      await this.authService.signUp({
        email: req.body.email,
        password: req.body.password,
      });

      return successResponse(res, "user created");
    } catch (error) {
      console.log(error);
      return errorResponse(res, error);
    }
  };

  private signInUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const token = await this.authService.signIn({
        email: req.body.email,
        password: req.body.password,
      });

      return successResponse(res, token);
    } catch (error) {
      return errorResponse(res, error, 401);
    }
  };
}
