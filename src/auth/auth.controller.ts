import { Response, Router } from "express";
import BaseController from '../server/base.controller';
import CognitoService from './services/cognitoService';
import IAuthService from "./services/iAuthService";

export default class AuthController extends BaseController {
  private signUpResource: string = "/signUp";
  private authService : IAuthService;

  constructor(){
    super();
    const cognitoService = new CognitoService();
    this.authService = cognitoService;
  }

  getRoutes(): Router {
    this.router.post(this.signUpResource, (req: any, res: Response) => {
      this.authService
        .signUp({ email: req.body.email, password: req.body.password })
        .then((result) => res.send(result))
        .catch((error) => res.status(500).json({ error }));
    });

    this.router.get("", (_, res: Response) => {
      return res.json({ g: 2324 });
    });

    return this.router;
  };
}