import { Router } from "express";
import AuthController from "./auth.controller";
import CognitoService from "./services/cognitoService";
const authRouter = Router();
const CognitoAuthService = new CognitoService();
const authController = new AuthController(CognitoAuthService);
authRouter.post("/signup", authController.registerNewUser);
authRouter.post("/refresh", authController.refreshSession);
authRouter.post("", authController.login);

export default authRouter;
