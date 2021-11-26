import { NextFunction, Request, Response } from "express";
import BaseController from "../../common/base.controller";
import ITokenValidator from "../interfaces/iTokenValidator";
import { AccessToken } from "../models/authSession";

export default class AuthTokenMiddleware extends BaseController {
  constructor(private tokenValidator: ITokenValidator) {
    super();
    this.tokenValidator = tokenValidator;
  }
  verify = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    try {
      const accessToken = req.headers["authorization"]?.split(" ")[1];
      if (!accessToken) throw "accessToken is required";
      const token: AccessToken = {
        accessToken,
      };
      const isTokenValid = await this.tokenValidator.verifyToken(token);
      if (!isTokenValid) throw "token invalid";
      return next();
    } catch (error) {
      return this.errorResponse(res, error, 401);
    }
  };
}
