import { Router } from "express";
import AuthTokenMiddleware from "../auth/middlewares/authToken.middleware";
import CognitoJwtValidator from "../auth/services/cognitoJwtValidator";
import HealthCheckController from "./healthCheck.controller";
const healthCheckRouter = Router();
const healthCheckController = new HealthCheckController();
const cognitoJwtValidator = new CognitoJwtValidator();
const authToken = new AuthTokenMiddleware(cognitoJwtValidator);

healthCheckRouter.get("", healthCheckController.getOnlineServerMsg);
healthCheckRouter.post(
  "/verifyToken",
  authToken.verify,
  healthCheckController.getOnlineServerMsg
);

export default healthCheckRouter;
