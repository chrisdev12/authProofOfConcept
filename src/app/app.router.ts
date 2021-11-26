import { Router } from "express";
import authRouter from "../auth/auth.router";
import healthCheckRouter from "../healthCheck/healthCheck.router";

export type ControllerRoute = {
  basePath: string;
  moduleRouter: Router;
};

const ServerRoutes: Array<ControllerRoute> = [
  {
    basePath: "/auth",
    moduleRouter: authRouter,
  },
  {
    basePath: "/health",
    moduleRouter: healthCheckRouter,
  },
];

export default ServerRoutes;
